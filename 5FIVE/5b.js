document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  document.getElementById("output").innerText = `Thank you, ${name}! We'll contact you at ${email}.`;
});
