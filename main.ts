let found = false
let junk = [
"paper clip",
"pencil",
"notepad",
"glue",
"scissors",
"screw driver"
]
while (junk.length > 0) {
    if (junk.pop() == "scissors") {
        found = true
    }
}
