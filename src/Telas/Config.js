// import functions from "./navegacao.js"
// import velocidade from "./configs/velocidade.js"
// import cores from "./configs/cores.js"
import { game } from "../Game.js"
import viewMusic from "./Config/Music.js"

const container = document.getElementById('container')

const configs = {
    music: viewMusic
}

export default async function viewConfig() {
    const pause = game.status === "paused" ? get("pause-wrapper") : null
    const config_screen = document.createElement('div')
    config_screen.className = "telas-wrapper"
    config_screen.innerHTML = `
    <fieldset>
        <legend>CONFIGURAÇÃO</legend>
        <div class="button-wrapper">
            <button data-type="music" class="focus">Musica</button>
            <button data-type="voltar">Voltar</button>
        </div>
    </fieldset>`
    // gameDiv.style.display = "none"

    // if(game.status === "paused"){
    //     pause.style.display = "none"
    // }

    container.appendChild(config_screen)
    const buttons = config_screen.querySelectorAll('button')
    // window.onkeydown = event => functions[event.key]?.(config_screen)
    configs.voltar = () => container.removeChild(config_screen)
    return new Promise( resolve => {
        buttons.forEach( button => {
            button.onclick = event => configs[button.dataset.type]?.(game)
            resolve(true)
        })
    })
}