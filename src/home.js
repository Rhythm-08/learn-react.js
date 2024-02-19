import BlogList from "./blogList";
import useFetch from "./useFetch";


const Home = () => {

    const {data,isPending,Error} = useFetch('http://localhost:8000/blogs');

    return (
        <div className="home">
            {Error && <div>{ Error }</div> }
            {isPending && <div>Loading ...</div>}
            {data && <BlogList blogs={data} title="All Blogs!" />}
        </div>
    );
}

export default Home;