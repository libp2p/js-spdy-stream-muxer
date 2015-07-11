var tape = require('tape')
var tests = require('abstract-stream-muxer/tests')
var SpdyStreamMuxer = require('../src')

var common = {
  setup: function (t, cb) {
    cb(null, SpdyStreamMuxer)
  },
  teardown: function (t, cb) {
    cb()
  }
}

tests(tape, common)
