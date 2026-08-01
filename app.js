/* ==========================================================================
   🌈 초등 퍼스널 컬러 & TPO 스타일 리포트 생성기 - Main Application Logic
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

  // --- Data Definitions & State ---
  const TONE_DATA = {
    spring: {
      id: 'spring',
      name: '봄 웜톤 🌸',
      title: '봄 햇살처럼 따뜻하고 생기 넘치는 봄 웜톤!',
      badgeClass: 'spring',
      emoji: '🌸',
      summary: '개나리와 봄꽃처럼 맑고 상큼한 매력을 가진 봄 웜톤! 노란빛이 도는 따뜻한 컬러가 얼굴을 한층 더 화사하고 생기 있게 밝혀줍니다.',
      bestColors: [
        { name: '봄 햇살 옐로우', hex: '#FFD166' },
        { name: '생기 톡톡 코랄', hex: '#FF9F1C' },
        { name: '수줍은 벚꽃 핑크', hex: '#FFB5A7' },
        { name: '싱그러운 새싹 그린', hex: '#06D6A0' },
        { name: '포근한 크림 베이지', hex: '#FFE5D9' },
        { name: '청량한 바다 블루', hex: '#4ECDC4' }
      ],
      worstColors: [
        { name: '칙칙한 다크 차콜', hex: '#2B2D42' },
        { name: '차가운 딥 버건디', hex: '#6A040F' },
        { name: '생기 없는 쥐색 그레이', hex: '#6C757D' },
        { name: '어둡고 무거운 자두색', hex: '#4A154B' }
      ]
    },
    summer: {
      id: 'summer',
      name: '여름 쿨톤 🍦',
      title: '시원한 바람과 파스텔처럼 청순한 여름 쿨톤!',
      badgeClass: 'summer',
      emoji: '🍦',
      summary: '시원한 바람과 은은한 파스텔처럼 깨끗하고 다정한 매력을 가진 여름 쿨톤! 푸른빛이 도는 맑은 파스텔 컬러가 피부를 투명하게 해줍니다.',
      bestColors: [
        { name: '꿈꾸는 라벤더', hex: '#C77DFF' },
        { name: '맑은 은하수 블루', hex: '#90E0EF' },
        { name: '딸기우유 핑크', hex: '#FFC6FF' },
        { name: '깨끗한 눈꽃 화이트', hex: '#F8F9FA' },
        { name: '시원한 소다 민트', hex: '#80FFDB' },
        { name: '청량한 데님 블루', hex: '#48CAE4' }
      ],
      worstColors: [
        { name: '칙칙한 겨자 옐로우', hex: '#CC8B00' },
        { name: '무거운 카키 브라운', hex: '#584000' },
        { name: '얼굴 타보이는 비비드 주황', hex: '#FF4500' },
        { name: '답답한 딥 브라운', hex: '#3D2314' }
      ]
    },
    autumn: {
      id: 'autumn',
      name: '가을 웜톤 🍁',
      title: '따뜻한 단풍잎처럼 포근하고 차분한 가을 웜톤!',
      badgeClass: 'autumn',
      emoji: '🍁',
      summary: '따뜻한 단풍잎처럼 포근하고 차분하며 지적인 매력을 가진 가을 웜톤! 깊고 포근한 클래식 톤이 분위기를 더욱 돋보이게 합니다.',
      bestColors: [
        { name: '포근한 노을 단풍', hex: '#E07A5F' },
        { name: '차분한 숲속 카키', hex: '#81B29A' },
        { name: '고소한 우유 베이지', hex: '#F4F1DE' },
        { name: '지적인 딥 네이비', hex: '#3D405B' },
        { name: '따뜻한 군고구마 브릭', hex: '#F2CC8F' },
        { name: '달콤한 밤송이 브라운', hex: '#A3704C' }
      ],
      worstColors: [
        { name: '들떠 보이는 마젠타 핑크', hex: '#FF007F' },
        { name: '차갑게 튀는 쿨 블루', hex: '#00F0FF' },
        { name: '피부 칙칙해지는 시멘트', hex: '#A8A8A8' },
        { name: '피로해 보이는 차가운 보라', hex: '#8B00FF' }
      ]
    },
    winter: {
      id: 'winter',
      name: '겨울 쿨톤 ❄️',
      title: '선명한 눈송이처럼 또렷하고 멋진 겨울 쿨톤!',
      badgeClass: 'winter',
      emoji: '❄️',
      summary: '선명한 눈송이처럼 깨끗하고 멋지며 또렷한 매력을 가진 겨울 쿨톤! 대비가 강하고 쨍한 컬러가 개성을 선명하게 살려줍니다.',
      bestColors: [
        { name: '쨍하고 핫한 핑크', hex: '#FF0054' },
        { name: '깊은 코발트 블루', hex: '#03045E' },
        { name: '시크한 리얼 블랙', hex: '#000000' },
        { name: '눈부신 퓨어 화이트', hex: '#FFFFFF' },
        { name: '고급스러운 딥 자두', hex: '#7209B7' },
        { name: '시원한 서리 아이스블루', hex: '#CAF0F8' }
      ],
      worstColors: [
        { name: '얼굴 누래 보이는 옐로우 오커', hex: '#D4A373' },
        { name: '아파 보이는 올리브 카키', hex: '#6B705C' },
        { name: '피부가 어두워지는 웜 피치', hex: '#FFE5D9' },
        { name: '톤 들뜨는 웜 오렌지 브릭', hex: '#CB997E' }
      ]
    }
  };

  const TPO_NAMES = {
    presentation: '🏫 학습 발표회 / 무대 발표',
    field_trip: '🌳 야외 체험학습 / 소풍',
    sports_day: '🏃‍♂️ 체육대회 / 운동회',
    birthday_party: '🎂 친구 생일 파티',
    art_club: '🎨 미술 / 동아리 활동',
    daily_school: '🎒 즐거운 매일 등교룩'
  };

  let currentState = {
    selectedToneKey: 'spring',
    studentName: '민준이',
    tpoKey: 'presentation',
    generatedAiText: '',
    generatedTipText: ''
  };

  // --- DOM Elements ---
  const stepSections = {
    1: document.getElementById('step-1'),
    2: document.getElementById('step-2'),
    3: document.getElementById('step-3')
  };

  const stepNavItems = {
    1: document.getElementById('step-nav-1'),
    2: document.getElementById('step-nav-2'),
    3: document.getElementById('step-nav-3')
  };

  const stepLines = {
    '1-2': document.getElementById('line-1-2'),
    '2-3': document.getElementById('line-2-3')
  };

  const quizForm = document.getElementById('quiz-form');
  const btnDiagnose = document.getElementById('btn-diagnose');
  const btnBackStep1 = document.getElementById('btn-back-step1');
  const btnGenerateReport = document.getElementById('btn-generate-report');
  const btnRetryTpo = document.getElementById('btn-retry-tpo');

  // Modals & Action Buttons
  const modalApi = document.getElementById('modal-api');
  const btnOpenApi = document.getElementById('btn-api-setting');
  const btnCloseApi = document.getElementById('btn-close-api');
  const btnSaveApiKey = document.getElementById('btn-save-api-key');
  const btnClearApiKey = document.getElementById('btn-clear-api-key');
  const inputGeminiKey = document.getElementById('input-gemini-key');

  const modalGallery = document.getElementById('modal-gallery');
  const btnOpenGallery = document.getElementById('btn-open-gallery');
  const btnCloseGallery = document.getElementById('btn-close-gallery');
  const btnCloseGalleryFooter = document.getElementById('btn-close-gallery-footer');
  const galleryGrid = document.getElementById('gallery-grid');
  const galleryEmpty = document.getElementById('gallery-empty');
  const galleryCountBadge = document.getElementById('gallery-count-badge');

  const loadingOverlay = document.getElementById('loading-overlay');

  const btnDownloadPng = document.getElementById('btn-download-png');
  const btnDownloadPdf = document.getElementById('btn-download-pdf');
  const btnShareGallery = document.getElementById('btn-share-gallery');

  // Load Saved API Key
  let savedApiKey = localStorage.getItem('gemini_api_key') || '';
  if (savedApiKey) {
    inputGeminiKey.value = savedApiKey;
  }

  // Initial Gallery Count Update
  updateGalleryBadge();

  // --- Navigation Controls ---
  function goToStep(stepNum) {
    Object.keys(stepSections).forEach(key => {
      stepSections[key].classList.remove('active-section');
      stepNavItems[key].classList.remove('active', 'completed');
    });

    for (let i = 1; i <= 3; i++) {
      if (i < stepNum) {
        stepNavItems[i].classList.add('completed');
      } else if (i === stepNum) {
        stepNavItems[i].classList.add('active');
      }
    }

    if (stepNum >= 2) stepLines['1-2'].classList.add('active');
    else stepLines['1-2'].classList.remove('active');

    if (stepNum >= 3) stepLines['2-3'].classList.add('active');
    else stepLines['2-3'].classList.remove('active');

    stepSections[stepNum].classList.add('active-section');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // --- Step 1: Quiz Calculation ---
  btnDiagnose.addEventListener('click', () => {
    const formData = new FormData(quizForm);
    const answers = [
      formData.get('q_skin'),
      formData.get('q_hair'),
      formData.get('q_eye'),
      formData.get('q_style')
    ];

    if (answers.some(ans => !ans)) {
      alert('모든 질문에 답을 선택해 주세요! 🌟');
      return;
    }

    // Count occurrences
    const scores = { spring: 0, summer: 0, autumn: 0, winter: 0 };
    answers.forEach(ans => {
      if (scores[ans] !== undefined) scores[ans]++;
    });

    // Find highest score
    let winningTone = 'spring';
    let maxScore = -1;
    Object.keys(scores).forEach(tone => {
      if (scores[tone] > maxScore) {
        maxScore = scores[tone];
        winningTone = tone;
      }
    });

    currentState.selectedToneKey = winningTone;
    renderDiagnosisResult(winningTone);
    goToStep(2);
  });

  // --- Render Step 2 Results ---
  function renderDiagnosisResult(toneKey) {
    const tone = TONE_DATA[toneKey];
    
    // Result Banner
    const resBadge = document.getElementById('res-badge');
    const resTitle = document.getElementById('res-title');
    const resDesc = document.getElementById('res-desc');
    const resultBanner = document.getElementById('result-banner');

    resBadge.textContent = tone.name;
    resTitle.textContent = tone.title;
    resDesc.textContent = tone.summary;

    // Apply banner style gradient based on tone
    if (toneKey === 'spring') {
      resultBanner.style.background = 'linear-gradient(135deg, #fff3bf 0%, #ffd8a8 100%)';
    } else if (toneKey === 'summer') {
      resultBanner.style.background = 'linear-gradient(135deg, #e7f5ff 0%, #d0ebff 100%)';
    } else if (toneKey === 'autumn') {
      resultBanner.style.background = 'linear-gradient(135deg, #fbf1e8 0%, #f7d6c8 100%)';
    } else if (toneKey === 'winter') {
      resultBanner.style.background = 'linear-gradient(135deg, #f3f0ff 0%, #e5dbff 100%)';
    }

    // Render Best Color Chips
    const bestChipsGrid = document.getElementById('best-chips-grid');
    bestChipsGrid.innerHTML = tone.bestColors.map(c => `
      <div class="chip-item">
        <div class="chip-swatch" style="background-color: ${c.hex};"></div>
        <div class="chip-info">
          <span class="chip-name">${c.name}</span>
          <span class="chip-hex">${c.hex}</span>
        </div>
      </div>
    `).join('');

    // Render Worst Color Chips
    const worstChipsGrid = document.getElementById('worst-chips-grid');
    worstChipsGrid.innerHTML = tone.worstColors.map(c => `
      <div class="chip-item">
        <div class="chip-swatch" style="background-color: ${c.hex};"></div>
        <div class="chip-info">
          <span class="chip-name">${c.name}</span>
          <span class="chip-hex">${c.hex}</span>
        </div>
      </div>
    `).join('');

    // Populate Drape Swatches for Fitting Studio
    populateDrapeSwatches(toneKey);
  }

  // --- Live Dressing Room Mirror Logic (분장실 거울 자동 카메라) ---
  const liveMirrorVideo = document.getElementById('live-mirror-video');
  const liveMirrorCanvas = document.getElementById('live-mirror-canvas');
  const liveMirrorCtx = liveMirrorCanvas.getContext('2d');
  const mirrorCameraPrompt = document.getElementById('mirror-camera-prompt');
  const btnEnableAutoCam = document.getElementById('btn-enable-auto-cam');
  const btnToggleMirrorCam = document.getElementById('btn-toggle-mirror-cam');
  const btnSnapMirror = document.getElementById('btn-snap-mirror');
  const inputMirrorUpload = document.getElementById('input-mirror-upload');

  const mirrorSliderScale = document.getElementById('mirror-slider-scale');
  const mirrorSliderPosy = document.getElementById('mirror-slider-posy');
  const mirrorSliderPosx = document.getElementById('mirror-slider-posx');

  const btnToggleBa = document.getElementById('btn-toggle-ba');
  const baSplitControlBox = document.getElementById('ba-split-control-box');
  const baSplitSlider = document.getElementById('ba-split-slider');

  let liveMirrorState = {
    stream: null,
    isActive: false,
    brightStep: 'very_bright',
    undertone: 'warm_gold',
    drapeKey: 'spring_yellow',
    drapeHex: '#FFD166',
    drapeName: '봄 햇살 옐로우',
    featureItem: 'hair_light_brown',
    scale: 1.0,
    posX: 0,
    posY: 0,
    uploadedImg: null,
    isBaActive: false,
    baSplitPercent: 50,
    rawBeforeDataUrl: null
  };

  // Toggle Before & After Comparison Mode
  if (btnToggleBa) {
    btnToggleBa.addEventListener('click', () => {
      liveMirrorState.isBaActive = !liveMirrorState.isBaActive;
      if (liveMirrorState.isBaActive) {
        btnToggleBa.classList.add('active');
        baSplitControlBox.style.display = 'block';
      } else {
        btnToggleBa.classList.remove('active');
        baSplitControlBox.style.display = 'none';
      }
      if (!liveMirrorState.isActive) drawMirrorFrame();
    });
  }

  if (baSplitSlider) {
    baSplitSlider.addEventListener('input', (e) => {
      liveMirrorState.baSplitPercent = parseInt(e.target.value);
      if (!liveMirrorState.isActive) drawMirrorFrame();
    });
  }

  const DRAPE_PALETTE_DICT = {
    spring_yellow: { hex: '#FFD166', name: '봄 햇살 옐로우' },
    spring_coral: { hex: '#FF9F1C', name: '봄 생기 코랄' },
    summer_lavender: { hex: '#C77DFF', name: '여름 라벤더' },
    summer_sky: { hex: '#90E0EF', name: '여름 파스텔 하늘' },
    autumn_maple: { hex: '#E07A5F', name: '가을 노을 단풍' },
    autumn_khaki: { hex: '#81B29A', name: '가을 숲속 카키' },
    winter_pink: { hex: '#FF0054', name: '겨울 핫 핑크' },
    winter_cobalt: { hex: '#03045E', name: '겨울 코발트 블루' }
  };

  // Fitting Tab Switching
  const fTabBtns = document.querySelectorAll('.fitting-tab-nav .f-tab-btn');
  const fTabContents = document.querySelectorAll('.f-tab-content');

  fTabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      fTabBtns.forEach(b => b.classList.remove('active'));
      fTabContents.forEach(c => c.classList.remove('active'));
      btn.classList.add('active');
      const targetId = btn.getAttribute('data-ftab');
      const targetContent = document.getElementById(targetId);
      if (targetContent) targetContent.classList.add('active');
    });
  });

  // Fit Chip Item Handlers (Brightness, Undertone, Drape Palette, Feature Tone)
  const fitChipItems = document.querySelectorAll('.fit-chip-item');
  fitChipItems.forEach(item => {
    item.addEventListener('click', () => {
      const parentTab = item.closest('.f-tab-content');
      if (parentTab) {
        parentTab.querySelectorAll('.fit-chip-item').forEach(i => i.classList.remove('active'));
      }
      item.classList.add('active');

      const brightVal = item.getAttribute('data-bright');
      const undertoneVal = item.getAttribute('data-undertone');
      const drapeKeyVal = item.getAttribute('data-drape-key');
      const featureVal = item.getAttribute('data-feature');

      if (brightVal) liveMirrorState.brightStep = brightVal;
      if (undertoneVal) liveMirrorState.undertone = undertoneVal;
      if (drapeKeyVal && DRAPE_PALETTE_DICT[drapeKeyVal]) {
        liveMirrorState.drapeKey = drapeKeyVal;
        liveMirrorState.drapeHex = DRAPE_PALETTE_DICT[drapeKeyVal].hex;
        liveMirrorState.drapeName = DRAPE_PALETTE_DICT[drapeKeyVal].name;
      }
      if (featureVal) liveMirrorState.featureItem = featureVal;

      if (!liveMirrorState.isActive) drawMirrorFrame();
    });
  });

  // Auto Start Camera on Page Load
  initLiveMirrorCamera();

  async function initLiveMirrorCamera() {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { width: { ideal: 640 }, height: { ideal: 640 }, facingMode: 'user' }
      });
      liveMirrorState.stream = stream;
      liveMirrorState.isActive = true;
      liveMirrorVideo.srcObject = stream;
      mirrorCameraPrompt.style.display = 'none';

      // Start continuous rendering loop
      requestAnimationFrame(renderLiveMirrorLoop);
    } catch (err) {
      console.warn('Auto camera launch prompt shown:', err);
      mirrorCameraPrompt.style.display = 'flex';
    }
  }

  btnEnableAutoCam.addEventListener('click', () => {
    initLiveMirrorCamera();
  });

  btnToggleMirrorCam.addEventListener('click', () => {
    if (liveMirrorState.isActive && liveMirrorState.stream) {
      liveMirrorState.stream.getTracks().forEach(t => t.stop());
      liveMirrorState.stream = null;
      liveMirrorState.isActive = false;
      liveMirrorVideo.srcObject = null;
      mirrorCameraPrompt.style.display = 'flex';
    } else {
      initLiveMirrorCamera();
    }
  });

  // Mirror Upload Fallback
  inputMirrorUpload.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const img = new Image();
      img.onload = () => {
        liveMirrorState.uploadedImg = img;
        mirrorCameraPrompt.style.display = 'none';
        drawMirrorFrame();
      };
      img.src = event.target.result;
    };
    reader.readAsDataURL(file);
  });

  mirrorSliderScale.addEventListener('input', (e) => {
    liveMirrorState.scale = parseFloat(e.target.value);
    if (!liveMirrorState.isActive) drawMirrorFrame();
  });
  mirrorSliderPosy.addEventListener('input', (e) => {
    liveMirrorState.posY = parseInt(e.target.value);
    if (!liveMirrorState.isActive) drawMirrorFrame();
  });
  mirrorSliderPosx.addEventListener('input', (e) => {
    liveMirrorState.posX = parseInt(e.target.value);
    if (!liveMirrorState.isActive) drawMirrorFrame();
  });

  // Continuous Mirror Loop Function
  function renderLiveMirrorLoop() {
    if (!liveMirrorState.isActive) return;

    drawMirrorFrame();
    requestAnimationFrame(renderLiveMirrorLoop);
  }

  function drawMirrorFrame() {
    liveMirrorCtx.clearRect(0, 0, 540, 540);

    const isSplitMode = liveMirrorState.isBaActive;
    const splitX = Math.floor((liveMirrorState.baSplitPercent / 100) * 540);

    // Function to draw base photo/video
    const drawBasePhoto = () => {
      if (liveMirrorState.isActive && liveMirrorVideo.readyState === 4) {
        liveMirrorCtx.save();
        liveMirrorCtx.translate(540, 0);
        liveMirrorCtx.scale(-1, 1);
        liveMirrorCtx.drawImage(liveMirrorVideo, 0, 0, 540, 540);
        liveMirrorCtx.restore();
      } else if (liveMirrorState.uploadedImg) {
        liveMirrorCtx.drawImage(liveMirrorState.uploadedImg, 0, 0, 540, 540);
      } else {
        liveMirrorCtx.fillStyle = '#1e293b';
        liveMirrorCtx.fillRect(0, 0, 540, 540);
      }
    };

    // 1. Draw Base Photo (Full width or Before side)
    drawBasePhoto();

    // Store raw Before snapshot URL for report card
    if (!liveMirrorState.rawBeforeDataUrl) {
      liveMirrorState.rawBeforeDataUrl = liveMirrorCanvas.toDataURL('image/png');
    }

    if (isSplitMode) {
      // Draw Left Side: BEFORE (Raw/Worst Tone effect)
      liveMirrorCtx.save();
      liveMirrorCtx.beginPath();
      liveMirrorCtx.rect(0, 0, splitX, 540);
      liveMirrorCtx.clip();

      // Dull/Worst tone tint mask over BEFORE side
      liveMirrorCtx.fillStyle = 'rgba(74, 85, 104, 0.18)';
      liveMirrorCtx.fillRect(0, 0, 540, 540);

      // BEFORE Badge Label
      liveMirrorCtx.fillStyle = 'rgba(15, 23, 42, 0.75)';
      liveMirrorCtx.roundRect(15, 15, 130, 28, 8);
      liveMirrorCtx.fill();
      liveMirrorCtx.fillStyle = '#ffffff';
      liveMirrorCtx.font = 'bold 12px "Jua", cursive';
      liveMirrorCtx.fillText('◀ BEFORE (원본)', 25, 34);

      liveMirrorCtx.restore();

      // Draw Right Side: AFTER (Best Personal Color Fitting)
      liveMirrorCtx.save();
      liveMirrorCtx.beginPath();
      liveMirrorCtx.rect(splitX, 0, 540 - splitX, 540);
      liveMirrorCtx.clip();
    }

    // 2. Draw AFTER Layer: Skin Brightness & Undertone Filter Layer
    liveMirrorCtx.save();
    let skinOverlayColor = 'rgba(255, 243, 224, 0.12)';

    if (liveMirrorState.brightStep === 'very_bright') skinOverlayColor = 'rgba(255, 255, 255, 0.18)';
    else if (liveMirrorState.brightStep === 'medium_bright') skinOverlayColor = 'rgba(255, 235, 214, 0.14)';
    else if (liveMirrorState.brightStep === 'soft_bright') skinOverlayColor = 'rgba(247, 214, 200, 0.14)';
    else if (liveMirrorState.brightStep === 'calm_medium') skinOverlayColor = 'rgba(224, 169, 109, 0.15)';
    else if (liveMirrorState.brightStep === 'vivid_deep') skinOverlayColor = 'rgba(167, 109, 67, 0.18)';

    if (liveMirrorState.undertone === 'warm_gold') {
      liveMirrorCtx.fillStyle = 'rgba(255, 213, 79, 0.12)';
      liveMirrorCtx.fillRect(0, 0, 540, 540);
    } else if (liveMirrorState.undertone === 'warm_peach') {
      liveMirrorCtx.fillStyle = 'rgba(255, 183, 77, 0.12)';
      liveMirrorCtx.fillRect(0, 0, 540, 540);
    } else if (liveMirrorState.undertone === 'cool_rose') {
      liveMirrorCtx.fillStyle = 'rgba(244, 143, 177, 0.14)';
      liveMirrorCtx.fillRect(0, 0, 540, 540);
    } else if (liveMirrorState.undertone === 'cool_blue') {
      liveMirrorCtx.fillStyle = 'rgba(144, 202, 249, 0.15)';
      liveMirrorCtx.fillRect(0, 0, 540, 540);
    }

    liveMirrorCtx.fillStyle = skinOverlayColor;
    liveMirrorCtx.fillRect(0, 0, 540, 540);
    liveMirrorCtx.restore();

    // 3. Draw AFTER Layer: Seasonal Draping Fabric Layer
    if (liveMirrorState.drapeHex) {
      liveMirrorCtx.save();
      liveMirrorCtx.fillStyle = liveMirrorState.drapeHex;
      liveMirrorCtx.beginPath();
      liveMirrorCtx.moveTo(40, 540);
      liveMirrorCtx.bezierCurveTo(90, 370, 450, 370, 500, 540);
      liveMirrorCtx.closePath();
      liveMirrorCtx.fill();

      liveMirrorCtx.strokeStyle = 'rgba(0,0,0,0.18)';
      liveMirrorCtx.lineWidth = 5;
      liveMirrorCtx.stroke();

      liveMirrorCtx.fillStyle = '#ffffff';
      liveMirrorCtx.shadowColor = 'rgba(0,0,0,0.3)';
      liveMirrorCtx.shadowBlur = 8;
      liveMirrorCtx.roundRect(175, 485, 190, 38, 14);
      liveMirrorCtx.fill();
      liveMirrorCtx.shadowBlur = 0;

      liveMirrorCtx.fillStyle = '#1e293b';
      liveMirrorCtx.font = 'bold 15px "Jua", cursive';
      liveMirrorCtx.textAlign = 'center';
      liveMirrorCtx.fillText(`🎨 ${liveMirrorState.drapeName}`, 270, 510);

      liveMirrorCtx.restore();
    }

    // 4. Draw AFTER Layer: Hair & Eye Tone Match Overlay
    if (liveMirrorState.featureItem) {
      const { scale, posX, posY } = liveMirrorState;
      const feat = liveMirrorState.featureItem;

      liveMirrorCtx.save();

      if (feat.startsWith('eye_')) {
        let irisColor = '#B37D4E';
        if (feat === 'eye_chestnut') irisColor = '#4A2C11';
        else if (feat === 'eye_vivid_black') irisColor = '#111111';

        const eyeY = 220 + posY;
        const leftEyeX = 205 + posX;
        const rightEyeX = 335 + posX;
        const eyeRadius = 16 * scale;

        [leftEyeX, rightEyeX].forEach(ex => {
          liveMirrorCtx.beginPath();
          liveMirrorCtx.arc(ex, eyeY, eyeRadius, 0, Math.PI * 2);
          liveMirrorCtx.strokeStyle = irisColor;
          liveMirrorCtx.lineWidth = 4;
          liveMirrorCtx.stroke();

          liveMirrorCtx.beginPath();
          liveMirrorCtx.arc(ex - 4, eyeY - 4, 3, 0, Math.PI * 2);
          liveMirrorCtx.fillStyle = 'rgba(255,255,255,0.7)';
          liveMirrorCtx.fill();
        });
      } else if (feat.startsWith('hair_')) {
        let hairEmoji = '💇‍♀️';
        if (feat === 'hair_soft_brown') hairEmoji = '👧';
        else if (feat === 'hair_deep_brown') hairEmoji = '👦';
        else if (feat === 'hair_black') hairEmoji = '🧑';

        liveMirrorCtx.translate(270 + posX, 120 + posY);
        liveMirrorCtx.scale(scale, scale);

        liveMirrorCtx.font = '120px sans-serif';
        liveMirrorCtx.textAlign = 'center';
        liveMirrorCtx.textBaseline = 'middle';
        liveMirrorCtx.fillText(hairEmoji, 0, 0);
      }

      liveMirrorCtx.restore();
    }

    if (isSplitMode) {
      // AFTER Badge Label
      liveMirrorCtx.fillStyle = 'rgba(255, 71, 87, 0.9)';
      liveMirrorCtx.roundRect(390, 15, 135, 28, 8);
      liveMirrorCtx.fill();
      liveMirrorCtx.fillStyle = '#ffffff';
      liveMirrorCtx.font = 'bold 12px "Jua", cursive';
      liveMirrorCtx.fillText('AFTER (베스트 톤) ▶', 400, 34);

      liveMirrorCtx.restore(); // End AFTER clipping

      // Draw Vertical Split Divider Line & Knob Handle
      liveMirrorCtx.save();
      liveMirrorCtx.strokeStyle = '#ffffff';
      liveMirrorCtx.lineWidth = 4;
      liveMirrorCtx.shadowColor = 'rgba(0,0,0,0.4)';
      liveMirrorCtx.shadowBlur = 10;
      liveMirrorCtx.beginPath();
      liveMirrorCtx.moveTo(splitX, 0);
      liveMirrorCtx.lineTo(splitX, 540);
      liveMirrorCtx.stroke();

      // Split Knob
      liveMirrorCtx.fillStyle = '#ff4757';
      liveMirrorCtx.beginPath();
      liveMirrorCtx.arc(splitX, 270, 20, 0, Math.PI * 2);
      liveMirrorCtx.fill();
      liveMirrorCtx.strokeStyle = '#ffffff';
      liveMirrorCtx.lineWidth = 3;
      liveMirrorCtx.stroke();

      liveMirrorCtx.fillStyle = '#ffffff';
      liveMirrorCtx.font = 'bold 12px sans-serif';
      liveMirrorCtx.textAlign = 'center';
      liveMirrorCtx.fillText('◄►', splitX, 274);

      liveMirrorCtx.restore();
    }
  }

  // Snap Dressing Room Photo
  btnSnapMirror.addEventListener('click', () => {
    // Snap data URL
    const snappedUrl = liveMirrorCanvas.toDataURL('image/png');
    studioState.fittedDataUrl = snappedUrl;

    const img = new Image();
    img.onload = () => {
      studioState.userImage = img;
      drawStudioCanvas();
    };
    img.src = snappedUrl;

    alert('📸 분장실 피팅 샷 촬영 완료! 최종 리포트 카드에 예쁘게 적용됩니다 🌟');
  });

  // --- Virtual Fitting Studio Logic ---
  const studioState = {
    userImage: null,
    webcamStream: null,
    activeDrape: null,
    activeOverlay: null,
    config: { scale: 1.0, posX: 0, posY: 0 },
    fittedDataUrl: null
  };

  const fittingCanvas = document.getElementById('fitting-canvas');
  const ctx = fittingCanvas.getContext('2d');
  const webcamVideo = document.getElementById('webcam-video');
  const cameraPlaceholder = document.getElementById('camera-placeholder');

  const btnStartCam = document.getElementById('btn-start-cam');
  const btnCapturePhoto = document.getElementById('btn-capture-photo');
  const btnRetakePhoto = document.getElementById('btn-retake-photo');
  const inputUploadPhoto = document.getElementById('input-upload-photo');

  const sliderScale = document.getElementById('slider-scale');
  const sliderPosY = document.getElementById('slider-pos-y');
  const sliderPosX = document.getElementById('slider-pos-x');
  const btnClearOverlay = document.getElementById('btn-clear-overlay');

  // Studio Tabs Switching
  const studioTabBtns = document.querySelectorAll('.studio-tabs .tab-btn');
  const studioTabContents = document.querySelectorAll('.studio-controls-box .tab-content');

  studioTabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      studioTabBtns.forEach(b => b.classList.remove('active'));
      studioTabContents.forEach(c => c.classList.remove('active'));
      btn.classList.add('active');
      const targetTab = document.getElementById(btn.getAttribute('data-tab'));
      if (targetTab) targetTab.classList.add('active');
    });
  });

  // Populate Drape Swatches
  function populateDrapeSwatches(toneKey) {
    const tone = TONE_DATA[toneKey];
    const drapeContainer = document.getElementById('drape-swatch-list');
    
    const allDrapes = [
      ...tone.bestColors.map(c => ({ ...c, type: '베스트' })),
      ...tone.worstColors.map(c => ({ ...c, type: '워스트' }))
    ];

    drapeContainer.innerHTML = allDrapes.map((d, idx) => `
      <div class="drape-item" data-idx="${idx}">
        <div class="drape-color-swatch" style="background-color: ${d.hex};"></div>
        <span class="drape-name">${d.name}</span>
      </div>
    `).join('');

    const drapeItems = drapeContainer.querySelectorAll('.drape-item');
    drapeItems.forEach(item => {
      item.addEventListener('click', () => {
        drapeItems.forEach(di => di.classList.remove('active'));
        item.classList.add('active');
        const idx = parseInt(item.getAttribute('data-idx'));
        studioState.activeDrape = allDrapes[idx];
        drawStudioCanvas();
      });
    });
  }

  // Overlay Thumbnail Clicks (Hair & Outfits)
  const OVERLAY_DICTIONARY = {
    hair_spring_bob: { emoji: '💇‍♀️', label: '상큼 단발' },
    hair_summer_wavy: { emoji: '👧', label: '양갈래 핑크' },
    hair_autumn_brown: { emoji: '👦', label: '꿀빛 웨이브' },
    hair_winter_chic: { emoji: '🧑', label: '시크 숏컷' },
    item_cap: { emoji: '🧢', label: '응원 캡' },
    item_crown: { emoji: '👑', label: '파티 왕관' },
    item_bow: { emoji: '🎀', label: '러블리 리본' },
    outfit_presentation: { emoji: '👔', label: '발표회 셔츠&조끼' },
    outfit_fieldtrip: { emoji: '🧥', label: '소풍 바람막이' },
    outfit_sports: { emoji: '🎽', label: '체육대회 유니폼' },
    outfit_party: { emoji: '👗', label: '파티 드레스/슈트' },
    outfit_art: { emoji: '🎨', label: '미술 앞치마' },
    outfit_daily: { emoji: '👕', label: '데일리 캐주얼' }
  };

  const overlayThumbs = document.querySelectorAll('.overlay-thumb');
  overlayThumbs.forEach(thumb => {
    thumb.addEventListener('click', () => {
      overlayThumbs.forEach(t => t.classList.remove('active'));
      thumb.classList.add('active');
      const itemKey = thumb.getAttribute('data-item');
      studioState.activeOverlay = OVERLAY_DICTIONARY[itemKey] || null;
      drawStudioCanvas();
    });
  });

  // Slider Adjustments
  sliderScale.addEventListener('input', (e) => {
    studioState.config.scale = parseFloat(e.target.value);
    drawStudioCanvas();
  });
  sliderPosY.addEventListener('input', (e) => {
    studioState.config.posY = parseInt(e.target.value);
    drawStudioCanvas();
  });
  sliderPosX.addEventListener('input', (e) => {
    studioState.config.posX = parseInt(e.target.value);
    drawStudioCanvas();
  });

  btnClearOverlay.addEventListener('click', () => {
    studioState.activeDrape = null;
    studioState.activeOverlay = null;
    document.querySelectorAll('.drape-item').forEach(di => di.classList.remove('active'));
    document.querySelectorAll('.overlay-thumb').forEach(ot => ot.classList.remove('active'));
    sliderScale.value = 1.0;
    sliderPosY.value = 0;
    sliderPosX.value = 0;
    studioState.config = { scale: 1.0, posX: 0, posY: 0 };
    drawStudioCanvas();
  });

  // Camera Actions
  btnStartCam.addEventListener('click', async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: { width: 640, height: 640 } });
      studioState.webcamStream = stream;
      webcamVideo.srcObject = stream;
      webcamVideo.style.display = 'block';
      fittingCanvas.style.display = 'none';
      cameraPlaceholder.style.display = 'none';

      btnStartCam.style.display = 'none';
      btnCapturePhoto.style.display = 'inline-flex';
      btnRetakePhoto.style.display = 'none';
    } catch (err) {
      console.error('Camera access denied:', err);
      alert('카메라 접근 권한이 필요합니다. 사진 업로드 기능을 이용해 보세요! 📷');
    }
  });

  btnCapturePhoto.addEventListener('click', () => {
    if (!webcamVideo.srcObject) return;

    // Capture snapshot frame
    const tempCanvas = document.createElement('canvas');
    tempCanvas.width = 450;
    tempCanvas.height = 450;
    const tempCtx = tempCanvas.getContext('2d');
    tempCtx.drawImage(webcamVideo, 0, 0, 450, 450);

    const img = new Image();
    img.onload = () => {
      studioState.userImage = img;
      stopWebcam();
      webcamVideo.style.display = 'none';
      fittingCanvas.style.display = 'block';

      btnCapturePhoto.style.display = 'none';
      btnRetakePhoto.style.display = 'inline-flex';
      btnStartCam.style.display = 'inline-flex';

      drawStudioCanvas();
    };
    img.src = tempCanvas.toDataURL('image/png');
  });

  btnRetakePhoto.addEventListener('click', () => {
    studioState.userImage = null;
    studioState.fittedDataUrl = null;
    btnStartCam.click();
  });

  inputUploadPhoto.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const img = new Image();
      img.onload = () => {
        studioState.userImage = img;
        stopWebcam();
        webcamVideo.style.display = 'none';
        cameraPlaceholder.style.display = 'none';
        fittingCanvas.style.display = 'block';

        btnCapturePhoto.style.display = 'none';
        btnRetakePhoto.style.display = 'inline-flex';
        drawStudioCanvas();
      };
      img.src = event.target.result;
    };
    reader.readAsDataURL(file);
  });

  function stopWebcam() {
    if (studioState.webcamStream) {
      studioState.webcamStream.getTracks().forEach(track => track.stop());
      studioState.webcamStream = null;
    }
  }

  // Draw Fitting Studio Canvas Composite
  function drawStudioCanvas() {
    ctx.clearRect(0, 0, 450, 450);

    // 1. Draw Background User Photo (or default avatar)
    if (studioState.userImage) {
      ctx.drawImage(studioState.userImage, 0, 0, 450, 450);
    } else {
      // Draw friendly default avatar face background
      ctx.fillStyle = '#e2e8f0';
      ctx.fillRect(0, 0, 450, 450);

      // Face silhouette
      ctx.fillStyle = '#ffdfc4';
      ctx.beginPath();
      ctx.arc(225, 200, 110, 0, Math.PI * 2);
      ctx.fill();

      // Eyes & Smile
      ctx.fillStyle = '#334155';
      ctx.beginPath();
      ctx.arc(190, 185, 12, 0, Math.PI * 2);
      ctx.arc(260, 185, 12, 0, Math.PI * 2);
      ctx.fill();

      ctx.strokeStyle = '#334155';
      ctx.lineWidth = 5;
      ctx.beginPath();
      ctx.arc(225, 215, 30, 0.1 * Math.PI, 0.9 * Math.PI);
      ctx.stroke();

      // Shoulders
      ctx.fillStyle = '#cbd5e1';
      ctx.beginPath();
      ctx.ellipse(225, 410, 160, 100, 0, 0, Math.PI * 2);
      ctx.fill();
    }

    // 2. Draw Color Drape (if selected)
    if (studioState.activeDrape) {
      const hex = studioState.activeDrape.hex;
      ctx.save();

      // Drape fabric shape over shoulders (u-shape collar)
      ctx.fillStyle = hex;
      ctx.beginPath();
      ctx.moveTo(35, 450);
      ctx.bezierCurveTo(70, 310, 380, 310, 415, 450);
      ctx.closePath();
      ctx.fill();

      // Fabric inner shadow line
      ctx.strokeStyle = 'rgba(0,0,0,0.15)';
      ctx.lineWidth = 4;
      ctx.stroke();

      // Drape Tag Label
      ctx.fillStyle = '#ffffff';
      ctx.shadowColor = 'rgba(0,0,0,0.2)';
      ctx.shadowBlur = 6;
      ctx.roundRect(150, 400, 150, 34, 12);
      ctx.fill();
      ctx.shadowBlur = 0;

      ctx.fillStyle = '#1e293b';
      ctx.font = 'bold 14px "Jua", cursive';
      ctx.textAlign = 'center';
      ctx.fillText(`🎨 ${studioState.activeDrape.name}`, 225, 422);

      ctx.restore();
    }

    // 3. Draw Active Overlay (Hair / Accessory / Outfit)
    if (studioState.activeOverlay) {
      const { scale, posX, posY } = studioState.config;
      ctx.save();
      ctx.translate(225 + posX, 200 + posY);
      ctx.scale(scale, scale);

      ctx.font = '110px sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(studioState.activeOverlay.emoji, 0, 0);

      ctx.restore();
    }

    // Save Data URL
    studioState.fittedDataUrl = fittingCanvas.toDataURL('image/png');
  }

  btnBackStep1.addEventListener('click', () => {
    goToStep(1);
  });

  // --- Step 2 to Step 3: AI Generation ---
  btnGenerateReport.addEventListener('click', async () => {
    const studentNameInput = document.getElementById('student-name').value.trim();
    const tpoSelect = document.getElementById('tpo-select').value;

    if (!studentNameInput) {
      alert('학생 이름을 입력해 주세요! ✏️');
      return;
    }

    currentState.studentName = studentNameInput;
    currentState.tpoKey = tpoSelect;

    // Show Loading Overlay
    loadingOverlay.classList.add('active');

    try {
      // Call Gemini API or Smart Fallback
      const result = await generateStylingWithAI(currentState.selectedToneKey, currentState.tpoKey, currentState.studentName);
      currentState.generatedAiText = result.recommendation;
      currentState.generatedTipText = result.tip;

      renderFinalCard();
      goToStep(3);
    } catch (err) {
      console.error('Error generating report:', err);
      alert('리포트 생성 중 문제가 발생했습니다. 기본 추천 엔진으로 작성합니다.');
      const fallback = getSmartFallback(currentState.selectedToneKey, currentState.tpoKey, currentState.studentName);
      currentState.generatedAiText = fallback.recommendation;
      currentState.generatedTipText = fallback.tip;

      renderFinalCard();
      goToStep(3);
    } finally {
      loadingOverlay.classList.remove('active');
    }
  });

  btnRetryTpo.addEventListener('click', () => {
    goToStep(2);
  });

  // --- Gemini API / Smart Fallback Engine ---
  async function generateStylingWithAI(toneKey, tpoKey, studentName) {
    const tone = TONE_DATA[toneKey];
    const tpoName = TPO_NAMES[tpoKey];

    const prompt = `
당신은 초등학생 전담 친근하고 우아한 AI 퍼스널 스타일리스트 선생님입니다.
다음 정보를 바탕으로 초등학생(${studentName})을 위한 맞춤형 옷차림 추천문과 상대방을 배려하는 코디 조언을 작성해주세요.

[학생 정보]
- 이름: ${studentName}
- 퍼스널 컬러: ${tone.name} (${tone.summary})
- 추천 베스트 색상: ${tone.bestColors.map(c => c.name).join(', ')}
- TPO 상황: ${tpoName}

[작성 조건]
1. 반드시 친근하고 다정한 초등학생용 어조(~해요, ~해봐요, ~멋져요)로 작성해 주세요.
2. [코디 추천] 부분은 총 2문장 이내로, ${tone.name} 베스트 색상을 사용해 ${tpoName} 상황에 딱 맞는 옷 조합(상의, 하의, 포인트 아이템)을 제안해주세요.
3. [배려 조언] 부분은 1문장으로, 친구나 상대방을 배려하고 함께 빛날 수 있는 태도나 코디 에티켓 조언을 적어주세요.
4. JSON 형식으로만 아래 구조로 응답해주세요:
{
  "recommendation": "코디 추천 2문장 내용",
  "tip": "배려 조언 1문장 내용"
}
    `.trim();

    // Check if API Key is available
    if (savedApiKey) {
      const modelsToTry = ['gemini-2.5-flash', 'gemini-2.0-flash', 'gemini-1.5-flash'];
      for (const model of modelsToTry) {
        try {
          const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${savedApiKey}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              contents: [{ parts: [{ text: prompt }] }],
              generationConfig: { responseMimeType: "application/json" }
            })
          });

          if (response.ok) {
            const data = await response.json();
            const rawText = data.candidates?.[0]?.content?.parts?.[0]?.text;
            if (rawText) {
              const parsed = JSON.parse(rawText);
              return {
                recommendation: parsed.recommendation || parsed.recommendText,
                tip: parsed.tip || parsed.tipText
              };
            }
          }
        } catch (e) {
          console.warn(`Gemini API call with ${model} failed, trying next option...`, e);
        }
      }
    }

    // Use Built-in Smart Fallback Generator if no key or API call fails
    return getSmartFallback(toneKey, tpoKey, studentName);
  }

  // Smart Fallback Engine: Dynamic templates for all 4 tones x 6 TPOs
  function getSmartFallback(toneKey, tpoKey, studentName) {
    const tone = TONE_DATA[toneKey];
    const best1 = tone.bestColors[0].name;
    const best2 = tone.bestColors[1].name;
    const best3 = tone.bestColors[2].name;

    const fallbackTemplates = {
      presentation: {
        recommendation: `${studentName} 친구의 ${tone.name}를 살려 화사한 ${best1} 셔츠에 깔끔한 하의를 매치해 보세요! 무대 위에서 단정하면서도 환하게 빛나 발표에 자신감이 쑥쑥 생길 거예요.`,
        tip: `함께 무대에 서는 친구들의 옷 색상도 돋보일 수 있도록 서로 차분하게 칭찬을 건네며 긴장을 풀어주세요! 🌟`
      },
      field_trip: {
        recommendation: `야외 활동에 맞춰 편안한 티셔츠에 ${best2} 포인트 자켓이나 모자를 써보세요! 야외 햇살 아래에서 ${studentName} 친구의 피부 톤이 더욱 생기 넘치고 사진도 예쁘게 나와요.`,
        tip: `풀밭이나 흙에 옷이 더러워지지 않게 조심하고, 친구가 앉을 때 자리를 털어주는 친절을 보여주세요! 🌿`
      },
      sports_day: {
        recommendation: `에너지 넘치는 체육대회에서는 활동하기 좋은 운동복에 ${best1} 컬러의 헤어밴드나 아대를 매치해 보세요! 신나게 달리며 응원할 때 긍정적인 에너지가 가득 전해질 거예요.`,
        tip: `열심히 뛴 친구에게 땀을 닦을 수 있는 휴지를 챙겨주고, "오늘 최고였어!"라고 큰 소리로 응원해 보세요! 🏃‍♂️`
      },
      birthday_party: {
        recommendation: `친구 생일 파티에는 ${best3} 가디건이나 깔끔한 셔츠로 단정하면서도 센스 있는 분위기를 연출해 보세요! 세련되고 아기자기한 색감이 축하해 주는 마음을 더 따뜻하게 해줘요.`,
        tip: `주인공인 친구가 가장 빛날 수 있도록 칭찬해 주고, 선물할 때 밝은 미소로 기쁨을 함께 나눠보세요! 🎂`
      },
      art_club: {
        recommendation: `창의력이 쑥쑥 돋아나는 미술 시간에는 활동하기 편한 의상에 ${best2} 앞치마나 슬리퍼로 포인트를 주면 완벽해요! 편안하고 자유로운 분위기에서 예쁜 작품이 탄생할 거예요.`,
        tip: `물감이나 재료가 친구 옷에 튀지 않게 조심하고, 친구 작품의 멋진 색감을 많이 칭찬해 주세요! 🎨`
      },
      daily_school: {
        recommendation: `매일 즐거운 등교길에는 ${best1} 또는 ${best2} 파스텔 톤 맨투맨으로 깔끔하고 귀엽게 입어보세요! 보는 사람까지 기분 좋아지는 화사한 스타일이 완성된답니다.`,
        tip: `복도에서 만나는 친구와 선생님께 환한 미소로 인사를 나누며 따뜻한 하루를 시작해 보세요! 🎒`
      }
    };

    return fallbackTemplates[tpoKey] || fallbackTemplates.daily_school;
  }

  // --- Step 3: Render Final Card ---
  function renderFinalCard() {
    const tone = TONE_DATA[currentState.selectedToneKey];

    // Card Header Infos
    document.getElementById('card-student-title').textContent = `${currentState.studentName} 어린이의 맞춤 스타일 리포트`;
    
    // Today Date
    const now = new Date();
    const formattedDate = `${now.getFullYear()}.${String(now.getMonth() + 1).padStart(2, '0')}.${String(now.getDate()).padStart(2, '0')}`;
    document.getElementById('card-date').innerHTML = `<i class="fa-regular fa-calendar"></i> ${formattedDate}`;

    // Big Tone Badge
    const bigBadge = document.getElementById('card-tone-badge-big');
    bigBadge.className = `tone-badge-big ${tone.badgeClass}`;
    document.getElementById('card-badge-emoji').textContent = tone.emoji;
    document.getElementById('card-tone-name').textContent = tone.name;

    // Tone Summary
    document.getElementById('card-tone-summary').textContent = tone.summary;

    // Mini Chips (Best & Worst)
    const cardBestChips = document.getElementById('card-best-chips');
    cardBestChips.innerHTML = tone.bestColors.map(c => `
      <div class="mini-chip">
        <span class="mini-dot" style="background-color: ${c.hex};"></span>
        <span>${c.name}</span>
      </div>
    `).join('');

    const cardWorstChips = document.getElementById('card-worst-chips');
    cardWorstChips.innerHTML = tone.worstColors.map(c => `
      <div class="mini-chip">
        <span class="mini-dot" style="background-color: ${c.hex};"></span>
        <span>${c.name}</span>
      </div>
    `).join('');

    // Student Photo Before & After Comparison Rendering
    const cardBeforePhoto = document.getElementById('card-before-photo');
    const cardBeforePlaceholder = document.getElementById('card-before-placeholder');
    const cardAfterPhoto = document.getElementById('card-after-photo');
    const cardAfterPlaceholder = document.getElementById('card-after-placeholder');

    if (liveMirrorState.rawBeforeDataUrl) {
      cardBeforePhoto.src = liveMirrorState.rawBeforeDataUrl;
      cardBeforePhoto.style.display = 'block';
      if (cardBeforePlaceholder) cardBeforePlaceholder.style.display = 'none';
    }

    if (studioState.fittedDataUrl) {
      cardAfterPhoto.src = studioState.fittedDataUrl;
      cardAfterPhoto.style.display = 'block';
      if (cardAfterPlaceholder) cardAfterPlaceholder.style.display = 'none';
    } else if (liveMirrorState.rawBeforeDataUrl) {
      // Fallback after photo if snapshot taken from mirror
      cardAfterPhoto.src = liveMirrorCanvas.toDataURL('image/png');
      cardAfterPhoto.style.display = 'block';
      if (cardAfterPlaceholder) cardAfterPlaceholder.style.display = 'none';
    }

    // TPO Badge & AI Content
    document.getElementById('card-tpo-badge').innerHTML = `<i class="fa-solid fa-location-dot"></i> ${TPO_NAMES[currentState.tpoKey]}`;
    document.getElementById('card-ai-recommendation').innerHTML = `<p>${currentState.generatedAiText}</p>`;
    document.getElementById('card-ai-tip').textContent = currentState.generatedTipText;
  }

  // --- Export Actions: Image / PDF ---
  btnDownloadPng.addEventListener('click', () => {
    const targetElement = document.getElementById('report-printable-card');
    
    html2canvas(targetElement, {
      scale: 2,
      useCORS: true,
      backgroundColor: '#ffffff'
    }).then(canvas => {
      const link = document.createElement('a');
      link.download = `${currentState.studentName}_퍼스널컬러_TPO리포트.png`;
      link.href = canvas.toDataURL('image/png');
      link.click();
    }).catch(err => {
      console.error('PNG export failed:', err);
      alert('이미지 저장 중 오류가 발생했습니다.');
    });
  });

  btnDownloadPdf.addEventListener('click', () => {
    const targetElement = document.getElementById('report-printable-card');
    const { jsPDF } = window.jspdf;

    html2canvas(targetElement, {
      scale: 2,
      useCORS: true,
      backgroundColor: '#ffffff'
    }).then(canvas => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

      pdf.addImage(imgData, 'PNG', 0, 10, pdfWidth, pdfHeight);
      pdf.save(`${currentState.studentName}_퍼스널컬러_TPO리포트.pdf`);
    }).catch(err => {
      console.error('PDF export failed:', err);
      alert('PDF 생성 중 오류가 발생했습니다.');
    });
  });

  // --- Class Gallery Storage & Modal ---
  btnShareGallery.addEventListener('click', () => {
    saveToGallery();
    openGalleryModal();
    alert('🎉 학급 갤러리에 내 리포트가 성공적으로 등록되었습니다!');
  });

  function getGalleryData() {
    const data = localStorage.getItem('class_gallery_reports');
    return data ? JSON.parse(data) : [];
  }

  function saveToGallery() {
    const list = getGalleryData();
    const newReport = {
      id: Date.now(),
      studentName: currentState.studentName,
      toneKey: currentState.selectedToneKey,
      toneName: TONE_DATA[currentState.selectedToneKey].name,
      tpoName: TPO_NAMES[currentState.tpoKey],
      recommendationSnippet: currentState.generatedAiText,
      likes: 1,
      createdAt: new Date().toLocaleDateString('ko-KR')
    };

    list.unshift(newReport);
    localStorage.setItem('class_gallery_reports', JSON.stringify(list));
    updateGalleryBadge();
  }

  function updateGalleryBadge() {
    const list = getGalleryData();
    galleryCountBadge.textContent = list.length;
  }

  function openGalleryModal() {
    renderGalleryItems();
    modalGallery.classList.add('active');
  }

  function closeGalleryModal() {
    modalGallery.classList.remove('active');
  }

  function renderGalleryItems() {
    const list = getGalleryData();
    if (list.length === 0) {
      galleryGrid.style.display = 'none';
      galleryEmpty.style.display = 'block';
    } else {
      galleryEmpty.style.display = 'none';
      galleryGrid.style.display = 'grid';

      galleryGrid.innerHTML = list.map(item => `
        <div class="gallery-item-card">
          <div class="g-card-header">
            <span class="g-student-name">${item.studentName}</span>
            <span class="g-tone-tag">${item.toneName}</span>
          </div>
          <div class="g-tpo-badge">${item.tpoName}</div>
          <div class="g-ai-snippet">${item.recommendationSnippet}</div>
          <div class="g-card-footer">
            <span style="font-size:0.75rem; color:#a0aec0;">${item.createdAt}</span>
            <button class="btn-heart" onclick="window.likeGalleryReport(${item.id})">
              ❤️ <span id="like-cnt-${item.id}">${item.likes}</span>
            </button>
          </div>
        </div>
      `).join('');
    }
  }

  // Like Function attached to window
  window.likeGalleryReport = function(id) {
    const list = getGalleryData();
    const item = list.find(r => r.id === id);
    if (item) {
      item.likes += 1;
      localStorage.setItem('class_gallery_reports', JSON.stringify(list));
      const cntSpan = document.getElementById(`like-cnt-${id}`);
      if (cntSpan) cntSpan.textContent = item.likes;
    }
  };

  btnOpenGallery.addEventListener('click', openGalleryModal);
  btnCloseGallery.addEventListener('click', closeGalleryModal);
  btnCloseGalleryFooter.addEventListener('click', closeGalleryModal);

  // --- API Key Modal Handlers ---
  btnOpenApi.addEventListener('click', () => {
    modalApi.classList.add('active');
  });

  btnCloseApi.addEventListener('click', () => {
    modalApi.classList.remove('active');
  });

  btnSaveApiKey.addEventListener('click', () => {
    const key = inputGeminiKey.value.trim();
    if (key) {
      localStorage.setItem('gemini_api_key', key);
      savedApiKey = key;
      alert('Gemini API Key가 성공적으로 저장되었습니다! 🔑');
    } else {
      alert('API 키를 입력해 주세요.');
    }
    modalApi.classList.remove('active');
  });

  btnClearApiKey.addEventListener('click', () => {
    localStorage.removeItem('gemini_api_key');
    savedApiKey = '';
    inputGeminiKey.value = '';
    alert('API 키가 삭제되었습니다. 기본 내장 AI 엔진이 사용됩니다.');
    modalApi.classList.remove('active');
  });

  // --- Theory & Source Modal Handlers ---
  const modalTheory = document.getElementById('modal-theory');
  const btnOpenTheory = document.getElementById('btn-open-theory');
  const btnCloseTheory = document.getElementById('btn-close-theory');
  const btnCloseTheoryFooter = document.getElementById('btn-close-theory-footer');

  if (btnOpenTheory) {
    btnOpenTheory.addEventListener('click', () => {
      modalTheory.classList.add('active');
    });
  }

  if (btnCloseTheory) {
    btnCloseTheory.addEventListener('click', () => {
      modalTheory.classList.remove('active');
    });
  }

  if (btnCloseTheoryFooter) {
    btnCloseTheoryFooter.addEventListener('click', () => {
      modalTheory.classList.remove('active');
    });
  }

  // Close modals when clicking overlay background
  window.addEventListener('click', (e) => {
    if (e.target === modalApi) modalApi.classList.remove('active');
    if (e.target === modalGallery) modalGallery.classList.remove('active');
    if (e.target === modalTheory) modalTheory.classList.remove('active');
  });

});
