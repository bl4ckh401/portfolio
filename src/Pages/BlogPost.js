import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

function BlogPost(props) {
    const blog_slug = useParams()
    const [blogPostData, setBlogPostData] = useState([])

    const getBlogPost = () => {
        fetch(`http://127.0.0.1:8000/api/blogpost/?blog_slug=` + blog_slug)
            .then(response => response.json())
            .then((response) => {
                setBlogPostData(response)
            })
    }
    useEffect(() => {
        getBlogPost(props)
    }, [])

    return (
        <div className='App'>
            {blogPostData.map((post) => {
                return (
                    <div>
                        <h1>{post.blog_title}</h1>
                        <p>{post.blog_post}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default BlogPost