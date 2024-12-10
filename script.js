    // زر التنقل للشاشات الصغيرة
    const navToggle = document.getElementById('navToggle');
    const navMobile = document.getElementById('navMobile');

    if (navToggle) {
      navToggle.addEventListener('click', () => {
        navMobile?.classList.toggle('active');
      });
    }