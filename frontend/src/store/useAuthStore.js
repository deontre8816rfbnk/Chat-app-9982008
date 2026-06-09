
import { create } from "zustand";
import { auth } from "../lib/firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, updateProfile } from "firebase/auth";
import toast from "react-hot-toast";

export const useAuthStore = create((set) => ({
  authUser: null,
  isSigningUp: false,
  isLoggingIn: false,
  isUpdatingProfile: false,
  isCheckingAuth: true,

  checkAuth: () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        set({ authUser: user, isCheckingAuth: false });
      } else {
        set({ authUser: null, isCheckingAuth: false });
      }
    });
  },

  signup: async (data) => {
    set({ isSigningUp: true });
    try {
      const res = await createUserWithEmailAndPassword(auth, data.email, data.password);
      await updateProfile(res.user, { displayName: data.fullName });

      set({ authUser: res.user });
      toast.success("Account created successfully");
    } catch (error) {
      toast.error(error.message);
    } finally {
      set({ isSigningUp: false });
    }
  },

  login: async (data) => {
    set({ isLoggingIn: true });
    try {
      const res = await signInWithEmailAndPassword(auth, data.email, data.password);
      set({ authUser: res.user });
      toast.success("Logged in successfully");
    } catch (error) {
      toast.error(error.message);
    } finally {
      set({ isLoggingIn: false });
    }
  },

  logout: async () => {
    try {
      await signOut(auth);
      set({ authUser: null });
      toast.success("Logged out successfully");
    } catch (error) {
      toast.error(error.message);
    }
  },

  updateProfile: async (data) => {
    set({ isUpdatingProfile: true });
    try {
      await updateProfile(auth.currentUser, { displayName: data.fullName, photoURL: data.photoURL });
      set({ authUser: auth.currentUser });
      toast.success("Profile updated successfully");
    } catch (error) {
      toast.error(error.message);
    } finally {
      set({ isUpdatingProfile: false });
    }
  },
}));
