import React from 'react'
import Link from 'next/link';
import styled from 'styled-components';

type PropsType = {
    posts: Array<postType>
}
type postType = {
    id: number
    title: string
    body: string
}

const Posts: React.FC<PropsType> = ({posts}) => {
    let postsMap = posts.map((post) => {
        return <LinkLayout key={post.id}>
            <Link href={'posts/[id]'} as={`posts/${post.id}`} key={post.id}>
                <A>
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
                </A>
            </Link>
        </LinkLayout>

    })

    return (
        <div>
            {postsMap}
        </div>
    )
}


export default Posts;

const LinkLayout = styled.div`
    margin-top: 5px;
    margin-bottom: 5px;
    padding: 10px;
    background-color: white;
    border: 1px solid black;
`
const A = styled.a`
    text-decoration: none;
    color: rgb(45, 45, 51);
`


