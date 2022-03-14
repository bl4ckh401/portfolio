import React, { useState, useEffect } from "react"
import '../App.css'


function ChatMessage(props){
  const [allMessages, setAllMessages] = useState([])

  const handleShowMessages =() => {
  
    const requestOptions = {
      method : "GET",
      header : { 
        'Accept':'*/*',
        'Content-Type': 'text/plain; charset=UTF-8'
      }
  }
  fetch('https://pavsportfolio.herokuapp.com/api/chats/', requestOptions)
  .then(response => response.json())
  .then((response) => {
    setAllMessages(response)
      console.log(response)
  })
  }

  useEffect(() => {
    handleShowMessages();
  }, []);
  

    return(
      <div>
        {
          allMessages.map((item) => {
            return(
              <div className="ChatMessage">
                <div className="message">
                  <p>{item.messages}</p>
                </div>
              </div>
            )
          })
        }
        </div>
    )
}
export default ChatMessage