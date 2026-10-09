/* ==========================================================================
   GreenLegacy Slemani - Multi-Role Environmental & Recycling Platform System
   Supports English (LTR) & Kurdish Sorani (RTL)
   Roles: Citizen, Business, Recycler, Municipality Staff
   ========================================================================== */

const CONFIG = {
  POINTS_PER_KG: 10,
  MAX_GPS_DISTANCE_METERS: 50
};

const translations = {
  en: {
    brand_name: "Slemani <span>GreenLegacy</span>",
    nav_cycle: "How It Works",
    nav_ai: "AI Verification",
    nav_league: "Eco-League",
    nav_portals: "Role Portals",
    nav_dashboard: "Municipality",
    nav_download: "Download App",

    hero_badge: " Smart Environmental Platform for Slemani",
    hero_title: "Keeping <span class='highlight-green'>Slemani Clean</span> Through AI & Rewards",
    hero_subtitle: "GreenLegacy Slemani connects citizens, businesses, recycling companies, and municipality staff in a complete eco-cycle: report pollution, register recycling bins, request collections, verify GPS & QR codes, earn points, and compete in the Eco-League.",

    btn_download_ios: "Download for iPhone",
    btn_download_android: "Download for Android",
    btn_presentation: "Presentation Pitch",
    btn_ios_sub: "App Store",
    btn_android_sub: "Google Play",

    stat_cleanups: "1,420+",
    stat_cleanups_label: "Verified Cleanups",
    stat_waste: "18.5 Tons",
    stat_waste_label: "Waste Removed",
    stat_neighbourhoods: "24",
    stat_neighbourhoods_label: "Active Districts",
    stat_accuracy: "98.4%",
    stat_accuracy_label: "AI Verification Rate",
    stats_disclaimer: "These data are live examples of what the platform accomplishes.",

    cycle_tag: "The Complete Eco-Cycle",
    cycle_title: "How GreenLegacy Works in <span>Simple Steps</span>",
    cycle_desc: "An intelligent, gamified platform turning city cleanup and recycling into a transparent community mission.",

    step1_title: "1. Report Pollution & Bins",
    step1_desc: "Citizens report polluted spots, while local businesses register recycling bins and request pickup when full.",

    step2_title: "2. AI YOLOv8 Analysis",
    step2_desc: "The system automatically scans photos, detects waste items, estimates quantity, and assigns severity scores.",

    step3_title: "3. Recycler Collection",
    step3_desc: "Recycling collection companies accept requests, travel to bins, and prepare for verified pickup.",

    step4_title: "4. QR & 50m GPS Verification",
    step4_desc: "Collectors scan unique bin QR codes (e.g. GL-BIN-0001) and verify their 50m GPS location before entering weight.",

    step5_title: "5. Instant Points & Rewards",
    step5_desc: "Verified collections immediately credit points to business ledgers (10 Pts per kg), while cleanups complete 24h pending review.",

    step6_title: "6. Municipality Oversight",
    step6_desc: "City officials monitor live heatmaps, district weight statistics, and review suspicious weight audits.",

    ai_tag: "YOLOv8 Computer Vision",
    ai_title: "Smart AI Waste Detection & <span>Anti-Fraud System</span>",
    ai_desc: "Our custom YOLOv8 model evaluates waste severity in real-time while strict verification prevents duplicate, fake, or abusive reports.",
    ai_level: "Pollution Level: 4 / 5 (Severe Litter)",
    ai_pts: "Clean Reward: 150 Eco-Points",
    ai_verified: "AI Multi-Verification Active",
    sample_park: "Sarchinar Park Spot",
    sample_street: "Saholaka Street Spot",
    sample_mountain: "Goizha Mountain Spot",

    before_after_tag: "Real Impact",
    before_after_title: "Before & After <span>Cleanup Evidence</span>",
    before_after_desc: "Every cleanup attempt is stored with AI image comparison, timestamped geolocation, and photo proof for complete transparency.",

    league_tag: "Community Gamification",
    league_title: "Eco-League: <span>Neighbourhood Competition</span>",
    league_desc: "Transforming city cleanliness into friendly rivalry among Slemani's districts.",
    top_districts: "Top Slemani Neighbourhoods",
    top_citizens: "Top Contributing Citizens",

    dash_tag: "Enterprise Platform",
    dash_title: "Slemani Municipality <span>Dashboard</span>",
    dash_desc: "Empowering city officials with real-time maps, pollution age indicators, evidence reviews, and environmental statistics.",
    dash_feat1_title: "Live City Heatmap",
    dash_feat1_desc: "Monitor reported spots by severity (Level 1-5) and age across all city sectors.",
    dash_feat2_title: "Evidence Inspection",
    dash_feat2_desc: "Compare before-and-after photo frames and review suspicious cleanup submissions.",
    dash_feat3_title: "Impact Analytics",
    dash_feat3_desc: "Track total reported locations, verified cleanups, and tons of waste removed.",

    cta_title: "Ready to Transform Slemani?",
    cta_desc: "Our application is available on web, iOS, and Android!",

    toast_download: "Application build ready for download.",

    /* Role System Keys */
    portals_tag: "Unified Smart Eco-System",
    portals_title: "GreenLegacy <span>Four-Role Portals</span>",
    portals_desc: "Connecting Citizens, Businesses, Recycling Companies, and Municipality Staff in a unified platform.",

    role_citizen: "Citizen",
    role_business: "Business",
    role_recycler: "Recycler",
    role_municipality: "Municipality Staff",

    biz_lbl_registered: "Registered Bins",
    biz_lbl_open_req: "Full Bin Requests",
    biz_lbl_verified_weight: "Verified Weight Collected",
    biz_lbl_recycling_pts: "Recycling Points Earned",
    biz_title_bins: "Business Recycling Bins",
    biz_title_history: "Collection Requests & Weight History",
    btn_register_bin: "Register New Bin",
    btn_report_full: "Report Bin Full",

    rec_lbl_available: "Available Requests",
    rec_lbl_accepted: "Accepted Requests",
    rec_lbl_collected_today: "Weight Collected",
    rec_lbl_rating: "Collector Rating",
    rec_title_history: "Recycler Completed Collections History",

    muni_lbl_total_weight: "Verified Recycling Weight",
    muni_lbl_bins: "Registered Recycling Bins",
    muni_lbl_cleanups: "Citizen Cleanups",
    muni_lbl_flagged: "Suspicious Submissions",
    muni_title_districts: "Recycling Weight Collected by Sulaymaniyah District",
    muni_title_review: "Administrative Review & Suspicious Weight Audit",

    cit_lbl_pts: "Citizen Eco-Points",
    cit_lbl_cleanups: "Cleanups Verified",
    cit_lbl_district: "Home District",
    cit_lbl_rank: "District League Rank",
    cit_title_reports: "Citizen Pollution Reports & Cleanups",
    btn_report_spot: "Report Pollution Spot",

    ledger_title: "Unified GreenLegacy Point Ledger & Transaction Audit",
    photo_badge_title: "Slemani Field Evidence Showcase"
  },

  ckb: {
    brand_name: "سلێمانی<span> گرینلیگاسی </span>",
    nav_cycle: "چۆنیەتی کارکردن",
    nav_ai: "پشکنینی ژیریی دەستکرد",
    nav_league: "خولی ژینگە (Eco-League)",
    nav_portals: "پۆرتالی ڕۆڵەکان",
    nav_dashboard: "داشبۆردی شارەوانی",
    nav_download: "داگرتنی بەرنامە",

    hero_badge: " پلاتفۆرمی ژینگەیی زیرەک بۆ سلێمانی",
    hero_title: "ڕاگرتنی <span class='highlight-green'>پاکی سلێمانی</span> بە ژیریی دەستکرد و خەڵات",
    hero_subtitle: "گرین‌لیگاسی سلێمانی هاووڵاتییان، کۆمپانیاکان، کۆکەرەوەکانی ڕیسایکڵینگ و شارەوانی لە سوڕێکی تەواوی ژینگەییدا دەبەستێتەوە.",

    btn_download_ios: "داگرتن بۆ ئایفۆن (iPhone)",
    btn_download_android: "داگرتن بۆ ئەندرۆید (Android)",
    btn_presentation: "پێشاندانی پرۆژەکە",
    btn_ios_sub: "ئاپ ستۆر",
    btn_android_sub: "گووگڵ پلەی",

    stat_cleanups: "+١,٤٢٠",
    stat_cleanups_label: "پاککردنەوەی پەسەندکراو",
    stat_waste: "١٨.٥ تەن",
    stat_waste_label: "پاشماوەی لادراو",
    stat_neighbourhoods: "٢٤",
    stat_neighbourhoods_label: "گەڕەکی چالاک",
    stat_accuracy: "٩٨.٤٪",
    stat_accuracy_label: "دروستیی پشکنینی AI",
    stats_disclaimer: "ئەم ئامارانە نموونەی ڕاستەوخۆی بەدەستهاتووەکانی پلاتفۆرمەکەن.",

    cycle_tag: "سوڕی تەواوی ژینگە",
    cycle_title: "گرین‌لیگاسی چۆن کاردەکات بە <span>هەنگاوی ئاسان</span>",
    cycle_desc: "پلاتفۆرمێکی زیرەک و یاری ئاسا کە پاککردنەوەی شار دەکاتە ئەرکێکی بەکۆمەڵ و ڕوون.",

    step1_title: "١. ڕاپۆرتکردنی زبڵ و سەلەکان",
    step1_desc: "هاووڵاتییان زبڵ ڕاپۆرت دەکەن، و کۆمپانیاکان سەلەی ڕیسایکڵینگ تۆمار دەکەن و داوای کۆکردنەوە دەکەن.",

    step2_title: "٢. پشکنینی YOLOv8 AI",
    step2_desc: "سیستەمەکە خۆکارانە وێنەکە دەپشکنێت و جۆر و بڕی پاشماوە دەستنیشان دەکات.",

    step3_title: "٣. کۆکردنەوەی ڕیسایکڵینگ",
    step3_desc: "کۆمپانیاکانی ڕیسایکڵینگ داواکارییەکان پەسەند دەکەن و سەردانی سەلەکان دەکەن.",

    step4_title: "٤. پشکنینی QR و GPS 50m",
    step4_desc: "کۆکەرەوە کۆدی QR (وەک GL-BIN-0001) و شوێنی GPS لە ٥٠ مەتردا دەپشکنێت.",

    step5_title: "٥. خاڵ و خەڵاتی ڕاستەوخۆ",
    step5_desc: "پاککردنەوەی پەسەندکراو ڕاستەوخۆ خاڵ بەدەست دەهێنێت (١٠ خاڵ بۆ هر کیلۆیەک).",

    step6_title: "٦. چاودێری شارەوانی",
    step6_desc: "بەرپرسانی شارەوانی چاودێری نەخشە و ئاماری کێشی کۆکراوە لە گەڕەکەکاندا دەکەن.",

    ai_tag: "ژیریی دەستکردی YOLOv8",
    ai_title: "دۆزینەوەی زبڵ بە AI و <span>سیستەمی ڕێگری لە فێڵ</span>",
    ai_desc: "مۆدێلی تایبەتی YOLOv8 ڕاستەوخۆ ئاستی پیسیی هەڵدەسەنگێنێت.",
    ai_level: "ئاستی پیسی: ٤ / ٥ (زبڵی زۆر)",
    ai_pts: "خەڵاتی پاککردنەوە: ١٥٠ خاڵ",
    ai_verified: "پشکنینی فرەلایەنی AI چالاکە",
    sample_park: "پارکی سرچنار",
    sample_street: "شەقامی سەهۆڵەکە",
    sample_mountain: "چیای گۆیژە",

    before_after_tag: "کاریگەریی ڕاستەقینە",
    before_after_title: "بەڵگەی <span>پێش و پاش پاککردنەوە</span>",
    before_after_desc: "دەستکەوتی هەر پاککردنەوەیەک بە بەراوردی وێنەی AI و شوێنی جوگرافی پاشەکەوت دەکرێت.",

    league_tag: "کێبڕکێی کۆمەڵگە",
    league_title: "خولی ژینگە: <span>کێبڕکێی گەڕەکەکان</span>",
    league_desc: "گۆڕینی پاکیی شار بۆ کێبڕکێیەکی دۆستانە لە نێوان گەڕەکەکانی سلێمانی.",
    top_districts: "باشترین گەڕەکەکانی سلێمانی",
    top_citizens: "چالاکترین هاووڵاتییان",

    dash_tag: "پلاتفۆرمی دامەزراوەکان",
    dash_title: "داشبۆردی <span>شارەوانیی سلێمانی</span>",
    dash_desc: "بەرپرسانی شارەوانی دەسەڵاتدار دەکات بە نەخشەی ڕاستەوخۆ و ئاماری ژینگەیی.",
    dash_feat1_title: "نەخشەی گەرمیی ڕاستەوخۆ",
    dash_feat1_desc: "چاوەدێری شوێنە ڕاپۆرتکراوەکان بکە بەپێی ئاستی پیسی.",
    dash_feat2_title: "پشکنینی بەڵگەکان",
    dash_feat2_desc: "وێنەکانی پێش و پاش پاککردنەوە بەراورد بکە.",
    dash_feat3_title: "ئاماری کاریگەری",
    dash_feat3_desc: "بەدواداچوون بۆ کۆی شوێنە ڕاپۆرتکراوەکان بکە.",

    cta_title: "ئامادەیت بۆ گۆڕینی سلێمانی؟",
    cta_desc: "گرینلیگاسی سلێمانی لە ئایفۆن و ئەندرۆید بەردەستە!",

    toast_download: "وەشانی بەرنامەکە ئامادەیە بۆ داگرتن.",

    portals_tag: "سیستەمی ژینگەیی زیرەک",
    portals_title: "پۆرتالی <span>چوار ڕۆڵەکەی گرینلیگاسی</span>",
    portals_desc: "بەستنەوەی هاووڵاتییان، کۆمپانیاکان، کۆکەرەوەکان و شارەوانی لە یەک پلاتفۆرمدا.",

    role_citizen: "هاووڵاتی",
    role_business: "کۆمپانیا/دووکان",
    role_recycler: "کۆکەرەوەی زبڵ",
    role_municipality: "کارمەندی شارەوانی",

    biz_lbl_registered: "سەلەی تۆمارکراو",
    biz_lbl_open_req: "داواکارییە چالاکەکان",
    biz_lbl_verified_weight: "کێشی کۆکراوەی پەسەندکراو",
    biz_lbl_recycling_pts: "خاڵی بەدەستهاتوو",
    biz_title_bins: "سەلەکانی ڕیسایکڵینگی کۆمپانیا",
    biz_title_history: "مێژووی داواکاری و کێشەکان",
    btn_register_bin: "تۆمارکردنی سەلەی نوێ",
    btn_report_full: "ڕاپۆرتکردنی پڕبوونی سەلە",

    rec_lbl_available: "داواکارییە بەردەستەکان",
    rec_lbl_accepted: "داواکارییە پەسەندکراوەکان",
    rec_lbl_collected_today: "کێشی کۆکراوە",
    rec_lbl_rating: "هەڵسەنگاندنی کۆکەرەوە",
    rec_title_history: "مێژووی کۆکردنەوە تەواوبووەکانی کۆکەرەوە",

    muni_lbl_total_weight: "کۆی کێشی ڕیسایکڵکراوی پەسەندکراو",
    muni_lbl_bins: "سەلە تۆمارکراوەکان",
    muni_lbl_cleanups: "پاککردنەوەی هاووڵاتییان",
    muni_lbl_flagged: "داواکارییە گوماناوییەکان",
    muni_title_districts: "کێشی کۆکراوە بەپێی گەڕەکەکانی سلێمانی",
    muni_title_review: "پێداچوونەوەی کارگێڕی و کێشی گوماناوی",

    cit_lbl_pts: "خاڵەکانی هاووڵاتی",
    cit_lbl_cleanups: "پاککردنەوەی پەسەندکراو",
    cit_lbl_district: "گەڕەکی هاووڵاتی",
    cit_lbl_rank: "ڕیزبەندی گەڕەک",
    cit_title_reports: "ڕاپۆرت و پاککردنەوەکانی هاووڵاتی",
    btn_report_spot: "ڕاپۆرتکردنی شوێنی پیس",

    ledger_title: "تۆماری گشتی خاڵەکان و وردبینی مامەڵەکان",
    photo_badge_title: "بەڵگەی مەیدانی سلێمانی"
  }
};

