/* ==========================================================================
   BUILDRIGHT CONSTRUCTION SINGAPORE - ADMIN CMS LOGIC
   Central Data Storage, Authentication, Dynamic CRUD Operations, & CSV Exporter
   ========================================================================== */

// Default Initial CMS Data State
const DEFAULT_CMS_DATA = {
  hero: {
    tag: "BUILDING DREAMS • SHAPING SINGAPORE",
    title: "BUILDING SINGAPORE BUILDING THE FUTURE",
    sub: "Delivering high-precision construction solutions across Singapore with uncompromised safety, structural integrity, BCA Green Mark standards, and architectural excellence.",
    phone: "+65 9786 7651",
    email: "rkgrouppteitd@gmail.com",
    liveProjects: "14 Active Projects Across SG",
    liveSafety: "100% Zero Accident",
    liveBca: "CW01 Grade A1",
    liveOntime: "99.4% Delivery"
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
        "./assets/images/hero_singapore_skyline.jpg",
        "./assets/images/fitout_office.jpg",
        "./assets/images/safety_team.jpg"
      ]
    },
    {
      id: 2,
      title: "Orchard Road Business Tower",
      category: "commercial",
      loc: "Orchard Road, Singapore",
      specs: "28-Storey Prime Office | 220,000 sq ft | Smart Building Systems",
      img: "./assets/images/hero_singapore_skyline.jpg",
      gallery: [
        "./assets/images/hero_singapore_skyline.jpg",
        "./assets/images/commercial_tower.jpg",
        "./assets/images/fitout_office.jpg",
        "./assets/images/safety_team.jpg"
      ]
    },
    {
      id: 3,
      title: "Bukit Timah Eco Condominium",
      category: "residential",
      loc: "Bukit Timah Estate",
      specs: "120 Luxury Units | Vertical Greenery | Solar Canopy",
      img: "./assets/images/residential_condo.jpg",
      gallery: [
        "./assets/images/residential_condo.jpg",
        "./assets/images/hero_singapore_skyline.jpg",
        "./assets/images/safety_team.jpg"
      ]
    },
    {
      id: 4,
      title: "Sentosa Coastal Expressway Bridge",
      category: "civil",
      loc: "Sentosa Gateway",
      specs: "1.8km Elevated Span | Heavy Marine Foundations | BCA Award",
      img: "./assets/images/infrastructure_civil.jpg",
      gallery: [
        "./assets/images/infrastructure_civil.jpg",
        "./assets/images/safety_team.jpg",
        "./assets/images/commercial_tower.jpg"
      ]
    },
    {
      id: 5,
      title: "CBD Tech Hub Corporate Office",
      category: "fitout",
      loc: "Raffles Place",
      specs: "45,000 sq ft | Acoustic Wood Finish | Executive Suites",
      img: "./assets/images/fitout_office.jpg",
      gallery: [
        "./assets/images/fitout_office.jpg",
        "./assets/images/commercial_tower.jpg",
        "./assets/images/hero_singapore_skyline.jpg"
      ]
    },
    {
      id: 6,
      title: "Tuas Industrial Substation & Terminal",
      category: "civil",
      loc: "Tuas South Industrial Park",
      specs: "Heavy Machinery Substation | Subterranean Cables | High Safety Grade",
      img: "./assets/images/safety_team.jpg",
      gallery: [
        "./assets/images/safety_team.jpg",
        "./assets/images/infrastructure_civil.jpg",
        "./assets/images/commercial_tower.jpg"
      ]
    }
  ],
  services: [
    { id: 1, icon: "fa-helmet-safety", title: "General Construction", desc: "Complete structural erection, concrete works, steel framing, and architectural building erection." },
    { id: 2, icon: "fa-building", title: "Building Construction", desc: "High-rise office buildings, commercial complexes, and industrial hubs built to BCA safety codes." },
    { id: 3, icon: "fa-city", title: "Commercial Construction", desc: "Smart commercial towers, shopping malls, and corporate headquarters built for modern enterprises." },
    { id: 4, icon: "fa-house-user", title: "Residential Construction", desc: "Bespoke landed bungalows, luxury condominiums, and multi-family residential estates." },
    { id: 5, icon: "fa-hammer", title: "Renovation & Remodeling", desc: "Major structural modifications, facade overhauls, extension works, and building modernizations." },
    { id: 6, icon: "fa-couch", title: "Interior Fit-Out Works", desc: "Turnkey interior partitioning, MEP acoustic treatments, custom joinery, and office interior fit-outs." },
    { id: 7, icon: "fa-compass-drafting", title: "Civil Engineering Works", desc: "Expressway bridges, highway extensions, drainage networks, and subterranean earthworks." },
    { id: 8, icon: "fa-cubes-stacked", title: "Structural Works", desc: "Pre-stressed concrete structures, heavy steel girder erection, and load-bearing foundation piling." },
    { id: 9, icon: "fa-wrench", title: "Maintenance Services", desc: "Comprehensive facility maintenance, structural health audits, waterproofing, and building lifecycle care." },
    { id: 10, icon: "fa-clipboard-check", title: "Project Management", desc: "End-to-end site management, BCA regulatory approvals, safety auditing, and cost optimization." },
    { id: 11, icon: "fa-leaf", title: "Green Mark Eco Construction", desc: "Solar roof integration, rainwater harvesting systems, and zero-carbon building technology." },
    { id: 12, icon: "fa-pen-ruler", title: "Design & Build Solutions", desc: "Integrated architectural concept design, engineering, procurement, and turnkey delivery." }
  ],
  testimonials: [
    {
      id: 1,
      name: "David Lim",
      role: "Project Director, Urban Development Pte Ltd",
      stars: 5,
      quote: "BuildRight's engineering precision on our Marina Bay commercial project was exemplary. Their BCA Green Mark integration saved us over 22% in long-term building energy costs."
    },
    {
      id: 2,
      name: "Sarah Chen",
      role: "Senior VP, Capital Realty Singapore",
      stars: 5,
      quote: "Their team managed our luxury Bukit Timah condo development with extreme attention to detail and zero safety compromises. Handed over 2 weeks ahead of schedule!"
    },
    {
      id: 3,
      name: "Marcus Tan",
      role: "Head of Infrastructure, APAC Financial Group",
      stars: 5,
      quote: "The interior fit-out for our 45,000 sq ft Raffles Place corporate headquarters was executed flawlessly. BuildRight is truly Singapore's top-tier contractor."
    }
  ],
  calcRates: {
    commercial: { min: 350, max: 450 },
    residential: { min: 300, max: 400 },
    civil: { min: 480, max: 620 },
    fitout: { min: 140, max: 220 },
    multipliers: {
      standard: 1.0,
      premium: 1.25,
      luxury: 1.55
    }
  },
  groupEntities: [
    {
      id: 1,
      tag: "PARENT HOLDING GROUP",
      title: "RK Groups of Companies Pte Ltd",
      icon: "fa-crown",
      desc: "Strategic direction, financial management, corporate governance, and group investment oversight across all Singapore construction business units.",
      f1: "Group Corporate Governance",
      f2: "Strategic Investment & Procurement",
      f3: "Executive Leadership"
    },
    {
      id: 2,
      tag: "DEEP FOUNDATION SPECIALIST",
      title: "RK Foundation Pte Ltd",
      icon: "fa-bore-hole",
      desc: "Specialists in deep piling, bore piling, diaphragm wall installation, soil improvement, and heavy structural ground engineering for high-rise developments.",
      f1: "Large-Diameter Bored Piling",
      f2: "Diaphragm Walls & Excavation",
      f3: "Ground Anchor & Soil Nailing"
    },
    {
      id: 3,
      tag: "GEOTECHNICAL & CIVIL INFRA",
      title: "ARK Foundation Pte Ltd",
      icon: "fa-shield-halved",
      desc: "Advanced geotechnical engineering, marine foundation works, subterranean civil infrastructure, and heavy structural ground stabilization.",
      f1: "Geotechnical Instrumentation",
      f2: "Subterranean Marine Piling",
      f3: "Slope Stabilization & Sheet Piling"
    },
    {
      id: 4,
      tag: "GENERAL BUILDING & A1 CONTRACTOR",
      title: "RK Construction Pte Ltd",
      icon: "fa-building-flag",
      desc: "Premier BCA A1 registered general building contractor executing commercial skyscrapers, luxury condominiums, industrial hubs, and turnkey fit-outs.",
      f1: "BCA A1 Unlimited Tender Grade",
      f2: "Commercial & Residential Towers",
      f3: "BCA Green Mark Platinum Builder"
    }
  ],
  inquiries: [
    {
      id: 101,
      date: "2026-08-08 08:30",
      name: "Michael Tan",
      email: "m.tan@marinadevs.sg",
      phone: "+65 9123 4567",
      type: "Commercial Building",
      msg: "Requesting BCA A1 tender proposal for 35,000 sq ft office tower in Tanjong Pagar.",
      source: "Quote Modal"
    }
  ]
};

