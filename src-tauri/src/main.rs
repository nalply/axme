// Prevent additional console window on Windows in release
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![test_command])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}

#[tauri::command]
fn test_command() -> String {
    "inside test_command() in Rust".to_string()
}
