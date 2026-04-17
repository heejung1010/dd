//해더
const btnMenu = document.querySelector(".btn-menu");
const allMenu = document.querySelector(".menu-smart-hidden") || document.querySelector(".all-menu");
const btnImg = document.querySelector(".btn-menu img") || document.querySelector(".btn-img");
let statusMenu = false;

const btnClose = document.querySelector('.btn-close-menu');

function closeMobileMenu() {
    allMenu.classList.remove('on');
    btnImg.setAttribute('src', './img/btn-menu.svg');
    statusMenu = false;
}
function openMobileMenu() {
    allMenu.classList.add('on');
    btnImg.setAttribute('src', './img/btn-close.svg');
    statusMenu = true;
}
if (btnMenu && allMenu && btnImg) {
    btnMenu.addEventListener('click', () => {
        if (statusMenu) {
            closeMobileMenu();
        } else {
            openMobileMenu();
        }
    });

    btnClose?.addEventListener('click', () => {
        if (statusMenu) {
            closeMobileMenu();
        }
    });

    // 스크롤 시 초기화
    window.addEventListener('scroll', () => {
        closeMobileMenu();

        const pcHeader = document.querySelector('.pc-header');
        if (window.innerWidth >= 769 && pcHeader) {
            if (window.scrollY > 80) {
                pcHeader.classList.add('white-mode');
            } else {
                pcHeader.classList.remove('white-mode');
            }
        }
    });
}


// 모바일 아코디언 버튼
const smartMenuLis = document.querySelectorAll('.gnb-smart > li');
smartMenuLis.forEach(li => {
    li.addEventListener('click', function() {
        this.classList.toggle('on');
    });
});



// 페이지가 완전히 로딩된 후 실행
document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('.main-header');
    function handleScroll() {
        if (header) {
            let scrollY = window.scrollY || window.pageYOffset;
            if (scrollY > 10) {
                header.classList.add('scrolled-line');
            } else {
                header.classList.remove('scrolled-line');
            }
            // 80px 이상 스크롤 시 흰색 배경
            if (scrollY > 80) {
                header.classList.add('white-mode');
            } else {
                header.classList.remove('white-mode');
            }
        }
    }
    // 스크롤 이벤트 연결
    window.addEventListener('scroll', handleScroll);

    handleScroll();
})
// 팝업
document.addEventListener('DOMContentLoaded', function() {
    const popupSlider = new Swiper(".popup-slider", {
        direction: 'horizontal',
        loop: true,
        slidesPerView: 'auto', 
        spaceBetween: 30, // 슬라이드 간 간격
        centeredSlides: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 10
            },
            768: {
                slidesPerView: 'auto',
                spaceBetween: 20
            }
        }
    });
});


