"use client"

import Lotteries from "@/app/contexts/filters/enums/lotteries.enum";
import UseFilterContextOfSelectionLottery from "@/app/contexts/filters/uses/context_of_selection_lottery.filter.use";

const PageBody = ({
    children
} : React.PropsWithChildren) => {
    const {
        showSelectLottery
    } = UseFilterContextOfSelectionLottery();

    let BackgroundColor = "bg-(--color_07)";

    switch (showSelectLottery) {
        case Lotteries.MEGA_SENA:
            BackgroundColor = "bg-(--color_01)";

            break;
        case Lotteries.QUINA:
            BackgroundColor = "bg-(--color_02)";

            break;
        case Lotteries.LOTOFACIL:
            BackgroundColor = "bg-(--color_03)";

            break;
        case Lotteries.LOTOMANIA:
            BackgroundColor = "bg-(--color_04)";

            break;
        case Lotteries.TIMEMANIA:
            BackgroundColor = "bg-(--color_05)";

            break;
        case Lotteries.DIA_DE_SORTE:
            BackgroundColor = "bg-(--color_06)";

            break;
    }

    return (
        <main
            className={`
                ${BackgroundColor} h-dvh w-dvw flex flex-col lg:flex-row justify-center items-center
            `}
        >
            {children}
        </main>
    );
};

export default PageBody;