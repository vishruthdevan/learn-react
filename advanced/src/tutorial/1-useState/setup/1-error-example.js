import React from "react";

const ErrorExample = () => {
  let title = "random title";
  const handleClick = () => {
    title = "sup";
  };
  return (
    <React.Fragment>
      <h2>{title}</h2>
      <button type="button" className="btn" onClick={handleClick}>
        change title
      </button>
    </React.Fragment>
  );
  return <h2>useState error example</h2>;
};

export default ErrorExample;
