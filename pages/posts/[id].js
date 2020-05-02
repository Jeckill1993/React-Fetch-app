import React from 'react';
import PostPage from "../../сomponents/post.js";


const PostHome = ({ id }) => {
    return (
        <PostPage id={id} />
    )
}

PostHome.getInitialProps = function({query}) {
    console.log(query);
    let id = query;
    return id;
}


export default PostHome;













