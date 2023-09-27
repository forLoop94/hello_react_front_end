import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FetchGreeting } from './redux/greetings/greetingsSlice';

const Greeting = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(FetchGreeting());
  }, [dispatch]);

  const data = useSelector((state) => state.greetings.greeting);

  return (
    <div>
      <h1>Hello</h1>
      <p>{data}</p>
      <p>data</p>
    </div>
  );
};

export default Greeting;
