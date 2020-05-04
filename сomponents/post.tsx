import React from 'react';
import Comments from './comments';
import {useState, useEffect} from 'react';
import Link from 'next/link';
import NavBar from '../сomponents/navbar';
import {
    PostLayout,
    ButtonLayout,
    ButtonsContainerLayout,
    PostBodyLayout,
    ButtonLinkLayout,
    TextareaLayout
} from './styled_components/components';

type PropsType = {
    post: postType
    comments: Array<CommentType>
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
type CommentType = {
    id: number
    body: string
}

const PostPage: React.FC<PropsType> = ({post, comments, updatePost, deletePost, getPostComments, addComment}) => {

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
                    <TextareaLayout cols={115} rows={2} onChange={onBodyChange}>{text}</TextareaLayout>
                    <div>
                        <ButtonLayout onClick={updatePostClick}>Save</ButtonLayout>
                    </div>
                </div>
                : <div>
                    <h3>{post.title}</h3>
                    <PostBodyLayout>{post.body}</PostBodyLayout>
                    <ButtonsContainerLayout>
                        <div>
                            <ButtonLayout onClick={editOk}>Update Post</ButtonLayout>
                        </div>
                        <div>
                            <Link href='/'>
                                <ButtonLinkLayout onClick={deletePostClick}>Delete Post</ButtonLinkLayout>
                            </Link>
                        </div>
                    </ButtonsContainerLayout>
                    <hr/>
                    <Comments comments={comments} addComment={addComment} postId={post.id}/>
                </div>
            }
        </PostLayout>
    )
}


export default PostPage;