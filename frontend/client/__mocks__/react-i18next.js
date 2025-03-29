let currentLanguage = 'en';
const translations = {
  en:  { 
    title: "Appointment Scheduler",
    headerBooking: "Book an Appointment",
    inputFirstName: "First Name",
    inputLastName: "Last Name",
    inputEmail: "Email",
    inputPhone: "Phone Number",
    inputDate: "Appointment Date",
    inputTime: "Appointment Time",
    bookingButton: "Book",
    homeReturnButton: "Go Back To Home Page",
    manageApptButton: "Manage Appointments",
    anotherBookingButton: "Book Another Appointment",
    confirmationTitle: "Appointment Confirmation",
    errorTitle: "Confirmation Error",
    bookingSuccess: "Congratulations! You have sucessfully booked this appointment!",
    bookingError: "Sorry. There was an error in booking this appointment. Try Again.",
    searchButton: "Search",
    appointmentsTitle: "Appointments",
    apptCardTitle: "APPOINTMENT",
    apptCardDate: "Date:",
    apptCardTime: "Time:",
    rescheduleTitle: "Reschedule Appointment",
    rescheduleButton: "Reschedule",
    cancelApptButton: "Cancel",
    cancelWarning: "Are you sure you want to cancel this appointment?",
    rescheduleInputDate: "New Preferred Date",
    rescheduleInputTime: "New Preferred Time",
    rescheduleConfirmation: "Congrats! You have sucessfully rescheduled this appointment!",
    rescheduleError: "Sorry. There was an error in rescheduling this appointment. Try Again." 
  },
  es: {
    title: "Programador de Citas",
    headerBooking: "Reservar una Cita",
    inputFirstName: "Nombre",
    inputLastName: "Apellido",
    inputEmail: "Correo Electrónico",
    inputPhone: "Número de Teléfono",
    inputDate: "Fecha de la Cita",
    inputTime: "Hora de la Cita",
    bookingButton: "Reservar",
    homeReturnButton: "Regresar a la Página Principal",
    manageApptButton: "Administrar Citas",
    anotherBookingButton: "Agendar Otra Cita",
    confirmationTitle: "Confirmación de Cita",
    errorTitle: "Error de Confirmación",
    bookingSuccess: "¡Felicidades! Ha reservado esta cita con éxito.",
    bookingError: "Lo sentimos. Hubo un error al reservar esta cita. Intente de nuevo.",
    searchButton: "Buscar",
    appointmentsTitle: "Citas",
    apptCardTitle: "CITAS",
    apptCardDate: "Fecha:",
    apptCardTime: "Hora:",
    rescheduleTitle: "Reprogramar Cita",
    rescheduleButton: "Reprogramar",
    cancelApptButton: "Cancelar",
    cancelWarning: "¿Está seguro de que desea cancelar esta cita?",
    rescheduleInputDate: "Nueva Fecha Preferida",
    rescheduleInputTime: "Nueva Hora Preferida",
    rescheduleConfirmation: "¡Felicidades! Ha reprogramado exitosamente esta cita",
    rescheduleError: "Lo siento. Hubo un error al reprogramar esta cita. Inténtelo de nuevo."
  }
};

const useTranslation = () => ({
  t: (key) => translations[currentLanguage][key] || key,
  i18n: {
    changeLanguage: (lang) => {
      currentLanguage = lang;
      return Promise.resolve(); 
    },
  },
});

module.exports = {
  useTranslation
};
