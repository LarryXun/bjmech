"use strict";

const products = [
  {
    image: null,
    kicker: { zh: "机床配套产品", en: "Machine-tool component" },
    title: { zh: "车床刻度盘", en: "Lathe graduated dial" },
    summary: {
      zh: "用于车床进给、定位与读数等部位，外形尺寸、安装结构、分度及表面处理可按技术要求定制。",
      en: "For lathe feed, positioning and readout applications, with dimensions, mounting details, graduations and finish defined by technical requirements."
    },
    specs: [
      [{ zh: "应用", en: "Application" }, { zh: "车床配套", en: "Lathe equipment" }],
      [{ zh: "加工依据", en: "Input" }, { zh: "确认后的技术文件", en: "Confirmed technical documents" }],
      [{ zh: "确认内容", en: "Review items" }, { zh: "尺寸、刻度、文字、表面处理", en: "Dimensions, graduations, copy and finish" }]
    ]
  },
  {
    image: null,
    kicker: { zh: "机床配套产品", en: "Machine-tool component" },
    title: { zh: "磨床刻度盘", en: "Grinding-machine dial" },
    summary: {
      zh: "用于平面磨床、外圆磨床等设备的读数与调节部位，分度、安装结构和表面处理按技术要求确定。",
      en: "Graduated components for surface and cylindrical grinding equipment. Divisions, construction and finish follow the drawing confirmed by both parties."
    },
    specs: [
      [{ zh: "应用", en: "Application" }, { zh: "磨床配套", en: "Grinding equipment" }],
      [{ zh: "刻度", en: "Graduation" }, { zh: "按技术文件加工", en: "Defined by technical documents" }],
      [{ zh: "定制", en: "Custom work" }, { zh: "支持非标规格", en: "Non-standard requirements welcome" }]
    ]
  },
  {
    image: null,
    kicker: { zh: "机床配套产品", en: "Machine-tool component" },
    title: { zh: "钻床刻度盘", en: "Drilling-machine dial" },
    summary: {
      zh: "用于钻床进给、主轴等部位的读数显示，可结合安装结构与读数方向定制尺寸、分度、数字及方向标识。",
      en: "For graduated readouts on drilling feeds and spindles. Manufacturing information is reviewed against mounting and reading requirements."
    },
    specs: [
      [{ zh: "应用", en: "Application" }, { zh: "钻床配套", en: "Drilling equipment" }],
      [{ zh: "安装", en: "Mounting" }, { zh: "依据设备结构确认", en: "Reviewed to suit the assembly" }],
      [{ zh: "内容", en: "Marking" }, { zh: "刻度、数字及方向标识", en: "Graduations, numerals and direction marks" }]
    ]
  },
  {
    image: null,
    kicker: { zh: "机床配套产品", en: "Machine-tool component" },
    title: { zh: "铣床刻度盘", en: "Milling-machine dial" },
    summary: {
      zh: "面向铣床进给与位置调节应用，可依据安装轴向、读数方式及设备空间确定结构规格。",
      en: "For milling feed and positioning adjustments. Axis, readout arrangement and structural dimensions can be customised."
    },
    specs: [
      [{ zh: "应用", en: "Application" }, { zh: "铣床配套", en: "Milling equipment" }],
      [{ zh: "结构", en: "Construction" }, { zh: "按设备安装空间确认", en: "Reviewed to the available mounting space" }],
      [{ zh: "表面", en: "Finish" }, { zh: "结合使用环境确认", en: "Agreed for the operating environment" }]
    ]
  },
  {
    image: null,
    kicker: { zh: "机床配套产品", en: "Machine-tool component" },
    title: { zh: "镗床刻度盘", en: "Boring-machine dial" },
    summary: {
      zh: "用于镗床坐标、进给与定位等部位，可依据设备接口、安装空间及图纸要求定制。",
      en: "For graduated coordinate, feed and positioning applications on boring equipment. Specifications are confirmed against interfaces and drawings."
    },
    specs: [
      [{ zh: "应用", en: "Application" }, { zh: "镗床配套", en: "Boring equipment" }],
      [{ zh: "接口", en: "Interface" }, { zh: "按设备结构确认", en: "Reviewed against equipment construction" }],
      [{ zh: "交付", en: "Delivery" }, { zh: "以双方确认要求为准", en: "To mutually confirmed requirements" }]
    ]
  },
  {
    image: null,
    kicker: { zh: "定制金属部件", en: "Custom metal component" },
    title: { zh: "金属标尺", en: "Metal scales" },
    summary: {
      zh: "用于设备测量与位置指示，长度、截面、孔位、刻度排布及表面处理可按技术要求定制。",
      en: "Length, profile, mounting holes, graduation layout and finish can be reviewed for measuring and position-indication applications."
    },
    specs: [
      [{ zh: "形式", en: "Format" }, { zh: "直尺、条尺及非标结构", en: "Straight scales, strips and non-standard forms" }],
      [{ zh: "刻度", en: "Graduation" }, { zh: "按图纸内容加工", en: "Manufactured to drawing" }],
      [{ zh: "安装", en: "Mounting" }, { zh: "孔位及结构按装配要求确认", en: "Hole positions and construction reviewed as needed" }]
    ]
  },
  {
    image: "images/real-products/engraved-control-plates.jpg",
    kicker: { zh: "定制金属部件", en: "Custom metal component" },
    title: { zh: "设备标牌", en: "Equipment nameplates" },
    summary: {
      zh: "适用于机床及各类工业设备，可定制材质、版式、文字编号、安装孔位与表面效果。",
      en: "Metal nameplates for machine tools and industrial equipment, with material, layout, copy, mounting holes and finish reviewed to requirement."
    },
    specs: [
      [{ zh: "材料", en: "Material" }, { zh: "结合应用环境确认", en: "Agreed for the application" }],
      [{ zh: "内容", en: "Content" }, { zh: "文字、编号、线框及图形", en: "Copy, serials, borders and graphics" }],
      [{ zh: "版式", en: "Layout" }, { zh: "按技术文件制作", en: "Based on technical documents" }]
    ]
  }
];