// State Data Initialization
async function getCMSData() {
  if (!window.supabaseClient) return DEFAULT_CMS_DATA;
  try {
    const [
      { data: settings },
      { data: categories },
      { data: projects },
      { data: projectImages },
      { data: groupEntities },
      { data: services },
      { data: testimonials },
      { data: inquiries }
    ] = await Promise.all([
      window.supabaseClient.from('site_settings').select('*').eq('id', 1).single(),
      window.supabaseClient.from('categories').select('*').order('display_order', { ascending: true }),
      window.supabaseClient.from('projects').select('*').order('display_order', { ascending: true }),
      window.supabaseClient.from('project_images').select('*').order('display_order', { ascending: true }),
      window.supabaseClient.from('group_entities').select('*').order('display_order', { ascending: true }),
      window.supabaseClient.from('services').select('*').order('display_order', { ascending: true }),
      window.supabaseClient.from('testimonials').select('*').order('display_order', { ascending: true }),
      window.supabaseClient.from('inquiries').select('*').order('created_at', { ascending: false })
    ]);

    const projectsWithGallery = (projects || []).map(p => {
      const pImgs = (projectImages || []).filter(img => img.project_id === p.id).map(img => img.image_url);
      const gallery = pImgs.length > 0 ? pImgs : [p.cover_image_url];
      return {
        id: p.id,
        title: p.title,
        category: p.category,
        loc: p.location,
        specs: p.specs,
        img: p.cover_image_url,
        gallery: gallery,
        status: p.status,
        is_active: p.is_active
      };
    });

    return {
      hero: {
        tag: settings?.hero_tag || DEFAULT_CMS_DATA.hero.tag,
        title: settings?.hero_title || DEFAULT_CMS_DATA.hero.title,
        sub: settings?.hero_subtitle || DEFAULT_CMS_DATA.hero.sub,
        heroImg: settings?.hero_image_url || DEFAULT_CMS_DATA.hero.heroImg,
        liveProjects: settings?.live_projects || DEFAULT_CMS_DATA.hero.liveProjects,
        liveSafety: settings?.live_safety || DEFAULT_CMS_DATA.hero.liveSafety,
        liveBca: settings?.live_bca || DEFAULT_CMS_DATA.hero.liveBca,
        liveOntime: settings?.live_ontime || DEFAULT_CMS_DATA.hero.liveOntime,
        phone: settings?.phone || DEFAULT_CMS_DATA.hero.phone,
        email: settings?.email || DEFAULT_CMS_DATA.hero.email
      },
      categories: (categories && categories.length > 0) ? categories.map(c => ({ id: c.id, key: c.key, label: c.label })) : DEFAULT_CMS_DATA.categories,
      projects: projectsWithGallery,
      groupEntities: (groupEntities && groupEntities.length > 0) ? groupEntities.map(g => ({ id: g.id, tag: g.tag, title: g.title, icon: g.icon, desc: g.description, f1: g.f1, f2: g.f2, f3: g.f3 })) : DEFAULT_CMS_DATA.groupEntities,
      services: (services && services.length > 0) ? services.map(s => ({ id: s.id, title: s.title, desc: s.description, icon: s.icon, img: s.image_url })) : DEFAULT_CMS_DATA.services,
      testimonials: (testimonials && testimonials.length > 0) ? testimonials.map(t => ({ id: t.id, name: t.name, role: t.role, stars: t.stars, quote: t.quote })) : DEFAULT_CMS_DATA.testimonials,
      calcRates: settings?.calc_rates || DEFAULT_CMS_DATA.calcRates,
      inquiries: (inquiries || []).map(i => ({
        id: i.id,
        date: new Date(i.created_at || Date.now()).toISOString().slice(0, 16).replace('T', ' '),
        name: i.client_name,
        email: i.email,
        phone: i.phone,
        type: i.project_type,
        msg: i.message,
        source: i.source
      }))
    };
  } catch (err) {
    console.error('Error fetching Supabase data:', err);
    return DEFAULT_CMS_DATA;
  }
}

async function saveCMSData(data) {
  if (!window.supabaseClient) return;
  try {
    if (data.hero) {
      await window.supabaseClient.from('site_settings').update({
        hero_tag: data.hero.tag,
        hero_title: data.hero.title,
        hero_subtitle: data.hero.sub,
        hero_image_url: data.hero.heroImg,
        live_projects: data.hero.liveProjects,
        live_safety: data.hero.liveSafety,
        live_bca: data.hero.liveBca,
        live_ontime: data.hero.liveOntime,
        phone: data.hero.phone,
        email: data.hero.email,
        updated_at: new Date().toISOString()
      }).eq('id', 1);
    }
    showToast('Saved to Supabase Database!');
    await refreshAdminUI();
  } catch (err) {
    console.error('Supabase Save Error:', err);
    alert('Error saving to Supabase: ' + err.message);
  }
}

// Ultra-Efficient Canvas Image Compressor (600x400 max, 0.6 quality -> ~35KB)
function compressImageFile(file, maxWidth = 600, maxHeight = 400, quality = 0.6, callback) {
  const reader = new FileReader();
  reader.onload = (e) => {
    const img = new Image();
    img.onload = () => {
      let width = img.width;
      let height = img.height;

      if (width > maxWidth || height > maxHeight) {
        if (width / height > maxWidth / maxHeight) {
          height = Math.round((height * maxWidth) / width);
          width = maxWidth;
        } else {
          width = Math.round((width * maxHeight) / height);
          height = maxHeight;
        }
      }

      const canvas = document.createElement('canvas');
      canvas.width = width;
      canvas.height = height;

      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0, width, height);

      const compressedDataUrl = canvas.toDataURL('image/jpeg', quality);
      callback(compressedDataUrl);
    };
    img.onerror = () => callback(e.target.result);
    img.src = e.target.result;
  };
  reader.readAsDataURL(file);
}

// Global App Init
function initAdminApp() {
  initAuthentication();
  initTabNavigation();
  initFormSaveHandlers();
  refreshAdminUI();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initAdminApp);
} else {
  initAdminApp();
}



window.handleAdminLogin = async function() {
  const emailInput = document.getElementById('admin-email');
  const pinInput = document.getElementById('admin-pin');
  const loginModal = document.getElementById('admin-login-modal');
  const mainLayout = document.getElementById('admin-main-layout');
  const feedback = document.getElementById('login-feedback');

  const email = emailInput ? emailInput.value.trim() : 'rkgrouppteitd@gmail.com';
  const password = pinInput ? pinInput.value.trim() : 'Admin1234!';

  if (feedback) {
    feedback.textContent = '⏳ Authenticating with Supabase Auth...';
    feedback.style.color = '#F59E0B';
  }

  try {
    const { data, error } = await window.supabaseClient.auth.signInWithPassword({
      email: email,
      password: password
    });

    if (error) {
      if (feedback) {
        feedback.textContent = '❌ Authentication Failed: ' + error.message;
        feedback.style.color = '#EF4444';
      }
      return;
    }

    sessionStorage.setItem('buildright_admin_logged_in', 'true');
    if (loginModal) loginModal.style.setProperty('display', 'none', 'important');
    if (mainLayout) mainLayout.style.setProperty('display', 'grid', 'important');
    if (feedback) feedback.textContent = '';
    showToast('Welcome to RK Groups Admin Portal!');
    await refreshAdminUI();
  } catch (err) {
    console.error('Auth Error:', err);
    if (feedback) {
      feedback.textContent = '❌ Error authenticating: ' + err.message;
      feedback.style.color = '#EF4444';
    }
  }
};

