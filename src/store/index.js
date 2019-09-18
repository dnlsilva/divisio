import React, {useState} from 'react';

export const Store = React.createContext({
  userName: '',
  logged: false,
  selectedUser: null,
  setUserName: () => {},
  setSelectedUser: () => {},
});

export const Provider = ({children}) => {
  const setUserName = name => {
    setState({...state, userName: name, logged: true});
  };

  const setSelectedUser = user => {
    setState({...state, selectedUser: user});
  };

  const initState = {
    userName: '',
    logged: false,
    selectedUser: null,
    setUserName: setUserName,
    setSelectedUser: setSelectedUser,
  };

  const [state, setState] = useState(initState);

  return <Store.Provider value={state}>{children}</Store.Provider>;
};
