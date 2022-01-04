module Set = Js_weak_set

open Ava

test("Set.make()", t => {
  t->notThrows(() => Set.make(), ())
})

test("Set.fromEntries(entries)", t => {
  t->notThrows(() => Set.fromEntries([{"hello": "world"}]), ())
})

test("Set.add(t, value) and Set.has(t, value)", t => {
  let value1 = {"hello": "world"}
  let value2 = {"hello": "12345"}
  let set = Set.fromEntries([value1, value2])

  t->true_(set->Set.has(value1), ())
  t->true_(set->Set.has(value2), ())
})

test("Set.delete(t, value)", t => {
  let value = {"hello": "world"}
  let set = Set.fromEntries([value])

  t->true_(set->Set.has(value), ())
  t->true_(set->Set.delete(value), ())
  t->false_(set->Set.has(value), ())
})
