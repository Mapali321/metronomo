input.onButtonPressed(Button.A, function () {
    music.changeTempoBy(-5)
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(music.tempo())
})
input.onButtonPressed(Button.B, function () {
    music.changeTempoBy(5)
})
music.setTempo(100)
basic.forever(function () {
    music.play(music.tonePlayable(262, music.beat(BeatFraction.Sixteenth)), music.PlaybackMode.UntilDone)
    music.rest(music.beat(BeatFraction.Whole))
})
