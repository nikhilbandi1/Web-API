// alert("Welcome")
	// api url 
const api_url = 
	"https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=500"; 

// Defining async function 
async function getapi(url) { 
	//alert('hi')
	// Storing response 
	//var myRequest = new Request(url);
	//var myURL = request.url
//alert('hi')
	const response = await fetch(url); 
	
	// Storing data in form of JSON 
	const data = await response.json(); 
	console.log(data); 
	if (response) { 
		hideloader(); 
	} 
	show(data); 
} 
// Calling that async function 
getapi(api_url); 

// Function to hide the loader 
function hideloader() { 
	document.getElementById('loading').style.display = 'none'; 
} 
// Function to define innerHTML for HTML table 
function show(data) { 
	let tab = 
		`<tr> 
		<th>S.no</th>
		
		<th>Facts</th> 
		
		</tr>`; 
	var counter =1;
	// Loop to access all rows 
	for (let r of data) { 
		tab += `<tr> 
	<td>${counter}</td>
	
	
	<td>${r.text}</td> 
			 
</tr>`; 
counter= counter+1;
	} 
	// Setting innerHTML as tab variable 
	document.getElementById("type").innerHTML = tab; 
} 