products.push({
  image: "images/real-products/red-anodized-rings.jpg",
  kicker: { zh: "定制刻度件", en: "Custom graduated components" },
  title: { zh: "非标环形刻度件", en: "Custom graduated rings" },
  summary: { zh: "用于圆周读数与角度指示，直径、安装孔、刻度分布及表面处理可按图纸定制。", en: "For circular readouts and angle indication, with diameter, mounting holes, divisions and finish defined by the drawing." },
  specs: [
    [{ zh: "结构", en: "Construction" }, { zh: "环形、圆盘及定制结构", en: "Rings, discs and custom forms" }],
    [{ zh: "刻度", en: "Graduations" }, { zh: "分度、数字及方向标识", en: "Divisions, numerals and direction marks" }],
    [{ zh: "加工依据", en: "Manufacturing basis" }, { zh: "双方确认的技术文件", en: "Mutually confirmed technical documents" }]
  ]
});
products.push({
  image: 'images/real-products/workshop-graduated-ring.jpg',
  kicker: { zh: '刻度产品', en: 'Graduated components' },
  title: { zh: '机床刻度盘', en: 'Machine-tool graduated dials' },
  summary: { zh: '用于设备进给、定位与读数，刻度、数字、安装结构及表面处理可按技术要求定制。', en: 'Graduated components for equipment feed, positioning and readout. Markings, mounting details and finish are defined by technical requirements.' },
  specs: [
    [{ zh: '定制内容', en: 'Customisation' }, { zh: '尺寸、孔位、分度与标识', en: 'Dimensions, holes, divisions and markings' }],
    [{ zh: '加工依据', en: 'Manufacturing basis' }, { zh: '确认后的技术文件', en: 'Confirmed technical documents' }]
  ]
});

