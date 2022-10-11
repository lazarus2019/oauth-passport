import React from "react";
import PropTypes from "prop-types";
import { posts } from "@/data";
import CardItem from "@/components/Card/CardItem";

function PostList(props) {
  return (
    <div className="home">
      {posts.map((post) => (
        <CardItem key={post.id} post={post} />
      ))}
    </div>
  );
}

PostList.propTypes = {};

export default PostList;
