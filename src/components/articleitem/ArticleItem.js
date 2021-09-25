import React from 'react'
import './ArticleItem.css'

const ArticleItem = ({ title, url, img_url }) => {
    return (
        <a href={url} className="item-link">
            <div className="article-item-container">
                <img src={img_url} alt="" className="article-img" />
                <h5 className="title-text">{title}</h5>

            </div>
        </a>

    )
}

export default ArticleItem
