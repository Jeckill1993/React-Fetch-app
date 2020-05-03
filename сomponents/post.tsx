import React from 'react';
// @ts-ignore
import Comments from './comments.tsx';
import {useState, useEffect} from 'react';
import Link from 'next/link';
import NavBar from '../сomponents/navbar';
import styled from 'styled-components';

type PropsType = {
    post: postType
    comments: Array<object>
    updatePost: (postId: number, body: object) => void
    deletePost: (postId: number) => void
    getPostComments: (postId: number, comments: Array<object>) => void
    addComment: (postId: number, body: string) => void
}
type postType = {
    id: number
    title: string
    body: string
}

const PostPage: React.FC<PropsType> = ({post, comments, updatePost, deletePost, getPostComments, addComment}) => {
    console.log(post);
    let [editMode, setEditMode] = useState(false);
    let [text, setText] = useState(post.body);

    useEffect(() => {
        getPostComments(post.id, comments);
    }, [])

    const updatePostClick = () => {
        setEditMode(false);
        return updatePost(post.id, {title: post.title, body: text});
    }
    const deletePostClick = () => {
        return deletePost(post.id);
    }
    const onBodyChange = (e) => {
        setText(e.currentTarget.value);
    }
    const editOk = () => {
        setEditMode(true)
    }

    return (
        <PostLayout>
            <NavBar/>
            {editMode
                ? <div>
                    <h3>{post.title}</h3>
                    <textarea onChange={onBodyChange}>{text}</textarea>
                    <div>
                        <button onClick={updatePostClick}>Save</button>
                    </div>
                </div>
                : <div>
                    <div>
                        <PostBodyLayout>
                            <h3>{post.title}</h3>
                            <p>{post.body}</p>
                        </PostBodyLayout>
                        <ButtonsContainerLayout>
                            <div>
                                <button onClick={editOk}>Update Post</button>
                            </div>
                            <div>
                                <Link href='/'>
                                    <a>
                                        <button onClick={deletePostClick}>Delete Post</button>
                                    </a>
                                </Link>
                            </div>
                        </ButtonsContainerLayout>
                    </div>
                    <Comments comments={comments} addComment={addComment} postId={post.id}/>
                </div>
            }
        </PostLayout>

    )
}


export default PostPage;


const PostLayout = styled.div`
    background:  rgb(212, 212, 224);
    color: rgb(45, 45, 51);
  
    display: grid;
    grid-template-rows: 100px 10fr;
  
    width: 60%;
    margin: auto;
    padding: 10px;
`

const ButtonsContainerLayout = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 10px;
`

const PostBodyLayout = styled.div`
    background-color: white;
    border: 1px solid rgb(45, 45, 51);
    margin-top: 10px;
    padding: 10px;
`