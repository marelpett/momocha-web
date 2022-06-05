import React from 'react';
import './Gallery.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { ImageList, ImageListItem, Modal, Box, Fade } from '@mui/material';

function Gallery(index) {
  const galleryList= [
    {
      id: 0,
      title: "1",
      img: "/images/Gallery/1.JPG",
    },
    {
      id: 1,
      title: "2",
      img: "/images/Gallery/2.jpg",
    },
    {
      id: 2,
      title: "3",
      img: "/images/Gallery/3.JPG",
    },
    {
      id: 3,
      title: "4",
      img: "/images/Gallery/4.jpg",
    },
    {
      id: 4,
      title: "5",
      img: "/images/Gallery/5.jpg",
    },
    {
      id: 5,
      title: "6",
      img: "/images/Gallery/6.jpg",
    },
    {
      id: 6,
      title: "7",
      img: "/images/Gallery/7.jpg",
    },
    {
      id: 7,
      title: "8",
      img: "/images/Gallery/8.jpg",
    },
    {
      id:8,
      title: "9",
      img: "/images/Gallery/9.jpg",
    },
    {
      id: 9,
      title: "10",
      img: "/images/Gallery/10.jpg",
    },
]

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  border: '2px solid white',
  boxShadow: 24,
  p: 1,
};

const [open, setOpen] = React.useState(false);
const [image, setImage] = React.useState()

function handleOpen(e){
  setImage(e.target.src)
  setOpen(true);
}
  const handleClose = () => setOpen(false);

    return (
      <><div>
          <div className='gallery-header' id='gallery'>
                  <h1>GALLERY</h1>
          </div>
        <div className='gallery-container'>
          <ImageList variant="masonry" cols={4} gap={10}>
            {galleryList.map((item) => (
                  <ImageListItem key={item.id}>
                <Modal
                  BackdropProps={{style: {backgroundColor:'rgba(0,0,0,0.1)'}}}
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Fade in={open}>
                <Box sx = {style}>
                  <img alt ={item.title}className = "modalImage" src = {image}/>
                </Box>
                </Fade>
              </Modal>
                <img
                  className = 'galleryImage'
                  src={`${item.img}?w=248&fit=crop&auto=format`}
                  srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  alt={item.title}
                  loading="lazy"
                  onClick = {handleOpen}
                />
                  </ImageListItem>
            ))}
          </ImageList>
          

          </div>
        </div>
        </>
    );
  }
  
  export default Gallery;