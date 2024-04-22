import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";

import coverBg from '../../assets/menu/banner3.jpg'
import PopularItem from "../Home/PopularItem";

const OurMenu = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <Cover img={coverBg} title={"Our Menu"}></Cover>
            <PopularItem></PopularItem>
        </div>
    );
};

export default OurMenu;