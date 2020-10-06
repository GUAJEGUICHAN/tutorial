import React from 'react'// 컴포넌트 생성에 필요한 라이브러리
import ReactDom from 'react-dom'//렌더하기위한 라이브러리(HTML에 JSX코드 주입)
import './index.css'
import {data} from './books'//.js 안넣어도 됨
import SpecificBook from './Book'
import MovieApp from './MovieApp'

function BookList (){
  return  <section className='booklist'>
    {data.map((book, index)=>{
      return <SpecificBook key={book.id} {...book}></SpecificBook>
    })}
 
  </section>
}

 ReactDom.render(<MovieApp/>, document.getElementById('root'));
