const { ipcRenderer } = require("electron")

export function close(){
    ipcRenderer.send('close',true);
}