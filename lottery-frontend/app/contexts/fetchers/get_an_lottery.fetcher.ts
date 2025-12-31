import axios, { AxiosPromise } from "axios";
import END_POINT_API from "./end_point_api";

interface DataLotteryModel {
    data: {
        lottery: {
            name: string,
            number_of_draw: number,
            date_of_draw: string,
            winning_numbers_draw: number[],
        }
    }
}

const FetcherGetAnLottery = (
    query: string
) : AxiosPromise<DataLotteryModel> => {
    return axios.post(
        END_POINT_API(),
        { query }
    );
};

export default FetcherGetAnLottery;