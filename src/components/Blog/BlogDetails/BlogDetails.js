import '../BlogDetails/BlogDetails.css';
import blogData from '../blogData.json';

import { useParams } from 'react-router-dom';

export const BlogDetails = () =>{

    const { id } = useParams();
    const blog = blogData.find(f => f.id == id);
    
    if(!blog){
        return <p className='blogNotFound'>Blog not found!</p>;
    }

    return(
        <section className='section__blogDetail'>
            <h1>Blog Details</h1>
            <article className='article__blogDetail'>
                <h2><span>Title:</span> {blog.title}</h2>
                <h3><span>Author:</span> {blog.author}</h3>
                <p><span>Date:</span> {blog.date}</p>
                <p><span>Content:</span> {blog.content}</p>
            </article>
        </section>
    );

}