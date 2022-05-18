import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

function BlogPost(props) {
    const { blog_slug } = useParams()
    const [blogPostData, setBlogPostData] = useState({})

    const getBlogPost = () => {
        fetch(`http://127.0.0.1:8000/api/blogpost/?blog_slug=` + blog_slug)
            .then(response => response.json())
            .then((response) => {
                setBlogPostData(response)
                console.log(blogPostData)
            })
    }
    useEffect(() => {
        getBlogPost()
    }, [])

    return (
        <div className='blog_page'>
            <div className='blogpost'>
                <h1>{blogPostData.blog_title}</h1>
                <div>
                    <p>{blogPostData.blog_post}</p>
                </div>
            </div>
        </div>
    )
}

export default BlogPost