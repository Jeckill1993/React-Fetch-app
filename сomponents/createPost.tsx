import React from 'react';
import { useState } from 'react';
import Link from 'next/link';
import {CreateFormLayout, InputLayout, ButtonLayout, TextAreaLayout} from './styled_components/components';

type PropsType = {
    addPost: (object) => void
}
const CreatePostForm: React.FC<PropsType> = ({addPost}) => {

    let [textTitle, setTextTitle] = useState<string>('');
    let [textBody, setTextBody] = useState<string>('');

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
        <CreateFormLayout>
            <div>
                <InputLayout type={'text'} placeholder={'title'} onChange={updateTextTitle} value={textTitle} />
            </div>
            <div>
                <TextAreaLayout onChange={updateTextBody} value={textBody} />
            </div>
            <Link href='/'>
                <ButtonLayout onClick={onAddPost}>Add post</ButtonLayout>
            </Link>
        </CreateFormLayout>

    )
}


export default CreatePostForm;



