import { useReducer } from "react";
import AppContext from "./AppContext";

const defaultState = {
  urlList: [],
  toggleModal: false,
  editInfo: {
    name: null,
    url: null,
  },
};

const handleReducer = (state, action) => {
  if (action.type === "EDITINFO") {
    return {
      ...state,
      editInfo: {
        name: action.value.name,
        url: action.value.url,
      },
    };
  }
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
    const newUrlList = state.urlList.filter((item) => item.id !== action.value);
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

  const deleteUrl = (id) => {
    dispatch({
      type: "DELETEURL",
      value: id,
    });
  };

  const setEditInfo = (data) => {
    dispatch({
      type: "EDITINFO",
      value: data,
    });
  };

  const contextValue = {
    urlList: allStates.urlList,
    toggleModal: allStates.toggleModal,
    editInfo: allStates.editInfo,
    setEditInfo: setEditInfo,
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
