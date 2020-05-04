import React from 'react';
import CreatePostForm from '../../сomponents/createPost';
import {withRedux} from '../../lib/redux';
import NavBar from '../../сomponents/navbar';
import {connect} from 'react-redux';
import {addPostTC, StateType} from '../../store';
import {CommentType, PostType} from "./[id]";
import {MainContainerLayout} from '../../сomponents/styled_components/components';

type PropsType = {
    posts: Array<postType>
    addPost: () => void
}
type postType = {
    id: number
    title: string
    body: string
}

const newPage: React.FC<PropsType> = ({posts, addPost}) => {
    return (
        <MainContainerLayout>
            <NavBar/>
            <CreatePostForm addPost={addPost}/>
        </MainContainerLayout>
    )
}

type MapStatePropsType = {
    posts: Array<PostType>
}
type MapDispatchPropsType = {
    addPost: (object) => void
}
let mapStateToProps = (state) => {
    return {
        posts: state.posts,
    }
}


const newPageContainer = connect<MapStatePropsType, MapDispatchPropsType, StateType>(mapStateToProps, {addPost: addPostTC})(newPage)
export default withRedux(newPageContainer);




