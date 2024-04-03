import React, { useContext } from "react";
import AppContext from "../context/AppContext";

const ShowBookmark = () => {
  const ctx = useContext(AppContext);
  const handleDeleteBtn = async (id) => {
    try {
      const response = await fetch(
        `https://crudcrud.com/api/7cecf540f84b48fca1af4087bc9718a1/bookmarks/${id}`,
        {
          method: "DELETE",
        }
      );
      const data = await response.json();

      console.log(data);
    } catch (err) {
      console.log(err);
    } finally {
      console.log(id);
      ctx.deleteUrl(id);
    }
  };

  const editBtnFunctionality = async (id) => {
    console.log(id);
    const response = await fetch(
      `https://crudcrud.com/api/7cecf540f84b48fca1af4087bc9718a1/bookmarks`
    );
    const data = await response.json();
    console.log(data);
    const currentData = data.filter((item) => item._id === id);
    console.log(currentData);
    ctx.setEditInfo({
      name: currentData[0].siteName,
      url: currentData[0].siteUrl,
    });
  };

  const handleEditBtn = (id) => {
    ctx.setToggleModal(true);
    editBtnFunctionality(id);
  };
  console.log(ctx);
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
                  onClick={() => handleDeleteBtn(item.id)}
                >
                  Delete
                </button>
                <button
                  className=" px-2 py-1 mr-2 rounded-lg  bg-blue-600"
                  onClick={() => handleEditBtn(item.id)}
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
