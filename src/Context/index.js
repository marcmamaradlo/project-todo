import React, { Component } from 'react';

const MyContext = React.createContext();

class MyProvider extends Component {

    state = {
        mainInput: '',
        mainInputStatus: '',
        tasks: ['go shopping'],
        editTask: false,
        editTaskIndex: 100,
        editText: '',
        deleteIndex: 100,
        completedTasks: '',
    }

    handlecheckboxes = () => {
        const inputElements = document.querySelectorAll('input[type="checkbox"]:checked')
        let count = 0;
        for (var i = 0; i < inputElements.length; i++) {
            if (inputElements[i].type === "checkbox" && inputElements[i].checked === true) {
                count++;
            }
        }
        let stateTasksLength = this.state.tasks.length;
        let finalOutput = `${count}/${stateTasksLength} completed`;
        this.setState({ completedTasks: finalOutput });
    }

    handleOnChangeMainInput = (e) => {
        this.setState({ mainInput: e.target.value });
    }

    handleFormSubmit = (e) => {
        e.preventDefault();

        const mainInput = this.state.mainInput
        const tasks = this.state.tasks;
        this.setState({ mainInput: '' });
        if (mainInput === '') {
            this.setState({ mainInputStatus: 'input field cannot be blank' });
        }
        else {
            tasks.push(mainInput)
            this.setState({ mainInputStatus: '' })
        }

        this.handlecheckboxes();
    }

    handleDeleteButton = (e) => {
        this.setState({ deleteIndex: parseInt(e.target.id) })
        const deleteIndex = this.state.deleteIndex;
        this.state.tasks.splice(deleteIndex, 1);

        this.handlecheckboxes();
    }

    handleDoneButton = () => {
        const editTaskIndex = this.state.editTaskIndex;
        const editText = this.state.editText;
        const tasks = this.state.tasks;

        tasks.splice(editTaskIndex, 1, editText);
        if (this.state.editText.length > 1) {
            this.setState({ editText: '' })
        }
        this.setState({ editTask: false, });
    }

    handleEditText = (e) => {
        this.setState({ editText: e.target.value, });
    }

    handleEditButton = (e) => {
        this.setState({
            editTask: true,
            editTaskIndex: parseInt(e.target.id)
        });
    }

    handleCloseButton = () => {
        this.setState({
            editTask: false,
            editTaskIndex: 100
        });
    }

    render() {

        const { state, handleOnChangeMainInput, handleFormSubmit,
            handleDeleteButton, handleEditButton, handleDoneButton,
            handleEditText, handleCloseButton, handlecheckboxes,
        } = this;

        // handlecheckboxes()
        return (
            <MyContext.Provider value={{
                state, handleOnChangeMainInput, handleFormSubmit,
                handleDeleteButton, handleEditButton, handleDoneButton,
                handleEditText, handleCloseButton, handlecheckboxes,
            }}>
                {this.props.children}
            </MyContext.Provider>
        )
    }
}

export { MyContext, MyProvider };