import "./App.css";
import { Provider } from "react-redux";
import TaskPage from "./features/tasks/TaskPage";
import store from "./redux/store";

function App() {
  return (
    <>
      <Provider store={store}>
        <div className="App">
          <TaskPage />
        </div>
      </Provider>
    </>
  );
}

export default App;
