import React from "react";
import Wrapper from "../components/layout/Wrapper";
import LeftSideBar from "../components/layout/LeftSideBar"
import RightSideBar from "../components/layout/RightSideBar"
import MainContentWrapper from "../components/layout/MainContentWrapper";
import PostsContainer from "../components/PostsContainer";
import ProfileHeader from "../components/ProfileHeader";

export default function Home(props) {

    return (
        <Wrapper>
            <LeftSideBar />
            <MainContentWrapper title="Profile">
                <ProfileHeader />
                <PostsContainer />
            </MainContentWrapper>
            <RightSideBar />
        </Wrapper>
    )
}