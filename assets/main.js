/* Static content remains readable when JavaScript is unavailable. */
(() => {
  const english = {
    skip: 'Skip to content', role: 'Undergraduate · Computer Science', school: 'China University of Petroleum (East China)',
    incoming: 'Incoming PhD · Software, Zhejiang University', navAbout: 'About', navEducation: 'Education', navPublications: 'Publications', navProjects: 'Projects', navHonors: 'Honors',
    email: 'Academic email', print: 'Print CV ↗', updated: 'Updated · November 2026',
    heroSubtitle: 'Understanding, generation, and interaction across modalities.',
    intro: 'I am an undergraduate in Computer Science and Technology at China University of Petroleum (East China). I have been admitted to the direct-entry PhD program in Electronic Information at the School of Software Technology, Zhejiang University, with enrollment planned for 2027. My research interests include multimodal learning, controllable image generation, audio-driven 3D talking heads, and LLM-based generative recommendation.',
    intro2: 'I am interested in building more reliable connections between semantics, vision, and audio, enabling models to understand multimodal content and generate it with fine-grained control.',
    viewResearch: 'Explore my research', interest1: 'Multimodal understanding', interest2: 'Controllable generation', interest3: 'Generative recommendation',
    educationTitle: 'Education', educationNote: 'Computer science to multimodal intelligence', zju: 'Zhejiang University', admitted: 'Admitted · Incoming',
    zjuDegree: 'School of Software Technology · Electronic Information · Direct-entry PhD', zjuDate: 'Enrollment planned for September 2027', upc: 'China University of Petroleum (East China)',
    undergraduate: 'Undergraduate', upcDegree: 'Qingdao Institute of Software · Computer Science and Technology · B.Eng. (expected)', upcDate: 'September 2023 — June 2027 (expected)', cspTitle: 'CCF Certified Software Professional', cspDescription: 'Programming proficiency in C / C++', points: 'points',
    publicationsTitle: 'Publications', publicationNote: '* Equal contribution', filterAll: 'All', filterLead: 'First / Co-first author', filterOther: 'Collaborations',
    accepted: 'Accepted', cofirst: 'Co-first author', first: 'First author', fifth: 'Fifth author', sixth: 'Sixth author', computerEngineering: 'Computer Engineering',
    emozoneSummary: 'Fine-grained expression control for audio-driven 3D Gaussian talking heads, using region-specific attention priorities and channel-independent temporal AU encoding while preserving lip synchronization.',
    mistrecSummary: 'Disentangles item representations into semantic and collaborative slots, combining masked slot reconstruction with false-negative reweighting for LLM-based generative recommendation.',
    memaSummary: 'Studies music aesthetics in visual contexts with the VMAE-Sets dataset, cross-modal imagination, and guided cross-attention to model audiovisual narrative relationships.',
    anomalySummary: 'Video anomaly detection through spatial–temporal feature relocalization and calibrated trajectory modeling.',
    industrialSummary: 'Introduces WBID-3K and WBID-DETR for automatic impurity detection in water sample bags under complex industrial conditions.',
    ongoing: 'Ongoing research / Under review', uniscgStatus: 'First author · AAAI 2027 · Under review',
    uniscgSummary: 'A unified image-generation framework for salient and camouflaged objects, combining attributed attention steering, depth-aware routing, and attribution-prior constraints to control object–background relationships.',
    projectsTitle: 'Research into practice', projectsNote: 'Algorithms, systems, and real-world settings',
    project1: 'Oil Safety Pioneer', project1Sub: 'Intelligent petrochemical inspection', project1Description: 'An inspection system for high-risk industrial environments, combining semantic SLAM, lightweight smoke and fire detection, and multisensor perception for navigation and hazard recognition.', project1Award: '2025 Network Technology Challenge · National Second Prize',
    project2: 'Intelligent Teaching Assistant', project2Sub: 'Robot teachers and human–AI collaboration', project2Description: 'Combines knowledge graphs, RAG, and multimodal robot perception for curriculum modeling, classroom interaction, and personalized learning feedback.', project2Award: '2025 China Software Cup · National Third Prize',
    project3: 'LoongArch assembler and assembly editor', project3Description: 'An educational assembly tool supporting 46 instructions and preprocessing, covering editing, preprocessing, and assembly. Registered software copyright; second contributor.',
    nationalScholarship: 'National Scholarship recipient', nationalScholarshipAward: 'National Scholarship', nationalScholarshipLevel: 'National-level scholarship',
    pipelineCaption: 'Method framework · Open full-size image', memaPretraining: 'Stage 1 · Cross-modal pretraining · Open full-size image', memaEvaluation: 'Stage 2 · Aesthetic evaluation · Open full-size image',
    honorsTitle: 'Honors & awards', award1: '11th Network Technology Challenge', award2: '17th China College Students Service Outsourcing Innovation and Entrepreneurship Competition', award3: '10th Network Technology Challenge', award4: '14th China Software Cup Software Design Competition', award5: 'Chinese Collegiate Computing Competition — Computing Design', award6: 'National Digital Media Technology and Creative Works Competition', award7: 'First-Class Comprehensive Scholarship & Outstanding Student',
    nationalSecond: 'National Second Prize', nationalThirdLead: 'National Third Prize · Listed first in the team', provincialFirst: 'Provincial First Prize', twoThird: 'National Third Prize × 2', team: 'Team', individual: 'Individual',
    patentTitle: 'Intellectual property', patentDescription: 'One granted invention patent on music aesthetic evaluation in visual contexts (first inventor); one invention patent under substantive examination (second inventor); one registered software copyright (second contributor).',
    footerText: 'Across modalities. Always curious.', source: 'Source code ↗', backTop: 'Back to top ↑'
  };
  const translated = [...document.querySelectorAll('[data-i18n]')];
  const chinese = new Map(translated.map(node => [node, node.textContent]));
  let language = 'zh';
  let filter = 'all';
  const languageToggle = document.getElementById('language-toggle');
  const publications = [...document.querySelectorAll('.publication')];

  function updateCount() {
    const count = publications.filter(p => !p.hidden).length;
    document.getElementById('publication-count').textContent = language === 'en'
      ? `${count} publication${count === 1 ? '' : 's'}` : `${count} 篇论文`;
  }

  function setLanguage(nextLanguage) {
    language = nextLanguage === 'en' ? 'en' : 'zh';
    for (const node of translated) node.textContent = language === 'en' ? (english[node.dataset.i18n] || chinese.get(node)) : chinese.get(node);
    document.documentElement.lang = language === 'en' ? 'en' : 'zh-CN';
    document.querySelector('.sidebar').setAttribute('aria-label', language === 'en' ? 'Profile' : '个人信息');
    document.querySelector('.section-nav').setAttribute('aria-label', language === 'en' ? 'Page navigation' : '页面导航');
    document.querySelector('.filters').setAttribute('aria-label', language === 'en' ? 'Publication filters' : '论文筛选');
    document.querySelector('.interest-grid').setAttribute('aria-label', language === 'en' ? 'Research interests' : '研究方向');
    document.querySelector('.portrait').alt = language === 'en' ? 'Portrait of Huaye Zhang' : '张桦烨的个人照片';
    languageToggle.setAttribute('aria-label', language === 'en' ? '切换为中文' : 'Switch to English');
    languageToggle.setAttribute('aria-pressed', String(language === 'en'));
    try { localStorage.setItem('huaye-language', language); } catch { /* Language switching also works without storage. */ }
    updateCount();
  }

  languageToggle.addEventListener('click', () => setLanguage(language === 'zh' ? 'en' : 'zh'));
  document.getElementById('print-page').addEventListener('click', () => window.print());
  for (const button of document.querySelectorAll('[data-filter]')) {
    button.addEventListener('click', () => {
      filter = button.dataset.filter;
      for (const current of document.querySelectorAll('[data-filter]')) {
        const selected = current === button;
        current.classList.toggle('selected', selected);
        current.setAttribute('aria-pressed', String(selected));
      }
      for (const publication of publications) publication.hidden = filter !== 'all' && publication.dataset.category !== filter;
      updateCount();
    });
  }
  const navigation = [...document.querySelectorAll('.section-nav a')];
  const sections = navigation.map(link => document.querySelector(link.getAttribute('href')));
  if ('IntersectionObserver' in window) {
    const visible = new Map();
    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) visible.set(entry.target.id, entry.isIntersecting);
      const first = sections.find(section => visible.get(section.id));
      if (!first) return;
      for (const link of navigation) {
        const active = link.getAttribute('href') === `#${first.id}`;
        link.classList.toggle('active', active);
        if (active) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      }
    }, { rootMargin: '-8% 0px -50% 0px', threshold: 0 });
    sections.forEach(section => observer.observe(section));
  }
  try { setLanguage(localStorage.getItem('huaye-language') || 'zh'); } catch { setLanguage('zh'); }
})();
