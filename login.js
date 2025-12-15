const id = document.getElementById('id');
const password = document.getElementById('password');
const loginButton = document.getElementById('login');
let errStack = 0;

//아이디 : inte
//비밀번호 : 0000
loginButton.addEventListener('click', () => {
    if (id.value === 'inte') {
        if (password.value === '0000') {
            alert('로그인 되었습니다!');
            localStorage.setItem('loggedIn', 'true');
            window.location.href = '202308032김은현Final.html'; // 메인 페이지로 이동
        } else {
            alert('아이디와 비밀번호를 다시 한 번 확인해주세요!');
            errStack++;
        }
    } else {
        alert('존재하지 않는 계정입니다.');
    }

    if (errStack >= 5) {
        alert('비밀번호를 5회 이상 틀리셨습니다. 비밀번호 찾기를 권장드립니다.');
    }
});

