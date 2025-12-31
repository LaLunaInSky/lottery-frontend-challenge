"use client"

import UseFilterContextOfSelectionLottery from "@/app/contexts/filters/uses/context_of_selection_lottery.filter.use";
import ArrowDownIcon from "./icons/arrow_down_icon";
import LotterySelectionModel from "./lottery-selection-model/lottery_selection_model";
import UseFilterContextShowOptionsComboBox from "@/app/contexts/filters/uses/context_show_options_combo_box.filter.use";

const LotterySelectionComboBox = () => {
    const {
        showSelectLottery
    } = UseFilterContextOfSelectionLottery();

    const {
        showOptionsComboBox,
        setShowOptionsComboBox
    } = UseFilterContextShowOptionsComboBox();

    const lotteries = [
        "mega-sena",
        "quina",
        "lotofácil",
        "lotomania",
        "timemania",
        "dia de sorte",
    ];

    const ChangeTheVisibilityOfTheOptions = () => {
        switch (showOptionsComboBox) {
            case true:
                setShowOptionsComboBox(false);

                break;
            case false:
                setShowOptionsComboBox(true);

                break;
        }
    }
    
    return (
        <div
            className="
                relative
            "
        >
            <div
                className="
                    flex justify-between items-center bg-white gap-16 py-3 px-7 shadow-md shadow-black/3.5 rounded-xl cursor-pointer transition-all hover:transition-colors hover:bg-neutral-400
                "
                onClick={ChangeTheVisibilityOfTheOptions}
            >
                <p
                    className="
                        text-(--color_08) uppercase select-none font-medium text-sm
                    "
                >
                    {lotteries[showSelectLottery]}
                </p>
                <ArrowDownIcon />
            </div>
            <div
                className={`
                    bg-white rounded-xl absolute w-full shadow-md shadow-black/3.5 overflow-hidden ${showOptionsComboBox ? "block" : "hidden"}
                `}   
            >
                {lotteries.map(
                    (lottery, index) => (
                        <LotterySelectionModel 
                            key={`lottery_selection_name_${lottery}`}
                            name_lottery_selection={lottery}
                            index_name_lottery={index}
                        />
                    )
                )}
            </div>
        </div>
    );
};

export default LotterySelectionComboBox;