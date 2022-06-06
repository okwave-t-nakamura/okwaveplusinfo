// JavaScript Document


// タブレットでPCを表示する用

if ((navigator.userAgent.indexOf('iPhone') > 0) || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
  document.write('<meta name="viewport" content="width=device-width">');
}else{
  document.write('<meta name="viewport" content="width=1250">');
}

// Copyright　年号表示
// HTMLの記述　<script type="text/javascript">ShowNowYear();</script>

function ShowNowYear() {
  var now = new Date();
  var year = now.getFullYear();
  document.write(year);
}
