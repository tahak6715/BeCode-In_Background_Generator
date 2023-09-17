// components/ColorPalettes.js
export default function ColorPalettes({ palettes, onSelectPalette }) {
    return (
        
      <div className="palette-container ">
        <div className="text-4xl font-bold m-4 mt-4 ml-10">Color Palletes</div>
        <div className="bg-yellow-200 p-4 w-[400px] text-center ml-4 flex justify-around font-bold">
        {palettes.map((palette, index) => (
          <button key={index} onClick={() => onSelectPalette(palette)}>
            Palette {index + 1}
          </button>
        ))}
        </div>
      </div>
    );
  }
  