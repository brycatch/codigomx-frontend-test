const userMock = {
  userId: "1",
  firstName: "Bryan",
  lastName: "Sanchez",
  birthday: new Date("03/03/1995"),
  gender: 1,
};

const users = [userMock, userMock];

const table = document.getElementById("table-users");

const convertDateToString = (date) => {
  date = new Date(date);
  const mm = date.getMonth() + 1;
  const dd = date.getDate();

  return `${(mm > 9 ? "" : "0") + mm}/${
    (dd > 9 ? "" : "0") + dd
  }/${date.getFullYear()}`;
};

users.forEach((user) => {
  const row = table.insertRow();
  const userIdCell = row.insertCell(0);
  const firstNameCell = row.insertCell(1);
  const lastNameCell = row.insertCell(2);
  const birthdayCell = row.insertCell(3);
  const genderCell = row.insertCell(4);

  userIdCell.innerHTML = user.userId;
  firstNameCell.innerHTML = user.firstName;
  lastNameCell.innerHTML = user.lastName;
  birthdayCell.innerHTML = convertDateToString(user.birthday);
  genderCell.innerHTML = user.gender === "0" ? "Male" : "Female";
});
