import React from "react";

const SearchBar = ({ name, label, onChange, ...rest }) => {
  return (
    <div className="input-group mb-3">
      <input
        {...rest}
        id={name}
        name={name}
        className="form-control form-control-lg"
        placeholder={label}
        autoFocus
        onChange={e => onChange(e.currentTarget.value)}
      />
    </div>
  );
};

export default SearchBar;
