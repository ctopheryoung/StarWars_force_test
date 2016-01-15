$(document).ready(function() {
  $("form#question").submit(function(event) {
       var forceChoice = $("select#choice").val();

       if (forceChoice === "light") {
       var name = "Light Side"
       $("#whichSide").empty().append(name);
       $("#result").show();
     } else {
       var name = "Dark Side"
       $("#whichSide").empty().append(name);
       $("#result").show();
     }


     event.preventDefault();
   })
});
