export{cleanData};

function cleanData(data : any){
    //qua vanno puliti tutti i § che arrivano dalle distinte, dato che gli script sono in comune
    //con altri servizi tipo la generazione degli allegati che legge la cfvari senza §
    for (const key in data) {
        if (key.substring(0, 1) === '§') {
            let cleanKey = key.substring(1);
            data[cleanKey] = data[key];
        }
    }
}