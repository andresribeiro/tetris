import { Screen } from "./Screen.js"

export default class ControlsScreen extends Screen {
    constructor() {
        super()

        this.buildFunction = function () {
            const constrols_screen = document.createElement("div")
            constrols_screen.className = "telas-wrapper"
            constrols_screen.innerHTML = `
            <div class="telas-wrapper">
                <fieldset id="controls">
                    <legend>CONTROLES</legend>
                    <div class="line">
                        Acelera a queda
                        <div class="flex-center">
                            <div class="key">S</div>
                            <span>ou</span>
                            <div class="key">&DownArrow;</div>
                        </div>
                    </div>
                    <div class="line">
                        Move a figura para a esquerda
                        <div class="flex-center">
                            <div class="key">A</div>
                            <span>ou</span>
                            <div class="key">&LeftArrow;</div>
                        </div>
                    </div>
                    <div class="line">
                        Move a figura para a direita
                        <div class="flex-center">
                            <div class="key">D</div>
                            <span>ou</span>
                            <div class="key">&RightArrow;</div>
                        </div>
                    </div>
                    <div class="line">
                        Pausa o jogo
                        <div class="key">Esc</div>
                    </div>
                    <div class="line">
                        Rotaciona a figura
                        <div class="key">R</div>
                    </div>
                    <div class="line">
                        Faz a figura cair imediatamante
                        <div class="key"> space </div>
                    </div>
                    <div class="center-line">
                        <button class="focus">Voltar</button>
                    </div>
                </fieldset>
            </div>`

            constrols_screen.querySelector('button').onclick = () => {
                this.close()
            }

            return constrols_screen
        }

        this.reset()
    }

    close(){
        super.close()
        this.afterScreen.show()
    }

    show(afterScreen){
        super.show(true)
        this.afterScreen = afterScreen
    }
}