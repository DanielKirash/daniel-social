import React, { useState } from "react"



function Comp({element}:any) {

    const[like, setLike] = useState(element.reactions.likes)
    const[view, setView] = useState(element.views)

    return (
      <div className="cards" onMouseEnter={() => setView(view+1)}>
              <div className="title">{element.title}</div>
              <div>
              <div className="body">
                <span>{element.body}</span>
                </div>
              </div>
              <div className="likes">
                <div className="views">👁️ {view}</div>
                <div className="like" onClick={() => setLike(like+1)}>❤️ {like}</div>
              </div>
            </div>
    )
  }
  export default Comp