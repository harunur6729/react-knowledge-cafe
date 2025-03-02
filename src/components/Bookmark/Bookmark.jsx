import PropTypes from "prop-types";

const Bookmark = ({bookMark}) => {
    const {title} = bookMark;
    return (
        <div className="bg-slate-200 p-4 m-4 rounded-xl ">
            <h3 className="text-2xl text-center"> {title}</h3>
        </div>
    );
};

Bookmark.propTypes = {
    bookMark:PropTypes.object
}

export default Bookmark;