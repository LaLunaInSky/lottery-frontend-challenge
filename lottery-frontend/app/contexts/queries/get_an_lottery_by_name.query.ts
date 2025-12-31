const QueryGetAnLotteryByName = (
    name_lottery: string
) => {
    return `
        query GetAnLottery {
            lottery(
                name: "${name_lottery}"
            ) {
                name
                number_of_draw
                date_of_draw
                winning_numbers_draw
            }
        }
    `;
};

export default QueryGetAnLotteryByName