let currentLanguage = "zh";
let currentProductIndex = 0;
let mapInstance = null;
let mapInfoWindow = null;
let amapLoadAttempts = 0;
let amapLoading = false;
let amapRetryTimer = null;
let lastFocusedElement = null;

function locale() {
  return currentLanguage === "en" ? "en" : "zh";
}

function switchLang(language) {
  currentLanguage = language === "en" ? "en" : "zh";
  document.documentElement.lang = currentLanguage === "en" ? "en" : "zh-CN";
  document.querySelectorAll(".lang-option").forEach((button) => {
    button.classList.toggle("active", button.dataset.lang === currentLanguage);
    button.setAttribute("aria-pressed", String(button.dataset.lang === currentLanguage));
  });
  document.querySelectorAll("[data-placeholder-zh]").forEach((field) => {
    field.placeholder = field.dataset[`placeholder${currentLanguage === "en" ? "En" : "Zh"}`];
  });
  document.querySelectorAll("option[data-zh]").forEach((option) => {
    option.textContent = option.dataset[currentLanguage];
  });
  document.querySelectorAll("[data-alt-zh]").forEach((image) => {
    image.alt = image.dataset[currentLanguage === "en" ? "altEn" : "altZh"];
  });
  document.title = currentLanguage === "en"
    ? "BJMECH | Taixing Binjiang Machinery Technology Co., Ltd."
    : "泰兴市滨江机械科技有限公司 | BJMECH";
  document.querySelectorAll(".brand").forEach((brand) => {
    brand.setAttribute("aria-label", currentLanguage === "en" ? "BJMECH home" : "滨江机械首页");
  });
  document.querySelectorAll(".brand-symbol, .contact-brand-symbol").forEach((image) => {
    image.alt = currentLanguage === "en" ? "BJMECH symbol" : "滨江机械图形标识";
  });
  const map = document.getElementById("amapContainer");
  if (map) map.setAttribute("aria-label", currentLanguage === "en" ? "Map showing BJMECH in Binjiang Town, Taixing" : "泰兴市滨江机械科技有限公司位置地图");
  document.querySelector(".desktop-nav")?.setAttribute("aria-label", currentLanguage === "en" ? "Primary navigation" : "主导航");
  document.querySelector(".mobile-menu nav")?.setAttribute("aria-label", currentLanguage === "en" ? "Mobile navigation" : "移动端导航");
  document.querySelector(".language-switch")?.setAttribute("aria-label", currentLanguage === "en" ? "Language switch" : "语言切换");
  const zoomControls = document.getElementById("mapZoomControls");
  if (zoomControls) {
    zoomControls.setAttribute("aria-label", currentLanguage === "en" ? "Map zoom" : "地图缩放");
    zoomControls.children[0]?.setAttribute("aria-label", currentLanguage === "en" ? "Zoom map in" : "放大地图");
    zoomControls.children[1]?.setAttribute("aria-label", currentLanguage === "en" ? "Zoom map out" : "缩小地图");
  }
  const menu = document.getElementById("mobileMenu");
  const menuOpen = Boolean(menu?.classList.contains("open"));
  updateMenuToggleLabel(menuOpen);
  document.querySelectorAll(".modal-close").forEach((button) => {
    button.setAttribute("aria-label", currentLanguage === "en" ? "Close" : "关闭");
  });
  const actions = document.querySelector(".floating-actions");
  if (actions) actions.setAttribute("aria-label", currentLanguage === "en" ? "Quick contact" : "快捷联系");
  const actionLabels = currentLanguage === "en"
    ? ["Enquire", "Call", "Back to top"]
    : ["询价", "电话", "返回顶部"];
  document.querySelectorAll(".floating-actions button").forEach((button, index) => {
    const label = actionLabels[index];
    if (!label) return;
    button.title = label;
    button.setAttribute("aria-label", label);
    const hiddenLabel = button.querySelector(".sr-only");
    if (hiddenLabel) hiddenLabel.textContent = label;
  });
  if (document.getElementById("productModal").classList.contains("open")) renderProduct(currentProductIndex);
  const heroSelected = document.querySelector('[data-hero-src].active');
  if (heroSelected) document.getElementById('heroProductImage').alt = heroSelected.dataset[currentLanguage === 'en' ? 'heroLabelEn' : 'heroLabelZh'];
  updateEmailDraft();
  try { localStorage.setItem("bjmech-language", currentLanguage); } catch (_) {}
}

