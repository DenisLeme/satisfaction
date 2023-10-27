import React, { useState } from 'react';

export default function SendButton() {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
  };

  return (
    <div className="rounded-full">
      <button
        className={`rounded-full px-12 py-4 gap-2 w-[187px] h-[56px] ${isClicked ? 'bg-blue-700 text-white' : 'bg-[#FFB800] text-black'}`}
        onClick={handleClick}
      >
        {isClicked ? 'Enviado' : 'Enviar'}
      </button>
    </div>
  );
}
