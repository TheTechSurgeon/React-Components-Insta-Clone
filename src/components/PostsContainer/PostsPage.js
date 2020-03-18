//Complete the necessary code in this file
// import useState
import React from "react";
import Post from "./Post";
import "./Posts.css";
import dummyData from "../../dummy-data"

const PostsPage = () => {
  const[postData] = useState(dummyData);
  return (
    <div className="posts-container-wrapper">
      {postData.map(step =>(
        <Post key={step.imageUrl} dataFromParent={p}/>  
      ))}

    </div>
  );
};

export default PostsPage;

