import React from 'react';
import PostPage from "../../сomponents/post.js";
import { withRedux } from '../../lib/redux.js';
import { connect } from 'react-redux';
import { useRouter } from 'next/router';
import { updatePostTC, deletePostTC, getPostCommentsTC, addCommentTC } from '../../store.js';



const PostHome = ({ posts, comments, updatePost, deletePost, getPostComments, addComment }) => {
    const router = useRouter();
    let post = posts.find(elem => elem.id == router.query.id);

    return (
        <PostPage post={post} updatePost={updatePost} deletePost={deletePost} getPostComments={getPostComments} addComment={addComment} comments={comments} />
    )
}

let mapStateToProps = (state) => {
    return {
        posts: state.posts,
        comments: state.comments,
    }
}


const PostHomewithRedux = connect(mapStateToProps, { updatePost: updatePostTC, deletePost: deletePostTC, getPostComments: getPostCommentsTC, addComment: addCommentTC })(PostHome)
export default withRedux(PostHomewithRedux);

















