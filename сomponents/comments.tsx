import React from 'react';
import {useState} from 'react';
import {CommentLayout, TextareaLayout, ButtonLayout} from './styled_components/components';


type PropsType = {
    comments: Array<CommentType>
    addComment: (postId: number, body: string) => void
    postId: number
}
type CommentType = {
    id: number
    body: string
}

const Comments: React.FC<PropsType> = ({comments, addComment, postId}) => {
    let [commentText, setCommentText] = useState<string>('');

    let onChangeText = (e) => {
        setCommentText(e.currentTarget.value)
    }
    let onAdd = () => {
        addComment(postId, commentText);
    }
    let comment = comments.map(elem => {
        return <CommentLayout key={elem.id}>{elem.body}</CommentLayout>
    })
    return (
        <div>
            <h3>Comments:</h3>
            {comment}
            <hr/>
            <div>
                <h3>Write comment</h3>
                <TextareaLayout cols={'115'} rows={'auto'} onChange={onChangeText}>{commentText}</TextareaLayout>
                <div>
                    <ButtonLayout onClick={onAdd}>Send comment</ButtonLayout>
                </div>
            </div>
        </div>
    )
}


export default Comments;