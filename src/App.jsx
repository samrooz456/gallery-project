import axios from "axios";
import { useEffect, useState } from "react";

const App = () => {
  const [userdata, setUserdata] = useState([]);
  const [idx, setIdx] = useState(1);
  const getdata = async () => {
    const response = await axios.get(
      `https://picsum.photos/v2/list?page=${idx}&limit=30`,
    );
    setUserdata(response.data);
  };

  let print = <h2 className="text-shadow-gray-50">No User Available</h2>;
  if (userdata.length > 0) {
    print = userdata.map((el, idx) => {
      return (
        <div key={idx}>
          <a href={el.url} target="_blank">
            <div className="h-40 w-100  bg-white rounded-xl overflow-hidden">
              <img
                className="h-full w-full object-cover "
                src={el.download_url}
                alt=""
              />
            </div>
            <h2 className="font-bold text-lg">{el.author}</h2>
          </a>
        </div>
      );
    });
  }
  useEffect(() => {
    getdata();
  }, [idx]);
  return (
    <>
      <h1 className="fixes font-bold">{idx}</h1>
      <div className="bg-black h-screen  p-4 text-white overflow-auto">
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
            .
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
