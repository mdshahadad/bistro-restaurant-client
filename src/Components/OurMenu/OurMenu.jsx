import { Helmet } from "react-helmet-async";

import coverBg from '../../assets/menu/banner3.jpg'
import dessertBg from '../../assets/menu/dessert-bg.jpeg';
import saladBg from '../../assets/menu/salad-bg.jpg';
import pizzaBg from '../../assets/menu/pizza-bg.jpg';
import soupBg from '../../assets/menu/soup-bg.jpg';
import useMenu from "../../Hooks/useMenu";
import SectionsTitle from "../SectionsTitle/SectionsTitle";
import MenuCategory from "./MenuCategory";
import Cover from "../../Shared/Cover/Cover";

const OurMenu = () => {
    const [menu] = useMenu();
    const dessert = menu.filter(item => item.category === 'dessert');
    const soup = menu.filter(item => item.category === 'soup');
    const salad = menu.filter(item => item.category === 'salad');
    const offered = menu.filter(item => item.category === 'offered');
    const pizza = menu.filter(item => item.category === 'pizza');
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <Cover img={coverBg} title={"Our Menu"}></Cover>

            <SectionsTitle subheading={`Don't Miss`} heading={"Today's Offer"}></SectionsTitle>
            <MenuCategory items={offered} title={"offered"} coverBg={coverBg}></MenuCategory>

            {/* Dessert Menu Items */}
            <MenuCategory items={dessert} title="dessert" coverBg={dessertBg}></MenuCategory>
            <MenuCategory items={salad} title="salad" coverBg={saladBg}></MenuCategory>
            <MenuCategory items={pizza} title="pizza" coverBg={soupBg}></MenuCategory>
            <MenuCategory items={soup} title="soup" coverBg={pizzaBg}></MenuCategory>
        </div>
    );
};

export default OurMenu;