import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import React from "react";

import { BackgroundBeamsWithCollision } from "./components/ui/background-beams-with-collision";
import { NavBar } from './NavBar';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BackgroundBeamsWithCollision className="bg-gradient-to-b from-black via-zinc-950 to-slate-900">
      <div className="text-center">
        <h2
          className="text-2xl relative z-20 md:text-4xl lg:text-7xl font-bold text-center text-white font-sans tracking-tight">
          What&apos;s your Qr Code?{" "}
          <div
            className="relative font-sans mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">

            <div
              className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4">
              <span className="font-sans">Create One Now.</span>
            </div>
          </div>
        </h2>
        <NavBar />
        <App />
      </div>
    </BackgroundBeamsWithCollision>
  </StrictMode>,
)
