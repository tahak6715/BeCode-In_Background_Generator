// components/ColorHistory.js
import { useState } from 'react';

export default function ColorHistory({ colors, onSelectColor }) {
  return (
    <div className="color-history">
      <h2 className='text-4xl font-bold m-4 mt-10 ml-10' >Color History</h2>
      <div className="color-list bg-yellow-200 p-4 w-[400px] text-center justify-center ml-4">
        {colors.map((color, index) => (
          <div
            key={index}
            className="color-item "
            style={{ backgroundColor: color }}
            onClick={() => onSelectColor(color)}
          ></div>
        ))}
      </div>
    </div>
  );
}
