import React, { useState } from 'react'

export const AddCategory = ({setCategories}) => {

    const [inputValue, setinputValue] = useState('')

    const handleChange = (event) => {
        setinputValue(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        setCategories( category => [inputValue, ...category] )
    }

    return (
        <form onSubmit = {handleSubmit}>
            <input
                type="text"
                value = {inputValue}
                onChange = {handleChange}
            /> 
            <br/>
            <button > Agregar </button>
        </form>
    )
}
