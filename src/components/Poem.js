import React, {useState} from "react";

function Poem( {poem} ) {

  const [isMarkAsRead, setIsMarkAsRead] = useState(true)

  function handleReadClick(event) {
    setIsMarkAsRead(!isMarkAsRead)
  }
  return (
    <div>
      <h3>{poem.title}</h3>
      <p>{poem.content}</p>
      <p>
        <strong>{poem.author}</strong>
      </p>
      {isMarkAsRead ? (
        <button onClick={handleReadClick}>Mark as read</button>
      ) : (
        <button onClick={handleReadClick}>Mark as unread</button>
      )}
    </div>
  );
}

export default Poem;
