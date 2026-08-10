/* =====================================================
   THÉO LORENZO MULTIMARCAS TL
   JAVASCRIPT COMPLETO
   ===================================================== */


/* =========================
   CONFIGURAÇÕES
   ========================= */

// Número do WhatsApp da loja
const WHATSAPP = "5586981942709";


/* =========================
   TEMA CLARO / ESCURO
   ========================= */

const themeButton = document.getElementById("themeButton");


// Verifica se o usuário já escolheu um tema
const temaSalvo = localStorage.getItem("tema-loja");


// Aplica o tema salvo
if (temaSalvo === "dark") {

    document.body.classList.add("dark");

    if (themeButton) {
        themeButton.textContent = "🌙";
    }

}


/* =========================
   ALTERAR TEMA
   ========================= */

if (themeButton) {

    themeButton.addEventListener("click", function () {

        document.body.classList.toggle("dark");


        const modoEscuro =
            document.body.classList.contains("dark");


        if (modoEscuro) {

            themeButton.textContent = "🌙";

            localStorage.setItem(
                "tema-loja",
                "dark"
            );

        } else {

            themeButton.textContent = "☀️";

            localStorage.setItem(
                "tema-loja",
                "light"
            );

        }

    });

}


/* =========================
   COMPRAR PRODUTO
   ========================= */

function comprar(produto) {

    // Verifica se o nome do produto existe
    if (!produto) {
        return;
    }


    // Mensagem que será enviada para a loja
    const mensagem =
        "Olá! 👋 Vim pelo site da THÉO LORENZO MULTIMARCAS TL." +
        "\n\n" +
        "Tenho interesse no produto:" +
        "\n👉 " + produto +
        "\n\n" +
        "Gostaria de saber se ainda está disponível.";


    // Converte a mensagem para URL
    const mensagemCodificada =
        encodeURIComponent(mensagem);


    // Cria o link do WhatsApp
    const link =
        "https://wa.me/" +
        WHATSAPP +
        "?text=" +
        mensagemCodificada;


    // Abre o WhatsApp
    window.open(link, "_blank");

}


/* =========================
   ANIMAÇÃO AO ROLAR
   ========================= */

const elementos =
    document.querySelectorAll(
        ".product-card, .hero-content, .hero-logo"
    );


const observador =
    new IntersectionObserver(

        function (entradas) {

            entradas.forEach(function (entrada) {

                if (entrada.isIntersecting) {

                    entrada.target.style.opacity = "1";

                    entrada.target.style.transform =
                        "translateY(0)";

                }

            });

        },

        {
            threshold: 0.12
        }

    );


elementos.forEach(function (elemento) {

    elemento.style.opacity = "0";

    elemento.style.transform =
        "translateY(25px)";

    elemento.style.transition =
        "opacity 0.6s ease, transform 0.6s ease";

    observador.observe(elemento);

});


/* =========================
   MENU SUAVE
   ========================= */

const linksMenu =
    document.querySelectorAll(
        '.navigation a[href^="#"]'
    );


linksMenu.forEach(function (link) {

    link.addEventListener(
        "click",
        function (evento) {

            const destino =
                document.querySelector(
                    link.getAttribute("href")
                );


            if (destino) {

                evento.preventDefault();


                destino.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        }
    );

});


/* =========================
   EFEITO NO HEADER
   ========================= */

const header =
    document.querySelector("header");


window.addEventListener(
    "scroll",
    function () {

        if (!header) {
            return;
        }


        if (window.scrollY > 50) {

            header.style.boxShadow =
                "0 5px 25px rgba(0,0,0,0.10)";

        } else {

            header.style.boxShadow =
                "none";

        }

    }
);


/* =========================
   MENSAGEM NO CONSOLE
   ========================= */

console.log(
    "THÉO LORENZO MULTIMARCAS TL carregada com sucesso! 🔥"
);