"use client";
import React, { useState } from "react";

export default function SecretPage() {
  const [inputValue, setInputValue] = useState("404");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="text-center">
      <input className="text-2xl border-none outline-none bg-transparent w-10" value={inputValue} onChange={handleChange} />
      <span className="sr-only">このインプットタグにアスキーコードを打つと。。。？</span>
      <a className="ml-2">This page could not be found.</a>
    </div>
  );
}
