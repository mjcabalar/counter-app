import React from 'react';
import CounterButtons from './component/counterbuttons';
import CounterLabel from './component/counterlabel';


class App extends React.Component{
    render(){
        const css = {
            minHeight: "100vh",
            width: "100%",
            display:"flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center"
        }
        return(
            <div style ={css}>
                <h1>The Momo App</h1>
                <CounterButtons />
                <CounterLabel />
            </div>
        );
    }
}

export default App;