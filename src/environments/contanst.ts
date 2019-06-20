
export class Constants {
  // CONFIG SYSTEM
  // =========================== Modificar esta IP ===========================
  public static SERVER_URL = 'http://localhost:8000';
  // =========================== Modificar esta IP ===========================
  public static ENDPOINT_PACIENTES = Constants.SERVER_URL +  '/datos/paciente.php';
  public static ENDPOINT_DOCTOR = Constants.SERVER_URL +  '/datos/doctor.php';
  public static ENDPOINT_TURNO = Constants.SERVER_URL +  '/datos/turno.php';
  public static ENDPOINT_ESPECIALIDAD = Constants.SERVER_URL +  '/datos/especialidad.php';
  public static ENDPOINT_CONSULTA = Constants.SERVER_URL +  '/datos/consulta.php';

}
