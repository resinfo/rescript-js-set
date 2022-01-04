// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var Ava = require("rescript-ava/src/ava.cjs");
var Caml_obj = require("rescript/lib/js/caml_obj.js");

Ava.test("Set.make()", (function (t) {
        var set = new Set();
        return Ava.is(t, set.size, 0, undefined, undefined);
      }));

Ava.test("Set.fromEntries(entries)", (function (t) {
        var set = new Set([
              "hello",
              "world"
            ]);
        Ava.is(t, set.size, 2, undefined, undefined);
        var set$1 = new Set([12]);
        Ava.is(t, set$1.size, 1, undefined, undefined);
        var set$2 = new Set([
              null,
              null
            ]);
        return Ava.is(t, set$2.size, 1, undefined, undefined);
      }));

Ava.test("Set.has(set, key)", (function (t) {
        var set = new Set([
              "hello",
              "world"
            ]);
        return Ava.true_(t, set.has("hello"), undefined, undefined);
      }));

Ava.test("Set.clear(set)", (function (t) {
        var set = new Set([
              "hello",
              "world"
            ]);
        Ava.true_(t, set.has("hello"), undefined, undefined);
        Ava.is(t, set.size, 2, undefined, undefined);
        set.clear();
        Ava.false_(t, set.has("hello"), undefined, undefined);
        return Ava.is(t, set.size, 0, undefined, undefined);
      }));

Ava.test("Set.delete(set, key)", (function (t) {
        var set = new Set([
              "hello",
              "world"
            ]);
        Ava.true_(t, set.has("hello"), undefined, undefined);
        Ava.is(t, set.size, 2, undefined, undefined);
        var res = set.delete("hello");
        Ava.is(t, set.size, 1, undefined, undefined);
        Ava.false_(t, set.has("hello"), undefined, undefined);
        Ava.true_(t, res, undefined, undefined);
        var res$1 = set.delete("hello");
        Ava.is(t, set.size, 1, undefined, undefined);
        Ava.false_(t, set.has("hello"), undefined, undefined);
        Ava.false_(t, res$1, undefined, undefined);
        var res$2 = set.delete("world");
        Ava.is(t, set.size, 0, undefined, undefined);
        Ava.false_(t, set.has("world"), undefined, undefined);
        return Ava.true_(t, res$2, undefined, undefined);
      }));

Ava.test("Set.add(set, value)", (function (t) {
        var set = new Set();
        Ava.false_(t, set.has("foo"), undefined, undefined);
        Ava.is(t, set.size, 0, undefined, undefined);
        var set$1 = set.add("foo");
        Ava.true_(t, set$1.has("foo"), undefined, undefined);
        return Ava.is(t, set$1.size, 1, undefined, undefined);
      }));

Ava.test("Set.values(set)", (function (t) {
        var set = new Set([
              "a",
              "b",
              "c"
            ]);
        var iterator = set.values();
        var current = iterator.next();
        Ava.is(t, current.value, "a", undefined, undefined);
        Ava.false_(t, current.done, undefined, undefined);
        var current$1 = iterator.next();
        Ava.is(t, current$1.value, "b", undefined, undefined);
        Ava.false_(t, current$1.done, undefined, undefined);
        var current$2 = iterator.next();
        Ava.is(t, current$2.value, "c", undefined, undefined);
        Ava.false_(t, current$2.done, undefined, undefined);
        var current$3 = iterator.next();
        Ava.is(t, current$3.value, undefined, undefined, undefined);
        return Ava.true_(t, current$3.done, undefined, undefined);
      }));

Ava.test("Set.keys(set)", (function (t) {
        var set = new Set([
              "a",
              "b",
              "c"
            ]);
        var iterator = set.values();
        var current = iterator.next();
        Ava.is(t, current.value, "a", undefined, undefined);
        Ava.false_(t, current.done, undefined, undefined);
        var current$1 = iterator.next();
        Ava.is(t, current$1.value, "b", undefined, undefined);
        Ava.false_(t, current$1.done, undefined, undefined);
        var current$2 = iterator.next();
        Ava.is(t, current$2.value, "c", undefined, undefined);
        Ava.false_(t, current$2.done, undefined, undefined);
        var current$3 = iterator.next();
        Ava.is(t, current$3.value, undefined, undefined, undefined);
        return Ava.true_(t, current$3.done, undefined, undefined);
      }));

Ava.test("Set.entries(set)", (function (t) {
        var set = new Set([
              "a",
              "b",
              "c"
            ]);
        var iterator = set.entries();
        var current = iterator.next();
        Ava.true_(t, Caml_obj.caml_equal(current.value, [
                  "a",
                  "a"
                ]), undefined, undefined);
        Ava.false_(t, current.done, undefined, undefined);
        var current$1 = iterator.next();
        Ava.true_(t, Caml_obj.caml_equal(current$1.value, [
                  "b",
                  "b"
                ]), undefined, undefined);
        Ava.false_(t, current$1.done, undefined, undefined);
        var current$2 = iterator.next();
        Ava.true_(t, Caml_obj.caml_equal(current$2.value, [
                  "c",
                  "c"
                ]), undefined, undefined);
        Ava.false_(t, current$2.done, undefined, undefined);
        var current$3 = iterator.next();
        Ava.is(t, current$3.value, undefined, undefined, undefined);
        return Ava.true_(t, current$3.done, undefined, undefined);
      }));

Ava.test("Set.forEach(set, fn)", (function (t) {
        var set = new Set([
              1,
              2,
              3,
              4
            ]);
        var values = {
          contents: 0
        };
        set.forEach(function (value) {
              values.contents = values.contents + value | 0;
              
            });
        return Ava.is(t, values.contents, 10, undefined, undefined);
      }));

Ava.test("Set.forEachWithSet(set, fn)", (function (t) {
        var set = new Set([
              1,
              2,
              3,
              4
            ]);
        var values = {
          contents: 0
        };
        var keys = {
          contents: 0
        };
        set.forEach(function (value, key, $$this) {
              values.contents = values.contents + value | 0;
              keys.contents = keys.contents + key | 0;
              Ava.true_(t, Caml_obj.caml_equal($$this, set), undefined, undefined);
              return Ava.true_(t, $$this === set, undefined, undefined);
            });
        Ava.is(t, values.contents, 10, undefined, undefined);
        return Ava.is(t, keys.contents, 10, undefined, undefined);
      }));

/*  Not a pure module */