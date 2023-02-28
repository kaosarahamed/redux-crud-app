import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "../Assits/Style.css";
import { deletBooks } from "../fetaures/BookSlice";

function Home() {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.booksReducer.books);
  const handleDelete = (id) => {
    dispatch(deletBooks(id));
  };

  return (
    <div className="booksList">
      <h2>Book Library</h2>
      <div className="bookListContainer">
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Author</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {books &&
              books.map((book) => {
                const { id, title, author } = book;
                return (
                  <tr key={id}>
                    <td>{title}</td>
                    <td>{author}</td>
                    <td>
                      <Link to="edit-book" state={{ id, title, author }}>
                        <button>Edit</button>
                      </Link>
                      <button onClick={() => handleDelete(id)}>Delete</button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Home;
