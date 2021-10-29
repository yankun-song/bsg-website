import React from 'react';

const { createContext, useContext } = React;

const APIContext = createContext({});

export const APIProvider = (props: any) => {

  const value = {
    signIn,
    signUp,
  };

  return (
  
  <APIContext.Provider value={value}>
      {props.children}
    </APIContext.Provider>
  );

};

export const useAPI = () => {
  return useContext(APIContext);
};

export const signUp = (body: any) => {
  
  // ...
  console.log("signUp called ...."); 

};

export const signIn = (body: any) => {
  // ...
  console.log("signIn called ...."); 


  return fetch('http://jsonplaceholder.typicode.com/users'); 


};