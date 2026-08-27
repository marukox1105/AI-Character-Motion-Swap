document.addEventListener('DOMContentLoaded', function () {

  /* ---- Mobile side menu ---- */
  var hamburgerBtn = document.getElementById('hamburgerBtn');
  var mobileMenu = document.getElementById('mobileMenu');
  var mobileOverlay = document.getElementById('mobileOverlay');
  var mobileMenuClose = document.getElementById('mobileMenuClose');

  function openMobileMenu() {
    mobileMenu.classList.add('is-open');
    mobileOverlay.classList.add('is-open');
  }
  function closeMobileMenu() {
    mobileMenu.classList.remove('is-open');
    mobileOverlay.classList.remove('is-open');
  }
  if (hamburgerBtn) hamburgerBtn.addEventListener('click', openMobileMenu);
  if (mobileMenuClose) mobileMenuClose.addEventListener('click', closeMobileMenu);
  if (mobileOverlay) mobileOverlay.addEventListener('click', closeMobileMenu);

  /* ---- FAQ accordion (single-open) ---- */
  var faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(function (item) {
    var q = item.querySelector('.faq-item__q');
    q.addEventListener('click', function () {
      var wasOpen = item.classList.contains('is-open');
      faqItems.forEach(function (i) {
        i.classList.remove('is-open');
        var chev = i.querySelector('.faq-item__chevron');
        chev.src = 'assets/YCO/icons/Icon_close.svg';
      });
      if (!wasOpen) {
        item.classList.add('is-open');
        item.querySelector('.faq-item__chevron').src = 'assets/YCO/icons/Icon_open.svg';
      }
    });
  });

  /* ---- Topbanner A/B switcher (review-only, not part of final page) ---- */
  var switchBtns = document.querySelectorAll('.topbanner__switch-btn');
  var topbannerVideos = document.querySelectorAll('.topbanner__media--video');
  var topbannerContent = document.getElementById('topbannerContent');
  switchBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var option = btn.getAttribute('data-option');
      switchBtns.forEach(function (b) { b.classList.remove('is-active'); });
      btn.classList.add('is-active');
      topbannerVideos.forEach(function (v) {
        if (v.getAttribute('data-option') === option) {
          v.classList.add('is-active');
          v.currentTime = 0;
          v.play().catch(function () {});
        } else {
          v.classList.remove('is-active');
          v.pause();
        }
      });
      if (topbannerContent) {
        topbannerContent.classList.toggle('is-light-text', btn.getAttribute('data-text') === 'light');
      }
    });
  });

  /* ---- Footer language switch (front-end toggle only) ---- */
  var langBtn = document.getElementById('langSwitchBtn');
  if (langBtn) {
    langBtn.addEventListener('click', function (e) {
      e.stopPropagation();
      langBtn.classList.toggle('is-open');
    });
  }

});