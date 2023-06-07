import { Ahk } from "./Ahk.js";

/**
 * AutoHotkey thread class
 * @public
 * @class
 */
export class AhkThread {
  readonly ahk: Ahk
  readonly id: number

  constructor(ahk: Ahk, script = 'Persistent true', cmdline = '', title = '') {
    this.ahk = ahk
    this.id = ahk._lib.NewThread(script, cmdline, title)
  }

  /**
   * Get variable
   * @param name    - varname
   * @param byValue - Retrieve by value / reference
   * @returns
   */
  get(name: string, byValue = 0): string {
    return this.ahk._lib.ahkGetVar(name, byValue, this.id)
  }

  /**
   * Set variable
   * @param name  - varname
   * @param value - value
   */
  set(name: string, value: string): void {
    this.ahk._lib.ahkAssign(name, value, this.id)
  }

  msgbox(msg: string, title = '', options = ''): void {
    this.ahk._lib.ahkFunction('MsgBox', msg, title, options, '', '', '', '', '', '', '', this.id)
  }
}
