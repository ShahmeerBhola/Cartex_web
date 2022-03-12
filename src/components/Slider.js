import React from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import Flickity from 'react-flickity-component'


function Slider({children }) {
    const smallScreen = useMediaQuery('(max-width:1400px)');
    // console.log("matches=>", smallScreen)

    const flickityOptions = {
        freeScroll: true,
        cellAlign: 'right',
        pageDots: false,
        prevNextButtons: false,
        autoPlay: true,
        wrapAround: true,

    }
  return (
    <Flickity
        className={`carousel w-full `} // default ''
        elementType={'div'} // default 'div'
        options={flickityOptions} // takes flickity options {}
        disableImagesLoaded={false} // default false
        reloadOnUpdate // default false
        static // default false
    >
      {
          children
      }
    </Flickity>
    );
}

export default Slider;