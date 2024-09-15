import React from 'react';
import { Accordion, Table, ListGroup } from 'react-bootstrap';

const SistemasOperativos = () => {
  return (
    <div className="container mt-4">
      <h2>Sistemas Operativos</h2>
      <br/>
      <img src="https://i.pinimg.com/564x/fc/2f/c8/fc2fc882e7ce1183280819231e7660f9.jpg" alt="Sistemas Operativos" style={{width: '100px', height: 'auto'}} />
      <br/>
      <br/>
      <p className="justified-text">
        El curso de Sistemas Operativos aborda el diseño, la implementación y la gestión de sistemas operativos. Los estudiantes 
        aprenderán sobre la administración de procesos, memoria, sistemas de archivos y dispositivos de entrada/salida. El curso 
        cubre temas como la concurrencia, la sincronización, la planificación de procesos, la gestión de memoria y la seguridad. 
        Además, se exploran conceptos avanzados como sistemas operativos distribuidos y la virtualización. Este curso es fundamental 
        para entender cómo los sistemas operativos gestionan los recursos del hardware y proporcionan servicios a las aplicaciones.
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
            <td>Introducción a los Sistemas Operativos</td>
          </tr>
          <tr>
            <td>Unidad 2</td>
            <td>Gestión de Procesos</td>
          </tr>
          <tr>
            <td>Unidad 3</td>
            <td>Gestión de Memoria</td>
          </tr>
          <tr>
            <td>Unidad 4</td>
            <td>Sistemas de Archivos</td>
          </tr>
          <tr>
            <td>Unidad 5</td>
            <td>Concurrencia y Sincronización</td>
          </tr>
          <tr>
            <td>Unidad 6</td>
            <td>Seguridad en Sistemas Operativos</td>
          </tr>
          <tr>
            <td>Unidad 7</td>
            <td>Sistemas Operativos Distribuidos</td>
          </tr>
        </tbody>
      </Table>

      <h2>Puntos Clave</h2>
      {/* Acordeón de temas */}
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Administración de Procesos</Accordion.Header>
          <Accordion.Body>
            Técnicas para la gestión y programación de procesos en un sistema operativo.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Gestión de Memoria</Accordion.Header>
          <Accordion.Body>
            Métodos para la administración de memoria y manejo de espacio en el sistema.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Sistemas de Archivos</Accordion.Header>
          <Accordion.Body>
            Organización, estructura y acceso a archivos en un sistema operativo.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>Sincronización</Accordion.Header>
          <Accordion.Body>
            Mecanismos para la sincronización de procesos y recursos compartidos.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>Seguridad en Sistemas Operativos</Accordion.Header>
          <Accordion.Body>
            Estrategias y técnicas para proteger un sistema operativo y sus datos.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="5">
          <Accordion.Header>Virtualización</Accordion.Header>
          <Accordion.Body>
            Conceptos y tecnologías para la creación de entornos virtualizados.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="6">
          <Accordion.Header>Concurrencia</Accordion.Header>
          <Accordion.Body>
            Mecanismos para manejar la ejecución simultánea de procesos.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="7">
          <Accordion.Header>Sistemas Operativos Distribuidos</Accordion.Header>
          <Accordion.Body>
            Diseño y funcionamiento de sistemas operativos que se extienden a través de varias máquinas.
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
        <ListGroup.Item>Planificación de Procesos</ListGroup.Item>
        <ListGroup.Item>Algoritmos de Gestión de Memoria</ListGroup.Item>
        <ListGroup.Item>Arquitectura de Sistemas Operativos</ListGroup.Item>
        <ListGroup.Item>Redes y Sistemas Operativos</ListGroup.Item>
        <ListGroup.Item>Seguridad Avanzada</ListGroup.Item>
        <ListGroup.Item>Optimización de Recursos</ListGroup.Item>
        <ListGroup.Item>Entornos Virtualizados</ListGroup.Item>
        <ListGroup.Item>Sistemas Operativos en la Nube</ListGroup.Item>
      </ListGroup>
    </div>
  );
};

export default SistemasOperativos;
