import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover/Cover";
import MenuItems from "../../Shared/MenuItems";

const MenuCategory = ({ items, title, coverBg }) => {
    return (
        <div className="my-4">
            {title && <Cover img={coverBg} title={title}></Cover>}
            <div className="grid grid-cols-2 max-w-5xl mx-auto gap-8 mb-16">
                {
                    items.map(item =>
                        <MenuItems key={item._id} item={item}></MenuItems>)
                }
            </div>
            <Link to={`/order/${title}`}>
                <button className="font-semibold text-xl border-black border-b-4 rounded-xl px-8 py-2 text-black mt-8">Read More</button>
            </Link>
        </div>
    );
};

export default MenuCategory;