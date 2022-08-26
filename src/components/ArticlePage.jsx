import React from 'react'
import { useParams } from 'react-router-dom';


const ArticlePage = () => {
    const { article } = useParams()
    console.log(article)
    return (
        <div>ArticlePage</div>
    )
}

export default ArticlePage