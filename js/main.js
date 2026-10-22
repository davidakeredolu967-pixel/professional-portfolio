/**
 * ============================================================================
 * NIYIVERSE — CORE APPLICATION INITIALIZATION & SECTION HYDRATION
 * Handles dynamic content rendering, scroll spy, navigation & lifecycle
 * ============================================================================
 */

(function () {
  'use strict';

  // 1. Hydrate Capabilities Section
  function hydrateCapabilities() {
    const grid = document.getElementById('capabilities-grid');
    if (!grid || !window.NIYI_DATA || !window.NIYI_DATA.capabilities) return;

    grid.innerHTML = window.NIYI_DATA.capabilities.map(cap => `
      <div class="capability-card">
        <div>
          <div class="capability-number">${cap.number}</div>
          <h3 class="capability-title">${cap.title}</h3>
          <p class="capability-desc">${cap.description}</p>
        </div>
        <div class="capability-tag">${cap.tag}</div>
      </div>
    `).join('');
  }

  // 2. Hydrate "How I Work" Pipeline
  function hydrateWorkflow() {
    const list = document.getElementById('workflow-steps-list');
    if (!list || !window.NIYI_DATA || !window.NIYI_DATA.workflowSteps) return;

    list.innerHTML = window.NIYI_DATA.workflowSteps.map(step => `
      <div class="workflow-step-item">
        <div class="workflow-step-num">${step.step}</div>
        <div>
          <h4 class="workflow-step-title">${step.title}</h4>
          <p class="workflow-step-desc">${step.description}</p>
        </div>
      </div>
    `).join('');
  }

  // 3. Hydrate Tools & Verified Technologies
  function hydrateTools() {
    const container = document.getElementById('tools-grid');
    if (!container || !window.NIYI_DATA || !window.NIYI_DATA.tools) return;

    const { production, learning, complementary } = window.NIYI_DATA.tools;

    const renderList = (items) => items.map(item => `
      <div class="tool-item">
        <span class="tool-name">${item.name}</span>
        <span class="tool-status-tag">${item.status}</span>
      </div>
    `).join('');

    container.innerHTML = `
      <div class="tools-group-card">
        <div class="tools-group-header">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" color="var(--copper-bright)"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
          <h3 class="tools-group-title">Core Production Stack</h3>
        </div>
        <div class="tools-list">
          ${renderList(production)}
        </div>
      </div>

      <div class="tools-group-card">
        <div class="tools-group-header">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" color="var(--copper-bright)"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
          <h3 class="tools-group-title">Currently Exploring</h3>
        </div>
        <div class="tools-list">
          ${renderList(learning)}
        </div>
      </div>

      <div class="tools-group-card">
        <div class="tools-group-header">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" color="var(--copper-bright)"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
          <h3 class="tools-group-title">Complementary Skills</h3>
        </div>
        <div class="tools-list">
          ${renderList(complementary)}
        </div>
      </div>
    `;
  }

  // 4. Navigation Scroll State & ScrollSpy
  function initNav() {
    const nav = document.getElementById('site-nav');
    const toggleBtn = document.getElementById('nav-toggle-btn');
    const drawer = document.getElementById('mobile-nav-drawer');
    const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
    const sections = document.querySelectorAll('section[id]');

    // Sticky nav state on scroll
    window.addEventListener('scroll', () => {
      const scrollY = window.pageYOffset || document.documentElement.scrollTop;
      if (scrollY > 30) {
        nav.classList.add('scrolled');
      } else {
        nav.classList.remove('scrolled');
      }
    }, { passive: true });

    // Mobile menu toggle
    if (toggleBtn && drawer) {
      toggleBtn.addEventListener('click', () => {
        const isOpen = toggleBtn.classList.toggle('open');
        drawer.classList.toggle('open', isOpen);
        document.body.style.overflow = isOpen ? 'hidden' : '';
      });

      // Close mobile drawer when clicking a link
      drawer.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
          toggleBtn.classList.remove('open');
          drawer.classList.remove('open');
          document.body.style.overflow = '';
        });
      });
    }

    // ScrollSpy using IntersectionObserver
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0
    };

    const spyObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          navLinks.forEach(link => {
            if (link.getAttribute('href') === `#${id}`) {
              link.classList.add('active');
            } else {
              link.classList.remove('active');
            }
          });
        }
      });
    }, observerOptions);

    sections.forEach(sec => spyObserver.observe(sec));
  }

  // 5. Developer Brand Console Watermark
  function initConsoleWatermark() {
    const styles = [
      'color: #d98a5e',
      'background: #0b0908',
      'font-size: 13px',
      'font-family: monospace',
      'padding: 8px 12px',
      'border-left: 3px solid #c87a52',
      'border-radius: 4px'
    ].join(';');

    console.log(
      '%c✦ NIYIVERSE — Engineered by Niyi (Mathematical Science @ FUTA)\n"I turn ideas into digital products."',
      styles
    );
  }

  // Bootstrap Application
  document.addEventListener('DOMContentLoaded', () => {
    hydrateCapabilities();
    hydrateWorkflow();
    hydrateTools();
    initNav();
    initConsoleWatermark();
  });
})();
