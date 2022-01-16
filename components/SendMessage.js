import { useState } from "react";
import { useMoralis } from "react-moralis";

function SendMessage({ endOfMessagesRef }) {
  const { user, Moralis } = useMoralis();
  const [input, setInput] = useState("");
  const sendMessage = (e) => {
    console.log(endOfMessagesRef);
    e.preventDefault();
    if (!input) return;

    const Messages = Moralis.Object.extend("Messages");
    const messages = new Messages();
    messages
      .save({
        message: input,
        username: user.getUsername(),
        ethAddress: user.get("ethAddress"),
      })
      .then(
        (message) => {},
        (error) => {
          console.log(error.message);
        }
      );
    // endOfMessagesRef.current.scrollIntoView({ behavior: "smooth" });
    setInput("");
  };
  return (
    <form className="flex w-11/12 fixed bottom-10 bg-black opacity-80 px-6 py-4 max-w-2xl rounded-full border-4 border-blue-400 shadow-xl">
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        type="text"
        className="flex-grow outline-none bg-transparent text-white placeholder-gray-500 pr-5"
        placeholder={`Send a message ${user.getUsername()}`}
      />
      <button
        type="submit"
        onClick={sendMessage}
        className="font-bold text-pink-500">
        Send
      </button>
    </form>
  );
}

export default SendMessage;
