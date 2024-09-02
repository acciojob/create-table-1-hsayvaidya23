function insert_Row() {
    //Write your code here
	let table = document.getElementById('sampleTable');
	let newRow = table.insertRow(0);
	let newCell1 = table.insertCell(0);
	newCell1.innerHTML = 'New Cell';
	let newCell2 = table.insertCell(1);
	newCell2.innnerHTML = 'New Cell2';
  
}
