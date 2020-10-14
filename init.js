
window.onload = function()
{
    const initPerson = personGenerator.getPerson();
    document.getElementById('firstNameOutput').innerText = initPerson.firstName;
    document.getElementById('surnameOutput').innerText = initPerson.Surname;
    document.getElementById('genderOutput').innerText = initPerson.gender;
    document.getElementById('birthYearOutput').innerText = initPerson.birthYear;
};

document.getElementById("butGen").addEventListener('click', function() 
{	const initPerson = personGenerator.getPerson();
    document.getElementById('firstNameOutput').innerText = initPerson.firstName;
    document.getElementById('surnameOutput').innerText = initPerson.Surname;
    document.getElementById('genderOutput').innerText = initPerson.gender;
    document.getElementById('birthYearOutput').innerText = initPerson.birthYear;

});

document.getElementById("butRes").addEventListener('click', function() 
	{
    const initPerson = personGenerator.getPerson();
    document.getElementById('firstNameOutput').innerText = '_______';
    document.getElementById('surnameOutput').innerText = '_______';
    document.getElementById('genderOutput').innerText = '_______';
    document.getElementById('birthYearOutput').innerText = '_______';
});