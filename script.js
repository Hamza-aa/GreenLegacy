/* ==========================================================================
   GreenLegacy Slemani - Interactive Logic & Bilingual Translation System
   Supports English (LTR) and Kurdish Sorani (RTL)
   ========================================================================== */

const translations = {
  en: {
    brand_name: "Slemani <span>GreenLegacy</span>",
    nav_cycle: "How It Works",
    nav_ai: "AI Verification",
    nav_league: "Eco-League",
    nav_dashboard: "Municipality",
    nav_download: "Download App",
    
    hero_badge: " Smart Environmental Platform for Slemani",
    hero_title: "Keeping <span class='highlight-green'>Slemani Clean</span> Through AI & Rewards",
    hero_subtitle: "GreenLegacy Slemani connects citizens with the municipality in a complete smart eco-cycle: Find & report polluted areas, let AI analyze waste, volunteer to clean, get multi-verified, earn rewards, and compete in the Eco-League.",
    
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
    stats_disclaimer: "These data are examples of what the app can do.",
    
    cycle_tag: "The Complete Eco-Cycle",
    cycle_title: "How GreenLegacy Works in <span>Simple Steps</span>",
    cycle_desc: "An intelligent, gamified platform turning city cleanup into a transparent community mission.",
    
    step1_title: "1. Report Pollution",
    step1_desc: "Citizens discover polluted areas in Sulaymaniyah, take a photo through the app, and select their neighbourhood location.",
    
    step2_title: "2. AI YOLOv8 Analysis",
    step2_desc: "The system automatically scans the photo, detects waste items, estimates quantity, and assigns a pollution score from Level 1 to 5.",
    
    step3_title: "3. Volunteer & Clean",
    step3_desc: "Citizens volunteer to clean a reported spot. The app gives randomized verification instructions to follow during recording.",
    
    step4_title: "4. Multi-Verification",
    step4_desc: "Robust checks verify location, camera frames, QR information, before/after image comparison, and AI waste reduction.",
    
    step5_title: "5. Points & Rewards",
    step5_desc: "Verified cleanups earn points instantly. Anti-fraud rules keep points pending until fully validated.",
    
    step6_title: "6. Eco-League Competition",
    step6_desc: "Neighbourhoods in Sulaymaniyah compete on leaderboard rankings based on resident contributions!",
    
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
    cta_desc: "Our application will be available soon on iOS and Android!",
    
  },
  ckb: {
    brand_name: "سلێمانی<span> گرینلیگاسی </span>",
    nav_cycle: "چۆنیەتی کارکردن",
    nav_ai: "پشکنینی ژیریی دەستکرد",
    nav_league: "خولی ژینگە (Eco-League)",
    nav_dashboard: "داشبۆردی شارەوانی",
    nav_download: "داگرتنی بەرنامە",
    
    hero_badge: " پلاتفۆرمی ژینگەیی زیرەک بۆ سلێمانی",
    hero_title: "ڕاگرتنی <span class='highlight-green'>پاکی سلێمانی</span> بە ژیریی دەستکرد و خەڵات",
    hero_subtitle: "گرین‌لیگاسی سلیمانی هاووڵاتییان و شارەوانی لە خولێکی زیرەکی ژینگەییدا دەبەستێتەوە: دۆزینەوە و ڕاپۆرتکردنی زبڵ، پشکنینی ژیریی دەستکرد، بەبەخشین پاککردنەوە، پشکنینی فرەلایەن، بەدەستهێنانی خەڵات و کێبڕکێی گەڕەکەکان.",
    
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
    stats_disclaimer: "ئەم ئامارانە نموونەی کاراییەکانی بەرنامەکەن.",
    
    cycle_tag: "سوڕی تەواوی ژینگە",
    cycle_title: "گرین‌لیگاسی چۆن کاردەکات بە <span>هەنگاوی ئاسان</span>",
    cycle_desc: "پلاتفۆرمێکی زیرەک و یاری ئاسا کە پاککردنەوەی شار دەکاتە ئەرکێکی بەکۆمەڵ و ڕوون.",
    
    step1_title: "١. ڕاپۆرتکردنی زبڵ",
    step1_desc: "هاووڵاتی شوێنی زبڵ و پاشماوە لە سلێمانی دەدۆزێتەوە، وێنەی دەگرێت لە ڕێگەی بەرنامەکەوە و گەڕەکەکەی دیاری دەکات.",
    
    step2_title: "٢. پشکنینی YOLOv8 AI",
    step2_desc: "سیستەمەکە خۆکارانە وێنەکە دەپشکنێت، جۆری زبڵ، بڕەکەی دەستنیشان دەکات و ئاستی پیسیی لە ١ تا ٥ دیاری دەکات.",
    
    step3_title: "٣. بەبەخشین پاککردنەوە",
    step3_desc: "هاووڵاتی خۆبەخش دەبێت بۆ پاککردنەوەی شوێنەکە. بەرنامەکە ڕێنمایی هەڕەمەکی دەدات بۆ پشکنینی کاتی تۆمارکردن.",
    
    step4_title: "٤. پشکنینی فرەلایەن",
    step4_desc: "سیستەمەکە شوێن، فریمەکانی کامێرا، زانیاری QR، بەراوردی وێنەی پێش و پاش پاککردنەوە دەپشکنێت.",
    
    step5_title: "٥. خاڵ و خەڵاتەکان",
    step5_desc: "پاککردنەوەی پەسەندکراو ڕاستەوخۆ خاڵ بەدەست دەهێنێت. یاساکانی ڕێگری لە فێڵ خاڵەکان لە هەڵپەسێردراویدا دەهێڵنەوە تا پشتڕاستکردنەوە.",
    
    step6_title: "٦. کێبڕکێی Eco-League",
    step6_desc: "گەڕەکەکانی سلێمانی کێبڕکێ دەکەن لەسەر ڕیزبەندی باشترین گەڕەک لەسەر بنەمای بەشداری نیشتەجێبووان!",
    
    ai_tag: "ژیریی دەستکردی YOLOv8",
    ai_title: "دۆزینەوەی زبڵ بە AI و <span>سیستەمی ڕێگری لە فێڵ</span>",
    ai_desc: "مۆدێلی تایبەتی YOLOv8 ڕاستەوخۆ ئاستی پیسیی هەڵدەسەنگێنێت و رێگری لە ڕاپۆرتی دووبارە و ساختە دەکات.",
    ai_level: "ئاستی پیسی: ٤ / ٥ (زبڵی زۆر)",
    ai_pts: "خەڵاتی پاککردنەوە: ١٥٠ خاڵ",
    ai_verified: "پشکنینی فرەلایەنی AI چالاکە",
    sample_park: "پارکی سرچنار",
    sample_street: "شەقامی سەهۆڵەکە",
    sample_mountain: "چیای گۆیژە",

    before_after_tag: "کاریگەریی ڕاستەقینە",
    before_after_title: "بەڵگەی <span>پێش و پاش پاککردنەوە</span>",
    before_after_desc: "دەستکەوتی هەر پاککردنەوەیەک بە بەراوردی وێنەی AI و شوێنی جوگرافی پاشەکەوت دەکرێت بۆ ڕوونی تەواو.",
    
    league_tag: "کێبڕکێی کۆمەڵگە",
    league_title: "خولی ژینگە: <span>کێبڕکێی گەڕەکەکان</span>",
    league_desc: "گۆڕینی پاکیی شار بۆ کێبڕکێیەکی دۆستانە لە نێوان گەڕەکەکانی سلێمانی.",
    top_districts: "باشترین گەڕەکەکانی سلێمانی",
    top_citizens: "چالاکترین هاووڵاتییان",
    
    dash_tag: "پلاتفۆرمی دامەزراوەکان",
    dash_title: "داشبۆردی <span>شارەوانیی سلێمانی</span>",
    dash_desc: "بەرپرسانی شارەوانی دەسەڵاتدار دەکات بە نەخشەی ڕاستەوخۆ، ئاستی تەمەنی زبڵ، پێداچوونەوەی بەڵگەکان و ئاماری ژینگەیی.",
    dash_feat1_title: "نەخشەی گەرمیی ڕاستەوخۆ",
    dash_feat1_desc: "چاوەدێری شوێنە ڕاپۆرتکراوەکان بەپێی ئاستی پیسی (١-٥) و تەمەن بکە لە سەرجەم کەرتەکاندا.",
    dash_feat2_title: "پشکنینی بەڵگەکان",
    dash_feat2_desc: "وێنەکانی پێش و پاش پاککردنەوە بەراورد بکە و پێداچوونەوە بۆ داواکارییە گوماناوییەکان بکە.",
    dash_feat3_title: "ئاماری کاریگەری",
    dash_feat3_desc: "بەدواداچوون بۆ کۆی شوێنە ڕاپۆرتکراوەکان، پاککراوەکان و تەنی زبڵی لادراو بکە.",

    cta_title: "ئامادەیت بۆ گۆڕینی سلێمانی؟",
    cta_desc: "گرینلیگاسی سلیمانی لە ئایفۆن و ئەندرۆید بەردەست دەبێت!",
  }
};

