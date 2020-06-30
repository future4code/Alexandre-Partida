import React from "react";

export const Post = props => {
  return (
    <div data-testid="postcard" className={"post-container"}>
      <p>{props.post.text}</p>
      <button data-testid="curtir"
        onClick={() => props.toggleLike(props.post.id)}
        data-testid={"like-button"}
      >
        {props.post.liked ? "Descurtir" : "Curtir"}
      </button>
      <button onClick={() => props.deletePost(props.post.id)}>Apagar</button>
    </div>
  );
};
