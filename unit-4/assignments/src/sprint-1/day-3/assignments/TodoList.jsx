import React from 'react'

export default function TodoList({todos}) {
    return (
        <>
        {todos.map(function(elem){
            return (
                <h1>{elem}</h1>
            )
        })}
        </>
        
    )
    
}
