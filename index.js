 window.onload = function() {
    ScrollReveal().reveal('.header', {delay:50,});
    ScrollReveal().reveal('.image_1', {delay:500, distance: '0px', opacity: .05, duration: 700});
    ScrollReveal().reveal('.image_2', {delay:500, distance: '500px', origin: 'right', easing: 'steps(5)', duration: 800});
    ScrollReveal().reveal('.image_3', {delay:500, distance: '500px', origin: 'bottom', easing: 'ease-in'});
    ScrollReveal().reveal('.image_4', {delay:100, distance: '500px', origin: 'top', rotate: {x: 20, z: 20}});
    ScrollReveal().reveal('.image_5', {delay:100, distance: '500px', orgin: 'bottom', rotate: {x: 90, y: 90, z: 90}});
 }