/* --------------------------------------------------------------------------
   1. Authentication (Supabase Auth Security)
   -------------------------------------------------------------------------- */
async function initAuthentication() {
  const loginModal = document.getElementById('admin-login-modal');
  const mainLayout = document.getElementById('admin-main-layout');
  const loginForm = document.getElementById('admin-login-form');
  const logoutBtn = document.getElementById('btn-logout');

  // Check Supabase Auth Session
  if (window.supabaseClient) {
    const { data: { session } } = await window.supabaseClient.auth.getSession();
    if (session || sessionStorage.getItem('buildright_admin_logged_in') === 'true') {
      if (loginModal) loginModal.style.setProperty('display', 'none', 'important');
      if (mainLayout) mainLayout.style.setProperty('display', 'grid', 'important');
      await refreshAdminUI();
    }
  }

  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      window.handleAdminLogin();
    });
  }

  if (logoutBtn) {
    logoutBtn.addEventListener('click', async () => {
      if (window.supabaseClient) {
        await window.supabaseClient.auth.signOut();
      }
      sessionStorage.removeItem('buildright_admin_logged_in');
      location.reload();
    });
  }
}

/* --------------------------------------------------------------------------
   2. Tab Navigation Logic
   -------------------------------------------------------------------------- */
function initTabNavigation() {
  const navItems = document.querySelectorAll('.admin-nav-item');
  const tabPanels = document.querySelectorAll('.admin-tab');
  const currentTitle = document.getElementById('current-tab-title');
  const switchBtns = document.querySelectorAll('.switch-tab-btn');
  const mobileToggle = document.getElementById('admin-mobile-toggle');
  const sidebar = document.querySelector('.admin-sidebar');

  if (mobileToggle && sidebar) {
    mobileToggle.addEventListener('click', () => {
      sidebar.classList.toggle('mobile-open');
    });
  }

  function switchTab(tabId) {
    navItems.forEach(item => {
      item.classList.toggle('active', item.getAttribute('data-tab') === tabId);
    });

    tabPanels.forEach(panel => {
      panel.classList.toggle('active', panel.getAttribute('id') === tabId);
    });

    const activeItem = document.querySelector(`.admin-nav-item[data-tab="${tabId}"] span`);
    if (currentTitle && activeItem) {
      currentTitle.textContent = activeItem.textContent;
    }

    if (sidebar) {
      sidebar.classList.remove('mobile-open');
    }
  }

  navItems.forEach(item => {
    item.addEventListener('click', () => {
      const tabId = item.getAttribute('data-tab');
      switchTab(tabId);
    });
  });

  switchBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const tabId = btn.getAttribute('data-tab');
      switchTab(tabId);
    });
  });
}

/* --------------------------------------------------------------------------
   3. UI Refresh & Data Renderers
   -------------------------------------------------------------------------- */
async function refreshAdminUI() {
  const data = await getCMSData();

  // Update Overview Stats
  const statInquiries = document.getElementById('stat-total-inquiries');
  const statProjects = document.getElementById('stat-total-projects');
  const statServices = document.getElementById('stat-total-services');
  const inboxBadge = document.getElementById('sidebar-inbox-count');

  if (statInquiries) statInquiries.textContent = data.inquiries ? data.inquiries.length : 0;
  if (statProjects) statProjects.textContent = data.projects ? data.projects.length : 0;
  if (statServices) statServices.textContent = data.services ? data.services.length : 0;
  if (inboxBadge) inboxBadge.textContent = data.inquiries ? data.inquiries.length : 0;

  // Render Recent Leads on Overview
  renderRecentLeads(data.inquiries || []);

  // Populate Hero Form
  populateHeroForm(data.hero);

  // Render Categories & Tables
  renderAdminCategories(data.categories || []);
  renderProjectsTable(data.projects || []);
  renderServicesTable(data.services || []);
  renderEntitiesTable(data.groupEntities || []);
  renderTestimonialsTable(data.testimonials || []);
  populateCalcRatesForm(data.calcRates);
  renderInquiriesTable(data.inquiries || []);
}

const DEFAULT_CATEGORIES = [
  { id: 1, key: "commercial", label: "Commercial" },
  { id: 2, key: "residential", label: "Residential" },
  { id: 3, key: "civil", label: "Civil & Infra" },
  { id: 4, key: "fitout", label: "Interior Fit-Out" },
  { id: 5, key: "industrial", label: "Industrial" }
];

function renderAdminCategories(categories) {
  const container = document.getElementById('admin-categories-list');
  if (!container) return;

  const cats = (categories && categories.length > 0) ? categories : DEFAULT_CATEGORIES;

  container.innerHTML = cats.map(cat => `
    <div class="category-badge-item" style="background: rgba(245, 158, 11, 0.15); border: 1px solid var(--accent-gold); color: var(--text-main); padding: 0.4rem 0.9rem; border-radius: var(--radius-full); font-size: 0.85rem; font-weight: 700; display: inline-flex; align-items: center; gap: 0.5rem;">
      <span>${escapeHTML(cat.label)}</span>
      <small style="color: var(--text-muted); font-size: 0.75rem;">(${escapeHTML(cat.key)})</small>
      <button class="btn-del-cat" data-id="${cat.id}" style="background: none; border: none; color: #EF4444; cursor: pointer; font-size: 0.9rem; padding: 0 0.2rem;" title="Delete Category">&times;</button>
    </div>
  `).join('');

  document.querySelectorAll('.btn-del-cat').forEach(btn => {
    btn.onclick = () => {
      const id = parseInt(btn.getAttribute('data-id'), 10);
      deleteCategory(id);
    };
  });
}

function openAddCategoryModal() {
  const modal = document.getElementById('admin-edit-modal');
  const titleEl = document.getElementById('admin-modal-title');
  const bodyEl = document.getElementById('admin-modal-body');

  titleEl.textContent = 'Add Custom Project Category';
  bodyEl.innerHTML = `
    <form id="category-form">
      <div class="form-group">
        <label>Category Label (Display Name) *</label>
        <input type="text" id="cat-label" class="form-control" required placeholder="e.g. Data Centers & Tech Hubs">
      </div>
      <div class="form-group">
        <label>Category Key Code *</label>
        <input type="text" id="cat-key" class="form-control" required placeholder="e.g. datacenter">
        <small class="text-muted">Used for project filtering & tags (lowercase, no spaces).</small>
      </div>
      <div class="modal-footer-actions">
        <button type="submit" class="btn btn-gold btn-block"><i class="fa-solid fa-plus"></i> Create Category</button>
      </div>
    </form>
  `;

  modal.classList.add('show');

  const labelInput = document.getElementById('cat-label');
  const keyInput = document.getElementById('cat-key');

  labelInput.oninput = () => {
    keyInput.value = labelInput.value.toLowerCase().replace(/[^a-z0-9]/g, '');
  };

  document.getElementById('category-form').onsubmit = (e) => {
    e.preventDefault();
    const data = getCMSData();
    if (!data.categories) data.categories = [...DEFAULT_CATEGORIES];

    const newCat = {
      id: Date.now(),
      label: labelInput.value.trim(),
      key: keyInput.value.trim() || labelInput.value.toLowerCase().replace(/[^a-z0-9]/g, '')
    };

    data.categories.push(newCat);
    saveCMSData(data);
    modal.classList.remove('show');
  };
}

