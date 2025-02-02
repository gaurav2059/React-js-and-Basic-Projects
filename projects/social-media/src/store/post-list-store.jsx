import { createContext, useCallback, useReducer } from "react";

export const PostList = createContext({
    postList: [],
    addPost: () => { },
    addInitialPost: () => { },
    deletePost: () => { },
});

const postlistReducer = (currPostList, action) => {
    console.log(action);
    console.log(currPostList)
    if (action.type === "DELETE_POST") {
        return currPostList.filter((post) => post.id !== action.payload.postId);
    } else if (action.type === "ADD_INITIAL_POST") {
        return [...currPostList, ...action.payload.posts]; // Spread to add each post
    } else if (action.type === "ADD_POST") {
        return [...currPostList, action.payload.addPost];
    }
    return currPostList;
};

const PostListProvider = ({ children }) => {
    const [postList, dispatchPostList] = useReducer(postlistReducer, []);

    const addPost = (post) => {
        dispatchPostList({
            type: "ADD_POST",
            payload: post,


        }, []);
    };

    const addInitialPost = (posts) => {
        dispatchPostList({
            type: "ADD_INITIAL_POST",
            payload: {
                posts, // Spread the array of posts to add them individually
            },
        });
    };

    const deletePost = useCallback((postId) => {
        dispatchPostList({
            type: "DELETE_POST",
            payload: { postId },
        });
    }, [dispatchPostList]);

    return (
        <PostList.Provider value={{ postList, addPost, addInitialPost, deletePost }}>
            {children}
        </PostList.Provider>
    );
};

export default PostListProvider;
