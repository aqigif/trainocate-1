import { Link } from "react-router-dom";
import useHome from "./Home.handler";

function Home() {
  const { handleAdd, handleChangeText, handleDelete, error, result, input, isLoading } =
    useHome();

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
      {isLoading && <p>Loading...</p>}
      {<p style={{ color: "red", fontSize: 10 }}>{error}</p>}
      <div style={{ flex: 1, flexDirection: "row" }}>
        <ul>
          {result.map((item, index) => (
            <div key={index}>
              <li onClick={() => handleDelete(index)} key={index}>
                {item}
              </li>
              <button>delete</button>
            </div>
          ))}
        </ul>
      </div>
      <Link to={"/profile"}>clik with link to Profile</Link>
      <br />
      <br />
      <a href={"/profile"}>clik with link to Profile</a>
    </div>
  );
}

export default Home;
