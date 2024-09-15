import React from 'react';
import { Accordion, Table, ListGroup } from 'react-bootstrap';

const EticaProfesional = () => {
  return (
    <div className="container mt-4">
      <h2>Ética Profesional</h2>
      <br/>
      <img src="https://cdn-icons-png.flaticon.com/512/4052/4052216.png" alt="Ética Profesional" style={{width: '100px', height: 'auto'}} />
      <br/>
      <br/>
      <p className="justified-text">
        El curso de Ética Profesional examina los principios y normas que guían el comportamiento ético en el ámbito profesional. 
        Los estudiantes exploran temas como la responsabilidad social, la toma de decisiones éticas, y la integridad en el trabajo. 
        El curso incluye estudios de casos sobre dilemas éticos comunes en diversas profesiones, así como la legislación y las políticas 
        que regulan el comportamiento profesional. Se enfatiza la importancia de los valores y la ética en el desarrollo de una carrera 
        profesional y en la construcción de una reputación sólida.
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
            <td>Introducción a la Ética Profesional</td>
          </tr>
          <tr>
            <td>Unidad 2</td>
            <td>Principios de Integridad y Responsabilidad</td>
          </tr>
          <tr>
            <td>Unidad 3</td>
            <td>Normas Éticas en Diversas Profesiones</td>
          </tr>
          <tr>
            <td>Unidad 4</td>
            <td>Dilemas Éticos y Toma de Decisiones</td>
          </tr>
          <tr>
            <td>Unidad 5</td>
            <td>Legislación y Políticas Éticas</td>
          </tr>          
        </tbody>
      </Table>

      <h2>Puntos Clave</h2>
      {/* Acordeón de temas */}
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Principios Éticos Fundamentales</Accordion.Header>
          <Accordion.Body>
            Conceptos básicos como la honestidad, la justicia y la responsabilidad.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Responsabilidad Profesional</Accordion.Header>
          <Accordion.Body>
            El papel del profesional en la protección del bienestar público y la adherencia a estándares éticos.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Conflictos de Interés</Accordion.Header>
          <Accordion.Body>
            Identificación y manejo de situaciones en las que los intereses personales pueden influir en la toma de decisiones.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>Confidencialidad</Accordion.Header>
          <Accordion.Body>
            La importancia de proteger la información sensible y privada en el entorno profesional.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>Ética en el Entorno Digital</Accordion.Header>
          <Accordion.Body>
            Consideraciones éticas relacionadas con el uso de tecnologías y redes sociales.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="5">
          <Accordion.Header>Responsabilidad Social Corporativa</Accordion.Header>
          <Accordion.Body>
            La relación entre la ética profesional y la responsabilidad social de las organizaciones.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="6">
          <Accordion.Header>Ética y Cultura Organizacional</Accordion.Header>
          <Accordion.Body>
            Cómo los valores éticos influyen en la cultura y el clima de una organización.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="7">
          <Accordion.Header>Legislación Ética</Accordion.Header>
          <Accordion.Body>
            Legislación relevante que afecta la práctica profesional y las responsabilidades éticas.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="8">
          <Accordion.Header>Estudios de Caso</Accordion.Header>
          <Accordion.Body>
            Análisis de dilemas éticos reales y estrategias para resolverlos.
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
        <ListGroup.Item>Ética en la Inteligencia Artificial</ListGroup.Item>
        <ListGroup.Item>Protección de Datos Personales</ListGroup.Item>
        <ListGroup.Item>Ética en la Investigación</ListGroup.Item>
        <ListGroup.Item>Responsabilidad en la Toma de Decisiones</ListGroup.Item>
        <ListGroup.Item>Ética en el Liderazgo</ListGroup.Item>
        <ListGroup.Item>Desafíos Éticos en el Comercio Internacional</ListGroup.Item>
        <ListGroup.Item>Normas Internacionales de Ética Profesional</ListGroup.Item>
        <ListGroup.Item>Ética y Sostenibilidad</ListGroup.Item>
        <ListGroup.Item>Ética en la Gestión de Recursos Humanos</ListGroup.Item>
      </ListGroup>
    </div>
  );
};

export default EticaProfesional;
