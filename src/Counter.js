import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {minusOne, plusOne, resetCounter, userNum} from "./action";

function Counter() {

    const counter = useSelector((state) => state.value)

    const dispatch = useDispatch()

    const [inputAmount, setInputAmount] = useState("2")

    function handlePlus (){
        dispatch(plusOne())
    }
    function handleMinus (){
        dispatch(minusOne())
    }
    function handleReset (){
        dispatch(resetCounter())
    }
    function handleInputAmount (){
        dispatch(userNum(Number(inputAmount)))
    }

    return (
        <div>
            <div>
                <h1 className="h1 m-5">{counter}</h1>
            </div>
            <div>
                <input
                value={inputAmount}
                onChange={e => setInputAmount(e.target.value)}/>
                <button className="btn btn-light" onClick={handleInputAmount}>
                    Add num
                </button>
                <button className="btn btn-dark" onClick={handlePlus}>plus</button>
                <button className="btn btn-danger" onClick={handleMinus}>minus</button>
                <button className="btn btn-info" onClick={handleReset}>reset</button>
            </div>
        </div>
    );
}

export default Counter;