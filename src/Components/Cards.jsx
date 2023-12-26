import { doc, getDoc, getDocs } from "firebase/firestore";
import React, { useState, useEffect } from "react";
import { TailSpin, Audio, ThreeDots } from "react-loader-spinner";
import ReactStars from "react-stars";
import { movieRef } from "./firebase/firebase";
import { Link } from "react-router-dom";

function Cards() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getData() {
      setLoading(true);
      const _data = await getDocs(movieRef);
      console.log(_data);
      _data.forEach((doc) => {
        setData((prv) => [...prv, { ...doc.data(), id: doc.id }]);
      });
      setLoading(false);
    }
    getData();
  }, []);
  return (
    <>
      <div className="flex flex-wrap justify-between p-3 mt-2">
        {loading ? (
          <div className="w-full flex justify-center items-center h-96">
            <ThreeDots height={40} color="white" />
          </div>
        ) : (
          data.map((e, i) => {
            return (
              <Link to={`/detail/${e.id}`}>
              <div key={i}
                className="font-medium shadow-lg px-3 hover:-translate-y-5 cursor-pointer mt-6 transition-all duration-500">
                <img className="h-60 md:h-72" src={e.image} alt="" />
                <h1 className="">
                  <span className="text-gray-500">Name:</span> {e.title}
                </h1>
                <h1 className="flex items-center">
                  <span className="text-gray-500 mr-1">Rating:</span>
                  <ReactStars size={20} half={true} value={5} edit={false} />
                </h1>
                <h1>
                  <span className="text-gray-500">Year:</span> {e.year}
                </h1>
              </div>
              </Link>
            );
          })
        )}
      </div>
    </>
  );
}

export default Cards;
