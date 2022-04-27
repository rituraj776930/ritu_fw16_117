import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components"
import { addition, addvalue, division, multiplication, setnum, subtractvalue } from "../Redux/action";

const Maindiv = styled.div`
    height : 100px ;
    width : 500px ;
    border: 1px solid black;
    margin-left : 500px
`
const Button = styled.button`
    height : 50px ;
    width : 300px ;
    
`
const Input = styled.input`
    height : 70px ;
    width : 300px ;
`
const Counter = ()=>{
    const [data , setdata] = useState(0)
    const dispatch = useDispatch()
    const num = useSelector((state)=>state.value)
    console.log(num)
    
    // var temp;
    const increment = ()=>{
        const payload = {
            value : 1
        }
        const action2 = addvalue(payload.value)
        dispatch(action2)
    }
    const decrement = ()=>{
        const payload = {
            value : 1
        }
        const action3 = subtractvalue(payload.value)
        dispatch(action3)
    }
    const handleChange = (e)=>{
        e = +e
        console.log(typeof(e))
        setdata(e)
    }
    const add = ()=>{
        const payload = {
            value : data
        }
        const action = addition(payload.value)
        dispatch(action)
    }
    const multiply = ()=>{
        const payload = {
            value : data
        }
        const action = multiplication(payload.value)
        dispatch(action)
    }
    const divide = ()=>{
        const payload = {
            value : data
        }
        const action = division(payload.value)
        dispatch(action)
    }
    return(
        <>
        <Maindiv>
            <h1>{num}</h1>
        </Maindiv>
        <Button onClick={increment}>Increment</Button>
        <Button onClick={decrement}>Decrement</Button>
        <div>
        <Input type="number" placeholder="enter number" onChange={(e)=>handleChange(e.target.value)} />
        <div>
        <Button onClick={add}>ADD</Button>
        </div>
        <div>
        <Button onClick={multiply}>multiply</Button>
        </div>
        <div>
        <Button onClick={divide}>Divide</Button>
        </div>
        </div>
        </>
        
        
        
    )
}

export default Counter

