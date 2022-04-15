import { fireEvent, render } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';
import { addTask } from '../redux/actions';
import InputContainer from './InputContainer';

jest.mock('react-redux');

describe('InputContainer', () => {
  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);

  beforeEach(() => {
    jest.clearAllMocks();
  });

  context('with taskTitle', () => {
    it('input has value "New Title"', () => {
      useSelector.mockImplementation((selector) => selector({
        taskTitle: 'New Title',
      }));

      const { getByPlaceholderText } = render(<InputContainer />);

      expect(getByPlaceholderText('할 일을 입력해 주세요').value).toBe('New Title');
    });

    it('activates "addTask" actions', () => {
      useSelector.mockImplementation((selector) => selector({
        taskTitle: 'New Title',
      }));

      const { getByText } = render(<InputContainer />);

      fireEvent.click(getByText('추가'));

      expect(dispatch).toBeCalledWith(addTask());
    });
  });

  context('without taskTitle', () => {
    it('input has no value', () => {
      useSelector.mockImplementation((selector) => selector({
        taskTitle: '',
      }));

      const { getByPlaceholderText } = render(<InputContainer />);

      expect(getByPlaceholderText('할 일을 입력해 주세요').value).toBe('');
    });
  });
});
