import {React, useState } from "react";
import ChatMessage from "./ChatMessage";
import { IoIosSend } from "react-icons/io";

function Chats(){

   const [messages, setMessages] = useState("")

   const handleInput = (event) => {
        setMessages(event.target.value)
      }
   const handleSendMessage =(event) => {
          event.preventDefault();
          const requestOptions = {
            method : "POST",
            header : { 
              'Accept':'*/*',
              'Content-Type': 'text/plain; charset=UTF-8'
            },
            body: JSON.stringify({
                    messages : messages,
            })
        }
        fetch('http://127.0.0.1:8000/api/send-chats/', requestOptions)
        .then(response => response.json())
        .then((data) => {
            console.log(data)
        })
      }
    

    return(
    <div className="chats">
      <div className="allChats">
      <h1>Chats</h1>
          <div className="displayed_chats">
              <div>
                <ChatMessage />
              </div>
          </div>
      </div>
      <div>
        <form>
          <textarea
            type="text"
            className="textarea"
            placeholder="Enter Message"
            rows={2}
            onChange={handleInput}
          />
          <label htmlFor="send">
            <IoIosSend
            className="sendIcon"
            style={{
              height:'30px',
              width : '30px',
              color : 'azure'
            }}/>
          </label>
          <button
            hidden='true'
            className="btnsend"
            type="submit"
            id="send"
            onClick={handleSendMessage}>
          </button>
        </form>
      </div>
    </div>
  );
}
export default Chats;