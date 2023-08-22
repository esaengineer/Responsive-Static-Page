var nav__el = document.querySelector(".mobile__nav");

		function mobileMenu() {
			if(nav__el.classList.contains("is_visible")) {
				nav__el.classList.remove("is_visible");
			}
			else {
				nav__el.classList.add("is_visible");
			}
		}