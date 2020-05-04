import React from 'react'
import Link from 'next/link';
import {LinkLayout, A} from './styled_components/components';

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





