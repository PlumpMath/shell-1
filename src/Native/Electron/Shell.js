Elm.Native.Electron = Elm.Native.Electron || {};
Elm.Native.Electron.Shell = Elm.Native.Electron.Shell || {};
Elm.Native.Electron.Shell.make = function(localRuntime) {

  localRuntime.Native = localRuntime.Native || {};
  localRuntime.Native.Electron = localRuntime.Native.Electron || {};
  localRuntime.Native.Electron.Shell = localRuntime.Native.Electron.Shell || {};

  if (Elm.Native.Electron.Shell.values) {
    localRuntime.Native.Electron.Shell.values = Elm.Native.Electron.Shell.values;
  }

  if (localRuntime.Native.Electron.Shell.values) {
    return localRuntime.Native.Electron.Shell.values;
  }

  var shell;
  try {
    shell = require('electron').shell;
  } catch (error) {
    throw new Error('Electron.Shell must be run in electron');
  }

  var Task = Elm.Native.Task.make(localRuntime);
  var Utils = Elm.Native.Utils.make(localRuntime);

  // showItemInFolder : String -> Task x ()
  function showItemInFolder (fullPath) {
    return Task.asyncFunction(function (callback) {
      shell.showItemInFolder(fullPath);
      callback(Task.succeed(Utils.Tuple0));
    });
  }

  // openItem : String -> Task x ()
  function openItem (fullPath) {
    return Task.asyncFunction(function (callback) {
      shell.openItem(fullPath);
      callback(Task.succeed(Utils.Tuple0));
    });
  }

  // openExternal : String -> Task x ()
  function openExternal (url) {
    return Task.asyncFunction(function (callback) {
      shell.openExternal(fullPath);
      callback(Task.succeed(Utils.Tuple0));
    });
  }

  // openExternal : String -> Task x Bool
  function moveItemToTrash(fullPath) {
    return Task.asyncFunction(function (callback) {
      var result = shell.moveItemToTrash(fullPath);
      callback(Task.succeed(result));
    });
  }

  // beep : () -> Task x ()
  function beep() {
    return Task.asyncFunction(function ) {
      shell.beep();
      callback(Task.succeed(Utils.Tuple0));
    }
  }

  localRuntime.Native.Electron.Shell.values = {
    showItemInFolder: showItemInFolder,
    openItem: openItem,
    openExternal: openExternal,
    moveItemToTrash: moveItemToTrash,
    beep: beep
  };

  return localRuntime.Native.Electron.Shell.values;
};
