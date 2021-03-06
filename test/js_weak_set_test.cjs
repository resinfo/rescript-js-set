// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var Ava = require("rescript-ava/src/ava.cjs");

Ava.test("Set.make()", (function (t) {
        return Ava.notThrows(t, (function (param) {
                      return new WeakSet();
                    }), undefined, undefined);
      }));

Ava.test("Set.fromEntries(entries)", (function (t) {
        return Ava.notThrows(t, (function (param) {
                      return new WeakSet([{
                                    hello: "world"
                                  }]);
                    }), undefined, undefined);
      }));

Ava.test("Set.add(t, value) and Set.has(t, value)", (function (t) {
        var value1 = {
          hello: "world"
        };
        var value2 = {
          hello: 12345
        };
        var set = new WeakSet([value1]).add(value2);
        Ava.true_(t, set.has(value1), undefined, undefined);
        return Ava.true_(t, set.has(value2), undefined, undefined);
      }));

Ava.test("Set.delete(t, value)", (function (t) {
        var value = {
          hello: "world"
        };
        var set = new WeakSet([value]);
        Ava.true_(t, set.has(value), undefined, undefined);
        Ava.true_(t, set.delete(value), undefined, undefined);
        return Ava.false_(t, set.has(value), undefined, undefined);
      }));

/*  Not a pure module */
