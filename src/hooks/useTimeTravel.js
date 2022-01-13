import { useEffect, useState } from 'react';

export default function useTimeTravel() {
  const [dates, setDates] = useState([]);
  const [index, setIndex] = useState(-1);

const current = index > -1 ? dates[index]
    : '';

  const save = (event) => {
    setDates((previousState) => [...previousState, event.target.value]);
    setIndex(dates.length)
  };

  const undo = () => {setIndex(index -1)};
  const redo = () => {setIndex(index +1)};

  return { save, undo, redo, current };
}


// take the dates from start to current index (slice), then insert e.target.value, then add the rest of the dates after.
// https://www.w3schools.com/jsref/jsref_slice_array.asp