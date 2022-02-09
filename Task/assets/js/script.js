$(function () {
  $(document).ready(function () {
    // $("p").click(function ()
    $("p").dblclick(function () {
      $(this).hide();
    });
  });

  $(document).ready(function () {
    // $("p").mouseenter(function () {
    //   alert("You entered p");
    // });
    // $("p").mouseleave(function () {
    //   alert("Bye!");
    // });
    // $("p").mousedown(function () {
    //   alert("Mouse down over p!");
    // });
    // $("p").mouseup(function () {
    //   alert("Mouse up over p!");
    // });
    // $("p").hover(function(){
    //     alert("You entered p!");
    //   },
    //   function(){
    //     alert("Bye! You now leave p!");
    //   }); 


    // $("input").focus(function () {
    //     $(this).css("background-color", "yellow");
    // })
    // $("input").blur(function () {
    //     $(this).css("background-color", "green")
    // })

    // $("#hide").click(function () {
    //     $("p").hide(1000)
    // })
    // $("#show").click(function () {
    //     $("p").show(1000)
    // })

    $("button").click(function(){
        $("#div1").fadeIn();
        $("#div2").fadeIn("slow");
        $("#div3").fadeIn(3000);
      });
  });
});
