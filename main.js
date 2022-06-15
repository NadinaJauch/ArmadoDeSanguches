let total = 0;
let valorRadio = 0;
let valorPan = 0;
function cambiarTotal(checkBox) {
  if ($("#" + checkBox).prop("checked"))
    total += parseInt($("#" + checkBox).val());
  else total -= parseInt($("#" + checkBox).val());

  $("#total").text(total);
}

function cambiarTotalRadioBase(radio) {
  if ($("#" + radio).prop("checked")) {
    total -= valorRadio;
    total += parseInt($("#" + radio).val());
    valorRadio = parseInt($("#" + radio).val());
  }
  $("#total").text(total);
}

function cambiarTotalRadioPan(radio) {
  if ($("#" + radio).prop("checked")) {
    total -= valorPan;
    total += parseInt($("#" + radio).val());
    valorPan = parseInt($("#" + radio).val());
  }
  $("#total").text(total);
}