/* ==========================================================================
   State Engine Initialization
   ========================================================================== */

const DEFAULT_STATE = {
  currentUser: {
    role: 'business',
    id: 'usr-001',
    name: 'Saholaka Eco Cafe',
    district: 'Saholaka / Salim St'
  },
  bins: [
    { id: 'GL-BIN-0001', qrCode: 'GL-BIN-0001', owner: 'Saholaka Eco Cafe', businessId: 'usr-001', locationName: 'Saholaka St - Gate A', lat: 35.5571, lng: 45.4352, district: 'Saholaka / Salim St', material: 'plastic', status: 'requested', createdAt: '2026-10-01' },
    { id: 'GL-BIN-0002', qrCode: 'GL-BIN-0002', owner: 'Saholaka Eco Cafe', businessId: 'usr-001', locationName: 'Saholaka Terrace', lat: 35.5575, lng: 45.4358, district: 'Saholaka / Salim St', material: 'cardboard', status: 'normal', createdAt: '2026-10-03' },
    { id: 'GL-BIN-0003', qrCode: 'GL-BIN-0003', owner: 'Sarchinar Resto', businessId: 'usr-002', locationName: 'Sarchinar Park Entrance', lat: 35.5820, lng: 45.3900, district: 'Sarchinar', material: 'metal', status: 'accepted', createdAt: '2026-10-05' },
    { id: 'GL-BIN-0004', qrCode: 'GL-BIN-0004', owner: 'Goizha View Hotel', businessId: 'usr-003', locationName: 'Goizha Summit Road', lat: 35.5950, lng: 45.4600, district: 'Goizha', material: 'mixed', status: 'collected', createdAt: '2026-10-06' }
  ],
  collectionRequests: [
    { id: 'REQ-1001', binId: 'GL-BIN-0001', businessName: 'Saholaka Eco Cafe', businessId: 'usr-001', locationName: 'Saholaka St - Gate A', lat: 35.5571, lng: 45.4352, district: 'Saholaka / Salim St', material: 'plastic', status: 'requested', photo: 'assets/images/ai_yolo_demo.png', aiItemCount: 42, requestedAt: '2026-10-09 09:15', assignedRecyclerId: null, assignedRecyclerName: null, verifiedWeightKg: null, pointsAwarded: null, collectedAt: null, flagged: false },
    { id: 'REQ-1002', binId: 'GL-BIN-0003', businessName: 'Sarchinar Resto', businessId: 'usr-002', locationName: 'Sarchinar Park Entrance', lat: 35.5820, lng: 45.3900, district: 'Sarchinar', material: 'metal', status: 'accepted', photo: 'assets/images/ai_yolo_demo.png', aiItemCount: 28, requestedAt: '2026-10-09 08:30', assignedRecyclerId: 'rec-001', assignedRecyclerName: 'Slemani Clean Recycling Co.', verifiedWeightKg: null, pointsAwarded: null, collectedAt: null, flagged: false },
    { id: 'REQ-1003', binId: 'GL-BIN-0004', businessName: 'Goizha View Hotel', businessId: 'usr-003', locationName: 'Goizha Summit Road', lat: 35.5950, lng: 45.4600, district: 'Goizha', material: 'mixed', status: 'collected', photo: 'assets/images/ai_yolo_demo.png', aiItemCount: 95, requestedAt: '2026-10-08 14:00', assignedRecyclerId: 'rec-001', assignedRecyclerName: 'Slemani Clean Recycling Co.', verifiedWeightKg: 85.5, pointsAwarded: 855, collectedAt: '2026-10-08 16:30', flagged: false }
  ],
  ledger: [
    { id: 'TXN-9001', userId: 'usr-003', userName: 'Goizha View Hotel', role: 'business', source: 'recycling_collection', referenceId: 'REQ-1003', weightKg: 85.5, points: 855, status: 'awarded', timestamp: '2026-10-08 16:30' },
    { id: 'TXN-9002', userId: 'usr-cit-1', userName: 'Ari Mohammed', role: 'citizen', source: 'citizen_cleanup', referenceId: 'CLN-501', weightKg: 12.0, points: 150, status: 'awarded', timestamp: '2026-10-08 11:20' }
  ],
  flaggedAudits: [
    { id: 'AUD-801', sourceType: 'recycling_collection', entityName: 'Bakrajo Industrial Yard', submittedWeightKg: 750.0, reason: 'Weight > 500kg anomaly threshold', timestamp: '2026-10-08 17:45', status: 'pending' }
  ]
};

