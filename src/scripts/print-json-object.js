export default function printJsonObject(data) {
	printHeading(data.heading);
	printCopy(data.copy);
	printRatings(data.ratings);
	printTestimonials(data.testimonials, "article");

	function printHeading(heading) {
		const element = document.querySelector('[data-heading]');
		element ? element.innerHTML = heading : null;
	}

	function printCopy(copy) {
		const element = document.querySelector('[data-copy]');
		element ? element.innerHTML = copy : null;
	}

	function printRatings(ratings) {
		let ratingsHTML = ``;
		ratings.forEach(rating => {
			ratingsHTML += `
				<li class="social-proof__rating   rating-card">
					<img class="rating-card__stars" src="./icon-5-stars.svg" alt="5 Stars" width="117" height="16">
					<p class="rating-card__copy   rating-card__copy--type">${rating}</p>
				</li>`;
		});

		const element = document.querySelector('[data-ratings]');
		element ? element.innerHTML = ratingsHTML : null;
	}

	function printTestimonials(testimonials, element) {
		let testimonialsHTML = ``;
		testimonials.forEach(testimonial => {
			testimonialsHTML += `
				<li>
					<${element} class="testimonial-card">
						<img class="testimonial-card__image" src="${testimonial.image}" alt="${testimonial.name}">
						<h2 class="testimonial-card__name   testimonial-card__name--type">${testimonial.name}</h2>
						<p class="testimonial-card__category   testimonial-card__category--type">${testimonial.category}</p>
						<p class="testimonial-card__testimonial   testimonial-card__testimonial--type">${testimonial.testimonial}</p>
					</${element}>
				</li>`
		})

		const wrapper = document.querySelector('[data-testimonials]');
		wrapper ? wrapper.innerHTML = testimonialsHTML : null;
	}
}