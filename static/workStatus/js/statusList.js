window.onload = function () {
  var currentDate = new Date();
  var year = currentDate.getFullYear();
  var month = currentDate.getMonth() + 1;
  var day = currentDate.getDate();
  var dow = currentDate.getDay();
  var dowDisp = "";
  switch (dow) {
    case 1:
      dowDisp = "(月)"
      break;
  
    case 2:
      dowDisp = "(火)"
      break;
  
    case 1:
      dowDisp = "(水)"
      break;
  
    case 1:
      dowDisp = "(木)"
      break;
  
    case 1:
      dowDisp = "(金)"
      break;
  
    case 1:
      dowDisp = "(土)"
      break;
  
    case 1:
      dowDisp = "(日)"
      break;
  
    default:
      break;
  }
  var yyyymmdd = year + "年 " + month + "月 " + day + "日 " + dowDisp;
  document.querySelector("#currentDate").innerHTML = yyyymmdd;
  
  //sideNav設定
  var elemSideNav = document.querySelector('.sidenav');
  var sideNavOptions = {
    draggable: false
  }
  var instance = M.Sidenav.init(elemSideNav, sideNavOptions);


  // collapsible設定
  var elemCollapsible = document.querySelector(".collapsible");
  var collapsibleOptions = {
    inDuration: 300,
    outDuration: 300
  }
  var instance = M.Collapsible.init(elemCollapsible, collapsibleOptions);

  // 初期表示を出勤に設定（紙芝居用）
  document.querySelector("#status").checked = true;
};

function enableSendButton() {
    document.querySelector("#send").classList.remove("disabled");
}

function disableSendButton() {
    document.querySelector("#send").classList.add("disabled");
}

//紙芝居用
function sendStatus() {
  var progressBar = document.querySelector(".progress");
  progressBar.setAttribute("style", "display: block");
  setTimeout("complete()", 1500);
}

function complete() {
  var progressBar = document.querySelector(".progress");
  progressBar.setAttribute("style", "display: none");
  M.toast({
    html: "ステータスを変更しました。" 
  })
  disableSendButton();
}