/* ==========================================================================
   BUILDRIGHT CONSTRUCTION SINGAPORE - MAIN APPLICATION LOGIC
   Interactive Calculator, Dynamic CMS Sync, Portfolio Filter, Testimonials,
   Modals, Theme Switcher & Animated Counters
   ========================================================================== */

const DEFAULT_FALLBACK_DATA = {
  hero: {
    tag: "BUILDING DREAMS • SHAPING SINGAPORE",
    title: "BUILDING SINGAPORE BUILDING THE FUTURE",
    sub: "Delivering high-precision construction solutions across Singapore with uncompromised safety, structural integrity, BCA Green Mark standards, and architectural excellence.",
    heroImg: "./assets/images/hero_singapore_skyline.jpg",
    liveSafety: "100% Zero Accident",
    liveBca: "CW01 Grade A1",
    liveOntime: "99.4% Delivery",
    phone: "+65 9786 7651",
    email: "rkgrouppteitd@gmail.com"
  },
  categories: [
    { id: 1, key: "commercial", label: "Commercial" },
    { id: 2, key: "residential", label: "Residential" },
    { id: 3, key: "civil", label: "Civil & Infra" },
    { id: 4, key: "fitout", label: "Interior Fit-Out" },
    { id: 5, key: "industrial", label: "Industrial" }
  ],
  projects: [
    {
      id: 1,
      title: "Marina Bay Commercial Skyscraper",
      category: "commercial",
      loc: "Marina Bay Financial District",
      specs: "45-Storey Tower | 350,000 sq ft | BCA Green Mark Platinum",
      img: "./assets/images/commercial_tower.jpg",
      gallery: [
        "./assets/images/commercial_tower.jpg",
        "https://images.unsplash.com/photo-1541888946425-d0fbb186a5b7?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80"
      ]
    },
    {
      id: 2,
      title: "Orchard Road Business Tower",
      category: "commercial",
      loc: "Orchard Road, Singapore",
      specs: "28-Storey Office Complex | 210,000 sq ft | Smart Building Systems",
      img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1541888946425-d0fbb186a5b7?auto=format&fit=crop&w=800&q=80"
      ]
    },
    {
      id: 3,
      title: "Sentosa Cove Waterfront Luxury Condos",
      category: "residential",
      loc: "Sentosa Cove, Singapore",
      specs: "Exclusive 120-Unit Oceanfront Development | Private Yacht Berth",
      img: "./assets/images/residential_condo.jpg",
      gallery: [
        "./assets/images/residential_condo.jpg",
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80"
      ]
    },
    {
      id: 4,
      title: "PIE Expressway Viaduct Expansion",
      category: "civil",
      loc: "Pan Island Expressway, SG",
      specs: "4.2km Flyover Extension | Deep Piling & Structural Civil Works",
      img: "./assets/images/infrastructure_civil.jpg",
      gallery: [
        "./assets/images/infrastructure_civil.jpg",
        "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80"
      ]
    },
    {
      id: 5,
      title: "Raffles Place Headquarters Fit-Out",
      category: "fitout",
      loc: "Raffles Place, Singapore",
      specs: "Grade-A Corporate Interior Renovation | Acoustic Glass Partitions",
      img: "./assets/images/fitout_office.jpg",
      gallery: [
        "./assets/images/fitout_office.jpg",
        "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80"
      ]
    },
    {
      id: 6,
      title: "Tuas Mega Logistics Hub",
      category: "industrial",
      loc: "Tuas Industrial Park, SG",
      specs: "Heavy Duty Automated Storage Facility | High-Load Slab Pours",
      img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80"
      ]
    }
  ],
  groupEntities: [
    { id: 1, tag: "PARENT HOLDING", title: "RK Groups of Companies Pte Ltd", icon: "fa-crown", desc: "Strategic holding corporation providing master governance, capital allocation, and BCA A1 compliance oversight across all Singapore construction business units.", f1: "BCA CW01 Grade A1 Master Builder", f2: "Strategic Investment & Capital Management", f3: "Group Safety & Quality Assurance" },
    { id: 2, tag: "FOUNDATION SPECIALIST", title: "RK Foundation Pte Ltd", icon: "fa-bore-hole", desc: "Singapore's premier deep foundation & bored piling contractor specializing in heavy substructure works, diaphragm walls, and geotechnical engineering.", f1: "Heavy Bored Piling & Driven Piles", f2: "Diaphragm Walls & Deep Excavation", f3: "Soil Improvement & Slope Stabilization" },
    { id: 3, tag: "GEOTECHNICAL DIVISION", title: "ARK Foundation Pte Ltd", icon: "fa-shield-halved", desc: "Specialized geotechnical & ground engineering division managing complex urban foundation challenges, micro-tunneling, and marine piling projects.", f1: "Micro-Tunneling & Pipe Jacking", f2: "Marine Piling & Jetty Structures", f3: "Advanced Soil Testing & Instrumentation" },
    { id: 4, tag: "GENERAL CONTRACTING", title: "RK Construction Pte Ltd", icon: "fa-building-flag", desc: "Full-service main contractor executing commercial skyscrapers, luxury residential condominiums, industrial hubs, and civil infrastructure.", f1: "Commercial & High-Rise Building", f2: "Civil Infrastructure & Viaducts", f3: "BCA Green Mark Platinum Certified" }
  ],
  services: [
    { id: 1, title: "Commercial Construction", desc: "High-rise office towers, retail complexes, and mixed-use commercial developments built to BCA Grade A1 standards.", icon: "fa-building", img: "./assets/images/commercial_tower.jpg" },
    { id: 2, title: "Deep Foundation & Piling", desc: "State-of-the-art bored piling, diaphragm walls, micro-tunneling, and specialized geotechnical substructure engineering.", icon: "fa-bore-hole", img: "./assets/images/infrastructure_civil.jpg" },
    { id: 3, title: "Civil Infrastructure", desc: "Expressways, flyovers, drainage canals, marine piling, and public sector civil engineering projects.", icon: "fa-road", img: "./assets/images/infrastructure_civil.jpg" },
    { id: 4, title: "Residential Development", desc: "Luxury condominiums, landed estates, and high-density residential housing with premium finishes.", icon: "fa-house-chimney", img: "./assets/images/residential_condo.jpg" },
    { id: 5, title: "Interior Fit-Out & Turnkey", desc: "Grade-A corporate office fit-outs, structural retrofitting, M&E integration, and interior transformations.", icon: "fa-ruler-combined", img: "./assets/images/fitout_office.jpg" },
    { id: 6, title: "Green Building & Retrofit", desc: "BCA Green Mark Platinum consulting, solar rooftop integrations, energy efficiency retrofits, and smart building tech.", icon: "fa-leaf", img: "./assets/images/commercial_tower.jpg" }
  ],
  testimonials: [
    { id: 1, name: "Michael Tan", role: "Project Director, CapitaLand Development", stars: 5, quote: "RK Groups delivered our 45-storey Marina Bay office tower 3 weeks ahead of schedule with zero safety incidents. Their deep foundation expertise is unmatched in Singapore." },
    { id: 2, name: "Dr. Elena Lim", role: "Senior Director, JTC Infrastructure", stars: 5, quote: "The civil engineering team at RK Foundation demonstrated exceptional technical precision during our complex deep excavation works near operational MRT lines." },
    { id: 3, name: "David Chen", role: "Managing Director, Far East Organization", stars: 5, quote: "From structural steelwork to BCA Green Mark Platinum certification, RK Construction Pte Ltd proved to be Singapore's most reliable main contractor." }
  ]
};

