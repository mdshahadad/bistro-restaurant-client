import { useEffect, useState } from "react";
import SectionsTitle from "../SectionsTitle/SectionsTitle";
import MenuItems from "../../Shared/MenuItems";

const PopularItem = () => {
    const [menu, setMenu] = useState([]);
    useEffect(() => {
        fetch('Menu.json')
            .then(res => res.json())
            .then(data => {
                const popularItems = data.filter(item => item.category === 'popular')
                setMenu(popularItems);
            })
    }, [])
    return (
        <section>
            <SectionsTitle
                heading="From our menu"
                subheading="Popular Items"
            ></SectionsTitle>
            <div>
                {
                    menu.map(item =>
                        <MenuItems key={menu._id} item={item}></MenuItems>)
                }
            </div>
        </section>
    );
};

export default PopularItem;