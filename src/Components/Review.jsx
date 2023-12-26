import React, { useState } from 'react'
import ReactStars from 'react-stars'
import { reviewsRef, db } from './firebase/firebase';
import { addDoc, doc, updateDoc } from 'firebase/firestore';
import { TailSpin } from 'react-loader-spinner';
import swal from 'sweetalert';
import { Done } from '@mui/icons-material';

function Review({id, prevRating, userRated}) {
  const [rating, setRating] = useState(0);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState("");
  const sendReview = async () => {
    setLoading(true);
    try {
      
        await addDoc(reviewsRef, {
            movieid: id,
            rating: rating,
            thought: form,
            timestamp: new Date().getTime()
        })
        setRating(0);
        setForm("");
        // setNewAdded(newAdded + 1);
        swal({
            title: "Review Sent",
            icon: "success",
            buttons: false,
            timer: 3000
          })
   
    } catch (error) {
        swal({
            title: error.message,
            icon: "error",
            buttons: false,
            timer: 3000
          })
    }
    setLoading(false);
}

  return (
    <>
      <div className="mt-4 border-t-2 border-gray-700 w-full ">
        <ReactStars 
        size={30}
        half={true}
        value={rating}
        onChange={(rate)=>setRating(rate)}
        />
      <input 
      value={form}
      onChange={(e)=>setForm(e.target.value)}
      placeholder='Share Your Thoughts...'
      className='w-full p-2 outline-none header'
      />
      <button onClick={sendReview} className="bg-green-600 flex justify-center items-center w-full p-2">
        {loading ? <TailSpin height={20} color='white'/> : 'share' }
        </button>
      </div>
    </>
  )
}

export default Review
