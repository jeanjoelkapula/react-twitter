import React from "react";

//hooks
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { useParams } from "react-router-dom";

//components
import Wrapper from "../components/layout/Wrapper";
import LeftSideBar from "../components/layout/LeftSideBar";
import ChatContentWrapper from "../components/layout/ChatContentWrapper";
import ChatSideBar from "../components/chat/ChatSideBar";
import ChatContainer from "../components/chat/ChatContainer";
import NoChatSelected from "../components/chat/NoChatSelected";
import MessageForm from "../components/chat/MessageForm";
import ChatHeader from "../components/chat/ChatHeader";
import MessageList from "../components/chat/MessageList";
import ErrorList from "../components/ErrorList";

//helpers
import { getChats } from "../helpers/fetchHelpers";

//actions
import { setCurrentChat } from "../redux/currentChat";

import { toast } from "react-toastify";

export default function Messages(props) {
    const chats = useSelector(state => state.chats);
    const {chatId} = useParams();
    const dispatch = useDispatch();
    const currentUser = useSelector(state => state.auth.user);
    let currentChat = null;
    let username = "";

    if (chatId !== undefined) {
        currentChat = chats.find(chat => chat.id == chatId);

        dispatch(setCurrentChat(currentChat));
        username = currentChat.participants.find(username => username !== currentUser.username);
    }


    return (
        <Wrapper>
            <LeftSideBar />
            <ChatContentWrapper>
                <ChatSideBar />
                {
                    chatId === undefined ?
                        <ChatContainer>
                            <NoChatSelected/>
                        </ChatContainer>
                        :
                    <ChatContainer>
                        <ChatHeader username={username}/>
                        <MessageList messages={ chatId === undefined ? [] : currentChat.chat_messages}/>
                        <MessageForm />
                    </ChatContainer>
                }
                
            </ChatContentWrapper>
        </Wrapper>
    )
}