const input = document.querySelector("input");
const detect = document.getElementById('searching');
const portfolio = document.querySelector(".portfolio");
const button = document.getElementById('button');
let page = 1;
let value = '';
let list ;
var modal = document.querySelector(".modal");

async function data_array(){
	list = await fetch(
        'https://reqres.in/api/users?per_page=12'
    ).then(res => res.json());

}

detect.addEventListener('keyup', element=>{
	value = element.target.value;
	showsearch();
});
var m=4;
async function showsearch(){
	portfolio.innerHTML='';
	await data_array();
	var hey = Object.values(list); 
	hey[m].filter(listAll =>
		listAll.first_name.toLowerCase().includes(value.toLowerCase()) || listAll.last_name.toLowerCase().includes(value.toLocaleLowerCase())
	)
	.forEach(listAll => {
		const x = document.createElement("div");
		x.style.background ="white";
		x.style.height= "380px";
		x.style.width="300px";
		x.style.borderRadius ="5px";
		x.innerHTML = `
		<img src = "${listAll.avatar}" >
		<p><b>${listAll.first_name} ${listAll.last_name}</b></p>
		<p>${listAll.email}</p>
		`;
		portfolio.appendChild(x);
		var y = document.createElement("div");
		y.innerHTML =`
		<h4><b><p>Id: ${listAll.id}</p></b></h4>
		<h4><b><p>Email: ${listAll.email}</p></h4></b>
		 <h4><b> First_Name: ${listAll.first_name} </b></h4>
		 <h4><b>Last_Name: ${listAll.last_name}</b></h4>
		 <img src = "${listAll.avatar}" >
		`
		x.onclick = function() {
			i++;
			if( i>1){				
				modal.removeChild(modal.lastElementChild);
				modal.style.display = "none";			
				i=0
			}
			else{
				modal.appendChild(y);
				modal.style.display="block";
			}
		  }	
	});
}

var i=0;
async function collectedData(page){
	const data = await fetch(`https://reqres.in/api/users?per_page=12`,
	{
	method:"GET",
	headers: {
		Accept: "application/json",
	},
   }
	);
	if(!data.ok){
		console.log("heyy");
		throw Error("ERROR");
		
	}
	const result = await data.json();
	result.data.forEach((element)=> {
		const x = document.createElement("div");
		x.style.background ="white";
		x.style.height= "380px";
		x.style.width="300px";
		x.style.borderRadius ="5px";
		x.innerHTML = `
		<img src = "${element.avatar}" >
		<p><b>${element.first_name}${element.last_name}</b><p>
		<p>${element.email}</p>
		`;
		portfolio.appendChild(x);	
		var y = document.createElement("div");
		y.innerHTML =`
		<h4><b><p>Id: ${element.id}</p></b></h4>
		<h4><b><p>Email: ${element.email}</p></h4></b>
		 <h4><b> First_Name: ${element.first_name} </b></h4>
		 <h4><b>Last_Name: ${element.last_name}</b></h4>
		 <img src = "${element.avatar}" >
		`
		x.onclick = function() {
			i++;
			if( i>1){				
				modal.removeChild(modal.lastElementChild);
				modal.style.display = "none";			
				i=0
			}
			else{
				modal.appendChild(y);
				modal.style.display="block";
			}
		  }	
	});
}

window.onscroll = function(ev) {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
		page+=1;
		collectedData(page);
    }
};
collectedData(page);

