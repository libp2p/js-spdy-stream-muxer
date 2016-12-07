# **DEPRECATED**

## Use [libp2p-spdy](https://github.com/libp2p/js-libp2p-spdy) instead

--------------------------------------------------------------
--------------------------------------------------------------

# spdy-stream-muxer JavaScript implementation

> Abstraction on top of spdy-transport, implementing the abstract-stream-muxer interface


[![](https://img.shields.io/badge/made%20by-Protocol%20Labs-blue.svg?style=flat-square)](http://ipn.io) [![](https://img.shields.io/badge/freenode-%23ipfs-blue.svg?style=flat-square)](http://webchat.freenode.net/?channels=%23ipfs)

> Abstraction on top of spdy-transport, implementing the abstract-stream-muxer interface

[![](https://github.com/libp2p/interface-stream-muxer/blob/master/img/badge.png)](https://github.com/libp2p/interface-stream-muxer)

## Table of Contents

- [Install](#install)
- [Usage](#usage)
- [Example](#example)
- [Contribute](#contribute)
- [License](#license)

## Install

```
npm i spdy-stream-muxer
```

## Usage

spdy-stream-muxer follows the [abstract-stream-muxer API](https://github.com/libp2p/interface-stream-muxer#api)

## Example

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

## Contribute

This is deprecated. Please know that any open issues or PRs will likely not be prioritized.

Check out our [contributing document](https://github.com/libp2p/libp2p/blob/master/contributing.md) for more information on how we work, and about contributing in general. Please be aware that all interactions related to libp2p are subject to the IPFS [Code of Conduct](https://github.com/ipfs/community/blob/master/code-of-conduct.md).

## License

[MIT](LICENSE) © 2015 David Dias
