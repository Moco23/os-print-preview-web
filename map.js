document.querySelector("#mapLink").addEventListener("click", function (event) {
  event.preventDefault(); // Prevent default anchor click behavior

  const mapUrl = 'https://www.google.com/maps/dir//Kranj%C4%8Devi%C4%87eva+16,+52100,+Pula/@44.860582,13.8467137,116m/data=!3m1!1e3!4m8!4m7!1m0!1m5!1m1!1s0x219fa83f30bcc5f:0xad942c0277d659ba!2m2!1d13.8471482!2d44.8605703?hl=hr&entry=ttu&g_ep=EgoyMDI0MDkzMC4wIKXMDSoASAFQAw%3D%3D';

  window.open(mapUrl, "_blank"); // Open Google Maps in a new tab
});