"use client"

import { useContext } from "react";
import FilterContextOfSelectionLottery from "../context_of_selection_lottery.filter";

const UseFilterContextOfSelectionLottery = () => {
    return useContext(
        FilterContextOfSelectionLottery
    );
};

export default UseFilterContextOfSelectionLottery;