let state = loadState();

function loadState() {
  const saved = localStorage.getItem('greenlegacy_state_v2');
  if (saved) {
    try {
      return JSON.parse(saved);
    } catch (e) {
      console.warn("Error parsing saved state, using default:", e);
    }
  }
  return JSON.parse(JSON.stringify(DEFAULT_STATE));
}

function saveState() {
  localStorage.setItem('greenlegacy_state_v2', JSON.stringify(state));
}

let currentLang = 'en';

/* Language System */
function setLanguage(lang) {
  currentLang = lang;
  const htmlEl = document.documentElement;
  const langBtnText = document.getElementById('langBtnText');

  if (lang === 'ckb') {
    htmlEl.setAttribute('dir', 'rtl');
    htmlEl.setAttribute('lang', 'ckb');
    if (langBtnText) langBtnText.textContent = 'EN';
  } else {
    htmlEl.setAttribute('dir', 'ltr');
    htmlEl.setAttribute('lang', 'en');
    if (langBtnText) langBtnText.textContent = 'کوردی';
  }

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });

  renderAllPortals();
}

function toggleLanguage() {
  const newLang = currentLang === 'en' ? 'ckb' : 'en';
  setLanguage(newLang);
}

function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', newTheme);

  const themeIcon = document.getElementById('themeIcon');
  if (themeIcon) {
    themeIcon.className = newTheme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
  }
}

