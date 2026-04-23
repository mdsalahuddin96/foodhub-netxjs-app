"use client";
import { Label, ListBox, Select } from "@heroui/react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const FilterBy = () => {
  const [selectedKeys, setSelectedKeys] = useState("");

  const route = useRouter();
  const pathName = usePathname();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);

  useEffect(() => {
    if (selectedKeys) {
      if (params) {
        params.set("category", selectedKeys);
      } else {
        params.delete("category");
      }
      route.replace(`${pathName}?${params}`);
    }
  }, [selectedKeys]);

  return (
    <Select
      className="w-[256px]"
      placeholder="Select one"
      selectedKey={selectedKeys}
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
        </ListBox>
      </Select.Popover>
    </Select>
  );
};

export default FilterBy;
