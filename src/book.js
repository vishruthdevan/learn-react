import React from "react";

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

export default Book;
