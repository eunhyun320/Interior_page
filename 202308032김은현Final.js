const loginLink = document.getElementById('login-link');

// 페이지 로드 시 로그인 상태 확인 및 텍스트 설정
window.addEventListener('load', () => {
    updateLoginText();
});

// '로그인' 텍스트 클릭 시 처리 함수
loginLink.addEventListener('click', () => {
    let loggedIn = localStorage.getItem('loggedIn');

    if (loggedIn === 'true') {
        // 로그아웃 처리
        logout(); // 로그아웃 함수 호출
        
    } else {
        // 로그인 페이지로 이동
        window.location.href = 'login.html';
    }
});

// 로그아웃 함수
function logout() {
    localStorage.setItem('loggedIn', 'false');
    alert('로그아웃 되었습니다!');
    redirectToMainPage(); // 메인 페이지로 이동
    updateLoginText(); // 텍스트 업데이트
    
}

// 로그인 상태 확인 및 텍스트 설정 함수
function updateLoginText() {
    let loggedIn = localStorage.getItem('loggedIn');

    // 초기 로그인 상태가 설정되지 않았을 경우 기본값을 false로 설정
    if (loggedIn === null) {
        localStorage.setItem('loggedIn', 'false');
        loggedIn = 'false';
    }

    if (loggedIn === 'true') {
        loginLink.textContent = '로그아웃';
        disableLink(); // 링크 해제
    } else {
        loginLink.textContent = '로그인';
        enableLink(); // 링크 활성화
    }
}

// 링크 해제 함수
function disableLink() {
    loginLink.removeAttribute('href');
}

// 링크 활성화 함수
function enableLink() {
    loginLink.setAttribute('href', '#');
}

// 메인 페이지로 이동 함수
function redirectToMainPage() {
    window.location.href = '202308032김은현Final.html';
}
