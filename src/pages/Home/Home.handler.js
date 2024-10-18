import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../../store/action";

const useHome = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");
  const [error, setError] = useState("");
  // const [result, setResult] = useState([]);
  const { result } = useSelector((state) => state);

  useEffect(() => {
    if (result.length > 0) {
      console.log("data telah ditam");
    }
  }, [result]);

  const handleAdd = () => {
    dispatch(addItem(input));
    setInput("");
  };

  const handleDelete = (idx) => {
    // setResult((prev) => prev.filter((_, index) => index !== idx));
    console.log(idx);
  };

  const handleChangeText = (value) => {
    setInput(value);
    if (value.length <= 3) {
      setError("Karakter harus lebih dari 3");
    } else {
      setError("");
    }
  };

  return { error, handleChangeText, handleDelete, handleAdd, result, input };
};

export default useHome;
