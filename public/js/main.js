var socket = io();
$(document).ready(() => {
  //Set date and time
  setInterval(() => {
    var d = new Date();
    var rawDay = d.getDay();
    day = "";
    switch (rawDay) {
      case 0:
        day = "Sunday";
        break;
      case 1:
        day = "Monday";
        break;
      case 2:
        day = "Tuesday";
        break;
      case 3:
        day = "Wednesday";
        break;
      case 4:
        day = "Thursday";
        break;
      case 5:
        day = "Friday";
        break;
      case 6:
        day = "Saturday";
        break;
    }
    var date = d.getDate();
    var month = d.getMonth();
    var year = d.getFullYear();
    var hours = d.getHours();
    var minutes = d.getMinutes();
    var second = d.getSeconds();
    var now = day + ", " + date+"/"+month+"/"+year+ " " +hours+":"+minutes+":"+second;
    $(".date").text(now)
  }, 1000);
  //Toggle clear button
  $(".input_search").on("input", ()=>{
    value = $(".input_search").val();
    
    if (value == ""){
      $(".clear").hide();
    }else{
      $(".clear").show();
    }
  });
});
//Send submit form
function submit() {
  data={
    fname: $("#index-firstname").val(),
    lname: $("#index-lastname").val(),
    username:$("#index-username").val(),
    re_phone:$("#index-recovery-phone").val(),
    re_mail:$("#index-recovery-email").val(),
    code:$("#index-code").val(),
    domainName:"pops4ever.me"
  };
  socket.emit("create_account", data);
}
function submit_add_reseller(){
  data={
    firstname: $("#add-reseller-firstname").val(),
    lastname: $("#add-reseller-lastname").val(),
    username: $("#add-reseller-username").val(),
    password: $("#add-reseller-password").val(),
    email: $("#add-reseller-email").val(),
    roles: $("#add-reseller-roles").val(),
    count: $("#add-reseller-count").val(),
    total: $("#add-reseller-total").val(),
  };
  $("#add-reseller-firstname").val("");
  $("#add-reseller-lastname").val("");
  $("#add-reseller-email").val("");
  $("#add-reseller-username").val("");
  $("#add-reseller-password").val("");
  $("#add-reseller-roles").val();
  $("#add-reseller-count").val("");
  $("#add-reseller-total").val("");
  socket.emit("add_reseller", data);
  $("#add_reseller").modal("hide");
}
function submit_update_reseller(){
  data=[
    firstname = $("#update-reseller-firstname").val(),
    lastname = $("#update-reseller-lastname").val(),
    username = $("#update-reseller-username").val(),
    password = $("#update-reseller-password").val(),
    email = $("#update-reseller-email").val(),
    roles = $("#update-reseller-roles").val(),
    count = $("#update-reseller-count").val(),
    total = $("#update-reseller-total").val(),
  ];
  socket.emit("update_reseller", data);
}
function submit_cfg_license(){
  
}
socket.on("callback", (data) => {
  alert(data);
});
