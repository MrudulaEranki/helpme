let users = [];

document.getElementById("userForm").addEventListener("submit", function (e) {
  e.preventDefault();
  createUser(document.getElementById("nameInput").value);
  this.reset();
});

function listUsers() {
  const list = document.getElementById("userList");
  list.innerHTML = "";

  users.forEach((user, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      ${user}
      <button onclick="editUser(${index})">Edit</button>
    `;
    list.appendChild(li);
  });
}

function createUser(name) {
  users.push(name);
  listUsers();
}

function editUser(index) {
  const newName = prompt("Enter a new name:", users[index]);
  if (newName) {
    users[index] = newName;
    listUsers();
  }
}