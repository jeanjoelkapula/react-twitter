import React from "react";
import Wrapper from "../components/layout/Wrapper";
import LeftSideBar from "../components/layout/LeftSideBar"
import RightSideBar from "../components/layout/RightSideBar"
import MainContentWrapper from "../components/layout/MainContentWrapper";
import PostForm from "../components/PostForm";
import PostsContainer from "../components/PostsContainer";

export default function Home(props) {

    return (
        <Wrapper>
            <LeftSideBar />
            <MainContentWrapper title="Home">
                <PostForm />
                <PostsContainer />
            </MainContentWrapper>
            <RightSideBar />
        </Wrapper>
    )
}