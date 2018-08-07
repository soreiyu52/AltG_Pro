window.onload = function () {
  //sideNav設定
  var elemSideNav = document.querySelector('.sidenav');
  var sideNavOptions = {
    draggable: false
  }
  var instance = M.Sidenav.init(elemSideNav, sideNavOptions);

  //select設定
  var elemSelect = document.querySelectorAll('select');
  var selectOptions = {};
  var instances = M.FormSelect.init(elemSelect, selectOptions);
}