import './App.css';
import { CgClose } from 'react-icons/cg';
import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from 'react-icons/md';
import { useState } from 'react';

function App() {
  const [imgIndex, setImgIndex] = useState(undefined)
  const images = [
    {
      img: "https://i.ibb.co/CHLBZnp/gal2323.jpg"
    },
    {
      img: "https://i.ibb.co/4pBbhfY/gal39834.jpg"
    },
    {
      img: "https://i.ibb.co/xSnHP7g/gal43884.jpg"
    },
    {
      img: "https://i.ibb.co/QN6Bnrb/gal4958.jpg"
    },
    {
      img: "https://i.ibb.co/dGZvj75/gal4545.jpg"
    },
    {
      img: "https://i.ibb.co/S6FVFNt/gal74744.jpg"
    },
  ]
  const handleBack=()=>{
    if(imgIndex<1){
      setImgIndex(5)
    }else{
      setImgIndex(imgIndex-1)
    }
  }
  const handleForward=()=>{
    if(imgIndex>4){
      setImgIndex(0)
    }else{
      setImgIndex(imgIndex+1)
    }
  }
  return (
    <div className="App">
      {imgIndex !== undefined && <div className="lightBox">
        <img src={images[imgIndex].img} alt="img" />
        <button onClick={handleBack} className="back"> <MdOutlineArrowBackIos /> </button>
        <button onClick={handleForward} className="forward"> <MdOutlineArrowForwardIos /> </button>
        <button onClick={()=>setImgIndex(undefined)} className="close"> <CgClose /> </button>
      </div>}

      <div className="images">
        {
          images.map((item,ind) => (

            <img onClick={()=>setImgIndex(ind)} className="img1" src={item.img} alt="img1" />
          ))
        }

      </div>
    </div>
  );
}

export default App;
