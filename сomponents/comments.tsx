import React from 'react';
import {useState} from 'react';
import styled from 'styled-components';


type PropsType = {
    comments: Array<CommentType>
    addComment: (postId: number, body: string) => void
    postId: number
}
type CommentType = {
    id: number
    body: string
}

const Comments: React.FC<PropsType> = ({ comments, addComment, postId }) => {
    let [commentText, setCommentText] = useState('');

    let onChangeText = (e) => {
        setCommentText(e.currentTarget.value)
    }
    let onAdd = () => {
        addComment(postId, commentText);
    }
    console.log(comments);
    console.log(postId);

    let comment = comments.map(elem => {
        return <CommentLayout key={elem.id}>{elem.body}</CommentLayout>
    })
    return (
        <div>
            <h3>Comments:</h3>
            {comment}
            <div>
                <textarea onChange={onChangeText}>{commentText}</textarea>
                <div>
                    <button onClick={onAdd}>Send comment</button>
                </div>
            </div>
        </div>
    )
}


export default Comments;

const CommentLayout = styled.div`
    background-color: white;
    padding: 10px;
    margin-top: 5px;
    margin-bottom: 5px;
`