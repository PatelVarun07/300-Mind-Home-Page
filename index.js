const Button = document.getElementById("Button");
const NavBar  = document.getElementById('NavBar')
$(".slider").slick({
	centerMode: true,
	centerPadding: "70px",
	slidesToShow: 3,
	
	autoplay: true,
	autoplaySpeed: 4000,
	speed: 2000,
	responsive: [
		{
			breakpoint: 768,
			settings: {
				arrows: false,
				centerMode: true,
				centerPadding: "70px",
				slidesToShow: 3,
			},
		},
		{
			breakpoint: 480,
			settings: {
				arrows: false,
				centerMode: true,
				centerPadding: "70px",
				slidesToShow: 1,
			},
		},
	],
});

const carosole = () => {
	setInterval(function () {
		let sliderCard = document.querySelectorAll("#slider");
		let current = sliderCard.item(0).className;
		sliderCard.item(0).className = sliderCard.item(1).className;
		sliderCard.item(1).className = sliderCard.item(2).className;
		sliderCard.item(2).className = sliderCard.item(3).className;
		sliderCard.item(3).className = sliderCard.item(4).className;
		sliderCard.item(4).className = current;
	}, 4000);
};
carosole();
$(".client-slider").slick({
	centerMode: true,
	centerPadding: "0px",
	slidesToShow: 3,
	vertical: true,
	arrows: false,
	dots: false,
	autoplay: true,
	speed: 2000,
	autoplaySpeed: 4000,
	responsive: [
		{
			breakpoint: 768,
			settings: {
				arrows: false,

				slidesToShow: 3,
			},
		},
		{
			breakpoint: 480,
			settings: {
				arrows: false,
				
				slidesToShow: 1,
			},
		},
	],
});
Button.addEventListener('click', () => {
	if (NavBar.classList.contains('active-nav')) {
		NavBar.classList.remove('active-nav')
		Button.classList.remove("change");
		document.body.classList.remove('body')
		
	}
	else {
		NavBar.classList.add('active-nav')
		Button.classList.add("change");
		document.body.classList.add("body");
	}
}
)

