'use client'
import { Button, Label, SearchField } from "@heroui/react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import React, { useState } from "react";

const Search = () => {
  const [searchInp,setSearchInp]=useState()
  const route = useRouter();
  const pathName = usePathname();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);
  const handleSearch=()=>{
    if (params) {
        params.set("search", searchInp);
      } else {
        params.delete("search");
      }
      route.replace(`${pathName}?${params}`);
    }
  
  return (
    <SearchField name="search">
      <Label>Search Foods</Label>
      <div className="flex">
        <SearchField.Group>
          <SearchField.SearchIcon />
          <SearchField.Input className="w-50" placeholder="Search Foods..." value={searchInp} onChange={(e)=>setSearchInp(e.target.value)} />
          <SearchField.ClearButton onClick={()=>setSearchInp('')} />
        </SearchField.Group>
        <Button onClick={handleSearch}>Search</Button>
      </div>
    </SearchField>
  );
};

export default Search;
