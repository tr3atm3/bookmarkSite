import React, { useContext } from "react";
import AppContext from "../context/AppContext";

const AddBookmark = () => {
  const ctx = useContext(AppContext);
  return (
    <div className="text-center">
      <h1 className="font-bold text-2xl my-4">AddBookmark</h1>
      <button
        className="bg-gray-400 px-4 py-2 rounded-lg"
        onClick={() => {
          ctx.setToggleModal(true);
        }}
      >
        Add
      </button>
    </div>
  );
};

export default AddBookmark;
