import { createContext } from "react";

const AppContext = createContext({
  urlList: [],
  toggleModal: false,
  setToggleModal: () => {},
  setUrlList: () => {},
  deleteUrl: () => {},
  editUrl: () => {},
});

export default AppContext;
