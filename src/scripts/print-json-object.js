export default function printJsonObject(jsonObject) {
	document.querySelector('[data-heading]').innerHTML = jsonObject.heading;
	document.querySelector('[data-copy]').innerHTML = jsonObject.copy;

	let ratings = ``;
	jsonObject.ratings.forEach(rating => {
		ratings += `
			<li class="social-proof__rating">
				<img src="./icon-star.svg" alt="Star">
				<img src="./icon-star.svg" alt="Star">
				<img src="./icon-star.svg" alt="Star">
				<img src="./icon-star.svg" alt="Star">
				<img src="./icon-star.svg" alt="Star">
				<p class="social-proof__rating-copy">${rating}</p>
			</li>
		`;
	});
	document.querySelector('[data-ratings]').innerHTML = ratings;

	// console.log(jsonObject.testimonials.forEach(el => console.log(el.name)))
	let articles = ``;
	jsonObject.testimonials.forEach(testimonial => {
		articles += `
			<article class="social-proof__review">
				<img src="${testimonial.image}" alt="${testimonial.name}">
				<h2>${testimonial.name}</h2>
				<p>${testimonial.category}</p>
				<p>${testimonial.testimonial}</p>
			</article>
		`
		console.log(testimonial.name)
	})
	document.querySelector('[data-testimonials]').innerHTML = articles;
}