let currentLang = 'en';

// Change Language (English <-> Kurdish Sorani)
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

  // Update DOM elements with data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });
}

function toggleLanguage() {
  const newLang = currentLang === 'en' ? 'ckb' : 'en';
  setLanguage(newLang);
}

// Theme Toggle (Dark / Light)
function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', newTheme);
  
  const themeIcon = document.getElementById('themeIcon');
  if (themeIcon) {
    themeIcon.className = newTheme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
  }
}

// Toast notification for Download action
function showDownloadToast() {
  const msg = translations[currentLang].toast_download;
  const toast = document.createElement('div');
  toast.className = 'download-toast';
  toast.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    background: #2d6a4f;
    color: white;
    padding: 1rem 1.5rem;
    border-radius: 12px;
    box-shadow: 0 10px 30px rgba(45,106,79,0.4);
    font-weight: 700;
    z-index: 9999;
    transition: all 0.3s ease;
  `;
  if (currentLang === 'ckb') {
    toast.style.right = 'auto';
    toast.style.left = '30px';
  }
  toast.innerHTML = `<i class="fas fa-check-circle"></i> ${msg}`;
  document.body.appendChild(toast);
  
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

// AI Interactive Chip Switching
function selectAiSample(spot) {
  document.querySelectorAll('.sample-chip').forEach(chip => chip.classList.remove('active'));
  event.target.classList.add('active');

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

// Initial Setup
document.addEventListener('DOMContentLoaded', () => {
  setLanguage('en');

  // Video Scroll Autoplay Setup
  const showcaseVideo = document.getElementById('showcaseVideo');
  const videoPlayBtn = document.getElementById('videoPlayBtn');
  const videoPlayIcon = document.getElementById('videoPlayIcon');
  const videoSection = document.getElementById('video-showcase');

  if (showcaseVideo && videoSection) {
    showcaseVideo.muted = true; // Always mute audio

    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.2 // Starts when 20% of section is scrolled into view
    };

    const videoObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          showcaseVideo.currentTime = 0; // Reset to beginning whenever arriving at the video
          videoSection.classList.add('is-active');
          const playPromise = showcaseVideo.play();
          if (playPromise !== undefined) {
            playPromise.then(() => {
              if (videoPlayIcon) videoPlayIcon.className = 'fas fa-pause';
            }).catch(err => {
              console.log("Autoplay paused by browser:", err);
            });
          }
        } else {
          videoSection.classList.remove('is-active');
          showcaseVideo.pause();
          showcaseVideo.currentTime = 0; // Reset video position when leaving
          if (videoPlayIcon) videoPlayIcon.className = 'fas fa-play';
        }
      });
    }, observerOptions);

    videoObserver.observe(videoSection);

    if (videoPlayBtn) {
      videoPlayBtn.addEventListener('click', () => {
        if (showcaseVideo.paused) {
          showcaseVideo.play();
          if (videoPlayIcon) videoPlayIcon.className = 'fas fa-pause';
        } else {
          showcaseVideo.pause();
          if (videoPlayIcon) videoPlayIcon.className = 'fas fa-play';
        }
      });
    }
  }
});
