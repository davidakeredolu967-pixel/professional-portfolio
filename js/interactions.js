/**
 * ============================================================================
 * NIYIVERSE — ADVANCED VISUAL INTERACTIONS & USER UTILITIES
 * Custom Cursor, Magnetic Buttons, Copy Email Toast, Dispatch & Live Time
 * ============================================================================
 */

(function () {
  'use strict';

  // 1. Custom Cursor (Desktop Only)
  function initCustomCursor() {
    const isFinePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!isFinePointer || prefersReducedMotion) return;

    const dot = document.createElement('div');
    dot.className = 'custom-cursor-dot';
    const ring = document.createElement('div');
    ring.className = 'custom-cursor-ring';

    document.body.appendChild(dot);
    document.body.appendChild(ring);
    document.body.classList.add('cursor-active');

    let mouseX = -100, mouseY = -100;
    let ringX = -100, ringY = -100;

    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
    }, { passive: true });

    function renderRing() {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
      ring.style.transform = `translate3d(${ringX.toFixed(2)}px, ${ringY.toFixed(2)}px, 0) translate(-50%, -50%)`;
      requestAnimationFrame(renderRing);
    }
    requestAnimationFrame(renderRing);

    // Hover state over interactive targets
    const interactiveSelectors = 'a, button, input, textarea, select, .project-card, .capability-card, .tool-item';
    
    document.addEventListener('mouseover', (e) => {
      if (e.target.closest(interactiveSelectors)) {
        document.body.classList.add('cursor-hover');
      }
    });

    document.addEventListener('mouseout', (e) => {
      if (e.target.closest(interactiveSelectors)) {
        document.body.classList.remove('cursor-hover');
      }
    });
  }

  // 2. Magnetic Buttons Effect
  function initMagneticButtons() {
    if (window.matchMedia('(hover: none) or (pointer: coarse)').matches) return;

    const magneticElements = document.querySelectorAll('.btn-magnetic');

    magneticElements.forEach(el => {
      el.addEventListener('mousemove', (e) => {
        const rect = el.getBoundingClientRect();
        const x = e.clientX - (rect.left + rect.width / 2);
        const y = e.clientY - (rect.top + rect.height / 2);

        // Restrained magnetic pull (max 5px)
        el.style.transform = `translate(${x * 0.22}px, ${y * 0.22}px)`;
      });

      el.addEventListener('mouseleave', () => {
        el.style.transform = 'translate(0px, 0px)';
      });
    });
  }

  // 3. Toast Notification Helper
  function showToast(message) {
    let toastContainer = document.querySelector('.toast-container');
    if (!toastContainer) {
      toastContainer = document.createElement('div');
      toastContainer.className = 'toast-container';
      document.body.appendChild(toastContainer);
    }

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `
      <span class="toast-icon">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
      </span>
      <span>${message}</span>
    `;

    toastContainer.appendChild(toast);

    // Trigger animation
    requestAnimationFrame(() => {
      toast.classList.add('show');
    });

    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => {
        if (toast.parentNode) toast.parentNode.removeChild(toast);
      }, 400);
    }, 3500);
  }

  // 4. Copy Email Handler
  function initCopyEmail() {
    const copyBtns = document.querySelectorAll('.copy-email-btn');
    const targetEmail = "akeredoludavid967@gmail.com";

    copyBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(targetEmail).then(() => {
            showToast("Email copied to clipboard: " + targetEmail);
          }).catch(() => {
            fallbackCopy(targetEmail);
          });
        } else {
          fallbackCopy(targetEmail);
        }
      });
    });

    function fallbackCopy(text) {
      const tempInput = document.createElement('input');
      tempInput.value = text;
      document.body.appendChild(tempInput);
      tempInput.select();
      document.execCommand('copy');
      document.body.removeChild(tempInput);
      showToast("Email copied to clipboard: " + text);
    }
  }

  // 5. Quick Dispatch Composer Form (Direct client mailto formulation)
  function initQuickComposer() {
    const form = document.getElementById('quick-composer-form');
    if (!form) return;

    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const nameInput = document.getElementById('composer-name');
      const emailInput = document.getElementById('composer-email');
      const msgInput = document.getElementById('composer-message');

      const name = nameInput ? nameInput.value.trim() : '';
      const email = emailInput ? emailInput.value.trim() : '';
      const msg = msgInput ? msgInput.value.trim() : '';

      if (!msg) {
        showToast("Please enter a short description of your idea.");
        return;
      }

      const subject = encodeURIComponent(`Project Inquiry: Let's build together (from ${name || 'Niyiverse Visitor'})`);
      const body = encodeURIComponent(
        `Hi Niyi,\n\n${msg}\n\nFrom: ${name || 'Prospective Client / Collaborator'}\nEmail: ${email || 'Not provided'}`
      );

      const mailtoUrl = `mailto:akeredoludavid967@gmail.com?subject=${subject}&body=${body}`;
      window.location.href = mailtoUrl;

      showToast("Opening your email client to dispatch...");
    });
  }

  // 6. Real-Time Akure, Nigeria Local Time Clock
  function initAkureClock() {
    const clockElements = document.querySelectorAll('.akure-time-clock');
    if (!clockElements.length) return;

    function updateTime() {
      // Akure, Nigeria is UTC+1 (West Africa Time)
      const options = {
        timeZone: 'Africa/Lagos',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
      };

      try {
        const formatter = new Intl.DateTimeFormat([], options);
        const timeStr = formatter.format(new Date());
        clockElements.forEach(el => {
          el.textContent = `${timeStr} WAT`;
        });
      } catch (e) {
        const d = new Date();
        const timeStr = d.toTimeString().split(' ')[0];
        clockElements.forEach(el => {
          el.textContent = `${timeStr} WAT`;
        });
      }
    }

    updateTime();
    setInterval(updateTime, 1000);
  }

  // 7. Back-to-Top Button
  function initBackToTop() {
    const backBtn = document.getElementById('back-to-top-btn');
    if (!backBtn) return;

    window.addEventListener('scroll', () => {
      const scrollPos = window.pageYOffset || document.documentElement.scrollTop;
      if (scrollPos > 450) {
        backBtn.classList.add('visible');
      } else {
        backBtn.classList.remove('visible');
      }
    }, { passive: true });

    backBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // 8. Editorial Entry Preloader Dismissal
  function initPreloader() {
    const preloader = document.getElementById('page-preloader');
    if (!preloader) return;

    function dismiss() {
      if (preloader.classList.contains('loaded')) return;
      preloader.classList.add('loaded');
      setTimeout(() => {
        if (preloader.parentNode) preloader.parentNode.removeChild(preloader);
      }, 700);
    }

    if (document.readyState === 'complete') {
      setTimeout(dismiss, 350);
    } else {
      window.addEventListener('load', () => {
        setTimeout(dismiss, 350);
      });
      // Safety timeout in case of hanging external font connections
      setTimeout(dismiss, 1200);
    }
  }

  // DOM Content Loaded Handler
  document.addEventListener('DOMContentLoaded', () => {
    initPreloader();
    initCustomCursor();
    initMagneticButtons();
    initCopyEmail();
    initQuickComposer();
    initAkureClock();
    initBackToTop();
  });
})();