function showNotification(msg, type = 'success') {
  const toast = document.createElement('div');
  toast.className = 'download-toast';
  const bg = type === 'error' ? '#d32f2f' : (type === 'warning' ? '#f57c00' : '#157148');
  toast.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    background: ${bg};
    color: white;
    padding: 1rem 1.5rem;
    border-radius: 14px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.3);
    font-weight: 700;
    z-index: 99999;
    transition: all 0.3s ease;
    max-width: 420px;
  `;
  if (currentLang === 'ckb') {
    toast.style.right = 'auto';
    toast.style.left = '30px';
  }
  const icon = type === 'error' ? 'fa-exclamation-triangle' : 'fa-check-circle';
  toast.innerHTML = `<i class="fas ${icon}"></i> ${msg}`;
  document.body.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}

function showDownloadToast() {
  showNotification(translations[currentLang].toast_download);
}

/* AI Interactive Demo */
function selectAiSample(spot) {
  document.querySelectorAll('.sample-chip').forEach(chip => chip.classList.remove('active'));
  if (event && event.target) event.target.classList.add('active');

  const meterFill = document.getElementById('aiMeterFill');
  const levelText = document.getElementById('aiLevelText');
  const ptsText = document.getElementById('aiPtsText');
  const scanBox = document.getElementById('aiScanBox');

  if (spot === 'park') {
    if (meterFill) meterFill.style.width = '80%';
    if (levelText) levelText.textContent = currentLang === 'ckb' ? 'ئاستی پیسی: ٤ / ٥ (زبڵی زۆر)' : 'Pollution Level: 4 / 5 (Severe Litter)';
    if (ptsText) ptsText.textContent = currentLang === 'ckb' ? 'خەڵاتی پاککردنەوە: ١٥٠ خاڵ' : 'Clean Reward: 150 Eco-Points';
    if (scanBox) { scanBox.style.top = '35%'; scanBox.style.left = '25%'; scanBox.style.width = '50%'; }
  } else if (spot === 'street') {
    if (meterFill) meterFill.style.width = '60%';
    if (levelText) levelText.textContent = currentLang === 'ckb' ? 'ئاستی پیسی: ٣ / ٥ (زبڵی مامناوەند)' : 'Pollution Level: 3 / 5 (Moderate Litter)';
    if (ptsText) ptsText.textContent = currentLang === 'ckb' ? 'خەڵاتی پاککردنەوە: ١٠٠ خاڵ' : 'Clean Reward: 100 Eco-Points';
    if (scanBox) { scanBox.style.top = '40%'; scanBox.style.left = '30%'; scanBox.style.width = '40%'; }
  } else if (spot === 'mountain') {
    if (meterFill) meterFill.style.width = '100%';
    if (levelText) levelText.textContent = currentLang === 'ckb' ? 'ئاستی پیسی: ٥ / ٥ (زبڵی قورس)' : 'Pollution Level: 5 / 5 (Critical Dumping)';
    if (ptsText) ptsText.textContent = currentLang === 'ckb' ? 'خەڵاتی پاککردنەوە: ٢٥٠ خاڵ' : 'Clean Reward: 250 Eco-Points';
    if (scanBox) { scanBox.style.top = '25%'; scanBox.style.left = '15%'; scanBox.style.width = '70%'; }
  }
}

/* ==========================================================================
   ROLE PORTAL SYSTEM CONTROLLER
   ========================================================================== */

function openRoleModal() {
  document.getElementById('roleModalOverlay').classList.add('active');
}

function closeRoleModal() {
  document.getElementById('roleModalOverlay').classList.remove('active');
}

function switchRole(role) {
  state.currentUser.role = role;
  saveState();
  closeRoleModal();

  const labelEl = document.getElementById('currentRoleLabel');
  if (labelEl) {
    const roleMap = {
      citizen: translations[currentLang].role_citizen,
      business: translations[currentLang].role_business,
      recycler: translations[currentLang].role_recycler,
      municipality: translations[currentLang].role_municipality
    };
    labelEl.textContent = roleMap[role] || role;
  }

  openRoleTab(role);
  showNotification(`Switched active account role to ${role.toUpperCase()}`);
}

function openRoleTab(role) {
  document.querySelectorAll('.role-tab-btn').forEach(btn => btn.classList.remove('active'));
  document.querySelectorAll('.role-panel').forEach(panel => panel.classList.remove('active'));

  const activeBtn = document.getElementById(`tab-${role}`);
  const activePanel = document.getElementById(`panel-${role}`);

  if (activeBtn) activeBtn.classList.add('active');
  if (activePanel) activePanel.classList.add('active');

  renderAllPortals();
}

function renderAllPortals() {
  renderBusinessPortal();
  renderRecyclerPortal();
  renderMunicipalityPortal();
  renderUnifiedLedger();
}

/* ==========================================================================
   1. BUSINESS PORTAL CONTROLLER
   ========================================================================== */

function renderBusinessPortal() {
  const bizId = state.currentUser.id;
  const bizBins = state.bins.filter(b => b.businessId === bizId || state.currentUser.role !== 'business');

  // Compute Business Metrics
  const bizMetricBins = document.getElementById('bizMetricBins');
  const bizMetricOpenReq = document.getElementById('bizMetricOpenReq');
  const bizMetricWeight = document.getElementById('bizMetricWeight');
  const bizMetricPoints = document.getElementById('bizMetricPoints');

  const openReqs = state.collectionRequests.filter(r => (r.businessId === bizId || state.currentUser.role !== 'business') && (r.status === 'requested' || r.status === 'accepted'));
  const completedReqs = state.collectionRequests.filter(r => (r.businessId === bizId || state.currentUser.role !== 'business') && r.status === 'collected');

  const totalWeightKg = completedReqs.reduce((sum, r) => sum + (r.verifiedWeightKg || 0), 0);
  const totalPoints = completedReqs.reduce((sum, r) => sum + (r.pointsAwarded || 0), 0);

  if (bizMetricBins) bizMetricBins.textContent = bizBins.length;
  if (bizMetricOpenReq) bizMetricOpenReq.textContent = openReqs.length;
  if (bizMetricWeight) bizMetricWeight.textContent = `${totalWeightKg.toFixed(1)} kg`;
  if (bizMetricPoints) bizMetricPoints.textContent = `${totalPoints} Pts`;

  // Render Bins Grid
  const binsGrid = document.getElementById('bizBinsGrid');
  if (binsGrid) {
    if (bizBins.length === 0) {
      binsGrid.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: var(--text-muted); padding: 2rem;">No registered recycling bins found. Click <strong>Register New Bin</strong> to add one.</p>`;
    } else {
      binsGrid.innerHTML = bizBins.map(bin => `
        <div class="bin-card">
          <div class="bin-card-header">
            <span class="bin-id-badge">${bin.id}</span>
            <span class="bin-material-pill mat-${bin.material}">${bin.material}</span>
          </div>
          <div class="bin-card-body">
            <div class="bin-location-name">${bin.locationName}</div>
            <div class="bin-meta">
              <span><i class="fas fa-map-marker-alt"></i> ${bin.district}</span>
              <span><i class="fas fa-store"></i> ${bin.owner}</span>
              <span><i class="fas fa-calendar-alt"></i> Registered: ${bin.createdAt}</span>
            </div>
          </div>
          <div class="bin-card-footer">
            <span class="status-pill status-${bin.status}">${bin.status}</span>
            <button class="btn btn-secondary" onclick="openQrModal('${bin.id}')" style="padding: 0.35rem 0.75rem; font-size: 0.8rem; margin-left: auto;">
              <i class="fas fa-qrcode"></i> View QR
            </button>
          </div>
        </div>
      `).join('');
    }
  }

  // Render Requests Table
  const tableBody = document.getElementById('bizRequestsTableBody');
  if (tableBody) {
    const bizRequests = state.collectionRequests.filter(r => r.businessId === bizId || state.currentUser.role !== 'business');
    if (bizRequests.length === 0) {
      tableBody.innerHTML = `<tr><td colspan="9" style="text-align: center; color: var(--text-muted); padding: 1.5rem;">No collection requests submitted yet.</td></tr>`;
    } else {
      tableBody.innerHTML = bizRequests.map(req => `
        <tr>
          <td><strong>${req.id}</strong></td>
          <td><span style="font-family: monospace; font-weight:700;">${req.binId}</span></td>
          <td><span class="bin-material-pill mat-${req.material}">${req.material}</span></td>
          <td>${req.aiItemCount ? `${req.aiItemCount} Items` : 'N/A'}</td>
          <td><span class="status-pill status-${req.status}">${req.status}</span></td>
          <td>${req.assignedRecyclerName || '<em>Unassigned</em>'}</td>
          <td><strong>${req.verifiedWeightKg ? `${req.verifiedWeightKg} kg` : '-'}</strong></td>
          <td><strong style="color: var(--primary-green);">${req.pointsAwarded ? `+${req.pointsAwarded} Pts` : '-'}</strong></td>
          <td><small>${req.requestedAt}</small></td>
        </tr>
      `).join('');
    }
  }
}

