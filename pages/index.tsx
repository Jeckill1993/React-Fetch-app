import React, { useEffect } from 'react';
import { withRedux } from '../lib/redux';
import Posts from '../сomponents/posts';
import NavBar from '../сomponents/navbar';
import { connect } from 'react-redux';
import {getPostsTC, StateType} from '../store';
import {CommentType, PostType} from "./posts/[id]";
import {MainContainerLayout} from '../сomponents/styled_components/components';

const IndexPage = (props) => {
  useEffect(() => {
    props.getPosts();
  }, [])
  return (
    <MainContainerLayout>
      <NavBar />
      <Posts posts={props.posts} />
    </MainContainerLayout>
  )
}

type MapStatePropsType = {
  posts: Array<PostType>
}
type MapDispatchPropsType = {
  getPosts: () => void
}

let mapStateToProps = (state: StateType) => {
  return {
    posts: state.posts,
  }
}

const IndexPageWithRedux = connect<MapStatePropsType, MapDispatchPropsType, StateType>(mapStateToProps, { getPosts: getPostsTC })(IndexPage);

export default withRedux(IndexPageWithRedux);


