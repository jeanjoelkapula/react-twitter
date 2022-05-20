import React from "react";
import Wrapper from "../components/layout/Wrapper";
import LeftSideBar from "../components/layout/LeftSideBar"
import RightSideBar from "../components/layout/RightSideBar"
import MainContentWrapper from "../components/layout/MainContentWrapper";
import HomePostForm from "../components/HomePostForm";


export default function Home(props) {

    return (
        <Wrapper>
            <LeftSideBar />
            <MainContentWrapper title="Home">
                <HomePostForm />
            </MainContentWrapper>
            <RightSideBar />
        </Wrapper>
    )
}