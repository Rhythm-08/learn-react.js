import { useState, useEffect } from "react";
import BlogList from "./blogList";


const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    ]);

    const [name, setName] = useState('mario');

    const handleDeleteBlog = (id) => {
        const newBlogs = blogs.filter((blog) => blog.id !== id);
        setBlogs(newBlogs);
    }

    useEffect(() => {
        console.log('Use Effect Run!');
        console.log(name);
    }, [name])


    return (
        <div className="home">
            {/* <h1>Home Page</h1> */}
            <BlogList blogs={blogs} title="All Blogs!" handleDeleteBlog={handleDeleteBlog} />
            <button onClick={() => setName('Luigi')}>Change Name</button>
            <p>Name : {name}</p>
            {/* <BlogList blogs={blogs.filter((blog)=> blog.author === 'mario')} title="Mario's Blogs!" /> */}

        </div>
    );
}

export default Home;