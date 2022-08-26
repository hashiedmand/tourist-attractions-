var Gtotal = 0;

function display(){
    var total = 0;

    var e = document.getElementById("choice");
    var text = e.options[e.selectedIndex].text;

    var opt = document.getElementById("duration");
    total           = Number(opt.options[opt.selectedIndex].value);
	var selSizeText = opt.options[opt.selectedIndex].text;


    var neededVal = document.getElementById("ftoken");
	var NneededVal = document.getElementById("ftoken1)");

	var table = document.getElementById("c");
	var row   = table.insertRow(table.rows.length);
	var cell1 = row.insertCell(0);
	var cell2 = row.insertCell(1);
	var cell3 = row.insertCell(2);
	var cell4 = row.insertCell(3);
	var cell5 = row.insertCell(4);
	var cell6 = row.insertCell(5);
	

    cell1.innerHTML = table.rows.length - 2;
	cell2.innerHTML = text;
	cell3.innerHTML = selSizeText;

	
	if (neededVal.checked == true)
	{
		cell4.innerHTML = "Yes";
		total = total + 500;
	}
	else
	{
		cell4.innerHTML = "No";
		total = total + 0;
	}

	
	cell6.innerHTML = total + " LKR";
	Gtotal = Gtotal + total;
	
	var gTotal = document.getElementById("Overalltotal");
	gTotal.value = Gtotal;
	
	document.getElementById("tickettable").style.display="block";

}

/////////////////////////////////////////////////////////////////////////


function confmsg()
{
	Gtotal = 0;
	var table = document.getElementById("c");
	for(var i = table.rows.length - 1; i > 1; i--)
	{
		table.deleteRow(i);
	}
	document.getElementById("tickettable").style.display="none";
	alert("Purchase successful\nPlease press ok to continue")
}

