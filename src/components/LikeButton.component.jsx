import { HeartIcon } from "@heroicons/react/24/solid";
import { HeartIcon as HeartIconOutline } from "@heroicons/react/24/outline";
import { useState } from "react";
import { useContext } from "react";
import { ShopContext } from "../context/shop.context";
import axios from "axios";

export default function LikeButton(props) {
  const { product } = props;
  const { isLoggedIn, user, logOutUser } = useContext(ShopContext);
  const [liked, setLiked] = useState(false);
  const [currentIcon, setCurrentIcon] = useState(
    <HeartIconOutline className="h-6 w-6 stroke-2 text-red-700" />
  );

  const addProduct = () => {
    axios
      .post(
        `${process.env.REACT_APP_API_URL}/myproducts/${user._id}?productId=${product._id}`
      )
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const removeProduct = () => {
    axios
      .delete(
        `${process.env.REACT_APP_API_URL}/myproducts/${user._id}/products/${product._id}`
      )
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleClick = () => {
    if (liked === false) {
      setCurrentIcon(<HeartIcon className="h-6 w-6 text-red-700" />);
      setLiked(true);
      addProduct();
    } else {
      setCurrentIcon(
        <HeartIconOutline className="h-6 w-6 stroke-2 text-red-700" />
      );
      setLiked(false);
      removeProduct();
    }
  };

  return (
    <div className="like-button flex justify-center rounded-xl">
      <button onClick={handleClick} className="p-2">
        {currentIcon}
      </button>
    </div>
  );
}
