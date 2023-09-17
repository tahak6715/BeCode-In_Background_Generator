"use client";

// pages/index.js
import { useState } from 'react';
import Head from 'next/head';
import ColorHistory from '../components/ColorHistory';
import ColorPalettes from '../components/ColorPalletes';
import ColorInfo from '../components/ColorInfo';

export default function Home() {
  const [colors, setColors] = useState([]);

  function onSelectColor(color) {
    document.body.style.backgroundColor = color;
    setColors([color, ...colors.slice(0, 4)]);
  }

  const palettes = [
    ['#3498db', '#e74c3c', '#2ecc71'],
    ['#f39c12', '#9b59b6', '#34495e'],
  ]

  function onSelectPalette(palette) {
    const randomColor = palette[Math.floor(Math.random() * palette.length)];
    onSelectColor(randomColor);
  }

  return (
    <div className="container">
      <Head>
        <title>Background Generator App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className='text-4xl font-bold my-4 font-serif underline-offset-2 text-black text-center'>Background Generator</h1>
        <ColorHistory colors={colors} onSelectColor={onSelectColor} />
        <ColorPalettes palettes={palettes} onSelectPalette={onSelectPalette} />
        <ColorInfo color={colors[0]} />
      </main>

      

      <style jsx>{`
        /* Add your CSS styles here */
      `}</style>
    </div>
  );
}
