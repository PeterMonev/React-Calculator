import '../Blog/Blog.css';
import blogData from '../Blog/blogData.json';

import { Link } from'react-router-dom';

export const Blog = () => {
  return (
    <section className='section__blogs'> 
        <h1>Blog Page</h1>
        {blogData && blogData.length > 0 ? (
          <table>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Details</th>
                </tr>
            </thead>
            <tbody>
                {blogData.map(blog => (
                    <tr key={blog.id}>
                        <td>
                            <Link to={`/blog/${blog.id}`}>{blog.title}</Link>
                        </td>
                        <td>
                            <Link to={`/blog/${blog.id}`}>{blog.author}</Link> 
                        </td>
                        <td>
                            <Link to={`/blog/${blog.id}`}><i className="fa-solid fa-circle-info"></i></Link>
                        </td>
                    </tr>
                ))}
            </tbody>
          </table>
        ) : (
          <p className='notingFind_p'>Nothing find.</p>
        )}
    </section>
  );
}