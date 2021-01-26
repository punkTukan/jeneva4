$(document).ready(function(){

    var brands = [];
    var price = [];

    brands = $('.list').find('.name').text();
    brands = brands.split(" ");
    price = $('.list').find('.price').text();
    price = price.split('$');

    function builder(add)
    {
        var up = '<div class="product_div"><div class="type"><div class="lol">WATCHES </div></div><img src="https://laikswatches.lv/media/images/items/0038/th1/items-37710-32422.jpg" alt=""><div class="info"><div class="wrapper">';
        var down = '</div></div></div>';
        return up + add + down;
    }

    $('.filter').click(function(){
        var brandsC = [];
        var priceC = [];
        var current = '';
        $('input[name="vehicle"]:checked').each(function(){
            brandsC.push(this.value);
        });
        $('input[name="vehiclee"]:checked').each(function(){
            priceC.push(this.value);
        });

        if(brandsC.length > 0 && priceC.length == 0)
        {
            for(var i = 0; i < brands.length; i++)
            {
                var tmp = brands[i];
                for(var j = 0; j < brandsC.length; j++)
                {
                    if(tmp == brandsC[j])
                    {
                        current += builder('<p class="name">'+ tmp +' </p>' + '<p class="price">'+price[i]+'</p>');
                    }
                }
            }
            $('.list').html(current);
        }
        else if(brandsC.length == 0 && priceC.length > 0)
        {
            for(var i = 0; i < price.length; i++)
            {
                var tmp = price[i];
                if(priceC.length == 1)
                {
                    if(parseInt(priceC[0].split('-')[0]) <= parseInt(tmp) && parseInt(tmp) <= parseInt(priceC[0].split('-')[1]))
                    {
                        current += builder('<p class="name">'+ brands[i] +' </p>' + '<p class="price">'+tmp+'</p>');
                    }
                }
                else
                {
                    if(parseInt(priceC[0].split('-')[0]) <= parseInt(tmp) && parseInt(tmp) <= parseInt(priceC[priceC.length-1].split('-')[1]))
                    {
                        current += builder('<p class="name">'+ brands[i] +' </p>' + '<p class="price">'+tmp+'</p>');
                    }
                }
            }
            $('.list').html(current);
        }
        else if(brandsC.length > 0 && priceC.length > 0)
        {
            for(var i = 0; i < brands.length; i++)
            {
                var tmp = brands[i];
                var tmp2 = price[i];
                for(var j = 0; j < brandsC.length; j++)
                {
                    if(tmp == brandsC[j])
                    {
                        if(priceC.length == 1)
                        {
                            if(parseInt(priceC[0].split('-')[0]) <= parseInt(tmp2) && parseInt(tmp2) <= parseInt(priceC[0].split('-')[1]))
                            {
                                current += builder('<p class="name">'+ brands[i] +' </p>' + '<p class="price">'+tmp2+'</p>');
                            }
                        }
                        else
                        {
                            if(parseInt(priceC[0].split('-')[0]) <= parseInt(tmp2) && parseInt(tmp2) <= parseInt(priceC[priceC.length-1].split('-')[1]))
                            {
                                current += builder('<p class="name">'+ brands[i] +' </p>' + '<p class="price">'+tmp2+'</p>');
                            }
                        }
                    }
                }
            }
            $('.list').html(current);
        }

        
        $('.product_div').hover(function(){
            $(this).find('.info').show(100);
            $(this).css("border", "1px solid rgba(214, 177, 97, 0.7)");
        },
            function()
            {
                $(this).find('.info').hide(100);
                $(this).css("border", "none");
            }
        );
    });

    $('.product_div').hover(function(){
        $(this).find('.info').show(100);
        $(this).css("border", "1px solid rgba(214, 177, 97, 0.7)");
    },
        function()
        {
            $(this).find('.info').hide(100);
            $(this).css("border", "none");
        }
    );

    function show()
    {
        if($(this).find('.inf-wrap').css('display') == 'block' && $(this).find('.inf-wrap:hover').length == 0)
        {
            $(this).find('.inf-wrap').fadeOut();
            $(this).find('.minus').css("display", "none");
            $(this).find('.arr').css("display", "block");
        }
        else
        {
            $(this).find('.inf-wrap').fadeIn();
            $(this).find('.minus').css("display", "block");
            $(this).find('.arr').css("display", "none");
        }
    }

    $('.brand').click(show);
    $('.price').click(show);
    $('.sex').click(show);
    $('.size').click(show);
});

window.onscroll = function showHeader(){
    var header = $('.mainlinks');

    if(window.pageYOffset >= 184)
    {
        header.addClass('nav-fixed');
    }
    else
    {
        header.removeClass('nav-fixed');
    }

    var scroll = window.scrollY;
}