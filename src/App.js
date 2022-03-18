import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import About from "./components/About"
import SinglePost from "./components/SinglePost"
import Post from "./components/Post"
import Project from "./components/Project"

const App = () => {
    return (
        <>
        <BrowserRouter>
            <Routes>
                <Route component={Home} path='/' exact />
                <Route component={About} path='/about' />
                <Route component={SinglePost} path='/post/:slug' />
                <Route component={Post} path='/post' />
                <Route component={Project} path='/project' />
            </Routes>
        </BrowserRouter>

        <h1>Hello World</h1>
        <button class="bg-red-500 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded ml-4 mt-4">Button</button>
        </>
    );
}

export default App;


// Routes replaced Switch