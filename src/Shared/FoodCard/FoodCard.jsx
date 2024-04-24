const FoodCard = ({item}) => {
    const { name, image, recipe, price } = item;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-4 pt-5">
                <img src={image} alt="Shoes" className="rounded-xl" />
            </figure>
            <p className="bg-slate-900 absolute text-white right-8 top-8 px-2 rounded-md">${price}</p>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;