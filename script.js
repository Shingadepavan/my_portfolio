const hamb = document.querySelector
    ('.header .nav-bar .nav-list .hamb');
const mobile_menu = document.querySelector
    ('.header .nav-bar .nav-list ul');
const header = document.querySelector
    (' .header .container');

hamb.addEventlistener('click', () => {
    humb.classlist.toggle('active');
    mobile_menu .classlist.toggle('active');

});

document.addEventlistener('scroll',() => {
    var scroll_position = window.scrollY;
    if(scroll_position > 250){
        header.style.backgroundcolor = '#29323c';
    }else{
        header.style.backgroundcolor = 'transprent';
    }
});