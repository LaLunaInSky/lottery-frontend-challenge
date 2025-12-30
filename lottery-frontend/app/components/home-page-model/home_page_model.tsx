import PageBody from "../page-body/page_body";
import PageHeaderTemplate from "./page-header-template/page_header_template";
import PageMainTemplate from "./page-main-template/page_main_template";

const HomePageModel = () => {
    return (
        <PageBody>
            <PageHeaderTemplate />
            <PageMainTemplate />
        </PageBody>
    );
};

export default HomePageModel;