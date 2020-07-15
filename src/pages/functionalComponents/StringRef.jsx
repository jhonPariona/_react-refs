import React from "react";

const Emoji = () => (
  <span role="img" aria-label="rocket">
    🚀
  </span>
);

const StringRef = () => {
  const handleClick = () => {};

  return (
    <>
      <h2>
        String refs <Emoji />
      </h2>

      <input type="text" name="text" id="text" />

      <button onClick={handleClick}>Click</button>
    </>
  );
};

export default StringRef;
