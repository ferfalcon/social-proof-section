(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&c(r)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();async function d(o){try{const n=await fetch(o);if(!n.ok)throw new Error(`HTTP error! status: ${n.status} on ${n.url}`);return await n.json()}catch(n){console.error("Error fectching JSON",n,o)}}function u(o){n(o.heading),a(o.copy),c(o.ratings),e(o.testimonials,"article");function n(t){const r=document.querySelector("[data-heading]");r&&(r.innerHTML=t)}function a(t){const r=document.querySelector("[data-copy]");r&&(r.innerHTML=t)}function c(t){let r="";t.forEach(l=>{r+=`
				<li class="social-proof__rating   rating-card">
					<img class="rating-card__stars" src="./icon-5-stars.svg" alt="5 Stars" width="117" height="16">
					<p class="rating-card__copy   rating-card__copy--type">${l}</p>
				</li>`});const i=document.querySelector("[data-ratings]");i&&(i.innerHTML=r)}function e(t,r){let i="";t.forEach(s=>{i+=`
				<li>
					<${r} class="testimonial-card">
						<img class="testimonial-card__image" src="${s.image}" alt="${s.name}">
						<h2 class="testimonial-card__name   testimonial-card__name--type">${s.name}</h2>
						<p class="testimonial-card__category   testimonial-card__category--type">${s.category}</p>
						<p class="testimonial-card__testimonial   testimonial-card__testimonial--type">${s.testimonial}</p>
					</${r}>
				</li>`});const l=document.querySelector("[data-testimonials]");l&&(l.innerHTML=i)}}const p="./data.json";d(p).then(o=>{u(o)});
