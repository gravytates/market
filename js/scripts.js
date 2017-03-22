$(document).ready(function() {

  $("#receiptPage").hide();

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

    $("#receiptPage").show();
    $("#homePage").hide();

    $("#colorRec").text(color);
    $("#customColorRec").text(customColor);
    $("#nameRec").text(name);
    $("#phoneRec").text(phone);
    $("#streetAddressRec").text(streetAddress);
    $("#cityRec").text(city);
    $("#stateRec").text(state);
    $("#zipcodeRec").text(zipcode);
    $("#paymentTypeRec").text(paymentType);

  });

});
