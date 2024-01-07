import React from 'react'
import styled from 'styled-components'

const Header=styled.header`
max-width:70rem;
margin:2rem auto;
text-align:center
`;

const H1=styled.h1`
font-family:'Oswald', san-serif;
margin bottom:1em
`;

export const Heading = () => {
  return (
    <Header>
      <H1>Infinite Gallery</H1>
      <p>Implementation of infinite scrolling</p>
    </Header>
  )
}


