(function() {

    var coverPage = document.getElementById('cover');
    var openSlides = document.getElementsByClassName("navButton");

    function CloseCoverPage() {
        document.getElementById('cover').style.height = '0';
        $('#navigation').fadeIn(3000);
    }

    coverPage.onclick = CloseCoverPage;

    window.addEventListener('scroll', function(e) {
        var offset = e.path[1].pageYOffset;

        if (offset > 5) {
            CloseCoverPage()

        }
    });

    for (var i = 0; i < openSlides.length; i++) {
        openSlides[i].addEventListener("click", function() {
            event.preventDefault();
            // console.dir(this.id);
            displaySlides(this.id);
        });
    }

    function displaySlides(id) {

        switch (id) {

            // case ('work'):
            // document.getElementById('workSlide').style.width = "100%";
            // break;

            case ('about'):
                document.getElementById('aboutSlide').style.width = "100%";
                break;

            case ('contact'):
                document.getElementById('contactSlide').style.width = "100%";
                break;

                // case ('workExit'):
                // document.getElementById('workSlide').style.width = "0%";
                // break;

            case ('aboutExit'):
                document.getElementById('aboutSlide').style.width = "0%";
                break;

            case ('contactExit'):
                document.getElementById('contactSlide').style.width = "0%";
                break;
        }
    }

    //This is function for the first project
    $('#read').click(function() {
        $('#imageOne').fadeOut('slow', function() {
            $('#moreText').fadeIn('slow');
            $('#read').hide();
            $('#readMore').show();
        })
    })

    $('#readMore').click(function() {
        $('#moreText').fadeOut('slow', function() {
            $('#imageOne').fadeIn('slow');
            $('#readMore').hide();
            $('#read').show();
        })
    })

    //This is the function for the second project

    $('#readTwo').click(function() {
        $('#imageTwo').fadeOut('slow', function() {
            $('#moreTextTwo').fadeIn('slow');
            $('#readTwo').hide();
            $('#readMoreTwo').show();
        })
    })

    $('#readMoreTwo').click(function() {
        $('#moreTextTwo').fadeOut('slow', function() {
            $('#imageTwo').fadeIn('slow');
            $('#readMoreTwo').hide();
            $('#readTwo').show();
        })
    })

    //This is the function for the third project

    $('#readThree').click(function() {
        $('#imageThree').fadeOut('slow', function() {
            $('#moreTextThree').fadeIn('slow');
            $('#readThree').hide();
            $('#readMoreThree').show();
        })
    })

    $('#readMoreThree').click(function() {
        $('#moreTextThree').fadeOut('slow', function() {
            $('#imageThree').fadeIn('slow');
            $('#readMoreThree').hide();
            $('#readThree').show();
        })
    })

    //This is the function for the fourth project

    $('#readFour').click(function() {
        $('#imageFour').fadeOut('slow', function() {
            $('#moreTextFour').fadeIn('slow');
            $('#readFour').hide();
            $('#readMoreFour').show();
        })
    })

    $('#readMoreFour').click(function() {
        $('#moreTextFour').fadeOut('slow', function() {
            $('#imageFour').fadeIn('slow');
            $('#readMoreFour').hide();
            $('#readFour').show();
        })
    })

    //This is the function for the fifth project

    $('#readFive').click(function() {
        $('#imageFive').fadeOut('slow', function() {
            $('#moreTextFive').fadeIn('slow');
            $('#readFive').hide();
            $('#readMoreFive').show();
        })
    })

    $('#readMoreFive').click(function() {
        $('#moreTextFive').fadeOut('slow', function() {
            $('#imageFive').fadeIn('slow');
            $('#readMoreFive').hide();
            $('#readFive').show();
        })
    })


    //Mobile functions

    $('#readMobile').click(function() {
        $('#moreTextMobile').fadeIn('slow')
        $('#readMobile').hide();
    })

    $('#readMobileTwo').click(function() {
        $('#moreTextMobileTwo').fadeIn('slow')
        $('#readMobileTwo').hide();
    })

    $('#readMobileThree').click(function() {
        $('#moreTextMobileThree').fadeIn('slow')
        $('#readMobileThree').hide();
    })

    $('#readMobileFour').click(function() {
        $('#moreTextMobileFour').fadeIn('slow')
        $('#readMobileFour').hide();
    })

    $('#readMobileFive').click(function() {
        $('#moreTextMobileFive').fadeIn('slow')
        $('#readMobileFive').hide();
    })

    //Mobile hamburger nav

    $(document).ready(function() {

        $(".cross").hide();
        $(".menu").hide();
        $(".hamburger").click(function() {
            $(".menu").slideToggle("slow", function() {
                $(".hamburger").hide();
                $(".cross").show();
            });
        });

        $(".cross").click(function() {
            $(".menu").slideToggle("slow", function() {
                $(".cross").hide();
                $(".hamburger").show();
            });
        });

    });

})();