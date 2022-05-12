import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Blog() {

    const [blogPosts, setBlogPosts] = useState([])
    const [blogSlug, setBlogSlug] = useState('')
    const [error, setError] = useState('')


    const navigation = useNavigate()

    const onLoad = () => {
        const requestOptions = {
            method: "GET",
            headers: { 'Content-Type': "application/json" },
        }
        fetch('http://127.0.0.1:8000/api/blog/', requestOptions)
            .then(response => response.json())
            .then((response) => {
                setBlogPosts(response)
            })
    }

    useEffect(() => {
        onLoad()
    }, [])

    return (
        <div className='blog_main'>
            {blogPosts.map((post) => {
                return (
                    <div className='blog' key={post.blog_id}>
                        <div className='blog_content'>
                            <h2>{post.blog_id.toString()}</h2>
                            <h3>{post.blog_title}</h3>
                            <button className='btn-blog' onClick={(props) => {
                                const requestOptions = {
                                    method: 'post',
                                    headers: {
                                        'Content-Type': 'application/json',
                                    },
                                    body: JSON.stringify({
                                        blog_slug: post.blog_slug,
                                    })
                                }
                                fetch('http://127.0.0.1:8000/api/show-post/', requestOptions)
                                    .then((response) => {
                                        if (response.ok) {
                                            console.log('Redirecting to BlogPost')
                                            console.log(post.blog_slug)
                                        }
                                    })
                            }}
                            >Read More</button>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Blog