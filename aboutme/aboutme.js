function calculateAge(birthday) { // birthday is a date
    let age = document.getElementById("age");
    var ageDifMs = Date.now() - birthday;
    var ageDate = new Date(ageDifMs); // miliseconds from epoch
    age.innerHTML = Math.abs(ageDate.getUTCFullYear() - 2002);
    return age;
  }