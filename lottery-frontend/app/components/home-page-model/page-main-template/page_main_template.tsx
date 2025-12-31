"use client"

import DisplayOfDrawnNumbers from "./display-of-drawn-numbers/display_of_drawn_numbers";
import TextAboutTheContent from "./text-about-the-content/text_about_the_content";

interface PageMainTemplateProps {
    lottery: {
        winning_numbers_draw: number[]
    }
}

const PageMainTemplate = ({
    lottery
} : PageMainTemplateProps) => {
    const {
        winning_numbers_draw
    } = lottery;
    
    return (
        <div
            className="
                flex flex-col justify-between px-2 items-center bg-(--color_07) h-3/5 w-full lg:h-full lg:w-2/3 lg:py-8
            "
        >
            <DisplayOfDrawnNumbers 
                winning_numbers_draw={winning_numbers_draw}
            />
            <TextAboutTheContent />
        </div>
    );
};

export default PageMainTemplate;