import React from 'react'
import Link from 'next/link';

type PropsType = {
  posts: Array<postType>
}
type postType = {
  id: number
  title: string
  body: string
}

const Posts: React.FC<PropsType> = ({ posts }) => {
  let postsMap = posts.map((post) => {
    return <div key={post.id}>
      <Link href={'posts/[id]'} as={`posts/${post.id}`} key={post.id}>
        <a>
          <div>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        </a></Link>
    </div>

  })

  return (
    <div>
      {postsMap}
    </div>
  )
}


export default Posts;