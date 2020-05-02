import React, { useEffect } from 'react';
import { withRedux } from '../lib/redux.js';
import { connect } from 'react-redux';
import { useSelector, shallowEqual } from 'react-redux';
import UpdateDeletePost from '../сomponents/updatedeletePostContainer';



const getProps = () => {
    return useSelector(
        state => ({
            posts: state.posts,
            comments: state.comments,
        }),
        shallowEqual
    )
}

const PostPage = (props) => {
    const { posts, comments } = getProps();
    const post = posts.filter(elem => elem.id == props.id);
    return (
        <div>
            <div>
                <h6>{props.id}</h6>
                <h3>{post[0].title}</h3>
                <p>{post[0].body}</p>
            </div>
            <div>
                <div><button>Update Post</button></div>
                <div><button>Delete Post</button></div>
            </div>
            <div>
                <h4>CommentsContainer</h4>
            </div>
            <div>
                <h5>Comment</h5>
                <textarea placeholder='Enter your comment'></textarea>
                <button>Send comment</button>
            </div>
        </div>
    )
}



export default withRedux(PostPage); 