// 포스터
const POSTER_DATA = [
  { title: "Airpods Max",
    p1: "에어팟 맥스의 우아한 곡선과 따뜻한 색감을 과감한 타이포그래피 레이어링으로 표현하여 제품의 심미적 가치를 극대화했습니다.",
    p2: "디테일 컷을 활용한 체계적인 레이아웃으로 시각적 위계를 정립하고, 브랜드 특유의 미니멀한 감성을 현대적인 무드로 완성했습니다.",
    color: "#2b5a9e"
},
  { title: "반려견 간식",
    p1: "반려견의 생동감 넘치는 표정과 원물 오브제를 조화롭게 배치하여 '신뢰할 수 있는 건강한 간식'이라는 메시지를 직관적으로 담았습니다.",
    p2: "타겟 소비자의 공감을 끌어내는 위트 있는 요소(말풍선)와 편안한 컬러감을 사용하여 브랜드에 대한 친밀도를 높이는 데 집중했습니다.",
    color: "#6B5B50"
},
  { title: "FOCUS 사진전",
    p1: "종이를 뚫고 나오는 입체적인 연출을 통해 피사체를 향한 강렬한 몰입감과 찰나의 순간을 감각적으로 표현했습니다.",
    p2: "강한 대비를 이루는 타이포그래피와 오브제 레이어링을 활용하여 사진전의 주제 의식을 직관적이고 임팩트 있게 전달했습니다.",
    color: "#8BA8A8"
},
  { title: "어니언 신메뉴 출시",
    p1: "제품의 바삭한 튀김옷과 부드러운 속 크림의 질감을 시각적으로 극대화하여 소비자의 식욕을 즉각적으로 자극하고자 했습니다.",
    p2: "주재료인 양파와 세 가지 신메뉴를 조화롭게 배치하여 시각적 위계를 확립했으며, 녹색 타이포그래피로 신선하고 트렌디한 브랜드 이미지를 연출했습니다.",
    color: "#B5A882"
},
  { title: "Ado Bakery Signature",
    p1: "베이커리의 대표 메뉴를 소개하기 위해 초콜릿이 흐르는 역동적인 연출과 선명한 체리 오브제로 제품의 특징을 시각적으로 구현했습니다.",
    p2: "클래식한 세리프체와 필기체를 조합한 타이포그래피 레이아웃을 통해 브랜드의 감성을 강조하고, 감각적인 시각 정보 전달에 집중했습니다.",
    color: "#4A3F35"
},
  { title: "Matcha Combo Menu",
    p1: "프레첼과 라떼의 세트 구성을 직관적으로 전달하기 위해, 흘러내리는 소스의 질감과 색감을 강조하여 시각적 몰입감을 높였습니다.",
    p2: "메인 오브제 중심의 시각적 위계 설정과 안정적인 타이포그래피 배치를 통해 정보 전달력과 브랜드의 감각적인 무드를 동시에 확보했습니다.",
    color: "#5F6B55"
},
  { title: "FOCUS 드로잉",
    p1: "카메라와 손의 형태를 섬세한 라인 아트로 표현하여, 찰나를 포착하기 위해 집중하는 사진가의 내면과 본질적인 시선을 시각화했습니다.",
    p2: "톤온톤 컬러의 사용과 절제된 그래픽 연출로 전시의 깊이감을 더했으며, 타이포그래피에 빛 반사 효과를 주어 시각적 포인트를 명확히 설정했습니다.",
    color: "#3E4149"
},
  { title: "카멜리아 케어",
    p1: "카멜리아 향과 진정 효과라는 제품 특성에 맞춰, 이끼 낀 고목과 맑은 물의 반영을 활용해 생동감 넘치는 자연의 순수함을 시각화했습니다.",
    p2: "다양한 자연 오브제를 조화롭게 배치하는 공간 구성 능력과, 제품의 투명한 질감을 살린 정교한 합성 기술을 통해 브랜드가 추구하는 친환경적 가치를 전달했습니다.",
    color: "#4E5C4E"
}
];

let currentIndex = 0;
const slides = document.querySelectorAll('.poster-list li');
const txtBox = document.getElementById('poster-txt');
const section = document.getElementById('poster-section');

function update() {
  const data = POSTER_DATA[currentIndex];

  // 이미지 이름표(data-status) 업데이트
  slides.forEach((slide, i) => {
    let status = "hidden";
    if (i === currentIndex) status = "active";
    else if (i === (currentIndex + 1) % slides.length) status = "next";
    else if (i === (currentIndex - 1 + slides.length) % slides.length) status = "prev";
    slide.setAttribute('data-status', status);
  });

  // 텍스트 실시간 삽입
  if(txtBox){
        txtBox.querySelector('h3').innerText = data.title;
        const pTags = txtBox.querySelectorAll('p');
        pTags[0].innerText = data.p1;
        pTags[1].innerText = data.p2;
  }

  // 배경색 부드럽게 전환
  if(section){
      section.style.backgroundColor = data.color;
  }
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  update();
}

// 클릭 전환 + 3초 자동 전환
if(section){
    section.addEventListener('click', nextSlide);
    setInterval(nextSlide, 5000);
}

// 페이지 로드 시 첫 실행
update();


document.addEventListener("DOMContentLoaded",()=>{

    // 위로 스크롤
    const btnTop = document.querySelector(".btn-top")
    btnTop.addEventListener("click",()=>{
        window.scrollTo({top:0,behavior:"smooth"})
    })

    // 스티커 제목 연해지기
    const detailTitle = document.querySelector(".detail-title")
    window.addEventListener("scroll",()=>{
        let windowHeight = window.innerHeight
        let scrollValue = window.scrollY
        console.log(scrollValue)
        let opacity = 1.1 - (scrollValue / windowHeight*3)
        opacity = Math.max(0.1, Math.min(1, opacity))
        detailTitle.style.opacity = opacity
    })



})