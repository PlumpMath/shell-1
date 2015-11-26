# Electron.Shell

Interop for electron's `shell` module

## Documentation

### `showItemInFolder : String -> Task errorType ()`
Show the given file in a file manager. If possible, select the file.
[electron docs](https://github.com/atom/electron/blob/master/docs/api/shell.md#shellshowiteminfolderfullpath)

### `openItem : String -> Task errorType ()`
Open the given file in the desktop's default manner.
[electron docs](https://github.com/atom/electron/blob/master/docs/api/shell.md#shellopenitemfullpath)

### `openExternal : String -> Task errorType ()`
Open the given external protocol URL in the desktop's default manner. (For
example, mailto: URLs in the user's default mail agent.)
[electron docs](https://github.com/atom/electron/blob/master/docs/api/shell.md#shellopenexternalurl)

### `moveItemToTrash : String -> Task errorType Bool`
Move the given file to trash and returns a boolean status for the operation.
[electron docs](https://github.com/atom/electron/blob/master/docs/api/shell.md#shellmoveitemtotrashfullpath)

### `beep : () -> Task errorType ()`
Play the beep sound.
[electron docs](https://github.com/atom/electron/blob/master/docs/api/shell.md#shellbeep)

## Contributing

Any suggestions accepted! Submit issues, PRs, send an email or get in touch on twitter at @luke_dot_js or on the elmlang Slack at @luke. I'll be working on event more electron interop coming up so if you have ideas for that process as a whole feel free to get in touch with those as well. Thanks!
