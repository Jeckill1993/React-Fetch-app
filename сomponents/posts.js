import React from 'react'
import Link from 'next/link';


const Posts = ({ posts }) => {
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