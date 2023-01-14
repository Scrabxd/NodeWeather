import React from 'react';
import { MdSearch } from 'react-icons/md';
import { Form, Input } from 'reactstrap';

const SearchInput = (props) => {
  return (
    <Form inline className="cr-search-form" onSubmit={e => {e.preventDefault()}} style={{width: props.width+'px'}} >
      <MdSearch
        size="25"
        className={"cr-search-form__icon-search text-secondary "+props.className}
      />
      <Input
        id={props.id}
        autoComplete="off"
        type="search"
        className={"cr-search-form__input "+props.className}
        style={{width:'100%'}}
        placeholder={props.placeholder}
        onKeyPress={props.onPress}
        onChange={props.changing}
        disabled={props.disabled}
        bsSize={props.size}

      ></Input>
           
    </Form>
  );
};

export default SearchInput;
