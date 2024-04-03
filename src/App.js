import AddBookmark from "./components/AddBookmark";
import ShowBookmark from "./components/ShowBookmark";
import Modal from "./components/Modal";

import { useContext, useEffect } from "react";
import AppContext from "./context/AppContext";
function App() {
  const ctx = useContext(AppContext);
  const getDataFromCrud = async () => {
    try {
      const response = await fetch(
        "https://crudcrud.com/api/7cecf540f84b48fca1af4087bc9718a1/bookmarks"
      );
      const data = await response.json();
      console.log(data);
      data.forEach((item) =>
        ctx.setUrlList({ name: item.siteName, url: item.siteUrl, id: item._id })
      );
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getDataFromCrud();
  }, []);

  return (
    <div className="p-4">
      {ctx.toggleModal && <Modal />}
      <AddBookmark />
      <ShowBookmark />
    </div>
  );
}

export default App;
