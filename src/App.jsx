
import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
// import Header from './components/Header/Header'

function App() {
  const [bookMarks, setBookMarks] = useState([]);
  const [readingTime, setReadingTime] =useState(0);

  const handleAddToBookmarks = blog =>{
    const newBookMarks = [...bookMarks, blog];
    setBookMarks(newBookMarks)
  }

  const handleMarkAsRead = (id, time) =>{
      const newtime = readingTime + time;
      setReadingTime(newtime)

      //remove the read blog from bookmark
    const remainingBookmarks = bookMarks.filter(bookmark => bookmark.id !== id);
    setBookMarks(remainingBookmarks);
  }

  return (
    <>
      
   <div className='md:flex max-w-5xl mx-auto'>
      <Blogs 
      handleAddToBookmarks = {handleAddToBookmarks} 
      handleMarkAsRead= {handleMarkAsRead}
      ></Blogs>

      <Bookmarks 
      bookMarks = {bookMarks}
      readingTime={readingTime}
      ></Bookmarks>
   </div>
    
    </>
  )
}

export default App
