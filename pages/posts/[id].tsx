import React from 'react';
import PostPage from "../../сomponents/post";
import { withRedux } from '../../lib/redux.js';
import { connect } from 'react-redux';
import { useRouter } from 'next/router';
import { updatePostTC, deletePostTC, getPostCommentsTC, addCommentTC } from '../../store';

type PropsType = {
    posts: Array<PostType>
    comments: Array<object>
    updatePost: (postId: number, body: object) => void
    deletePost: (postId: number) => void
    getPostComments: (postId: number, comments: Array<object>) => void
    addComment: (postId: number, body: string) => void
}
export type PostType = {
    id: number,
    title: string,
    body: string
}

const PostHome: React.FC<PropsType> = ({ posts, comments, updatePost, deletePost, getPostComments, addComment }) => {
    const router = useRouter();
    let post = posts.find(elem => elem.id === +router.query.id);

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


const PostHomeWithRedux = connect(mapStateToProps, { updatePost: updatePostTC, deletePost: deletePostTC, getPostComments: getPostCommentsTC, addComment: addCommentTC })(PostHome)
export default withRedux(PostHomeWithRedux);

















