import React from "react";
import ReactDOM from "react-dom";

import './index.css';

const firstBook = {
  title: 'The Subtle Art of Not Giving a F*ck',
  author: 'Mark Manson',
  img: 'https://images-na.ssl-images-amazon.com/images/I/516pmXNNmCL._SX324_BO1,204,203,200_.jpg'
}

const secondBook = {
  title: "The Art of the Deal",
  author: "Robert Kiyosaki",
  img: "https://images-na.ssl-images-amazon.com/images/I/61o7T0YhPJS.jpg"
}


function BookList() {
  return(
    <section className='booklist'>
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      />
      <Book 
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
      />
      <Book />
      <Book />
    </section>
  );
}

const Book = (props) => {
  return (
    <article className='book'>
      <img src={props.img} alt="" />
      <h1>{props.title}</h1>
      <h4>{props.author}</h4>
    </article>
  );
}


ReactDOM.render(<BookList />, document.getElementById("root"));
