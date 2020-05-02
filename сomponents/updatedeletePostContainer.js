import React from 'react';
import { withRedux } from '../lib/redux';
import {updatePostTC, deletePostTC} from '../store.js';
import { connect } from 'react-redux';


const UpdateDelete = (props) => {
    let updatePost

    return (
        <div>
            <div><button onClick={updatePost}>Update Post</button></div>
            <div><button onClick={deletePost}>Delete Post</button></div>
        </div>
    )
}

const mapDispatchToProps = (state) => {
    return {
        posts: state.posts,
    }
}

const UpdateDeletePost = connect({updatePostTC, deletePostTC})(UpdateDelete)
export default withRedux(UpdateDeletePost);