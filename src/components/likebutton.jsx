import { useState } from "react";

const LikeButton = ({ isLiked }) => {
  const [liked, setLiked] = useState(isLiked);

  return (
    <button
      onClick={() => setLiked(!liked)}
      style={{ color: liked ? "red" : "black" }}
    >
      {liked ? "❤️ Liked" : "♡ Like"}
    </button>
  );
};

export default LikeButton;


