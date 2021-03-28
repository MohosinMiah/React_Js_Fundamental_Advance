import React, {useState,useRef} from "react"

function useRefExample() {
    const [newTodoValue, setNewTodoValue] = useState("")
    const [todosList, setTodosList] = useState([])
    const inputRef = useRef(null)

    // Set New Value
    function handleChange(event) {
        setNewTodoValue(event.target.value)
    }
    
    // Adding New Element To The Previous Elements

    function addTodo(event) {
        event.preventDefault()
        setTodosList(prevTodosList => [...prevTodosList, newTodoValue])
        setNewTodoValue("")

        // Get Back Cursor  to the Input Field or Focus on Input Field
        inputRef.current.focus()
        
    }
    
    const allTodos = todosList.map(todo => <p key={todo}>{todo}</p>)
    
    return (
        <div>
            <form>
                <input ref={inputRef} type="text" name="todo" value={newTodoValue} onChange={handleChange}/>
                <button onClick={addTodo}>Add todo item</button>
            </form>
            {allTodos}
        </div>
    )
}

export default useRefExample