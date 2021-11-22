import React from "react";
import ReactDOM from "react-dom";
import { books } from "./books";
import Book from "./book";

import "./index.css";
function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        // const { img, title, author } = book;
        return <Book key={book.id} {...book} />;
      })}
    </section>
  );
}

ReactDOM.render(<BookList />, document.getElementById("root"));
