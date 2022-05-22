import { React, useState } from "react";
import { IoIosCall, IoIosLocate, IoIosMail } from "react-icons/io";

function Chats() {

  const [messages, setMessages] = useState("")
  const [subject, setSubject] = useState("")
  const [email, setEmail] = useState("")


  const handleInput = (event) => {
    setMessages(event.target.value)
  }
  const handleEmail = (event) => {
    setEmail(event.target.value)
  }
  const handleSubject = (event) => {
    setSubject(event.target.value)
  }
  const handleSendMessage = (event) => {
    event.preventDefault();
    const requestOptions = {
      method: "POST",
      header: {
        'Accept': '*/*',
        'content-type': 'text/plain; charset=UTF-8'
      },
      body: JSON.stringify({
        email: email,
        subject: subject,
        messages: messages,
      })
    }
    fetch('http://127.0.0.1:8000/api/send-chats/', requestOptions)
      .then(response => response.text())
      .then((data) => {
        console.log(data)
      })
  }

  return (
    <div className="chats">
      <h2>CONTACT</h2>
      <h3>GET IN TOUCH!</h3>
      <div className="chatpageContent">
        <div className="postChat">
          <div className="location">
            <IoIosLocate className="sendIcon"
              style={{
                height: '30px',
                width: '30px',
                color: 'azure'
              }} />
            <h4 className="texts">Nairobi, Kenya</h4>
          </div>
          <div className="location">
            <IoIosCall className="sendIcon"
              style={{
                height: '30px',
                width: '30px',
                color: 'azure'
              }} />
            <h4 className="texts">+254 720447239</h4>
          </div>
          <div className="location">
            <IoIosMail className="sendIcon"
              style={{
                height: '30px',
                width: '30px',
                color: 'azure'
              }} />
            <h4 className="textsemail">pavkiptoo@outlook.com</h4>
          </div>
        </div>
        <div className="postChat">
          <form className="postChatForm">
            <input type="email" placeholder="example@gmail.com" rows={3} className="emailinput" onChange={handleEmail} />
            <textarea
              type="text"
              className="emailinput"
              placeholder="Subject"
              rows={3}
              onChange={handleSubject}
            />
            <textarea
              type="text"
              className="emailinput"
              placeholder="Enter Message"
              rows={6}
              onChange={handleInput}
            />
            <button className="SubmitContact">
              <h4 className="texts" onClick={handleSendMessage}>SUBMIT</h4>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Chats;