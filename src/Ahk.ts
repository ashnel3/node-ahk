import ffi from 'ffi-napi'
import ref from 'ref-napi'
import wchar_t from 'ref-wchar-napi'
import { dirname, join } from 'path'

import type { AhkLibrary } from '../types/index.js'

/**
 * AutoHotkey library class
 * @public
 * @class
 */
export class Ahk {

  /** AutoHotkey dll path */
  readonly _path: string

  /** AutoHotkey dll library */
  readonly _lib: AhkLibrary

  constructor() {
    if (process.arch !== 'x64' && process.arch as string !== 'x32') {
      throw new Error(`Unsupported architecture "${process.arch}"!`)
    }
    this._path = join(
      dirname(import.meta.url.substring(8)),
      '../lib',
      `AutoHotkey${process.arch.replace(/[a-z]/g, '')}.dll`
    )
    this._lib = ffi.Library(this._path, {
      ahkAssign: ['int', [wchar_t.string, wchar_t.string, 'uint']],
      ahkGetVar: [wchar_t.string, [wchar_t.string, 'int', 'uint']],
      ahkExec: ['int', [wchar_t.string, 'uint']],
      ahkFunction: [
        wchar_t.string,
        [
          wchar_t.string,
          wchar_t.string,
          wchar_t.string,
          wchar_t.string,
          wchar_t.string,
          wchar_t.string,
          wchar_t.string,
          wchar_t.string,
          wchar_t.string,
          wchar_t.string,
          wchar_t.string,
          'uint'
        ]
      ],
      NewThread: ['uint', [wchar_t.string, wchar_t.string, wchar_t.string]]
    })
  }
}
