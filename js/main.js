/**
 * ============================================================================
 * DAVID — CORE APPLICATION INITIALIZATION & SECTION HYDRATION
 * Handles dynamic content rendering, scroll spy, navigation & lifecycle
 * ============================================================================
 */

(function () {
  'use strict';

  const data = window.DAVID_DATA || window.PORTFOLIO_DATA || window.NIYI_DATA;

  // 1. Hydrate Capabilities Section with Editorial Architectural Layout
  function hydrateCapabilities() {
    const container = document.getElementById('capabilities-container');
    if (!container || !data || !data.capabilities) return;

    const capabilities = data.capabilities;
    const featured = capabilities.filter(c => c.featured);
    const standard = capabilities.filter(c => !c.featured);

    const renderDeliverables = (items) => {
      if (!items || !items.length) return '';
      return `
        <div class="capability-deliverables">
          <div class="capability-deliverables-label">What You Can Hire Me For</div>
          <ul class="capability-deliverables-list">
            ${items.map(d => `<li><span class="bullet" aria-hidden="true">›</span><span>${d}</span></li>`).join('')}
          </ul>
        </div>
      `;
    };

    container.innerHTML = `
      <!-- Featured Core Pillars -->
      <div class="capabilities-featured-row">
        ${featured.map(cap => `
          <div class="capability-card capability-card-featured">
            <div class="capability-top-bar">
              <span class="capability-number">${cap.number}</span>
              <span class="badge badge-dev">${cap.tag}</span>
            </div>
            <h3 class="capability-title">${cap.title}</h3>
            <p class="capability-desc">${cap.description}</p>
            ${renderDeliverables(cap.deliverables)}
          </div>
        `).join('')}
      </div>

      <!-- Applied Engineering & Workflows Matrix -->
      <div class="capabilities-matrix-row">
        ${standard.map(cap => `
          <div class="capability-card capability-card-compact">
            <div class="capability-top-bar">
              <span class="capability-number">${cap.number}</span>
              <span class="badge badge-tech">${cap.tag}</span>
            </div>
            <h3 class="capability-title">${cap.title}</h3>
            <p class="capability-desc">${cap.description}</p>
            ${renderDeliverables(cap.deliverables)}
          </div>
        `).join('')}
      </div>
    `;
  }

  // 2. Hydrate "How I Work" Pipeline
  function hydrateWorkflow() {
    const list = document.getElementById('workflow-steps-list');
    if (!list || !data || !data.workflowSteps) return;

    list.innerHTML = data.workflowSteps.map(step => `
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
    if (!container || !data || !data.tools) return;

    const { production, learning, complementary } = data.tools;

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
          <h3 class="tools-group-title">Verified Production Stack</h3>
        </div>
        <div class="tools-list">
          ${renderList(production)}
        </div>
      </div>

      <div class="tools-group-card">
        <div class="tools-group-header">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" color="var(--copper-bright)"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
          <h3 class="tools-group-title">Actively Learning &amp; Exploring</h3>
        </div>
        <div class="tools-list">
          ${renderList(learning)}
        </div>
      </div>

      <div class="tools-group-card">
        <div class="tools-group-header">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" color="var(--copper-bright)"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
          <h3 class="tools-group-title">Complementary Capabilities</h3>
        </div>
        <div class="tools-list">
          ${renderList(complementary)}
        </div>
      </div>
    `;
  }

  // 4. Navigation Scroll State, Mobile Drawer & ScrollSpy
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
      function closeDrawer() {
        toggleBtn.classList.remove('open');
        toggleBtn.setAttribute('aria-expanded', 'false');
        drawer.classList.remove('open');
        drawer.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
      }

      function openDrawer() {
        toggleBtn.classList.add('open');
        toggleBtn.setAttribute('aria-expanded', 'true');
        drawer.classList.add('open');
        drawer.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
      }

      toggleBtn.addEventListener('click', () => {
        const isOpen = toggleBtn.classList.contains('open');
        if (isOpen) {
          closeDrawer();
        } else {
          openDrawer();
        }
      });

      // Close mobile drawer when clicking a link
      drawer.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', closeDrawer);
      });

      // Escape key to dismiss mobile drawer
      window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && drawer.classList.contains('open')) {
          closeDrawer();
          toggleBtn.focus();
        }
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
      'background: #08080a',
      'font-size: 13px',
      'font-family: monospace',
      'padding: 8px 12px',
      'border-left: 3px solid #c87a52',
      'border-radius: 4px'
    ].join(';');

    console.log(
      '%c✦ DAVID — Engineered by David (Mathematical Science @ FUTA)\n"I turn ideas into digital products."',
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
