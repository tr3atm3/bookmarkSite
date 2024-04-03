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
  const ctx = useContext(AppContext);
  const siteName = useRef(null);
  const siteUrl = useRef(null);
  console.log(ctx);
  if (ctx.editInfo.name) {
    siteName.current.value = ctx.editInfo.name;
    siteUrl.current.value = ctx.editInfo.url;
  }

  const addInputToCrud = async () => {
    try {
      const response = await fetch(
        "https://crudcrud.com/api/7cecf540f84b48fca1af4087bc9718a1/bookmarks",
        {
          method: "POST",
          body: JSON.stringify({
            siteName: siteName.current.value,
            siteUrl: siteUrl.current.value,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      console.log(data._id);
      ctx.setUrlList({
        name: data.siteName,
        url: data.siteUrl,
        id: data._id,
      });
    } catch (err) {
      console.log(err);
    }
  };

  const handleAddClick = (e) => {
    e.preventDefault();
    if (!siteName.current.value || !siteUrl.current.value) {
      alert("Inputs Missing");
      return;
    } else {
      addInputToCrud();

      ctx.setToggleModal(false);
    }
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
