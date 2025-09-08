(function() {
	'use strict';

	var tinyslider = function() {
		var el = document.querySelectorAll('.testimonial-slider');

		if (el.length > 0) {
			var slider = tns({
				container: '.testimonial-slider',
				items: 1,
				axis: "horizontal",
				controlsContainer: "#testimonial-nav",
				swipeAngle: false,
				speed: 700,
				nav: true,
				controls: true,
				autoplay: true,
				autoplayHoverPause: true,
				autoplayTimeout: 3500,
				autoplayButtonOutput: false
			});
		}
	};
	tinyslider();

	


	var sitePlusMinus = function() {

		var value,
    		quantity = document.getElementsByClassName('quantity-container');

		function createBindings(quantityContainer) {
	      var quantityAmount = quantityContainer.getElementsByClassName('quantity-amount')[0];
	      var increase = quantityContainer.getElementsByClassName('increase')[0];
	      var decrease = quantityContainer.getElementsByClassName('decrease')[0];
	      increase.addEventListener('click', function (e) { increaseValue(e, quantityAmount); });
	      decrease.addEventListener('click', function (e) { decreaseValue(e, quantityAmount); });
	    }

	    function init() {
	        for (var i = 0; i < quantity.length; i++ ) {
						createBindings(quantity[i]);
	        }
	    };

	    function increaseValue(event, quantityAmount) {
	        value = parseInt(quantityAmount.value, 10);

	        console.log(quantityAmount, quantityAmount.value);

	        value = isNaN(value) ? 0 : value;
	        value++;
	        quantityAmount.value = value;
	    }

	    function decreaseValue(event, quantityAmount) {
	        value = parseInt(quantityAmount.value, 10);

	        value = isNaN(value) ? 0 : value;
	        if (value > 0) value--;

	        quantityAmount.value = value;
	    }
	    
	    init();
		
	};
	sitePlusMinus();

	// Back to Top Button Functionality
	var backToTop = function() {
		var button = document.querySelector('.back-to-top');
		
		if (!button) return;

		// Show/hide button based on scroll position
		var toggleButtonVisibility = function() {
			if (window.pageYOffset > 300) {
				button.classList.add('show');
			} else {
				button.classList.remove('show');
			}
		};

		// Smooth scroll to top
		var scrollToTop = function(e) {
			e.preventDefault();
			window.scrollTo({
				top: 0,
				behavior: 'smooth'
			});
		};

		// Event listeners
		window.addEventListener('scroll', toggleButtonVisibility);
		button.addEventListener('click', scrollToTop);

		// Keyboard accessibility
		button.addEventListener('keydown', function(e) {
			if (e.key === 'Enter' || e.key === ' ') {
				e.preventDefault();
				scrollToTop(e);
			}
		});
	};
	backToTop();

	// Dark Mode Toggle Functionality
	var darkModeToggle = function() {
		var button = document.querySelector('.dark-mode-toggle');
		var moonIcon = 'fa-moon';
		var sunIcon = 'fa-sun';
		
		if (!button) return;

		// Get saved theme or default to light
		var currentTheme = localStorage.getItem('theme') || 'light';
		
		// Apply saved theme on page load
		document.documentElement.setAttribute('data-theme', currentTheme);
		updateIcon(currentTheme);

		function updateIcon(theme) {
			var icon = button.querySelector('i');
			if (!icon) return;
			
			if (theme === 'dark') {
				icon.className = 'fas ' + sunIcon;
				button.setAttribute('aria-label', 'Switch to light mode');
			} else {
				icon.className = 'fas ' + moonIcon;
				button.setAttribute('aria-label', 'Switch to dark mode');
			}
		}

		function toggleTheme() {
			var newTheme = currentTheme === 'light' ? 'dark' : 'light';
			
			document.documentElement.setAttribute('data-theme', newTheme);
			localStorage.setItem('theme', newTheme);
			currentTheme = newTheme;
			updateIcon(newTheme);
		}

		// Event listeners
		button.addEventListener('click', toggleTheme);
		
		// Keyboard accessibility
		button.addEventListener('keydown', function(e) {
			if (e.key === 'Enter' || e.key === ' ') {
				e.preventDefault();
				toggleTheme();
			}
		});
	};
	darkModeToggle();

})()