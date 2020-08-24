// Scroll to top
        window.onscroll = function() {scrollFunction()};
        function scrollFunction() {
            var top = document.getElementById('totop');
            if (document.body.scrollTop > 650 || document.documentElement.scrollTop > 650) {
                top.style.display = 'block';
            } else {
                top.style.display = 'none';
            }
        };
        function scrollToTop() {
            var position = document.body.scrollTop || document.documentElement.scrollTop;
            if (position) {
                window.scrollBy(0, -Math.max(1, Math.floor(position / 10)));
                scrollAnimation = setTimeout('scrollToTop()', 30);
            } else clearTimeout(scrollAnimation);
        };
        function goToByScroll(id) {
            // Remove "link" from the ID
            id = id.replace("link", "");
            // Scroll
            $('html,body').animate({
                scrollTop: $("#" + id).offset().top
            }, 1000);
        }
        $("button").click(function(e) {
            // Prevent a page reload when a link is pressed
            e.preventDefault();
            // Call the scroll function
            goToByScroll(this.id);
        });