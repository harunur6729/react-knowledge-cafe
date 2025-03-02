import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({bookMarks,readingTime}) => {
    return (
        <div className="md:w-1/3 bg-gray-300 ml-3 mt-2">
            <h3 className="bg-white text-center border-2 border-sky-500 my-3 py-3 text-blue-700">Spent time on read : {readingTime} min</h3>
             <h2 className="text-2xl">Bookmarks:{bookMarks.length}</h2>
             {
                bookMarks.map((bookMark,idx) => <Bookmark key={idx} bookMark={bookMark}></Bookmark>)
             }
        </div>
    );
};

Bookmarks.propTypes = {
    bookMarks:PropTypes.array,
    readingTime:PropTypes.number

}

export default Bookmarks;