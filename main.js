//* General code
const themeSwitch = document.getElementById("themeSwitch");
const dynamicText = document.getElementById("dynamic-text");

// تبديل الألوان بين الوضع الليلي والنهاري
themeSwitch.addEventListener("change", function () {
  if (themeSwitch.checked) {
    // الوضع النهاري
    document.body.style.backgroundColor = "#ffffff";
    document.body.style.color = "#000000";
    dynamicText.style.color = "#000000"; // لون النص في الوضع النهاري
  } else {
    // الوضع الليلي
    document.body.style.backgroundColor = "#0f0f0f";
    document.body.style.color = "#ffffff";
    dynamicText.style.color = "#ffffff"; // لون النص في الوضع الليلي
  }
});

const text1 = `
  يتشرف مطعم تيتا بحضوركم لتناول أفضل المأكولات الشرقية 
  والغربية. نقدم لكم خدمات متميزة في تقديم الطعام وتوصيله
  إلى المنازل في أسرع وقت ممكن. يمكنكم الطلب من خلال هذا
  الموقع عبر خانة أطلب. لا تنسوا زيارة فرعنا في
  نبروة، شارع 6 أكتوبر أمام هايبر الكابتن
`;
const typingSpeed = 50;

function typeWriter(elementId, text, speed) {
  let i = 0;
  document.getElementById(elementId).innerHTML = ""; // إعادة تعيين النص
  function typing() {
    if (i < text.length) {
      document.getElementById(elementId).innerHTML += text.charAt(i);
      i++;
      setTimeout(typing, speed);
    }
  }
  typing();
}

// تشغيل التأثير الأول عند تحميل الصفحة
window.onload = function () {
  typeWriter("dynamic-text", text1, typingSpeed);
};

//* menu buttons
document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".container-buttons button");
  const sections = document.querySelectorAll(".menu-section");

  buttons.forEach(button => {
      button.addEventListener("click", () => {
          const target = button.getAttribute("data-target");
          sections.forEach(section => {
              section.classList.remove("active");
          });
          const activeSection = document.getElementById(target);
          if (activeSection) {
              activeSection.classList.add("active");
          }
      });
  });
});


//* Swiper library
const swiper = new Swiper('.mySwiper', {
  slidesPerView: 4, // عدد الصور المعروضة في نفس الوقت
  spaceBetween: 10, // مسافة بين الصور
  loop: true, // تفعيل الحركة المستمرة
  autoplay: {
    delay: 3000, // مدة التوقف بين كل صورة
    disableOnInteraction: false, // استمر بالحركة حتى عند التفاعل
  },
});

//! Back End (Email js service)

emailjs.init('O73WVa3w8Y19tLK0Q'); //* input your user id from Email js 

document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const templateParams = {
    user_name: document.getElementById('user_name').value,
    user_phone: document.getElementById('user_phone').value,
    user_address: document.getElementById('user_address').value,
    message: document.getElementById('message').value,
  };

  emailjs.send('service_8d0lj7e', 'template_5o2gbcp', templateParams)
    .then(function(response) {
      console.log('SUCCESS!', response.status, response.text);
      alert('تم إرسال الرسالة بنجاح!');
      document.getElementById('contactForm').reset();
    }, function(error) {
      console.log('FAILED...', error);
      alert('حدث خطأ أثناء الإرسال: ' + error.text);
    });
});

