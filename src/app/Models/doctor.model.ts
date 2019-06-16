export class Doctor {
  id : number;
  ci : String;
  nombre : String;
  fechaNacimiento : String;
  sexo : String;
}

// CREATE TABLE especialidad (
// 	id INT PRIMARY KEY AUTO_INCREMENT,
//     nombre VARCHAR(100) NOT NULL,
//     nivel INT NOT NULL,
//     area VARCHAR(50) NOT NULL
// );

// CREATE TABLE paciente (
// 	id INT PRIMARY KEY AUTO_INCREMENT,
//     ci VARCHAR(10) NOT NULL,
//     nombre VARCHAR(100) NOT NULL,
//     sexo VARCHAR(1) NOT NULL,
//     fechaNacimiento DATE NOT NULL
// );

// CREATE TABLE historialMedico (
// 	id INT PRIMARY KEY AUTO_INCREMENT,
//     referencia VARCHAR(512) NOT NULL,
//     idPaciente INT NOT NULL,
//     FOREIGN KEY (idPaciente) REFERENCES paciente(id)
//     ON UPDATE CASCADE
//     ON DELETE CASCADE
// );

// CREATE TABLE turno (
// 	id INT PRIMARY KEY AUTO_INCREMENT,
//     nombre VARCHAR(50) NOT NULL
// );

// CREATE TABLE doctor (
// 	id INT PRIMARY KEY AUTO_INCREMENT,
//     ci VARCHAR(10) NOT NULL,
//     nombre VARCHAR(100) NOT NULL,
//     sexo VARCHAR(1) NOT NULL,
//     fechaNacimiento DATE NOT NULL,
//     idTurno INT NOT NULL,
//     idEspecialidad INT NOT NULL,
//     FOREIGN KEY (idTurno) REFERENCES turno(id)
//     ON UPDATE CASCADE
//     ON DELETE CASCADE,
//      FOREIGN KEY (idEspecialidad) REFERENCES especialidad(id)
//     ON UPDATE CASCADE
//     ON DELETE CASCADE
// );

// CREATE TABLE horario (
//     idTurno INT NOT NULL,
// 	id INT NOT NULL AUTO_INCREMENT,
//     horaInicio TIME NOT NULL,
//     horaFin TIME NOT NULL,
//     dia VARCHAR(10) NOT NULL,
//     PRIMARY KEY(idTurno,id),
//     FOREIGN KEY (idTurno) REFERENCES turno(id)
//     ON UPDATE CASCADE
//     ON DELETE CASCADE
// );

// CREATE TABLE consulta (
// 	id INT PRIMARY KEY AUTO_INCREMENT,
//     fecha DATETIME NOT NULL,
//     idHorario INT NOT NULL,
//     idPaciente INT NOT NULL,
//     FOREIGN KEY (idHorario) REFERENCES horario(id)
//     ON UPDATE CASCADE
//     ON DELETE CASCADE,
//     FOREIGN KEY (idPaciente) REFERENCES paciente(id)
//     ON UPDATE CASCADE
//     ON DELETE CASCADE
// );

