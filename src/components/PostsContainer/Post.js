// You will add code in this file
import React, { useState } from "react";
import CommentSection from "../CommentSection/CommentSectionContainer";
import LikeSection from "./LikeSection";
import PostHeader from "./PostHeader";

import "./Posts.css";

// pass props in this file to
const Post = props => {
  // set up state for the likes
  const[like,setLike] =  useState(props.dataFromParent.likes);

  function IncrementLike(){
    setLikes(likes=> likes+1)
  }
  return (
    <div className="post-border">
      <PostHeader
        username={props.dataFromParent.username}
        thumbnailUrl={
          props.dataFromParent.thumbnailUrl
        }
      />
      <div className="post-image-wrapper">
        <img
          alt="post thumbnail"
          className="post-image"
          src={props.dataFromParent.imageUrl}
        />
      </div>
      <LikeSection />
      <CommentSection
        postId={props.dataFromParent.imageUrl}
        comments={props.dataFromParent.comments}
      />
    </div>
  );
};

export default Post;


