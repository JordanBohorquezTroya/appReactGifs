import { useState, useEffect } from "react";
import {getGifs} from "../helpers/get-gif"


export const useFecthGif = (category) => {


  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getImage = async () => {
    const newImage = await getGifs(category);
    setImages(newImage);
    setIsLoading(false);
  };
  useEffect(() => {
    getImage();
  }, []);

  return {
    images,
    isLoading
  };
};
