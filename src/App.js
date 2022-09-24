import React from 'react';
import "./App.css";
import Logo from './Logo';
import Hospital from './Hospital';
import Main from './Main';
import Crawled from './Crawled';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from "framer-motion";
import Hpdetail from './Hpdetail';


export default function App() {
    return ( 
        <BrowserRouter>
          <AnimatePresence>
            <Routes>
              <Route path="/test" element={<Crawled />}></Route>
              <Route path="/hospital" element={<Hospital />}></Route>
              <Route path="/" element={<Logo />}></Route>
              <Route path="/Main" element={<Main />}></Route>
              <Route path="/:id" element={<Hpdetail />}></Route>
            </Routes>
          </AnimatePresence>
        </BrowserRouter>
    );
}