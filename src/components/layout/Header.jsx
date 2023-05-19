import React from 'react'
import { useDispatch } from 'react-redux'
import { lagOut } from '../../store/slices/nameTrainer.slice'
import "./style/Header.css"
const Header = () => {
  const dispatch = useDispatch()

  const handleClickLagOut = () => {
    dispatch(lagOut())
  }
  return (
    <header className='header'>
      <div className='header__red'>
      
        <div className='header__img'>
          <img src='/public/imagen/pokedex.png' alt="" />
        </div>
      </div>
      <div className='header__black'>
        <div className='header__pokeball'>
          <button className='header__btn' onClick={handleClickLagOut}> <i className='bx bxs-circle header__btn'></i> </button>
         </div>
      </div>
    </header>
  )
}

export default Header