import * as taskActionType from './taskActionType';

const initialState = {
  taskList: [],
  getTaskLoading: false,
  addTaskLoading: false,
};

const taskReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case taskActionType.GET_TASK_BEGINS:
      return {
        ...state,
        getTaskLoading: true,
      };
    case taskActionType.GET_TASK_SUCCESS:
      return {
        ...state,
        taskList: payload,
        getTaskLoading: false,
      };
    case taskActionType.GET_TASK_FAILURE:
      return {
        ...state,
        getTaskLoading: false,
      };
    case taskActionType.ADD_TASK_BEGINS:
      return {
        ...state,
        addTaskLoading: true,
      };
    case taskActionType.ADD_TASK_SUCCESS:
      return {
        ...state,
        taskList: [...state.taskList, payload],
        addTaskLoading: false,
      };
    case taskActionType.ADD_TASK_FAILURE:
      return {
        ...state,
        addTaskLoading: false,
      };
    default:
      return state;
  }
};

export default taskReducer;
