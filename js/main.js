const ARRAY_OF_COLORS = [
  "#7BDFF2", "#B2F7EF", "#EFF7F6", "#F7D6E0", "#F2B5D4",
  "#2EC4B6", "#CBF3F0", "#FFFFFF", "#FFBF69", "#FF9F1C",
  "#A9DEF9", "#EDE7B1", "#F694C1", "#E4C1F9", "#D3F8E2",
]
const ARRAY_OF_FONTS = [
  'Slabo 27px', 'Roboto Slab', 'Merriweather', 'Roboto',
  'Open Sans', 'Lato', 'Roboto Condensed', 'Oswald',
  'Montserrat', 'Ubuntu', 'Playfair Display', 'Lora',
  'PT Serif', 'Raleway', 'Source Sans Pro', 'PT Sans',
  'Noto Serif', 'Bitter', 'Crimson Text'
]
// Set random number to a function (rand)
var rand = function (arr) {
  return Math.floor(Math.random() * arr.length);
}

// Choose a random item from an array (randomEntity)
var randomEntity = function (array) {
  let entity = array[rand(array)];
  return entity;
}

// Jquery
$(document).ready(function () {
  $("button").click(function () {
    $.ajax({
      url: "select.php",
      method: "POST"

    }).done(function (result) {
      $(".row").hide().html(result).fadeIn();

      // .done variables
      let background_color = randomEntity(ARRAY_OF_COLORS),
        font_family = randomEntity(ARRAY_OF_FONTS);

      // CSS changes on "button" click
      $("body").css("background-color", background_color);
      $("blockquote p").css("font-family", font_family);
      $("button").html("New Quote   " + "<i class='fas fa-redo-alt fa-spin'></i>");

    }).fail(function (err) {
      // throw err;
      $(".row").html(err);
      console.log(err);
    });
  });
});