import React from 'react';
import { makeAutoObservable } from "mobx"
import { observer } from "mobx-react"

class ClickCounter {
  count: number = 0

  constructor() {
    makeAutoObservable(this)
  }

  increment() {
    this.count += 1
  }

  decriment() {
    this.count -= 1
  }
}

const clickCounter = new ClickCounter();

const CounterView = observer(({ counter }: { counter : ClickCounter}) => {
  return (
    <div className="clicks">Clicks: {counter.count}</div>
  )
});

const Counter = () => {
  return (
    <div className="counter">
      <CounterView counter={clickCounter} />
      <div className="btn-container">
        <button onClick={() => clickCounter.increment()}>Increment</button>
        <button onClick={() => clickCounter.decriment()}>Decriment</button>
      </div>
    </div>
  );
}

export default Counter;