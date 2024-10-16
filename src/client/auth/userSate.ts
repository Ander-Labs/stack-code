import { create } from "zustand";

type User = {
  avatarUrl: string | null;
  createdAt: string;
  defaultRole: string;
  displayName: string;
  email?: string;
  emailVerified: boolean;
  id: string;
  isAnonymous: boolean;
  locale: string;
  metadata: object | null;
  phoneNumber: string | null;
  phoneNumberVerified: boolean;
  roles: string[];
};

type UserStore = {
  user: User | null;
  accessToken: string | null;
  refreshToken: string | null;
  setUser: (
    user: User | null,
    accessToken: string,
    refreshToken: string
  ) => void;
  clearUser: () => void;
};

export const useUserState = create<UserStore>((set) => ({
  user: null,
  accessToken: null,
  refreshToken: null,
  setUser: (user, accessToken, refreshToken) =>
    set({ user, accessToken, refreshToken }),
  clearUser: () => set({ user: null, accessToken: null, refreshToken: null }),
}));
