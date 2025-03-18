import LikeButton from "./likebutton";

const PostCard = ({ post }) => {
  return (
    <div style={{ border: "1px solid #ccc", padding: "10px", margin: "10px" }}>
      <img src={post.profileImage} alt="Profile" width="50" />
      <h3>{post.username}</h3>
      <p>{post.content}</p>
      <LikeButton isLiked={post.isLiked} />
    </div>
  );
};

export default PostCard;
