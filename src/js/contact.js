AOS.init();
document.querySelector('.collapse-toggle').addEventListener('click', function() {
  const targetId = this.getAttribute('data-collapse');
  const targetElement = document.querySelector(targetId);

  if (targetElement) {
    // تبديل ظهور القائمة
    targetElement.classList.toggle('hidden');
    
    // لإضافة تأثير أنميشن بسيط (اختياري)
    if (!targetElement.classList.contains('hidden')) {
      targetElement.style.height = 'auto';
    } else {
      targetElement.style.height = '0';
    }
  }
});