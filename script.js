
/* page transition function  */
function reveal() {
    var reveals = document.querySelectorAll('.reveal')
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        }
            else {
                reveals[i].classList.remove("active")
            }
        }
    }

    window.addEventListener("scroll", reveal);
    reveal()

    /* left side reveal */
    function reveal2() {
        var reveals = document.querySelectorAll('.reveal2')
        for (var i = 0; i < reveals.length; i++) {
            var windowHeight = window.innerHeight;
            var elementTop = reveals[i].getBoundingClientRect().top;
            var elementVisible = 150;
            if (elementTop < windowHeight - elementVisible) {
                reveals[i].classList.add("active");
            }
                else {
                    reveals[i].classList.remove("active")
                }
            }
        }

window.addEventListener("onload", reveal2)
reveal2()

function reveal3() {
    var reveals = document.querySelectorAll('.reveal3')
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        }
            else {
                reveals[i].classList.remove("active")
            }
        }
    }

window.addEventListener("onload", reveal3)
reveal3()