function initApp() {
  initThemeSwitcher();
  initMobileNav();
  initCalculator();
  initProjectFilter();
  initProjectLightbox();
  initStatsCounter();
  initTestimonialSlider();
  initModals();
  initFormHandlers();
  initScrollNav();

  renderCMSContent();
  setupRealtimeSync();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}

/* --------------------------------------------------------------------------
   0. Dynamic Supabase Data Fetching & Sync
   -------------------------------------------------------------------------- */
async function fetchSupabaseData() {
  if (!window.supabaseClient) return DEFAULT_FALLBACK_DATA;
  try {
    const [
      { data: settings },
      { data: categories },
      { data: projects },
      { data: projectImages },
      { data: groupEntities },
      { data: services },
      { data: testimonials }
    ] = await Promise.all([
      window.supabaseClient.from('site_settings').select('*').eq('id', 1).single(),
      window.supabaseClient.from('categories').select('*').order('display_order', { ascending: true }),
      window.supabaseClient.from('projects').select('*').eq('is_active', true).order('display_order', { ascending: true }),
      window.supabaseClient.from('project_images').select('*').order('display_order', { ascending: true }),
      window.supabaseClient.from('group_entities').select('*').eq('is_active', true).order('display_order', { ascending: true }),
      window.supabaseClient.from('services').select('*').eq('is_active', true).order('display_order', { ascending: true }),
      window.supabaseClient.from('testimonials').select('*').eq('is_active', true).order('display_order', { ascending: true })
    ]);

    const projectsWithGallery = (projects && projects.length > 0) ? projects.map(p => {
      const pImgs = (projectImages || []).filter(img => img.project_id === p.id).map(img => img.image_url);
      const gallery = pImgs.length > 0 ? pImgs : [p.cover_image_url];
      return {
        id: p.id,
        title: p.title,
        category: p.category,
        loc: p.location,
        specs: p.specs,
        img: p.cover_image_url,
        gallery: gallery
      };
    }) : DEFAULT_FALLBACK_DATA.projects;

    return {
      hero: {
        tag: settings?.hero_tag || DEFAULT_FALLBACK_DATA.hero.tag,
        title: settings?.hero_title || DEFAULT_FALLBACK_DATA.hero.title,
        sub: settings?.hero_subtitle || DEFAULT_FALLBACK_DATA.hero.sub,
        heroImg: settings?.hero_image_url || DEFAULT_FALLBACK_DATA.hero.heroImg,
        liveSafety: settings?.live_safety || DEFAULT_FALLBACK_DATA.hero.liveSafety,
        liveBca: settings?.live_bca || DEFAULT_FALLBACK_DATA.hero.liveBca,
        liveOntime: settings?.live_ontime || DEFAULT_FALLBACK_DATA.hero.liveOntime,
        phone: settings?.phone || DEFAULT_FALLBACK_DATA.hero.phone,
        email: settings?.email || DEFAULT_FALLBACK_DATA.hero.email
      },
      categories: (categories && categories.length > 0) ? categories.map(c => ({ id: c.id, key: c.key, label: c.label })) : DEFAULT_FALLBACK_DATA.categories,
      projects: projectsWithGallery,
      groupEntities: (groupEntities && groupEntities.length > 0) ? groupEntities.map(g => ({ id: g.id, tag: g.tag, title: g.title, icon: g.icon, desc: g.description, f1: g.f1, f2: g.f2, f3: g.f3 })) : DEFAULT_FALLBACK_DATA.groupEntities,
      services: (services && services.length > 0) ? services.map(s => ({ id: s.id, title: s.title, desc: s.description, icon: s.icon, img: s.image_url })) : DEFAULT_FALLBACK_DATA.services,
      testimonials: (testimonials && testimonials.length > 0) ? testimonials.map(t => ({ id: t.id, name: t.name, role: t.role, stars: t.stars, quote: t.quote })) : DEFAULT_FALLBACK_DATA.testimonials
    };
  } catch (err) {
    console.error('Error fetching Supabase data, using production fallback:', err);
    return DEFAULT_FALLBACK_DATA;
  }
}

