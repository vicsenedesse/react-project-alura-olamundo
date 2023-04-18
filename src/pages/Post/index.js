import React from 'react'
import { Route, Routes, useParams } from 'react-router-dom'
import posts from 'json/posts.json'
import PostModel from 'components/PostModel';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import './Post.css'
import NotFound from 'pages/NotFound';
import DefaultPage from 'components/DefaultPage';

export default function Post() {
    const param = useParams();
    const post = posts.find(it => {
        return it.id === Number(param.id);
    })

    if(!post) {
      return <NotFound />
    }
  return (
    <DefaultPage>
      <PostModel
          fotoCapa={`/assests/posts/${post.id}/capa.png`}
          titulo={post.titulo}>
            <div className='post-markdown-container'>
              <ReactMarkdown>
                {post.texto}
              </ReactMarkdown>
            </div>
      </PostModel>
    </DefaultPage>
  )
}
