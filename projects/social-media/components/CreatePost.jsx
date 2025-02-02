import { useContext, useRef } from "react";
import { PostList } from "../src/store/post-list-store";

const CreatePost = () => {
    const { addPost } = useContext(PostList);

    const userIdElement = useRef();
    const postTitleElement = useRef();
    const postBodyElement = useRef();
    const reactionsElement = useRef();
    const tagsElement = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();

        const userId = userIdElement.current.value;
        const postTitle = postTitleElement.current.value;
        const postBody = postBodyElement.current.value; // Fixed typo
        const reactions = reactionsElement.current.value;
        const tags = tagsElement.current.value.split(",").map(tag => tag.trim());

        // Clear form fields
        // userIdElement.current.value = "";
        // postTitleElement.current.value = "";
        // postBodyElement.current.value = ""; 
        // reactionsElement.current.value = "";
        // tagsElement.current.value = "";

        fetch('https://dummyjson.com/posts/add', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                title: postTitle,
                body: postBody,
                reactions: reactions,
                userId,
                tags,


            })
        })
            .then(res => res.json())
            .then(post => addPost(post));


        // Call `addPost` to update context
        addPost(userId, postTitle, postBody, reactions, tags);
    };

    return (
        <form className="create-post" onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="userId" className="form-label">Id</label>
                <input
                    type="text"
                    ref={userIdElement}
                    className="form-control"
                    id="userId"
                    placeholder="Enter Your User Id"
                />
            </div>

            <div className="mb-3">
                <label htmlFor="title" className="form-label">Post Title</label>
                <input
                    type="text"
                    ref={postTitleElement}
                    className="form-control"
                    id="title"
                    placeholder="How Are You Feeling today"
                />
            </div>

            <div className="mb-3">
                <label htmlFor="body" className="form-label">Post Content</label>
                <textarea
                    rows="4"
                    ref={postBodyElement}
                    className="form-control"
                    id="body"
                    placeholder="Tell Us More About It"
                />
            </div>

            <div className="mb-3">
                <label htmlFor="reactions" className="form-label">Reactions</label>
                <input
                    type="text"
                    ref={reactionsElement}
                    className="form-control"
                    id="reactions"
                    placeholder="How Many People Reacted To This Post"
                />
            </div>

            <div className="mb-3">
                <label htmlFor="tags" className="form-label">Tags</label>
                <input
                    type="text"
                    ref={tagsElement}
                    className="form-control"
                    id="tags"
                    placeholder="Please Enter Tags Using Commas"
                />
            </div>

            <button type="submit" className="btn btn-primary">Post</button>
        </form>
    );
};

export default CreatePost;
