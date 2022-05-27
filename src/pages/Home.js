import React from "react";
import Wrapper from "../components/layout/Wrapper";
import LeftSideBar from "../components/layout/LeftSideBar"
import RightSideBar from "../components/layout/RightSideBar"
import MainContentWrapper from "../components/layout/MainContentWrapper";
import PostForm from "../components/PostForm";
import PostsContainer from "../components/PostsContainer";
import ErrorList from "../components/ErrorList";

//actions
import { addPost } from "../redux/posts";

//helpers
import { createPost } from "../helpers/fetchHelpers";
import { toast } from "react-toastify";

//hooks
import { useDispatch } from "react-redux";

export default function Home(props) {
    const dispatch = useDispatch();

    async function handleCreatePost(values) {
        const data = await createPost(values);

        if (data.errors) {
            toast.error(<ErrorList errors={data.errors} />);
        }
        else {
            dispatch(addPost(data.post));
        }
    }

    return (
        <Wrapper>
            <LeftSideBar />
            <MainContentWrapper title="Home">
                <PostForm onSubmit={handleCreatePost}/>
                <PostsContainer />
            </MainContentWrapper>
            <RightSideBar />
        </Wrapper>
    )
}