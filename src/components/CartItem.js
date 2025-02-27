import { AiFillDelete } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { toast } from "react-hot-toast";
import { remove } from "../redux/Slices/CartSlice";
import { useState,useEffect } from "react";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  const[Rupee,setRupee]=useState(0);

  useEffect(() => {
    setRupee(item.price * 80);
  }, [item.price]);

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.error("Item Removed From Cart");
  };
  return (
    <div className="flex items-center p-5 justify-between mt-2 mb-2 mx-5 border-b-[3px] border-slate-500  ">
      <div className="flex flex-row p-3 gap-5 items-center">
        <div className="w-[30%]">
          <img src={item.image} className="object-cover" />
        </div>
        <div className="w-[70%] self-start space-y-5 ml-5">
          <h1 className="text-xl text-slate-700 font-semibold">{item.title}</h1>
          <p className="text-base text-slate-700 font-medium">{item.description}</p>
          <div className="flex items-center justify-between">
            <p className="text-green-600 font-bold text-lg">₹{Rupee}</p>
            <button className="text-red-800  bg-red-200 group hover:bg-red-400 transition-transform duration-300 cursor-pointer rounded-full p-3 mr-3" onClick={removeFromCart}>
              <AiFillDelete />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
