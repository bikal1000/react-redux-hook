import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'; //...usedispatch is like mapDispatchtoprops in class base component .... useSelector is same as mapstatetoprops in class based components
import { getTask } from '../store/task/taskAction';
import { Container, Row, Col, Button, Spinner } from 'react-bootstrap';
import { taskList, getTaskLoading } from '../store/task/taskSelector';

//to dispatch the action as soon as the component is loaded we use a hook knows as useEffect which is similar to componentdidmount in class based component

export default function ListTask() {
  const dispatch = useDispatch();
  const taskListSelector = useSelector(taskList);
  const getTaskLoadingSelector = useSelector(getTaskLoading);

  useEffect(() => {
    getaskList();
  }, []); //second argument is dependency array which when not defined will make the oode run forever and empty array will make it run only once when the component is loaded and we can define something inside the array to make them run more than once

  const getaskList = () => {
    dispatch(getTask());
  };

  return (
    <Container>
      {!getTaskLoadingSelector && taskListSelector.length === 0 && (
        <h1>Task List Empty</h1>
      )}
      {getTaskLoadingSelector && (
        <Spinner animation="border" className="page-loader" />
      )}
      <Row className="justify-content-center mt-5">
        <Col>
          <ul className="list-group">
            {taskListSelector.map((task) => (
              <li
                key={task.id}
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                {task.title}
                <Button size="sm" variant="outline-danger">
                  <i className="fas fa-trash"></i>
                </Button>
              </li>
            ))}
          </ul>
        </Col>
      </Row>
    </Container>
  );
}