/* Bin Registration Modals */
function openRegisterBinModal() {
  if (state.currentUser.role !== 'business' && state.currentUser.role !== 'municipality') {
    showNotification("Permission Denied: Only Business accounts can register new bins.", "error");
    return;
  }
  document.getElementById('registerBinModalOverlay').classList.add('active');
}

function closeRegisterBinModal() {
  document.getElementById('registerBinModalOverlay').classList.remove('active');
}

function handleRegisterBin(e) {
  e.preventDefault();
  const owner = document.getElementById('binOwnerInput').value || state.currentUser.name;
  const locationName = document.getElementById('binLocationInput').value;
  const district = document.getElementById('binDistrictSelect').value;
  const material = document.getElementById('binMaterialSelect').value;
  const lat = parseFloat(document.getElementById('binLatInput').value) || 35.5571;
  const lng = parseFloat(document.getElementById('binLngInput').value) || 45.4352;

  const nextNum = state.bins.length + 1;
  const binId = `GL-BIN-${String(nextNum).padStart(4, '0')}`;

  const newBin = {
    id: binId,
    qrCode: binId,
    owner: owner,
    businessId: state.currentUser.id,
    locationName: locationName,
    lat: lat,
    lng: lng,
    district: district,
    material: material,
    status: 'normal',
    createdAt: new Date().toISOString().split('T')[0]
  };

  state.bins.push(newBin);
  saveState();
  closeRegisterBinModal();
  renderAllPortals();
  showNotification(`Successfully registered bin ${binId} with QR code!`);
  openQrModal(binId);
}

/* Report Full Bin Modal */
function openReportFullModal() {
  if (state.currentUser.role !== 'business' && state.currentUser.role !== 'municipality') {
    showNotification("Permission Denied: Only Business accounts can report full bins.", "error");
    return;
  }

  const selectEl = document.getElementById('reportBinSelect');
  const bizBins = state.bins.filter(b => b.businessId === state.currentUser.id || state.currentUser.role === 'municipality');

  if (bizBins.length === 0) {
    showNotification("Please register a recycling bin first before reporting full.", "warning");
    openRegisterBinModal();
    return;
  }

  selectEl.innerHTML = bizBins.map(b => `<option value="${b.id}">${b.id} - ${b.locationName} (${b.material}) [Status: ${b.status}]</option>`).join('');
  document.getElementById('reportFullModalOverlay').classList.add('active');
}

function closeReportFullModal() {
  document.getElementById('reportFullModalOverlay').classList.remove('active');
}

function previewBinPhoto(e) {
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function(evt) {
      document.getElementById('binPhotoImg').src = evt.target.result;
    };
    reader.readAsDataURL(file);
  }
}

function handleReportFull(e) {
  e.preventDefault();
  const binId = document.getElementById('reportBinSelect').value;
  const bin = state.bins.find(b => b.id === binId);

  if (!bin) return;

  // Validation: Check if there is ALREADY an open request for this bin (Requirement 3 & 9)
  const existingOpenReq = state.collectionRequests.find(r => r.binId === binId && (r.status === 'requested' || r.status === 'accepted'));

  if (existingOpenReq) {
    showNotification(`Duplicate Request Error: An open collection request (${existingOpenReq.id}) already exists for ${binId}!`, "error");
    return;
  }

  const reqNum = state.collectionRequests.length + 1001;
  const reqId = `REQ-${reqNum}`;

  const newReq = {
    id: reqId,
    binId: bin.id,
    businessName: bin.owner,
    businessId: bin.businessId,
    locationName: bin.locationName,
    lat: bin.lat,
    lng: bin.lng,
    district: bin.district,
    material: bin.material,
    status: 'requested',
    photo: 'assets/images/ai_yolo_demo.png',
    aiItemCount: Math.floor(Math.random() * 40) + 20,
    requestedAt: new Date().toISOString().replace('T', ' ').substring(0, 16),
    assignedRecyclerId: null,
    assignedRecyclerName: null,
    verifiedWeightKg: null,
    pointsAwarded: null,
    collectedAt: null,
    flagged: false
  };

  bin.status = 'requested';
  state.collectionRequests.push(newReq);
  saveState();
  closeReportFullModal();
  renderAllPortals();
  showNotification(`Full bin reported! Collection Request ${reqId} broadcasted to Recyclers.`);
}

/* QR Modal Viewer */
function openQrModal(binId) {
  const bin = state.bins.find(b => b.id === binId);
  if (!bin) return;

  document.getElementById('qrModalOwner').textContent = bin.owner;
  document.getElementById('qrModalLoc').textContent = `${bin.locationName} (${bin.district})`;
  document.getElementById('qrModalText').textContent = bin.qrCode;
  document.getElementById('qrModalOverlay').classList.add('active');
}

function closeQrModal() {
  document.getElementById('qrModalOverlay').classList.remove('active');
}

/* ==========================================================================
   2. RECYCLER TERMINAL CONTROLLER
   ========================================================================== */

let activeSelectedReqId = null;

