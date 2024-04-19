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
            <div className="text-center mb-8">
                <button className="font-semibold text-2xl border-gray-700 border-b-4 rounded-xl px-8 py-2">View Full Menu</button>
            </div>
        </section>
    );
};

export default PopularItem;