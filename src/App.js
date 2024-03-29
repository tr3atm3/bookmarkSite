import AddBookmark from "./components/AddBookmark";
import ShowBookmark from "./components/ShowBookmark";
import Modal from "./components/Modal";

import { useContext } from "react";
import AppContext from "./context/AppContext";
function App() {
  const ctx = useContext(AppContext);

  return (
    <div className="p-4">
      {ctx.toggleModal && <Modal />}
      <AddBookmark />
      <ShowBookmark />
    </div>
  );
}

export default App;
