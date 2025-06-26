// Replace with your Google Apps Script URL
const API_URL = "https://script.google.com/macros/s/AKfycbxg6S__qKlEqgiLTqXfYVxh6BBNKj2P391ee6EC5dM1NeTZI077BWF9q4IHcaY0mpMm/exec";

// Submit reservation
document.getElementById('reservationForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  
  const name = document.getElementById('name').value;
  const classType = document.getElementById('classType');
  const className = classType.options[classType.selectedIndex].text;
  const date = document.getElementById('date').value;
  
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      body: JSON.stringify({ name, className, date }),
      headers: { "Content-Type": "application/json" }
    });
    
    const result = await response.json();
    
    if(result.status === "success") {
      alert("¡Reserva enviada! Te confirmaremos por WhatsApp.");
      document.getElementById('reservationForm').reset();
    }
  } catch (error) {
    console.error("Error:", error);
    alert("Error al enviar reserva. Inténtalo de nuevo.");
  }
});

// Display reservation count (for admin)
async function showReservationCount() {
  try {
    const response = await fetch(API_URL);
    const reservations = await response.json();
    
    // Count reservations per class/date
    const counts = {};
    
    reservations.forEach(res => {
      const key = `${res.className} - ${res.date}`;
      counts[key] = (counts[key] || 0) + 1;
    });
    
    // Display on page (simplified example)
    console.log("Reservation Counts:", counts);
    // You'll need to implement UI to display this
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}