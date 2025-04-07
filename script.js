// 모바일 디바이스 감지 함수
function isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

var tg = window.Telegram.WebApp;
tg.ready();

// 모바일 디바이스이고 텔레그램 웹앱인 경우에만 실행
if (isMobileDevice() && window.Telegram.WebApp) {
    tg.expand();
    tg.requestFullscreen();
    tg.disableVerticalSwipes();
}