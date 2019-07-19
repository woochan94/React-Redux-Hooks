import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import Counter from "./../Components/Counter";
import { increment, decrement } from "./../Modules/counter";

const CounterContainer = () => {
  const dispatch = useDispatch();
  // useSelector를 통하여 리덕스 스토어의 상태에 접근 할 수 있다. 
  const counter = useSelector(state => state.counter, []);

  const onIncrease = useCallback(() => {
    dispatch(increment());
  }, [dispatch]);
  const onDecrease = useCallback(() => {
    dispatch(decrement());
  }, [dispatch]);

  return (
    <Counter number={counter} onIncrease={onIncrease} onDecrease={onDecrease} />
  );
};

export default CounterContainer;
