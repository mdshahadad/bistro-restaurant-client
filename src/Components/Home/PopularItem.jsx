import SectionsTitle from "../SectionsTitle/SectionsTitle";
import MenuItems from "../../Shared/MenuItems";
import useMenu from "../../Hooks/useMenu";

const PopularItem = () => {
    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === 'popular');
    console.log(popular)
    return (
        <section>
            <SectionsTitle
                heading="From our menu"
                subheading="Popular Items"
            ></SectionsTitle>
            <div className="grid grid-cols-2 max-w-5xl mx-auto gap-8 mb-16">
                {
                    popular.map(item =>
                        <MenuItems key={item._id} item={item}></MenuItems>)
                }
            </div>
            <div className="text-center mb-8">
                <button className="font-semibold text-2xl border-gray-700 border-b-4 rounded-xl px-8 py-2">View Full Menu</button>
            </div>
        </section>
    );
};

export default PopularItem;