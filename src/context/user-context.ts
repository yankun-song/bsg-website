import React from "react";
import { ContextService } from "./context-service";

//export const UserContext = React.createContext(new ContextService());

const context = new ContextService();
const contextUpdate = false;

const forceUpdate = () => {};
export const UserContext = React.createContext({
  context,
  contextUpdate,
  forceUpdate,
});

export const UserContextProvider = UserContext.Provider;
