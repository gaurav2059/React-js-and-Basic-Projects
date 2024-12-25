import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'

function MyApp() {
    return (
        <div>
            <h1>custom app</h1>
        </div>
    )
}

// const ReactElement = {
//     type:'a',
//     props:{
//         href:'https://google.com',
//         target:'_blank'
//     },
//     children: 'Click me to visit google'
// }
const anotherElement = (
    <a href ="https://google.com" target='_blank'>Visit Google</a>
)
const anotherUser = "hello gaurav"

const ReactElement = React.createElement(

    'p',
    {
        href:'https://google.com',
        target:'_blank'
    },
     'Click me to visit google',
     anotherUser,  // its called variable injections in react ......anotherUser
     anotherElement
)
ReactDOM.createRoot(document.getElementById('root'))
.render(

ReactElement 

)
