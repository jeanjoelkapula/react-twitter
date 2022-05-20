import React from "react";
import Wrapper from "../components/layout/Wrapper";
import LeftSideBar from "../components/layout/LeftSideBar";
import ChatContentWrapper from "../components/layout/ChatContentWrapper";
import ChatSideBar from "../components/ChatSideBar";
import ChatContainer from "../components/ChatContainer";


export default function Messages(props) {

    return (
        <Wrapper>
            <LeftSideBar />
            <ChatContentWrapper>
                <ChatSideBar />
                <ChatContainer>
                    
                </ChatContainer>
            </ChatContentWrapper>
        </Wrapper>
    )
}