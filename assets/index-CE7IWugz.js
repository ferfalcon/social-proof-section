(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))t(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&t(c)}).observe(document,{childList:!0,subtree:!0});function a(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function t(r){if(r.ep)return;r.ep=!0;const o=a(r);fetch(r.href,o)}})();async function n(s){try{const e=await fetch(s);if(!e.ok)throw new Error(`HTTP error! status: ${e.status} on ${e.url}`);return await e.json()}catch(e){console.error("Error fectching JSON",e,s)}}function i(s){document.querySelector("[data-heading]").innerHTML=s.heading,document.querySelector("[data-copy]").innerHTML=s.copy;let e="";s.ratings.forEach(t=>{e+=`
			<li class="social-proof__rating">
				<img src="./icon-star.svg" alt="Star">
				<img src="./icon-star.svg" alt="Star">
				<img src="./icon-star.svg" alt="Star">
				<img src="./icon-star.svg" alt="Star">
				<img src="./icon-star.svg" alt="Star">
				<p class="social-proof__rating-copy">${t}</p>
			</li>
		`}),document.querySelector("[data-ratings]").innerHTML=e;let a="";s.testimonials.forEach(t=>{a+=`
			<article class="social-proof__review">
				<img src="${t.image}" alt="${t.name}">
				<h2>${t.name}</h2>
				<p>${t.category}</p>
				<p>${t.testimonial}</p>
			</article>
		`,console.log(t.name)}),document.querySelector("[data-testimonials]").innerHTML=a}const l="./data.json";n(l).then(s=>{i(s)});
