
//HTML All Profiles
json.users.forEach(function(user) {
	document.querySelector("#main").innerHTML += `
	<div class="container col-lg-3 col-md-4  col-sm-6 p-3" id="${user.id}">
		<div class="card border-primary">
			<div class="box">
				<img src="${user.img}" class="card-img-top">
				<i class="fas fa-heart top-right heart"></i>
			</div>
			
			<div class="card-body text-primary text-center">
				<h4 class="card-title"><b>${user.name}</b></h4>
				<h6 class="card-title"><em>"${user.slogan}"</em></h6>
			</div>

			<div class="card-footer text-center" style="background-color: #e3f2fd;">
				<span class="fa fa-star checked"></span>
				<span class="fa fa-star checked"></span>
				<span class="fa fa-star checked"></span>
				<span class="fa fa-star"></span>
				<span class="fa fa-star"></span>
			</div>
		</div>
	</div>`;
});

document.addEventListener("click", function(e) {
	if (e.target.matches(".fas")) {
		toggleHeart(e);
	} 
}, false);


//TOGGLE Heart
function toggleHeart(e) {
	if(e.target.style.color == "red") { 
		e.target.style.color = "";
	} 

	else {
		e.target.style.color = "red";
	}
	addFavourites(e);
}

//Add Favourites
function addFavourites(e) {
	let i = e.target.parentNode.parentNode.parentNode.id;

	if(e.target.style.color == "red"){
		document.querySelector("#fav").innerHTML += `
		<div class="container col-md-6 col-sm-12 p-4 text-center" id="${json.users[i].id}">
			<div class="card border-primary">
				<div class="box1">
					<img src="${json.users[i].img}" class="card-img-top">
					<i class="fas fa-heart top-right heart" style="color: red"></i>
				</div>

			<div class="card-body text-primary">
			
				<h4 class="card-title"><b>${json.users[i].name}</b></h4>
				<h6 class="card-title"><em>"${json.users[i].slogan}"</em></h6>
				<p class="card-text">
					Location: ${json.users[i].location}<br>
					Like: ${json.users[i].like}<br>
					Dislike: ${json.users[i].dislike}
				</p>
			</div>
			
			<div class="card-footer" style="background-color: #e3f2fd;">
				<span class="fa fa-star checked"></span>
				<span class="fa fa-star checked"></span>
				<span class="fa fa-star checked"></span>
				<span class="fa fa-star"></span>
				<span class="fa fa-star"></span>
			</div>
		</div>`;
	}
	
	/* REMOVE FUNKTIONIERT NICHT RICHTIG*/
	else if(e.target.style.color != "red") {
	
		let j = document.querySelector("#fav");
		console.log(j);
		
		j.remove();
	}
}
