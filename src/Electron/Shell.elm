module Electron.Shell(showItemInFolder, openItem, openExternal, moveItemToTrash, beep) where

{-| Provides interop to electron's shell module. All functions have no failure
case and will succeed whether or not the intended behavior was obtained from
your program. For example, calling `openItem` on a non-existant path will not
cause a program failure, it will simply not open anything. It is not possible
at this time to determine if these function succeed or fail, with the exception
of moveItemToTrash, which will resolve a Bool status

@docs showItemInFolder, openItem, openExternal, moveItemToTrash, beep
-}

import Task exposing(Task)
import Native.Electron.Shell


{-| Show the given file in a file manager. If possible, select the file.
https://github.com/atom/electron/blob/master/docs/api/shell.md#shellshowiteminfolderfullpath
-}
showItemInFolder : String -> Task errorType ()
showItemInFolder = Native.Electron.Shell.showItemInFolder


{-| Open the given file in the desktop's default manner.
https://github.com/atom/electron/blob/master/docs/api/shell.md#shellopenitemfullpath
-}
openItem : String -> Task errorType ()
openItem = Native.Electron.Shell.openItem


{-| Open the given external protocol URL in the desktop's default manner. (For
example, mailto: URLs in the user's default mail agent.)
https://github.com/atom/electron/blob/master/docs/api/shell.md#shellopenexternalurl
-}
openExternal : String -> Task errorType ()
openExternal = Native.Electron.Shell.openExternal


{-| Move the given file to trash and returns a boolean status for the operation.
https://github.com/atom/electron/blob/master/docs/api/shell.md#shellmoveitemtotrashfullpath
-}
moveItemToTrash : String -> Task errorType Bool
moveItemToTrash = Native.Electron.Shell.moveItemToTrash


{-| Play the beep sound.
https://github.com/atom/electron/blob/master/docs/api/shell.md#shellbeep
-}
beep : () -> Task errorType ()
beep = Native.Electron.Shell.beep
