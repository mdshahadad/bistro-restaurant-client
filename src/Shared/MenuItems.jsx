const MenuItems = ({ item }) => {
    const { name, image, recipe, price } = item;
    console.log(item)
    return (
        <div className="flex items-center gap-5">
            <img className="w-[100px]" style={{ borderRadius: '0 150px 120px 200px' }} src={image} alt="" />
            <div className="flex">
                <div>
                    <h4 className="text-2xl">{name} ------------</h4>
                    <p>{recipe}</p>
                </div>
                <p className="text-yellow-600 mt-2">${price}</p>
            </div>
        </div>
    );
};

export default MenuItems;