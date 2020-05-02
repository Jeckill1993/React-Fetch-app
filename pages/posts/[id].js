import React from 'react';
import PostPage from "../../сomponents/post.js";


const PostHome = ({postId}) => {

    return(
        <PostPage id={postId}/>
    )
}

PostHome.getInitialProps = function({query}) {
    let postId = query;
    return postId;
}

export default PostHome;