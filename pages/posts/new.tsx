import React from 'react';
import CreatePostForm from '../../сomponents/createPost';
import {withRedux} from '../../lib/redux.js';
import NavBar from '../../сomponents/navbar';
import {connect} from 'react-redux';
import {addPostTC} from '../../store';

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
        <div>
            <NavBar/>
            <CreatePostForm addPost={addPost}/>
        </div>
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