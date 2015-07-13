var spdy = require('spdy-transport')
var EventEmitter = require('events').EventEmitter
var util = require('util')

exports = module.exports = SpdyStreamMuxer
util.inherits(Connection, EventEmitter)

function SpdyStreamMuxer () {
  var self = this

  self.attach = function (transport, isListener, callback) {
    var conn = spdy.connection.create(transport, {
        protocol: 'spdy',
        isServer: isListener
    })
    conn.start(3.1)
    return new Connection(conn)
  }
}

function Connection (conn) {
  var self = this

  self.dialStream = function (callback) {
    conn.request({
      method: 'GET',
      path: '/',
      headers: {}
    }, callback)
  }

  conn.on('stream', function (stream) {
    stream.respond(200, {})
    self.emit('stream', stream)
  })

  conn.on('close', function () {
    self.emit('close', null)
  })

  conn.on('error', function (err) {
    self.emit('error', err)
  })
}
