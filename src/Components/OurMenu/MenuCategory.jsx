import Cover from "../../Shared/Cover/Cover";
import MenuItems from "../../Shared/MenuItems";

const MenuCategory = ({ items, title, coverBg }) => {
    return (
        <div>
            {title && <Cover img={coverBg} title={title}></Cover>}
            <div className="grid grid-cols-2 max-w-5xl mx-auto gap-8 mb-16">
                {
                    items.map(item =>
                        <MenuItems key={item._id} item={item}></MenuItems>)
                }
            </div>
        </div>
    );
};

export default MenuCategory;