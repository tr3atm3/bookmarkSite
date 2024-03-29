import React, { useContext } from "react";
import AppContext from "../context/AppContext";

const ShowBookmark = () => {
  const ctx = useContext(AppContext);

  const handleEditBtn = () => {};

  return (
    <div className="m-8">
      <h2 className="font-bold text-xl">BookMarks</h2>
      <ul>
        {ctx.urlList.length >= 1 &&
          ctx.urlList.map((item) => {
            return (
              <li key={item.id} className="flex items-center">
                <p className="mr-2">{item.name}</p>
                <a className="mr-2 underline" href={item.url}>
                  {item.url}
                </a>
                <button
                  className="bg-red-600 px-2 py-1 mr-2 rounded-lg "
                  onClick={() => {
                    ctx.deleteUrl(item.name);
                  }}
                >
                  Delete
                </button>
                <button
                  className=" px-2 py-1 mr-2 rounded-lg  bg-blue-600"
                  onClick={handleEditBtn}
                >
                  Edit
                </button>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default ShowBookmark;
