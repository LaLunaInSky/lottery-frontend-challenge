interface DisplayNumberModelProps {
    winning_number: string
}

const DisplayNumberModel = ({
    winning_number
} : DisplayNumberModelProps) => {
    return (
        <div
            className="
                flex justify-center items-center font-bold text-(--color_08) bg-white shadow-md shadow-black/16 w-13 h-13 text-md lg:w-20 lg:h-20 lg:text-2xl rounded-full select-none
            "
        >
            { winning_number }
        </div>
    );
};

export default DisplayNumberModel;