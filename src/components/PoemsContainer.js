import React from "react";
import Poem from "./Poem";

function PoemsContainer( {poems, deletePoem} ) {
  return (
    <div className="poems-container">
      {poems.map((poem) => <Poem key={poem.id} poem={poem} deletePoem={deletePoem}/>)}
    </div>
  );
}

export default PoemsContainer;
