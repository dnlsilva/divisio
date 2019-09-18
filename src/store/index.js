import React, {useState} from 'react';

export const Store = React.createContext({
  user: {name: ''},
  logged: false,
  setLogged: () => {},
  setUser: () => {},
});

export const Provider = ({children}) => {
  const setLogged = logged => {
    setState({...state, logged: logged});
  };
  const setUser = obj => {
    setState({...state, user: obj});
  };

  const initState = {
    user: {name: ''},
    logged: false,
    setUser: setUser,
    setLogged: setLogged,
  };

  const [state, setState] = useState(initState);

  return <Store.Provider value={state}>{children}</Store.Provider>;
};
