(function() {

    const btn = document.querySelector('.btn');
    const texto = document.querySelector('.texto');

    const url = "https://api.adviceslip.com/advice";

    btn.addEventListener('click', criacaoAjax)

    function criacaoAjax() {
        const ajax = new XMLHttpRequest();
        ajax.open('GET', url);
        ajax.send(null);


        ajax.onreadystatechange = function() {
            if (ajax.readyState === 4) {
                if (ajax.status === 200) {
                    json = JSON.parse(ajax.responseText)

                    const frase = json['slip']['advice'];
                    texto.innerHTML = frase;


                } else {
                    console.log('algo deu errado');
                }
            }

        }


    }

    criacaoAjax()
})()