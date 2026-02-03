import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./component/Card";

const App = () => {
  const [userdata, setUserdata] = useState([]);
  const [idx, setIdx] = useState(1);
  const getdata = async () => {
    const response = await axios.get(
      `https://picsum.photos/v2/list?page=${idx}&limit=10`,
    );
    setUserdata(response.data);
  };

  let print = <h2 className="text-shadow-gray-50">No User Available</h2>;
  if (userdata.length > 0) {
    print = userdata.map((el, idx) => {
      return (
        <div key={idx}>
          <Card el={el} />
        </div>
      );
    });
  }
  useEffect(() => {
    getdata();
  }, [idx]);
  return (
    <>
      
      <div className="bg-black h-screen  p-4 text-white overflow-auto">
        <h1 className="bg-white text-black w-fit px-5 py-2 m-auto rounded mb-2 font-extrabold">Our Gallery</h1>
        <div className="flex flex-wrap gap-4">{print}</div>
        <div className="flex justify-center gap-2">
          <button
            onClick={() => {
              if (idx > 1) {
                setIdx(idx - 1);
              }
            }}
            className="bg-amber-400 text-black px-4 py-2 font-bold rounded active:scale-95"
          >
            Prev
          </button>
          <span className="font-extrabold flex justify-center items-center">
          <h4>page{idx}</h4>
          </span>
          <button
            onClick={() => {
              setIdx(idx + 1);
            }}
            className="bg-amber-400 text-black px-4 py-2 font-bold rounded active:scale-95"
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default App;
