
$(".slider").owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsiveClass: true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2,
        },
        800:{
            items:3
        },
        1000:{
            items:5
        }
    }
});



// Initialize and add the map
function initMap() {
    // The location of Uluru
    const uluru = { lat: 12.9716, lng: 77.5946 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: uluru,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
        position: uluru,
        map: map,
    });
    }


