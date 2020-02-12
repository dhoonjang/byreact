import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getPost } from "../modules/posts";

const Content = ({ match, postsarray, getPost }) => {
  useEffect(() => {
    getPost();
  }, []);

  const { id } = match.params;
  const content = postsarray.find(item => {
    return item.id === id;
  });
  if (!content) {
    return <div>존재하지 않는 포스트 입니다.</div>;
  }
  return <div>{content};</div>;
};

export default connect(
  ({ posts }) => ({
    postsarray: posts.postlist
  }),
  {
    getPost
  }
)(Content);
