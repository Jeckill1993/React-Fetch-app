import React from 'react';
import CreatePostForm from '../../сomponents/createPost';
import {withRedux} from '../../lib/redux';
import NavBar from '../../сomponents/navbar';
import {connect} from 'react-redux';
import {addPostTC} from '../../store';
import styled from 'styled-components';

type PropsType = {
    posts: Array<postType>
    addPost: () => void
}
type postType = {
    id: number
    title: string
    body: string
}

const newPage: React.FC<PropsType> = ({posts, addPost}) => {
    return (
        <IndexPageLayout>
            <NavBar/>
            <CreatePostForm addPost={addPost}/>
        </IndexPageLayout>
    )
}

let mapStateToProps = (state) => {
    return {
        posts: state.posts,
    }
}


//container component
const newPageContainer = connect(mapStateToProps, {addPost: addPostTC})(newPage)

export default withRedux(newPageContainer);


const IndexPageLayout = styled.div`
  background:  rgb(212, 212, 224);
  color: rgb(123, 123, 143);
  
  display: grid;
  grid-template-rows: 100px 10fr;
  
  width: 60%;
  margin: auto;
`

