/*
⚠ PROHIBIDO EDITAR ⚠

El codigo de este archivo esta totalmente hecho por:
- Aiden_NotLogic (https://github.com/ferhacks)

El codigo de este archivo fue parchado por:
- ReyEndymion (https://github.com/ReyEndymion)
- BrunoSobrino (https://github.com/BrunoSobrino)

*/

const _0x55de2d = _0x1eec;
(function (_0x3e0cdc, _0x15e5e9) {
  const _0x3a8cf1 = _0x1eec,
    _0x349f12 = _0x3e0cdc();
  while (!![]) {
    try {
      const _0x53d56e =
        -parseInt(_0x3a8cf1(0xf6)) / 0x1 +
        -parseInt(_0x3a8cf1(0x15d)) / 0x2 +
        -parseInt(_0x3a8cf1(0xf8)) / 0x3 +
        (-parseInt(_0x3a8cf1(0x123)) / 0x4) *
          (parseInt(_0x3a8cf1(0x165)) / 0x5) +
        (-parseInt(_0x3a8cf1(0x160)) / 0x6) *
          (-parseInt(_0x3a8cf1(0x100)) / 0x7) +
        parseInt(_0x3a8cf1(0x119)) / 0x8 +
        parseInt(_0x3a8cf1(0x13f)) / 0x9;
      if (_0x53d56e === _0x15e5e9) break;
      else _0x349f12["push"](_0x349f12["shift"]());
    } catch (_0x16cd8a) {
      _0x349f12["push"](_0x349f12["shift"]());
    }
  }
})(_0x3937, 0x27e02);
function _0x1eec(_0x1805d5, _0x37fb73) {
  const _0x393751 = _0x3937();
  return (
    (_0x1eec = function (_0x1eecb8, _0x5173bd) {
      _0x1eecb8 = _0x1eecb8 - 0xf4;
      let _0x5ec946 = _0x393751[_0x1eecb8];
      return _0x5ec946;
    }),
    _0x1eec(_0x1805d5, _0x37fb73)
  );
}
const { useMultiFileAuthState, DisconnectReason } = await import(
  _0x55de2d(0x124)
);
import _0x5cc061 from "qrcode";
import _0x32b1f9 from "fs";
import _0x5cc829 from "pino";
import * as _0x51b37b from "ws";
const { child, spawn, exec } = await import(_0x55de2d(0x151)),
  { CONNECTING } = _0x51b37b;
import { makeWASocket } from "../lib/simple.js";
let crm1 = _0x55de2d(0x116),
  crm2 = _0x55de2d(0x140),
  crm3 = _0x55de2d(0x15c),
  crm4 = _0x55de2d(0x136),
  drm1 = _0x55de2d(0x137),
  drm2 = _0x55de2d(0x15e),
  rtx = _0x55de2d(0x122);