function renderRecyclerPortal() {
  const filterMat = document.getElementById('recFilterMaterial') ? document.getElementById('recFilterMaterial').value : 'all';

  let requests = state.collectionRequests;
  if (filterMat !== 'all') {
    requests = requests.filter(r => r.material === filterMat);
  }

  const availableReqs = requests.filter(r => r.status === 'requested');
  const acceptedReqs = requests.filter(r => r.status === 'accepted' && (r.assignedRecyclerId === 'rec-001' || state.currentUser.role !== 'recycler'));
  const completedReqs = state.collectionRequests.filter(r => r.status === 'collected');

  const totalWeight = completedReqs.reduce((sum, r) => sum + (r.verifiedWeightKg || 0), 0);

  document.getElementById('recMetricAvailable').textContent = availableReqs.length;
  document.getElementById('recMetricAccepted').textContent = acceptedReqs.length;
  document.getElementById('recMetricWeight').textContent = `${totalWeight.toFixed(1)} kg`;

  // Render Map Pins
  const mapViewBox = document.getElementById('recyclerMapView');
  if (mapViewBox) {
    mapViewBox.innerHTML = '<div class="map-grid-overlay"></div>';
    state.collectionRequests.forEach(req => {
      // Map mock positioning based on Lat/Lng
      const topPct = Math.max(15, Math.min(85, ((35.60 - req.lat) / 0.08) * 100));
      const leftPct = Math.max(15, Math.min(85, ((req.lng - 45.35) / 0.15) * 100));

      const pinColor = req.status === 'requested' ? '#FF9800' : (req.status === 'accepted' ? '#2196F3' : '#4CAF50');
      const pinIcon = req.status === 'requested' ? 'fa-bell' : (req.status === 'accepted' ? 'fa-truck' : 'fa-check');

      const pin = document.createElement('div');
      pin.className = 'map-pin';
      pin.style.top = `${topPct}%`;
      pin.style.left = `${leftPct}%`;
      pin.style.background = pinColor;
      pin.title = `${req.binId} - ${req.locationName} (${req.status})`;
      pin.onclick = () => selectRequestForTerminal(req.id);
      pin.innerHTML = `<i class="fas ${pinIcon}"></i><span class="map-pin-label">${req.binId}</span>`;
      mapViewBox.appendChild(pin);
    });
  }

  // Render Requests Queue List
  const queueList = document.getElementById('recyclerRequestsList');
  if (queueList) {
    if (requests.length === 0) {
      queueList.innerHTML = `<p style="color: var(--text-muted); text-align: center; padding: 1rem;">No collection requests match selected filters.</p>`;
    } else {
      queueList.innerHTML = requests.map(req => `
        <div style="background: var(--card-bg); border: 1px solid var(--card-border); padding: 0.85rem; border-radius: 12px; display: flex; align-items: center; justify-content: space-between;">
          <div>
            <div style="display: flex; align-items: center; gap: 0.5rem;">
              <strong style="font-family: monospace; color: var(--primary-green);">${req.binId}</strong>
              <span class="bin-material-pill mat-${req.material}">${req.material}</span>
              <span class="status-pill status-${req.status}">${req.status}</span>
            </div>
            <div style="font-weight: 700; font-size: 0.9rem; margin-top: 0.2rem;">${req.businessName}</div>
            <div style="font-size: 0.8rem; color: var(--text-muted);">${req.locationName} (${req.district})</div>
          </div>
          <div>
            ${req.status === 'requested' ? `
              <button class="btn btn-primary" onclick="acceptRequest('${req.id}')" style="padding: 0.35rem 0.75rem; font-size: 0.8rem;">
                <i class="fas fa-handshake"></i> Accept
              </button>
            ` : (req.status === 'accepted' ? `
              <button class="btn btn-secondary" onclick="selectRequestForTerminal('${req.id}')" style="padding: 0.35rem 0.75rem; font-size: 0.8rem;">
                <i class="fas fa-qrcode"></i> Verify
              </button>
            ` : `<span style="color: var(--primary-green); font-weight:800; font-size:0.85rem;"><i class="fas fa-check"></i> Done</span>`)}
          </div>
        </div>
      `).join('');
    }
  }

  // Render Completed History Table
  const recHistoryTable = document.getElementById('recyclerHistoryTableBody');
  if (recHistoryTable) {
    if (completedReqs.length === 0) {
      recHistoryTable.innerHTML = `<tr><td colspan="8" style="text-align: center; color: var(--text-muted); padding: 1.5rem;">No completed collections logged yet.</td></tr>`;
    } else {
      recHistoryTable.innerHTML = completedReqs.map(req => `
        <tr>
          <td><strong>${req.id}</strong></td>
          <td><span style="font-family: monospace; font-weight:700;">${req.binId}</span></td>
          <td>${req.businessName}</td>
          <td>${req.district}</td>
          <td><span class="bin-material-pill mat-${req.material}">${req.material}</span></td>
          <td><strong>${req.verifiedWeightKg} kg</strong></td>
          <td><strong style="color: var(--primary-green);">+${req.pointsAwarded} Pts</strong></td>
          <td><small>${req.collectedAt}</small></td>
        </tr>
      `).join('');
    }
  }
}

function acceptRequest(reqId) {
  if (state.currentUser.role !== 'recycler' && state.currentUser.role !== 'municipality') {
    showNotification("Permission Denied: Only Recycler accounts can accept collection requests.", "error");
    return;
  }

  const req = state.collectionRequests.find(r => r.id === reqId);
  if (!req) return;

  if (req.status !== 'requested') {
    showNotification(`Request ${reqId} cannot be accepted as it is currently '${req.status}'.`, "warning");
    return;
  }

  req.status = 'accepted';
  req.assignedRecyclerId = 'rec-001';
  req.assignedRecyclerName = 'Slemani Clean Recycling Co.';

  const bin = state.bins.find(b => b.id === req.binId);
  if (bin) bin.status = 'accepted';

  saveState();
  renderAllPortals();
  selectRequestForTerminal(req.id);
  showNotification(`Request ${req.id} accepted! Proceeding to QR & GPS Verification.`);
}

function selectRequestForTerminal(reqId) {
  const req = state.collectionRequests.find(r => r.id === reqId);
  if (!req) return;

  activeSelectedReqId = req.id;

  document.getElementById('terminalPlaceholder').style.display = 'none';
  document.getElementById('verificationForm').style.display = 'block';

  document.getElementById('verifRequestId').value = req.id;
  document.getElementById('verifBinIdText').textContent = req.binId;
  document.getElementById('verifBizNameText').textContent = req.businessName;
  document.getElementById('verifLocText').textContent = `${req.locationName} (${req.district})`;

  document.getElementById('terminalStatusBadge').className = `status-pill status-${req.status}`;
  document.getElementById('terminalStatusBadge').textContent = req.status.toUpperCase();

  // Reset steps
  document.getElementById('scanQrInput').value = '';
  document.getElementById('gpsVerifiedInput').value = 'false';
  document.getElementById('gpsStatusText').innerHTML = `<span style="color: #FF9800;"><i class="fas fa-clock"></i> Radius Check Pending</span>`;
  document.getElementById('verifiedWeightInput').value = '';

  document.getElementById('stepChip1').className = 'step-chip completed';
  document.getElementById('stepChip2').className = 'step-chip active';
  document.getElementById('stepChip3').className = 'step-chip';
  document.getElementById('stepChip4').className = 'step-chip';
}

function autoFillScanQr() {
  if (!activeSelectedReqId) return;
  const req = state.collectionRequests.find(r => r.id === activeSelectedReqId);
  if (req) {
    document.getElementById('scanQrInput').value = req.binId;
    document.getElementById('stepChip2').className = 'step-chip completed';
    document.getElementById('stepChip3').className = 'step-chip active';
    showNotification(`Scanned QR Code: ${req.binId}`);
  }
}

