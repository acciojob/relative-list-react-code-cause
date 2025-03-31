import React from 'react'

const App = () => {

  let relativeList = ["Yashaswini", "Arjun", "Ashish"];

  return (
    <div id="main">
           
           <ol id="relativeList">
             {
              relativeList.map((name,key)=>{
               return <li key={`relativeListItem${key+1}`}>{name}</li>

              })
             }


           </ol>
              
    </div>
  )
}

export default App