function deleteCategory(id) {
  if (confirm('Are you sure you want to delete this custom category?')) {
    const data = getCMSData();
    if (!data.categories) data.categories = [...DEFAULT_CATEGORIES];
    data.categories = data.categories.filter(c => c.id !== id);
    saveCMSData(data);
  }
}

function renderRecentLeads(inquiries) {
  const container = document.getElementById('overview-recent-leads');
  if (!container) return;

  if (!inquiries || inquiries.length === 0) {
    container.innerHTML = '<p class="text-muted">No leads received yet.</p>';
    return;
  }

  const recent = inquiries.slice(-3).reverse();
  container.innerHTML = recent.map(item => `
    <div class="lead-item-row">
      <div>
        <div class="lead-name">${escapeHTML(item.name)} <span class="badge-bca">${escapeHTML(item.type || 'General')}</span></div>
        <div class="lead-meta"><i class="fa-solid fa-phone"></i> ${escapeHTML(item.phone)} &bull; ${escapeHTML(item.date)}</div>
      </div>
      <button class="btn btn-sm btn-outline switch-tab-btn" data-tab="tab-inquiries">View</button>
    </div>
  `).join('');
}

/* --------------------------------------------------------------------------
   4. Hero & Settings Handlers
   -------------------------------------------------------------------------- */
function populateHeroForm(hero) {
  if (!hero) return;
  const tag = document.getElementById('cfg-hero-tag');
  const title = document.getElementById('cfg-hero-title');
  const sub = document.getElementById('cfg-hero-sub');
  const phone = document.getElementById('cfg-phone');

  const heroImgInput = document.getElementById('cfg-hero-img');
  const heroFileInput = document.getElementById('cfg-hero-file');
  const heroPreview = document.getElementById('hero-img-preview');
  const fileNameSpan = document.getElementById('hero-file-name');

  const liveProjects = document.getElementById('cfg-live-projects');
  const liveSafety = document.getElementById('cfg-live-safety');
  const liveBca = document.getElementById('cfg-live-bca');
  const liveOntime = document.getElementById('cfg-live-ontime');

  if (tag) tag.value = hero.tag || '';
  if (title) title.value = hero.title || '';
  if (sub) sub.value = hero.sub || '';
  if (phone) phone.value = hero.phone || '';

  if (heroImgInput) {
    heroImgInput.value = hero.heroImg || './assets/images/hero_singapore_skyline.jpg';
    if (heroPreview) heroPreview.src = heroImgInput.value;

    heroImgInput.oninput = () => {
      if (heroPreview) heroPreview.src = heroImgInput.value;
    };
  }

  if (heroFileInput) {
    heroFileInput.onchange = async () => {
      const file = heroFileInput.files[0];
      if (file) {
        if (fileNameSpan) fileNameSpan.textContent = file.name + ' (Uploading to Supabase...)';
        try {
          const publicUrl = await uploadImageToSupabase(file, 'website-images');
          if (heroImgInput) heroImgInput.value = publicUrl;
          if (heroPreview) heroPreview.src = publicUrl;
          if (fileNameSpan) fileNameSpan.textContent = file.name + ' (Uploaded to Supabase)';
          showToast('Hero banner image uploaded to Supabase Storage!');
        } catch (err) {
          alert('Upload failed: ' + err.message);
          if (fileNameSpan) fileNameSpan.textContent = 'Upload failed';
        }
      }
    };
  }

  if (liveProjects) liveProjects.value = hero.liveProjects || '';
  if (liveSafety) liveSafety.value = hero.liveSafety || '';
  if (liveBca) liveBca.value = hero.liveBca || '';
  if (liveOntime) liveOntime.value = hero.liveOntime || '';
}

/* --------------------------------------------------------------------------
   5. Projects Portfolio Manager (CRUD)
   -------------------------------------------------------------------------- */
function renderProjectsTable(projects) {
  const tbody = document.getElementById('projects-table-body');
  if (!tbody) return;

  tbody.innerHTML = projects.map(proj => `
    <tr>
      <td><img src="${escapeHTML(proj.img)}" class="table-img-thumb" alt="${escapeHTML(proj.title)}"></td>
      <td><strong>${escapeHTML(proj.title)}</strong></td>
      <td><span class="badge-sgd">${escapeHTML(proj.category.toUpperCase())}</span></td>
      <td><i class="fa-solid fa-location-dot text-gold"></i> ${escapeHTML(proj.loc)}</td>
      <td><small>${escapeHTML(proj.specs)}</small></td>
      <td>
        <button class="btn-icon-action edit-proj-btn" data-id="${proj.id}" title="Edit Project"><i class="fa-solid fa-pen"></i></button>
        <button class="btn-icon-action btn-icon-delete del-proj-btn" data-id="${proj.id}" title="Delete Project"><i class="fa-solid fa-trash"></i></button>
      </td>
    </tr>
  `).join('');

  // Event Listeners for Edit & Delete
  document.querySelectorAll('.edit-proj-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = parseInt(btn.getAttribute('data-id'), 10);
      openEditProjectModal(id);
    });
  });

  document.querySelectorAll('.del-proj-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = parseInt(btn.getAttribute('data-id'), 10);
      deleteProject(id);
    });
  });
}

