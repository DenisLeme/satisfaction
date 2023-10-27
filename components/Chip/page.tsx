import React, { useState } from "react";

type ChipValue = "OPC 1" | "OPC 2" | "OPC 3" | "OPC 4" | "OPC 5" | 'OPC 6' | "OPC 7" | "OPC 8";

interface CustomChipProps {
  value: ChipValue;
  onClick: () => void;
  selected: boolean;
}

const CustomChip: React.FC<CustomChipProps> = ({ value, onClick, selected }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className={`rounded-full p-2 cursor-pointer border transition duration-300 ${
      selected ? "border-blue-500 shadow-lg bg-blue-100" : 
      isHovered ? "border-blue-300 shadow-md bg-blue-50" : 
      "border-slate-900"
    }`} onClick={onClick}
    onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>
      {value}
    </div>
  );
};

export function ChipVariants() {
  const [selectedChips, setSelectedChips] = React.useState<ChipValue[]>([]);

  const handleChipClick = (chipValue: ChipValue) => {
    if (selectedChips.includes(chipValue)) {
      setSelectedChips(selectedChips.filter((value) => value !== chipValue));
    } else {
      setSelectedChips([...selectedChips, chipValue]);
    }
  };

  return (
    <div className="flex gap-4 h-8 rounded-md">
      {["OPC 1", "OPC 2", "OPC 3", "OPC 4", "OPC 5", "OPC 6", "OPC 7", "OPC 8"].map((value) => (
        <CustomChip
          key={value}
          value={value as ChipValue}
          selected={selectedChips.includes(value as ChipValue)}
          onClick={() => handleChipClick(value as ChipValue)}
        />
      ))}
    </div>
  );
}
