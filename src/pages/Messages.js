import React from "react";
import Wrapper from "../components/layout/Wrapper";
import LeftSideBar from "../components/layout/LeftSideBar";
import ChatContentWrapper from "../components/layout/ChatContentWrapper";
import ChatSideBar from "../components/chat/ChatSideBar";
import ChatContainer from "../components/chat/ChatContainer";
import NoChatSelected from "../components/chat/NoChatSelected";
import MessageForm from "../components/chat/MessageForm";
import ChatHeader from "../components/chat/ChatHeader";
import MessageList from "../components/chat/MessageList";

export default function Messages(props) {

    return (
        <Wrapper>
            <LeftSideBar />
            <ChatContentWrapper>
                <ChatSideBar />
                <ChatContainer>
                    <ChatHeader />
                    <MessageList />
                    <MessageForm />
                </ChatContainer>
            </ChatContentWrapper>
        </Wrapper>
    )
}