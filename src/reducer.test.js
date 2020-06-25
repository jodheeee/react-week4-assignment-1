import reducer from './reducer';

import {
  updateTaskTitle,
  addTask,
} from './actions';

describe('reducer', () => {
  context('updateTaskTitle', () => {
    it('taskTitle을 바꿔 새로운 상태를 반환한다.', () => {
      const newState = reducer({
        taskTitle: '',
      }, updateTaskTitle('New Task'));

      expect(newState.taskTitle).toBe('New Task');
    });
  });

  describe('addTask', () => {
    it('새로운 할 일을 추가한 상태를 반환한다.', () => {
      const previousState = {
        newId: 1,
        taskTitle: 'New Task',
        tasks: [],
      };

      const newState = reducer(previousState, addTask());

      expect(newState.newId).toBe(2);
    });
  });
});
