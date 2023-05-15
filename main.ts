let ir_waarde = 0
let vooruit = 10
let achteruit = 27
let links = 73
let rechts = 15
let stop = 29
basic.forever(function () {
    if (ir_waarde == vooruit) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
    }
    if (ir_waarde == stop) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # . # .
            . # # # .
            . . . . .
            `)
    }
    if (ir_waarde == achteruit) {
        basic.showLeds(`
            . . # . .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            `)
    }
    if (ir_waarde == links) {
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
    }
    if (ir_waarde == rechts) {
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
    }
})
basic.forever(function () {
    ir_waarde = IR.IR_read()
})
basic.forever(function () {
    if (ir_waarde == vooruit) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 5)
    }
    if (ir_waarde == achteruit) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 5)
    }
    if (ir_waarde == links) {
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 5)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 5)
    }
    if (ir_waarde == rechts) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 5)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 5)
    }
})
