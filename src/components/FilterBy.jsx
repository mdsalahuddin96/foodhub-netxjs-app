"use client";
import { Label, ListBox, Select } from "@heroui/react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const FilterBy = () => {
  // const [filterBy,setFilterBy]=useState('burger')
  const [selectedKeys, setSelectedKeys] = useState(new Set());

  const route = useRouter();
  const pathName = usePathname();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);
  useEffect(()=>{
    if(params){
      params.set('category',selectedKeys)
    }
    else{
      params.delete('category')
    }
    route.replace(`${pathName}?${params}`)
  },[selectedKeys])
  
  return (
    <Select
      name="select"
      className="w-[256px]"
      placeholder="Select one"
      selectedKeys={selectedKeys}
      onSelectionChange={setSelectedKeys}
    >
      <Label>Filter By Category</Label>
      <Select.Trigger>
        <Select.Value />
        <Select.Indicator />
      </Select.Trigger>
      <Select.Popover>
        <ListBox>
          <ListBox.Item id="dish" textValue="dish">
            Dish
            <ListBox.ItemIndicator />
          </ListBox.Item>
          <ListBox.Item id="burger" textValue="burger">
            Burger
            <ListBox.ItemIndicator />
          </ListBox.Item>
          <ListBox.Item id="biriyani" textValue="biriyani">
            Biriyani
            <ListBox.ItemIndicator />
          </ListBox.Item>
          <ListBox.Item id="beverage" textValue="beverage">
            Beverage
            <ListBox.ItemIndicator />
          </ListBox.Item>

          {/* <ListBox.Item id="all" textValue="">
            All Category
            <ListBox.ItemIndicator />
          </ListBox.Item> */}
        </ListBox>
      </Select.Popover>
    </Select>
  );
};

export default FilterBy;
