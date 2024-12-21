import { TbDashboard, TbLayoutDashboardFilled, TbLogout } from 'react-icons/tb'
import { FaPlay, FaHeart } from 'react-icons/fa'
import { IoTrendingUpOutline } from "react-icons/io5";
import { FaBookmark } from 'react-icons/fa6'
import { useEffect, useState } from 'react'
import './pages-style/NavTab.css'


function NavTab() {
  const [selected, setSelected] = useState(0)
  useEffect(() => {
    const navs = document.querySelectorAll('.side-menu ul li')
    navs.forEach(nav => {
      nav.addEventListener('click', () => {
        if(!nav.classList.contains('active')) {
          navs.forEach(i => {
            i.classList.remove('active')
          })
          nav.classList.add('active')
          let index
          setSelected((prev) => {
            navs.forEach((item, i) => {
              if(item == nav) {
                index = i
              }
            })
            return index
          })
        }
      })
    })
  }, [])

  useEffect(() => {
    console.log(selected)
  }, [selected])

  return(
    <div className="container" style={{ width: '100%', height: '100%', position: 'relative' }}>
      <span style={{ transition: 'all .3s ease', content: "", position: 'absolute', width: '40px', height: '40px', top: '0', left: '230px', borderRadius: '50%', boxShadow: '-20px -20px 0 #263868' }}></span>
      <div className="sidebar">
        <div className="side-menu">
          <ul>
            <li className="active">
              <a href="#">
                <TbLayoutDashboardFilled />
                Dashboard
              </a>
            </li>
            <li className="">
              <a href="#">
                <FaPlay />
                ForYou
              </a>
            </li>
            <li className="">
              <a href="#">
                <FaHeart />
                Liked
              </a>
            </li>
            <li className="">
              <a href="#">
                <IoTrendingUpOutline />
                Trending
              </a>
            </li>
            <li className="">
              <a href="#">
                <FaBookmark />
                Saved
              </a>
            </li>
          </ul>
        </div>
        <ul>
          <li className="">
            <a href="#">
              <TbLogout />
              Logout
            </a>
          </li>
        </ul>
      </div>
      <div className='content' style={{ padding: '40px' }}>
        {selected === 0 ?
          <TbLayoutDashboardFilled />
          : selected === 1 ?
            <FaPlay />
            : selected === 2 ?
              <FaHeart />
              : selected === 3 ?
                <IoTrendingUpOutline />
                : <FaBookmark />
        }
      </div>
    </div>
  )
}

export default NavTab