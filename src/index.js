import React from "react";
import ReactDOM from "react-dom";

function BookList() {
  return(
    <section>
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article>
      <Image />
      <Title />
      <Author />
    </article>
  );
}

const Image = () => <img src="https://images-na.ssl-images-amazon.com/images/I/516pmXNNmCL._SX324_BO1,204,203,200_.jpg" alt="" />
const Title = () => <h1>The Subtle Art of Not Giving a Fuck</h1>
const Author = () => <h4>Mark Manson</h4>

ReactDOM.render(<BookList />, document.getElementById("root"));
