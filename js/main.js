$(function(){
    $('#masthead').data('size','big');
});

$(window).scroll(function(){
    if($(document).scrollTop() > 0)
    {
        if($('#masthead').data('size') == 'big')
        {
            $('#masthead').data('size','small');
            $('#masthead').stop().animate({
                height:'40px'
            },600);
            $('#masthead .site-title').stop().animate({
                fontSize: '20px',
                marginTop: '10px',
                marginBottom: '10px'
            },600);
            $('#masthead .logo').stop().animate({
                height:'30px',
                width: '30px',
                marginTop: '5px',
                marginBottom: '5px'
            },600);
            $('#masthead .site-links li a').stop().animate({
                fontSize: '1em',
                paddingTop: '12px',
                paddingBottom: '12px'
            },600);
            $('.banner').stop().animate({
                marginTop:'40px'
            },600);
        }
    }
    else
    {
        if($('#masthead').data('size') == 'small')
        {
            $('#masthead').data('size','big');
            $('#masthead').stop().animate({
                height:'140px'
            },600);
            $('#masthead .site-title').stop().animate({
                fontSize: '2em',
                marginTop: '54px',
                marginBottom: '54px'
            },600);
            $('#masthead .logo').stop().animate({
                height:'100px',
                width: '100px',
                marginTop: '20px',
                marginBottom: '20px'
            },600);
            $('#masthead .site-links li a').stop().animate({
                fontSize: '20px',
                paddingTop: '60px',
                paddingBottom: '60px'
            },600);
            $('.banner').stop().animate({
                marginTop:'140px'
            },600);
        }  
    }
});
