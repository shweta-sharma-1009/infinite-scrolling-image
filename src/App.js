import React, { useState, useEffect } from "react";
import { Heading } from "./components/Heading";
import { Loader } from "./components/Loader";
import { UnsplashImage } from "./components/UnsplashImage";

import axios from "axios";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import InfiniteScroll from "react-infinite-scroll-component";

// Style
const GlobalStyle = createGlobalStyle`
*{
  margin:0;
  padding: 0;
  box-sizing: border-box;
}

body{
  font-family: sans-serif;
}
`;

const WrapperImage = styled.section`
  max-width: 70rem;
  margin: 4rem auto;
  display: grid;
  grid-gap: 1em;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-auto-row: 300px;
`;
function App() {
  const [images, setImages] = useState([]);

  
  const fetchImages=()=>{
    const apiRoot = "https://api.unsplash.com";
    const accessKey = "CnvLg-9jZ2KPfAcrL-pRPJKMTKAAu06o4QD7zczIZSU";
    
    axios
    .get(`${apiRoot}/photos/random?client_id=${accessKey}&count=20`)
    .then((res) => setImages([...images, ...res.data]));
    
  }
  useEffect(() => {
    fetchImages()
  }, []);

  return (
    <div className="App">
      <Heading />
      <GlobalStyle />
      <InfiniteScroll
        dataLength={images.length}
        next={fetchImages}
        hasMore={true}
        loader={<Loader />}
      >
        <WrapperImage>
          {images.map((image) => (
            <UnsplashImage url={image.urls.thumb} key={image.id} />
          ))}
        </WrapperImage>
      </InfiniteScroll>
    </div>
  );
}

export default App;