function setupRealtimeSync() {
  if (!window.supabaseClient) return;
  window.supabaseClient.channel('public-site-sync')
    .on('postgres_changes', { event: '*', schema: 'public' }, () => {
      console.log('⚡ Realtime Update Received from Supabase! Auto-refreshing website content...');
      renderCMSContent();
    })
    .subscribe();
}

async function renderCMSContent() {
  const cms = (await fetchSupabaseData()) || DEFAULT_FALLBACK_DATA;
  window.cmsData = cms;

  // 1. Render Hero text & Phone
  if (cms.hero) {
    const heroTag = document.querySelector('.hero-tag');
    const heroTitle = document.querySelector('.hero-title');
    const heroSub = document.querySelector('.hero-subtitle');

    if (heroTag && cms.hero.tag) heroTag.innerHTML = `<i class="fa-solid fa-building-flag"></i> ${escapeHTML(cms.hero.tag)}`;
    if (heroTitle && cms.hero.title) heroTitle.innerHTML = escapeHTML(cms.hero.title).replace('SINGAPORE', '<span class="text-gradient">SINGAPORE</span>');
    if (heroSub && cms.hero.sub) heroSub.textContent = cms.hero.sub;

    if (cms.hero.heroImg) {
      const heroBg = document.querySelector('.hero-bg');
      if (heroBg) heroBg.style.backgroundImage = `url('${cms.hero.heroImg}')`;
    }

    // Live Status Card
    const liveMetrics = document.querySelectorAll('.card-metric .metric-val');
    if (liveMetrics.length >= 3) {
      if (cms.hero.liveSafety) liveMetrics[0].textContent = cms.hero.liveSafety;
      if (cms.hero.liveBca) liveMetrics[1].textContent = cms.hero.liveBca;
      if (cms.hero.liveOntime) liveMetrics[2].textContent = cms.hero.liveOntime;
    }
  }

  // 2. Render Core Services Grid
  if (cms.services && cms.services.length > 0) {
    const srvGrid = document.querySelector('.services-grid');
    if (srvGrid) {
      srvGrid.innerHTML = cms.services.map(s => `
        <div class="service-card">
          <div class="service-icon"><i class="fa-solid ${escapeHTML(s.icon)}"></i></div>
          <h3>${escapeHTML(s.title)}</h3>
          <p>${escapeHTML(s.desc)}</p>
        </div>
      `).join('');
    }
  }

  // 3. Render Projects Grid & Dynamic Categories
  if (cms.categories && cms.categories.length > 0) {
    const filterContainer = document.querySelector('.project-filter');
    if (filterContainer) {
      filterContainer.innerHTML = `
        <button class="filter-btn active" data-filter="all">All Projects</button>
        ${cms.categories.map(c => `
          <button class="filter-btn" data-filter="${escapeHTML(c.key)}">${escapeHTML(c.label)}</button>
        `).join('')}
      `;
    }
  }

  if (cms.projects && cms.projects.length > 0) {
    const projGrid = document.querySelector('.projects-grid');
    if (projGrid) {
      projGrid.innerHTML = cms.projects.map(p => {
        const gal = (p.gallery && p.gallery.length > 0) ? p.gallery : [p.img];
        const galStr = escapeHTML(JSON.stringify(gal));
        return `
          <div class="project-card" data-category="${escapeHTML(p.category)}" data-title="${escapeHTML(p.title)}" data-loc="${escapeHTML(p.loc)}" data-specs="${escapeHTML(p.specs)}" data-img="${escapeHTML(p.img)}" data-gallery='${galStr}'>
            <div class="project-img">
              <img src="${escapeHTML(p.img)}" alt="${escapeHTML(p.title)}">
              <div class="project-overlay">
                <span class="proj-badge">${escapeHTML(p.category.toUpperCase())}</span>
                <h3>${escapeHTML(p.title)}</h3>
                <p><i class="fa-solid fa-location-dot"></i> ${escapeHTML(p.loc)}</p>
                <button class="btn btn-sm btn-gold view-proj-btn" data-title="${escapeHTML(p.title)}" data-loc="${escapeHTML(p.loc)}" data-specs="${escapeHTML(p.specs)}" data-img="${escapeHTML(p.img)}" data-gallery='${galStr}'>
                  View Project Details <i class="fa-solid fa-expand"></i>
                </button>
              </div>
            </div>
            <div class="project-info">
              <h4>${escapeHTML(p.title)}</h4>
              <div class="proj-meta">
                <span><i class="fa-solid fa-tag"></i> ${escapeHTML(p.category)}</span>
                <span><i class="fa-solid fa-location-dot"></i> ${escapeHTML(p.loc)}</span>
              </div>
            </div>
          </div>
        `;
      }).join('');
    }
  }

  // 4. Render Testimonials Slider
  if (cms.testimonials && cms.testimonials.length > 0) {
    const testiContainer = document.getElementById('testimonial-container');
    const dotsContainer = document.getElementById('slider-dots');

    if (testiContainer) {
      testiContainer.innerHTML = cms.testimonials.map((t, idx) => `
        <div class="testimonial-card ${idx === 0 ? 'active' : ''}">
          <div class="stars">
            ${'<i class="fa-solid fa-star"></i>'.repeat(t.stars || 5)}
          </div>
          <p class="testimonial-text">"${escapeHTML(t.quote)}"</p>
          <div class="client-profile">
            <div class="client-avatar"><i class="fa-solid fa-user-tie"></i></div>
            <div>
              <h4>${escapeHTML(t.name)}</h4>
              <p>${escapeHTML(t.role)}</p>
            </div>
          </div>
        </div>
      `).join('');
    }

    // 5. Render Group Entities & Subsidiary Companies Grid
    if (cms.groupEntities && cms.groupEntities.length > 0) {
      const groupGrid = document.querySelector('.group-companies-grid');
      if (groupGrid) {
        groupGrid.innerHTML = cms.groupEntities.map(item => `
          <div class="group-company-card glass-panel">
            <div class="company-header">
              <div class="company-badge-icon"><i class="fa-solid ${escapeHTML(item.icon || 'fa-building')} text-gold"></i></div>
              <div>
                <span class="company-type-tag">${escapeHTML(item.tag || 'SUBSIDIARY')}</span>
                <h3>${escapeHTML(item.title)}</h3>
              </div>
            </div>
            <p class="company-desc">${escapeHTML(item.desc)}</p>
            <ul class="company-features">
              ${item.f1 ? `<li><i class="fa-solid fa-check text-gold"></i> ${escapeHTML(item.f1)}</li>` : ''}
              ${item.f2 ? `<li><i class="fa-solid fa-check text-gold"></i> ${escapeHTML(item.f2)}</li>` : ''}
              ${item.f3 ? `<li><i class="fa-solid fa-check text-gold"></i> ${escapeHTML(item.f3)}</li>` : ''}
            </ul>
          </div>
        `).join('');
      }
    }

      if (dotsContainer) {
        dotsContainer.innerHTML = cms.testimonials.map((_, idx) => `
          <span class="dot ${idx === 0 ? 'active' : ''}" data-index="${idx}"></span>
        `).join('');
      }
  }

  // Store global reference & re-bind dynamic event listeners
  window.cmsData = cms;
  initProjectFilter();
  initProjectLightbox();
  initCalculator();
}

