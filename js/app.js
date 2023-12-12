//nos permite armazenar informações extras em elementos HTML padrões e semânticos
$("[data-group]").each(function(){
    let $allTarget = $(this).find("[data-target]")// selecionando cada div
    let $allClick = $(this).find("[data-click]")// selecionando cada link (a)
    let activeClass = "active"; // armazenando um nome 
 
    //adicionando a class active nos primeiros elementos
    $allTarget.first().addClass(activeClass);
    $allClick.first().addClass(activeClass);

    $allClick.click(function(e){
        e.preventDefault();//previne o comportamento padrão

        let id = $(this).data("click")//selecionando exatamente o link que estou clicando atraves do atributo data
        let $target = $('[data-target="' + id +'"]')//
        
        //ao click removemos a class "active"
        $allClick.removeClass(activeClass)
        $allTarget.removeClass(activeClass)
        
        //ao click adc o "active"
        $target.addClass(activeClass)
        $(this).addClass(activeClass)
    })
    console.log($allClick)
})