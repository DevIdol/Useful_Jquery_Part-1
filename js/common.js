$(document).ready(function () {
  /* JQuery Event
=====================
*/
  $(".click").click(function () {
    alert("paragraph was clicked");
  });
  $(".db-click").dblclick(function () {
    alert("paragraph was double clicked");
  });
  $(".mouse-enter").mouseenter(function () {
    $(this).css("background-color", "green");
  });
  $(".mouse-leave").mouseleave(function () {
    $(this).css("background-color", "skyblue");
  });
  $(".mouse-down").mousedown(function () {
    alert("Mouse down key was pressed");
  });
  $(".mouse-up").mouseup(function () {
    alert("Mouse up key was pressed");
  });
  $(".hover").hover(
    function () {
      $(this).css("background-color", "teal");
    },
    function () {
      $(this).css("background-color", "tomato");
    }
  );
  $(".focus").focus(function () {
    $(this).css("background-color", "teal");
  });
  $(".blur").blur(function () {
    $(this).css("background-color", "tomato");
  });
  $(".on").on("click", function () {
    document.getElementById("on").innerHTML = "Paragraph changed!";
  });

  /*JQuery Effect 
  ================ */

  $("#show").click(function () {
    $(".show-hide").show();
  });
  $("#hide").click(function () {
    $(".show-hide").hide();
  });
  $("#fadeOut").click(function () {
    $(".fade").fadeOut(1000);
  });

  $("#fadeIn").click(function () {
    $(".fade").fadeIn(1000);
  });
  $("#fadeToggle").click(function () {
    $(".outer").fadeToggle("swing");
  });
  $("#toggle-sliding").click(function () {
    $(".slide").slideToggle("slow");
  });
  $("#slide-up").click(function () {
    $(".slide").slideUp(600);
  });
  $("#slide-down").click(function () {
    $(".slide").slideDown("fast");
  });
  $("#animate").click(function () {
    $(".box").animate({
      width: "200px",
    });
    $(".box").animate({
      height: "200px",
    });
  });

  /*Jquery HTML 
  ================ */
  $("#get").click(function () {
    var res = $("#desc").html();
    alert(res);
  });
  $("#btn1").click(function () {
    $(".text").text("Hello world!");
  });
  $("#btn2").click(function () {
    $(".html").html("<b>Hello world!</b>");
  });
  $("#btn3").click(function () {
    $(".value").val("Full Name");
  });
  $("#addContent").click(function () {
    $(".new-content").append(" <b>This is new content</b>.");
  });
  $("#addDesc").click(function () {
    $(".new-desc").prepend("<b>This is new Desc</b>. ");
  });
  $("#removeDiv").click(function () {
    $(".remove-div").remove();
  });
  $("#emptyDiv").click(function () {
    $(".remove-div").empty();
  });
  $("#addBtn").click(function () {
    $(".add-remove").addClass("change-bg");
  });
  $("#removeBtn").click(function () {
    $(".add-remove").removeClass("change-bg");
  });
  $("#addCSS").click(function () {
    $(".add-css").css({ "background-color": "teal", "font-size": "20px" });
  });
});
