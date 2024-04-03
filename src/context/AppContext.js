import { createContext } from "react";

const AppContext = createContext({
  urlList: [],
  toggleModal: false,
  editInfo: {
    name: null,
    url: null,
  },
  setToggleModal: () => {},
  setUrlList: () => {},
  deleteUrl: (id) => {},
  editUrl: () => {},
});

export default AppContext;
