import React,{useState,useEffect,useRef} from 'react';
import axios from 'axios';
import './App.css';
import  Books from './component/Books'

function App() {
  const [books,setBooks]=useState([])
  const bookName=useRef("petit")
  const [bookNameSearch,setBookNameSearch]=useState("petit")
 


  useEffect(() => {
    axios.get(`https://www.googleapis.com/books/v1/volumes?q=${bookNameSearch}&projection=lite`)
    .then(
      response=>{
        setBooks(response.data.items)
      }  
    )
    .catch(console.log("error"))


  },[bookNameSearch])
  
  const setBookName=(e)=>{
      bookName.current=e.target.value
  }
 
  const isSrting=(text)=>{
    return (typeof(text)=="string")? text : "There is no description"
  }

  console.log("befor return",bookNameSearch,books)
  return (
    <div className="App d-flex flex-column">
        <div className="col-md-4 mt-5 pt-5 align-self-center">
          <div className="title">Book search</div>

          <div className="input-group mb-3 mt-4">
             <input type="text" className="form-control" placeholder="Book name..." aria-label="Recipient's username" aria-describedby="button-addon2" onChange={e=>setBookName(e)} />
            <div className="input-group-append">
               <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={()=>setBookNameSearch(bookName.current)}><i className="fa fa-search"></i></button>
            </div>
          </div>

        </div >

        <Books books={books} isSrting={isSrting}/>

    </div>
  );
}

export default App;
