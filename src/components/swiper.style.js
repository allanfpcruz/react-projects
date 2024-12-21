import styled, { css } from 'styled-components'

export const SliderWrap = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  .swiper {
    width: 100%;
    height: 100%;
  }
 
  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fff;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  ${({arrows}) => arrows && css`
    .swiper-button {
      &-next,
      &-prev {
        top: 50%;
        z-index: 9;
        width: 40px;
        height: 40px;
        margin: auto;
        line-height: 40px;
        position: absolute;
        visibility: hidden;
        text-align: center;
        transform: translateY(-50%);
        color: #fff;
        transition: all 0.4s ease 0s;
        border-radius: 50%;
        background-color: rgba(0, 0, 0, .5);
        box-shadow: 2px 2px 14px rgba(0, 0, 0, .5);
        &:hover {
          color: #fff;
          background-color: #263868;
          box-shadow: 1px 1px 5px rgba(0, 0, 0, .3);
        }
        &:after {
          font-size: 14px;
        }
      }
      &-prev {
        outline: 0; 
        right: auto;
        left: -20px;
        &:after {
          margin-right: 3px;
        }
      }
      &-next {
        outline: 0;
        left: auto;
        right: -20px;
        &:after {
          margin-left: 3px;
        }
      }
      &-disabled {
        opacity: 0.1;
      }
    }
    &:hover {
      .swiper-button {
        &-prev, &-next {
          visibility: visible;
        }
        &-prev {
          left: 10px;
        }
        &-next {
          right: 10px;
        }
      }
    }
  `}
  ${({dots}) => dots && css`
    .swiper-pagination {
      &-bullet {
        cursor: pointer;
        width: 10px;
        height: 10px;
        display: inline-block;
        border-radius: 50%;
        background: #263868;
        opacity: .5;
        border: 1px solid #263868;
        margin: 0 5px;
        box-shadow: none;
        transition: all 0.4s ease 0s;
        transform: scale(0.8);
        &:hover, &-active {
          background-color: #263868;
          border-color: #263868;
          transform: scale(1.5);
          opacity: 1;
        }
      }
    }
  `};
`