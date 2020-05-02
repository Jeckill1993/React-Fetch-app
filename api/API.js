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
        return instance.post('posts', {title: post.title, body: post.body}).then(response => {
            return response;
        })
    },
    updatePost: (postId, post) => {
        return instance.put(`posts/${postId}`, {title: post.title, body: post.body});
    },
    deletePost: (postId) => {
        return instance.delete(`posts/${postId}`);
    },
    addComment: (comment) => {
        return instance.post('comments', comment, {}).then(response => {
            return response;
        })
    }
    
}