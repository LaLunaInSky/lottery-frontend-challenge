import LotteryLogo from "./icons/lottery_logo";

interface LotteryLogoAndNameProps {
    name: string
};

const LotteryLogoAndName = ({
    name
} : LotteryLogoAndNameProps) => {
    return (
        <div
            className="
                flex-col lg:flex-row lg:gap-7 flex justify-center items-center select-none
            "
        >
            <LotteryLogo />
            <h1
                className="
                    font-bold text-white uppercase text-3xl mt-2 lg:mt-0
                "
            >
                { name }
            </h1>
        </div>
    );
};

export default LotteryLogoAndName;