function simulateGpsCheck() {
  if (!activeSelectedReqId) return;
  const req = state.collectionRequests.find(r => r.id === activeSelectedReqId);
  if (!req) return;

  // Simulate collector GPS reading within 18 meters
  const simulatedDistanceMeters = 18;

  if (simulatedDistanceMeters <= CONFIG.MAX_GPS_DISTANCE_METERS) {
    document.getElementById('gpsVerifiedInput').value = 'true';
    document.getElementById('gpsStatusText').innerHTML = `<span style="color: var(--primary-green);"><i class="fas fa-check-circle"></i> Verified: ${simulatedDistanceMeters}m away (&le; 50m radius)</span>`;
    document.getElementById('stepChip3').className = 'step-chip completed';
    document.getElementById('stepChip4').className = 'step-chip active';
    showNotification(`GPS Verification Success: Collector is within 18m of ${req.binId}`);
  } else {
    document.getElementById('gpsVerifiedInput').value = 'false';
    document.getElementById('gpsStatusText').innerHTML = `<span style="color: #f44336;"><i class="fas fa-times-circle"></i> Failed: Distance > 50m</span>`;
    showNotification(`GPS Error: Distance exceeds 50m limit!`, "error");
  }
}

function handleCompleteCollection(e) {
  e.preventDefault();
  const reqId = document.getElementById('verifRequestId').value;
  const req = state.collectionRequests.find(r => r.id === reqId);

  if (!req) return;

  // Validation 1: User Authorization (Requirement 4 & 9)
  if (state.currentUser.role !== 'recycler' && state.currentUser.role !== 'municipality') {
    showNotification("Unauthorized Error: Only authorized Recyclers can complete collections.", "error");
    return;
  }

  // Validation 2: QR Code Matching (Requirement 4 & 9)
  const scannedQr = document.getElementById('scanQrInput').value.trim();
  const bin = state.bins.find(b => b.id === req.binId);

  if (!bin || scannedQr.toUpperCase() !== bin.qrCode.toUpperCase()) {
    showNotification(`QR Mismatch Error: Scanned QR code '${scannedQr}' does NOT match bin ${req.binId}!`, "error");
    return;
  }

  // Validation 3: GPS Distance Radius Check (Requirement 4 & 9)
  const isGpsVerified = document.getElementById('gpsVerifiedInput').value === 'true';
  if (!isGpsVerified) {
    showNotification(`GPS Verification Error: Must verify that collector is within 50 metres of bin location before submitting.`, "error");
    return;
  }

  // Validation 4: Verified Weight Value Check (Requirement 4 & 9)
  const weightKg = parseFloat(document.getElementById('verifiedWeightInput').value);
  if (isNaN(weightKg) || weightKg <= 0) {
    showNotification("Validation Error: Verified weight must be a positive number in kilograms.", "error");
    return;
  }

  // Flag suspicious weight if > 500kg for Municipality Audit (Requirement 6 & 9)
  if (weightKg > 500) {
    const auditId = `AUD-${state.flaggedAudits.length + 802}`;
    state.flaggedAudits.push({
      id: auditId,
      sourceType: 'recycling_collection',
      entityName: req.businessName,
      submittedWeightKg: weightKg,
      reason: `Unusual heavy weight (${weightKg} kg > 500kg limit)`,
      timestamp: new Date().toISOString().replace('T', ' ').substring(0, 16),
      status: 'pending'
    });
    showNotification(`Warning: Weight of ${weightKg} kg flagged for Municipality Administrative Audit!`, "warning");
  }

  // Calculate Points (Requirement 8)
  const pointsAwarded = Math.round(weightKg * CONFIG.POINTS_PER_KG);
  const timestamp = new Date().toISOString().replace('T', ' ').substring(0, 16);

  req.status = 'collected';
  req.verifiedWeightKg = weightKg;
  req.pointsAwarded = pointsAwarded;
  req.collectedAt = timestamp;

  if (bin) bin.status = 'normal';

  // Append entry to Unified Point Ledger (Requirement 8)
  const txnId = `TXN-${state.ledger.length + 9003}`;
  state.ledger.push({
    id: txnId,
    userId: req.businessId,
    userName: req.businessName,
    role: 'business',
    source: 'recycling_collection',
    referenceId: req.id,
    weightKg: weightKg,
    points: pointsAwarded,
    status: 'awarded',
    timestamp: timestamp
  });

  saveState();
  renderAllPortals();
  showNotification(`Collection completed! ${weightKg} kg verified, +${pointsAwarded} points credited to ${req.businessName}.`);
}

/* ==========================================================================
   3. MUNICIPALITY PORTAL CONTROLLER
   ========================================================================== */

function renderMunicipalityPortal() {
  const completedReqs = state.collectionRequests.filter(r => r.status === 'collected');
  const totalWeightKg = completedReqs.reduce((sum, r) => sum + (r.verifiedWeightKg || 0), 0);
  const totalWeightTons = (totalWeightKg / 1000).toFixed(2);

  document.getElementById('muniTotalWeight').textContent = `${totalWeightTons} Tons (${totalWeightKg.toFixed(1)} kg)`;
  document.getElementById('muniTotalBins').textContent = state.bins.length;
  document.getElementById('muniFlaggedCount').textContent = state.flaggedAudits.filter(a => a.status === 'pending').length;

  // District Breakdown Table Calculation
  const districtsMap = {};
  ['Saholaka / Salim St', 'Sarchinar', 'Bakrajo', 'Raparin', 'Toy Malik', 'Goizha', 'Azadi'].forEach(d => {
    districtsMap[d] = { binsCount: 0, completedCount: 0, totalWeightKg: 0, totalPoints: 0 };
  });

  state.bins.forEach(b => {
    if (districtsMap[b.district]) districtsMap[b.district].binsCount++;
  });

  completedReqs.forEach(r => {
    if (districtsMap[r.district]) {
      districtsMap[r.district].completedCount++;
      districtsMap[r.district].totalWeightKg += (r.verifiedWeightKg || 0);
      districtsMap[r.district].totalPoints += (r.pointsAwarded || 0);
    }
  });

  const muniDistrictTable = document.getElementById('muniDistrictTableBody');
  if (muniDistrictTable) {
    muniDistrictTable.innerHTML = Object.keys(districtsMap).map(dName => {
      const data = districtsMap[dName];
      const statusBadge = data.totalWeightKg > 50 ? '<span class="status-pill status-collected">High Recycling</span>' : '<span class="status-pill status-normal">Active</span>';
      return `
        <tr>
          <td><strong>${dName}</strong></td>
          <td>${data.binsCount} Bins</td>
          <td>${data.completedCount} Collections</td>
          <td><strong>${data.totalWeightKg.toFixed(1)} kg</strong></td>
          <td><strong style="color: var(--primary-green);">${data.totalPoints} Pts</strong></td>
          <td>${statusBadge}</td>
        </tr>
      `;
    }).join('');
  }

  // Flagged Audits Table
  const muniFlaggedTable = document.getElementById('muniFlaggedTableBody');
  if (muniFlaggedTable) {
    const pendingAudits = state.flaggedAudits.filter(a => a.status === 'pending');
    if (pendingAudits.length === 0) {
      muniFlaggedTable.innerHTML = `<tr><td colspan="7" style="text-align: center; color: var(--text-muted); padding: 1.5rem;">No suspicious weight submissions pending audit.</td></tr>`;
    } else {
      muniFlaggedTable.innerHTML = pendingAudits.map(audit => `
        <tr>
          <td><strong>${audit.id}</strong></td>
          <td><span class="status-pill status-flagged">${audit.sourceType}</span></td>
          <td><strong>${audit.entityName}</strong></td>
          <td><strong>${audit.submittedWeightKg} kg</strong></td>
          <td><span style="color:#d32f2f; font-weight:700;">${audit.reason}</span></td>
          <td><small>${audit.timestamp}</small></td>
          <td>
            <div style="display: flex; gap: 0.4rem;">
              <button class="btn btn-primary" onclick="approveAudit('${audit.id}')" style="padding: 0.25rem 0.6rem; font-size: 0.75rem;">Approve</button>
              <button class="btn btn-secondary" onclick="rejectAudit('${audit.id}')" style="padding: 0.25rem 0.6rem; font-size: 0.75rem; color:#f44336;">Reject</button>
            </div>
          </td>
        </tr>
      `).join('');
    }
  }
}

