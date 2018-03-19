// SCROLLING NAV EFFECT
$(document).ready(function() {
        $(window).scroll(function() {
          // checks if window is scrolled more than 500px, adds/removes solid class
          if($(this).scrollTop() > 150) {
              $('.navComponent').addClass('solid');
              $('nav').addClass('navShadow');
          } else {
              $('.navComponent').removeClass('solid');
              $('nav').removeClass('navShadow');
          }
        });
});

// ANIMATED TEXT
var TxtRotate = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtRotate.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 150 - Math.random() * 50;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function() {
    that.tick();
  }, delta);
};

window.onload = function() {
  var elements = document.getElementsByClassName('txt-rotate');
  for (var i=0; i<elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-rotate');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid white }";
  document.body.appendChild(css);
};

// CHANGE SOURCE OF HOVER IMAGES

    $(function() {
        $("#rPic").hover(
            function() {
                $(this).attr("src", "resources/ratatat.gif");
            },
            function() {
                $(this).attr("src", "resources/static.gif");
            }
        );
    });

    $(function() {
        $("#cPic").hover(
            function() {
                $(this).attr("src", "resources/colorPicker.gif");
            },
            function() {
                $(this).attr("src", "resources/static.gif");
            }
        );
    });
    $(function() {
        $("#wPic").hover(
            function() {
                $(this).attr("src", "resources/westWorld.gif");
            },
            function() {
                $(this).attr("src", "resources/static.gif");
            }
        );
    });
    $(function() {
        $("#ruPic").hover(
            function() {
                $(this).attr("src", "resources/rubyTester.gif");
            },
            function() {
                $(this).attr("src", "resources/static.gif");
            }
        );
    });


// SMOOTH SCROLLING
$(document).ready(function(){
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 900, 'swing');
	});
});
