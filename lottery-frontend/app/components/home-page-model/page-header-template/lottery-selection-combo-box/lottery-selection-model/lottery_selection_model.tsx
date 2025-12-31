"use client"

import Lotteries from "@/app/contexts/filters/enums/lotteries.enum";
import UseFilterContextOfSelectionLottery from "@/app/contexts/filters/uses/context_of_selection_lottery.filter.use";
import UseFilterContextShowOptionsComboBox from "@/app/contexts/filters/uses/context_show_options_combo_box.filter.use";

interface LotterySelctionModelProps {
    name_lottery_selection: string,
    index_name_lottery: number
}

const LotterySelectionModel = ({
    name_lottery_selection,
    index_name_lottery
} : LotterySelctionModelProps) => {
    const {
        showSelectLottery,
        setShowSelectLottery
    } = UseFilterContextOfSelectionLottery();

    const {
        setShowOptionsComboBox
    } = UseFilterContextShowOptionsComboBox();

    const ChangedTheSelectedLottery = () => {
        switch (index_name_lottery) {
            case 0:
                setShowSelectLottery(
                    Lotteries.MEGA_SENA
                );

                break;
            case 1:
                setShowSelectLottery(
                    Lotteries.QUINA
                );

                break;
            case 2:
                setShowSelectLottery(
                    Lotteries.LOTOFACIL
                );

                break;
            case 3:
                setShowSelectLottery(
                    Lotteries.LOTOMANIA
                );

                break;
            case 4:
                setShowSelectLottery(
                    Lotteries.TIMEMANIA
                );

                break;
            case 5:
                setShowSelectLottery(
                    Lotteries.DIA_DE_SORTE
                );

                break;
        }

        setShowOptionsComboBox(false);
    }

    if (
        showSelectLottery !== index_name_lottery
    ) {
        return (
            <div
                className="
                    py-3 px-7 cursor-pointer text-(--color_08) uppercase select-none font-medium text-sm hover:bg-black/10 transition-all hover:transition-colors border-y border-black/10
                "
                onClick={ChangedTheSelectedLottery}
            >
                { name_lottery_selection }
            </div>
        );
    }
};

export default LotterySelectionModel;