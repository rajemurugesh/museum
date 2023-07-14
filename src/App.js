import React, { useEffect, useState, useCallback } from 'react';
import Heading from './Components/Heading';
import Loading from './Components/Loading';
import UnsplashImage from './Components/UnsplashImage';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';

export default function App() {
  const [images, setImages] = useState([]);

  const fetchImages = useCallback((count = 10) => {
    const apiRoot = "https://api.unsplash.com";
    const accessKey = process.env.REACT_APP_ACCESSKEY;

    axios
      .get(`${apiRoot}/photos/random?client_id=${accessKey}&count=${count}`)
      .then(res => {
        setImages(prevImages => [...prevImages, ...res.data]);
      })
      .catch(error => {
        console.log(error);
      });

    // curl https://api.unsplash.com/photos/random?count=5
  }, []);

  useEffect(() => {
    fetchImages();
  }, [fetchImages]);

  return (
    <div className="container-fluid">
      <Heading />
      <Loading />
      <InfiniteScroll
        dataLength={images.length}
        next={fetchImages}
        hasMore={true}
        loader={<Loading />}
      >
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {images.map(image => (
            <div className="col" key={image.id}>
              <UnsplashImage url={image.urls.thumb} />
            </div>
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
}
