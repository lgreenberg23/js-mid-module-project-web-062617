$(document).ready(function(){

	function getRestaurant(){
		let cid = '0SNI1RZ2VIUVPQSTHHNNNTHZ5TR5Y3CZLYB2HDAPMBX25BMZ'
		let secret= '4AOFN53ZM54F0WGQ53N3GKHJIZIOGS5GWOMH2SNKZ4DW0GPK'
		let query = $('#search-input')

		$('#submit').on('click', function(){
			event.preventDefault()
			// console.log(query.val())
			// debugger

			fetch(`https://api.foursquare.com/v2/venues/search?ll=40,-74&client_id=${cid}&client_secret=${secret}&v=20170817&query=${query.val()}`, {
			}).then(res => res.json()).then(function(json){
				json.response.venues.forEach(function(restaurant){
					let newRest = new Restaurant(restaurant.name, restaurant.categories[0].shortName, restaurant.contact.formattedPhone, restaurant.hereNow.count, restaurant.url)
				})
				// console.log(Restaurant.all())
				$('#show-restaurants').html(Restaurant.renderAll())
				Restaurant.all().splice(0, Restaurant.all().length)
				Restaurant.allCategories().splice(0, Restaurant.allCategories().length)
			})			

		})
	}

	getRestaurant()
});


//press search, get:
// list of restaurants separated by category
// name
// contact info
// how many people are there
// website URL