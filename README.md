spdy-stream-muxer JavaScript implementation
==========================================

# **DEPRECATED**

## Use [libp2p-spdy](https://github.com/diasdavid/js-libp2p-spdy) instead



--------------------------------------------------------------
--------------------------------------------------------------

[![](https://img.shields.io/badge/made%20by-Protocol%20Labs-blue.svg?style=flat-square)](http://ipn.io) [![](https://img.shields.io/badge/freenode-%23ipfs-blue.svg?style=flat-square)](http://webchat.freenode.net/?channels=%23ipfs)

> Abstraction on top of spdy-transport, implementing the abstract-stream-muxer interface

[![](https://github.com/diasdavid/abstract-stream-muxer/blob/master/img/badge.png)](https://github.com/diasdavid/abstract-stream-muxer)

# Usage

spdy-stream-muxer follows the [abstract-stream-muxer API](https://github.com/diasdavid/abstract-stream-muxer#api)

# Example

```JavaScript
// Client.js
var spdyStreamMuxer = require('spdy-stream-muxer')

var dialer = new spdyStreamMuxer()

var connDialer = dialer.attach(socket, false)

connDialer.dialStream(function (err, stream) {
  t.ifError(err, 'Should not throw')
  t.pass('dialed stream')
})
```

```JavaScript
// Server.js
var spdyStreamMuxer = require('spdy-stream-muxer')

var listener = new spdyStreamMuxer()

var connListener = listener.attach(socket, true)

connListener.on('stream', function (stream) {
  t.pass('got stream')
})
```
