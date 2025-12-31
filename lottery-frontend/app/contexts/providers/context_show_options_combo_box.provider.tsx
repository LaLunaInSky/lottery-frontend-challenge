import { useState } from "react";
import FilterContextShowOptionsComboBox from "../filters/context_show_options_combo_box.filter";

const ProviderContextShowOptionsComboBox = ({
    children
} : React.PropsWithChildren) => {
    const [
        showOptionsComboBox,
        setShowOptionsComboBox
    ] = useState(
        false
    );
    
    return (
        <FilterContextShowOptionsComboBox.Provider
            value={{
                showOptionsComboBox,
                setShowOptionsComboBox
            }}
        >
            { children }
        </FilterContextShowOptionsComboBox.Provider>
    );
};

export default ProviderContextShowOptionsComboBox;