import React from 'react';
import { Accordion, Table, ListGroup } from 'react-bootstrap';

const BaseDeDatos = () => {
  return (
    <div className="container mt-4">
      <h2>Base de Datos</h2>
      <br/>
      <img src="https://cdn-icons-png.flaticon.com/512/3231/3231343.png" alt="Base de Datos" style={{width: '100px', height: 'auto'}} />
      <br/>
      <br/>
      <p className="justified-text">
        El curso de Base de Datos se centra en el diseño, implementación y gestión de sistemas de bases de datos. Los estudiantes 
        aprenden a estructurar y organizar datos de manera eficiente utilizando modelos relacionales y no relacionales. El temario 
        incluye lenguajes de consulta como SQL, técnicas de normalización, administración de bases de datos, seguridad, y recuperación 
        ante desastres. También se exploran sistemas de gestión de bases de datos (DBMS) y tecnologías emergentes en el manejo de 
        grandes volúmenes de datos. Este curso proporciona las habilidades necesarias para diseñar y mantener bases de datos robustas 
        que soporten aplicaciones críticas y faciliten la toma de decisiones basadas en datos.
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
            <td>Modelos relacionales y no relacionales</td>
          </tr>
          <tr>
            <td>Unidad 2</td>
            <td>Lenguajes de consulta SQL</td>
          </tr>
          <tr>
            <td>Unidad 3</td>
            <td>Técnicas de normalización</td>
          </tr>
          <tr>
            <td>Unidad 4</td>
            <td>Administración de bases de datos</td>
          </tr>
          <tr>
            <td>Unidad 5</td>
            <td>Seguridad y recuperación ante desastres</td>
          </tr>          
        </tbody>
      </Table>

      <h2>Puntos Clave</h2>
      {/* Acordeón de temas */}
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Modelos Relacionales</Accordion.Header>
          <Accordion.Body>
            Estudio del modelo de base de datos relacional y su implementación.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Lenguaje SQL</Accordion.Header>
          <Accordion.Body>
            Sentencias SQL avanzadas para la gestión de bases de datos.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Optimización de Consultas</Accordion.Header>
          <Accordion.Body>
            Técnicas para mejorar el rendimiento de las consultas en bases de datos.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>Normalización</Accordion.Header>
          <Accordion.Body>
            Proceso para eliminar redundancias y dependencias en bases de datos.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>Transacciones</Accordion.Header>
          <Accordion.Body>
            Conceptos de ACID (Atomicidad, Consistencia, Aislamiento, Durabilidad) y cómo se implementan en DBMS.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="5">
          <Accordion.Header>Seguridad de Datos</Accordion.Header>
          <Accordion.Body>
            Estrategias y prácticas para proteger datos sensibles y garantizar la integridad y confidencialidad.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="6">
          <Accordion.Header>Backup y Recuperación</Accordion.Header>
          <Accordion.Body>
            Métodos para realizar copias de seguridad y recuperar datos en caso de fallos.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="7">
          <Accordion.Header>Bases de Datos Distribuidas</Accordion.Header>
          <Accordion.Body>
            Conceptos y técnicas para gestionar bases de datos distribuidas a través de múltiples ubicaciones.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="8">
          <Accordion.Header>Big Data</Accordion.Header>
          <Accordion.Body>
            Tecnologías y métodos para manejar grandes volúmenes de datos, incluyendo Hadoop y Spark.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="9">
          <Accordion.Header>Data Warehousing</Accordion.Header>
          <Accordion.Body>
            Diseño e implementación de almacenes de datos para soporte a la toma de decisiones empresariales.
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
        <ListGroup.Item>Optimización de consultas</ListGroup.Item>
        <ListGroup.Item>Gestión de índices</ListGroup.Item>
        <ListGroup.Item>Replicación de bases de datos</ListGroup.Item>
        <ListGroup.Item>Integridad referencial</ListGroup.Item>
        <ListGroup.Item>Arquitectura de bases de datos</ListGroup.Item>
        <ListGroup.Item>Modelado de datos</ListGroup.Item>
        <ListGroup.Item>Indexación y Búsqueda de Datos</ListGroup.Item>
        <ListGroup.Item>Bases de Datos en la Nube</ListGroup.Item>
        <ListGroup.Item>Casos de Uso de NoSQL</ListGroup.Item>
      </ListGroup>
    </div>
  );
};

export default BaseDeDatos;
