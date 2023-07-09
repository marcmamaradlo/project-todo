import { useContext } from "react";
import { MyContext } from "../Context";

const TodoTask = () => {

    const context = useContext(MyContext);
    const state = context.state;
    const stateTasks = context.state.tasks;
    const stateEditTask = context.state.editTask;
    const stateEditText = context.state.editText;
    const stateEditTaskIndex = context.state.editTaskIndex;
    const handleDeleteButton = context.handleDeleteButton;
    const handleCloseButton = context.handleCloseButton;
    const handleEditButton = context.handleEditButton;
    const handleDoneButton = context.handleDoneButton;
    const handleEditText = context.handleEditText;
    const handlecheckboxes = context.handlecheckboxes;

    const tasksMapFunction = () => {

        return (stateTasks === []
            ? null
            : state.tasks.map((item, index) => (
                <div className='todo-task' key={index}>
                    {(
                        stateEditTaskIndex === index
                            ? stateEditTask
                                ? <>
                                    <input
                                        type='checkbox'
                                        className='checkbox'
                                        onClick={handlecheckboxes}
                                        name={item} />
                                    <input
                                        type='text'
                                        onChange={handleEditText}
                                        value={stateEditText}
                                        placeholder={item}
                                        name={index}
                                        id={index}
                                    />
                                    <i
                                        className="fa-solid fa-check"
                                        onClick={handleDoneButton}
                                    ></i>
                                    <i
                                        className="fa-solid fa-xmark"
                                        onClick={handleCloseButton}></i>
                                </>
                                : <>
                                    <input
                                        type='checkbox'
                                        className='checkbox'
                                        onClick={handlecheckboxes}
                                        name={item} />
                                    <input
                                        type='text'
                                        value={item}
                                        name={index}
                                        readOnly={true} />
                                    <i
                                        className="fa-regular fa-pen-to-square"
                                        id={index}
                                        onClick={handleEditButton}
                                    ></i>
                                    <i
                                        className="fa-regular fa-trash-can"
                                        onClick={handleDeleteButton}
                                    ></i>
                                </>
                            : <>
                                <input
                                    type='checkbox'
                                    className='checkbox'
                                    onClick={handlecheckboxes}
                                    name={item} />
                                <input
                                    type='text'
                                    value={item}
                                    name={index}
                                    readOnly={true} />
                                <i
                                    className="fa-regular fa-pen-to-square"
                                    id={index}
                                    onClick={handleEditButton}
                                ></i>
                                <i
                                    className="fa-regular fa-trash-can"
                                    onClick={handleDeleteButton}
                                ></i>
                            </>
                    )}
                </div>
            ))
        )
    };

    return (
        <>
            {tasksMapFunction()}
        </>
    )
}

export default TodoTask;