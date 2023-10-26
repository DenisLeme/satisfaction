import { Select, Option } from "@material-tailwind/react";
export default function Dropdown() {
  return (
     <div className="justify-items-start w-10 H-3/5">
       <Select label="Qual loja você frequenta?">
         <Option>Material Tailwind HTML</Option>
         <Option>Material Tailwind React</Option>
         <Option>Material Tailwind Vue</Option>
         <Option>Material Tailwind Angular</Option>
         <Option>Material Tailwind Svelte</Option>
       </Select>
     </div>
  );
}
