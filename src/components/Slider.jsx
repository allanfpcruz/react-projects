import { SliderWrap } from './swiper.style'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore from 'swiper'
import { Navigation, Pagination, EffectFade, Autoplay } from "swiper/modules"

SwiperCore.use([Navigation, Pagination, EffectFade, Autoplay])

function Slider({children, settings}) {
  const sliderOptions = {
    slidesPerView: 1,
    pagination: true,
    navigation: true,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false
    },
    ...settings
  }

  return (
    <SliderWrap
      dots={sliderOptions?.pagination}
      arrows={sliderOptions?.navigation}
    >
      <Swiper
        {...sliderOptions}
      >
        {children}
      </Swiper>
    </SliderWrap>
  )
}

export { SwiperSlide as Slide }
export default Slider