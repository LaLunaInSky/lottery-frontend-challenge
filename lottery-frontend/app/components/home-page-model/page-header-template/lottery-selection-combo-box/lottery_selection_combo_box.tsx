import ArrowDownIcon from "./icons/arrow_down_icon";

const LotterySelectionComboBox = () => {
    const lotteries = [
        "mega-sena",
        "quina",
        "lotofácil",
        "lotomania",
        "timemania",
        "dia de sorte",
    ];
    
    return (
        <div
            className="
                flex justify-between items-center bg-white gap-16 py-3 px-7 shadow-md shadow-black/3.5 rounded-xl cursor-pointer
            "
        >
            <p
                className="
                    text-(--color_08) uppercase select-none font-medium text-sm
                "
            >
                {lotteries[0]}
            </p>
            <ArrowDownIcon />
        </div>
    );
};

export default LotterySelectionComboBox;