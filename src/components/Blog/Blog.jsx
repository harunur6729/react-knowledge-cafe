import PropTypes from "prop-types";
import { FaBookmark } from "react-icons/fa";
const Blog = ({ blog, handleAddToBookmarks,handleMarkAsRead }) => {
  const {
    id,
    title,
    cover,
    author,
    author_img,
    posted_date,
    reading_time,
    hashtags,
  } = blog;
  return (
    <div className="mb-20 border-2 border-yellow-150 ">
      <img
        className="w-full mb-4"
        src={cover}
        alt={`Cover picture of the title ${title}`}
      />
      <div className="flex justify-between">
        <div className="flex gap-6">
          <img className="w-12" src={author_img} alt="" />
          <div>
            <h4>{author}</h4>
            <small>{posted_date}</small>
          </div>
        </div>

        <div>
          <span>{reading_time} min read</span>
          <button onClick={() => handleAddToBookmarks(blog)} className="ml-2 text-red-300 text-2xl" >
            <FaBookmark></FaBookmark>
          </button>
        </div>
      </div>
      <h2 className="text-4xl">{title}</h2>
      <p>
        {hashtags.map((hash, index) => (
          <span key={index}>
            <a href=""> {hash}</a>
          </span>
        ))}
      </p>
      <button 
      onClick={ () => handleMarkAsRead( id,reading_time)} 
      className="bg-teal-200 rounded-xl px-3 mb-2  font-bold text-purple-600  underline hover:bg-red-200"
      ><small>Mark As Read</small></button>
    </div>
  );
};
Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleAddToBookmarks:PropTypes.func,
  handleMarkAsRead:PropTypes.func
};
export default Blog;
