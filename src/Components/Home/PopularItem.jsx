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
            <div className="grid grid-cols-2 max-w-5xl mx-auto gap-8 mb-16">
                {
                    menu.map(item =>
                        <MenuItems key={menu._id} item={item}></MenuItems>)
                }
            </div>
        </section>
    );
};

export default PopularItem;