import React from 'react';
import { useState } from 'react';
import Link from 'next/link';
import styled from 'styled-components';

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
        <CreateFormLayout>
            <div>
                <InputLayout type={'text'} placeholder={'title'} onChange={updateTextTitle} value={textTitle} />
            </div>
            <div>
                <TextAreaLayout placeholder={'text'} onChange={updateTextBody} value={textBody} />
            </div>
            <Link href='/'>
                <a><ButtonLayout onClick={onAddPost}>Add post</ButtonLayout></a>
            </Link>
        </CreateFormLayout>

    )
}


export default CreatePostForm;


const CreateFormLayout = styled.form`
    background: rgb(167, 167, 221);
    width: 70%,
    margin: auto;
    display: grid;
    grid-template-rows: 50px 3fr 1fr
`

const TextAreaLayout = styled.input`
    width: 95%;
    height: 300px;
    margin: 5px; 
`

const InputLayout = styled.input`
    width: 95%;
    height: 30px;
    margin: 5px; 
`
const ButtonLayout = styled.button`
    width: 100px;
    height: 30px;
    border-radius: 10px
    background-color: rgb(31, 31, 46);
    color: black;
    margin: 5px;
`
