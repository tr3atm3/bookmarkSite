import { useReducer } from "react";
import AppContext from "./AppContext";

const defaultState = {
  toggleModal: false,
};

const handleReducer = (state, action) => {
  if (action.type === "TOGGLEMODAL") {
    return {
      ...state,
      toggleModal: action.value,
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

  const contextValue = {
    toggleModal: allStates.toggleModal,
    setToggleModal: setToggleModal,
  };

  return (
    <AppContext.Provider value={contextValue}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppProvider;
