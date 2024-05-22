import React, { useContext } from 'react'
// import { GreetContext, Greet1Context } from './Acontext'
import { GreetContext } from './Acontext'


function Ccontext() {

  const useCon = useContext(GreetContext)

  return (
    <h1>Greet: {useCon.greet} {useCon.greet1}</h1>
  )
}

export default Ccontext

// { <GreetContext.Consumer>
// {
//   (val) => {
//     return (
//       <Greet1Context>
//         {
//           (val2) => {
//             return <h1> Greet: {val} {val2}</h1>
//           }
//         }
//       </Greet1Context>
//     )
//   }
// }
// </GreetContext.Consumer> }