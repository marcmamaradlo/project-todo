import { MyProvider } from "./Context";
import TodoApp from "./Components/TodoApp";
import './Styles/style.css'

const App = () => {
  return (
    <MyProvider>
      <TodoApp />
    </MyProvider>
  )
}

export default App;
