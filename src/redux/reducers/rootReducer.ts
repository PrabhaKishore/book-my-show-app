import { combineReducers } from "redux";
import taskReducer from "../../features/tasks/taskSlice";
// import authReducer from "../../features/auth/authSlice";

const rootReducer = combineReducers({
  tasks: taskReducer,
  // auth: authReducer,
});

export default rootReducer;
