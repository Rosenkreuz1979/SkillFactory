import React from 'react';

const ButtonAdd = ({children,...props}) => {
  return (
    <>
      <button {...props}  >
        {children}
      </button>
    </>
  );
};

export default ButtonAdd;
