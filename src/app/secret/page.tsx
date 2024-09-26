"use client";

import React, { useEffect } from "react";
import { useUnicode } from "../UnicodeContext";

export default function SecretPage() {
  const { UnicodeValue, setUnicodeValue } = useUnicode();
  const [inputValue, setInputValue] = React.useState(UnicodeValue.toString());
  console.log("お。。。？");

  useEffect(() => {
    setInputValue(UnicodeValue.toString());
    console.log("入力した値：" + UnicodeValue + "Unicode一覧表　https://ja.wikipedia.org/wiki/Unicode%E4%B8%80%E8%A6%A7%E8%A1%A8");
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
