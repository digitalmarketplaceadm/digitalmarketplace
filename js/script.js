document.addEventListener("DOMContentLoaded", function () {
    fetch("header.html")
        .then(response => response.text())
        .then(data => document.getElementById("header").innerHTML = data)
        .catch(error => console.error("Error loading header:", error));

    fetch("footer.html")
        .then(response => response.text())
        .then(data => document.getElementById("footer").innerHTML = data)
        .catch(error => console.error("Error loading footer:", error));
});

document.addEventListener('DOMContentLoaded', function() {
  const observer = new MutationObserver((mutations, obs) => {
    const toggler = document.querySelector('.navbar-toggler');
    const navMenu = document.querySelector('.nav-menu');
    if (toggler && navMenu) {
      toggler.addEventListener('click', function() {
        navMenu.classList.toggle('open');
      });
      // Once found and event attached, disconnect the observer.
      obs.disconnect();
    }
  });

  // Observe the whole document (or a specific container where the header is injected)
  observer.observe(document.body, {
    childList: true,
    subtree: true
  });
});