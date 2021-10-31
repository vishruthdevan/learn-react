import React from "react";
import ReactDOM from "react-dom";

import './index.css';
function BookList() {
  return(
    <section className='booklist'>
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = () => {
  
  return (
    <article className='book'>
      <img src="https://images-na.ssl-images-amazon.com/images/I/516pmXNNmCL._SX324_BO1,204,203,200_.jpg" alt="" />
      <h1>The Subtle Art of Not Giving a Fuck</h1>
      <h4>Mark Manson</h4>
    </article>
  );
}


ReactDOM.render(<BookList />, document.getElementById("root"));
