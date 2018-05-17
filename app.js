//add Items to the Table
function addItems() {
    let table = document.getElementById("myTable");
    let row = table.insertRow(1);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);
    let x =document.getElementById("item").value;
    let y =document.getElementById("quantity").value;
//creating the checkbox dynamically
    //let a=document.createElement("INPUT");
    //a.setAttribute("type","checkbox","name","check-tab1");
    //cell1.appendChild(a);
    cell1.innerHTML = "<input type='checkbox' name='check-tab1' onclick='doneItems()'>";
    cell2.innerHTML = x;
    cell3.innerHTML = y;
//creating the remove buttton dynamically
    var b =document.createElement("BUTTON");
    b.setAttribute("type","button");
    cell4.appendChild(b).innerHTML ="Remove";
    b.addEventListener('click', (e) => deleteItems(e.target));
}


//delete Items from the Table
function deleteItems(r){
	var i = r.parentNode.parentNode.rowIndex;
    document.getElementById("myTable").deleteRow(i);
}
//move elements from table1 to table2 when checkbox is checked
function doneItems(){
	let table1 = document.getElementById("myTable");
	let table2 = document.getElementById("myTable2");
	let checkboxes = document.getElementsByName("check-tab1");
    //console.log("Val1 = " + checkboxes.length);
	for(let i=0 ; i<checkboxes.length;i++)
	if(checkboxes[i].checked=== true){
		//create new rows and cells to the table2
		let newRow = table2.insertRow(1);
		let cell1 = newRow.insertCell(0);
    	let cell2 = newRow.insertCell(1);
    	let cell3 = newRow.insertCell(2);
    	let cell4 = newRow.insertCell(3);
    	//add values to the table2
    	cell1.innerHTML = "<input type='checkbox' name='check-tab2' onclick='redoItems()'>Undo";
    	cell2.innerHTML = table1.rows[i+1].cells[1].innerHTML;
        cell3.innerHTML = table1.rows[i+1].cells[2].innerHTML;
        let c = cell4.innerHTML = "<input type='button' id='btn2' value='Remove' onclick='deleteItemsfromTable2(this)'>";
        //c.addEventListener('click', (e) => deleteItemsfromTable2(e.target));
        //remove the items from the first table
        let index = table1.rows[i+1].rowIndex;
        table1.deleteRow(index);
        i--;

	}
}
//re-move the items from the table2 to table1 which checkbox is checked
function redoItems(){
	let table1 = document.getElementById("myTable");
	let table2 = document.getElementById("myTable2");
	let checkboxes = document.getElementsByName("check-tab2");
	//console.log("Val1 = " + checkboxes.length);
	for(let i=0 ; i<checkboxes.length;i++)
	if(checkboxes[i].checked=== true){
		//create new rows and cells to the table1
		let newRow = table1.insertRow(1);
		let cell1 = newRow.insertCell(0);
    	let cell2 = newRow.insertCell(1);
    	let cell3 = newRow.insertCell(2);
    	let cell4 = newRow.insertCell(3);
    	//add values to the table1
    	cell1.innerHTML = "<input type='checkbox' name='check-tab1' onclick='doneItems()'>";
    	cell2.innerHTML = table2.rows[i+1].cells[1].innerHTML;
        cell3.innerHTML = table2.rows[i+1].cells[2].innerHTML;
        let c = cell4.innerHTML = "<input type='button' id='btn2' value='Remove'>";
        //c.addEventListener('click', (e) => deleteItemsfromTable2(e.target));
        //remove the items from the first table
        let index = table2.rows[i+1].rowIndex;
        table2.deleteRow(index);
        i--;

	}
}
//delete items from table2
function deleteItemsfromTable2(btn){
  var row = btn.parentNode.parentNode;
  row.parentNode.removeChild(row);
}