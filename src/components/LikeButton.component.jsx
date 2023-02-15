import { HeartIcon } from "@heroicons/react/24/solid";
import { HeartIcon as HeartIconOutline } from "@heroicons/react/24/outline";
import { useState } from "react";

export default function LikeButton(props) {
  const [liked, setLiked] = useState(false);
  const [currentIcon, setCurrentIcon] = useState(
    <HeartIconOutline className="h-6 w-6 stroke-2 text-red-700" />
  );

  const handleClick = () => {
    if (liked === false) {
      setCurrentIcon(<HeartIcon className="h-6 w-6 text-red-700" />);
      setLiked(true);
    } else {
      setCurrentIcon(
        <HeartIconOutline className="h-6 w-6 stroke-2 text-red-700" />
      );
      setLiked(false);
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
