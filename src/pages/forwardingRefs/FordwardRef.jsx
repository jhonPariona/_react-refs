import React from "react";
import { useEffect } from "react";

const CustomComponent = React.forwardRef((props, ref) => {
  return (
    <div>
      <input type="text" ref={ref} />
    </div>
  );
});

const Parent = React.forwardRef((props, ref) => {
  return <CustomComponent ref={ref} />;
});

const GrandParent = () => {
  const nameRef = React.createRef();

  useEffect(() => {
    console.log(nameRef);
    nameRef.current.focus();
  }, [nameRef]);

  return (
    <div>
      <Parent ref={nameRef} />
    </div>
  );
};

export default GrandParent;