/* --------------------------------------------------------------------------
   1. Theme Switcher (Dark / Light Mode)
   -------------------------------------------------------------------------- */
function initThemeSwitcher() {
  const themeToggle = document.getElementById('theme-toggle');
  const html = document.documentElement;
  const icon = themeToggle ? themeToggle.querySelector('i') : null;

  const savedTheme = localStorage.getItem('buildright_theme') || 'dark';
  html.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const currentTheme = html.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      html.setAttribute('data-theme', newTheme);
      localStorage.setItem('buildright_theme', newTheme);
      updateThemeIcon(newTheme);
    });
  }

  function updateThemeIcon(theme) {
    if (!icon) return;
    if (theme === 'dark') {
      icon.className = 'fa-solid fa-sun';
      icon.style.color = '#F59E0B';
    } else {
      icon.className = 'fa-solid fa-moon';
      icon.style.color = '#0F172A';
    }
  }
}

/* --------------------------------------------------------------------------
   2. Mobile Navigation Drawer
   -------------------------------------------------------------------------- */
function initMobileNav() {
  const mobileToggle = document.getElementById('mobile-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      const icon = mobileToggle.querySelector('i');
      if (navMenu.classList.contains('active')) {
        icon.className = 'fa-solid fa-xmark';
      } else {
        icon.className = 'fa-solid fa-bars';
      }
    });

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        const icon = mobileToggle.querySelector('i');
        if (icon) icon.className = 'fa-solid fa-bars';
      });
    });
  }
}

