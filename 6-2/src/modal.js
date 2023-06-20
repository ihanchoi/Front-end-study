import { useState } from "react";

function Modal({ addItem, modalOpen, modalHandler }) {
    const [name, setName] = useState("");
    const [content, setContent] = useState("");
    const [image, setImage] = useState("");

    const handleSubmit = (e) => {
    e.preventDefault();
    addItem({ name, content, image });
    modalHandler(false);
};

return (
    <div className="modal-background" hidden={!modalOpen}>
        <form className="modal" onSubmit={handleSubmit}>
        <span className="modal-close" onClick={() => modalHandler(false)}> ˣ </span>
        <label htmlFor="name" className="label"> MOVIE TITLE </label>
        <input
            id="name"
            type="text"
            placeholder="What is your favorite movie? 🎬"
            className="input"
            maxLength="30"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="image" className="label"> IMAGE URL </label>
        <input
            id="image"
            type="text"
            placeholder="input url"
            className="input"
            required
            value={image}
            onChange={(e) => setImage(e.target.value)}
        />
        <label htmlFor="content" className="label"> WHY DO YOU LOVE THIS MOVIE? </label>
        <input
            id="content"
            type="text"
            placeholder="leave your comment"
            className="input"
            required
            value={content}
            onChange={(e) => setContent(e.target.value)}
        />
        <button type="submit" className="sub-btn"> SUBMIT </button>
        </form>
    </div>
    );
}
export default Modal;
