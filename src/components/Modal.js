import React, { useContext, useRef } from "react";
import { createPortal } from "react-dom";
import AppContext from "../context/AppContext";

const BackDrop = () => {
  const ctx = useContext(AppContext);

  return (
    <div
      className="w-[100%] h-[100vh] absolute top-0 left-0 bg-black opacity-80 z-10"
      onClick={() => {
        ctx.setToggleModal(false);
      }}
    ></div>
  );
};

const Overlay = () => {
  const siteName = useRef(null);
  const siteUrl = useRef(null);

  const ctx = useContext(AppContext);

  const handleAddClick = (e) => {
    e.preventDefault();
    const item = {
      id: Math.random(),
      name: siteName.current.value,
      url: siteUrl.current.value,
    };
    ctx.setUrlList(item);
    ctx.setToggleModal(false);
  };
  return (
    <div className=" w-[40%] z-20 absolute top-[30%] left-[30%] ">
      <form
        className="flex flex-col bg-white p-8 rounded-lg"
        onSubmit={handleAddClick}
      >
        <input
          className="bg-gray-200 px-4 py-2 text-lg rounded-lg text-black focus:outline-0 my-2"
          type="text"
          placeholder="Name"
          ref={siteName}
        />
        <input
          className="bg-gray-200 px-4 py-2 text-lg rounded-lg text-black focus:outline-0 my-2"
          type="text"
          placeholder="Url"
          ref={siteUrl}
        />
        <button className="bg-red-600 rounded-lg px-4 py-2 my-2 text-lg">
          Add
        </button>
      </form>
    </div>
  );
};

const Modal = () => {
  const portal = document.getElementById("overlay");
  return (
    <>
      {createPortal(<BackDrop />, portal)}
      {createPortal(<Overlay />, portal)}
    </>
  );
};

export default Modal;