/* --------------------------------------------------------------------------
   3. Interactive Construction Cost & Timeline Calculator
   -------------------------------------------------------------------------- */
function initCalculator() {
  const categoryInput = document.getElementById('calc-category');
  const areaInput = document.getElementById('calc-area');
  const areaValDisplay = document.getElementById('area-val');
  const gradeInputs = document.querySelectorAll('input[name="calc-grade"]');
  const gradeCards = document.querySelectorAll('.radio-card');

  const resPrice = document.getElementById('res-price');
  const resTimeline = document.getElementById('res-timeline');
  const resGreenmark = document.getElementById('res-greenmark');
  const resManhours = document.getElementById('res-manhours');

  if (!categoryInput || !areaInput) return;

  const cms = window.cmsData;
  const baseRates = (cms && cms.calcRates) ? cms.calcRates : {
    commercial: { min: 350, max: 450 },
    residential: { min: 300, max: 400 },
    civil: { min: 480, max: 620 },
    industrial: { min: 220, max: 310 },
    fitout: { min: 140, max: 220 },
    multipliers: { standard: 1.0, premium: 1.25, luxury: 1.55 }
  };

  const gradeMultipliers = {
    standard: { factor: baseRates.multipliers?.standard || 1.0, greenmark: 'Certified Gold Rating', extraTime: 0 },
    premium: { factor: baseRates.multipliers?.premium || 1.25, greenmark: 'Gold Plus Platinum', extraTime: 2 },
    luxury: { factor: baseRates.multipliers?.luxury || 1.55, greenmark: 'Super Low Energy Champion', extraTime: 4 }
  };

  function updateCalculator() {
    const cat = categoryInput.value || 'commercial';
    const sqft = parseInt(areaInput.value, 10) || 10000;
    
    areaValDisplay.textContent = sqft.toLocaleString('en-US') + ' sq ft';

    let selectedGrade = 'standard';
    gradeInputs.forEach(input => {
      if (input.checked) selectedGrade = input.value;
    });

    gradeCards.forEach(card => {
      const radio = card.querySelector('input');
      if (radio && radio.checked) {
        card.classList.add('active');
      } else {
        card.classList.remove('active');
      }
    });

    const rates = baseRates[cat] || baseRates.commercial;
    const mult = gradeMultipliers[selectedGrade] || gradeMultipliers.standard;

    const minCost = sqft * rates.min * mult.factor;
    const maxCost = sqft * rates.max * mult.factor;

    const baseMonths = cat === 'civil' ? 16 : (cat === 'fitout' ? 4 : 12);
    const timeScale = Math.sqrt(sqft / 10000);
    const minMonths = Math.round(baseMonths * timeScale + mult.extraTime);
    const maxMonths = Math.round(minMonths * 1.3);
    const totalManHours = Math.round(sqft * 4.5 * mult.factor);

    function formatCurrency(val) {
      if (val >= 1000000) {
        return 'S$ ' + (val / 1000000).toFixed(2) + 'M';
      }
      return 'S$ ' + (val / 1000).toFixed(0) + 'K';
    }

    if (resPrice) resPrice.textContent = `${formatCurrency(minCost)} - ${formatCurrency(maxCost)}`;
    if (resTimeline) resTimeline.textContent = `${minMonths} - ${maxMonths} Months`;
    if (resGreenmark) resGreenmark.textContent = mult.greenmark;
    if (resManhours) resManhours.textContent = `${totalManHours.toLocaleString('en-US')} Hours`;
  }

  categoryInput.addEventListener('change', updateCalculator);
  areaInput.addEventListener('input', updateCalculator);
  gradeInputs.forEach(radio => radio.addEventListener('change', updateCalculator));

  updateCalculator();
}

