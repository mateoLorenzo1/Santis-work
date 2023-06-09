import { useState } from "react";

interface IFruit {
  name: string;
  votes: number;
}

const FRUITS: IFruit[] = [
  { name: "Oranges", votes: 3 },
  { name: "Bananas", votes: 2 },
  { name: "Apples", votes: 5 },
];

const Product = ({ data }: { data: IFruit }) => {
  const [votes, setVotes] = useState<number>(data.votes);

  const handlePlus = () => {
    setVotes(votes + 1);
  };

  const handleMinus = () => {
    if (votes === 0) return;
    setVotes(votes - 1);
  };

  return (
    <li style={{ listStyle: "none", display: "flex", alignItems: "center" }}>
      <p style={{ minWidth: "80px", textAlign: "left" }}>{data.name}</p> |
      <p style={{ minWidth: "80px", textAlign: "center" }}>Votes: </p>
      <p style={{ minWidth: "40px", textAlign: "left" }}>{votes}</p>
      <button onClick={handlePlus}>+</button>
      <button onClick={handleMinus}>-</button>
    </li>
  );
};

export const Grocery = () => {
  return (
    <ul style={{ padding: 0 }}>
      {FRUITS.map((fruit) => (
        <Product key={fruit.name} data={fruit} />
      ))}
    </ul>
  );
};
