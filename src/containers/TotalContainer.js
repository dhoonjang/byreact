import React, { useEffect } from "react";
import Titles from "../components/Titles";
import Content from "../components/Content";
import { getPost } from "../modules/posts";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

const TotalContainer = ({ postsarray, getPost }) => {
  useEffect(() => {
    getPost();
  }, [getPost]);
  return (
    <div>
      <Titles
        titles={postsarray.map(post => ({ title: post.title, id: post.id }))}
      ></Titles>
      {postsarray.map(post => (
        <Route path={`/post/:id`} Component={Content} key={post.id}></Route>
      ))}
    </div>
  );
};

export default connect(
  ({ posts }) => ({
    postsarray: posts.postlist
  }),
  {
    getPost
  }
)(TotalContainer);
