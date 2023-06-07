import { ForeignFunction } from "ffi-napi";

export interface AhkLibrary {
  ahkAssign: ForeignFunction<number, [string, string, number]>
  ahkGetVar: ForeignFunction<string, [string, number, number]>
  ahkExec: ForeignFunction<number, [string, number]>
  ahkFunction: ForeignFunction<string, [string, string, string, string, string, string, string, string, string, string, string, number]>
  NewThread: ForeignFunction<number, [string, string, string]>
}
