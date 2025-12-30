interface ContestNumberDisplayProps {
    number_of_draw: number,
    date_of_draw: string
}

const ContestNumberDisplay = ({
    number_of_draw,
    date_of_draw
} : ContestNumberDisplayProps) => {
    const dateReplacement = date_of_draw.replaceAll("-", "/")

    return (
        <div
            className="
                flex lg:flex-col justify-center items-center lg:items-start gap-1 *:font-medium *:text-sm *:text-white uppercase 
            "
        >
            <p
                className="
                    select-none lg:text-xs
                "
            >
                concurso
            </p>
            <p
                className="
                    block lg:hidden
                "
            >
                nº {number_of_draw}
            </p>
            <p
                className="
                    hidden lg:block lg:font-bold lg:text-lg
                "
            >
                {number_of_draw} - {dateReplacement}
            </p>
        </div>
    );
};

export default ContestNumberDisplay;