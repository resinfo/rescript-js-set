type t

@ocaml.doc("Creates a new `WeakSet` object.") @new
external make: unit => t = "WeakSet"

@ocaml.doc("Creates a new `WeakSet` object.") @new
external fromEntries: array<{..}> => t = "WeakSet"

@ocaml.doc("Appends `value` to the `WeakSet` object.") @send
external add: (t, {..}) => t = "add"

@ocaml.doc(
  "Removes `value` from the `WeakSet`. `WeakSet.prototype.has(value)` will return false afterwards."
)
@send
external delete: (t, {..}) => bool = "delete"

@ocaml.doc("Returns a boolean asserting whether `value` is present in the `WeakSet` object or not.")
@send
external has: (t, {..}) => bool = "has"
