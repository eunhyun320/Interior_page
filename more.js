// 각 섹션의 "더보기" 버튼에 대한 처리
document.querySelectorAll('.loadMore').forEach(button => {
    button.addEventListener('click', function() {
        const section = this.closest('section');
        handleLoadMore(section); // 사진 보이기/숨기기 처리
        adjustFooterPosition(); // 푸터 위치 조정
    });
});

function handleLoadMore(section) {
    const loadMoreBtn = section.querySelector('.loadMore');
    const hiddenPhotos = section.querySelectorAll('.photo.hidden');
    let showAdditionalPhotos = loadMoreBtn.dataset.showPhotos === 'true';

    if (!showAdditionalPhotos) {
        // 처음 클릭 시 숨겨진 사진들을 보이도록 처리
        hiddenPhotos.forEach((photo, index) => {
            if (index < 4) {
                photo.classList.remove('hidden');
            }
        });
        loadMoreBtn.textContent = '접기'; // 버튼 텍스트 변경
        loadMoreBtn.dataset.showPhotos = 'true'; // 데이터 속성 업데이트
    } else {
        // 두 번째 클릭 시 추가로 보인 사진들을 숨김 처리
        section.querySelectorAll('.photo:not(.hidden)').forEach((photo, index) => {
            if (index >= 4) {
                photo.classList.add('hidden');
            }
        });
        loadMoreBtn.textContent = '더보기'; // 버튼 텍스트 변경
        loadMoreBtn.dataset.showPhotos = 'false'; // 데이터 속성 업데이트
    }
}


//footer 위치 조정
function adjustFooterPosition() {
    const footer = document.querySelector('footer');
    const main = document.querySelector('main');
    const shigongBottom = document.querySelector('.shigong').getBoundingClientRect().bottom;
    const inteBottom = document.querySelector('.inte').getBoundingClientRect().bottom;

    // 보이는 섹션의 하단 위치
    const visibleSectionBottom = Math.max(shigongBottom, inteBottom);
    const mainBottom = main.getBoundingClientRect().bottom;
    const footerTop = footer.getBoundingClientRect().top;

    if (mainBottom > footerTop) {
        // main 요소의 하단이 footer 상단보다 아래에 있을 경우
        const distance = mainBottom - footerTop + 50; // 추가 여백 조정 가능
        footer.style.marginTop = `${distance}px`;
    } else if (visibleSectionBottom > footerTop) {  
        // 보이는 섹션의 하단이 footer 상단보다 아래에 있을 경우
        const distance = visibleSectionBottom - footerTop + 50; // 추가 여백 조정 가능
        footer.style.marginTop = `${distance}px`;
    } else if (inteBottom > footerTop) {
        const distance = inteBottom - footerTop + 50;
        footer.style.marginTop = `${distance}px`;
    } else {
        // 그 외의 경우 기본 위치로 복원
        footer.style.marginTop = '50px';
    }
}

// 페이지 로드 시 footer 위치 초기화
window.addEventListener('load', adjustFooterPosition);
