$(document).ready(function(){

	$('#profile_ripple').ripples({
		resolution :512,
		dropRadius:10
	});


	const bars=document.querySelectorAll('.progress_bar');
	bars.forEach(function(bar) {
		let percentage = bar.dataset.percent;
		let tooltip = bar.children[0];
		tooltip.innerText = percentage + '%';
		bar.style.width= percentage + '%';
		console.log(percentage);
	})

	//COUNTER SECTION OF COUNTING LIKES AND COMPLETED Projects

	const counters=document.querySelectorAll('.counter');
	//console.log(counters);

	function runCounter() {
		counters.forEach(counter=>{
			counter.innerText = 0;
			let target = +counter.dataset.count;
			let step = target/100;

			
			//console.log(target)
			let countIt=function(){
				let displayedCount = +counter.innerText;
				if(displayedCount < target){
					counter.innerText= Math.ceil(displayedCount + step);
					setTimeout(countIt,2);
				}else{
					counter.innerText=target;
				}
			}
			countIt();
		})
	}
	

	//For Using IntersectionObserver Feature of Java Script 
	let counterSection = document.querySelector('.counter_section');

	let options={
		rootMargin : '0px 0px -200px 0px'
	}
	let done=0;

	const sectionObserver = new IntersectionObserver(function(entries){

		if(entries[0].isIntersecting && done !== 1){
			// Below code is to check whether it is running 
			// fine by chceking in the browser inspect element console.
			//console.log('intersecting...'); 
			done=1;
			runCounter();
		}

	},options)

	sectionObserver.observe(counterSection);


	//Image Filter JAVA SCRIPT CODING 
	var $wrapper = $('.portfolio_wrapper');

	//Using ISOTOPE JS

	//initialise ISOTOPE
	$wrapper.isotope({
		filter : '*',
		layoutMode : 'masonry',
		animationOptions : {
			duration : 750,
			easing : 'linear'
		}
	});


	//GET LINKS FOR THE PAGE

	let links = document.querySelectorAll('.tabs a');

	links.forEach(link =>{
		let selector = link.dataset.filter;
		link.addEventListener('click',function(e){
			e.preventDefault();
			//console.log('something');

		$wrapper.isotope({
		filter : selector,
		layoutMode : 'masonry',
		animationOptions : {
			duration : 750,
			easing : 'linear'
			}
		});
		
		//TO REMOVE ACTIVE CLASS USING BELOW CODE

		links.forEach(link =>{
			link.classList.remove('active');
		})
		e.target.classList.add('active');

		});
	})


	//USING MAGNIFY JS CODE BELOW AFTER IMPORTING :-

	$('.magnify').magnificPopup({

		type : 'image',
		gallery : {
			enabled : true
		},
		zoom : {
			enabled : true
		}
	});


	//SLIDER CODE JAVASCRIPT START

	$('.slider').slick({
		arrows : false,
		autoplay : true
	});

});