function approveAudit(auditId) {
  const audit = state.flaggedAudits.find(a => a.id === auditId);
  if (audit) {
    audit.status = 'approved';
    saveState();
    renderMunicipalityPortal();
    showNotification(`Audit ${auditId} approved by Municipality.`);
  }
}

function rejectAudit(auditId) {
  const audit = state.flaggedAudits.find(a => a.id === auditId);
  if (audit) {
    audit.status = 'rejected';
    saveState();
    renderMunicipalityPortal();
    showNotification(`Audit ${auditId} rejected and points revoked.`, "warning");
  }
}

/* ==========================================================================
   4. UNIFIED LEDGER CONTROLLER
   ========================================================================== */

function renderUnifiedLedger() {
  const ledgerTable = document.getElementById('unifiedLedgerTableBody');
  if (ledgerTable) {
    if (state.ledger.length === 0) {
      ledgerTable.innerHTML = `<tr><td colspan="9" style="text-align: center; color: var(--text-muted); padding: 1.5rem;">No point transactions recorded in ledger.</td></tr>`;
    } else {
      ledgerTable.innerHTML = state.ledger.slice().reverse().map(txn => `
        <tr>
          <td><strong>${txn.id}</strong></td>
          <td><strong>${txn.userName}</strong></td>
          <td><span class="status-pill status-${txn.role === 'business' ? 'accepted' : 'normal'}">${txn.role}</span></td>
          <td><code>${txn.source}</code></td>
          <td><span style="font-family: monospace;">${txn.referenceId}</span></td>
          <td>${txn.weightKg} kg</td>
          <td><strong style="color: var(--primary-green);">+${txn.points} Pts</strong></td>
          <td><span class="status-pill status-collected">${txn.status}</span></td>
          <td><small>${txn.timestamp}</small></td>
        </tr>
      `).join('');
    }
  }
}

/* ==========================================================================
   Photo Showcase Slideshow Controller (24 Converted Field Evidence Photos)
   ========================================================================== */

const showcasePhotos = [
  'assets/example_photos/img_9711.jpg',
  'assets/example_photos/img_9712.jpg',
  'assets/example_photos/img_9713.jpg',
  'assets/example_photos/img_9714.jpg',
  'assets/example_photos/img_9715.jpg',
  'assets/example_photos/img_9717.jpg',
  'assets/example_photos/img_9718.jpg',
  'assets/example_photos/img_9720.jpg',
  'assets/example_photos/img_9721.jpg',
  'assets/example_photos/img_9723.jpg',
  'assets/example_photos/img_9724.jpg',
  'assets/example_photos/img_9727.jpg',
  'assets/example_photos/img_9728.jpg',
  'assets/example_photos/img_9729.jpg',
  'assets/example_photos/img_9730.jpg',
  'assets/example_photos/img_9731.jpg',
  'assets/example_photos/img_9732.jpg',
  'assets/example_photos/img_9733.jpg',
  'assets/example_photos/img_9734.jpg',
  'assets/example_photos/img_9736.jpg',
  'assets/example_photos/img_9738.jpg',
  'assets/example_photos/img_9740.jpg',
  'assets/example_photos/img_9742.jpg',
  'assets/example_photos/whatsapp_image_2026-10-09_at_11.17.57.jpg'
];

let currentSlideIndex = 0;
let isSlideshowPlaying = true;
let slideTimer = null;
let slideProgressInterval = null;
let progressVal = 0;
const SLIDE_DURATION_MS = 3500;

function initPhotoSlideshow() {
  const container = document.getElementById('photoSlidesContainer');
  const dotsWrapper = document.getElementById('photoDotsWrapper');

  if (!container) return;

  container.innerHTML = showcasePhotos.map((src, i) => `
    <div class="showcase-slide ${i === 0 ? 'active' : ''}" id="slide-${i}">
      <img src="${src}" alt="Slemani Field Evidence Photo ${i + 1}" class="showcase-slide-img" />
    </div>
  `).join('');

  if (dotsWrapper) {
    dotsWrapper.innerHTML = showcasePhotos.map((_, i) => `
      <div class="photo-dot ${i === 0 ? 'active' : ''}" id="dot-${i}" onclick="goToSlide(${i})" title="Photo ${i + 1}"></div>
    `).join('');
  }

  updateCounterTag();
  startSlideshowTimer();
}

function goToSlide(index) {
  const total = showcasePhotos.length;
  currentSlideIndex = (index + total) % total;

  document.querySelectorAll('.showcase-slide').forEach((slide, i) => {
    slide.classList.toggle('active', i === currentSlideIndex);
  });

  document.querySelectorAll('.photo-dot').forEach((dot, i) => {
    dot.classList.toggle('active', i === currentSlideIndex);
  });

  const activeDot = document.getElementById(`dot-${currentSlideIndex}`);
  if (activeDot && activeDot.parentElement) {
    activeDot.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
  }

  updateCounterTag();

  if (isSlideshowPlaying) {
    resetSlideshowTimer();
  }
}

function nextSlide() {
  goToSlide(currentSlideIndex + 1);
}

function prevSlide() {
  goToSlide(currentSlideIndex - 1);
}

function updateCounterTag() {
  const counterTag = document.getElementById('photoCounterTag');
  if (counterTag) {
    counterTag.textContent = `${currentSlideIndex + 1} / ${showcasePhotos.length}`;
  }
}

function toggleSlideshowPlay() {
  isSlideshowPlaying = !isSlideshowPlaying;
  const playIcon = document.getElementById('photoPlayIcon');

  if (isSlideshowPlaying) {
    if (playIcon) playIcon.className = 'fas fa-pause';
    startSlideshowTimer();
    showNotification('Slideshow auto-playback resumed');
  } else {
    if (playIcon) playIcon.className = 'fas fa-play';
    stopSlideshowTimer();
    showNotification('Slideshow paused');
  }
}

function startSlideshowTimer() {
  stopSlideshowTimer();
  progressVal = 0;
  const progressFill = document.getElementById('slideProgressFill');

  const stepMs = 50;
  slideProgressInterval = setInterval(() => {
    progressVal += (stepMs / SLIDE_DURATION_MS) * 100;
    if (progressFill) progressFill.style.width = `${Math.min(100, progressVal)}%`;
  }, stepMs);

  slideTimer = setTimeout(() => {
    nextSlide();
  }, SLIDE_DURATION_MS);
}

function stopSlideshowTimer() {
  if (slideTimer) clearTimeout(slideTimer);
  if (slideProgressInterval) clearInterval(slideProgressInterval);
  const progressFill = document.getElementById('slideProgressFill');
  if (progressFill) progressFill.style.width = '0%';
}

function resetSlideshowTimer() {
  startSlideshowTimer();
}

/* ==========================================================================
   Initial Setup & DOM Loaded
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  setLanguage('en');
  openRoleTab('business');
  initPhotoSlideshow();
});
