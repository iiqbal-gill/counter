import Count from "./Count";
import CountButtons from "./CountButtons";
import Reset from "./Reset";
import Title from "./Title";
import { useState } from "react";
export default function Card() {
  const [count, setCount] = useState(0);
  return (
    <>
      <div className="card">
        <Title />
        <Count count={count} />
        <Reset setCount={setCount}/>
        <CountButtons setCount={setCount} count={count} />
      </div>
    </>
  );
}
