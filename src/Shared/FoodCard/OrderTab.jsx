import FoodCard from "./FoodCard";

const OrderTab = ({ items }) => {
    return (
        <div className="grid md:grid-cols-2 grid-cols-3 max-w-7xl mx-auto gap-5">
            {
                items.map(item => <FoodCard item={item} key={item.id}></FoodCard>)
            }
        </div>
    );
};

export default OrderTab;