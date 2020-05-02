import React from 'react';

const Comments = (props) => {
    return (
        <div>
            <h4>CommentsContainer</h4>
            <div>
                <h5>Comment</h5>
                <textarea placeholder='Enter your comment'></textarea>
                <button>Send comment</button>
            </div>
        </div>
    )
}


export default Comments;