basic.forever(function () {
    Tinybit.CarCtrl(Tinybit.CarState.Car_Run)
})
basic.forever(function () {
    Tinybit.RGB_Car_Program().showColor(neopixel.colors(NeoPixelColors.Red))
    Tinybit.RGB_Car_Big2(0, 0, 0)
})
