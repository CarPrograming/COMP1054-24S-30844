
$(window).on("scroll", function(){
    if($(this).scrollTop() > 95){
        $("header").addClass("MovingHeader");
    }else{
        $("header").removeClass("MovingHeader");
    }
});


document.addEventListener("DOMContentLoaded", function() {
  const observerOptions = {
    threshold: 0.1
  };

  const observerCallback = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.remove('hidden');
        if (entry.target.classList.contains('about')) {
          entry.target.classList.add('slide-in-left');
        } else if (entry.target.classList.contains('myContainerForm')) {
          entry.target.classList.add('slide-in-right');
        }
        observer.unobserve(entry.target);
      }
    });
  };

  const observer = new IntersectionObserver(observerCallback, observerOptions);

  document.querySelectorAll('.hidden').forEach(section => {
    observer.observe(section);
  });
});



