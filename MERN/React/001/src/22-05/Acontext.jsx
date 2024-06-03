import React, { createContext } from 'react'
import Bcontext from './Bcontext '

const GreetContext = createContext();

function Acontext() {

    const greet = "Hello"
    const greet1 = "Divyesh"

    return (
        <>
            <GreetContext.Provider value={{ greet, greet1 }}>
                <Bcontext />
                <h1 className='text-red-500'>hello</h1>
            </GreetContext.Provider>
        </>
    )
}

export default Acontext
export { GreetContext };


// import React, { createContext } from 'react'
// import Bcontext from './Bcontext '

// const GreetContext = createContext();
// const Greet1Context = createContext();

// function Acontext() {

//     const greet = "Hello"
//     const greet1 = "Divyesh"

//     return (
//         <>
//             <GreetContext.Provider value={greet}>
//                 <Greet1Context.Provider value={greet1}>
//                     <Bcontext />
//                 </Greet1Context.Provider>
//             </GreetContext.Provider>
//         </>
//     )
// }

// export default Acontext
// export { GreetContext, Greet1Context };