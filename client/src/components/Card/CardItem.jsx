import React from "react";
import PropTypes from "prop-types";
import "./card.scss";
import { Link } from "react-router-dom";

function CardItem({ post }) {
  return (
    <div className="card">
      <span className="title">{post.title}</span>
      <img src={post.img} alt="" />
      <p className="desc">{post.desc}</p>
      <Link to={`/post/${post.id}`}>
        <button className="card-btn">Read more</button>
      </Link>
    </div>
  );
}

CardItem.propTypes = {};

export default CardItem;
