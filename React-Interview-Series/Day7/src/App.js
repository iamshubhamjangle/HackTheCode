import { useState } from "react";

export default function App() {
  const [votes, setVotes] = useState(1000);
  const [candidates, setCandidates] = useState(545);

  return (
    <div className="component">
      <p>Election Commission</p>
      <p>Votes: {votes}</p>
      <p>Candidates: {candidates}</p>
      <Politician setVotes={setVotes} />
    </div>
  );
}

function Politician({ setVotes }) {
  return (
    <div className="component">
      <p>Politician</p>
      <Businessman setVotes={setVotes} />
    </div>
  );
}

function Businessman({ setVotes }) {
  return (
    <div className="component">
      <p>Businessman</p>
      <Citizen setVotes={setVotes} />
    </div>
  );
}

function Citizen({ setVotes }) {
  return (
    <div className="component">
      <p>Citizen</p>
      <button onClick={() => setVotes((v) => v + 1)}>+</button>
    </div>
  );
}
