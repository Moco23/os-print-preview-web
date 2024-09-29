document.querySelector("#mapLink").addEventListener("click", function (event) {
  event.preventDefault(); // Prevent default anchor click behavior

  const destinationLat = 44.86057857350999;
  const destinationLon = 13.844556176569032;

  const mapUrl = `https://www.google.com/maps/dir/?api=1&destination=${destinationLat},${destinationLon}`;

  window.open(mapUrl, "_blank"); // Open Google Maps in a new tab
});
