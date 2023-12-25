let menu = ["rau xào", "thịt luộc", "gà rán"];
const nhap = prompt("Hãy nhập 1 trong 4 kí tự sau:C, R, U, D");
if (nhap == "C") {
  let b = prompt("Mời người dùng nhập món ăn muốn thêm vào menu");
  menu.push(b);
  localStorage.setItem("menu", JSON.stringify(menu));
}
if (nhap == "R") {
  alert(menu.join(","));
}
if (nhap == "U") {
  let d = prompt("Mời người dùng nhập vào tên món muốn update");
  let mon_update = menu.indexOf(d);
  if (mon_update != -1) {
    let monmoi = prompt("Mời người dùng nhập vào tên món ăn mới");
    menu[mon_update] = monmoi;
    localStorage.setItem("menu", JSON.stringify(menu));
  }
}
if (nhap == "D") {
  let e = prompt("Mời người dùng nhập vào tên món muốn Delete");
  let mon_delete = menu.indexOf(e);
  if (mon_delete != -1) {
    menu[mon_delete] = e;
    menu.splice(mon_delete, 1);
    localStorage.setItem("menu", JSON.stringify(menu));
  }
}
