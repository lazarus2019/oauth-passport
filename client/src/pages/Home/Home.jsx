import React from "react";
import { posts } from "@/data";
import CardItem from "@/components/Card/CardItem";
import "./home.scss";

function Home(props) {
  return (
    <div className="home">
      {posts.slice(0, 9).map((post) => (
        <CardItem key={post.id} post={post} />
      ))}
    </div>
  );
}

export default Home;
