import { useState } from "react";
import "./styles.css";
import emojis from "./emojidata";

export default function App() {
  let emojiKeys = Object.keys(emojis);
  const [emojiMeans, setEmojiMeans] = useState("");

  function emojiClick(emoji) {
    //console.log(index);
    //console.log(emojis[emoji]);
    setEmojiMeans(emojis[emoji]);
  }

  function inputChange(event) {
    //console.log(event.target.value);
    let inputEmoji = event.target.value;
    if (inputEmoji in emojis) {
      console.log("emoji found");
      setEmojiMeans(emojis[inputEmoji]);
    } else {
      console.log("emoji not found");
      setEmojiMeans(
        "we don't have that in our dictionary , to be honest only below emojis which you can see are searchable:)"
      );
    }
  }

  return (
    <div className="App">
      <h1>know about emojis </h1>
      <input
        type="text"
        className="inputTb"
        placeholder="Input emoji here or click on below available emojis"
        onChange={inputChange}
      />
      <h3 className="emojiMean">{emojiMeans}</h3>
      <div className="emojiDiv">
        {emojiKeys.map((emoji, index) => {
          return (
            <div
              key={index}
              className="emoji"
              onClick={() => {
                emojiClick(emoji);
              }}
            >
              {emoji}
            </div>
          );
        })}
      </div>
    </div>
  );
}
