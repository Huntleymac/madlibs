$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var pluralNoun1Input = $("input#pluralNoun1").val();
    var pluralNoun2Input = $("input#pluralNoun2").val();
    var pluralNoun3Input = $("input#pluralNoun3").val();
    var ingVerbInput = $("input#ingVerb").val();
    var noun1Input = $("input#noun1").val();
    var noun2Input = $("input#noun2").val();
    var verb1Input = $("input#verb1").val();

    $(".pluralNoun1").text(pluralNoun1Input);
    $(".pluralNoun2").text(pluralNoun2Input);
    $(".pluralNoun3").text(pluralNoun3Input);
    $(".ingVerb").text(ingVerbInput);
    $(".verb1").text(verb1Input);
    $(".noun1").text(noun1Input);
    $(".noun2").text(noun2Input);

    $("#story").show();

    event.preventDefault();
  });
});

$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var person1Input = $("input#person1").val();
    var person2Input = $("input#person2").val();
    var animalInput= $("input#animal").val();
    var exclamationInput = $("input#exclamation").val();
    var verbInput = $("input#verb").val();
    var nounInput = $("input#noun").val();

    $(".person1").text(person1Input);
    $(".person2").text(person2Input);
    $(".animal").text(animalInput);
    $(".exclamation").text(exclamationInput);
    $(".verb").text(verbInput);
    $(".noun").text(nounInput);

    $("#story").show();

    event.preventDefault();
  });
});
