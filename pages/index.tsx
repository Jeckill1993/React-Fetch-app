import React, { useEffect } from 'react';
import { withRedux } from '../lib/redux.js';
import Posts from '../сomponents/posts';
import NavBar from '../сomponents/navbar';
import { connect } from 'react-redux';
import { getPostsTC } from '../store';
import styled from 'styled-components';

const IndexPage = (props) => {
  useEffect(() => {
    props.getPosts();
  }, [])
  return (
    <IndexPageLayout>
      <NavBar />
      <Posts posts={props.posts} />
    </IndexPageLayout>
  )
}

let mapStateToProps = (state) => {
  return {
    posts: state.posts,
  }
}

const IndexPageWithRedux = connect(mapStateToProps, { getPosts: getPostsTC })(IndexPage);

export default withRedux(IndexPageWithRedux);


const IndexPageLayout = styled.div`
  background:  rgb(212, 212, 224);
  color: rgb(123, 123, 143);
  
  display: grid;
  grid-template-rows: 100px 10fr;
  
  width: 60%;
  margin: auto;
  padding: 10px
`