function updateMenuToggleLabel(open) {
  const toggle = document.getElementById("menuToggle");
  if (!toggle) return;
  toggle.setAttribute("aria-label", currentLanguage === "en"
    ? (open ? "Close menu" : "Open menu")
    : (open ? "关闭菜单" : "打开菜单"));
}

function toggleMobileMenu() {
  const menu = document.getElementById("mobileMenu");
  const toggle = document.getElementById("menuToggle");
  const open = !menu.classList.contains("open");
  menu.classList.toggle("open", open);
  menu.setAttribute("aria-hidden", String(!open));
  menu.inert = !open;
  toggle.setAttribute("aria-expanded", String(open));
  toggle.innerHTML = `<i class="ph ${open ? "ph-x" : "ph-list"}" aria-hidden="true"></i>`;
  updateMenuToggleLabel(open);
}

function closeMobileMenu() {
  const menu = document.getElementById("mobileMenu");
  const toggle = document.getElementById("menuToggle");
  menu.classList.remove("open");
  menu.setAttribute("aria-hidden", "true");
  menu.inert = true;
  toggle.setAttribute("aria-expanded", "false");
  toggle.innerHTML = '<i class="ph ph-list" aria-hidden="true"></i>';
  updateMenuToggleLabel(false);
}

function setModalState(modalId, overlayId, open) {
  const modal = document.getElementById(modalId);
  const overlay = document.getElementById(overlayId);
  if (!modal || !overlay) return;
  if (open) closeMobileMenu();
  modal.classList.toggle("open", open);
  overlay.classList.toggle("open", open);
  modal.setAttribute("aria-hidden", String(!open));
  document.body.classList.toggle("modal-open", open || document.querySelector(".modal.open"));
  const anyModalOpen = Boolean(document.querySelector('.modal.open'));
  document.querySelectorAll('.site-header, main, .site-footer, .floating-actions').forEach(element => { element.inert = anyModalOpen; });
  if (open) {
    lastFocusedElement = document.activeElement;
    window.setTimeout(() => modal.querySelector("button, input, select, textarea, a")?.focus(), 80);
  } else if (!document.querySelector(".modal.open")) {
    lastFocusedElement?.focus?.();
  }
}

function openProduct(index) {
  currentProductIndex = Math.max(0, Math.min(products.length - 1, Number(index) || 0));
  renderProduct(currentProductIndex);
  setModalState("productModal", "productOverlay", true);
}

function renderProduct(index) {
  const product = products[index];
  const lang = locale();
  const image = document.getElementById("productModalImage");
  document.getElementById('productModal').classList.toggle('no-product-image', !product.image);
  if (product.image) image.src = product.image;
  else image.removeAttribute('src');
  image.alt = product.title[lang];
  document.getElementById("productModalKicker").textContent = product.kicker[lang];
  document.getElementById("productModalTitle").textContent = product.title[lang];
  document.getElementById("productModalSummary").textContent = product.summary[lang];
  const specs = document.getElementById("productModalSpecs");
  specs.innerHTML = "";
  product.specs.forEach(([term, value]) => {
    const row = document.createElement("div");
    const dt = document.createElement("dt");
    const dd = document.createElement("dd");
    dt.textContent = term[lang];
    dd.textContent = value[lang];
    row.append(dt, dd);
    specs.appendChild(row);
  });
  const select = document.getElementById("product");
  if (index <= 4) select.value = "machine-tool-dials";
  if (index === 5) select.value = "metal-scales";
  if (index === 6) select.value = "equipment-nameplates";
  if (index === 7) select.value = "graduated-rings";
  if (index === 8) select.value = "machine-tool-dials";
}

