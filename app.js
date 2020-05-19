
// Tutorial fulgt: https://www.youtube.com/watch?v=wlVmmsMD28w&t=778s

// Vis side funktion
$(document).ready(function(){
    $('.checkBtn').click(function(){
        $('.wrapmobil').toggleClass('active')
    })

    function showPage(pageId){
        console.log('show'+ data-target);
        $('.page').hide();
        $(pageId).show();
    }
});






/*const app = {
    pages:[],
    show: new Event('show'),
    init: function(){
        app.pages = document.querySelectorAll('.page');
        app.pages.forEach((pg)=>{
            pg.addEventListener('show', app.pageShown);
        })

        document.querySelectorAll('.nav-link').forEach((link)=>{
            link.addEventListener('click', app.nav);
        })
        history.replaceState({},'hjem', '#home');
        window.addEventListener('popstate', app.poppin);
    },
    nav: function(ev){
        ev.preventDefault();
        let currentPage = ev.target.getAttribute('data-target');
        document.querySelector('active').classList.remove('active');
        document.getElementById(currentPage).classList.add('active');
        console.log(currentPage)
        history.pushState({}, currentPage, `#${currentPage}`);
        document.getElementById(currentPage).dispatchEvent(app.show);
    },
    pageShown: function(ev){
        console.log('Page', ev.target.id, 'just shown')
        let h1 = ev.target.querySelector('h1');

    },
    poppin: function(ev){
        console.log(location.hash, 'popstate event')
        let hash = location.replace('#','');
        document.querySelector('active').classList.remove('active');
        document.getElementById(hash).classList.add('active');
        console.log(hash)
        //history.pushState({}, currentPage, `#${currentPage}`);
        document.getElementById(hash).dispatchEvent(app.show);
    },

}

document.addEventListener('DOMContentLoaded', app.init); */