"use client";

import React from "react";

import { TEXT } from "./Text.config";

const TextContext = React.createContext();

export const TextProvider = ({ children }) => {
  const [positions, _] = React.useState(TEXT.positions);
  const [selectedPosition, setSelectedPosition] = React.useState(positions[0]);

  return (
    <TextContext.Provider
      value={{ positions, selectedPosition, setSelectedPosition }}
    >
      {children}
    </TextContext.Provider>
  );
};

export const useText = () => React.useContext(TextContext);