function enquireCurrentProduct() {
  const product = products[currentProductIndex];
  const field = document.getElementById('message');
  if (!field.value.trim()) field.value = product.title[locale()];
  closeProductModal();
  openInquiryModal();
  updateEmailDraft();
}

function closeProductModal() { setModalState("productModal", "productOverlay", false); }
function openModal(index) { openProduct(index); }
function closeModal() { closeProductModal(); }

function openInquiryModal() { setModalState("inquiryModal", "inquiryOverlay", true); }
function openInquiryFor(projectType) {
  const field = document.getElementById("projectType");
  if (field && [...field.options].some((option) => option.value === projectType)) field.value = projectType;
  openInquiryModal();
}
function closeInquiryModal() { setModalState("inquiryModal", "inquiryOverlay", false); }
function openPrivacyModal() { setModalState("privacyModal", "privacyOverlay", true); }
function closePrivacyModal() { setModalState("privacyModal", "privacyOverlay", false); }
function openTermsModal() { setModalState("termsModal", "termsOverlay", true); }
function closeTermsModal() { setModalState("termsModal", "termsOverlay", false); }
function openEmailProviderModal() { window.location.href = "mailto:756011488@qq.com"; }
function closeEmailProviderModal() {}
function openWechatModal() { showToast(currentLanguage === "en" ? "Please contact us by phone or email." : "欢迎通过电话或邮箱与我们联系。"); }
function closeWechatModal() {}
function showVR() { showToast(currentLanguage === "en" ? "Please contact us for more product information." : "如需更多产品资料，欢迎与我们联系。"); }

function handlePhoneClick() {
  const number = "+8613852883090";
  if (/Android|iPhone|iPad|iPod/i.test(navigator.userAgent)) {
    window.location.href = `tel:${number}`;
    return;
  }
  if (!navigator.clipboard?.writeText) { showToast('+86 138 5288 3090'); return; }
  navigator.clipboard.writeText(number).then(
    () => showToast(currentLanguage === "en" ? "Phone number copied." : "联系电话已复制。"),
    () => showToast(`+86 138 5288 3090`)
  );
}

function showToast(message) {
  document.querySelector(".toast")?.remove();
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.textContent = message;
  document.body.appendChild(toast);
  requestAnimationFrame(() => toast.classList.add("show"));
  window.setTimeout(() => {
    toast.classList.remove("show");
    window.setTimeout(() => toast.remove(), 220);
  }, 2400);
}

function scrollToTop() { window.scrollTo({ top: 0, behavior: "smooth" }); }

function openMapInNewTab() {
  window.open("https://www.amap.com/search?query=江苏省泰兴市滨江镇新星村前进组17号", "_blank", "noopener");
}

function setMapLoading() {
  const map = document.getElementById("amapContainer");
  const status = document.getElementById("mapStatus");
  const controls = document.getElementById("mapZoomControls");
  if (map) map.hidden = false;
  if (status) {
    status.hidden = false;
    status.classList.remove("is-error");
  }
  if (controls) controls.hidden = true;
}

function showMapUnavailable() {
  const map = document.getElementById("amapContainer");
  const status = document.getElementById("mapStatus");
  const controls = document.getElementById("mapZoomControls");
  if (map) map.hidden = false;
  if (status) {
    status.hidden = false;
    status.classList.add("is-error");
  }
  if (controls) controls.hidden = true;
}

function showInteractiveMap() {
  const status = document.getElementById("mapStatus");
  const controls = document.getElementById("mapZoomControls");
  if (status) status.hidden = true;
  if (controls && mapInstance) {
    controls.hidden = false;
    controls.dataset.zoom = String(mapInstance.getZoom());
  }
}

