$(function () {
	/* Include html Files */
	$('.gnb-include').load('component/gnb.html');
	$('.main-header-include').load('component/main-header.html');
	$('.goods-detail-header-include').load('component/goods-detail-header.html');

	/* Category Accordion */
	$('.category-accordion .detail').eq(0).show();
	$('.category-accordion .title').on('click', function () {
		$(this).next().stop().slideToggle();
		$(this).siblings('.category-accordion .title').next().stop().slideUp();
		$(this).siblings('.category-accordion .title').removeClass('active');
		$(this).toggleClass('active');
	});

	/* recent search result */
	$('.search-recent .btn-clear').on('click', function () {
		$(this).parent().hide();
	});
	$('.btn-all-clear').on('click', function () {
		$('.search-recent .item').hide();
	});

	/* front page */
	//category-navigation
	$('.category-navigation a').on('click', function () {
		$(this).addClass('active');
		$(this).siblings().removeClass('active');
	});
	// wish 버튼 toggle
	$('.wish').on('click', function () {
		$(this).toggleClass('active');
		if ($(this).hasClass('active')) {
			$(this).append('<p>찜목록에 저장되었습니다.</p>');
			setTimeout(() => {
				$(this).children().remove();
			}, [1500]);
		}
	});

	//slider title 길이 조절
	if ($(window).width() <= 400) {
		$('.goods-title .title-cut').text(function (_, text) {
			return text.length > 24 ? text.substr(0, 24) + '...' : text;
		});
	} else if ($(window).width() <= 600) {
		$('.goods-title .title-cut').text(function (_, text) {
			return text.length > 29 ? text.substr(0, 28) + '...' : text;
		});
	}

	// Front footer btn-view-more toggle
	$('.btn-view-more').on('click', function () {
		$(this).parent().siblings().slideToggle();
	});

	// month, date 연결
	var month = new Date().getMonth() + 1;
	var date = new Date().getDate() + 1;

	$('.delivery-date .month').text(month);
	$('.delivery-date .date').text(date);

	$('.goods-accordion .detail').eq(0).show();
	$('.goods-accordion .title').on('click', function () {
		$(this).next().stop().slideToggle();
		$(this).siblings('.goods-accordion .title').next().stop().slideUp();
		$(this).siblings('.goods-accordion .title').removeClass('active');
		$(this).toggleClass('active');
	});

	/* goods-detail page 하단부 인터렉션 */
	$('.btn-order-choice').on('click', function () {
		$('.goods-order-final').slideDown(250);
		$('.goods-order-choice').hide();
		$('.overlay-fold').show();
	});
	$('.btn-fold, .overlay-fold').on('click', function () {
		$('.goods-order-final').slideUp(250);
		$('.goods-order-choice').show(251);
		$('.overlay-fold').hide();
	});

	// cart-items 삭제버튼
	$('.cart-items-header .btn-all-clear').on('click', function () {
		$('.cart-item').hide();
		$('.cart-items-summary .price').text('0원');
		$('.cart-items').html(
			'<p class="no-item">장바구니에 담긴 상품이 없습니다.</p>'
		);
	});
	$('.cart-item-title .btn-clear').on('click', function () {
		$(this).parent().parent().hide();
	});

	// cart-item의 수량버튼
	$('.count-wrap button').on('click', function (e) {
		e.preventDefault();
		var $count = $(this).parent('.count-wrap').find('.input');
		var now = parseInt($count.val());
		var min = 1;
		var max = 99;
		var num = now;

		if ($(this).hasClass('minus')) {
			if (now > min) num = now - 1;
		} else {
			if (now < max) num = now + 1;
		}
		if (num != now) $count.val(num);
	});

	/* Front Slider */
	$('.front-slider').slick({
		slidesToShow: 1,
		dots: false,
		arrows: true,
		autoplay: true,
		autoplaySpeed: 2500,
	});

	/* Goods Suggestion Slider */
	$('.goods-suggestion-items').slick({
		slidesToShow: 3,
		dots: false,
		arrows: false,
		autoplay: false,
		slidesToScroll: 2,
	});

	/* goods-detail Slider */
	$('.goods-detail-slider').slick({
		slidesToShow: 1,
		dots: true,
		arrows: false,
		autoplay: false,
		slidesToScroll: 1,
	});
});
