const Restaurant = (function(){
	let all = []
	let allCategories = []
	let idCounter = 0
	return class Restaurant{
		constructor(name, category, contact, numPeeps, url){
			this.id = idCounter++
			this.name = name
			debugger
			this.category = category
			this.contact = contact
			this.numPeeps = numPeeps
			this.url = url 
			all.push(this)
			if(!allCategories.includes(this.category)){
				allCategories.push(this.category)
			}
		}

		static all(){
			return all
		}

		static allCategories(){
			return allCategories
		}

		render(){
			return `<li>Name: ${this.name}<br>
			Contact Info: ${this.contact}<br>
			Number of People Here Now: ${this.numPeeps}<br>
			URL: ${this.url}</li><br>`
		}

		static getByCat(category){
			//render all the restaurants that belong to that category
			let arrayOfRestForCat = all.filter(rest => rest.category === category)
			let rests = arrayOfRestForCat.map(rest => rest.render()).join('')
			return `<div id="${category}"><h3>${category}</h3>${rests}</div>`
		}

		static renderAll(){
			//always renders by category
			return allCategories.map(cat => Restaurant.getByCat(cat))
		}


	}



})()


// list of restaurants separated by category
// name
// contact info
// how many people are there
// website URL