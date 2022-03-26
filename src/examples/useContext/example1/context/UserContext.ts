import { createContext } from "react";

interface IUserContext {
  username: string;
}

export const userInitialState = {
  username: "Josue",
};

export const UserContext = createContext<IUserContext>(userInitialState);
