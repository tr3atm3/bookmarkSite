import { createContext } from "react";

const AppContext = createContext({
  toggleModal: false,
  setToggleModal: () => {},
});

export default AppContext;
