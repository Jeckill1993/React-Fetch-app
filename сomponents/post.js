import React from 'react';
import { withRedux } from '../lib/redux.js';
import { connect } from 'react-redux';

const PostPage = (props) => {
    console.log(PostPage)
    return(
        <div>
            <div>
            <h6>{props.id}</h6>
            <h3>{props.id}</h3>
            <p>{props.id}</p>
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


//let PostPageContainer = connect()(PostPage)

export default PostPage;