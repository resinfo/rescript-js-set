# Rescript JS Set

Rescript JS Set is a [ReScript](https://rescript-lang.org/) library that provides bindings to the JavaScript [Set data type](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set) and [WeakSet data type](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakSet/WeakSet).

## Installation

Using `yarn` or `npm`:

```bash
yarn add rescript-js-set
npm install --save rescript-js-set
```

This package relies on the `rescript-js-iterator` package for `Iterator` bindings. In your `bsconfig.json`, add:

```json
{
  "bs-dependencies": ["rescript-js-set", "rescript-js-iterator"]
}
```

## Usage

```rescript
module Set = Js_set

let set = Set.make()->Set.add("hello") // Set.t<string>
let size = set->Set.size // 1
let hasHello = set->Set.has("hello") // true
let hasWorld = set->Set.has("world") // false
let set = set->Set.add("world") // mutation
let hasWorld = set->Set.has("world") // true
let size = set->Set.size // 2
let wasDeleted = set->Set.delete("hello") // true
let size = set->Set.size // 1
set->Set.clear
let size = set->Set.size // 0

module WeakSet = Js_weak_set

let value = {"hello": "world"}
let value2 = {"foo": 12345}
let weakSet = WeakSet.fromEntries([value]) // WeakSet.t
let hasValue = weakSet->WeakSet.has(value) // true
let hasValue2 = weakSet->WeakSet.has(value2) // false
let weakSet = weakSet->WeakSet.add(value2) // mutation, "value2" must be JS object ({..})
let hasValue2 = weakSet->WeakSet.has(value2) // true
let wasDeleted = weakSet->WeakSet.delete(value) // true
let hasValue = weakSet->WeakSet.has(value) // false
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
