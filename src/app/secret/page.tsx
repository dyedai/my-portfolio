"use client";

import React, { useEffect } from "react";
import { useUnicode } from "../UnicodeContext";

export default function SecretPage() {
  const { UnicodeValue, setUnicodeValue } = useUnicode();
  const [inputValue, setInputValue] = React.useState(UnicodeValue.toString());

  useEffect(() => {
    setInputValue(UnicodeValue.toString());
    console.log(UnicodeValue);
  }, [UnicodeValue]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    const numValue = parseInt(value, 10);
    if (!isNaN(numValue) && numValue >= 0) {
      setUnicodeValue(numValue);
    }
  };

  return (
    <div className="text-center">
      <input className="text-2xl border-none outline-none bg-transparent w-6" value={inputValue} onChange={handleChange} />
      <span className="sr-only">このinputタグに0d(Unicode)を打つと。。。？</span>
      <a className="text-2xl">4 This page could not be found.</a>
    </div>
  );
}