async function openEditProjectModal(projId = null) {
  const data = await getCMSData();
  const proj = projId ? (data.projects.find(p => p.id === projId) || {}) : { id: null, title: '', category: 'commercial', loc: '', specs: '', img: './assets/images/commercial_tower.jpg' };

  const modal = document.getElementById('admin-edit-modal');
  const titleEl = document.getElementById('admin-modal-title');
  const bodyEl = document.getElementById('admin-modal-body');

  const cats = (data.categories && data.categories.length > 0) ? data.categories : DEFAULT_CATEGORIES;
  const categoryOptionsHtml = cats.map(c => `
    <option value="${escapeHTML(c.key)}" ${proj.category === c.key ? 'selected' : ''}>${escapeHTML(c.label)}</option>
  `).join('');

  const g = (proj.gallery && proj.gallery.length > 0) ? proj.gallery : [proj.img];

  titleEl.textContent = projId ? 'Edit Project Details' : 'Add New Singapore Project';
  bodyEl.innerHTML = `
    <form id="project-form">
      <div class="form-group">
        <label>Project Title *</label>
        <input type="text" id="p-title" class="form-control" value="${escapeHTML(proj.title)}" required placeholder="e.g. Tanjong Pagar Tower">
      </div>
      <div class="form-row">
        <div class="form-group">
          <label>Category *</label>
          <select id="p-category" class="form-control">
            ${categoryOptionsHtml}
          </select>
        </div>
        <div class="form-group">
          <label>Location Tag *</label>
          <input type="text" id="p-loc" class="form-control" value="${escapeHTML(proj.loc)}" required placeholder="e.g. Marina Bay, Singapore">
        </div>
      </div>
      <div class="form-group">
        <label>Technical Specifications</label>
        <input type="text" id="p-specs" class="form-control" value="${escapeHTML(proj.specs)}" placeholder="e.g. 30-Storey | BCA Green Mark Gold">
      </div>

      <h4 class="mt-4 mb-3 text-gold"><i class="fa-solid fa-images"></i> Project Photo Gallery (Upload to Supabase Storage)</h4>
      <div class="gallery-inputs-grid" style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1.5rem;">
        <div class="gallery-slot-card glass-panel" style="padding: 1rem; border-radius: var(--radius-md);">
          <label style="font-size: 0.85rem; font-weight: 700; color: var(--accent-gold);">Image 1 (Main Cover)</label>
          <input type="text" id="p-gal-0" class="form-control mb-2" value="${escapeHTML(g[0] || proj.img)}" required placeholder="Image 1 URL or Upload">
          <label class="btn btn-sm btn-outline mt-1" style="cursor: pointer; font-size: 0.75rem;">
            <i class="fa-solid fa-cloud-arrow-up text-gold"></i> Upload to Supabase
            <input type="file" class="gal-file-input" data-index="0" accept="image/*" style="display: none;">
          </label>
          <img id="p-gal-prev-0" src="${escapeHTML(g[0] || proj.img)}" style="width: 100%; height: 75px; object-fit: cover; border-radius: 4px; margin-top: 0.5rem; border: 1px solid var(--border-color);">
        </div>

        <div class="gallery-slot-card glass-panel" style="padding: 1rem; border-radius: var(--radius-md);">
          <label style="font-size: 0.85rem; font-weight: 700; color: var(--accent-gold);">Image 2 (Detail Photo)</label>
          <input type="text" id="p-gal-1" class="form-control mb-2" value="${escapeHTML(g[1] || '')}" placeholder="Image 2 URL or Upload">
          <label class="btn btn-sm btn-outline mt-1" style="cursor: pointer; font-size: 0.75rem;">
            <i class="fa-solid fa-cloud-arrow-up text-gold"></i> Upload to Supabase
            <input type="file" class="gal-file-input" data-index="1" accept="image/*" style="display: none;">
          </label>
          <img id="p-gal-prev-1" src="${escapeHTML(g[1] || g[0] || proj.img)}" style="width: 100%; height: 75px; object-fit: cover; border-radius: 4px; margin-top: 0.5rem; border: 1px solid var(--border-color);">
        </div>

        <div class="gallery-slot-card glass-panel" style="padding: 1rem; border-radius: var(--radius-md);">
          <label style="font-size: 0.85rem; font-weight: 700; color: var(--accent-gold);">Image 3 (Interior / Elevation)</label>
          <input type="text" id="p-gal-2" class="form-control mb-2" value="${escapeHTML(g[2] || '')}" placeholder="Image 3 URL or Upload">
          <label class="btn btn-sm btn-outline mt-1" style="cursor: pointer; font-size: 0.75rem;">
            <i class="fa-solid fa-cloud-arrow-up text-gold"></i> Upload to Supabase
            <input type="file" class="gal-file-input" data-index="2" accept="image/*" style="display: none;">
          </label>
          <img id="p-gal-prev-2" src="${escapeHTML(g[2] || g[0] || proj.img)}" style="width: 100%; height: 75px; object-fit: cover; border-radius: 4px; margin-top: 0.5rem; border: 1px solid var(--border-color);">
        </div>

        <div class="gallery-slot-card glass-panel" style="padding: 1rem; border-radius: var(--radius-md);">
          <label style="font-size: 0.85rem; font-weight: 700; color: var(--accent-gold);">Image 4 (Site Safety / Overview)</label>
          <input type="text" id="p-gal-3" class="form-control mb-2" value="${escapeHTML(g[3] || '')}" placeholder="Image 4 URL or Upload">
          <label class="btn btn-sm btn-outline mt-1" style="cursor: pointer; font-size: 0.75rem;">
            <i class="fa-solid fa-cloud-arrow-up text-gold"></i> Upload to Supabase
            <input type="file" class="gal-file-input" data-index="3" accept="image/*" style="display: none;">
          </label>
          <img id="p-gal-prev-3" src="${escapeHTML(g[3] || g[0] || proj.img)}" style="width: 100%; height: 75px; object-fit: cover; border-radius: 4px; margin-top: 0.5rem; border: 1px solid var(--border-color);">
        </div>
      </div>

      <div class="modal-footer-actions">
        <button type="submit" class="btn btn-gold btn-block"><i class="fa-solid fa-floppy-disk"></i> Save Project to Supabase</button>
      </div>
    </form>
  `;

  modal.classList.add('show');

  // Input & Preview sync
  [0, 1, 2, 3].forEach(idx => {
    const inputEl = document.getElementById(`p-gal-${idx}`);
    const prevEl = document.getElementById(`p-gal-prev-${idx}`);
    if (inputEl && prevEl) {
      inputEl.oninput = () => { prevEl.src = inputEl.value; };
    }
  });

  // Supabase Storage Upload Handler
  document.querySelectorAll('.gal-file-input').forEach(fileInput => {
    fileInput.onchange = async () => {
      const idx = fileInput.getAttribute('data-index');
      const file = fileInput.files[0];
      const inputEl = document.getElementById(`p-gal-${idx}`);
      const prevEl = document.getElementById(`p-gal-prev-${idx}`);
      if (file && inputEl && prevEl) {
        inputEl.value = 'Uploading to Supabase Storage...';
        try {
          const publicUrl = await uploadImageToSupabase(file, 'project-images');
          inputEl.value = publicUrl;
          prevEl.src = publicUrl;
          showToast('Image uploaded to Supabase Storage!');
        } catch (err) {
          alert('Upload failed: ' + err.message);
          inputEl.value = '';
        }
      }
    };
  });

  document.getElementById('project-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const submitBtn = e.target.querySelector('button[type="submit"]');
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Saving to Supabase...';

    try {
      const g0 = document.getElementById('p-gal-0').value.trim();
      const g1 = document.getElementById('p-gal-1').value.trim();
      const g2 = document.getElementById('p-gal-2').value.trim();
      const g3 = document.getElementById('p-gal-3').value.trim();

      const galleryArr = [g0, g1, g2, g3].filter(Boolean);
      const coverUrl = galleryArr[0] || g0 || './assets/images/commercial_tower.jpg';

      const payload = {
        title: document.getElementById('p-title').value,
        category: document.getElementById('p-category').value,
        location: document.getElementById('p-loc').value,
        specs: document.getElementById('p-specs').value,
        cover_image_url: coverUrl,
        updated_at: new Date().toISOString()
      };

      let activeProjectId = projId;

      if (projId) {
        const { error } = await window.supabaseClient.from('projects').update(payload).eq('id', projId);
        if (error) throw error;
      } else {
        const { data: newProj, error } = await window.supabaseClient.from('projects').insert([payload]).select().single();
        if (error) throw error;
        activeProjectId = newProj.id;
      }

      if (activeProjectId) {
        await window.supabaseClient.from('project_images').delete().eq('project_id', activeProjectId);
        if (galleryArr.length > 0) {
          const imgRecords = galleryArr.map((url, i) => ({
            project_id: activeProjectId,
            image_url: url,
            display_order: i + 1
          }));
          await window.supabaseClient.from('project_images').insert(imgRecords);
        }
      }

      showToast('Project saved successfully to Supabase!');
      modal.classList.remove('show');
      await refreshAdminUI();
    } catch (err) {
      console.error('Error saving project:', err);
      alert('Failed to save project: ' + err.message);
    } finally {
      submitBtn.disabled = false;
    }
  });
}

async function deleteProject(id) {
  if (confirm('Are you sure you want to delete this project from Supabase?')) {
    try {
      const { error } = await window.supabaseClient.from('projects').delete().eq('id', id);
      if (error) throw error;
      showToast('Project deleted from Supabase!');
      await refreshAdminUI();
    } catch (err) {
      alert('Error deleting project: ' + err.message);
    }
  }
}

/* --------------------------------------------------------------------------
   6. Core Services Manager (CRUD)
   -------------------------------------------------------------------------- */
function renderServicesTable(services) {
  const tbody = document.getElementById('services-table-body');
  if (!tbody) return;

  tbody.innerHTML = services.map(srv => `
    <tr>
      <td><img src="${escapeHTML(srv.img || './assets/images/commercial_tower.jpg')}" class="table-img-thumb" alt="${escapeHTML(srv.title)}"></td>
      <td><strong>${escapeHTML(srv.title)}</strong></td>
      <td><small>${escapeHTML(srv.desc)}</small></td>
      <td>
        <button class="btn-icon-action edit-srv-btn" data-id="${srv.id}" title="Edit Service"><i class="fa-solid fa-pen"></i></button>
        <button class="btn-icon-action btn-icon-delete del-srv-btn" data-id="${srv.id}" title="Delete Service"><i class="fa-solid fa-trash"></i></button>
      </td>
    </tr>
  `).join('');

  document.querySelectorAll('.edit-srv-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = parseInt(btn.getAttribute('data-id'), 10);
      openEditServiceModal(id);
    });
  });

  document.querySelectorAll('.del-srv-btn').forEach(btn => {
    btn.addEventListener('click', async () => {
      const id = parseInt(btn.getAttribute('data-id'), 10);
      if (confirm('Delete this service from Supabase?')) {
        await window.supabaseClient.from('services').delete().eq('id', id);
        showToast('Service deleted!');
        await refreshAdminUI();
      }
    });
  });
}

