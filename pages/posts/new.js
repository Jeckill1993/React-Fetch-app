import React from 'react';
import CreatePostForm from '../../сomponents/createPost.js';
import { withRedux } from '../../lib/redux.js';
import NavBar from '../../сomponents/navbar.js';
import { connect } from 'react-redux';
import { addPostTC } from '../../store.js';

const newPage = ({posts, addPost }) => {
    return (
        <div>
            <NavBar />
            <CreatePostForm addPost={addPost} />
        </div>
    )
}

let mapStateToProps = (state) => {
    return {
        posts: state.posts,
    }
}


//container component
const newPageContainer = connect(mapStateToProps, { addPost: addPostTC })(newPage)

export default withRedux(newPageContainer);