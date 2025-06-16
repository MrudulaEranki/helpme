function loadUser() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://randomuser.me/api/", true);
  xhr.onload = function () {
    const data = JSON.parse(this.responseText);
    const user = data.results[0];
    document.getElementById("userData").innerHTML = `
      <p><strong>Name:</strong> ${user.name.first} ${user.name.last}</p>
      <p><strong>Email:</strong> ${user.email}</p>
      <img src="${user.picture.medium}" alt="User Picture">
    `;
  };
  xhr.send();
}
