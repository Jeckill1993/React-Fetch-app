import React from 'react';
import Comments from './comments.js';
import { useState, useEffect } from 'react';
import Link from 'next/link';


const PostPage = ({ post, comments, updatePost, deletePost, getPostComments, addComment }) => {
    console.log(post);
    let [editMode, setEditMode] = useState(false);
    let [text, setText] = useState(post.body);

    useEffect(() => {
        getPostComments(post.id, comments);
    }, [])

    const updatePostClick = () => {
        setEditMode(false);
        return updatePost(post.id, { title: post.title, body: text });
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
        <div>
            {editMode
                ? <div>
                    <h3>{post.title}</h3>
                    <textarea onChange={onBodyChange}>{text}</textarea>
                    <button onClick={updatePostClick}>Save</button>
                </div>
                : <div>
                    <div>
                        <h6>{post.id}</h6>
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                        <div>
                            <button onClick={editOk}>Update Post</button>
                        </div>
                        <div>
                            <Link href='/'>
                                <a><button onClick={deletePostClick}>Delete Post</button></a>
                            </Link></div>
                    </div>
                    <Comments comments={comments} addComment={addComment} postId={post.id} />
                </div>
            }
        </div>

    )
}



export default PostPage; 