function loadAMapSdk(force = false) {
  if (typeof window.AMap !== "undefined") {
    initAMap();
    return;
  }
  if (force) {
    window.clearTimeout(amapRetryTimer);
    amapLoadAttempts = 0;
    amapLoading = false;
  }
  if (amapLoading) return;
  if (amapLoadAttempts >= 3) {
    showMapUnavailable();
    return;
  }

  amapLoadAttempts += 1;
  amapLoading = true;
  setMapLoading();
  document.getElementById("amapRetryScript")?.remove();
  const script = document.createElement("script");
  script.id = "amapRetryScript";
  script.async = true;
  script.src = `https://webapi.amap.com/maps?v=2.0&key=c4acd1b01cc8d15b0744a546092b7327&_retry=${Date.now()}`;
  script.onload = () => {
    amapLoading = false;
    window.__amapLoadFailed = false;
    initAMap();
  };
  script.onerror = () => {
    amapLoading = false;
    if (amapLoadAttempts < 3) {
      amapRetryTimer = window.setTimeout(() => loadAMapSdk(), 1200 * amapLoadAttempts);
    } else {
      showMapUnavailable();
    }
  };
  document.head.appendChild(script);
}

function retryAMap() {
  loadAMapSdk(true);
}

function zoomMapIn() {
  if (mapInstance) mapInstance.zoomIn();
}

function zoomMapOut() {
  if (mapInstance) mapInstance.zoomOut();
}

function initAMap(retry = 0) {
  if (mapInstance || !document.getElementById("amapContainer")) return;
  if (typeof window.AMap === "undefined") {
    if (!window.__amapLoadFailed && retry < 8) window.setTimeout(() => initAMap(retry + 1), 500);
    else loadAMapSdk();
    return;
  }
  try {
    document.getElementById("amapContainer").hidden = false;
    const location = [119.970708, 32.077976];
    mapInstance = new AMap.Map("amapContainer", {
      zoom: 15,
      center: location,
      viewMode: "2D",
      mapStyle: "amap://styles/whitesmoke",
      resizeEnable: true,
      dragEnable: true,
      zoomEnable: true,
      scrollWheel: true,
      doubleClickZoom: true,
      touchZoom: true
    });
    const mapReadyTimer = window.setTimeout(() => {
      if (!document.getElementById("mapStatus")?.hidden) {
        try { mapInstance?.destroy(); } catch (_) { /* no-op */ }
        mapInstance = null;
        showMapUnavailable();
      }
    }, 10000);
    mapInstance.on("complete", () => {
      window.clearTimeout(mapReadyTimer);
      showInteractiveMap();
    });
    mapInstance.on("zoomchange", () => {
      const controls = document.getElementById("mapZoomControls");
      if (controls) controls.dataset.zoom = String(mapInstance.getZoom());
    });
    const icon = new AMap.Icon({
      size: new AMap.Size(48, 48),
      image: "images/brand-web.png",
      imageSize: new AMap.Size(48, 48)
    });
    const marker = new AMap.Marker({ position: location, icon, offset: new AMap.Pixel(-24, -24), title: "泰兴市滨江机械科技有限公司" });
    mapInstance.add(marker);
    mapInfoWindow = new AMap.InfoWindow({
      content: '<div class="amap-company-card"><strong>泰兴市滨江机械科技有限公司</strong><span>江苏省泰兴市滨江镇新星村前进组17号</span><a href="tel:+8613852883090">138 5288 3090</a></div>',
      offset: new AMap.Pixel(0, -28)
    });
    marker.on("click", () => mapInfoWindow.open(mapInstance, marker.getPosition()));
  } catch (error) {
    console.warn("AMap initialization failed", error);
    mapInstance = null;
    showMapUnavailable();
  }
}

function setupReveal() {
  if (!("IntersectionObserver" in window)) {
    document.querySelectorAll(".reveal").forEach((element) => element.classList.add("is-visible"));
    return;
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.13, rootMargin: "0px 0px -6%" });
  document.querySelectorAll(".reveal").forEach((element) => { element.classList.add('will-reveal'); observer.observe(element); });
}

function setupNavigation() {
  handleScroll();
}

