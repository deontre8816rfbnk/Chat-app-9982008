
import { create } from "zustand";
import { firestore } from "../lib/firebase";
import { collection, query, where, getDocs, onSnapshot, addDoc, serverTimestamp, orderBy } from "firebase/firestore";
import { useAuthStore } from "./useAuthStore";

export const useChatStore = create((set, get) => ({
  messages: [],
  users: [],
  selectedUser: null,
  isUsersLoading: false,
  isMessagesLoading: false,
  unsubscribe: null,

  getUsers: async () => {
    set({ isUsersLoading: true });
    try {
      const usersRef = collection(firestore, "users");
      const q = query(usersRef, where("uid", "!=", useAuthStore.getState().authUser.uid));
      const querySnapshot = await getDocs(q);
      const users = [];
      querySnapshot.forEach((doc) => {
        users.push(doc.data());
      });
      set({ users });
    } catch (error) {
      console.log("Error in getUsers:", error);
    } finally {
      set({ isUsersLoading: false });
    }
  },

  getMessages: (userId) => {
    set({ isMessagesLoading: true });
    const authUser = useAuthStore.getState().authUser;
    const chatRef = collection(firestore, "chats");
    const q = query(
      chatRef,
      where("participants", "array-contains", authUser.uid),
      orderBy("createdAt", "asc")
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      snapshot.docChanges().forEach((change) => {
        if (change.type === "added") {
          const chat = change.doc.data();
          if (chat.participants.includes(userId)) {
            get().listenForMessages(change.doc.id);
          }
        }
      });
    });
    set({ unsubscribe });
  },

  listenForMessages: (chatId) => {
    const messagesRef = collection(firestore, `chats/${chatId}/messages`);
    const q = query(messagesRef, orderBy("createdAt", "asc"));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const messages = [];
      snapshot.forEach((doc) => {
        messages.push(doc.data());
      });
      set({ messages, isMessagesLoading: false });
    });

    // we need to update the unsubscribe function to the latest one, which is for messages
    set({ unsubscribe });
  },

  sendMessage: async (messageData) => {
    const { selectedUser } = get();
    const authUser = useAuthStore.getState().authUser;

    let chatId = await get().findOrCreateChat(selectedUser.uid);

    const messagesRef = collection(firestore, `chats/${chatId}/messages`);
    await addDoc(messagesRef, {
      ...messageData,
      sender: authUser.uid,
      createdAt: serverTimestamp(),
    });
  },

  findOrCreateChat: async (otherUserId) => {
    const authUser = useAuthStore.getState().authUser;
    const chatRef = collection(firestore, "chats");
    const q = query(chatRef, where("participants", "in", [[authUser.uid, otherUserId], [otherUserId, authUser.uid]]));

    const querySnapshot = await getDocs(q);
    if (!querySnapshot.empty) {
      return querySnapshot.docs[0].id;
    } else {
      const newChatRef = await addDoc(chatRef, {
        participants: [authUser.uid, otherUserId],
        createdAt: serverTimestamp(),
      });
      return newChatRef.id;
    }
  },

  setSelectedUser: (selectedUser) => {
    get().unsubscribe?.();
    set({ selectedUser, messages: [] });
    if (selectedUser) {
      get().getMessages(selectedUser.uid);
    }
  },
}));
