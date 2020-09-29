import axios from 'axios';
import apiconfig from '../../config/api';
import * as taskActionType from './taskActionType';
import { toast } from 'react-toastify';
import apiConfig from '../../config/api';

export const getTask = () => async (dispatch) => {
  try {
    dispatch({
      type: taskActionType.GET_TASK_BEGINS,
    });

    const result = await axios.get(`${apiconfig.API_BASE_URL}/tasks`);
    dispatch({
      type: taskActionType.GET_TASK_SUCCESS,
      payload: result.data,
    });
  } catch (error) {
    console.log('error', error);
    dispatch({
      type: taskActionType.GET_TASK_FAILURE,
    });
    toast.error(error.message);
  }
};

export const addTask = (taskData) => async (dispatch) => {
  try {
    dispatch({ type: taskActionType.ADD_TASK_BEGINS });
    const result = await axios.post(
      `${apiConfig.API_BASE_URL}/tasks`,
      taskData
    );
    dispatch({
      type: taskActionType.ADD_TASK_SUCCESS,
      payload: result.data,
    });
    toast.success('Task Added Successfully!');
  } catch (error) {
    console.log(error);
    dispatch({ type: taskActionType.ADD_TASK_FAILURE });
    toast.error(error.message);
    throw error;
  }
};
