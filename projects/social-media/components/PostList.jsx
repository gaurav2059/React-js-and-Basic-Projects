import { useContext, useEffect, useState } from "react";
import { PostList as PostListData } from "../src/store/post-list-store";
import Post from "./Post";
import WelcomeMessage from "./WelcomeMessage";
import LoadingSpinner from "./LoadingSpinner";

const PostList = () => {
    const { postList, addInitialPost } = useContext(PostListData);
    const [fetching, setFetching] = useState(false);

    // useEffect
    useEffect(() => {
        setFetching(true); // Set fetching to true before the fetch

        const controller = new AbortController();
        const signal = controller.signal;

        fetch('https://dummyjson.com/posts')
            .then((res) => res.json())
            .then((data) => {
                addInitialPost(data.posts); // Add posts to context
                setFetching(false); // Set fetching to false after data is loaded
            })
            .catch((error) => {
                console.error('Fetch error:', error);
                setFetching(false); // Ensure fetching state is updated even if fetch fails
            });
        return () => {
            console.log("Cleaning up useEffect")
            controller.abort();
        }

    }, []); // Empty dependency array to ensure fetch happens only once when component mounts

    return (
        <>
            {fetching && <LoadingSpinner />}  {/* Display loading spinner when fetching */}
            {!fetching && postList.length === 0 && <WelcomeMessage />}  {/* Show Welcome message if no posts */}
            {!fetching && postList.map((post) => (
                <Post key={post.id} post={post} />

            ))}
        </>
    );
};

export default PostList;
