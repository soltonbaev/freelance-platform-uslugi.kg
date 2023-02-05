import { Divider } from "@mui/material";
import React from "react";
import { useGlobalContext } from "../../../../contexts/GlobalContextProvider";

const Message = ({ message }) => {
  const { user } = useGlobalContext();

  console.log(message.avatar);
  return (
    <div className={`chat-bubble ${message.uid === user.uid ? "right" : ""}`}>
      <div className="chat-bubble__left">
        <div className="chat-img">
          <img src={message.avatar} alt="avatar" />
        </div>
        <p className="user-name">{message.name}</p>
      </div>
        <Divider sx={{ background: "#4c768d", width: "100%"}} />
      <div className="chat-bubble__right">
        <p className="user-message">{message.text}</p>
      </div>
    </div>
  );
};

export default Message;
