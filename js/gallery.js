/**
 * ============================================================================
 * NIYIVERSE — SELECTED WORK CENTERPIECE GALLERY & 3D STACK
 * Layered spatial transitions, 3D card tilt & case study modal system
 * ============================================================================
 */

(function () {
  'use strict';

  const galleryStack = document.getElementById('work-gallery-stack');
  const modalOverlay = document.getElementById('case-study-modal');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  let lastFocusedElement = null;

  // 1. Render Project Cards Dynamically from Data
  function renderProjects() {
    if (!galleryStack || !window.NIYI_DATA || !window.NIYI_DATA.projects) return;

    const projects = window.NIYI_DATA.projects;
    galleryStack.innerHTML = '';

    projects.forEach((proj, index) => {
      const cardWrapper = document.createElement('div');
      cardWrapper.className = 'project-card-wrapper';
      cardWrapper.setAttribute('data-index', index);
      cardWrapper.style.zIndex = index + 1;

      // Badges
      let statusBadgeClass = 'badge-dev';
      if (proj.statusType === 'live') statusBadgeClass = 'badge-live';
      if (proj.statusType === 'concept') statusBadgeClass = 'badge-concept';

      // Tech tags HTML
      const techTagsHtml = proj.technologies
        .map(tech => `<span class="badge badge-tech">${tech}</span>`)
        .join('');

      // Links HTML
      let liveBtnHtml = '';
      if (proj.links.live && proj.links.live !== '#') {
        liveBtnHtml = `
          <a href="${proj.links.live}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-pill">
            <span>Live Demo</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
          </a>
        `;
      }

      let githubBtnHtml = '';
      if (proj.links.github) {
        githubBtnHtml = `
          <a href="${proj.links.github}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-pill" aria-label="View source code on GitHub">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
            <span>Source Code</span>
          </a>
        `;
      }

      cardWrapper.innerHTML = `
        <article class="project-card" data-project-id="${proj.id}">
          <div class="project-visual-frame">
            <span class="badge ${statusBadgeClass} project-visual-badge">${proj.statusBadge}</span>
            <img src="${proj.image}" alt="${proj.title} project screenshot and interface showcase" class="project-image" loading="lazy">
            <div class="project-visual-overlay"></div>
          </div>
          <div class="project-info-frame">
            <div>
              <div class="project-meta-top">
                <span class="project-index">${proj.number} // ${proj.conceptBadge}</span>
                <span class="project-type-tag">${proj.type}</span>
              </div>
              <h3 class="project-card-title">${proj.title}</h3>
              <p class="project-card-desc">${proj.summary}</p>
              
              <div class="project-takeaway-box">
                <div class="project-takeaway-label">The Core Problem</div>
                <div class="project-takeaway-text">${proj.problem}</div>
              </div>

              <div class="project-tech-tags">
                ${techTagsHtml}
              </div>
            </div>

            <div class="project-card-actions">
              <button class="btn btn-primary btn-pill open-case-study" data-project-id="${proj.id}">
                <span>View Full Case Study</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"></polyline></svg>
              </button>
              ${liveBtnHtml}
              ${githubBtnHtml}
            </div>
          </div>
        </article>
      `;

      galleryStack.appendChild(cardWrapper);
    });

    initScrollStackEffect();
    initCard3DTilt();
    initModalHandlers();
  }

  // 2. Centerpiece Scroll Stack: Scales down previous cards in 3D perspective
  function initScrollStackEffect() {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const cards = document.querySelectorAll('.project-card-wrapper');
    if (!cards.length) return;

    function updateStack() {
      const windowHeight = window.innerHeight;

      cards.forEach((card, index) => {
        const nextCard = cards[index + 1];
        if (!nextCard) return; // Last card remains fully forward

        const rect = card.getBoundingClientRect();
        const nextRect = nextCard.getBoundingClientRect();

        // Calculate overlap progress
        const overlap = Math.max(0, (windowHeight * 0.7) - nextRect.top);
        const progress = Math.min(Math.max(overlap / (windowHeight * 0.6), 0), 1);

        if (progress > 0) {
          const scale = 1 - (progress * 0.06);
          const translateZ = -progress * 70;
          const rotateX = progress * 2.5;
          const opacity = 1 - (progress * 0.22);

          card.style.transform = `scale(${scale}) translateZ(${translateZ}px) rotateX(${rotateX}deg)`;
          card.style.opacity = opacity.toFixed(3);
        } else {
          card.style.transform = 'scale(1) translateZ(0px) rotateX(0deg)';
          card.style.opacity = '1';
        }
      });
    }

    window.addEventListener('scroll', updateStack, { passive: true });
    window.addEventListener('resize', updateStack, { passive: true });
    updateStack();
  }

  // 3. Subtle 3D Mouse Tilt on Individual Project Cards (Desktop Only)
  function initCard3DTilt() {
    if (window.matchMedia('(hover: none) or (pointer: coarse)').matches) return;

    const cards = document.querySelectorAll('.project-card');

    cards.forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;

        const tiltX = (y - 0.5) * -6; // max 3 deg
        const tiltY = (x - 0.5) * 6;

        card.style.transform = `perspective(1000px) rotateX(${tiltX.toFixed(2)}deg) rotateY(${tiltY.toFixed(2)}deg)`;
      });

      card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
      });
    });
  }

  // 4. Modal Handlers
  function initModalHandlers() {
    document.addEventListener('click', (e) => {
      const btn = e.target.closest('.open-case-study');
      if (btn) {
        const projId = btn.getAttribute('data-project-id');
        openCaseStudyModal(projId, btn);
      }
    });

    if (modalCloseBtn) {
      modalCloseBtn.addEventListener('click', closeModal);
    }

    if (modalOverlay) {
      modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) closeModal();
      });
    }

    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modalOverlay && modalOverlay.classList.contains('open')) {
        closeModal();
      }
    });
  }

  function openCaseStudyModal(projectId, triggerBtn) {
    if (!window.NIYI_DATA || !modalOverlay) return;
    const project = window.NIYI_DATA.projects.find(p => p.id === projectId);
    if (!project) return;

    lastFocusedElement = triggerBtn;

    const modalImg = document.getElementById('modal-img');
    const modalBadge = document.getElementById('modal-badge');
    const modalType = document.getElementById('modal-type');
    const modalTitle = document.getElementById('modal-title');
    const modalDesc = document.getElementById('modal-desc');
    const modalProblem = document.getElementById('modal-problem');
    const modalSolution = document.getElementById('modal-solution');
    const modalTakeaway = document.getElementById('modal-takeaway');
    const modalHighlights = document.getElementById('modal-highlights');
    const modalLiveLink = document.getElementById('modal-link-live');
    const modalGithubLink = document.getElementById('modal-link-github');

    if (modalImg) {
      modalImg.src = project.image;
      modalImg.alt = project.title;
    }
    if (modalBadge) modalBadge.textContent = project.statusBadge;
    if (modalType) modalType.textContent = `${project.number} // ${project.type}`;
    if (modalTitle) modalTitle.textContent = project.title;
    if (modalDesc) modalDesc.textContent = project.summary;
    if (modalProblem) modalProblem.textContent = project.problem;
    if (modalSolution) modalSolution.textContent = project.solution;
    if (modalTakeaway) modalTakeaway.textContent = project.takeaway;

    if (modalHighlights) {
      modalHighlights.innerHTML = project.highlights
        .map(h => `<li style="display:flex;gap:0.5rem;align-items:flex-start;margin-bottom:0.4rem;font-size:var(--text-sm);color:var(--text-secondary);"><span style="color:var(--copper-bright);font-weight:bold;">›</span><span>${h}</span></li>`)
        .join('');
    }

    if (modalLiveLink) {
      if (project.links.live && project.links.live !== '#') {
        modalLiveLink.href = project.links.live;
        modalLiveLink.style.display = 'inline-flex';
      } else {
        modalLiveLink.style.display = 'none';
      }
    }

    if (modalGithubLink) {
      if (project.links.github) {
        modalGithubLink.href = project.links.github;
        modalGithubLink.style.display = 'inline-flex';
      } else {
        modalGithubLink.style.display = 'none';
      }
    }

    modalOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';

    // Focus close button for accessibility
    setTimeout(() => {
      if (modalCloseBtn) modalCloseBtn.focus();
    }, 100);
  }

  function closeModal() {
    if (!modalOverlay) return;
    modalOverlay.classList.remove('open');
    document.body.style.overflow = '';

    if (lastFocusedElement) {
      lastFocusedElement.focus();
    }
  }

  // Initialize on DOM Ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderProjects);
  } else {
    renderProjects();
  }
})();
