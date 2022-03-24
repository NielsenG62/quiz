$(document).ready(function () {
  $("form").submit(function (event) {
    event.preventDefault();

    $("#answer").addClass("hidden");
    $("#error").addClass("hidden");

    const age = parseInt($("#age").val());
    const velocity = $("#velocity").val();
    const trolley = $("#trolley").val();

    if (!age) {
      showError("Please enter your age.");
    } else if (!velocity) {
      showError("Please enter a velocity.");
    } else if (!trolley) {
      showError("Please answer the trolley problem.");
    } else {
      let answer = "";
      let img = "";
      if (age < 40) {
        if (
          velocity.toLowerCase().includes("type") ||
          velocity.toLowerCase().includes("kind")
        ) {
          if (trolley === "1") {
            answer = "Giga Chad";
            img = "img/giga-chad.jpg";
          } else {
            answer = "Monty Python French Knight";
            img = "img/monty.jpg";
          }
        } else {
          if (trolley === "1") {
            answer = "h e h u n g e r s";
            img = "img/simley.jpg";
          } else {
            answer = "Obi-Wan Kenobi";
            img = "img/obi-wan.jpg";
          }
        }
      } else {
        if (
          velocity.toLowerCase().includes("type") ||
          velocity.toLowerCase().includes("kind")
        ) {
          if (trolley === "1") {
            answer = "This Woman";
            img = "img/old-woman.jpg";
          } else {
            answer = "Willy Wonka";
            img = "img/gene-wilder.jpg";
          }
        } else {
          if (trolley === "1") {
            answer = "This painting, not the painter";
            img = "img/picasso.jpg";
          } else {
            answer = "Banana";
            img = "img/minion.jpg";
          }
        }
      }

      $("#answer h2").text(answer);
      $("#answer img").attr("src", img);
      $("#answer").removeClass("hidden");
    }
  });
});

function showError(error) {
  $("#error").removeClass("hidden");
  $("#error p").text(error);
}
