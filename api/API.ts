import axios, {AxiosResponse} from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://simple-blog-api.crew.red/',
})

export type PostObjectType = {
    title: string
    body: string
}


export const postsAPI = {
    getPosts: () => {
        return instance.get('posts').then(response => {
            return response.data;
        })
    },
    addPost: (post: PostObjectType)=> {
        return instance.post('posts', {title: post.title, body: post.body})
    },
    updatePost: (postId: number, post: PostObjectType) => {
        return instance.put(`posts/${postId}`, {title: post.title, body: post.body});
    },
    deletePost: (postId: number) => {
        return instance.delete(`posts/${postId}`);
    },
    getPostComments: (postId: number) => {
        return instance.get(`/posts/${postId}?_embed=comments`).then(response => {
            return response.data.comments;
        })
    },
    addComment: (postId: number, body: PostObjectType) => {
        return instance.post('comments', {postId: postId, body: body});
    }
    
}

postsAPI.getPosts().then((res: AxiosResponse<Array<object | null>>) => res.data)