/* --------------------------------------------------------------------------
   4. Filterable Project Portfolio
   -------------------------------------------------------------------------- */
function initProjectFilter() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterVal = btn.getAttribute('data-filter');

      document.querySelectorAll('.project-card').forEach(card => {
        const category = card.getAttribute('data-category');
        if (filterVal === 'all' || category === filterVal) {
          card.classList.remove('hide');
        } else {
          card.classList.add('hide');
        }
      });
    });
  });
}

/* --------------------------------------------------------------------------
   5. Project Lightbox Modal
   -------------------------------------------------------------------------- */
function initProjectLightbox() {
  const modal = document.getElementById('project-lightbox-modal');
  const closeBtn = document.getElementById('close-proj-modal');

  const modalTitle = document.getElementById('proj-modal-title');
  const modalLoc = document.getElementById('proj-modal-loc');
  const modalSpecs = document.getElementById('proj-modal-specs');
  const modalImg = document.getElementById('proj-modal-img');

  if (!modal) return;

  document.querySelectorAll('.project-card').forEach(card => {
    card.onclick = (e) => {
      e.stopPropagation();
      const title = card.getAttribute('data-title') || card.querySelector('h4, h3')?.textContent;
      const loc = card.getAttribute('data-loc') || 'Singapore';
      const specs = card.getAttribute('data-specs') || 'BCA A1 Certified Building';
      const img = card.getAttribute('data-img') || card.querySelector('img')?.src;
      const rawGal = card.getAttribute('data-gallery');

      let gallery = [];
      try { gallery = JSON.parse(rawGal); } catch (err) { gallery = [img]; }
      if (!gallery || gallery.length === 0) gallery = [img];

      if (modalTitle) modalTitle.textContent = title;
      if (modalLoc) modalLoc.textContent = loc;
      if (modalSpecs) modalSpecs.textContent = specs;
      if (modalImg) modalImg.src = gallery[0] || img;

      const thumbsBox = document.getElementById('proj-modal-thumbs');
      if (thumbsBox) {
        if (gallery.length > 1) {
          thumbsBox.style.display = 'flex';
          thumbsBox.innerHTML = gallery.map((url, idx) => `
            <img src="${escapeHTML(url)}" class="proj-thumb-item ${idx === 0 ? 'active' : ''}" data-url="${escapeHTML(url)}" alt="Gallery Photo ${idx + 1}">
          `).join('');

          thumbsBox.querySelectorAll('.proj-thumb-item').forEach(thumb => {
            thumb.onclick = () => {
              thumbsBox.querySelectorAll('.proj-thumb-item').forEach(t => t.classList.remove('active'));
              thumb.classList.add('active');
              const targetUrl = thumb.getAttribute('data-url');
              if (modalImg) modalImg.src = targetUrl;
            };
          });
        } else {
          thumbsBox.style.display = 'none';
        }
      }

      modal.classList.add('show');
    };
  });

  if (closeBtn) {
    closeBtn.onclick = () => modal.classList.remove('show');
  }

  modal.onclick = (e) => {
    if (e.target === modal) modal.classList.remove('show');
  };
}

/* --------------------------------------------------------------------------
   6. Animated Numerical Stats Counters
   -------------------------------------------------------------------------- */
