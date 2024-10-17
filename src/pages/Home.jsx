import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addItem } from "../store/action/todoAction";

function Home() {
  const dispatch = useDispatch();  
  const [input, setInput] = useState("");
  const [error, setError] = useState("");
  // const [result, setResult] = useState([]);
  const { result } = useSelector((state) => state)

  useEffect(() => {
    if (result.length > 0) {
      console.log("data telah ditam");
    }
  }, [result]);

  const handleAdd = () => {
    dispatch(addItem(input));
    setInput("")
  };

  const handleDelete = (idx) => {
    // setResult((prev) => prev.filter((_, index) => index !== idx));
    console.log(idx)
  };

  const handleChangeText = (value) => {
    setInput(value);
    if (value.length <= 3) {
      setError("Karakter harus lebih dari 3");
    } else {
      setError("");
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <div style={{ flex: 1, flexDirection: "row" }}>
        <input
          placeholder="text"
          value={input}
          onChange={(e) => handleChangeText(e.target.value)}
        />
        <button onClick={handleAdd}>add</button>
      </div>
      {<p style={{color: 'red', fontSize: 10}}>{error}</p>}
      <div style={{ flex: 1, flexDirection: "row" }}>
        <ul>
          {result.map((item, index) => (
            <div>
              <li onClick={() => handleDelete(index)} key={index}>
              {item}
            </li>
            <button>delete</button>
            </div>
          ))}
        </ul>
      </div>
      <Link to={'/profile'}>clik with link to Profile</Link>
      <br />
      <br />
      <a href={'/profile'}>clik with link to Profile</a>
    </div>
  );
}

export default Home;
