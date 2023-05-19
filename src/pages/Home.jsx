import React from 'react'
import { setNameTrainerGlobal } from '../store/slices/nameTrainer.slice';
import { useDispatch } from 'react-redux';
import "./style/Home.css"
const Home = () => {
const dispatch = useDispatch()
  const handleSubmit = (e) => {
  
    e.preventDefault();
    const nameTrainer = e.target.nameTrainer.value 
    dispatch(setNameTrainerGlobal(nameTrainer));
  };
  return (
    <main>
      <section className="section">
        <div>
          <img src="/imagen/pokedex.png " alt="imagen_inicio" />
        </div>
        <h2 className="home">Hola entrenador!</h2>
        <p className="home">Para continuar ingresa tu Nombre! </p>
        <form onSubmit={handleSubmit} className="form">
          <section className="home-form">
            <div className="div">
              <input type="text" id="nameTrainer" className="input" required />
              <label className="lbl-name input">
                <span className="text-name">Tu nombre...</span>
              </label>
            </div>

            <button className="btn-neon button">
              <span className="span1"></span>
              <span className="span2"></span>
              <span className="span3"></span>
              <span className="span4"></span>
              ingreso
            </button>
          </section>
        </form>
      </section>
    </main>
  );
}

export default Home
