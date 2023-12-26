import React, { useState, useEffect } from 'react'
import ReactStars from 'react-stars'
import { useParams } from 'react-router-dom'
import { db } from './firebase/firebase';
import { doc, getDoc } from 'firebase/firestore';
import { Bars, ThreeCircles } from 'react-loader-spinner';
import Review from './Review';
function Detail() {
  const {id} = useParams();
  // window.alert(id);
  const [detail, setDetail] = useState({
    title: "",
    year: "",
    image: "",
    description: "",
    rating: 0,
    rated: 0
  });
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true)
    async function getData(){
      const _doc = doc(db, "Movies", id);
      const _data = await getDoc(_doc);
      setDetail(_data.data())
      console.log(_data.data());
      setLoading(false);
    }
    getData();
  }, []);
  return (
    <>
      <div className="p-4 flex w-full justify-center flex-col md:flex-row items-center md:items-start">
     
        { loading ? <div className='h-96 w-full flex justify-center items-center'><ThreeCircles height={25} color="white"/></div> :
        <>
        <img src={detail.image} alt="" className='h-96 block md:sticky top-24'/>
        <div className="md:ml-4 ml-0 w-full md:w-1/2">
          <h1 className='text-3xl font-semibold text-gray-400'>{detail.title} <span className='text-xl'>{detail.year}</span>
          </h1>

          <ReactStars
          size={20}
          half={true}
          value={4.5}
          edit={false}
          />
          <p className='mt-3'>{detail.description}</p>
          <Review id={id} prevRating={detail.rating} userRated={detail.rated}/>
        </div>
        </>
   
}
      </div>
    </>
  )
}

export default Detail
