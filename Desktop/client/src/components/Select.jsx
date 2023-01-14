import React from 'react';
import Select from 'react-select/async';


const SelectInput = (props) => {

  const customStyles = { //style to Select
    valueContainer: (provided, state)=>({
      ...provided,
      overflowY:'auto',
      maxHeight:'2.3rem'
    })
  }

  return (
    <Select
      styles={customStyles}
      {...props}  
    />
  );
}



export default SelectInput;
