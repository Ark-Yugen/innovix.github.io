$(document).ready(function(){
    let currentPage = "home";
    let currentNavLink = $("#nav-ul").children().first().children()[0];

    $("#portfolio").hide();
    $("#about").hide();
    $("#contact").hide();

    $(".nav-link").click(function(e){
        $(`#${currentPage}`).fadeOut(100)
        $(`#${e.currentTarget.innerHTML}`).fadeIn(500)

        currentPage = e.currentTarget.innerHTML

        $(currentNavLink).removeClass("selected");
        $(this).addClass("selected");
        
        currentNavLink = this;
    })

    let characterIndex = 0;

    let titleNames = ["S", "Sa", "Sat", "Sate", "Satye", "Satyen", "Satyen'", "Satyen's ", "Satyen's I", "Satyen's In", "Satyen's Inn", "Satyen's Inno", "Satyen's Innov", "Satyen's Innovi", "Satyen's Innovix", "Satyen's Innovix ", "Satyen's Innovix I", "Satyen's Innovix In", "Satyen's Innovix Ins", "Satyen's Innovix Inst", "Satyen's Innovix Insti", "Satyen's Innovix Instit", "Satyen's Innovix Institu", "Satyen's Innovix Institu", "Satyen's Innovix Instit", "Satyen's Innovix Insti", "Satyen's Innovix Inst", "Satyen's Innovix Ins", "Satyen's Innovix In", "Satyen's Innovix I", "Satyen's Innovix"];

    window.updateTitleName = function () {
        document.getElementsByTagName("title")[0].innerHTML = titleNames[characterIndex++ % titleNames.length];
    }

    setInterval(() => {
        window.updateTitleName()
    }, 100);
    
});