function myFunction() {
	
	var total = 0;
	var onenumber = document.getElementById("onenumber");
	var largernumber = document.getElementById("largernumber");	
	var counter = parseInt(onenumber.value);
	
	while(counter <= largernumber.value){
		total = total + counter;
		counter++;
	}
		
	alert(total);	
}

