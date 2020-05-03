import React from 'react';
import { useState } from 'react';
import Link from 'next/link';

type PropsType = {
    addPost: (object) => void
}
const CreatePostForm: React.FC<PropsType> = ({addPost}) => {

    let [textTitle, setTextTitle] = useState('');
    let [textBody, setTextBody] = useState('');

    //calling if there is browser events
    let updateTextTitle = (e) => {
        setTextTitle(e.currentTarget.value);
    }
    let updateTextBody = (e) => {
        setTextBody(e.currentTarget.value);
    }
    let onAddPost = () => {
        addPost({title: textTitle, body: textBody})
    }

    return (
        <form>
            <div>
                <input type={'text'} placeholder={'title'} onChange={updateTextTitle} value={textTitle} />
            </div>
            <div>
                <textarea placeholder={'text'} onChange={updateTextBody} value={textBody} />
            </div>
            <Link href='/'>
                <a><button onClick={onAddPost}>Add post</button></a>
            </Link>
        </form>

    )
}


export default CreatePostForm;