function handleScroll() {
  const y = window.scrollY;
  document.getElementById("siteHeader").classList.toggle("scrolled", y > 24);
  document.getElementById("backToTop").classList.toggle("visible", y > 520);
  const sections = [...document.querySelectorAll('main > section[id]')];
  const anchor = document.getElementById('siteHeader').getBoundingClientRect().bottom + 100;
  const active = sections.filter(section => section.getBoundingClientRect().top <= anchor).pop();
  document.querySelectorAll('.desktop-nav a[data-section]').forEach(link => {
    link.classList.toggle('active',link.dataset.section === active?.id);
  });
}

function setupHero() {
  const hero = document.querySelector('.hero-v2');
  const scene = document.getElementById('heroScene');
  const image = document.getElementById('heroProductImage');
  const buttons = [...document.querySelectorAll('[data-hero-src]')];
  let requestId = 0;
  buttons.forEach(button => button.addEventListener('click', async () => {
    const id = ++requestId;
    const candidate = new Image();
    candidate.src = button.dataset.heroSrc;
    try { await candidate.decode(); } catch { return; }
    if (id !== requestId) return;
    image.src = candidate.src;
    image.alt = button.dataset[locale() === 'en' ? 'heroLabelEn' : 'heroLabelZh'];
    image.style.objectPosition = button.dataset.heroPosition || 'center';
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) image.animate([{ opacity: .45 }, { opacity: 1 }], { duration: 450, easing: 'ease-out' });
    buttons.forEach(item => {
      item.classList.toggle('active', item === button);
      item.setAttribute('aria-pressed', String(item === button));
    });
  }));
  let frame = 0;
  hero.addEventListener('pointermove', event => {
    if (!window.matchMedia('(pointer: fine) and (min-width: 901px) and (prefers-reduced-motion: no-preference)').matches) return;
    if (frame) return;
    frame = requestAnimationFrame(() => {
      const bounds = hero.getBoundingClientRect();
      const x = (event.clientX - bounds.left) / bounds.width - .5;
      const y = (event.clientY - bounds.top) / bounds.height - .5;
      scene.style.transform = `translate3d(${x * 18}px, ${y * 14}px, 0) scale(1.04)`;
      frame = 0;
    });
  }, { passive: true });
  hero.addEventListener('pointerleave', () => { cancelAnimationFrame(frame); frame = 0; scene.style.transform = ''; });
  window.matchMedia('(prefers-reduced-motion: reduce)').addEventListener('change', () => { scene.style.transform = ''; });
}

function updateEmailDraft() {
  const form = document.getElementById('inquiryForm');
  const link = document.getElementById('emailDraft');
  if (!form || !link) return;
  const rows = [...form.querySelectorAll('input, select, textarea')].map(field => {
    const label = field.closest('label').querySelector(locale() === 'en' ? '.en-only' : '.zh-only')?.textContent || field.name;
    const value = field.tagName === 'SELECT' ? (field.value ? field.selectedOptions[0].textContent : '') : field.value.trim();
    return value ? `${label}: ${value}` : '';
  }).filter(Boolean);
  link.href = 'mailto:756011488@qq.com?subject=' + encodeURIComponent(locale() === 'en' ? 'BJMECH product enquiry' : '滨江机械产品咨询') + '&body=' + encodeURIComponent(rows.join('\n'));
}