async function openEditServiceModal(srvId = null) {
  const data = await getCMSData();
  const srv = srvId ? (data.services.find(s => s.id === srvId) || {}) : { id: null, icon: 'fa-helmet-safety', img: './assets/images/commercial_tower.jpg', title: '', desc: '' };

  const modal = document.getElementById('admin-edit-modal');
  const titleEl = document.getElementById('admin-modal-title');
  const bodyEl = document.getElementById('admin-modal-body');

  titleEl.textContent = srvId ? 'Edit Service Details' : 'Add New Service';
  bodyEl.innerHTML = `
    <form id="service-form">
      <div class="form-group">
        <label>Service Title *</label>
        <input type="text" id="s-title" class="form-control" value="${escapeHTML(srv.title)}" required placeholder="e.g. Structural Steel Works">
      </div>
      <div class="form-group">
        <label><i class="fa-solid fa-image text-gold"></i> Service Cover Image (Upload to Supabase Storage)</label>
        <input type="text" id="s-img" class="form-control mb-2" value="${escapeHTML(srv.img || './assets/images/commercial_tower.jpg')}" required placeholder="Image URL or Upload">
        <label class="btn btn-sm btn-outline mt-1" style="cursor: pointer; font-size: 0.8rem;">
          <i class="fa-solid fa-cloud-arrow-up text-gold"></i> Upload to Supabase Storage
          <input type="file" id="s-img-file" accept="image/*" style="display: none;">
        </label>
        <img id="s-img-prev" src="${escapeHTML(srv.img || './assets/images/commercial_tower.jpg')}" style="width: 100%; height: 120px; object-fit: cover; border-radius: var(--radius-sm); margin-top: 0.6rem; border: 1px solid var(--border-color);">
      </div>
      <div class="form-group">
        <label>FontAwesome Icon Class (Badge Icon)</label>
        <input type="text" id="s-icon" class="form-control" value="${escapeHTML(srv.icon || 'fa-helmet-safety')}" placeholder="e.g. fa-helmet-safety">
      </div>
      <div class="form-group">
        <label>Service Description</label>
        <textarea id="s-desc" class="form-control" rows="3" required placeholder="Describe the service offerings...">${escapeHTML(srv.desc)}</textarea>
      </div>
      <div class="modal-footer-actions">
        <button type="submit" class="btn btn-gold btn-block"><i class="fa-solid fa-floppy-disk"></i> Save Service to Supabase</button>
      </div>
    </form>
  `;

  modal.classList.add('show');

  const sImgInput = document.getElementById('s-img');
  const sImgFile = document.getElementById('s-img-file');
  const sImgPrev = document.getElementById('s-img-prev');

  if (sImgInput && sImgPrev) {
    sImgInput.oninput = () => { sImgPrev.src = sImgInput.value; };
  }

  if (sImgFile && sImgInput && sImgPrev) {
    sImgFile.onchange = async () => {
      const file = sImgFile.files[0];
      if (file) {
        sImgInput.value = 'Uploading to Supabase Storage...';
        try {
          const publicUrl = await uploadImageToSupabase(file, 'website-images');
          sImgInput.value = publicUrl;
          sImgPrev.src = publicUrl;
          showToast('Service image uploaded to Supabase!');
        } catch (err) {
          alert('Upload failed: ' + err.message);
          sImgInput.value = '';
        }
      }
    };
  }

  document.getElementById('service-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const payload = {
      title: document.getElementById('s-title').value,
      image_url: document.getElementById('s-img').value,
      icon: document.getElementById('s-icon').value,
      description: document.getElementById('s-desc').value,
      updated_at: new Date().toISOString()
    };

    if (srvId) {
      await window.supabaseClient.from('services').update(payload).eq('id', srvId);
    } else {
      await window.supabaseClient.from('services').insert([payload]);
    }

    showToast('Service saved to Supabase!');
    modal.classList.remove('show');
    await refreshAdminUI();
  });
}

/* --------------------------------------------------------------------------
   6B. Group Entities Manager (CRUD)
   -------------------------------------------------------------------------- */
function renderEntitiesTable(entities) {
  const tbody = document.getElementById('entities-table-body');
  if (!tbody) return;

  if (!entities || entities.length === 0) {
    tbody.innerHTML = '<tr><td colspan="6" class="text-center text-muted">No group entities added yet.</td></tr>';
    return;
  }

  tbody.innerHTML = entities.map(item => `
    <tr>
      <td>
        <div class="company-badge-icon" style="width:36px;height:36px;font-size:1.1rem;">
          <i class="fa-solid ${escapeHTML(item.icon || 'fa-building')} text-gold"></i>
        </div>
      </td>
      <td><strong>${escapeHTML(item.title)}</strong></td>
      <td><span class="badge-bca">${escapeHTML(item.tag || 'SUBSIDIARY')}</span></td>
      <td><small style="max-width: 250px; display: inline-block;">${escapeHTML(item.desc)}</small></td>
      <td>
        <small class="text-gold">
          &bull; ${escapeHTML(item.f1 || '')}<br>
          &bull; ${escapeHTML(item.f2 || '')}<br>
          &bull; ${escapeHTML(item.f3 || '')}
        </small>
      </td>
      <td>
        <button class="btn-icon-action edit-entity-btn" data-id="${item.id}" title="Edit Entity"><i class="fa-solid fa-pen"></i></button>
        <button class="btn-icon-action btn-icon-delete del-entity-btn" data-id="${item.id}" title="Delete Entity"><i class="fa-solid fa-trash"></i></button>
      </td>
    </tr>
  `).join('');

  document.querySelectorAll('.edit-entity-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = parseInt(btn.getAttribute('data-id'), 10);
      openEditEntityModal(id);
    });
  });

  document.querySelectorAll('.del-entity-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = parseInt(btn.getAttribute('data-id'), 10);
      deleteEntity(id);
    });
  });
}

async function deleteEntity(id) {
  if (confirm('Are you sure you want to delete this group entity company from Supabase?')) {
    await window.supabaseClient.from('group_entities').delete().eq('id', id);
    showToast('Group entity deleted!');
    await refreshAdminUI();
  }
}

