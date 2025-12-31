"use client"

import DisplayNumberModel from "./display-number-model/display_number_model";

interface DisplayOfDrawnNumbersProps {
    winning_numbers_draw: number[]
}

const DisplayOfDrawnNumbers = ({
    winning_numbers_draw
} : DisplayOfDrawnNumbersProps) => {
    return (
        <div
            className="
                w-full h-full flex justify-center items-center
            "
        >
            <div
                className="
                    flex w-max h-max justify-center items-center-safe flex-wrap gap-4
                "
            >
                {winning_numbers_draw.map(
                    (number) => (
                        <DisplayNumberModel
                            key={`winning_number_is_${number}`}
                            winning_number={number < 10 ? `0${number}` : `${number}`}
                        />
                    )
                )}
            </div>
        </div>
    );
};

export default DisplayOfDrawnNumbers;