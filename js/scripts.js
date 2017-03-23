$(document).ready(function() {

  $("#receiptPage").hide();

  $("#customColorDiv").hide();

  $("#color").change(function() {
    if ($("#color").val() === "Custom color picker") {
      $("#customColorDiv").show();
    } else {
      $("#customColorDiv").hide();
    };
  });

  $("#submit").click(function() {

    var color = $("#color").val();
    var customColor = $("#customColor").val();
    var name = $("#name").val();
    var phone = $("#phone").val();
    var streetAddress = $("#streetAddress").val();
    var city = $("#city").val();
    var state = $("#state").val();
    var zipcode = $("#zipcode").val();
    var paymentType = $("#paymentType").val();

    var useralert = function(htmlId, defaultSelection, stopsign) {
      if ($(htmlId).val() === defaultSelection){
        alert(stopsign);
        $("#recieptPage").hide();
        $("#homePage").show();
      } else {
        $("#homePage").slideUp();
        $("#receiptPage").show();
      };
    };

    useralert("#paymentType", "Choose your payment option...", "Please input payment");
    useralert("#color", "Choose your color...", "Please choose a color");
    useralert("#state", "Choose your state...", "Please choose a state");

    $("#colorRec").text("Ducati Monster color: " + color);
    $("#customColorRec").text("Custom Ducati Monster color: " + customColor);
    $("#nameRec").text("Name: " + name);
    $("#phoneRec").text("Phone number: " + phone);
    $("#streetAddressRec").text("Street Address: " + streetAddress);
    $("#cityRec").text("City: " + city);
    $("#stateRec").text("State: " + state);
    $("#zipcodeRec").text("Zipcode: " + zipcode);
    $("#paymentTypeRec").text("Method of payment: "  + paymentType);

    $("#thanks").text("Thank you for your order, " + name + "!");
  });

});
