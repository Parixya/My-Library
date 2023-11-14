import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./index.css";

import App from "./App";
import About from "./components/About";
import Books from "./components/Books";
import Book from "./components/Book";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/about" element={<About />} />
          <Route path="/books" element={<Books />} >
          <Route index element={
            <main style={{padding:"1rem"}}>
                <p>لطفا کتاب خود را انتخاب کنید.</p>
            </main>
          }/>
          <Route path=":bookId" element={<Book />} />
          <Route path="*" element={
            <main style={{padding:"1rem"}}>
              <p>گشتم نگرد نگرد نیست.</p>
            </main>
          } />
          
        </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
