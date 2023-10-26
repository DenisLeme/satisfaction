// import Chip from "@material-tailwind/react/components/Chip";
// import { useState } from "react";

// type ChipValue = "OPC 1" | "OPC 2" | "OPC 3" | "OPC 4" | "OPC 5";

// export function ChipVariants() {
//   const [selectedChips, setSelectedChips] = useState<ChipValue[]>([]);

//   const handleChipClick = (chipValue: ChipValue) => {
//     if (selectedChips.includes(chipValue)) {
//       setSelectedChips(selectedChips.filter((value) => value !== chipValue));
//     } else {
//       setSelectedChips([...selectedChips, chipValue]);
//     }
//   };

//   return (
//     <div className="flex gap-4">
//       <Chip
//         variant={selectedChips.includes("OPC 1") ? "filled" : "outlined"}
//         value="OPC 1"
//         onClick={() => handleChipClick("OPC 1")}
//       />
//       <Chip
//         variant={selectedChips.includes("OPC 2") ? "filled" : "outlined"}
//         value="OPC 2"
//         onClick={() => handleChipClick("OPC 2")}
//       />
//         <Chip
//         variant={selectedChips.includes("OPC 3") ? "filled" : "outlined"}
//         value="OPC 3"
//         onClick={() => handleChipClick("OPC 3")}
//       />
//       <Chip
//         variant={selectedChips.includes("OPC 4") ? "filled" : "outlined"}
//         value="OPC 4"
//         onClick={() => handleChipClick("OPC 4")}
//       />
//       <Chip
//         variant={selectedChips.includes("OPC 5") ? "filled" : "outlined"}
//         value="OPC 5"
//         onClick={() => handleChipClick("OPC 5")}
//       />
     
//     </div>
//   );
// }