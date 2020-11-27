import React from 'react'
import  ReadMore from './ReadMore'


function Books({children,books,isSrting}) {
    return (
        <div className="col-md-10 content align-self-center">
        {books.map((book,index)=>{
          return (<div key={index} className="d-flex flex-column align-items-center justify-content-start p-3">
           
            <img  src={book.volumeInfo.imageLinks.smallThumbnail} />
            
            <h3>{book.volumeInfo.title}</h3>
            <ReadMore >{isSrting(book.volumeInfo.description)}</ReadMore>
          </div>)
        })} 

      </div>
    )
}

export default Books
