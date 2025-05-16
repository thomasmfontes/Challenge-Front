const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");

hamburger.addEventListener("click", () => 
nav.classList.toggle("active"));

document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector(".header");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("shrink");
    } else {
      header.classList.remove("shrink");
    }
  });
});

const items = document.querySelectorAll('.fade-up');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('show');
  });
});
items.forEach(item => observer.observe(item));

document.addEventListener("DOMContentLoaded", function () {
  const parteVariavel = document.getElementById("variavel");
  const endings = ["bem-estar", "sucesso", "conforto"];
  let index = 0;

  function type(text, callback, i = 0) {
    if (i < text.length) {
      parteVariavel.textContent += text.charAt(i);
      setTimeout(() => type(text, callback, i + 1), 60);
    } else {
      callback();
    }
  }

  function erase(count, callback) {
    if (count > 0) {
      parteVariavel.textContent = parteVariavel.textContent.slice(0, -1);
      setTimeout(() => erase(count - 1, callback), 40);
    } else {
      callback();
    }
  }

  function loop() {
    const current = endings[index];
    const next = endings[(index + 1) % endings.length];

    type(current, () => {
      setTimeout(() => {
        erase(current.length, () => {
          index = (index + 1) % endings.length;
          loop();
        });
      }, 1500);
    });
  }

  loop();
});

document.addEventListener("DOMContentLoaded", function () {
  const elementos = document.querySelectorAll(".fade-up");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  }, {
    threshold: 0.1
  });

  elementos.forEach(el => observer.observe(el));
});

var btn = document.querySelector(".btn");

btn.onmousemove = function(e) {
  var x = e.pageX - btn.offSetLeft;
  var y = e.pageY - btn.offSetTop;

  btn.style.setPrperty('--eixoX', x + 'px')
  btn.style.setPrperty('--eixoY', y + 'px')
}


