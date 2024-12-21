import { useEffect, useRef, useState } from 'react'
import { MdClose } from "react-icons/md"
import Slider, { Slide } from '../components/Slider'
import paisagens from '../assets/imageData'
//Swiper styles
import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'
import './pages-style/Gallery.css'

function Gallery() {
  let interval = useRef(null)

  const changeImages = (index) => {
    const banners = document.querySelectorAll('.banner, .mini .mini-item')

    banners.forEach(banner => {
      banner.innerHTML = ''
      const img = document.createElement('img')
      img.setAttribute('src', paisagens[index].thumbnail)
      img.setAttribute('alt', paisagens[index].title)
      banner.appendChild(img)
      index < 4 ? index++ : index = 0
    })
  }

  useEffect(() => {
      let index = 1
      interval.current = setInterval(() => {
        changeImages(index)
        console.log('index: ' + index)
        index < 4 ? index++ : index = 0
      }, 1500)
      return() => {
        clearInterval(interval.current)
      }
  }, [])
  
  const toggleModal = () => {
    const modal = document.querySelector('#modal')
    modal.open ? modal.close() : modal.showModal()
  }
  
  return(
    <div className="container" style={{ position: 'absolute', transform: 'translate(-50%, -50%)', top: '50%', left: '50%', gap: '0', width: '500px', cursor: 'pointer' }}>
      <dialog id="modal">
        <button id='close' onClick={toggleModal}>
          <MdClose />
        </button>
        <Slider
          settings={{
            navigation: true
          }}>
          {paisagens.map(paisagem => (
            <Slide
            key={paisagem.id}>
              <img 
                src={paisagem.thumbnail} 
                alt={paisagem.title} />
            </Slide>
          ))}
        </Slider>
      </dialog>
      <div className="banner"  onClick={toggleModal}>
        <img src="paisagem1.jpg" alt="paisagem 1" />
      </div>
      <div className="mini"  onClick={toggleModal}>
        <div className="mini-item">
          <img src="paisagem2.jpg" alt="paisagem 2" />
        </div>
        <div className="mini-item">
          <img src="paisagem3.jpg" alt="paisagem 3" />
        </div>
        <div className="mini-item">
          <img src="paisagem4.jpg" alt="paisagem 4" />
        </div>
        <div className="mini-item">
          <img src="paisagem5.jpg" alt="paisagem 5" />
        </div>
      </div>
    </div>
  )
}

export default Gallery