document.getElementById('reservationForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  // Get form values
  const name = document.getElementById('name').value;
  const phone = document.getElementById('phone').value;
  const classType = document.getElementById('classType');
  const selectedClass = classType.options[classType.selectedIndex].text;
  const date = document.getElementById('date').value;
  
  // Format WhatsApp message
  const message = `¡Hola SATORI STRENGTH! Quiero reservar una clase.
  
*Nombre:* ${name}
*Teléfono:* ${phone}
*Clase:* ${selectedClass}
*Fecha:* ${date}

Por favor, confírmenme la disponibilidad. ¡Gracias!`;
  
  // Encode message for WhatsApp URL
  const encodedMessage = encodeURIComponent(message);
  
  // Create WhatsApp link
  // REPLACE 1234567890 WITH YOUR ACTUAL WHATSAPP NUMBER
  const whatsappUrl = `https://wa.me/59162108521?text=${encodedMessage}`;
  
  // Open WhatsApp
  window.open(whatsappUrl, '_blank');
  
  // Reset form
  document.getElementById('reservationForm').reset();
});