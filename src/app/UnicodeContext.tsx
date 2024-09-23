"use client";

import React, { createContext, useState, useContext } from "react";

interface UnicodeContextType {
  UnicodeValue: number;
  setUnicodeValue: React.Dispatch<React.SetStateAction<number>>;
}

const UnicodeContext = createContext<UnicodeContextType | undefined>(undefined);

export const UnicodeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [UnicodeValue, setUnicodeValue] = useState(40);

  return <UnicodeContext.Provider value={{ UnicodeValue, setUnicodeValue }}>{children}</UnicodeContext.Provider>;
};

export const useUnicode = () => {
  const context = useContext(UnicodeContext);
  if (context === undefined) {
    throw new Error("useUnicode must be used within an UnicodeProvider");
  }
  return context;
};
