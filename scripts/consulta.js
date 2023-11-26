document.addEventListener('DOMContentLoaded', function() {
  var calendarEl = document.getElementById('calendario');
  var calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: 'dayGridMonth'
    // Puedes agregar más configuraciones del calendario aquí
  });
  calendar.render();
});