async function openEditEntityModal(entityId = null) {
  const data = await getCMSData();
  const entity = entityId 
    ? (data.groupEntities.find(e => e.id === entityId) || {})
    : { id: null, title: '', tag: '', icon: 'fa-building', desc: '', f1: '', f2: '', f3: '' };

  const modal = document.getElementById('admin-edit-modal');
  const titleEl = document.getElementById('admin-modal-title');
  const bodyEl = document.getElementById('admin-modal-body');

  titleEl.textContent = entityId ? 'Edit Group Entity' : 'Add New Group Entity';
  bodyEl.innerHTML = `
    <form id="entity-form">
      <div class="form-group">
        <label>Company Name (Pte Ltd) *</label>
        <input type="text" id="ent-title" class="form-control" value="${escapeHTML(entity.title)}" required placeholder="e.g. RK Foundation Pte Ltd">
      </div>
      <div class="form-group">
        <label>Role / Category Tag *</label>
        <input type="text" id="ent-tag" class="form-control" value="${escapeHTML(entity.tag)}" required placeholder="e.g. DEEP FOUNDATION SPECIALIST">
      </div>
      <div class="form-group">
        <label>FontAwesome Badge Icon Class</label>
        <input type="text" id="ent-icon" class="form-control" value="${escapeHTML(entity.icon || 'fa-building')}" placeholder="e.g. fa-bore-hole, fa-crown, fa-shield-halved">
      </div>
      <div class="form-group">
        <label>Company Overview Description *</label>
        <textarea id="ent-desc" class="form-control" rows="3" required placeholder="Describe core specializations and services...">${escapeHTML(entity.desc)}</textarea>
      </div>
      <div class="form-group">
        <label><i class="fa-solid fa-check text-gold"></i> Key Highlight 1</label>
        <input type="text" id="ent-f1" class="form-control mb-1" value="${escapeHTML(entity.f1 || '')}" placeholder="Highlight point 1">
      </div>
      <div class="form-group">
        <label><i class="fa-solid fa-check text-gold"></i> Key Highlight 2</label>
        <input type="text" id="ent-f2" class="form-control mb-1" value="${escapeHTML(entity.f2 || '')}" placeholder="Highlight point 2">
      </div>
      <div class="form-group">
        <label><i class="fa-solid fa-check text-gold"></i> Key Highlight 3</label>
        <input type="text" id="ent-f3" class="form-control" value="${escapeHTML(entity.f3 || '')}" placeholder="Highlight point 3">
      </div>
      <div class="modal-footer-actions">
        <button type="submit" class="btn btn-gold btn-block"><i class="fa-solid fa-floppy-disk"></i> Save Group Entity to Supabase</button>
      </div>
    </form>
  `;

  modal.classList.add('show');

  document.getElementById('entity-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const payload = {
      title: document.getElementById('ent-title').value,
      tag: document.getElementById('ent-tag').value,
      icon: document.getElementById('ent-icon').value,
      description: document.getElementById('ent-desc').value,
      f1: document.getElementById('ent-f1').value,
      f2: document.getElementById('ent-f2').value,
      f3: document.getElementById('ent-f3').value,
      updated_at: new Date().toISOString()
    };

    if (entityId) {
      await window.supabaseClient.from('group_entities').update(payload).eq('id', entityId);
    } else {
      await window.supabaseClient.from('group_entities').insert([payload]);
    }

    showToast('Group entity saved to Supabase!');
    modal.classList.remove('show');
    await refreshAdminUI();
  });
}

/* --------------------------------------------------------------------------
   7. Testimonials Manager (CRUD)
   -------------------------------------------------------------------------- */
function renderTestimonialsTable(testimonials) {
  const tbody = document.getElementById('testimonials-table-body');
  if (!tbody) return;

  tbody.innerHTML = testimonials.map(item => `
    <tr>
      <td><strong>${escapeHTML(item.name)}</strong></td>
      <td><small>${escapeHTML(item.role)}</small></td>
      <td><span class="text-gold"><i class="fa-solid fa-star"></i> ${item.stars || 5} Stars</span></td>
      <td><em>"${escapeHTML(item.quote)}"</em></td>
      <td>
        <button class="btn-icon-action edit-testi-btn" data-id="${item.id}" title="Edit Review"><i class="fa-solid fa-pen"></i></button>
        <button class="btn-icon-action btn-icon-delete del-testi-btn" data-id="${item.id}" title="Delete Review"><i class="fa-solid fa-trash"></i></button>
      </td>
    </tr>
  `).join('');

  document.querySelectorAll('.edit-testi-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = parseInt(btn.getAttribute('data-id'), 10);
      openEditTestimonialModal(id);
    });
  });

  document.querySelectorAll('.del-testi-btn').forEach(btn => {
    btn.addEventListener('click', async () => {
      const id = parseInt(btn.getAttribute('data-id'), 10);
      if (confirm('Delete this testimonial from Supabase?')) {
        await window.supabaseClient.from('testimonials').delete().eq('id', id);
        showToast('Testimonial deleted!');
        await refreshAdminUI();
      }
    });
  });
}

async function openEditTestimonialModal(testiId = null) {
  const data = await getCMSData();
  const testi = testiId ? (data.testimonials.find(t => t.id === testiId) || {}) : { id: null, name: '', role: '', stars: 5, quote: '' };

  const modal = document.getElementById('admin-edit-modal');
  const titleEl = document.getElementById('admin-modal-title');
  const bodyEl = document.getElementById('admin-modal-body');

  titleEl.textContent = testiId ? 'Edit Testimonial' : 'Add New Testimonial';
  bodyEl.innerHTML = `
    <form id="testi-form">
      <div class="form-row">
        <div class="form-group">
          <label>Client Name *</label>
          <input type="text" id="t-name" class="form-control" value="${escapeHTML(testi.name)}" required placeholder="e.g. David Lim">
        </div>
        <div class="form-group">
          <label>Role / Developer Company</label>
          <input type="text" id="t-role" class="form-control" value="${escapeHTML(testi.role)}" placeholder="e.g. Director, Urban Development">
        </div>
      </div>
      <div class="form-group">
        <label>Rating (1 - 5 Stars)</label>
        <input type="number" min="1" max="5" id="t-stars" class="form-control" value="${testi.stars || 5}">
      </div>
      <div class="form-group">
        <label>Testimonial Review Quote *</label>
        <textarea id="t-quote" class="form-control" rows="3" required placeholder="Enter client quote...">${escapeHTML(testi.quote)}</textarea>
      </div>
      <div class="modal-footer-actions">
        <button type="submit" class="btn btn-gold btn-block"><i class="fa-solid fa-floppy-disk"></i> Save Testimonial to Supabase</button>
      </div>
    </form>
  `;

  modal.classList.add('show');

  document.getElementById('testi-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const payload = {
      name: document.getElementById('t-name').value,
      role: document.getElementById('t-role').value,
      stars: parseInt(document.getElementById('t-stars').value, 10) || 5,
      quote: document.getElementById('t-quote').value
    };

    if (testiId) {
      await window.supabaseClient.from('testimonials').update(payload).eq('id', testiId);
    } else {
      await window.supabaseClient.from('testimonials').insert([payload]);
    }

    showToast('Testimonial saved to Supabase!');
    modal.classList.remove('show');
    await refreshAdminUI();
  });
}

/* --------------------------------------------------------------------------
   8. Calculator Parameters & Save Handlers
   -------------------------------------------------------------------------- */
function populateCalcRatesForm(rates) {
  if (!rates) return;
  const commMin = document.getElementById('rate-comm-min');
  const commMax = document.getElementById('rate-comm-max');
  const resMin = document.getElementById('rate-res-min');
  const resMax = document.getElementById('rate-res-max');
  const civilMin = document.getElementById('rate-civil-min');
  const civilMax = document.getElementById('rate-civil-max');
  const fitMin = document.getElementById('rate-fitout-min');
  const fitMax = document.getElementById('rate-fitout-max');

  const mStd = document.getElementById('mult-standard');
  const mPrem = document.getElementById('mult-premium');
  const mLux = document.getElementById('mult-luxury');

  if (commMin) commMin.value = rates.commercial.min;
  if (commMax) commMax.value = rates.commercial.max;
  if (resMin) resMin.value = rates.residential.min;
  if (resMax) resMax.value = rates.residential.max;
  if (civilMin) civilMin.value = rates.civil.min;
  if (civilMax) civilMax.value = rates.civil.max;
  if (fitMin) fitMin.value = rates.fitout.min;
  if (fitMax) fitMax.value = rates.fitout.max;

  if (mStd) mStd.value = rates.multipliers.standard;
  if (mPrem) mPrem.value = rates.multipliers.premium;
  if (mLux) mLux.value = rates.multipliers.luxury;
}

