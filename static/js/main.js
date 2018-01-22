function setCookie(key, value) {
  var expires = new Date();
  expires.setTime(expires.getTime() + (1 * 24 * 60 * 60 * 1000));
  document.cookie = key + '=' + value + ';expires=' + expires.toUTCString() + ';domain=dattack.lv;path=/';
}

function getCookie(key) {
  var keyValue = document.cookie.match('(^|;) ?' + key + '=([^;]*)(;|$)');
  return keyValue ? keyValue[2] : null;
}

function rmCookieWarning(){
  var elem = document.querySelector('#cookie-warning');
  elem.parentNode.removeChild(elem);
}

function setDattackCookie(){
  setCookie('dattack', 'confirmed');
}

$(function () {
  var cookie = getCookie('dattack');
  if(cookie === 'confirmed') {
    rmCookieWarning();
  } else {
    $('#cookie-warning')[0].style.display = 'block';
    $('#cookie-confirm').on('click', setDattackCookie);
    $('#cookie-confirm').on('click', rmCookieWarning);
  }
});