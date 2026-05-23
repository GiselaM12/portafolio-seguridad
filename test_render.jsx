import React from 'react';
import { renderToString } from 'react-dom/server';
import DiamondModel from './src/components/DiamondModel.jsx';

try {
    console.log("Rendering...");
    console.log(renderToString(<DiamondModel />));
    console.log("Success!");
} catch (e) {
    console.error("Render failed:", e);
}
