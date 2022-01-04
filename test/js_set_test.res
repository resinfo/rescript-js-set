module Iterator = Js_iterator
module Set = Js_set

open Ava

test("Set.make()", t => {
  let set = Set.make()

  t->is(set->Set.size, 0, ())
})

test("Set.fromEntries(entries)", t => {
  let set = Set.fromEntries(["hello", "world"])

  t->is(set->Set.size, 2, ())

  let set = Set.fromEntries([12])

  t->is(set->Set.size, 1, ())

  let set = Set.fromEntries([Js.null, Js.null])

  t->is(set->Set.size, 1, ())
})

test("Set.has(set, key)", t => {
  let set = Set.fromEntries(["hello", "world"])

  t->true_(set->Set.has("hello"), ())
})

test("Set.clear(set)", t => {
  let set = Set.fromEntries(["hello", "world"])

  t->true_(set->Set.has("hello"), ())
  t->is(set->Set.size, 2, ())
  set->Set.clear
  t->false_(set->Set.has("hello"), ())
  t->is(set->Set.size, 0, ())
})

test("Set.delete(set, key)", t => {
  let set = Set.fromEntries(["hello", "world"])

  t->true_(set->Set.has("hello"), ())
  t->is(set->Set.size, 2, ())

  let res = set->Set.delete("hello")

  t->is(set->Set.size, 1, ())
  t->false_(set->Set.has("hello"), ())
  t->true_(res, ())

  let res = set->Set.delete("hello")

  t->is(set->Set.size, 1, ())
  t->false_(set->Set.has("hello"), ())
  t->false_(res, ())

  let res = set->Set.delete("world")

  t->is(set->Set.size, 0, ())
  t->false_(set->Set.has("world"), ())
  t->true_(res, ())
})

test("Set.add(set, value)", t => {
  let set = Set.make()

  t->false_(set->Set.has("foo"), ())
  t->is(set->Set.size, 0, ())

  let set = set->Set.add("foo")

  t->true_(set->Set.has("foo"), ())
  t->is(set->Set.size, 1, ())
})

test("Set.values(set)", t => {
  let set = Set.fromEntries(["a", "b", "c"])

  let iterator = set->Set.values

  let current = iterator->Iterator.next
  t->is(current.value, Some("a"), ())
  t->false_(current.done, ())

  let current = iterator->Iterator.next
  t->is(current.value, Some("b"), ())
  t->false_(current.done, ())

  let current = iterator->Iterator.next
  t->is(current.value, Some("c"), ())
  t->false_(current.done, ())

  let current = iterator->Iterator.next
  t->is(current.value, None, ())
  t->true_(current.done, ())
})

test("Set.keys(set)", t => {
  let set = Set.fromEntries(["a", "b", "c"])

  let iterator = set->Set.keys

  let current = iterator->Iterator.next
  t->is(current.value, Some("a"), ())
  t->false_(current.done, ())

  let current = iterator->Iterator.next
  t->is(current.value, Some("b"), ())
  t->false_(current.done, ())

  let current = iterator->Iterator.next
  t->is(current.value, Some("c"), ())
  t->false_(current.done, ())

  let current = iterator->Iterator.next
  t->is(current.value, None, ())
  t->true_(current.done, ())
})

test("Set.entries(set)", t => {
  let set = Set.fromEntries(["a", "b", "c"])

  let iterator = set->Set.entries

  let current = iterator->Iterator.next
  t->true_(current.value == Some(("a", "a")), ())
  t->false_(current.done, ())

  let current = iterator->Iterator.next
  t->true_(current.value == Some(("b", "b")), ())
  t->false_(current.done, ())

  let current = iterator->Iterator.next
  t->true_(current.value == Some(("c", "c")), ())
  t->false_(current.done, ())

  let current = iterator->Iterator.next
  t->is(current.value, None, ())
  t->true_(current.done, ())
})

test("Set.forEach(set, fn)", t => {
  let set = Set.fromEntries([1, 2, 3, 4])

  let values = ref(0)

  set->Set.forEach(value => {
    values := values.contents + value
  })

  t->is(values.contents, 10, ())
})

test("Set.forEachWithSet(set, fn)", t => {
  let set = Set.fromEntries([1, 2, 3, 4])

  let values = ref(0)
  let keys = ref(0)

  set->Set.forEachWithSet((value, key, this) => {
    values := values.contents + value
    keys := keys.contents + key

    t->true_(this == set, ())
    t->true_(this === set, ())
  })

  t->is(values.contents, 10, ())
  t->is(keys.contents, 10, ())
})
