import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const FoodCard = ({ item }) => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const handleAddToCart = (food) => {
        if (user && user.email) {
            console.log(user.email)
        } else {
            Swal.fire({
                title: "You are not logged in!",
                text: "Please login to your account",
                icon: "warning",
                // showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Login"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login')
                }
            });
        }
    }
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
                    <button
                        onClick={() => handleAddToCart(item)}
                        className="btn bg-slate-600 text-white">Add To Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;