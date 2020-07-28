function toggleNav() {

    if( document.getElementById("menu-nav-tablet").style.width == "70vw" ) {
        document.getElementById("menu-nav-tablet").style.width = "0vw"
    } else {
        document.getElementById("menu-nav-tablet").style.width = "70vw"
    }

    if( document.getElementById("menu-nav-mobile").style.width == "80vw" ) {
        document.getElementById("menu-nav-mobile").style.width = "0vw"
    } else {
        document.getElementById("menu-nav-mobile").style.width = "80vw"
    }

}   

function seletorSlide(elemento) {

    /* Armazena as classes e o id do seletor que foi clicado */
    let classes = elemento.classList
    let id = elemento.id

    /* Checa se ele já estava selecionado */
    if( classes.contains("active") == false ) {

        /* Verifica a seção a que pertence o seletor */
        if( id.includes("banner") ) {

            let seletorAtual = document.querySelector(".banner .pointers .pointer.active")
            let slider = document.querySelector(".banner .sliders")

            /* Limpa o seletor atual */
            seletorAtual.classList.remove("active")

            elemento.classList.add("active")

            /* Determinação do slide a ser mostrado */
            switch(id) {
                case "pointer-banner-1":

                    slider.style.marginLeft = "0vw"
                    break

                case "pointer-banner-2":

                    slider.style.marginLeft = "-100vw"
                    break

                case "pointer-banner-3":

                    slider.style.marginLeft = "-200vw"
                    break

                default:
                    break;
                    
            }

        } else if( id.includes("team") ){

            // let seletorAtual = document.querySelector(".section-team-area .section-body .pointers .pointer.active")
            // let slider = document.querySelector(".section-team .sliders")

            // /* Limpa o seletor atual */
            // seletorAtual.classList.remove("active")

            // elemento.classList.add("active")

            // /* Determinação do slide a ser mostrado */
            // switch(id) {

            //     case "pointer-team-1":

            //         slider.style.marginLeft = "0"
            //         break

            //     case "pointer-team-2":

            //         slider.style.marginLeft = "-100%"
            //         break

            //     case "pointer-team-3":

            //         slider.style.marginLeft = "-200%"
            //         break

            //     default:
            //         break;

            // }

        } else if( id.includes("clients") ) {

            let seletorAtual = document.querySelector(".section-clients .pointers .pointer.active")
            let slider = document.querySelector(".section-clients .sliders")

            /* Limpa o seletor atual */
            seletorAtual.classList.remove("active")

            elemento.classList.add("active")

            /* Determinação do slide a ser mostrado */
            switch(id) {
                case "pointer-clients-1":

                    slider.style.marginLeft = "0vw"
                    break

                case "pointer-clients-2":

                    slider.style.marginLeft = "-100vw"
                    break

                case "pointer-clients-3":

                    slider.style.marginLeft = "-200vw"
                    break

                default:
                    break;
                    
            }

        } else if( id.includes("features") ) {

            let seletorAtual = document.querySelector(".section-features-all .pointers .pointer.active")
            let slider = document.querySelector(".section-features-all .sliders")

            /* Limpa o seletor atual */
            seletorAtual.classList.remove("active")

            elemento.classList.add("active")

            /* Determinação do slide a ser mostrado */
            switch(id) {
                case "pointer-features-1":

                    slider.style.marginLeft = "0vw"
                    break

                case "pointer-features-2":

                    slider.style.marginLeft = "-100vw"
                    break

                case "pointer-features-3":

                    slider.style.marginLeft = "-200vw"
                    break

                default:
                    break;
                    
            }

        }

        

    }

}

/* Função para alterar os slides periodicamente */
const seletorSlideAuto = () => {

    /* Verifica o slide ativo de cada seção e 
    armazena o elemento do respectivo pointer */
    let pointerBanner = document.querySelector(".banner .pointers .pointer.active")
    let pointerClients = document.querySelector(".section-clients .pointers .pointer.active")
    let pointerFeatures = document.querySelector(".section-features-all .pointers .pointer.active")

    /* Armazena os sliders de cada seção
    para modificar a margem do slider */
    let sliderBanner = document.querySelector(".banner .sliders")
    let sliderClients = document.querySelector(".section-clients .sliders")
    let sliderFeatures = document.querySelector(".section-features-all .sliders")

    /* Limpa os seletores atuais */
    pointerBanner.classList.remove("active")
    
    /* Modifica o pointer/slide com base no id
    do pointer deativado */
    switch(pointerBanner.id) {

        case "pointer-banner-1":

            document.querySelector("#pointer-banner-2").classList.add("active")
            sliderBanner.style.marginLeft = "-100vw"
            break

        case "pointer-banner-2":

            document.querySelector("#pointer-banner-3").classList.add("active")
            sliderBanner.style.marginLeft = "-200vw"
            break

        case "pointer-banner-3":

            document.querySelector("#pointer-banner-1").classList.add("active")
            sliderBanner.style.marginLeft = "0vw"
            break

        default:
            break

    }

}

/* Tempo de exibição automática dos slides */
setInterval(seletorSlideAuto, 3500);
