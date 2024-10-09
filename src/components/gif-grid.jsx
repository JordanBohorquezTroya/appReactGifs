//import { getGifs } from "../helpers/get-gif";
//import { useState, useEffect } from "react";
import { GifItem } from "./gif-item";
import {useFecthGif} from "../hooks/use-fecth-gif"

export const GifGrid = ({ category }) => {
   const { images, isLoading} = useFecthGif(category) 
   console.log({images, isLoading})
  
  
    /*const [images, setImages] = useState([]);

  const getImage = async () => {
    const newImage = await getGifs(category);
    setImages(newImage);
  };
  useEffect(() => {
    getImage();
  }, []);*/

  return (
    <>
      <h3>{category}</h3>
      {
        isLoading && (<p>Cargando..</p>)
      }
      <div className="card-grid">
        {images.map(( image ) => {
          return <GifItem key={image.id} {...image} />;
        })}
      </div>
    </>
  );
};
