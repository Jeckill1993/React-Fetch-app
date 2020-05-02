import React from 'react';
import PostPage from "../../сomponents/post.js";
import { withRedux } from '../../lib/redux.js';
import { connect } from 'react-redux';
import { useRouter } from 'next/router';
import { updatePostTC, deletePostTC, getPostCommentsTC, addCommentTC } from '../../store.js';



const PostHome = ({ posts, updatePost, deletePost }) => {
    const router = useRouter();
    let post = posts.find(elem => elem.id == router.query.id);

    return (
        <PostPage post={post} updatePost={updatePost} deletePost={deletePost} />
    )
}

let mapStateToProps = (state) => {
    return {
        posts: state.posts,
    }
}


const PostHomewithRedux = connect(mapStateToProps, { updatePost: updatePostTC, deletePost: deletePostTC })(PostHome)
export default withRedux(PostHomewithRedux);

















