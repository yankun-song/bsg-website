import React, { useState } from "react";
import { DApplication, DBusiness, DUser } from "../model";

const myApp = {
  user: {
    linkedInFirstname: "Jingjin000",
  } as DUser,
  business: {} as DBusiness,
};

const setMyApp = (myApp: DApplication) => {};

export const ApplicationContext = React.createContext([myApp, setMyApp]);
