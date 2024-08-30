function calculateAge(birthdate) {
  const birthDate = new Date(birthdate);
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDifference = today.getMonth() - birthDate.getMonth();
  if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
      age--;
  }     
  return age;
}
function setAgeElement(birthdate) {
  const age = calculateAge(birthdate);
  document.getElementById("age").innerText = age;
}
const birthdate = '2009-03-05';
setAgeElement(birthdate);