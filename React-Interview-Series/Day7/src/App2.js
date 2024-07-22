import { useVoteStore } from "./store.js";

export default function App() {
  const { votes, candidates } = useVoteStore();

  return (
    <div className="component">
      <p>Election Commission</p>
      <p>Votes: {votes}</p>
      <p>Candidates: {candidates}</p>
      <Pataka />
    </div>
  );
}

function Pataka() {
  return (
    <div className="component">
      <p>Pataka</p>
      <Bulbul />
    </div>
  );
}

function Bulbul() {
  return (
    <div className="component">
      <p>Bulbul</p>
      <Citizen />
    </div>
  );
}

function Citizen() {
  const { incrementVote } = useVoteStore();

  return (
    <div className="component">
      <p>Citizen</p>
      <button onClick={incrementVote}>+</button>
    </div>
  );
}
