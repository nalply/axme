import { EditorState } from '@codemirror/state'
import { EditorView, keymap, type KeyBinding } from '@codemirror/view'
import { defaultKeymap } from '@codemirror/commands'
import { invoke } from '@tauri-apps/api'

import { test } from './import-test.js'

const dump: KeyBinding[] = [{
  key: "Ctrl-Space",
  run() {
    console.log("pressed Ctrl-Space")

    if (typeof window.__TAURI_IPC__ !== 'function') {
      console.log("Tauri not available")
      return true
    }
    
    ;(async () => {
      const result = await invoke('test_command')
      const changes = { from: 0, insert: result + "\n" }
      view.dispatch({ changes })
    })()
    
    return true
  }, 
}]

const state = EditorState.create({
  doc: "Hello World\n" + test,
  extensions: [ 
    keymap.of(defaultKeymap),
    keymap.of(dump),
  ],
})
const view = new EditorView({
  state, parent: document.body
})

