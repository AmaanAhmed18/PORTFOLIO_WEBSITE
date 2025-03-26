document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menu-toggle");
  const navMenu = document.getElementById("nav-menu");
  const icon = menuToggle.querySelector("i");

  menuToggle.addEventListener("click", function () {
    navMenu.classList.toggle("active");

    icon.style.transform = "rotate(180deg)";
    icon.style.opacity = "0";

    setTimeout(() => {
      if (navMenu.classList.contains("active")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");
      } else {
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
      }
      icon.style.opacity = "1";
      icon.style.transform = "rotate(0deg)";
    }, 300);
  });
});

document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    let form = this;
    let statusMessage = document.getElementById("statusMessage");
    let loader = document.getElementById("loader");
    let submitButton = form.querySelector("button");

    loader.style.display = "block";
    submitButton.disabled = true;

    fetch(form.action, {
      method: "POST",
      body: new FormData(form),
    })
      .then((response) => {
        if (response.ok) {
          statusMessage.innerText = "Message sent successfully!";
          statusMessage.className = "status-message success";
        } else {
          statusMessage.innerText = "Failed to send message. Please try again.";
          statusMessage.className = "status-message error";
        }
        statusMessage.style.display = "block";
        form.reset();
      })
      .catch((error) => {
        statusMessage.innerText = "Failed to send message. Please try again.";
        statusMessage.className = "status-message error";
        statusMessage.style.display = "block";
      })
      .finally(() => {
        loader.style.display = "none";
        submitButton.disabled = false;
      });
  });

document.addEventListener("DOMContentLoaded", function () {
  const skillsContainer = document.querySelector(".skills-container");
  const skills = document.querySelectorAll(".skill");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          skillsContainer.classList.add("show");
          skills.forEach((skill) => {
            skill.style.opacity = "1";
            skill.style.transform = "translateY(0)";
          });
        }
      });
    },
    { threshold: 0.3 }
  );

  observer.observe(skillsContainer);
});

document.addEventListener("DOMContentLoaded", function () {
  function animateSection(sectionClass, itemClass) {
    const section = document.querySelector(sectionClass);
    const items = document.querySelectorAll(itemClass);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            section.classList.add("show");
            items.forEach((item) => {
              item.style.opacity = "1";
              item.style.transform = "translateY(0)";
            });
          }
        });
      },
      { threshold: 0.4 }
    );

    observer.observe(section);
  }
  animateSection(".projects-container", ".item");
});

document.addEventListener("DOMContentLoaded", function () {
  function animateSection(sectionClass, itemClass) {
    const section = document.querySelector(sectionClass);
    const items = document.querySelectorAll(itemClass);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            section.classList.add("show");
            items.forEach((item) => {
              item.style.opacity = "1";
              item.style.transform = "translateY(0)";
            });
          }
        });
      },
      { threshold: 0.4 }
    );

    observer.observe(section);
  }

  animateSection(".experience-container", ".work-item");
});

document.addEventListener("DOMContentLoaded", function () {
  function animateSection(sectionClass, itemClass) {
    const section = document.querySelector(sectionClass);
    const items = document.querySelectorAll(itemClass);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            section.classList.add("show");
            items.forEach((item) => {
              item.style.opacity = "1";
              item.style.transform = "translateY(0)";
            });
          }
        });
      },
      { threshold: 0.4 }
    );

    observer.observe(section);
  }

  animateSection(".certifications-container", ".grid .item");
});

document.addEventListener("DOMContentLoaded", function () {
  const resumeButton = document.querySelector(".resume-btn");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          resumeButton.classList.add("visible");
        }
      });
    },
    { threshold: 1.0 }
  );

  observer.observe(resumeButton);
});

document.addEventListener("DOMContentLoaded", function () {
  const contactSection = document.querySelector("#contact");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          contactSection.classList.add("visible");
        }
      });
    },
    { threshold: 0.4 }
  );

  observer.observe(contactSection);
});
