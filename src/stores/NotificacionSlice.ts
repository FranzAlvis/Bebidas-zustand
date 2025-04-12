import { StateCreator } from "zustand";
import { FavoritesSliceType } from "./favoritesSlice";

type Notificacion = {
  text: string;
  error: boolean;
  show: boolean;
};

export type NotificacionSliceType = {
  notification: Notificacion;
  showNotification: (payload: Pick<Notificacion, "text" | "error">) => void;
  hideNotification: () => void;
};

export const createNotificationSlice: StateCreator<
  NotificacionSliceType & FavoritesSliceType,
  [],
  [],
  NotificacionSliceType
> = (set, get) => ({
  notification: {
    text: "",
    error: false,
    show: false,
  },
  showNotification: ({ text, error }) => {
    set({ notification: { text, error, show: true } });
    setTimeout(() => {
      get().hideNotification();
    }, 3000);
  },
  hideNotification: () => {
    set({ notification: { text: "", error: false, show: false } });
  },
});
