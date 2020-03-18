// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";
//import {dummyData} from "./dummy-data"

const CommentSection = props => {
  const [comments] = useState(props.comments)

  return (
    <div>
      {comments.map((element, step)=>{
        return <Comment key = {step} comment = {element}/> 
      })}
      
      <CommentInput />
      
    </div>
  );
};

export default CommentSection;
