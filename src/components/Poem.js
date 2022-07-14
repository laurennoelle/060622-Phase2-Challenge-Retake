import React, {useState} from "react";

function Poem( {poem, deletePoem} ) {

  function handleDelete(event) {
  fetch(`http://localhost:8004/poems/${poem}`, {
    method: "DELETE",
  }) 
  deletePoem(poem);    
}

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
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default Poem;
