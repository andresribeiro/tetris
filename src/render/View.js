import { formatPoints, game } from './Game.js'
import { range } from './Util.js'
import { colors } from "./Colors.js"
import { gameCanvas, gameCtx, nextCanvas, nextCtx } from './ScreenManager.js'

//#region Next Figure Draw
const drawNextFigure = () => {
    const { squareWidth } = game
    const { width, height } = game.nextCanvasSize
    const { blocks, figureType } = game.nextFigure

    const x = Math.trunc(width / 2 - blocks[0].length / 2)
    const y = Math.trunc(height / 2 - blocks.length / 2)

    blocks.forEach((line, indexY) => {
        line.forEach((block, indexX) => {
            if (block.type === 'block') {
                nextCtx.fillStyle = colors.figures[figureType]
                nextCtx.fillRect(
                    (x + indexX) * squareWidth + (1 * x + indexX),
                    (y + indexY) * squareWidth + (1 * y + indexY),
                    squareWidth, squareWidth
                )
            }
        })
    })
}

const drawNextLines = () => {
    const { squareWidth } = game
    const { width, height } = game.nextCanvasSize

    nextCtx.fillStyle = colors.lines

    for (let i of range(1, width)) {
        nextCtx.fillRect(i * squareWidth + (i - 1), 0, 1, nextCanvas.height)
    }

    for (let i of range(1, height)) {
        nextCtx.fillRect(0, i * squareWidth + (i - 1), nextCanvas.width, 1)
    }
}

const drawNextBackground = () => {
    nextCtx.fillStyle = colors.background
    nextCtx.fillRect(0, 0, nextCanvas.width, nextCanvas.height)
}
//#endregion

//#region Main Draw
const drawBackground = () => {
    gameCtx.fillStyle = colors.background
    gameCtx.fillRect(0, 0, gameCanvas.width, gameCanvas.height)
}

const drawLines = () => {
    const { width, height, squareWidth } = game

    gameCtx.fillStyle = colors.lines

    for (let i of range(1, width)) {
        gameCtx.fillRect(i * squareWidth + (i - 1), 0, 1, gameCanvas.height)
    }

    for (let i of range(1, height)) {
        gameCtx.fillRect(0, i * squareWidth + (i - 1), gameCanvas.width, 1)
    }
}

const drawSquares = () => {
    const { state, squareWidth } = game
    state.forEach((line, indexY) => {
        line.forEach((block, indexX) => {
            const color = block.type === "null" ? colors.background : colors.figures[block.figureType]

            gameCtx.fillStyle = color
            gameCtx.fillRect(indexX * squareWidth + (1 * indexX), indexY * squareWidth + (1 * indexY), squareWidth, squareWidth)

        })

    })
}

const drawAtualFigure = () => {
    const { squareWidth } = game
    const { x, y, blocks, figureType } = game.atualFigure

    blocks.forEach((line, indexY) => {
        line.forEach((block, indexX) => {
            if (block.type === 'block') {
                gameCtx.fillStyle = colors.figures[figureType]
                gameCtx.fillRect(
                    (x + indexX) * squareWidth + (1 * x + indexX),
                    (y + indexY) * squareWidth + (1 * y + indexY),
                    squareWidth, squareWidth
                )
            }
        })
    })
}
//#endregion

const medals = [
    "../assets/medals/1.png",
    "../assets/medals/2.png",
    "../assets/medals/3.png"
]

const showRecords = () => {
    const lines = []
    game.records.forEach(({ points }, index) => {
        const line = `
        <div class="line">
            <img src=" ${medals[index]}" width="16px">
            <div>${formatPoints(points)}</div>
        </div>`
        lines.push(line)
    })
    document.getElementById('recordes').innerHTML = lines.join('')
}

const renderAll = () => {
    // Main game
    drawBackground()
    drawLines()
    drawSquares()
    drawAtualFigure()

    //Next figure
    drawNextBackground()
    drawNextLines()
    drawNextFigure()

    showRecords()
}

export { renderAll }