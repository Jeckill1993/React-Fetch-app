import React from 'react';
import {useState} from 'react';

const Comments = ({ comments, addComment, postId }) => {
    let [commentText, setCommentText] = useState('');

    let onChangeText = (e) => {
        setCommentText(e.currentTarget.value)
    }
    let onAdd = () => {
        addComment(postId, commentText);
    }
    console.log(comments);
    let comment = comments.map(elem => {
        return <div key={elem.id}>{elem.body}</div>
    })
    return (
        <div>
            <div>{comment}</div>
            <div>
                <textarea onChange={onChangeText}>{commentText}</textarea>
                <button onClick={onAdd}>Send comment</button>
            </div>
        </div>
    )
}


export default Comments;