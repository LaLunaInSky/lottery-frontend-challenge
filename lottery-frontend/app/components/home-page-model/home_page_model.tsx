"use client"

import UseFilterContextOfSelectionLottery from "@/app/contexts/filters/uses/context_of_selection_lottery.filter.use";
import PageBody from "../page-body/page_body";
import PageHeaderTemplate from "./page-header-template/page_header_template";
import PageMainTemplate from "./page-main-template/page_main_template";
import Lotteries from "@/app/contexts/filters/enums/lotteries.enum";

const HomePageModel = () => {
    const {
        showSelectLottery
    } = UseFilterContextOfSelectionLottery();

    let NameLottery = "";

    switch (showSelectLottery) {
        case Lotteries.MEGA_SENA:
            NameLottery = "mega-sena";

            break;
        case Lotteries.QUINA:
            NameLottery = "quina";

            break;
        case Lotteries.LOTOFACIL:
            NameLottery = "lotofácil";

            break;
        case Lotteries.LOTOMANIA:
            NameLottery = "lotomania";

            break;
        case Lotteries.TIMEMANIA:
            NameLottery = "timemania";

            break;
        case Lotteries.DIA_DE_SORTE:
            NameLottery = "dia de sorte";

            break;
    }

    const lottery = {
        name: NameLottery,
        number_of_draw: 4531,
		date_of_draw: "07-04-2020",
    }

    return (
        <PageBody>
            <PageHeaderTemplate 
                lottery={lottery}
            />
            <PageMainTemplate />
        </PageBody>
    );
};

export default HomePageModel;