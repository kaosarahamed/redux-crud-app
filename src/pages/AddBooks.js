import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import "../Assits/Style.css";
import { addBooks } from "../fetaures/BookSlice";
function AddBooks() {
  const id = uuidv4();
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const books = { id, title, author };
    dispatch(addBooks(books));
    navigate("/");
  };

  return (
    <div className="addFormSection">
      <h2>Add to list your book Info</h2>
      <div className="addFormcontainer">
        <form onSubmit={handleSubmit} className="Form">
          <div className="inputs">
            <label htmlFor="">Title</label>
            <input
              type="text"
              required
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
              required
              value={author}
              onChange={(e) => {
                setAuthor(e.target.value);
              }}
              name="title"
              id="title"
              placeholder="Enter you book author"
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default AddBooks;
