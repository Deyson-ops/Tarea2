import React from 'react';

function Home() {
  return (
    <div className="container mt-4">
      <h1 className="text-center">Bienvenido a Cursos UMG</h1>
      <br/>
      <p className="justified-text">
        Para realizar este proyecto utilizamos las funcionalidades de React y Bootstrap para implementar una página que brinda información de los cursos finalizados en nuestra carrera con detalles específicos sobre cada uno.
      </p>
      <img 
        src="https://i.pinimg.com/originals/34/22/90/3422900cb9e9bd4ce803847129eb6c9f.jpg" 
        alt="Logo" 
        style={{ 
          width: '450px', 
          height: 'auto', 
          display: 'block', 
          margin: '0 auto' 
        }} 
        className="img-fluid"
      />
    </div>
  );
}

export default Home;
