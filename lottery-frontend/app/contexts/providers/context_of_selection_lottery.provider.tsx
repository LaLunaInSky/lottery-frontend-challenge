"use client"

import { useState } from "react";
import FilterContextOfSelectionLottery from "../filters/context_of_selection_lottery.filter";
import Lotteries from "../filters/enums/lotteries.enum";

const ProviderContextOfSelectionLottery = ({
    children
} : React.PropsWithChildren) => {
    const [
        showSelectLottery,
        setShowSelectLottery
    ] = useState(
        Lotteries.MEGA_SENA
    );

    return (
        <FilterContextOfSelectionLottery.Provider
            value={{
                showSelectLottery,
                setShowSelectLottery
            }}
        >
            { children }
        </FilterContextOfSelectionLottery.Provider>
    );
};

export default ProviderContextOfSelectionLottery;