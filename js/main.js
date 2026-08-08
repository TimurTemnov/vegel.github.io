/* =====================================================
   VEGEL LOGISTICS
   Main JavaScript
===================================================== */



document.addEventListener("DOMContentLoaded", function () {



    /* =========================
       MOBILE MENU
    ========================= */


    const header = document.querySelector(".header");

    const burger = document.querySelector(".burger");

    const menuToggle = document.querySelector(".menu-toggle");

    const navLinks = document.querySelectorAll(".nav a");

    const closeMenu = function () {

        header.classList.remove("active", "menu-open");

        if (burger) burger.setAttribute("aria-expanded", "false");

        if (menuToggle) menuToggle.setAttribute("aria-expanded", "false");

    };



    if (burger) {


        burger.addEventListener("click", function () {


            header.classList.toggle("active");

            burger.setAttribute("aria-expanded", header.classList.contains("active"));


        });


    }


    if (menuToggle) {


        menuToggle.addEventListener("click", function () {


            header.classList.toggle("menu-open");

            menuToggle.setAttribute("aria-expanded", header.classList.contains("menu-open"));


        });


    }




    // Закрытие меню после выбора пункта


    navLinks.forEach(link => {


        link.addEventListener("click", function () {


            closeMenu();


        });


    });


    document.addEventListener("click", function (event) {


        if (!header.contains(event.target)) {


            closeMenu();


        }


    });







    /* =========================
       SCROLL ANIMATION
    ========================= */


    const animatedItems = document.querySelectorAll(
        ".section-title, .service-card, .advantage-item, .number-card, .timeline-item, .contact-item"
    );



    animatedItems.forEach(item => {


        item.style.opacity = "0";

        item.style.transform = "translateY(40px)";

        item.style.transition =
            "opacity .6s ease, transform .6s ease";


    });





    function revealOnScroll() {


        const windowHeight =
            window.innerHeight;



        animatedItems.forEach(item => {


            const itemTop =
                item.getBoundingClientRect().top;



            if (itemTop < windowHeight - 80) {


                item.style.opacity = "1";


                item.style.transform =
                    "translateY(0)";


            }


        });


    }




    window.addEventListener(
        "scroll",
        revealOnScroll
    );


    revealOnScroll();








    /* =========================
       SMOOTH ANCHOR SCROLL
    ========================= */


    document.querySelectorAll(
        'a[href^="#"]'
    )
    .forEach(anchor => {


        anchor.addEventListener(
            "click",
            function(e) {


                const target =
                    document.querySelector(
                        this.getAttribute("href")
                    );



                if(target) {


                    e.preventDefault();



                    target.scrollIntoView({

                        behavior:
                        "smooth",

                        block:
                        "start"

                    });


                }


            }
        );


    });







    /* =========================
       FORM DEMO
    ========================= */


    const form =
        document.querySelector(".contact-form");



    if(form) {


        form.addEventListener(
            "submit",
            function(e) {


                e.preventDefault();



                const button =
                    form.querySelector("button");



                button.innerText =
                    "Заявка отправлена";



                button.style.background =
                    "#1B2D3A";



                form.reset();



                setTimeout(() => {


                    button.innerText =
                        "Отправить заявку";


                    button.style.background =
                        "";


                },3000);



            }
        );


    }





});
