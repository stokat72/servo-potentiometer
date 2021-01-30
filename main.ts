let spænding = 0
basic.showIcon(IconNames.Yes)
basic.forever(function () {
    spænding = pins.analogReadPin(AnalogPin.P12)
    pins.servoWritePin(AnalogPin.P16, pins.map(
    spænding,
    0,
    1023,
    180,
    15
    ))
    basic.pause(100)
})
