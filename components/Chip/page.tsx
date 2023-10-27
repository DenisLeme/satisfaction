import React from "react";

type ChipValue = "OPC 1" | "OPC 2" | "OPC 3" | "OPC 4" | "OPC 5" | 'OPC 6' | "OPC 7" | "OPC 8";

interface CustomChipProps {
  value: ChipValue;
  onClick: () => void;
  selected: boolean;
}

const CustomChip: React.FC<CustomChipProps> = ({ value, onClick, selected }) => {
  return (
    <div className={`rounded-full p-2 cursor-pointer ${
        selected ? "border border-blue-500" : "border border-slate-900" 
      }`} onClick={onClick}>
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
        
      <CustomChip
        value="OPC 1"
        selected={selectedChips.includes("OPC 1")}
        onClick={() => handleChipClick("OPC 1")}
      />
      <CustomChip
        value="OPC 2"
        selected={selectedChips.includes("OPC 2")}
        onClick={() => handleChipClick("OPC 2")}
      />
      <CustomChip
        value="OPC 3"
        selected={selectedChips.includes("OPC 3")}
        onClick={() => handleChipClick("OPC 3")}
      />
      <CustomChip
        value="OPC 4"
        selected={selectedChips.includes("OPC 4")}
        onClick={() => handleChipClick("OPC 4")}
      />
      <CustomChip
        value="OPC 5"
        selected={selectedChips.includes("OPC 5")}
        onClick={() => handleChipClick("OPC 5")}
      />
      <CustomChip
        value="OPC 6"
        selected={selectedChips.includes("OPC 6")}
        onClick={() => handleChipClick("OPC 6")}
      />
      <CustomChip
        value="OPC 7"
        selected={selectedChips.includes("OPC 7")}
        onClick={() => handleChipClick("OPC 7")}
      />
      <CustomChip
        value="OPC 8"
        selected={selectedChips.includes("OPC 8")}
        onClick={() => handleChipClick("OPC 8")}
      />
    </div>
  );
}
