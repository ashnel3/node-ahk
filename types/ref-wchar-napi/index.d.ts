declare module 'ref-wchar-napi' {
  import ref from 'ref-napi'
  import * as _wchar_t from 'ref-wchar-napi'

  interface WCString extends ref.Type<string> {
    name: 'WCString'
  }

  interface WCharT extends ref.Type<number> {
    name: 'wchar_t',
    string: WCString
  }

  var wchar_t: WCharT

  export = wchar_t
}
