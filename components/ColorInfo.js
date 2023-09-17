// components/ColorInfo.js
export default function ColorInfo({ color }) {
    const getRGBValue = (color) => {
        if(color){
      if (color.charAt(0) === '#') {
        color = color.substring(1);
      }
  
      const r = parseInt(color.substring(0, 2), 16);
      const g = parseInt(color.substring(2, 4), 16);
      const b = parseInt(color.substring(4, 6), 16);
  
      return `rgb(${r}, ${g}, ${b})`;
    }
    };
  
    const getHexValue = (color) => {
      return color;
    };
  
    const getHSLValue = (color) => {
        if(color){
      if (color.charAt(0) === '#') {
        color = color.substring(1);
      }
  
      const r = parseInt(color.substring(0, 2), 16) / 255;
      const g = parseInt(color.substring(2, 4), 16) / 255;
      const b = parseInt(color.substring(4, 6), 16) / 255;
  
      const max = Math.max(r, g, b);
      const min = Math.min(r, g, b);
      const lightness = (max + min) / 2;
  
      let hue, saturation;
  
      if (max === min) {
        hue = saturation = 0;
      } else {
        const d = max - min;
        saturation = lightness > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
          case r:
            hue = (g - b) / d + (g < b ? 6 : 0);
            break;
          case g:
            hue = (b - r) / d + 2;
            break;
          case b:
            hue = (r - g) / d + 4;
            break;
        }
        hue /= 6;
      }
  
      const hsl = [Math.round(hue * 360), Math.round(saturation * 100), Math.round(lightness * 100)];
      return `hsl(${hsl[0]}, ${hsl[1]}%, ${hsl[2]}%)`;
    }
    };
  
    return (
      <div className="color-info">
        <h2 className="text-4xl font-bold m-4 mt-4 ml-10" >Color Information</h2>
        <div className="color-values bg-yellow-200 p-4 w-[600px] text-center ml-4 flex justify-around font-bold max-md:w-[400px]">
          <div>
            <strong>RGB:</strong> <span>{getRGBValue(color)}</span>
          </div>
          <div>
            <strong>HEX:</strong> <span>{getHexValue(color)}</span>
          </div>
          <div>
            <strong>HSL:</strong> <span>{getHSLValue(color)}</span>
          </div>
        </div>
      </div>
    );
  }
  