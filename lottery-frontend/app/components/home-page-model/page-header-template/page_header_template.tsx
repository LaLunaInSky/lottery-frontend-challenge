import ProviderContextShowOptionsComboBox from "@/app/contexts/providers/context_show_options_combo_box.provider";
import ContestNumberDisplay from "./contest-number-display/contest_number_display";
import LotteryLogoAndName from "./lottery-logo-and-name/lottery_logo_and_name";
import LotterySelectionComboBox from "./lottery-selection-combo-box/lottery_selection_combo_box";

interface PageHeaderTemplateProps {
    lottery: {
        name: string,
		number_of_draw: number,
		date_of_draw: string,
    }
}

const PageHeaderTemplate = ({
    lottery
} : PageHeaderTemplateProps) => {
    const {
        name,
        number_of_draw,
        date_of_draw
    } = lottery;

    return (
        <div
            className="
                w-full flex justify-between items-center lg:pl-10 lg:items-start flex-col py-3 md:py-8 h-2/5 lg:h-full lg:w-1/3
            "
        >
            <ProviderContextShowOptionsComboBox>
                <LotterySelectionComboBox />
            </ProviderContextShowOptionsComboBox>
            <LotteryLogoAndName 
                name={name}
            />
            <ContestNumberDisplay 
                number_of_draw={number_of_draw}
                date_of_draw={date_of_draw}
            />
        </div>
    );
};

export default PageHeaderTemplate;