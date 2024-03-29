import { useReducer } from "react";
import AppContext from "./AppContext";

const defaultState = {
  urlList: [],
  toggleModal: false,
};

const handleReducer = (state, action) => {
  if (action.type === "TOGGLEMODAL") {
    return {
      ...state,
      toggleModal: action.value,
    };
  }
  if (action.type === "SETURL") {
    const newList = [...state.urlList, action.value];
    return {
      ...state,
      urlList: newList,
    };
  }
  if (action.type === "DELETEURL") {
    const newUrlList = state.urlList.filter(
      (item) => item.name !== action.value
    );
    console.log(newUrlList);
    return {
      ...state,
      urlList: newUrlList,
    };
  }
  return defaultState;
};

const AppProvider = (props) => {
  const [allStates, dispatch] = useReducer(handleReducer, defaultState);

  const setToggleModal = (value) => {
    dispatch({
      type: "TOGGLEMODAL",
      value: value,
    });
  };
  const setUrlList = (value) => {
    dispatch({
      type: "SETURL",
      value: value,
    });
  };

  const deleteUrl = (name) => {
    dispatch({
      type: "DELETEURL",
      value: name,
    });
  };

  const contextValue = {
    urlList: allStates.urlList,
    toggleModal: allStates.toggleModal,
    setToggleModal: setToggleModal,
    setUrlList: setUrlList,
    deleteUrl: deleteUrl,
  };

  return (
    <AppContext.Provider value={contextValue}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppProvider;
