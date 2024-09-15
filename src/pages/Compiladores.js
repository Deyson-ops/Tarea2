import React from 'react';
import { Accordion, Table, ListGroup } from 'react-bootstrap';

const Compiladores = () => {
  return (
    <div className="container mt-4">
      <h2>Compiladores</h2>
      <br/>
      <img src="https://previews.123rf.com/images/coolvectorstock/coolvectorstock1811/coolvectorstock181113918/111820968-icono-del-compilador-dise%C3%B1o-de-colecci%C3%B3n-de-programaci%C3%B3n-en-compilador-s%C3%ADmbolo-lineal-ilustraci%C3%B3n.jpg" alt="Compiladores" style={{width: '100px', height: 'auto'}} />
      <br/>
      <br/>
      <p className="justified-text">
      El curso de Compiladores aborda los principios y técnicas para el diseño y construcción de compiladores, los programas que 
      traducen código fuente de lenguajes de programación de alto nivel a código máquina. Se estudian las fases del proceso de 
      compilación, incluyendo el análisis léxico, análisis sintáctico, análisis semántico, optimización de código y generación de código. 
      Se exploran diversas técnicas y algoritmos para mejorar la eficiencia y la precisión de los compiladores. Este curso proporciona 
      una comprensión profunda de cómo los lenguajes de programación se transforman en instrucciones ejecutables, preparándonos para 
      desarrollar y optimizar compiladores y herramientas de desarrollo de software.
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
            <td>Análisis Léxico</td>
          </tr>
          <tr>
            <td>Unidad 2</td>
            <td>Análisis Sintáctico</td>
          </tr>
          <tr>
            <td>Unidad 3</td>
            <td>Análisis Semántico</td>
          </tr>
          <tr>
            <td>Unidad 4</td>
            <td>Generación de Código Intermedio</td>
          </tr>
          <tr>
            <td>Unidad 5</td>
            <td>Optimización de Código</td>
          </tr>          
        </tbody>
      </Table>

      <h2>Puntos Clave</h2>
      {/* Acordeón de temas */}
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Análisis Léxico</Accordion.Header>
          <Accordion.Body>
            Proceso de conversión del código fuente en una secuencia de tokens.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Análisis Sintáctico</Accordion.Header>
          <Accordion.Body>
            Construcción de árboles de sintaxis a partir de secuencias de tokens.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Análisis Semántico</Accordion.Header>
          <Accordion.Body>
            Validación del significado y la lógica de los programas.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>Generación de Código Intermedio</Accordion.Header>
          <Accordion.Body>
            Traducción del código a una representación intermedia para su posterior optimización.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>Optimización de Código</Accordion.Header>
          <Accordion.Body>
            Técnicas para mejorar el rendimiento y reducir el tamaño del código generado.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="5">
          <Accordion.Header>Generación de Código Final</Accordion.Header>
          <Accordion.Body>
            Proceso de conversión de código intermedio en código máquina ejecutable.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="6">
          <Accordion.Header>Gestión de Memoria</Accordion.Header>
          <Accordion.Body>
            Técnicas para la asignación y liberación eficiente de recursos en tiempo de ejecución.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="7">
          <Accordion.Header>Optimización de Ciclo de Vida</Accordion.Header>
          <Accordion.Body>
            Técnicas para optimizar el ciclo de vida de variables y evitar fugas de memoria.
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
        <ListGroup.Item>Construcción de Parsers</ListGroup.Item>
        <ListGroup.Item>Automatización de Análisis Léxico</ListGroup.Item>
        <ListGroup.Item>Diseño de Generadores de Código</ListGroup.Item>
        <ListGroup.Item>Análisis de Dependencias</ListGroup.Item>
        <ListGroup.Item>Compiladores Just-In-Time (JIT)</ListGroup.Item>
        <ListGroup.Item>Optimización de Ciclos</ListGroup.Item>
        <ListGroup.Item>Lenguajes Intermedios</ListGroup.Item>
        <ListGroup.Item>Compilación Cruzada</ListGroup.Item>
        <ListGroup.Item>Lenguajes de Programación Funcional</ListGroup.Item>
      </ListGroup>
    </div>
  );
};

export default Compiladores;
