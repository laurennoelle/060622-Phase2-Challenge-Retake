import React, {useState} from "react";

function NewPoemForm( {addNewPoem}) {

  const [poemTitle, setPoemTitle] = useState("")
  const [poemAuthor, setPoemAuthor] = useState("")
  const [poemContent, setPoemContent] = useState("")

  function handleTitle(event) {
    setPoemTitle(event.target.value)
  }

  function handleAuthor(event) {
    setPoemAuthor(event.target.value)
  }

  function handleContent(event) {
    setPoemContent(event.target.value)
  }

  const formData = {
    "title": poemTitle,
    "content": poemContent,
    "author": poemAuthor
  }

  function handleSubmit(event) {
    event.preventDefault()
  
    fetch("http://localhost:8004/poems", {
      method: 'POST',
      headers: {
        "Content-Type" : "application/json",
      },
      body: JSON.stringify(formData)
    })
      .then(res => res.json())
      .then(newItem => addNewPoem(newItem));
  }

  return (
    <form className="new-poem-form" onSubmit={handleSubmit}>
      <input placeholder="Title" onChange={handleTitle} />
      <input placeholder="Author" onChange={handleAuthor}/>
      <textarea placeholder="Write your masterpiece here..." rows={10} onChange={handleContent}/>
      <input type="submit" value="Share your masterpiece" />
    </form>
  );
}

export default NewPoemForm;