function setupInquiryForm() {
  const form = document.getElementById("inquiryForm");
  const status = document.getElementById("formStatus");
  const button = form.querySelector('button[type="submit"]');
  form.addEventListener('input', updateEmailDraft);
  form.addEventListener('change', updateEmailDraft);
  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    status.className = "form-status";
    if (!form.reportValidity()) return;
    const original = button.innerHTML;
    button.disabled = true;
    button.innerHTML = currentLanguage === "en" ? '<span>Sending…</span>' : '<span>正在提交…</span>';
    const projectType = document.getElementById("projectType").selectedOptions[0]?.textContent || (currentLanguage === "en" ? "Not selected" : "未选择");
    const quantity = document.getElementById("quantity").value.trim() || (currentLanguage === "en" ? "Not provided" : "未提供");
    const requestedDelivery = document.getElementById("requestedDelivery").value.trim() || (currentLanguage === "en" ? "Not provided" : "未提供");
    const requirement = document.getElementById("message").value.trim() || (currentLanguage === "en" ? "No additional notes" : "无补充说明");
    const combinedMessage = currentLanguage === "en"
      ? `Project type: ${projectType}\nEstimated quantity: ${quantity}\nRequested delivery: ${requestedDelivery}\nRequirement: ${requirement}`
      : `需求场景：${projectType}\n预计数量：${quantity}\n期望交期：${requestedDelivery}\n需求说明：${requirement}`;
    const emptyValue = currentLanguage === "en" ? "Not provided" : "未提供";
    const notSelectedValue = currentLanguage === "en" ? "Not selected" : "未选择";
    const data = {
      name: document.getElementById("name").value.trim(),
      phone: document.getElementById("phone").value.trim(),
      email: document.getElementById("email").value.trim() || emptyValue,
      company: document.getElementById("company").value.trim() || emptyValue,
      product: document.getElementById("product").selectedOptions[0]?.textContent || notSelectedValue,
      project_type: projectType,
      quantity,
      requested_delivery: requestedDelivery,
      message: combinedMessage
    };
    try {
      if (!window.emailjs) throw new Error("Email service unavailable");
      let timeout;
      const response = await Promise.race([
        emailjs.send("service_k2jllbg", "template_vu8wttn", data),
        new Promise((_, reject) => { timeout = setTimeout(() => reject(new Error('Submission timeout')), 15000); })
      ]).finally(() => clearTimeout(timeout));
      if (!response || response.status !== 200) throw new Error("Submission failed");
      status.textContent = currentLanguage === "en"
        ? "Thank you. We have received your enquiry and will follow up using the contact details provided."
        : "感谢您的咨询。我们已收到相关信息，将通过您预留的联系方式与您进一步沟通。";
      form.reset();
      switchLang(currentLanguage);
    } catch (error) {
      status.className = "form-status error";
      status.textContent = currentLanguage === "en"
        ? "Submission was not completed. Please call or email us directly."
        : "暂未提交成功，您也可以直接致电或发送邮件与我们联系。";
    } finally {
      button.disabled = false;
      button.innerHTML = original;
    }
  });
}

document.addEventListener("keydown", (event) => {
  const activeModal = document.querySelector(".modal.open");
  if (event.key === "Tab" && activeModal) {
    const focusable = [...activeModal.querySelectorAll('button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), a[href], [tabindex="0"]')]
      .filter((element) => element.getClientRects().length > 0);
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (first && (event.shiftKey ? document.activeElement === first : document.activeElement === last)) {
      event.preventDefault();
      (event.shiftKey ? last : first).focus();
    }
  }
  if (event.key !== "Escape") return;
  closeMobileMenu();
  closeProductModal();
  closeInquiryModal();
  closePrivacyModal();
  closeTermsModal();
});

document.addEventListener("DOMContentLoaded", () => {
  if (new URLSearchParams(window.location.search).has("qa")) document.documentElement.classList.add("qa");
  document.querySelectorAll("i.ph").forEach((icon) => icon.setAttribute("aria-hidden", "true"));
  const saved = (() => { try { return localStorage.getItem("bjmech-language"); } catch (_) { return null; } })();
  switchLang(saved === "en" ? "en" : "zh");
  document.getElementById("currentYear").textContent = new Date().getFullYear();
  setupReveal();
  setupNavigation();
  setupInquiryForm();
  setupHero();
  closeMobileMenu();
  setMapLoading();
  initAMap();
  handleScroll();
});

window.addEventListener("bjmech:mapready", () => {
  if (document.readyState !== "loading") initAMap();
});
window.addEventListener("bjmech:maperror", () => {
  if (document.readyState !== "loading") loadAMapSdk();
});
window.addEventListener("scroll", handleScroll, { passive: true });
window.addEventListener("resize", () => { if (window.innerWidth > 1200) closeMobileMenu(); });