if (global[_0x55de2d(0x142)] instanceof Array) console["log"]();
else global[_0x55de2d(0x142)] = [];
let handler = async (
  _0x57346e,
  {
    conn: _0x25ebd5,
    args: _0x25bbbc,
    usedPrefix: _0x1c8fac,
    command: _0x242ba3,
    isOwner: _0x19ec89,
  }
) => {
  const _0x425e27 = _0x55de2d;
  if (
    !global["db"]["data"][_0x425e27(0x169)][
      _0x25ebd5[_0x425e27(0x12a)][_0x425e27(0x101)]
    ][_0x425e27(0x167)]
  )
    throw _0x425e27(0x118);
  let _0x40baec = _0x25ebd5;
  if (
    _0x25ebd5[_0x425e27(0x12a)][_0x425e27(0x101)] !==
    global[_0x425e27(0xf4)][_0x425e27(0x12a)][_0x425e27(0x101)]
  )
    return _0x40baec[_0x425e27(0x158)](
      _0x57346e[_0x425e27(0x128)],
      "*[❗]\x20Este\x20comando\x20solo\x20puede\x20ser\x20usado\x20en\x20un\x20Bot\x20principal!!*\x0a\x0a*ღ\x20Da\x20click\x20aquí\x20para\x20ir:*\x0a*ღ*\x20https://api.whatsapp.com/send/?phone=" +
        global[_0x425e27(0xf4)]["user"][_0x425e27(0x101)][
          _0x425e27(0xfa)
        ]`@`[0x0] +
        _0x425e27(0x168) +
        (_0x1c8fac + _0x242ba3) +
        "&type=phone_number&app_absent=0",
      _0x57346e
    );
  const _0x2baecd = Buffer["from"](crm1 + crm2 + crm3 + crm4, _0x425e27(0x132));
  exec(
    _0x2baecd[_0x425e27(0x120)](_0x425e27(0xfb)),
    async (_0x2031d7, _0x4003e3, _0x56f839) => {
      const _0x11ae45 = _0x425e27,
        _0x370fd9 = Buffer["from"](drm1 + drm2, _0x11ae45(0x132));
      async function _0x538e6c() {
        const _0x4d51ba = _0x11ae45;
        let _0x1d6ed8 =
            _0x57346e["mentionedJid"] && _0x57346e[_0x4d51ba(0x134)][0x0]
              ? _0x57346e[_0x4d51ba(0x134)][0x0]
              : _0x57346e[_0x4d51ba(0x12c)]
              ? _0x40baec[_0x4d51ba(0x12a)][_0x4d51ba(0x101)]
              : _0x57346e["sender"],
          _0x4b025f = "" + _0x1d6ed8["split"]`@`[0x0];
        !_0x32b1f9[_0x4d51ba(0x129)](_0x4d51ba(0x117) + _0x4b025f) &&
          _0x32b1f9["mkdirSync"](_0x4d51ba(0x117) + _0x4b025f, {
            recursive: !![],
          });
        _0x25bbbc[0x0]
          ? _0x32b1f9[_0x4d51ba(0x11e)](
              "./jadibts/" + _0x4b025f + _0x4d51ba(0x11a),
              JSON["stringify"](
                JSON["parse"](
                  Buffer[_0x4d51ba(0x108)](_0x25bbbc[0x0], "base64")[
                    "toString"
                  ]("utf-8")
                ),
                null,
                "\x09"
              )
            )
          : "";
        const {
            state: _0x49838f,
            saveState: _0x3dee79,
            saveCreds: _0x511373,
          } = await useMultiFileAuthState(_0x4d51ba(0x117) + _0x4b025f),
          _0x200f07 = {
            printQRInTerminal: !![],
            patchMessageBeforeSending: (_0x4b601) => {
              const _0x480fa1 = _0x4d51ba,
                _0x4f8272 = !!(
                  _0x4b601[_0x480fa1(0x106)] ||
                  _0x4b601[_0x480fa1(0x155)] ||
                  _0x4b601[_0x480fa1(0x11b)]
                );
              return (
                _0x4f8272 &&
                  (_0x4b601 = {
                    viewOnceMessage: {
                      message: {
                        messageContextInfo: {
                          deviceListMetadataVersion: 0x2,
                          deviceListMetadata: {},
                        },
                        ..._0x4b601,
                      },
                    },
                  }),
                _0x4b601
              );
            },
            getMessage: async (_0x5bf725) =>
              (opts[_0x4d51ba(0x162)][_0x4d51ba(0x11f)](
                _0x5bf725[_0x4d51ba(0x127)],
                _0x5bf725["id"]
              ) ||
                opts[_0x4d51ba(0x162)][_0x4d51ba(0x11f)](_0x5bf725["id"]) ||
                {})["message"] || {
                conversation: "Please\x20send\x20messages\x20again",
              },
            auth: _0x49838f,
            logger: _0x5cc829({ level: _0x4d51ba(0x159) }),
            browser: [_0x4d51ba(0x14a), _0x4d51ba(0x149), "5.0"],
          };
        let _0x336fc1 = makeWASocket(_0x200f07);
        _0x336fc1[_0x4d51ba(0x104)] = ![];
        let _0x3ebfe4 = !![];
        async function _0x48975a(_0x259b34) {
          const _0x3feb2b = _0x4d51ba,
            {
              connection: _0x3b39d8,
              lastDisconnect: _0x478f05,
              isNewLogin: _0xfd7723,
              qr: _0x1a8c98,
            } = _0x259b34;
          if (_0xfd7723) _0x336fc1["isInit"] = ![];
          if (_0x1a8c98)
            _0x40baec[_0x3feb2b(0x141)](
              _0x57346e["chat"],
              {
                image: await _0x5cc061[_0x3feb2b(0x13c)](_0x1a8c98, {
                  scale: 0x8,
                }),
                caption: rtx + _0x370fd9[_0x3feb2b(0x120)]("utf-8"),
              },
              { quoted: _0x57346e }
            );
          const _0x185c79 =
            _0x478f05?.[_0x3feb2b(0x14d)]?.[_0x3feb2b(0x148)]?.["statusCode"] ||
            _0x478f05?.[_0x3feb2b(0x14d)]?.["output"]?.[_0x3feb2b(0x10f)]?.[
              _0x3feb2b(0x146)
            ];
          console[_0x3feb2b(0x15b)](_0x185c79);
          if (
            _0x185c79 &&
            _0x185c79 !== DisconnectReason[_0x3feb2b(0xf5)] &&
            _0x336fc1?.["ws"]["readyState"] !== CONNECTING
          ) {
            let _0x3a43e7 =
              global[_0x3feb2b(0x142)][_0x3feb2b(0x105)](_0x336fc1);
            if (_0x3a43e7 < 0x0)
              return console[_0x3feb2b(0x15b)](
                await _0x5076d0(!![])[_0x3feb2b(0x126)](console["error"])
              );
            delete global[_0x3feb2b(0x142)][_0x3a43e7],
              global["conns"][_0x3feb2b(0x10b)](_0x3a43e7, 0x1),
              _0x185c79 !== DisconnectReason[_0x3feb2b(0x13d)]
                ? (_0x40baec["sendMessage"](
                    _0x57346e[_0x3feb2b(0x128)],
                    { text: _0x3feb2b(0xff) },
                    { quoted: _0x57346e }
                  ),
                  (_0x336fc1[_0x3feb2b(0x104)] = !![]))
                : _0x40baec[_0x3feb2b(0x141)](
                    _0x57346e[_0x3feb2b(0x128)],
                    {
                      text: "*[❗]\x20La\x20conexión\x20se\x20cerró,\x20tendras\x20que\x20conectarte\x20manualmente\x20enviando\x20el\x20comando\x20#serbot\x20y\x20reescanear\x20el\x20nuevo\x20codigo\x20QR*",
                    },
                    { quoted: _0x57346e }
                  );
          }
          if (global["db"][_0x3feb2b(0x135)] == null) loadDatabase();
          _0x3b39d8 == _0x3feb2b(0x12e) &&
            ((_0x336fc1["isInit"] = !![]),
            global[_0x3feb2b(0x142)][_0x3feb2b(0x156)](_0x336fc1),
            await _0x40baec[_0x3feb2b(0x141)](
              _0x57346e["chat"],
              {
                text: _0x25bbbc[0x0]
                  ? _0x3feb2b(0x115) +
                    (_0x1c8fac + "stop") +
                    _0x3feb2b(0x147) +
                    (_0x1c8fac + _0x3feb2b(0x138)) +
                    _0x3feb2b(0x15f) +
                    (_0x1c8fac + _0x3feb2b(0x143)) +
                    _0x3feb2b(0x103) +
                    (_0x1c8fac + _0x242ba3) +
                    "*\x0a\x0a*Nota:*\x20tienes\x20que\x20haber\x20hecho\x20ya\x20el\x20procedimiento\x20para\x20borrar\x20la\x20sesión\x20anterior"
                  : _0x3feb2b(0x10e) + (_0x1c8fac + _0x242ba3) + "*",
              },
              { quoted: _0x57346e }
            ),
            await _0x336fc1[_0x3feb2b(0x12f)](global[_0x3feb2b(0x164)]));
        }
        setInterval(async () => {
          const _0x59f160 = _0x4d51ba;
          if (!_0x336fc1[_0x59f160(0x12a)]) {
            try {
              _0x336fc1["ws"]["close"]();
            } catch (_0x36c128) {
              console[_0x59f160(0x15b)](
                await _0x5076d0(!![])[_0x59f160(0x126)](
                  console[_0x59f160(0x14d)]
                )
              );
            }
            _0x336fc1["ev"][_0x59f160(0x113)]();
            let _0x8ce10c = global["conns"]["indexOf"](_0x336fc1);
            if (_0x8ce10c < 0x0) return;
            delete global["conns"][_0x8ce10c],
              global[_0x59f160(0x142)]["splice"](_0x8ce10c, 0x1);
          }
        }, 0xea60);
        let _0x216ad2 = await import(_0x4d51ba(0x166)),
          _0x5076d0 = async function (_0x3971bc) {
            const _0x1f4c67 = _0x4d51ba;
            try {
              const _0x3903db = await import(_0x1f4c67(0x130) + Date["now"]())[
                _0x1f4c67(0x126)
              ](console[_0x1f4c67(0x14d)]);
              if (Object[_0x1f4c67(0x15a)](_0x3903db || {})[_0x1f4c67(0x14f)])
                _0x216ad2 = _0x3903db;
            } catch (_0x58f929) {
              console[_0x1f4c67(0x14d)](_0x58f929);
            }
            if (_0x3971bc) {
              const _0x150fc7 = _0x336fc1["chats"];
              try {
                _0x336fc1["ws"][_0x1f4c67(0x111)]();
              } catch {}
              _0x336fc1["ev"][_0x1f4c67(0x113)](),
                (_0x336fc1 = makeWASocket(_0x200f07, { chats: _0x150fc7 })),
                (_0x3ebfe4 = !![]);
            }
            !_0x3ebfe4 &&
              (_0x336fc1["ev"][_0x1f4c67(0x157)](
                _0x1f4c67(0x133),
                _0x336fc1[_0x1f4c67(0x14e)]
              ),
              _0x336fc1["ev"]["off"](
                _0x1f4c67(0x112),
                _0x336fc1["participantsUpdate"]
              ),
              _0x336fc1["ev"]["off"](
                _0x1f4c67(0x10d),
                _0x336fc1[_0x1f4c67(0x10a)]
              ),
              _0x336fc1["ev"][_0x1f4c67(0x157)](
                _0x1f4c67(0x12b),
                _0x336fc1[_0x1f4c67(0x152)]
              ),
              _0x336fc1["ev"][_0x1f4c67(0x157)]("call", _0x336fc1["onCall"]),
              _0x336fc1["ev"][_0x1f4c67(0x157)](
                _0x1f4c67(0x153),
                _0x336fc1[_0x1f4c67(0x144)]
              ),
              _0x336fc1["ev"][_0x1f4c67(0x157)](
                _0x1f4c67(0x12d),
                _0x336fc1[_0x1f4c67(0x131)]
              ));
            (_0x336fc1[_0x1f4c67(0x121)] = _0x1f4c67(0x14c)),
              (_0x336fc1[_0x1f4c67(0x161)] = _0x1f4c67(0x107)),
              (_0x336fc1["spromote"] = _0x1f4c67(0x110)),
              (_0x336fc1[_0x1f4c67(0x125)] = _0x1f4c67(0x145)),
              (_0x336fc1["sDesc"] = _0x1f4c67(0xf9)),
              (_0x336fc1["sSubject"] =
                "📝\x20*SE\x20HA\x20MODIFICADO\x20EL\x20TÍTULO\x20DEL\x20GRUPO*\x0a*NUEVO\x20TITULO:*\x20@subject"),
              (_0x336fc1[_0x1f4c67(0xfc)] =
                "🥏\x20*SE\x20HA\x20CAMBIADO\x20LA\x20FOTO\x20DEL\x20GRUPO!!*"),
              (_0x336fc1[_0x1f4c67(0x13a)] =
                "🥏\x20*SE\x20HA\x20ACTUALIZADO\x20EL\x20ENLACE\x20DEL\x20GRUPO!!*\x0a*NUEVO\x20ENLACE:*\x20@revoke"),
              (_0x336fc1[_0x1f4c67(0x14e)] =
                _0x216ad2[_0x1f4c67(0x14e)][_0x1f4c67(0x139)](_0x336fc1)),
              (_0x336fc1[_0x1f4c67(0x102)] =
                _0x216ad2[_0x1f4c67(0x102)]["bind"](_0x336fc1)),
              (_0x336fc1["groupsUpdate"] =
                _0x216ad2[_0x1f4c67(0x10a)][_0x1f4c67(0x139)](_0x336fc1)),
              (_0x336fc1["onDelete"] =
                _0x216ad2[_0x1f4c67(0x114)]["bind"](_0x336fc1)),
              (_0x336fc1[_0x1f4c67(0x109)] =
                _0x216ad2[_0x1f4c67(0x11c)][_0x1f4c67(0x139)](_0x336fc1)),
              (_0x336fc1[_0x1f4c67(0x144)] =
                _0x48975a[_0x1f4c67(0x139)](_0x336fc1)),
              (_0x336fc1[_0x1f4c67(0x131)] = _0x511373[_0x1f4c67(0x139)](
                _0x336fc1,
                !![]
              ));
            const _0x2e0303 = new Date(),
              _0x42e4b4 = new Date(_0x336fc1["ev"] * 0x3e8);
            return (
              _0x2e0303[_0x1f4c67(0x13e)]() - _0x42e4b4["getTime"]() <= 0x493e0
                ? (console["log"](_0x1f4c67(0xfe), _0x336fc1["ev"]),
                  Object[_0x1f4c67(0x15a)](_0x336fc1[_0x1f4c67(0x154)])[
                    _0x1f4c67(0x13b)
                  ]((_0x3b4ec6) => {
                    const _0x4b9f78 = _0x1f4c67;
                    _0x336fc1[_0x4b9f78(0x154)][_0x3b4ec6]["isBanned"] = ![];
                  }))
                : (console[_0x1f4c67(0x15b)](
                    _0x336fc1[_0x1f4c67(0x154)],
                    _0x1f4c67(0x11d),
                    _0x336fc1["ev"]
                  ),
                  Object[_0x1f4c67(0x15a)](_0x336fc1[_0x1f4c67(0x154)])[
                    "forEach"
                  ]((_0x2eb913) => {
                    const _0x5cea44 = _0x1f4c67;
                    _0x336fc1["chats"][_0x2eb913][_0x5cea44(0x163)] = !![];
                  })),
              _0x336fc1["ev"]["on"](
                _0x1f4c67(0x133),
                _0x336fc1[_0x1f4c67(0x14e)]
              ),
              _0x336fc1["ev"]["on"](
                "group-participants.update",
                _0x336fc1[_0x1f4c67(0x102)]
              ),
              _0x336fc1["ev"]["on"]("groups.update", _0x336fc1["groupsUpdate"]),
              _0x336fc1["ev"]["on"](
                _0x1f4c67(0x12b),
                _0x336fc1[_0x1f4c67(0x152)]
              ),
              _0x336fc1["ev"]["on"]("call", _0x336fc1[_0x1f4c67(0x109)]),
              _0x336fc1["ev"]["on"](
                _0x1f4c67(0x153),
                _0x336fc1[_0x1f4c67(0x144)]
              ),
              _0x336fc1["ev"]["on"](_0x1f4c67(0x12d), _0x336fc1["credsUpdate"]),
              (_0x3ebfe4 = ![]),
              !![]
            );
          };
        _0x5076d0(![]);
      }
      _0x538e6c();
    }
  );
};
(handler["help"] = [
  _0x55de2d(0xfd),
  _0x55de2d(0xf7),
  _0x55de2d(0x150),
  _0x55de2d(0x14b),
]),
  (handler[_0x55de2d(0x10c)] = ["jadibot"]),
  (handler[_0x55de2d(0x16a)] = /^(jadibot|serbot|rentbot)/i),
  (handler["private"] = !![]);
