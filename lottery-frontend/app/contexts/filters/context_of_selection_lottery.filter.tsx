"use client"

import { createContext } from "react"
import Lotteries from "./enums/lotteries.enum";

const FilterContextOfSelectionLottery = createContext({
    showSelectLottery: Lotteries.MEGA_SENA,
    setShowSelectLottery: (value: Lotteries) => {},
});

export default FilterContextOfSelectionLottery;