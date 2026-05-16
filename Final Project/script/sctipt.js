
// Search bar
const searchInput = document.getElementById('searchInput');
const dropdown = document.getElementById('searchDropdown');

searchInput.addEventListener('click', function () {
  dropdown.style.display = 'block';
});

document.addEventListener('click', function (event) {
  if (!searchInput.contains(event.target) && !dropdown.contains(event.target)) {
    dropdown.style.display = 'none';
  }
});


        function incrementQty() {
            const qtyInput = document.getElementById('quantity');
            qtyInput.value = parseInt(qtyInput.value) + 1;
        }

        function decrementQty() {
            const qtyInput = document.getElementById('quantity');
            if (parseInt(qtyInput.value) > 1) {
                qtyInput.value = parseInt(qtyInput.value) - 1;
            }
        }

        document.querySelectorAll('.thumbnail-img').forEach(thumb => {
            thumb.addEventListener('click', function () {
                document.getElementById('mainProductImage').src = this.src.replace('80x80', '600x600');

                document.querySelectorAll('.thumbnail-img').forEach(img => {
                    img.classList.remove('border-2', 'border-dark');
                    img.classList.add('border');
                });
                this.classList.remove('border');
                this.classList.add('border-2', 'border-dark');
            });
        });




function changeMainImage(src) {
  document.getElementById('mainImage').src = src;
}


// zoom and rotate img

document.querySelectorAll('.img-zoom-wrapper').forEach(wrapper => {
  const img = wrapper.querySelector('img');
  const icon = wrapper.querySelector('.zoom-icon');

  wrapper.addEventListener('mouseenter', () => {
    img.style.transform = 'scale(1.1) skewY(0deg) rotate(2deg)';

  });

  wrapper.addEventListener('mouseleave', () => {
    img.style.transform = 'scale(1)';
  });
});

// In Item 
function setZoomedImage() {
    const mainImageSrc = document.getElementById('mainProductImage').src;
    document.getElementById('zoomedImage').src = mainImageSrc;
}

// --- Countdown Timer Logic ---
function startCountdown() {
    // حدد التاريخ المستهدف هنا (مثلاً: بعد 10 أيام من الآن)
    // يمكنك تغييره إلى تاريخ محدد مثل: new Date("Dec 31, 2026 23:59:59").getTime();
    const countDownDate = new Date().getTime() + (10 * 24 * 60 * 60 * 1000); 

    const timerInterval = setInterval(function() {
        const now = new Date().getTime();
        const distance = countDownDate - now;

        // حساب الوقت المتبقي
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // عرض النتائج في العناصر المحددة
        document.getElementById("days").innerText = days < 10 ? "0" + days : days;
        document.getElementById("hours").innerText = hours < 10 ? "0" + hours : hours;
        document.getElementById("minutes").innerText = minutes < 10 ? "0" + minutes : minutes;
        document.getElementById("seconds").innerText = seconds < 10 ? "0" + seconds : seconds;

        // إذا انتهى الوقت
        if (distance < 0) {
            clearInterval(timerInterval);
            document.getElementById("countdown-timer").innerHTML = "<div class='text-danger fw-bold'>Offer Expired!</div>";
        }
    }, 1000);
}

// تشغيل العداد عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', startCountdown);


// tabs
        document.addEventListener('DOMContentLoaded', function () {
            var tabButtons = document.querySelectorAll('#productTabs .nav-link');

            tabButtons.forEach(function (button) {
                button.addEventListener('click', function (e) {
                    tabButtons.forEach(function (btn) {
                        btn.classList.remove('active', 'text-dark');
                        btn.classList.add('text-muted');
                        btn.setAttribute('aria-selected', 'false');
                    });

                    this.classList.add('active', 'text-dark');
                    this.classList.remove('text-muted');
                    this.setAttribute('aria-selected', 'true');

                    var tabPanes = document.querySelectorAll('.tab-pane');
                    tabPanes.forEach(function (pane) {
                        pane.classList.remove('show', 'active');
                    });

                    var targetId = this.getAttribute('data-bs-target');
                    var targetPane = document.querySelector(targetId);
                    if (targetPane) {
                        targetPane.classList.add('show', 'active');
                    }
                });
            });
        });
