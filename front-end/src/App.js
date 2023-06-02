import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import {addApi, subtractApi} from "./service";

function App() {
    const [number1, setNumber1] = useState(0);
    const [number2, setNumber2] = useState(0);
    const [result, setResult] = useState("No result yet");

    return (<div className="App">
            <header className="App-header">
                Simple Front-end app
            </header>
            <label>Enter two numbers to add/subtract:</label>
            <input type="number" placeholder="Enter the first number"
                   onChange={event => setNumber1(+event.target.value)}
            />
            <input type="number" placeholder="Enter the second number"
                   onChange={event => setNumber2(+event.target.value)}
            />
            <button onClick={() => {
                addApi(number1, number2).then(result => setResult(result.result));
            }}>Add
            </button>
            <button onClick={() => {
                subtractApi(number1, number2).then(result => setResult(result.result));
            }}>Subtract
            </button>
            <p>Result: {result}</p>
        </div>);
}


export default App;
