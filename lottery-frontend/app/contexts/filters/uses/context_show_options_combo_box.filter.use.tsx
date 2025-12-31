"use client"

import { useContext } from "react"
import FilterContextShowOptionsComboBox from "../context_show_options_combo_box.filter"

const UseFilterContextShowOptionsComboBox = () => {
    return useContext(
        FilterContextShowOptionsComboBox
    );
};

export default UseFilterContextShowOptionsComboBox;