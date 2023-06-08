import React from 'react'
import { NavLink } from 'react-router-dom'

const BlogDetails = ({post}) => {
  return (
    <div className='my-10'>
      <NavLink to={`/blog/${post.id}`} >
        <span >{post.title}</span>
      </NavLink>
      <p>
        By
        <span>{post.author}</span>
        on {" "}
        <NavLink to={`/categories/${post.category.replaceAll(" ","-")}`}>
            <span className='font-bold text-blue-900'>{post.category}</span>
        </NavLink>
      </p>
      <p> Posted on {post.date} </p>
      <p > {post.content}</p>
      <div>
        {post.tags.map( (tag, index) => (
            <NavLink key={index} to={`/tags/${tag.replaceAll(" ","-")}`}>
                <span className='font-bold text-blue-900'>{`#${tag}`}</span>
            </NavLink>
        ) )}
      </div>
    </div>
  )
}

export default BlogDetails