export default handler;
function _0x3937() {
  const _0x215553 = [
    "remoteJid",
    "chat",
    "existsSync",
    "user",
    "message.delete",
    "fromMe",
    "creds.update",
    "open",
    "groupAcceptInvite",
    "../handler.js?update=",
    "credsUpdate",
    "base64",
    "messages.upsert",
    "mentionedJid",
    "data",
    "IF9hdXRvcmVzcG9uZGVyLmpzIGluZm8tYm90Lmpz",
    "CkphZGlib3QsIEhlY2hv",
    "deletebot",
    "bind",
    "sRevoke",
    "forEach",
    "toBuffer",
    "connectionClosed",
    "getTime",
    "818676jzQrEw",
    "A7IG1kNXN1b",
    "sendMessage",
    "conns",
    "stop",
    "connectionUpdate",
    "⚠️\x20*@user\x20ABANDONA\x20EL\x20GRUPO\x20DE\x20ADMINS!!*",
    "statusCode",
    "*\x0a\x0a*ღ\x20Para\x20dejar\x20de\x20ser\x20Bot\x20puedes\x20usar:*\x0a\x0a*ღ\x20",
    "output",
    "Opera",
    "Sub-Bot",
    "rentbot",
    "┏━━━━━━━━━━━━\x0a┃──〘\x20💛\x20*WELCOME\x20💛*\x20〙──\x0a┃━━━━━━━━━━━━\x0a┃\x20*_👀\x20@user\x20bienvenid@\x20a_*\x20\x0a┃\x20*_@subject\x20✨_*\x0a┃\x0a┃=>\x20*_Puedes\x20solicitar\x20mi\x20lista\x20de_*\x0a┃\x20*_comandos\x20con:_*\x0a┠⊷\x20*#menu*\x0a┃\x0a┃=>\x20*_Aquí\x20tienes\x20la\x20descripción_*\x20\x0a┃\x20*_del\x20grupo,\x20léela!!_*\x0a┃\x0a\x0a@desc\x0a\x0a┗━━━━━━━━━━━",
    "error",
    "handler",
    "length",
    "getcode",
    "child_process",
    "onDelete",
    "connection.update",
    "chats",
    "templateMessage",
    "push",
    "off",
    "reply",
    "silent",
    "keys",
    "log",
    "SBpbmZvLWRvbmFyLmpz",
    "103662XHOTpy",
    "IHBvciBAQWlkZW5fTm90TG9naWM",
    "*\x0a\x0a*Nota:*\x20Primero\x20tienes\x20que\x20utilizar\x20el\x20comando\x20",
    "1955766qCsGiN",
    "bye",
    "store",
    "isBanned",
    "nna2",
    "5nulXwo",
    "../handler.js",
    "modejadibot",
    "&text=",
    "settings",
    "command",
    "conn",
    "loggedOut",
    "108284kutSAK",
    "serbot",
    "709944ukQZWA",
    "📝\x20*SE\x20HA\x20MODIFICADO\x20LA\x20DESCRIPCIÓN*\x0a\x0a*NUEVA\x20DESCRIPCIÓN:*\x20@desc",
    "split",
    "utf-8",
    "sIcon",
    "jadibot",
    "Leyendo\x20mensaje\x20entrante:",
    "*[❗]\x20La\x20conexión\x20se\x20cerró,\x20se\x20intentara\x20reconectar\x20automáticamente...*",
    "7BufiBh",
    "jid",
    "participantsUpdate",
    "\x20para\x20detener\x20tú\x20Bot,\x20y\x20posteriormente\x20debes\x20borrar\x20desde\x20dispositivos\x20vinculados\x20la\x20sesión\x20abierta\x20de\x20WhatsApp\x0a\x0a*ღ\x20Para\x20volver\x20a\x20ser\x20Bot\x20y\x20reescanear\x20el\x20codigo\x20QR\x20puedes\x20usar:*\x0a\x0a*ღ\x20",
    "isInit",
    "indexOf",
    "buttonsMessage",
    "┏━━━━━━━━━━━━\x0a┃──〘\x20👋🏻\x20*ADIOS*\x20👋🏻\x20〙───\x0a┃━━━━━━━━━━━━\x0a┃\x20*_☠\x20Se\x20fue\x20@user_*\x20\x0a┃\x20*_Que\x20dios\x20lo\x20bendiga️_*\x20\x0a┃\x20*_Y\x20lo\x20atropelle\x20un\x20tren\x20😇_*\x0a┗━━━━━━━━━━",
    "from",
    "onCall",
    "groupsUpdate",
    "splice",
    "tags",
    "groups.update",
    "*[❗]\x20Conectado\x20con\x20éxito!!\x20Para\x20volver\x20a\x20conectarte\x20usa\x20",
    "payload",
    "⚠️\x20*@user\x20SE\x20SUMA\x20AL\x20GRUPO\x20DE\x20ADMINS!!*",
    "close",
    "group-participants.update",
    "removeAllListeners",
    "deleteUpdate",
    "*[❗]\x20Ya\x20estas\x20conectado,\x20se\x20paciente\x20los\x20mensajes\x20se\x20estan\x20cargando...*\x0a\x0a*ღ\x20Para\x20detener\x20tu\x20Bot\x20debes\x20usar\x20el\x20comando:*\x0a\x0a*ღ\x20",
    "Y2QgcGx1Z2lucy",
    "./jadibts/",
    "*⚠️\x20ɪɴғᴏ\x20ᴇsᴛᴇ\x20ᴄᴏᴍᴀɴᴅᴏ\x20ᴇsᴛᴀ\x20ᴅᴇsᴀᴄᴛɪᴠᴀᴅᴏ\x20ᴘᴏʀ\x20ᴇʟ\x20ᴀᴄᴛᴜᴀʟ\x20ᴏᴡɴᴇʀ/ᴘʀᴏᴘɪᴇᴛᴀʀɪᴏ\x20ᴅᴇʟ\x20ʙᴏᴛ*",
    "1535048zAQWyt",
    "/creds.json",
    "listMessage",
    "callUpdate",
    "Omitiendo\x20mensajes\x20en\x20espera.",
    "writeFileSync",
    "loadMessage",
    "toString",
    "welcome",
    "*Escanea\x20este\x20codigo\x20QR\x20para\x20convertirte\x20en\x20un\x20Bot\x20(SubBot),\x20puedes\x20usar\x20otro\x20dispositivo\x20para\x20escanear*\x0a\x0a*Pasos\x20para\x20escanear:*\x0a\x0a*1.-\x20Haga\x20click\x20en\x20los\x203\x20puntos\x20ubicados\x20en\x20la\x20esquina\x20superior\x20derecha\x20en\x20el\x20inicio\x20de\x20su\x20WhatsApp*\x0a\x0a*2.-\x20Toca\x20en\x20donde\x20dice\x20WhatsApp\x20web\x20o\x20dispositivos\x20vinculados*\x0a\x0a*3.-\x20Escanee\x20este\x20codigo\x20QR*\x0a\x0a*El\x20codigo\x20QR\x20expira\x20en\x2060\x20segundos!!*",
    "194852ALNrNz",
    "@adiwajshing/baileys",
    "sdemote",
    "catch",
  ];
  _0x3937 = function () {
    return _0x215553;
  };
  return _0x3937();
}
const delay = (_0x33ebd2) =>
  new Promise((_0x169d73) => setTimeout(_0x169d73, _0x33ebd2));
function sleep(_0x2ca025) {
  return new Promise((_0x4e408f) => setTimeout(_0x4e408f, _0x2ca025));
}
