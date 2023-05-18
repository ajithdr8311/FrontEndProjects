$(document).ready(function() {
    $(".toggle-row").hide();
});

$(document).ready(function(){
    $(".toggler-link").click(function(){
      $(".toggle-row").toggle(1000);
    });
  });



//   function to hide the winners sections
  $(document).ready(function() {
      $(".winners").hide();
  });


  //   function to show live-tenders sections and hide winners section
  $(document).ready(function() {
      $(".live-tender-link").click(function() {
          $(".winners").hide();
          $(".live-tenders").show();
          $(".toggler-link").show();
      })
  })

  // function to show the winners section and hide the live-tenders section
  $(document).ready(function() {
      $(".winners-link").click(function() {
          $(".live-tenders").hide();
          $(".toggler-link").hide();
          $(".winners").show();
      });
  });


