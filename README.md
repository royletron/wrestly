# Wrestly

Wrestle that rest

![Wrestly](logo.svg "Wrestly")

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/wrestly.svg)](https://npmjs.org/package/wrestly)
[![Downloads/week](https://img.shields.io/npm/dw/wrestly.svg)](https://npmjs.org/package/wrestly)
[![License](https://img.shields.io/npm/l/wrestly.svg)](https://github.com/ventureharbour/wrestly/blob/main/package.json)

<!-- toc -->
* [Wrestly](#wrestly)
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->

# Usage

<!-- usage -->
```sh-session
$ npm install -g wrestly
$ wrestly COMMAND
running command...
$ wrestly (--version)
wrestly/0.1.0 darwin-x64 node-v14.15.4
$ wrestly --help [COMMAND]
USAGE
  $ wrestly COMMAND
...
```
<!-- usagestop -->

# Commands

<!-- commands -->
* [`wrestly run`](#wrestly-run)

## `wrestly run`

Run Wrestly. Creates a server where you can see all requests made, great for debugging Webhooks or receiving OAuth payloads!

```
USAGE
  $ wrestly run [-p <value>] [-d <value>]

FLAGS
  -d, --database=<value>  [default: :memory:] Where to put the .sqlite file for backend. Defaults to in memory
  -p, --port=<value>      [default: 6789] Port to run on. Defaults to 6789

DESCRIPTION
  Run Wrestly. Creates a server where you can see all requests made, great for debugging Webhooks or receiving OAuth
  payloads!
```

_See code: [dist/commands/run/index.ts](https://github.com/ventureharbour/wrestly/blob/v0.1.0/dist/commands/run/index.ts)_
<!-- commandsstop -->
