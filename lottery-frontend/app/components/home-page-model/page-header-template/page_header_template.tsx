import ContestNumberDisplay from "./contest-number-display/contest_number_display";
import LotteryLogoAndName from "./lottery-logo-and-name/lottery_logo_and_name";
import LotterySelectionComboBox from "./lottery-selection-combo-box/lottery_selection_combo_box";

const PageHeaderTemplate = () => {
    return (
        <div
            className="
                w-full flex justify-between items-center lg:pl-10 lg:items-start flex-col py-3 md:py-8 h-2/5 lg:h-full lg:w-1/3
            "
        >
            <LotterySelectionComboBox />
            <LotteryLogoAndName 
                name="mega-sena"
            />
            <ContestNumberDisplay 
                number_of_draw={4560}
                date_of_draw="07-04-2020"
            />
        </div>
    );
};

export default PageHeaderTemplate;