function initStatsCounter() {
  const counters = document.querySelectorAll('.counter');
  let animated = false;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !animated) {
        animated = true;
        counters.forEach(counter => {
          const target = +counter.getAttribute('data-target');
          const duration = 2000;
          const step = Math.ceil(target / (duration / 20));
          let count = 0;

          const timer = setInterval(() => {
            count += step;
            if (count >= target) {
              counter.textContent = target;
              clearInterval(timer);
            } else {
              counter.textContent = count;
            }
          }, 20);
        });
      }
    });
  }, { threshold: 0.5 });

  const statsSection = document.querySelector('.stats-bar');
  if (statsSection) observer.observe(statsSection);
}

/* --------------------------------------------------------------------------
   7. Testimonial Slider Carousel
   -------------------------------------------------------------------------- */
function initTestimonialSlider() {
  const cards = document.querySelectorAll('.testimonial-card');
  const dots = document.querySelectorAll('.dot');
  const prevBtn = document.getElementById('prev-testi');
  const nextBtn = document.getElementById('next-testi');

  if (cards.length === 0) return;

  let currentIndex = 0;
  let autoplayTimer;

  function showSlide(index) {
    cards.forEach((card, i) => {
      card.classList.toggle('active', i === index);
    });
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === index);
    });
    currentIndex = index;
  }

  function nextSlide() {
    let newIndex = (currentIndex + 1) % cards.length;
    showSlide(newIndex);
  }

  function prevSlide() {
    let newIndex = (currentIndex - 1 + cards.length) % cards.length;
    showSlide(newIndex);
  }

  if (nextBtn) nextBtn.onclick = () => { nextSlide(); resetAutoplay(); };
  if (prevBtn) prevBtn.onclick = () => { prevSlide(); resetAutoplay(); };

  dots.forEach(dot => {
    dot.onclick = () => {
      const idx = parseInt(dot.getAttribute('data-index'), 10);
      showSlide(idx);
      resetAutoplay();
    };
  });

  function startAutoplay() {
    clearInterval(autoplayTimer);
    autoplayTimer = setInterval(nextSlide, 5000);
  }

  function resetAutoplay() {
    clearInterval(autoplayTimer);
    startAutoplay();
  }

  startAutoplay();
}

/* --------------------------------------------------------------------------
   8. Multi-Step Quote, Call, & Location Modals
   -------------------------------------------------------------------------- */
function initModals() {
  // Quote Modal
  const quoteModal = document.getElementById('quote-modal');
  const openBtns = document.querySelectorAll('.open-quote-modal');
  const closeBtn = document.getElementById('close-quote-modal');
  const cancelBtn = document.getElementById('cancel-quote-modal');

  if (quoteModal) {
    openBtns.forEach(btn => {
      btn.onclick = () => quoteModal.classList.add('show');
    });

    const closeModal = () => quoteModal.classList.remove('show');

    if (closeBtn) closeBtn.onclick = closeModal;
    if (cancelBtn) cancelBtn.onclick = closeModal;

    quoteModal.onclick = (e) => {
      if (e.target === quoteModal) closeModal();
    };
  }

  // Call Modal
  const callModal = document.getElementById('call-modal');
  const openCallBtn = document.getElementById('open-call-modal');
  const closeCallBtn = document.getElementById('close-call-modal');

  if (openCallBtn && callModal) {
    openCallBtn.onclick = () => callModal.classList.add('show');
  }
  if (closeCallBtn && callModal) {
    closeCallBtn.onclick = () => callModal.classList.remove('show');
  }
  if (callModal) {
    callModal.onclick = (e) => {
      if (e.target === callModal) callModal.classList.remove('show');
    };
  }

  // Location Modal
  const locationModal = document.getElementById('location-modal');
  const openLocationBtn = document.getElementById('open-location-modal');
  const closeLocationBtn = document.getElementById('close-location-modal');
  const scrollToContactBtn = document.getElementById('scroll-to-contact-btn');

  if (openLocationBtn && locationModal) {
    openLocationBtn.onclick = () => locationModal.classList.add('show');
  }
  if (closeLocationBtn && locationModal) {
    closeLocationBtn.onclick = () => locationModal.classList.remove('show');
  }
  if (locationModal) {
    locationModal.onclick = (e) => {
      if (e.target === locationModal) locationModal.classList.remove('show');
    };
  }
  if (scrollToContactBtn) {
    scrollToContactBtn.onclick = () => {
      if (locationModal) locationModal.classList.remove('show');
      const contactSec = document.getElementById('contact');
      if (contactSec) contactSec.scrollIntoView({ behavior: 'smooth' });
    };
  }

  // Copy Phone Number Buttons
  const copyBtns = document.querySelectorAll('.copy-phone-btn');
  copyBtns.forEach(btn => {
    btn.onclick = () => {
      const phone = btn.getAttribute('data-phone');
      if (phone) {
        if (navigator.clipboard) {
          navigator.clipboard.writeText(phone);
        }
        const originalHTML = btn.innerHTML;
        btn.innerHTML = '<i class="fa-solid fa-check"></i> Copied!';
        btn.style.borderColor = '#10B981';
        btn.style.color = '#10B981';
        setTimeout(() => {
          btn.innerHTML = originalHTML;
          btn.style.borderColor = '';
          btn.style.color = '';
        }, 2000);
      }
    };
  });
}

