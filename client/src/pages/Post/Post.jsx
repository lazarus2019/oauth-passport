import { useMemo } from "react";
import { useParams } from "react-router";
import { posts } from "@/data";

import "./post.scss";

function Post() {
  const { id } = useParams();

  const post = useMemo(() => {
    return posts.find((e) => e.id.toString() === id);
  }, [id]);

  return (
    <div className="post">
      <img className="post-img" src={post?.img} alt="" />
      <h1 className="post-title">{post?.title}</h1>
      <p className="post-desc">{post?.desc}</p>
      <p className="post-long-desc">{post?.longDesc}</p>
    </div>
  );
}

export default Post;
