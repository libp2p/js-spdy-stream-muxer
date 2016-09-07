var spdy = require('spdy-transport')
var EventEmitter = require('events').EventEmitter
var util = require('util')
var DuplexPassThrough = require('duplex-passthrough')

exports = module.exports = SpdyStreamMuxer
util.inherits(Connection, EventEmitter)

function SpdyStreamMuxer () {
  var self = this

  self.attach = function (transport, isListener) {
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
    var ds = new DuplexPassThrough()

    conn.request({
      method: 'POST',
      path: '/',
      headers: {}
    }, function (err, stream) {
      if (err) {
        ds.emit('err', err)
        if (callback) { callback(err) }
        return
      }
      ds.wrapStream(stream)
      ds.emit('ready')
      if (callback) { callback(null, ds) }
    })

    return ds
  }

  conn.on('stream', function (stream) {
    stream.respond(200, {})
    stream.destroy = stream.abort

    self.emit('stream', stream)
  })

  conn.on('close', function () {
    self.emit('close', null)
  })

  conn.on('error', function (err) {
    self.emit('error', err)
  })

  self.end = function (cb) {
    conn.end(cb)
  }
}
