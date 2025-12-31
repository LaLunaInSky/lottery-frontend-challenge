"use client"

import UseFilterContextOfSelectionLottery from "@/app/contexts/filters/uses/context_of_selection_lottery.filter.use";
import PageBody from "../page-body/page_body";
import PageHeaderTemplate from "./page-header-template/page_header_template";
import PageMainTemplate from "./page-main-template/page_main_template";
import Lotteries from "@/app/contexts/filters/enums/lotteries.enum";
import { useQuery } from "@tanstack/react-query";
import FetcherGetAnLottery from "@/app/contexts/fetchers/get_an_lottery.fetcher";
import QueryGetAnLotteryByName from "@/app/contexts/queries/get_an_lottery_by_name.query";
import LotteryNotFound from "./lottery-not-found/lottery_not_found";
import LotteryLoading from "./lottery-loading/lottery_loading";

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

    const {
        data,
        isLoading
    } = useQuery({
        queryFn: () => FetcherGetAnLottery(
            QueryGetAnLotteryByName(
                NameLottery
            )
        ),
        queryKey: [
            "lottery",
            NameLottery
        ],
    });

    const lottery = data?.data?.data?.lottery;

    if (
        !isLoading
    ) {
        if (
            lottery
        ) {
            return (
                <PageBody>
                    <PageHeaderTemplate 
                        lottery={{
                            name: lottery.name,
                            number_of_draw: lottery.number_of_draw,
                            date_of_draw: lottery.date_of_draw
                        }}
                    />
                    <PageMainTemplate 
                        lottery={{
                            winning_numbers_draw: lottery.winning_numbers_draw,
                        }}
                    />
                </PageBody>
            );
        } else {
            return (
                <LotteryNotFound />
            );
        }
    } else {
        return (
            <LotteryLoading />
        );
    }
};

export default HomePageModel;