/* --------------------------------------------------------------------------
   9. Form Submit Handlers & CMS Inbox Auto-Save
   -------------------------------------------------------------------------- */
async function saveInquiryToCMS(inquiry) {
  if (!window.supabaseClient) return;
  try {
    const { error } = await window.supabaseClient.from('inquiries').insert([{
      client_name: inquiry.name,
      email: inquiry.email,
      phone: inquiry.phone,
      project_type: inquiry.type,
      message: inquiry.msg,
      source: inquiry.source || 'Website Form'
    }]);

    if (error) {
      console.error('Supabase Inquiry Insert Error:', error);
    } else {
      console.log('✅ Inquiry saved to Supabase Database successfully');
    }
  } catch (err) {
    console.error('Error saving inquiry to Supabase:', err);
  }
}

function initFormHandlers() {
  // Quote Modal Form
  const quoteForm = document.getElementById('quote-modal-form');
  if (quoteForm) {
    quoteForm.onsubmit = async (e) => {
      e.preventDefault();
      const inputs = quoteForm.querySelectorAll('input, select, textarea');
      const name = inputs[0]?.value || 'Customer';
      const email = inputs[2]?.value || '';
      const phone = inputs[3]?.value || '';
      const type = inputs[4]?.value || 'Quote Request';
      const msg = inputs[6]?.value || inputs[5]?.value || 'Direct Quote Request';

      const submitBtn = quoteForm.querySelector('button[type="submit"]');
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Submitting...';

      await saveInquiryToCMS({ name, email, phone, type, msg, source: 'Quote Modal' });

      alert('Thank you! Your quote request has been received & logged to Admin Inbox. A BCA engineer will contact you within 2 hours.');
      quoteForm.reset();
      submitBtn.disabled = false;
      submitBtn.innerHTML = '<i class="fa-solid fa-paper-plane"></i> Submit Quote Request';
      const modal = document.getElementById('quote-modal');
      if (modal) modal.classList.remove('show');
    };
  }

  // Contact Page Form
  const contactForm = document.getElementById('contact-form');
  const feedback = document.getElementById('contact-feedback');
  if (contactForm) {
    contactForm.onsubmit = async (e) => {
      e.preventDefault();
      const name = document.getElementById('c-name')?.value || '';
      const email = document.getElementById('c-email')?.value || '';
      const phone = document.getElementById('c-phone')?.value || '';
      const type = document.getElementById('c-type')?.value || '';
      const msg = document.getElementById('c-msg')?.value || '';

      const submitBtn = contactForm.querySelector('button[type="submit"]');
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Submitting...';
      }

      await saveInquiryToCMS({ name, email, phone, type, msg, source: 'Contact Form' });

      if (feedback) {
        feedback.style.color = '#10B981';
        feedback.innerHTML = '<i class="fa-solid fa-circle-check"></i> Thank you! Your message has been received & saved in Admin Inbox.';
      }
      contactForm.reset();
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = '<i class="fa-solid fa-paper-plane"></i> Submit Inquiry';
      }
    };
  }

  // Newsletter Form
  const newsForm = document.getElementById('newsletter-form');
  if (newsForm) {
    newsForm.onsubmit = async (e) => {
      e.preventDefault();
      const email = newsForm.querySelector('input')?.value || '';
      await saveInquiryToCMS({ name: 'Subscriber', email, phone: '-', type: 'Newsletter', msg: 'Subscribed to newsletter', source: 'Footer' });
      alert('Thank you for subscribing to BuildRight Singapore updates!');
      newsForm.reset();
    };
  }
}

/* --------------------------------------------------------------------------
   10. Scroll Active Nav Link Highlight
   -------------------------------------------------------------------------- */
function initScrollNav() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let current = '';
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.offsetHeight;
      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
}

function escapeHTML(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
