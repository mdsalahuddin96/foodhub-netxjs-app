import { Button, Label, SearchField } from "@heroui/react";
import React from "react";

const Search = () => {
  return (
    <SearchField name="search">
      <Label>Search Foods</Label>
      <div className="flex">
        <SearchField.Group>
          <SearchField.SearchIcon />
          <SearchField.Input
            className="w-50"
            placeholder="Search Foods..."
          />
          <SearchField.ClearButton />
        </SearchField.Group>
        <Button>Search</Button>
      </div>
    </SearchField>
  );
};

export default Search;
