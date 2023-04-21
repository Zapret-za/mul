document.addEventListener('DOMContentLoaded', function() {
    const detailsBtn = document.querySelector('.btn__more');
    const detailsText = document.querySelector('.details-text');

    const detailsBtn2 = document.querySelector('.btn__explore');
    const detailsText2 = document.querySelector('.details-text-2');
  
    if (detailsBtn && detailsText) {
      detailsBtn.addEventListener('click', function() {
        if (detailsText.style.display === 'none') {
          detailsText.style.display = 'block';
          detailsBtn.textContent = 'Turn';
        } else {
          detailsText.style.display = 'none';
          detailsBtn.textContent = 'Learn More';
        }
      });
    }
    if (detailsBtn2 && detailsText2) {
        detailsBtn2.addEventListener('click', function() {
          if (detailsText2.style.display === 'none') {
            detailsText2.style.display = 'block';
            detailsBtn2.textContent = 'Turn';
          } else {
            detailsText2.style.display = 'none';
            detailsBtn2.textContent = 'Learn More';
          }
        });
      }
  });

  var acc = document.getElementsByClassName("accordion");
  var i;
  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.display === "block") {
        panel.style.display = "none";
      } else {
        panel.style.display = "block";
      }
    });
  }