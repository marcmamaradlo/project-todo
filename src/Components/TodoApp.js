import { useContext, useEffect } from "react";
import { MyContext } from "../Context";
import TodoTask from "./TodoTask";

const TodoApp = () => {

    const context = useContext(MyContext);
    const stateMainInput = context.state.mainInput;
    const stateMainInputStatus = context.state.mainInputStatus;
    const handleOnChangeMainInput = context.handleOnChangeMainInput;
    const handleFormSubmit = context.handleFormSubmit;
    const completedTasks = context.state.completedTasks;

    return (
        <>
            <h1>Todo App</h1>
            <form
                onSubmit={handleFormSubmit}
                name='main-form'
            >
                <p className='status-text'>{stateMainInputStatus}</p>
                <div className='main-input'>
                    <input
                        type='text'
                        onChange={handleOnChangeMainInput}
                        value={stateMainInput}
                        placeholder='Click here to add a Task'
                        name='main-input' />
                    <button type='submit'><i className="fa-solid fa-circle-plus"></i></button>
                </div>
            </form>
            <div>
                <TodoTask />
            </div>
            <p className='completed-text'>{completedTasks}</p>
        </>
    )
}

export default TodoApp;