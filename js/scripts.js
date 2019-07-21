// ======================================================
// js / scripts.js
// ======================================================

// When document is ready
// ======================================================

/**
 * Execute all my functions.
 *
 * @param {*} data : Your aunt's data.
 */
var dynamicActions = function(data) {
  $(document).ready(function() {
	console.log(data);
    updateDocumentTitle(data.documentTitle);
	addArticles(data["articles"]);
	addRecettes(data["recipes"]);
	createCarousel();
    // function2()...
    // function3()...
    // function4()...
    // etc.
  });
};

// My functions
// ======================================================

/**
 * Update the document's title by using the provided data.
 */
var updateDocumentTitle = function(name) {
  document.title = name;
};

var addArticles = function(articles) {
    for (i = 0; i < articles.length; i++) {
        var new_article = $("<article></article>").addClass("row");
        var text_article = $("<div></div>");
        var image_article = $("<div></div>");
        if (i % 2 == 0) {
            text_article.addClass("col-md-7");
            image_article.addClass("col-md-5");
        } else {
            text_article.addClass("col-md-7 order-md-2");
            image_article.addClass("col-md-5 order-md-1");
        }
        var title = $("<h1></h1>").text(articles[i].title);
        var subtitle = $("<h2></h2>").text(articles[i].subtitle);
        var content = $("<p></p>").addClass("lead").text(articles[i].content);
        var img = $("<img>").addClass("bd-placeholder-img-lg img-fluid mx-auto").attr({
            "width": "500",
            "height": "500",
			"alt": "image de Sylvie non disponible"
        });
        if (articles[i].imgUrl == "NO IMAGE, PLEASE FIND ONE :("
            || articles[i].imgUrl.length == "") {
            img.attr("src", "assets/placeholder.png");
        } else {
            img.attr("src", articles[i].imgUrl);
        }
        $(text_article).append(title, subtitle, content);
        $(image_article).append(img);
        $(new_article).append(text_article, image_article);
        $("#accueil").append(new_article);
    }
};

var addRecettes = function(recipes){
	for (i = 0; i < recipes.length; i++) {
		 var recipe = $("<div></div>");
		 
		 var img = $("<img>").addClass("bd-placeholder-img-lg img-fluid mx-auto").attr({
            "width": "500",
            "height": "500"
        });
        if (recipes[i].imgUrl == "NO IMAGE, PLEASE FIND ONE :("
            || recipes[i].imgUrl.length == "") {
            img.attr("src", "assets/placeholder.png");
        } else {
            img.attr("src", recipes[i].imgUrl);
        }
		
		var description = $("<p></p>").addClass("lead").text(recipes[i].description);
		var price = $("<p></p>").addClass("text-muted").text(parseFloat(recipes[i].price).toFixed(2) + "$");
		$(recipe).append(img, description, price);
		$('.carousel').append(recipe);
	}
};

var createCarousel = function(){
	$('.carousel').slick({
	arrows: true,
	infinite: true,
	slidesToShow: 3,
	slidesToScroll: 1,
	dots:true,
	centerMode: true,
	responsive: [
		{
		  breakpoint: 1500,
		  settings: {
			slidesToShow: 2,
			slidesToScroll: 1,
			infinite: true,
			dots: true
		  }
		},
		{
		  breakpoint: 900,
		  settings: {
			slidesToShow: 1,
			slidesToScroll: 1,
			infinite: true,
			dots: true
		  }
		}
	]
	
	});
};

