import axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://simple-blog-api.crew.red/',
})


export const postsAPI = {
    getPosts: () => {
        return instance.get('posts').then(response => {
            return response.data;
        })
    },
    getPostComments: (postId) => {
        return instance.get(`/posts/post=${postId}?_embed=comments`).then(response => {
            return response;
        })
    },
    addPost: (post)=> {
        return instance.post('posts', post, {}).then(response => {
            return response;
        })
    },
    updatePost: (post) => {
        return instance.put('posts/id', post).then(response => {
            return response;
        })
    },
    deletePost: () => {
        return instance.delete('posts/id').then(response => {
            return response;
        })
    },
    addComment: (comment) => {
        return instance.post('comments', comment, {}).then(response => {
            return response;
        })
    }
    
}