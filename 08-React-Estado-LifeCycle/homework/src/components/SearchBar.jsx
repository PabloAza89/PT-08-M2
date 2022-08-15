import React from "react";

export default function SearchBar({onSearch}) {
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      onSearch({onSearch});
    }}>
      <input type="text" placeholder="Ciudad..." />
      <input type="submit" value="Agregar" />
    </form>
  );
}
