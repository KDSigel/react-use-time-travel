import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

describe('time travel', () => {
  it('should add a new date when date selected', () => {
    render(<App />);

    const undoBtn = screen.getByText('undo');
    const redoBtn = screen.getByText('redo');
    const inputDate = screen.getByLabelText('inputDate');

    screen.getByText('Please select a date');

    fireEvent.change(inputDate, { target: { value: '2022-01-01' } });
    screen.getByText('2022-01-01');

    fireEvent.change(inputDate, { target: { value: '2022-02-22' } });
    screen.getByText('2022-02-22');

    fireEvent.change(inputDate, { target: { value: '2022-03-14' } });
    screen.getByText('2022-03-14');

    fireEvent.click(undoBtn);
    screen.getByText('2022-02-22');

    fireEvent.click(undoBtn);
    screen.getByText('2022-01-01');

    fireEvent.click(redoBtn);
    screen.getByText('2022-02-22');

    fireEvent.change(inputDate, { target: { value: '2022-04-04' } });
    screen.getByText('2022-04-04');

    fireEvent.click(undoBtn);
    screen.getByText('2022-02-22');

    fireEvent.click(undoBtn);
    screen.getByText('2022-01-01');

    fireEvent.click(redoBtn);
    screen.getByText('2022-02-22');

    fireEvent.click(redoBtn);
    screen.getByText('2022-04-04');

    fireEvent.click(redoBtn);
    screen.getByText('2022-03-14');

  });
});
