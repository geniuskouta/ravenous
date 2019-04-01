const apiKey = 'HWzuTXna7SNYnk-OACBQ820Zc02r-T27QcVljWSFvOQvo3qOz4SO-YygdzcS_BB_w0A4aMx3f3NQq5CUD4e5--m4X2BuQbVIRR65oCaBeqrhoLplJnWAX75X6AOZXHYx';

const Yelp = {
search(term, location, sortBy){
	return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,{
		headers: {
			Authorization: `Bearer ${apiKey}`
		},
	}).then(response => {
		return response.json();
	}).then(jsonResponse => {
		if(jsonResponse.businesses){
			return jsonResponse.businesses.map(business =>{
				console.log(business);
				return{
				id: business.id,
				imageSrc: business.image_url,
				name: business.name,
				address: business.location.address1,
				city: business.location.city,
				state: business.location.state,
				zipCode: business.location.zip_code,
				category: business.categories[0].title,
				rating: business.rating,
				reviewCount: business.review_count,
				}
			});
		}
	});
}

}

export default Yelp;
