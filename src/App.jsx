import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Sidebar from "./components/Sidebar"
import Createpost from "./components/Createpost"
import Posts from "./components/Posts"
import { useState } from "react"

function App() {
 
  const [selectedTab, setselectedtab] = useState("Home");
  const [posts, setPosts] = useState([]); // State to store posts
    const addPost = (post) => {
    setPosts([...posts, post]); // Add new post to posts array
  };

  return (
    
      <div className="app-container">
      <Sidebar selectedTab={selectedTab} setselectedtab={setselectedtab} />
      
      <div className="content">
        <Header />
        {selectedTab=== "Home"?<Posts  posts={posts}  /> : <Createpost addPost={addPost} />}
       
       
        <Footer />
      </div> 
    </div>
    
  )
}

export default App
