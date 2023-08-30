$(document).ready(() => {
	let $btns = $(".project-area .button-group button");

	$btns.click(function (e) {
		$(".project-area .button-group button").removeClass("active");
		e.target.classList.add("active");

		let selector = $(e.target).attr("data-filter");
		$(".project-area .grid").isotope({
			filter: selector,
		});

		return false;
	});

	// Owl-carousel

	$(".site-main .about-area .owl-carousel").owlCarousel({
		loop: true,
		autoplay: true,
		dots: true,
		responsive: {
			0: {
				items: 1,
			},
			560: {
				items: 2,
			},
		},
	});

	$(window).scroll(function () {
		if (this.scrollY > 20) {
			$(".header_area .main-menu").addClass("navbar_fixed");
		} else {
			$(".header_area .main-menu").removeClass("navbar_fixed");
		}
	});

});
