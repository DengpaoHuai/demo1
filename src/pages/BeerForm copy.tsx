import { useState } from "react";

const BeerForm = () => {
  const [name, setName] = useState("");

  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input value={name} onChange={(e) => setName(e.target.value)} />
        <button>ok</button>
      </form>
    </div>
  );
};

export default BeerForm;
