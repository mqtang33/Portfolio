// Portfolio - Smooth Scrolling Navigation

document.addEventListener('DOMContentLoaded', function() {
	// Smooth scrolling for navigation links
	const navLinks = document.querySelectorAll('.nav-menu a[href^="#"]');
	
	navLinks.forEach(link => {
		link.addEventListener('click', function(e) {
			e.preventDefault();
			
			const targetId = this.getAttribute('href');
			const targetSection = document.querySelector(targetId);
			
			if (targetSection) {
				const navHeight = document.querySelector('.navbar').offsetHeight;
				const targetPosition = targetSection.offsetTop - navHeight;
				
				window.scrollTo({
					top: targetPosition,
					behavior: 'smooth'
				});
			}
		});
	});

	// Add active state to navigation on scroll
	const sections = document.querySelectorAll('section[id]');
	
	function highlightNavigation() {
		const scrollY = window.pageYOffset;
		const navHeight = document.querySelector('.navbar').offsetHeight;
		
		sections.forEach(section => {
			const sectionHeight = section.offsetHeight;
			const sectionTop = section.offsetTop - navHeight - 50;
			const sectionId = section.getAttribute('id');
			
			if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
				document.querySelectorAll('.nav-menu a').forEach(link => {
					link.classList.remove('active');
					if (link.getAttribute('href') === `#${sectionId}`) {
						link.classList.add('active');
					}
				});
			}
		});
	}
	
	window.addEventListener('scroll', highlightNavigation);
	
	// Remove preload class if it exists
	document.body.classList.remove('is-preload');
});
