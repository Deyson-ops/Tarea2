import React from 'react';
import { Accordion, Table, ListGroup } from 'react-bootstrap';

const ArquitecturaDeComputadoras = () => {
  return (
    <div className="container mt-4">
      <h2>Arquitectura de Computadoras</h2>
      <br/>
      <img src="https://cdn-icons-png.flaticon.com/512/5271/5271007.png" alt="Arquitectura de Computadoras" style={{width: '100px', height: 'auto'}} />
      <br/>
      <br/>
      <p className="justified-text">
        El curso de Arquitectura de Computadoras se centra en el diseño y funcionamiento de los sistemas computacionales. Los estudiantes 
        aprenderán sobre los componentes esenciales de una computadora, como la CPU, la memoria, y los dispositivos de entrada y salida. 
        El curso cubre temas como la organización de hardware, el conjunto de instrucciones, la arquitectura de sistemas y la optimización 
        del rendimiento. Además, se exploran conceptos avanzados como la arquitectura paralela y la arquitectura de sistemas embebidos. 
        Este curso proporciona una comprensión profunda de cómo se construyen y operan las computadoras modernas, lo cual es esencial para 
        el desarrollo de software y el diseño de sistemas.
      </p>

      {/* Tabla de contenidos */}
      <h3 className="mt-4">Contenido de Evaluación del Curso</h3>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Unidad</th>
            <th>Descripción</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Unidad 1</td>
            <td>Introducción a la Arquitectura de Computadoras</td>
          </tr>
          <tr>
            <td>Unidad 2</td>
            <td>Componentes de la CPU</td>
          </tr>
          <tr>
            <td>Unidad 3</td>
            <td>Memoria y Jerarquía de Memoria</td>
          </tr>
          <tr>
            <td>Unidad 4</td>
            <td>Conjunto de Instrucciones y Unidad de Control</td>
          </tr>
          <tr>
            <td>Unidad 5</td>
            <td>Arquitectura de Sistemas Paralelos y Multinúcleo</td>
          </tr>          
        </tbody>
      </Table>

      <h2>Puntos Clave</h2>
      {/* Acordeón de temas */}
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Componentes de la CPU</Accordion.Header>
          <Accordion.Body>
            Estudio de la unidad central de procesamiento, incluyendo el ALU, la unidad de control, y los registros.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Jerarquía de Memoria</Accordion.Header>
          <Accordion.Body>
            Exploración de las diferentes capas de memoria, desde los registros hasta la memoria secundaria.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Conjunto de Instrucciones</Accordion.Header>
          <Accordion.Body>
            Análisis del conjunto de instrucciones y su impacto en la ejecución de programas.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>Unidad de Control</Accordion.Header>
          <Accordion.Body>
            Funcionamiento y diseño de la unidad que controla la ejecución de instrucciones.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>Arquitectura Paralela</Accordion.Header>
          <Accordion.Body>
            Principios de diseño y programación para sistemas con múltiples núcleos y procesadores.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="5">
          <Accordion.Header>Sistemas Embebidos</Accordion.Header>
          <Accordion.Body>
            Diseño y aplicaciones de sistemas computacionales integrados en dispositivos no computacionales.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="6">
          <Accordion.Header>Optimización del Rendimiento</Accordion.Header>
          <Accordion.Body>
            Técnicas para mejorar la eficiencia y el rendimiento de los sistemas computacionales.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="7">
          <Accordion.Header>Arquitectura de Red</Accordion.Header>
          <Accordion.Body>
            Estudio de la integración de sistemas computacionales en redes y sus implicaciones en el diseño de hardware.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="8">
          <Accordion.Header>Interconexiones y Bus</Accordion.Header>
          <Accordion.Body>
            Diseño y funcionamiento de los buses de datos y las interconexiones entre componentes de la computadora.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      {/* Tabla de distribución de nota */}
      <h3 className="mt-4">Contenido de Evaluación del Curso</h3>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Evaluación</th>
            <th>Puntos</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Primer parcial</td>
            <td>15</td>
          </tr>
          <tr>
            <td>Segundo parcial</td>
            <td>15</td>
          </tr>
          <tr>
            <td>Actividades</td>
            <td>20</td>
          </tr>
          <tr>
            <td>Proyecto final</td>
            <td>15</td>
          </tr>
          <tr>
            <td>Examen final</td>
            <td>35</td>
          </tr>
          <tr>
            <th>Total</th>
            <th>100</th>
          </tr>
        </tbody>
      </Table>

      {/* Lista de temas adicionales */}
      <h3 className="mt-4">Temas adicionales para ampliar conocimientos</h3>
      <ListGroup>
        <ListGroup.Item>Diseño de Procesadores</ListGroup.Item>
        <ListGroup.Item>Arquitectura de Memoria Caché</ListGroup.Item>
        <ListGroup.Item>Procesadores Vectoriales y SIMD</ListGroup.Item>
        <ListGroup.Item>Interconexión de Sistemas</ListGroup.Item>
        <ListGroup.Item>Arquitectura de Sistemas de Computación Distribuidos</ListGroup.Item>
        <ListGroup.Item>Redes de Computadoras y Arquitectura</ListGroup.Item>
        <ListGroup.Item>Microarquitectura y Pipeline</ListGroup.Item>
        <ListGroup.Item>Estudio de Hardware y Software Co-diseño</ListGroup.Item>
      </ListGroup>
    </div>
  );
};

export default ArquitecturaDeComputadoras;
