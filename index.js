 window.onload = function() {
    ScrollReveal().reveal('.header', {delay:50,});
    ScrollReveal().reveal('.image_1', {delay:500, distance: '0px', opacity: .20});
    ScrollReveal().reveal('.image_2', {delay:500, distance: '500px', origin: 'right', rotate: {x: 20, z: 20}});
    ScrollReveal().reveal('.image_3', {delay:500, distance: '500px', origin: 'bottom', scale: .25});
    ScrollReveal().reveal('.image_4', {delay:100, distance: '500px', origin: 'top', rotate: {x: 45, y: 45, z: 45}});
    ScrollReveal().reveal('.image_5', {delay:100, distance: '500px', orgin: 'bottom', rotate: {x: 90, y: 90, z: 90}});
 }