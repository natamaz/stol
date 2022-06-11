$(document).ready(function(){
    //banner sliders
    var bannerText = new Swiper('.bannerText', {
        effect: 'coverflow',
        autoplay: {
          delay: 5000,
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
    });
    var bannerImg = new Swiper('.bannerImgs', {
        effect: 'fade',
        autoplay: {
          delay: 5000,
        },
    });

    bannerText.on('slideChange', function () {
        bannerImg.slideTo( bannerText.activeIndex, true );
    });

    bannerImg.on('slideChange', function () {
        bannerText.slideTo( bannerImg.activeIndex, true );
    });
    //end banner sliders

    //sliders
    function InitProdSlider(item){
        var prodSlider = new Swiper('.' + item + ' .products__slider', {
            slidesPerView: 4,
            slidesPerColumn: 2,
            spaceBetween: 0,
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
            pagination: {
                el: '.swiper-pagination',
                type: 'fraction',
            },
            breakpoints: {
                640: {
                    slidesPerView: 2,
                },
            }
        });
    }
    InitProdSlider('tab-item1');

    function InitSamplesSlider(item){
        var SamplesSlider = new Swiper('.' + item + ' .catalog__slider', {
            slidesPerView: 4,
            slidesPerColumn: 3,
            spaceBetween: 50,
            navigation: {
              nextEl: '.catalog-button-next',
              prevEl: '.catalog-button-prev',
            },
            pagination: {
                el: '.catalog-pagination',
                type: 'fraction',
            },
            breakpoints: {
                640: {
                    spaceBetween: 5,
                    slidesPerView: 2,
                },
                768: {
                    spaceBetween: 10,
                    slidesPerView: 3,
                },
              }
        });
    }
    InitSamplesSlider('marbleSamples');

    //gallery
    function initGallery(item){
        var galleryThumbs = new Swiper('.' + item + ' .gallery-thumbs', {
            slidesPerView: 4,
            spaceBetween: 5,
            freeMode: true,
            watchSlidesVisibility: true,
            watchSlidesProgress: true,
            navigation: {
                nextEl: '.prices-button-next',
                prevEl: '.prices-button-prev',
            },
            breakpoints: {
                767: {
                    slidesPerView: 3,
                },
            }
        });
        var galleryTop = new Swiper('.' + item +  ' .gallery-top', {
            effect: 'fade',
            thumbs: {
                swiper: galleryThumbs
            }
        });
    }
    initGallery('value1');

    var aboutUsSlider = new Swiper('.aboutUs-slider', {
        slidesPerView: 1,
        navigation: {
          nextEl: '.aboutUs-slider .swiper-button-next',
          prevEl: '.aboutUs-slider .swiper-button-prev',
        },
        pagination: {
            el: '.aboutUs-slider .swiper-pagination',
            type: 'fraction',
        },
    });
    var aboutUsSlider2 = new Swiper('.aboutUs-slider2', {
        slidesPerView: 1,
        navigation: {
          nextEl: '.aboutUs-slider2 .swiper-button-next',
          prevEl: '.aboutUs-slider2 .swiper-button-prev',
        },
        pagination: {
            el: '.aboutUs-slider2 .swiper-pagination',
            type: 'fraction',
        },
    });
    var aboutUsSlider3 = new Swiper('.aboutUs-slider3', {
        slidesPerView: 1,
        navigation: {
          nextEl: '.aboutUs-slider3 .swiper-button-next',
          prevEl: '.aboutUs-slider3 .swiper-button-prev',
        },
        pagination: {
            el: '.aboutUs-slider3 .swiper-pagination',
            type: 'fraction',
        },
    });
    var aboutUsSlider4 = new Swiper('.aboutUs-slider4', {
        slidesPerView: 1,
        navigation: {
          nextEl: '.aboutUs-slider4 .swiper-button-next',
          prevEl: '.aboutUs-slider4 .swiper-button-prev',
        },
        pagination: {
            el: '.aboutUs-slider4 .swiper-pagination',
            type: 'fraction',
        },
    });

    //Tabs
    $('.filter-items').on('click', function(){
        var dataTab = $(this).data('tab');
        $('.filter-items').removeClass('active');
        $('.tab-item').removeClass('active');
        
        $(this).addClass('active');
        $('.' + dataTab).addClass('active');
        InitProdSlider(dataTab);
    });

    $('.top-tabs').on('click', function(){
        var dataTab = $(this).data('tab');
        $('.top-tabs').removeClass('active');
        $('.body-item').removeClass('active');
        
        $(this).addClass('active');
        $('.' + dataTab).addClass('active');
        InitSamplesSlider(dataTab);
    });

    $('.top-titles').on('click', function(){
        var dataTab = $(this).data('tab');
        $('.top-titles').removeClass('active');
        $('.bodyBlk').removeClass('active');
        
        $(this).addClass('active');
        $('.' + dataTab).addClass('active');
        initGallery(dataTab);
    });
    //End Tabs

      //Map setting
    ymaps.ready(init);
    var mapCoord = $('#map').attr('data-coord');
    mapCoord = JSON.parse(mapCoord);
    function init() {
        var center = mapCoord;
            var myMap1 = new ymaps.Map('map', {
                center: center,
                zoom: 14
            });
            myPlacemark1 = new ymaps.Placemark(myMap1.getCenter(), {
                hintContent: '',
                balloonContent: ''
            }, {
                iconLayout: 'default#image',
                iconImageHref: '../images/location.png',
                iconImageSize: [35, 59],
                iconImageOffset: [-5, -38]
            });

            myMap1.geoObjects.add(myPlacemark1);
            myMap1.setCenter(mapCoord, 14);
            myMap1.controls.remove('geolocationControl');
            myMap1.controls.remove('searchControl');
            myMap1.controls.remove('trafficControl');
            myMap1.controls.remove('typeSelector');
            myMap1.controls.remove('fullscreenControl');
            myMap1.controls.remove('rulerControl');
        }
    //End Map setting 

    $('input[type="file"]').change(function(e){
        var fileName = e.target.files[0].name;
        $('.form-file label').text(fileName);
    });

    $('.popupBody').mCustomScrollbar();

  

}); 
