import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

const books = [
  {
    id: 1,
    title: "The Subtle Art of Not Giving a F*ck",
    author: "Mark Manson",
    img: "https://images-na.ssl-images-amazon.com/images/I/516pmXNNmCL._SX324_BO1,204,203,200_.jpg",
  },

  {
    id: 2,
    title: "The Art of the Deal",
    author: "Robert Kiyosaki",
    img: "https://images-na.ssl-images-amazon.com/images/I/61o7T0YhPJS.jpg",
  },

  {
    id: 3,
    title: "The Da Vince Code",
    author: "Dan Brown",
    img: "https://images-na.ssl-images-amazon.com/images/I/61voOxiNf9L.jpg",
  },
];

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

const Book = ({ img, title, author, children }) => {
  const clickHandler = (e) => {
    // console.log(author);
    console.log(e.target);
  };
  return (
    <article
      className="book"
      onMouseDown={() => {
        console.log(title);
      }}
    >
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
      <button type="button" onClick={clickHandler}>
        click me
      </button>
      {children}
    </article>
  );
};

ReactDOM.render(<BookList />, document.getElementById("root"));
