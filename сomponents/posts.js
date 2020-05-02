import React from 'react'
import Link from 'next/link';


const Posts = (props) => {
  let postsMap = props.posts.map((post) => {
    return <div>
      <Link href={'posts/[id]'} as={`posts/${post.id}`} key={post.id}>
      <a>
        <div>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
        </a></Link>
        <p>Count comments</p>
      
    </div>
    
  })

  return (
    <div>
      {postsMap}
    </div>
  )
}


export default Posts;