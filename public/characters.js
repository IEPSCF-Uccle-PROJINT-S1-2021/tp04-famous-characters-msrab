const button = document.querySelector('button');
const div = document.getElementById('table');
const choice = ['avengers', 'batman', 'harry_potter'];

if(button){
	console.log('button');
	button.addEventListener('click', display, false);
}
console.log('just here');

function display() {
	console.log('display()');
	displayList();
	div.textContent = "Chargement en cours...";
}

function displayList() {
	let table = [];

	choice.forEach((element, index, table) => {
		if(document.getElementById(element).checked){
			try{
				let characters = fetchAndDecode(element + '.json');
				table.push(characters);
			}
			catch(e){
				console.log('Error : ' + e.message);
			}
		}
	});

	Promise.all(table)
	.then((values) => {
		if(values.length === 0)
			div.innerHTML = '<strong> Aucun résultat trouvé</strong>';
		else{
			if(document.getElementById('name').checked)
				table = sort(table, 1);
			else
				table = sort(table, 2);


			let htmlTable = '<table><tr><th>Prénom</th><th>Nom</th></tr>';

			table.forEach((elem, index, htmlTable) => {
				htmlTable += '<tr><td>'+elem.firstName+'</td><td>'+elem.lastName+'</td></tr>';
			});

			htmlTable += '</table>';

			div.innerHTML = htmlTable;
		}
	});
}

async function fetchAndDecode(url){
	let response = await fetch(url);
	let content;

	if(!response.ok)
		throw new Error('HTTP ERROR! status : ' + response.status);
	else{
		content = await response.json();
		return content;
	}
}

function sort(tab, name){
	tab.sort((a,b) => {
		if((name === 1 && a.firstName > b.firstName) ||
			(name === 2 && a.lastName > b.lastName))
			return 1;
		if((name === 1 && a.firstName < b.firstName) ||
			(name === 2 && a.lastName < b.lastName))
			return -1;

		return 0;
	});

	return tab;
}