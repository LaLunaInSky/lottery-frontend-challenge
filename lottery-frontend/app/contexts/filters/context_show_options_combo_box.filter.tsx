"use client"

import { createContext } from "react";

const FilterContextShowOptionsComboBox = createContext({
    showOptionsComboBox: false,
    setShowOptionsComboBox: (value: boolean) => {},
});

export default FilterContextShowOptionsComboBox;