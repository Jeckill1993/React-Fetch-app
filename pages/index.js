import React, { useEffect } from 'react';
import { withRedux } from '../lib/redux';
import Posts from '../сomponents/posts';
import NavBar from '../сomponents/navbar';
import { connect } from 'react-redux';
import {getPostsTC} from '../store.js'

const IndexPage = (props) => {
  useEffect (() => {
    props.getPosts();
  },[])
  return (
    <div>
      <NavBar />
      <h1>Home</h1>
      <Posts posts={props.posts} />
    </div>
  )
}

let mapStateToProps = (state) => {
  return {
      posts: state.posts
  }
}

const IndexPageWithRedux = connect(mapStateToProps, {getPosts: getPostsTC})(IndexPage);

export default withRedux(IndexPageWithRedux);