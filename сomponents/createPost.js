import React from 'react';
import { useState } from 'react';
import Link from 'next/link';

const CreatePostForm = (props) => {

    let [textTitle, setTextTitle] = useState('');
    let [textBody, setTextBody] = useState('');

    //calling if there is browser events
    let updateTextTitle = (e) => {
        setTextTitle(e.currentTarget.value);
    }
    let updateTextBody = (e) => {
        setTextBody(e.currentTarget.value);
    }



    let addPost = () => {
        props.addPost({title: textTitle, body: textBody})
    }

    return (
        <form>
            <div>
                <input type={'text'} placeholder={'title'} onChange={updateTextTitle} value={textTitle} />
            </div>
            <div>
                <input type={'textarea'} placeholder={'text'} onChange={updateTextBody} value={textBody} />
            </div>
            <Link href='/'>
                <a><button onClick={addPost}>Add post</button></a>
            </Link>
        </form>

    )
}


export default CreatePostForm;