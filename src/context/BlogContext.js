import React, { createContext, useReducer, useState } from 'react'

export const BlogContext = createContext();

const blogReducer = (state, action) => {
    switch (action.type) {
        case 'add_posts':
            return [...state, { title: `Blog posts #${state.length+1}`}]
    
        default:
            return state;
    }
}

export default function BlogProvider({ children}) {

    const [posts, dispatch] = useReducer(blogReducer, [])

    const addBlogposts = () => {
        dispatch({type:'add_posts'})
    }

    return (
        <BlogContext.Provider value={
            {data: posts,addBlogposts}
        }>
            { children}
        </BlogContext.Provider>
    )
}
