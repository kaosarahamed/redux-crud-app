import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import "../Assits/Style.css";
import { updateBooks } from "../fetaures/BookSlice";
function EditBooks() {
  const location = useLocation();
  const id = location.state.id;
  const [title, setTitle] = useState(location.state.title);
  const [author, setAuthor] = useState(location.state.author);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleEdit = (e) => {
    e.preventDefault();
    dispatch(updateBooks({ id, title, author }));
    navigate("/");
  };

  return (
    <div className="editFormSection">
      <h2>Add to list your book Info</h2>
      <div className="editFormcontainer">
        <form onSubmit={handleEdit} className="Form">
          <div className="inputs">
            <label htmlFor="">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              name="title"
              id="title"
              placeholder="Enter you book title"
            />
          </div>
          <div className="inputs">
            <label htmlFor="">Author</label>
            <input
              type="text"
              value={author}
              onChange={(e) => {
                setAuthor(e.target.value);
              }}
              name="title"
              id="title"
              placeholder="Enter you book author"
            />
          </div>
          <button type="submit">Update Book</button>
        </form>
      </div>
    </div>
  );
}

export default EditBooks;