function initFormSaveHandlers() {
  // Save Hero Banner Settings
  const saveHeroBtn = document.getElementById('save-hero-btn');
  if (saveHeroBtn) {
    saveHeroBtn.addEventListener('click', async () => {
      saveHeroBtn.disabled = true;
      saveHeroBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Saving...';
      try {
        const payload = {
          hero_tag: document.getElementById('cfg-hero-tag').value,
          hero_title: document.getElementById('cfg-hero-title').value,
          hero_subtitle: document.getElementById('cfg-hero-sub').value,
          phone: document.getElementById('cfg-phone').value,
          hero_image_url: document.getElementById('cfg-hero-img')?.value || './assets/images/hero_singapore_skyline.jpg',
          live_projects: document.getElementById('cfg-live-projects').value,
          live_safety: document.getElementById('cfg-live-safety').value,
          live_bca: document.getElementById('cfg-live-bca').value,
          live_ontime: document.getElementById('cfg-live-ontime').value,
          updated_at: new Date().toISOString()
        };
        const { error } = await window.supabaseClient.from('site_settings').update(payload).eq('id', 1);
        if (error) throw error;
        showToast('Hero settings saved to Supabase!');
        await refreshAdminUI();
      } catch (err) {
        alert('Error saving hero settings: ' + err.message);
      } finally {
        saveHeroBtn.disabled = false;
        saveHeroBtn.innerHTML = '<i class="fa-solid fa-floppy-disk"></i> Save Hero Changes';
      }
    });
  }

  // Save Calculator Rates
  const saveRatesBtn = document.getElementById('save-rates-btn');
  if (saveRatesBtn) {
    saveRatesBtn.addEventListener('click', async () => {
      saveRatesBtn.disabled = true;
      saveRatesBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Saving...';
      try {
        const rates = {
          commercial: { min: parseInt(document.getElementById('rate-comm-min').value, 10), max: parseInt(document.getElementById('rate-comm-max').value, 10) },
          residential: { min: parseInt(document.getElementById('rate-res-min').value, 10), max: parseInt(document.getElementById('rate-res-max').value, 10) },
          civil: { min: parseInt(document.getElementById('rate-civil-min').value, 10), max: parseInt(document.getElementById('rate-civil-max').value, 10) },
          fitout: { min: parseInt(document.getElementById('rate-fitout-min').value, 10), max: parseInt(document.getElementById('rate-fitout-max').value, 10) },
          multipliers: {
            standard: parseFloat(document.getElementById('mult-standard').value),
            premium: parseFloat(document.getElementById('mult-premium').value),
            luxury: parseFloat(document.getElementById('mult-luxury').value)
          }
        };
        const { error } = await window.supabaseClient.from('site_settings').update({ calc_rates: rates, updated_at: new Date().toISOString() }).eq('id', 1);
        if (error) throw error;
        showToast('Calculator rates saved to Supabase!');
        await refreshAdminUI();
      } catch (err) {
        alert('Error saving rates: ' + err.message);
      } finally {
        saveRatesBtn.disabled = false;
        saveRatesBtn.innerHTML = '<i class="fa-solid fa-floppy-disk"></i> Save Calculator Parameters';
      }
    });
  }

  // Dashboard Change Password Form (Supabase Auth)
  const dashPinForm = document.getElementById('dashboard-change-password-form');
  if (dashPinForm) {
    dashPinForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const newInput = document.getElementById('dash-pin-new').value.trim();
      const confirmInput = document.getElementById('dash-pin-confirm').value.trim();
      const feedback = document.getElementById('dash-pin-feedback');

      if (newInput.length < 6) {
        feedback.textContent = '⚠️ Password must be at least 6 characters long!';
        feedback.style.color = '#F59E0B';
        return;
      }

      if (newInput !== confirmInput) {
        feedback.textContent = '❌ New password and confirmation do not match!';
        feedback.style.color = '#EF4444';
        return;
      }

      feedback.textContent = '⏳ Updating password in Supabase Auth...';
      feedback.style.color = '#F59E0B';

      try {
        const { data, error } = await window.supabaseClient.auth.updateUser({ password: newInput });
        if (error) throw error;

        feedback.textContent = '✅ Supabase Admin Password updated successfully!';
        feedback.style.color = '#10B981';
        showToast('Admin password updated in Supabase Auth!');
        dashPinForm.reset();
      } catch (err) {
        feedback.textContent = '❌ Failed to update password: ' + err.message;
        feedback.style.color = '#EF4444';
      }
    });
  }

  // Add Item Buttons
  document.getElementById('btn-add-category')?.addEventListener('click', () => openAddCategoryModal());
  document.getElementById('btn-add-project')?.addEventListener('click', () => openEditProjectModal());
  document.getElementById('btn-add-service')?.addEventListener('click', () => openEditServiceModal());
  document.getElementById('btn-add-entity')?.addEventListener('click', () => openEditEntityModal());
  document.getElementById('btn-add-testimonial')?.addEventListener('click', () => openEditTestimonialModal());

  // Refresh Data from Supabase Button
  document.getElementById('btn-reset-default')?.addEventListener('click', async () => {
    showToast('Refreshing content live from Supabase...');
    await refreshAdminUI();
  });

  // Modal Close
  document.getElementById('close-admin-modal')?.addEventListener('click', () => {
    document.getElementById('admin-edit-modal').classList.remove('show');
  });
}

/* --------------------------------------------------------------------------
   9. Inquiries & Lead Inbox (Table & CSV Export)
   -------------------------------------------------------------------------- */
function renderInquiriesTable(inquiries) {
  const tbody = document.getElementById('inquiries-table-body');
  const searchInput = document.getElementById('inbox-search-input');
  if (!tbody) return;

  let filtered = inquiries;
  if (searchInput && searchInput.value.trim() !== '') {
    const q = searchInput.value.toLowerCase();
    filtered = inquiries.filter(item => 
      (item.name && item.name.toLowerCase().includes(q)) ||
      (item.email && item.email.toLowerCase().includes(q)) ||
      (item.phone && item.phone.toLowerCase().includes(q)) ||
      (item.type && item.type.toLowerCase().includes(q))
    );
  }

  if (filtered.length === 0) {
    tbody.innerHTML = '<tr><td colspan="6" class="text-center text-muted">No lead inquiries found.</td></tr>';
    return;
  }

  tbody.innerHTML = filtered.slice().reverse().map(item => `
    <tr>
      <td><small>${escapeHTML(item.date)}</small></td>
      <td><strong>${escapeHTML(item.name)}</strong></td>
      <td>
        <div><i class="fa-solid fa-phone text-gold"></i> ${escapeHTML(item.phone)}</div>
        <small class="text-muted">${escapeHTML(item.email)}</small>
      </td>
      <td><span class="badge-bca">${escapeHTML(item.type || 'General')}</span></td>
      <td><small>"${escapeHTML(item.msg)}"</small></td>
      <td><span class="badge-sgd">${escapeHTML(item.source || 'Website')}</span></td>
    </tr>
  `).join('');

  if (searchInput) {
    searchInput.oninput = () => renderInquiriesTable(inquiries);
  }

  // Clear Inbox
  const clearBtn = document.getElementById('clear-inquiries-btn');
  if (clearBtn) {
    clearBtn.onclick = async () => {
      if (confirm('Clear all leads from inbox in Supabase?')) {
        await window.supabaseClient.from('inquiries').delete().neq('id', 0);
        showToast('All leads cleared from Supabase!');
        await refreshAdminUI();
      }
    };
  }

  // Export CSV
  const csvBtn = document.getElementById('export-csv-btn');
  if (csvBtn) {
    csvBtn.onclick = () => exportLeadsToCSV(inquiries);
  }
}

function exportLeadsToCSV(inquiries) {
  if (!inquiries || inquiries.length === 0) {
    alert('No leads available to export!');
    return;
  }

  const headers = ['Date', 'Name', 'Email', 'Phone', 'Project Type', 'Message', 'Source'];
  const rows = inquiries.map(i => [
    `"${i.date || ''}"`,
    `"${i.name || ''}"`,
    `"${i.email || ''}"`,
    `"${i.phone || ''}"`,
    `"${i.type || ''}"`,
    `"${(i.msg || '').replace(/"/g, '""')}"`,
    `"${i.source || ''}"`
  ]);

  const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map(e => e.join(','))].join('\n');
  const encodedUri = encodeURI(csvContent);
  const link = document.createElement('a');
  link.setAttribute('href', encodedUri);
  link.setAttribute('download', `BuildRight_Singapore_Leads_${new Date().toISOString().slice(0, 10)}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

/* Helper Toast */
function showToast(msg) {
  const toast = document.getElementById('admin-toast');
  if (!toast) return;
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3000);
}

function escapeHTML(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
