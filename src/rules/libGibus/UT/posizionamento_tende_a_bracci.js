module.exports.disegna_posizionamento_tende_a_bracci = disegna_posizionamento_tende_a_bracci;

module.exports.render_LOGO_pos = render_LOGO_pos;

//preso da sistema elettronico pergole
function render_LOGO_pos(pos, dim_target) {
  let dimensioni = {
      w: 100,
      h: 39.523
  };
  let scale = 1;
  if (dim_target.w !== '') {
      scale = dim_target.w / dimensioni.w;
  } else {
      if (dim_target.h !== '') {
          scale = dim_target.h / dimensioni.h;
      }
  }

  let sDis = '';
  sDis += '<g>';
  //sDis += ScriviLabel(info.pos, etk);
  sDis += '<g transform="translate(' + pos.x + ' ' + pos.y + ')" ><g transform="scale(' + scale + ')" ><g transform="translate(-64.391 -112.6)"><g transform="matrix(.35278 0 0 -.35278 63.891 152.36)"><g transform="translate(41.143)"><g transform="translate(7.092,16.717)"><path d="m0 0v-1.965h4.49v-13.898h2.033v13.898h4.514v1.965z" fill="#3c3c3c"/></g><g transform="translate(30.894,16.717)"><path d="m0 0v-6.769h-8.759v6.769h-2.032v-15.863h2.032v7.128h8.759v-7.128h2.033v15.863z" fill="#3c3c3c"/></g><g transform="translate(36.588,16.717)"><path d="m0 0v-15.863h9.16v1.967h-7.127v5.161h5.787v1.966h-5.787v4.804h7.127v1.965z" fill="#3c3c3c"/></g><g transform="translate(59.413,9.5684)"><path d="m0 0-1.453 0.626c-1.674 0.736-2.345 1.519-2.345 2.681 0 1.318 1.185 2.076 2.526 2.076 1.384 0 2.254-0.535 3.082-1.518l1.43 1.43c-1.072 1.297-2.592 2.032-4.445 2.032-2.346 0-4.626-1.563-4.626-3.975 0-1.99 1.05-3.463 3.463-4.494l1.453-0.625c1.697-0.735 2.592-1.498 2.592-2.946 0-1.386-1.163-2.234-2.993-2.234-1.543 0-2.839 0.868-3.598 1.852l-1.543-1.341c0.939-1.339 2.861-2.456 5.161-2.456 3.106 0 5.027 1.811 5.027 4.401 0 2.235-1.585 3.553-3.731 4.491" fill="#3c3c3c"/></g><g transform="translate(76.05,6.7988)"><path d="m0 0c0-2.749-1.742-4.178-4.29-4.178-2.546 0-4.288 1.429-4.288 4.178v9.918h-2.034v-9.83c0-3.887 2.637-6.21 6.322-6.21 3.711 0 6.324 2.323 6.324 6.21v9.83h-2.034z" fill="#3c3c3c"/></g><g transform="translate(92.922,5.4336)"><path d="m0 0-11.305 11.462v-16.041h2.034v11.282l11.303-11.46v16.04h-2.032z" fill="#3c3c3c"/></g><g transform="translate(106.45,14.752)"><path d="m0 0h6.86v1.965h-8.892v-15.862h2.032v7.126h5.362v1.966h-5.362z" fill="#3c3c3c"/></g><g transform="translate(117.04,6.8867)"><path d="m0 0 2.681 5.676 2.681-5.676zm-5.05-6.032h2.191l1.964 4.157h7.15l1.967-4.157h2.188l-7.729 16.041z" fill="#3c3c3c"/></g><g transform="translate(135.54,14.951)"><path d="m0 0c1.588 0 2.929-0.603 3.955-1.474l1.185 1.543c-1.364 1.227-3.152 1.875-5.14 1.875-4.535 0-8.11-3.506-8.11-8.109 0-4.604 3.575-8.109 8.11-8.109 1.988 0 3.776 0.648 5.14 1.875l-1.185 1.543c-1.026-0.873-2.367-1.474-3.955-1.474-3.463 0-6.031 2.68-6.031 6.165s2.568 6.165 6.031 6.165" fill="#3c3c3c"/></g><g transform="translate(142.07,14.752)"><path d="m0 0h4.486v-13.897h2.037v13.897h4.512v1.965h-11.035z" fill="#3c3c3c"/></g><g transform="translate(161.55,2.6211)"><path d="m0 0c-3.464 0-6.03 2.68-6.03 6.165s2.566 6.165 6.03 6.165c3.463 0 6.03-2.68 6.03-6.165s-2.567-6.165-6.03-6.165m0 14.274c-4.536 0-8.109-3.506-8.109-8.109s3.573-8.109 8.109-8.109c4.535 0 8.109 3.506 8.109 8.109s-3.574 8.109-8.109 8.109" fill="#3c3c3c"/></g><g transform="translate(174.34,9.5908)"><path d="m0 0v5.251h2.544c2.082 0 3.13-0.984 3.13-2.638 0-1.631-1.048-2.613-3.13-2.613zm7.774 2.658c0 2.702-1.989 4.468-5.092 4.468h-4.716v-15.862h2.034v6.927h1.741l5.293-6.927h2.46l-5.473 7.061c2.325 0.446 3.753 2.077 3.753 4.333" fill="#3c3c3c"/></g><g transform="translate(190.09,9.5684)"><path d="m0 0-4.467 7.148h-2.37l5.809-9.134v-6.728h2.055v6.728l5.809 9.134h-2.367z" fill="#3c3c3c"/></g></g><g transform="translate(279.22,90.473)"><path d="m0 0c-2.509 0-4.564 2.055-4.564 4.562 0 2.522 2.055 4.579 4.564 4.579 2.521 0 4.576-2.057 4.576-4.579 0-2.507-2.055-4.562-4.576-4.562m0.014 10.229c-3.115 0-5.652-2.553-5.652-5.667 0-3.098 2.537-5.652 5.652-5.652 3.113 0 5.652 2.554 5.652 5.652 0 3.114-2.539 5.667-5.652 5.667" fill="#eb0000"/></g><g transform="translate(279.28,95.595)"><path d="m0 0h-0.933v1.433h0.933c0.562 0 0.855-0.25 0.855-0.718 0-0.451-0.293-0.715-0.855-0.715m1.992 0.779c0 1.012-0.777 1.68-1.805 1.68h-2.194v-5.978h1.058v2.538h0.452l1.852-2.538h1.246l-1.931 2.616c0.763 0.203 1.308 0.81 1.322 1.682" fill="#eb0000"/></g><g transform="translate(80.705,111.8)"><path d="m0 0c-1.152-1.635-1.8-3.667-1.8-5.907 0-5.718 4.442-10.293 9.994-10.293s9.993 4.575 9.993 10.293c0 2.24-0.647 4.272-1.799 5.907z" fill="#eb0000"/></g><g transform="translate(37.963,62.055)"><path d="m0 0h18.997v-8.998c-3.888-2.777-8.777-3.887-15.219-3.887-12.775 0-22.439 10.552-22.439 23.215 0 12.662 9.664 23.214 22.439 23.214 8.442 0 13.663-2.775 18.44-8.771l13.441 10.994c-7.666 9.445-18.331 14.887-31.881 14.887-22.217 0-40.323-18.109-40.323-40.324 0-22.216 18.106-40.323 40.323-40.323 13.33 0 24.659 4.001 32.437 12.888v31.764h-29.259z" fill="#eb0000"/></g><path d="m80.461 32.963h16.767v55.518h-16.767z" fill="#eb0000"/><g transform="translate(129.71,47.891)"><path d="m0 0c-4.107 0-7.216 1.804-9.438 4.801v16.69c2.222 2.998 5.331 4.664 9.438 4.664 7.995 0 12.769-5.995 12.769-13.324s-4.774-12.831-12.769-12.831m2.776 41.478c-4.552 0-8.993-1.555-12.214-4.22v26.65h-16.765v-78.836h16.765v4.372c2.915-3.264 7.866-5.259 12.418-5.259 16.433 0 26.665 13.435 26.665 28.646 0 15.212-10.436 28.647-26.869 28.647" fill="#eb0000"/></g><g transform="translate(201.39,53.213)"><path d="m0 0c-2.22-3.555-6.328-5.815-10.436-5.815-6.663 0-9.773 5.552-9.773 13.103v27.98h-16.766v-30.979c0-15.101 8.773-25.427 23.762-25.427 4.663 0 9.771 2.04 13.213 5.26v-4.372h16.767v55.518h-16.767z" fill="#eb0000"/></g><g transform="translate(250.15,67.889)"><path d="m0 0c-1.48 0.252-2.853 0.483-4.041 0.737-0.038 6e-3 -0.983 0.192-1.98 0.563-0.158 0.058-0.315 0.125-0.593 0.255-0.117 0.055-0.235 0.113-0.348 0.174l-0.168 0.101c-0.098 0.057-0.194 0.117-0.286 0.181l-0.176 0.13c-0.086 0.064-0.169 0.131-0.248 0.203l-0.166 0.157c-0.074 0.073-0.142 0.152-0.21 0.233-0.05 0.059-0.096 0.117-0.14 0.178-0.064 0.09-0.119 0.184-0.196 0.321l-0.081 0.154c-0.049 0.111-0.086 0.228-0.121 0.351l-0.057 0.181c-0.044 0.206-0.066 0.402-0.066 0.602l0.029 0.166c0.085 1.58 2.106 2.84 5.524 3.202l0.408 0.033c0.32 0.028 0.648 0.047 0.992 0.06 0.289 0.011 0.58 0.018 0.928 0.018h3e-3c3.223-8e-3 10.118-0.834 16.581-5.611l5.599 11.835c-6.565 4.758-14.547 7.27-23.095 7.27-16.296 0-23.719-9.424-23.719-18.182 0-14.422 13.216-16.61 22.866-18.207 2.797-0.461 5.213-0.861 6.937-1.501 1.251-0.521 2.711-1.502 2.555-3.226l-0.022-0.194c-0.027-0.174-0.07-0.354-0.134-0.538l-0.085-0.221c-0.066-0.161-0.135-0.324-0.232-0.509-1.01-1.618-3.451-2.37-7.683-2.37-6.7 0-15.63 3.47-20.596 7.16l-5.638-11.853c5.812-5.185 15.991-8.53 25.981-8.53 15.25 0 25.282 7.096 25.105 18.071-0.24 14.791-14.088 17.023-23.427 18.606" fill="#eb0000"/></g></g></g> </g></g>';
  sDis += '</g>';
  return sDis;
}



let VER_FUNZIONE = '1.2-230925';




/*

---
// let VER_FUNZIONE = '1.2-23/09/25';
. configurazione per tenda divisa
---


---
// let VER_FUNZIONE = '1.1p-21/05/30';
. introdotta la possibilità di aggiungere più di un telo
---


---
// let VER_FUNZIONE = '1.1o-21/05/11';
. sistemato posizionamento supporti per 3 bracci
---

---
// let VER_FUNZIONE = '1.1n-25/04/20';
. sistemato posizionamento manuale
---

---
// let VER_FUNZIONE = '1.1m-21/04/20';
. sistemato spostamento dei bracci nel caso di mancanza di spazio
---

---
// let VER_FUNZIONE = '1.1l-21/04/19';
. baco su braccio edge75 da 350
---

---
// let VER_FUNZIONE = '1.1i-21/04/14';
. baco su teli piccoli
. spsostamento bracci per caso arganello (min 5cm)
---

---
// let VER_FUNZIONE = '1.1h-21/04/07';
. baco su definizione numero supporti spazio 75
---

---
// let VER_FUNZIONE = '1.1g-21/04/07';
. baco su definizione numero supporti spazio 75
---


---
// let VER_FUNZIONE = '1.1f-21/04/06';
. baco su inObject.SMEUP
---


---
// let VER_FUNZIONE = '1.1e-21/04/06';
. baco su bracci dispari
---

---
// let VER_FUNZIONE = '1.1d-21/04/05';
. modificata grafica dei bracci (cinematica inversa)
. creato nuovo cartiglio
. introdotto check con SMEUP per bracci, supporti e scivoli
. modificata grafica per visualizzazione telo con cuciture
---

---
// let VER_FUNZIONE = '1.1c-21/03/28';
. sistemati alcuni bachi dovuti ad interferenze tra scivoli e supporti
. introdotto nuovo calcolo supporti (old e new)
. sistemato calcolo interasse tessuti nel caso PVC (mancava cucitura)
---

---
// let VER_FUNZIONE = '1.1b-21/03/23';
. combiati i valori di:
      const gioco_minimo      = 11 //5
      const da_bordo          = 2; //1
---

---
// let VER_FUNZIONE = '1.1a-21/03/03';
. sistemato calcolo mezzi teli (rivisto arrotondamento)
. introdotta la possibilità di spostare manualmente la posizione di bracci e supporti
---

---
// let VER_FUNZIONE = '1.1-21/03/02';
. sistemato calcolo numero bracci spazio75 640x300 (3 bracci, non 4)
. introdotta la possibilità di scegliere se usare bracci destri o sinistri
. tolta funzione che fa passare a dispari il numero di teli quando il numero di scivoli è pari
. aumentata la distanza tra supporto universale e inizio bq
. autometata la distanza tra linea e testo nelle quote per risolvere problema grafico in PDF
---

---
// let VER_FUNZIONE = '1.0-21/03/01';
. sistemato calcolo dei tessuti: corretto il calcolo della larghezza del tessuto in ingresso
. inserito testo con release
. invertita la posizione dei supporti nel caso di spazio60 950x250
. sistemata funzione per check interferenze supporti/scivoli/bracci
---
*/




var cursore;
var pos_cursore = {x: 0, y:0};
var pos_oggetto = {x: 0, y:0};
var rif_oggetto = '';
var click       = false;

var offset = [0, 0];




function mouse_click_supporti(rif)
{
  click = true;
  console.log('X: '+ event.clientX + '  Y: '+event.clientY);
  console.log('rif: '+rif);
  let info = getInfoSUPPORTI(rif);
  console.log(info);

  let ogg = document.getElementById(rif);
  let infos = ogg.getBoundingClientRect();


  console.log('X: '+ infos.x + '  Y: '+infos.y);
  pos_cursore.x = event.clientX; pos_cursore.y = event.clientY;
  pos_oggetto.x = infos.x; pos_cursore.y = infos.y;
  rif_oggetto   = rif;

  let posCorrente     = (info.lato=="SX")?info.pos.daSX.abs.toFixed(1):info.pos.daDX.abs.toFixed(1);
  let valore_daSX_abs = info.pos.daSX.abs.toFixed(1);
  //var nome = document.getElementById("svg-POSIZIONAMENTO").parentNode.nodeName;
  //console.log('nome: '+nome);

  alertify.prompt( 'Posizione Supporto', posCorrente
               , function(evt, value) {
                 alertify.success('Nuovo valore: ' + value);
                 if(info.lato=="SX")
                   {
                     valore_daSX_abs=value;
                   }
                   else
                   {
                     valore_daSX_abs=parseFloat(info.pos.daSX.abs+info.pos.daDX.abs-value).toFixed(1);
                   }
                 setPosSUPPORTI(rif, valore_daSX_abs);
                 document.getElementById("svg-POSIZIONAMENTO").parentElement.innerHTML=posizionamentoAutomaticoSPAZIO(GLOBAL_INPUT_OBJECT, false).sDis;;

               }
               , function() { alertify.error('Cancel') });
}


function mouse_click_bracci(rif)
{
  click = true;
  console.log('X: '+ event.clientX + '  Y: '+event.clientY);
  console.log('rif: '+rif);
  let info = getInfoBRACCI(rif);
  console.log(info);
  let posCorrente     = (info.lato=="SX")?info.pos.daSX.suBQ.toFixed(1):info.pos.daDX.suBQ.toFixed(1);
  let valore_daSX_suBQ = info.pos.daSX.suBQ.toFixed(1);

  alertify.prompt( 'Posizione Braccio', posCorrente
               , function(evt, value) {
                 alertify.success('Nuovo valore: ' + value);
                 if(info.lato=="SX")
                   {
                     valore_daSX_suBQ=value;
                   }
                   else
                   {
                     valore_daSX_suBQ=parseFloat(info.pos.daSX.suBQ+info.pos.daDX.suBQ-value).toFixed(1);
                   }
                 setPosBRACCI(rif, valore_daSX_suBQ);
                 document.getElementById("svg-POSIZIONAMENTO").parentElement.innerHTML=posizionamentoAutomaticoSPAZIO(GLOBAL_INPUT_OBJECT, false).sDis;;

               }
               , function() { alertify.error('Cancel') });

}









function isEven(value) {
	if (value%2 == 0)
		return true;
	else
		return false;
}

function setPosByOffset(refPos, offset)
{
  let newPos = new Object();
  newPos.daSX  = {abs: parseFloat(refPos.daSX.abs + offset), suBQ: parseFloat(refPos.daSX.suBQ + offset)};
  newPos.daDX  = {abs: parseFloat(refPos.daDX.abs - offset), suBQ: parseFloat(refPos.daDX.suBQ - offset)};
  return newPos;
}

function setPosByValue_daSX_abs(refPos, value)
{
  let spostamento = -parseFloat(refPos.daSX.abs-value);
  console.log('refPos.daSX.abs: '+refPos.daSX.abs);
  console.log('value: '+value);
  console.log('spostamento: '+spostamento);
  let newPos = new Object();
  newPos.daSX  = {abs: parseFloat(refPos.daSX.abs + spostamento), suBQ: parseFloat(refPos.daSX.suBQ + spostamento)};
  newPos.daDX  = {abs: parseFloat(refPos.daDX.abs - spostamento), suBQ: parseFloat(refPos.daDX.suBQ - spostamento)};
  return newPos;
}

function setPosByValue_daSX_suBQ(refPos, value)
{
  let spostamento = -parseFloat(refPos.daSX.suBQ-value);
  console.log('refPos.daSX.suBQ: '+refPos.daSX.suBQ);
  console.log('value: '+value);
  console.log('spostamento: '+spostamento);
  let newPos = new Object();
  newPos.daSX  = {abs: parseFloat(refPos.daSX.abs + spostamento), suBQ: parseFloat(refPos.daSX.suBQ + spostamento)};
  newPos.daDX  = {abs: parseFloat(refPos.daDX.abs - spostamento), suBQ: parseFloat(refPos.daDX.suBQ - spostamento)};
  return newPos;
}


function CalcolaPosizioneSupporti(inObject)
{
  //console.clear();

  let iLARGHEZZA            = parseFloat(inObject.LARGHEZZA);       // larghezza
  let iSPORGENZA            = parseInt(inObject.SPORGENZA);         // sporgenza nominale bracci
  let iN_BRACCI             = parseInt(inObject.N_BRACCI);          // numero bracci forzato da SMEUP
  let iTipoTENDA            = parseInt(inObject.TipoTENDA);         // 0: spazio60, 1:spazio75
  let iTipoBRACCIO          = inObject.TipoBRACCIO;
  let iDIVISA               = inObject.DIVISA;

  const offsetQuotaSupporti   = 6.0;
  let posCentro = new Object();
  posCentro.daSX = {abs:iLARGHEZZA/2, suBQ:iLARGHEZZA/2-offsetQuotaSupporti};
  posCentro.daDX = {abs:iLARGHEZZA/2, suBQ:iLARGHEZZA/2-offsetQuotaSupporti};


  let numero_supporti = CalcolaSupporti(inObject);
  console.log('numero_supporti (prima): '+numero_supporti);
  //if(inObject.CUSTOMIZED!==2) numero_supporti += CalcolaTessuti(inObject).richiesta_supporto_a_parete;
  console.log('numero_supporti (dopo): '+numero_supporti);

  //let posizione_supporti    = [];
  POSIZIONE_SUPPORTI        = [];

  //console.log('POSIZIONE_BRACCI_OLD: '); console.log(POSIZIONE_BRACCI);

  //////////////////////////////////////////////////////////////////////////////
  // supporto obbligatorio al centro nel caso di profili giuntati
  //if(iLARGHEZZA>710) {POSIZIONE_SUPPORTI.push({pos:posCentro, offset:0, ref: 'centro'}); numero_supporti--};


  //////////////////////////////////////////////////////////////////////////////
  // recupero posizionamento dei bracci
  let n_bracci                = POSIZIONE_BRACCI.length;//CalcolaBracci(inObject);
  let pos;
  const offStd    = (iTipoTENDA==2||iTipoTENDA==1||n_bracci==2)?15:-15;
  const offStdS   = (iTipoTENDA==2||iTipoTENDA==1||n_bracci==2)?10:-10;
  const sicurezza = 5; //5 2
  //console.log('[TEST] n_bracci: '+n_bracci);
  /// almeno un supporto per braccio
  /// std: bracci a sx -> supporto a sx, bracci a dx -> supporto a dx
  /// se non c'è abbastanza posto, inverto la posizione (solo alle estremità)

  let pesoBraccio = 0;
  if(isEven(n_bracci)==false) pesoBraccio = (iTipoBRACCIO=='L')?1:0;
  console.log('n_bracci totali: '+n_bracci);
  console.log('STEP A: numero_supporti: '+numero_supporti);

  console.table(POSIZIONE_BRACCI);

  for(let i=0; i<n_bracci; i++)
  {
    numero_supporti--
    console.log('numero_supporti: '+numero_supporti);
    let offsetTMP = (i==0||i==n_bracci-1)?15:offStd;

    pos = POSIZIONE_BRACCI[i].pos;
    if((i+1)<=(n_bracci/2)+pesoBraccio)
    {
      if(i==0 && (pos.daSX.suBQ-offsetTMP<sicurezza ) ) // primo braccio a sx e non ci sto con il supporto in posizione std
          POSIZIONE_SUPPORTI.push({pos:setPosByOffset(pos, offsetTMP), offset:0, ref: 'sup_braccio_sx_'+(i+1)});
      else
          POSIZIONE_SUPPORTI.push({pos:setPosByOffset(pos, -offsetTMP), offset:0, ref: 'sup_braccio_sx_'+(i+1)});
    }
    else
    {
      if(i==(n_bracci-1) && (pos.daDX.suBQ-offsetTMP<sicurezza ) ) // primo bracci a dx e non ci sto con il supporto
         POSIZIONE_SUPPORTI.push({pos:setPosByOffset(pos, -offsetTMP), offset:0, ref: 'sup_braccio_dx_'+(n_bracci-i)});
      else
         POSIZIONE_SUPPORTI.push({pos:setPosByOffset(pos, offsetTMP), offset:0, ref: 'sup_braccio_dx_'+(n_bracci-i)});
    }
  }
  console.log(POSIZIONE_SUPPORTI);
  console.log('STEP B: supporti ancora da posizionare: '+numero_supporti);




  //////////////////////////////////////////////////////////////////////////////
  // supporti su eventuali scivoli
  console.log('[start supporti su scivoli]');
  console.log('[iDIVISA: '+iDIVISA+']');
  if(numero_supporti>0 )
  {
     //let n_scivoli = CalcolaScivoli(inObject);
     let n_scivoli =  CalcolaTessuti(inObject).n_scivoli;
     //POSIZIONE_SCIVOLI = [];

     //console.log('numero_supporti rimasti: '+numero_supporti);
     console.log('numero scivoli: '+n_scivoli);
     let avvicina_al_centro = true;

     if(!isEven(numero_supporti)&&isEven(n_scivoli))
     {
       if(iLARGHEZZA>710) {POSIZIONE_SUPPORTI.push({pos:posCentro, offset:0, ref: 'centro'}); numero_supporti--};
       avvicina_al_centro = false;
     }

     if(numero_supporti==1&&isEven(n_scivoli)&&iDIVISA==1)
     {
       if(iLARGHEZZA<=540) {POSIZIONE_SUPPORTI.push({pos:posCentro, offset:0, ref: 'centro'}); numero_supporti--};
     }



     console.log('STEP B1: supporti ancora da posizionare: '+numero_supporti);

     if(numero_supporti==1 && n_scivoli==4 && iTipoTENDA==2)
      {
        // devo togliere il supporto centrale e metterne due nuovi vicini agli scivoli
        let found = false;
        for( let i = 0; i < POSIZIONE_SUPPORTI.length; i++){

            if ( POSIZIONE_SUPPORTI[i].ref === 'centro') {
                POSIZIONE_SUPPORTI.splice(i, 1);
                numero_supporti++;
                i--;
                found = true;
                break;
            }
        }
        if(found)
        {
          POSIZIONE_SUPPORTI.push({pos:setPosByOffset(POSIZIONE_SCIVOLI[0].pos, -offStd), offset:0,   ref: 'sup_scivolo_1_sx'});numero_supporti--
          POSIZIONE_SUPPORTI.push({pos:setPosByOffset(POSIZIONE_SCIVOLI[1].pos, offStd), offset:-0,  ref: 'sup_scivolo_1_dx'});numero_supporti--;
        }
        else
        {
           POSIZIONE_SUPPORTI.push({pos:posCentro, offset:0, ref: 'centro'}); numero_supporti--;
        }
      }

      if(numero_supporti==2 && n_scivoli==4 && iTipoTENDA==2)
       {
         POSIZIONE_SUPPORTI.push({pos:setPosByOffset(POSIZIONE_SCIVOLI[0].pos, offStd), offset:0,   ref: 'sup_scivolo_1_sx'});numero_supporti--
         POSIZIONE_SUPPORTI.push({pos:setPosByOffset(POSIZIONE_SCIVOLI[1].pos, -offStd), offset:-0,  ref: 'sup_scivolo_1_dx'});numero_supporti--;
       }

       if(numero_supporti==1 && n_scivoli==2 && iTipoTENDA==2)
        {
          // devo togliere il supporto centrale e metterne due nuovi vicini agli scivoli
          for( let i = 0; i < POSIZIONE_SUPPORTI.length; i++){

              if ( POSIZIONE_SUPPORTI[i].ref === 'centro') {
                  POSIZIONE_SUPPORTI.splice(i, 1);
                  numero_supporti++;
                  i--;
              }
          }
          POSIZIONE_SUPPORTI.push({pos:setPosByOffset(POSIZIONE_SCIVOLI[0].pos, -offStd), offset:0,   ref: 'sup_scivolo_1_sx'});numero_supporti--
          POSIZIONE_SUPPORTI.push({pos:setPosByOffset(POSIZIONE_SCIVOLI[1].pos, offStd), offset:-0,  ref: 'sup_scivolo_1_dx'});numero_supporti--;
        }

     if(numero_supporti==1 && n_scivoli==0)
      {
        numero_supporti=0;
        POSIZIONE_SUPPORTI.push({pos:posCentro, offset:0, ref: 'sup_scivolo_centrale'});
      }

     if(numero_supporti==1 && n_scivoli==1)
      {
        //n_scivoli--;
        POSIZIONE_SUPPORTI.push({pos:setPosByOffset(POSIZIONE_SCIVOLI[0].pos, -offStd), offset:0, ref: 'sup_scivolo_centrale_sx'});numero_supporti--;

      }

     if(numero_supporti==2 && n_scivoli==1)
      {
        //n_scivoli--;
        //POSIZIONE_SUPPORTI.push({pos:setPosByOffset(POSIZIONE_SCIVOLI[0].pos, -3*offStd), offset:0, ref: 'sup_scivolo_centrale_sx'});numero_supporti--;
        //POSIZIONE_SUPPORTI.push({pos:setPosByOffset(POSIZIONE_SCIVOLI[0].pos, 3*offStd), offset:0,  ref: 'sup_scivolo_centrale_dx'});numero_supporti--;
        //let info_S_SX_1 = getInfoSCIVOLI('scivolo_sx_1');
        //let info_S_DX_1 = getInfoSCIVOLI('scivolo_dx_1');
        if(n_bracci==3)
        {
          if(iTipoBRACCIO=='L')
          {
            let info_B_SX_1 = getInfoBRACCI('braccio_sx_1');
            let info_B_SX_2 = getInfoBRACCI('braccio_sx_2');
            let info_B_DX_1 = getInfoBRACCI('braccio_dx_1');
            let info_S_0    = getInfoSCIVOLI('scivolo_centrale');

            POSIZIONE_SUPPORTI.push({pos: setPosByOffset(info_S_0.pos, -15), offset:0, ref:'sup_scivolo_centrale'}); numero_supporti--;
            let DeltaPos = parseFloat((info_B_DX_1.pos.daSX.abs -  (info_S_0.pos.daSX.abs - 15) )/2);
            POSIZIONE_SUPPORTI.push({pos: setPosByOffset(info_B_DX_1.pos, -DeltaPos), offset:0, ref:'sup_medio_dx1_scivolo_centrale'}); numero_supporti--;
          }
          else
          {
            let info_B_SX_1 = getInfoBRACCI('braccio_sx_1');
            let info_B_DX_2 = getInfoBRACCI('braccio_dx_2');
            let info_B_DX_1 = getInfoBRACCI('braccio_dx_1');
            let info_S_0    = getInfoSCIVOLI('scivolo_centrale');

            POSIZIONE_SUPPORTI.push({pos: setPosByOffset(info_S_0.pos, +15), offset:0, ref:'sup_scivolo_centrale'}); numero_supporti--;
            let DeltaPos = parseFloat(((info_S_0.pos.daSX.abs + 15) - info_B_SX_1.pos.daSX.abs )/2);
            POSIZIONE_SUPPORTI.push({pos: setPosByOffset(info_B_SX_1.pos, +DeltaPos), offset:0, ref:'sup_medio_sx1_scivolo_centrale'}); numero_supporti--;
          }
        }
        else
        {
          let info_B_SX_1 = getInfoBRACCI('braccio_sx_1');
          let info_B_DX_1 = getInfoBRACCI('braccio_dx_1');
          let info_S_0    = getInfoSCIVOLI('scivolo_centrale');

          let DeltaPos = parseFloat((info_S_0.pos.daSX.abs -  info_B_SX_1.pos.daSX.abs)/2);
          console.log('DeltaPos: '+DeltaPos);
          //let posSUP;
          //posSUP.daSX = {abs:POSIZIONE_BRACCI[0].pos.daSX.abs+DeltaPos, suBQ:POSIZIONE_BRACCI[0].pos.daSX.suBQ+DeltaPos};
          //posSUP.daDX = {abs:POSIZIONE_BRACCI[0].pos.daDX.abs-DeltaPos, suBQ:POSIZIONE_BRACCI[0].pos.daDX.suBQ-DeltaPos};
          POSIZIONE_SUPPORTI.push({pos: setPosByOffset(info_B_SX_1.pos, +DeltaPos), offset:0, ref:'sup_medio_sx'}); numero_supporti--;
          POSIZIONE_SUPPORTI.push({pos: setPosByOffset(info_B_DX_1.pos, -DeltaPos), offset:0, ref:'sup_medio_dx'}); numero_supporti--;
        }


        //numero_supporti=0;
      }

      if(numero_supporti==2 && n_scivoli==2)
       {
         //25.03.2021; modificato segno offset
         if(avvicina_al_centro)
         {
           POSIZIONE_SUPPORTI.push({pos:setPosByOffset(POSIZIONE_SCIVOLI[0].pos, offStd), offset:0, ref: 'sup_scivolo_1_sx'});numero_supporti--;
           POSIZIONE_SUPPORTI.push({pos:setPosByOffset(POSIZIONE_SCIVOLI[1].pos, -offStd), offset:0,  ref: 'sup_scivolo_2_dx'});numero_supporti--;
         }
         else
         {
           POSIZIONE_SUPPORTI.push({pos:setPosByOffset(POSIZIONE_SCIVOLI[0].pos, -offStd), offset:0, ref: 'sup_scivolo_1_sx'});numero_supporti--;
           POSIZIONE_SUPPORTI.push({pos:setPosByOffset(POSIZIONE_SCIVOLI[1].pos, +offStd), offset:0,  ref: 'sup_scivolo_2_dx'});numero_supporti--;
         }
       }

       if(numero_supporti==1 && n_scivoli==2)
        {
          // devo togliere il supporto centrale e metterne due nuovi vicini agli scivoli
          for( let i = 0; i < POSIZIONE_SUPPORTI.length; i++){

              if ( POSIZIONE_SUPPORTI[i].ref === 'centro') {
                  POSIZIONE_SUPPORTI.splice(i, 1);
                  numero_supporti++;
                  i--;
              }
          }
          //////
          //n_scivoli = 0;
          POSIZIONE_SUPPORTI.push({pos:setPosByOffset(POSIZIONE_SCIVOLI[0].pos, offStd), offset:0,   ref: 'sup_scivolo_1_dx'});numero_supporti--
          POSIZIONE_SUPPORTI.push({pos:setPosByOffset(POSIZIONE_SCIVOLI[0].pos, -offStd), offset:-0,  ref: 'sup_scivolo_2_sx'});numero_supporti--;
        }

        if(numero_supporti==2 && n_scivoli==4)
         {
           //n_scivoli = 2;
           //POSIZIONE_SUPPORTI.push({pos:setPosByOffset(POSIZIONE_SCIVOLI[0].pos, -2*offStd), offset:0, ref: 'sup_scivolo_1_dx'});numero_supporti--;
           //POSIZIONE_SUPPORTI.push({pos:setPosByOffset(POSIZIONE_SCIVOLI[0].pos, 2*offStd), offset:0,  ref: 'sup_scivolo_2_sx'});numero_supporti--;
           if(avvicina_al_centro)
           {
             POSIZIONE_SUPPORTI.push({pos:setPosByOffset(POSIZIONE_SCIVOLI[0].pos, offStd), offset:0, ref: 'sup_scivolo_1_sx'});numero_supporti--;
             POSIZIONE_SUPPORTI.push({pos:setPosByOffset(POSIZIONE_SCIVOLI[1].pos, -offStd), offset:0,  ref: 'sup_scivolo_2_dx'});numero_supporti--;
           }
           else
           {
             POSIZIONE_SUPPORTI.push({pos:setPosByOffset(POSIZIONE_SCIVOLI[0].pos, -offStd), offset:0, ref: 'sup_scivolo_1_sx'});numero_supporti--;
             POSIZIONE_SUPPORTI.push({pos:setPosByOffset(POSIZIONE_SCIVOLI[1].pos, +offStd), offset:0,  ref: 'sup_scivolo_2_dx'});numero_supporti--;
           }
         }

         if(numero_supporti==1 && n_scivoli==4)
          {
            // devo togliere il supporto centrale e metterne due nuovi vicini agli scivoli centrali
            for( let i = 0; i < POSIZIONE_SUPPORTI.length; i++){

                if ( POSIZIONE_SUPPORTI[i].ref === 'centro') {
                    POSIZIONE_SUPPORTI.splice(i, 1);
                    numero_supporti++;
                    i--;
                }
            }
            //////
            //n_scivoli = 0;
            POSIZIONE_SUPPORTI.push({pos:setPosByOffset(POSIZIONE_SCIVOLI[0].pos, offStd), offset:0,   ref: 'sup_scivolo_1_dx'});numero_supporti--
            POSIZIONE_SUPPORTI.push({pos:setPosByOffset(POSIZIONE_SCIVOLI[0].pos, -offStd), offset:0,  ref: 'sup_scivolo_2_sx'});numero_supporti--;
          }


        console.log('STEP C: supporti ancora da posizionare: '+numero_supporti);



          // casi introdotti da modifica delle tabelle di listino
          if(numero_supporti>0 && iTipoTENDA==2)
          {
              if(numero_supporti==2 && inObject.VOLANT==1 )
              {
                // posiziono due supporti intorno al centro
                let deltaSupporti = 50;
                let posCentroSX = new Object();
                posCentroSX.daSX = {abs:iLARGHEZZA/2-deltaSupporti, suBQ:iLARGHEZZA/2-offsetQuotaSupporti-deltaSupporti};
                posCentroSX.daDX = {abs:iLARGHEZZA/2+deltaSupporti, suBQ:iLARGHEZZA/2-offsetQuotaSupporti+deltaSupporti};
                POSIZIONE_SUPPORTI.push({pos:posCentroSX, offset:0, ref: 'centroSX'}); numero_supporti--;

                let posCentroDX = new Object();
                posCentroDX.daSX = {abs:iLARGHEZZA/2+deltaSupporti, suBQ:iLARGHEZZA/2-offsetQuotaSupporti+deltaSupporti};
                posCentroDX.daDX = {abs:iLARGHEZZA/2-deltaSupporti, suBQ:iLARGHEZZA/2-offsetQuotaSupporti-deltaSupporti};
                POSIZIONE_SUPPORTI.push({pos:posCentroDX, offset:0, ref: 'centroDX'}); numero_supporti--;
              }

               if(numero_supporti==3 && n_scivoli==2)
               {
                 POSIZIONE_SUPPORTI.push({pos:posCentro, offset:0, ref: 'centro'}); numero_supporti--;
                 POSIZIONE_SUPPORTI.push({pos:setPosByOffset(POSIZIONE_SCIVOLI[0].pos, -offStd), offset:0, ref: 'sup_scivolo_1_sx'});numero_supporti--;
                 POSIZIONE_SUPPORTI.push({pos:setPosByOffset(POSIZIONE_SCIVOLI[1].pos, offStd), offset:0,  ref: 'sup_scivolo_2_dx'});numero_supporti--;
               }
          }


        console.log('STEP D: supporti ancora da posizionare: '+numero_supporti);

          // bracci 350 e 400, serve il secondo supporto per ogni braccio
          //if(numero_supporti>0 && iSPORGENZA>=350 && iTipoTENDA==1)
          if(numero_supporti>0 && (iTipoTENDA==1 || iTipoTENDA==2) )
          {
            console.log('[WARNING] devo posizionare i secondi supporti per ogni braccio');
            // bracci laterali, se ho già fatto l'inversione del supporto, devo provare a spostare il braccio


            // caso in cui i due bracci alle estremità non hanno molto spazio
            if(POSIZIONE_BRACCI[0].pos.daSX.suBQ-offStd<sicurezza)
            {
              console.log('[WARNING] Inversione gia eseguita, cerco spazio');
              let quantoManca = -parseFloat(POSIZIONE_BRACCI[0].pos.daSX.suBQ-offStd-sicurezza);
              console.log('[WARNING] mancano: '+quantoManca+'cm');

              let posAttuale = POSIZIONE_BRACCI[0].pos.daSX.suBQ-4.2; // su BQ, inizio supporto braccio sx
              let margine_verso_centro = SPAZIO_BRACCIO-INGOMBRO_BRACCIO-posAttuale;
              console.log('margine_verso_centro: ' + margine_verso_centro);
              let spostamento_verso_centro = (margine_verso_centro>1)?parseFloat(margine_verso_centro-1).toFixed(1):0;
              // sposto posizione braccio sx

              if(spostamento_verso_centro>(quantoManca))  spostamento_verso_centro = parseFloat(quantoManca);

              console.log('sposto braccio sx di '+spostamento_verso_centro+'cm verso il centro');
              let copia_braccio_sx_1 = {daSX:{abs:0, suBQ:0}, daDX:{abs:0, suBQ:0}};
              copia_braccio_sx_1.daSX.suBQ  = POSIZIONE_BRACCI[0].pos.daSX.suBQ ;
              copia_braccio_sx_1.daSX.abs   = POSIZIONE_BRACCI[0].pos.daSX.abs  ;
              copia_braccio_sx_1.daDX.suBQ  = POSIZIONE_BRACCI[0].pos.daDX.suBQ ;
              copia_braccio_sx_1.daDX.abs   = POSIZIONE_BRACCI[0].pos.daDX.abs  ;
              console.log(copia_braccio_sx_1);

              POSIZIONE_BRACCI[0].pos.daSX.suBQ += parseFloat(spostamento_verso_centro);
              POSIZIONE_BRACCI[0].pos.daSX.abs  += parseFloat(spostamento_verso_centro);
              POSIZIONE_BRACCI[0].pos.daDX.suBQ -= parseFloat(spostamento_verso_centro);
              POSIZIONE_BRACCI[0].pos.daDX.abs  -= parseFloat(spostamento_verso_centro);

              console.log('nuova posizione: '+POSIZIONE_BRACCI[0].pos.daSX.suBQ);

              let spazio_disponibile = parseFloat(POSIZIONE_BRACCI[0].pos.daSX.suBQ-4.2);
              console.log('spazio_disponibile '+spazio_disponibile);

              const ingombro_supporto = 6;
              const gioco_minimo      = 8 //5
              const da_bordo          = 2; //1
              let spazio_sup_sx = parseFloat( (POSIZIONE_BRACCI[0].pos.daSX.suBQ-4.2)-(ingombro_supporto+gioco_minimo) );
              if(spazio_sup_sx>0)
              {
                console.log('Ho spazio: '+spazio_sup_sx);
                let newPos = {daSX:{suBQ:0 , abs:6}, daDX:{suBQ:iLARGHEZZA-6, abs:iLARGHEZZA-2*6}};
                //let newPos = {daSX:{suBQ:0 , abs:6}, daDX:{suBQ:iLARGHEZZA, abs:iLARGHEZZA-6}};
                POSIZIONE_SUPPORTI.push({pos: setPosByOffset(newPos, (da_bordo+ingombro_supporto/2)), offset:0, ref:'sup_braccio_sx_1_1'});
                let newValore =  2*getInfoBRACCI('braccio_sx_1').pos.daSX.suBQ-getInfoSUPPORTI('sup_braccio_sx_1_1').pos.daSX.suBQ;
                resetPosSupporti('sup_braccio_sx_1', newValore, inObject);

                // ripeto le operazioni anche per il primo braccio di dx
                setOffsetBracci('braccio_dx_1', -spostamento_verso_centro);
                newPos = {daSX:{suBQ:iLARGHEZZA-6 , abs:iLARGHEZZA-2*6}, daDX:{suBQ:0, abs:iLARGHEZZA-6}};
                //newPos = {daSX:{suBQ:iLARGHEZZA , abs:iLARGHEZZA-6}, daDX:{suBQ:0, abs:iLARGHEZZA-6}};
                POSIZIONE_SUPPORTI.push({pos: setPosByOffset(newPos, (-da_bordo+ingombro_supporto/2)), offset:0, ref:'sup_braccio_dx_1_1'});
                newValore =  getInfoBRACCI('braccio_dx_1').pos.daSX.suBQ-(getInfoBRACCI('braccio_sx_1').pos.daSX.suBQ-getInfoSUPPORTI('sup_braccio_sx_1_1').pos.daSX.suBQ);
                resetPosSupporti('sup_braccio_dx_1', newValore, inObject);
              }
              else
              {
                console.log('non ho spazio..');
                POSIZIONE_BRACCI[0].pos.daSX.suBQ = copia_braccio_sx_1.daSX.suBQ;
                POSIZIONE_BRACCI[0].pos.daSX.abs  = copia_braccio_sx_1.daSX.abs;
                POSIZIONE_BRACCI[0].pos.daDX.suBQ = copia_braccio_sx_1.daDX.suBQ;
                POSIZIONE_BRACCI[0].pos.daDX.abs  = copia_braccio_sx_1.daDX.abs;
                console.log('restored posizione: '+POSIZIONE_BRACCI[0].pos.daSX.suBQ);

                console.log('posizione gli altri supporti vicino ai primi');
                let info = getInfoSUPPORTI('sup_braccio_sx_1');
                POSIZIONE_SUPPORTI.push({pos: setPosByOffset(info.pos, (10)), offset:0, ref:'sup_braccio_sx_1_1'});
                info = getInfoSUPPORTI('sup_braccio_dx_1');
                POSIZIONE_SUPPORTI.push({pos: setPosByOffset(info.pos, (-10)), offset:0, ref:'sup_braccio_dx_1_1'});
              }

               numero_supporti = numero_supporti - 2;
            }
            else
            {


                 //posiziono i supporti in modo banale
                 console.log('Posizione semplice dei supporti sui bracci laterali');
                 let info = getInfoBRACCI('braccio_sx_1');
                 POSIZIONE_SUPPORTI.push({pos: setPosByOffset(info.pos, (offStd)), offset:0, ref:'sup_braccio_sx_1_1'});
                 info = getInfoBRACCI('braccio_dx_1');
                 POSIZIONE_SUPPORTI.push({pos: setPosByOffset(info.pos, (-offStd)), offset:0, ref:'sup_braccio_dx_1_1'});
                 numero_supporti = numero_supporti - 2;



            }


            console.log('STEP 1: supporti ancora da posizionare: '+numero_supporti);

            if(numero_supporti==2 && n_scivoli==2 && n_bracci==4)
            {
               // metto i supporti a metà strada tra bracci centrali e scivoli
               let info_S_SX_1 = getInfoSCIVOLI('scivolo_sx_1');
               let info_S_DX_1 = getInfoSCIVOLI('scivolo_dx_1');
               let info_B_SX_2 = getInfoBRACCI('braccio_sx_2');

               let DeltaPos = parseFloat((info_S_SX_1.pos.daSX.abs -  info_B_SX_2.pos.daSX.abs)/2);
               console.log('DeltaPos: '+DeltaPos);
               //let posSUP;
               //posSUP.daSX = {abs:POSIZIONE_BRACCI[0].pos.daSX.abs+DeltaPos, suBQ:POSIZIONE_BRACCI[0].pos.daSX.suBQ+DeltaPos};
               //posSUP.daDX = {abs:POSIZIONE_BRACCI[0].pos.daDX.abs-DeltaPos, suBQ:POSIZIONE_BRACCI[0].pos.daDX.suBQ-DeltaPos};
               POSIZIONE_SUPPORTI.push({pos: setPosByOffset(info_S_SX_1.pos, -DeltaPos), offset:0, ref:'sup_medio_sx'}); numero_supporti--;
               POSIZIONE_SUPPORTI.push({pos: setPosByOffset(info_S_DX_1.pos, DeltaPos), offset:0, ref:'sup_medio_dx'}); numero_supporti--;
            }

            if(numero_supporti==2 && n_scivoli==4 && n_bracci==4)
            {
              let info = getInfoBRACCI('braccio_sx_2');
              POSIZIONE_SUPPORTI.push({pos: setPosByOffset(info.pos, (15)), offset:0, ref:'sup_braccio_sx_1_1'});
              info = getInfoBRACCI('braccio_dx_2');
              POSIZIONE_SUPPORTI.push({pos: setPosByOffset(info.pos, (-15)), offset:0, ref:'sup_braccio_dx_1_1'});
              numero_supporti = numero_supporti - 2;
            }

            if(numero_supporti==4 && n_scivoli==4 && n_bracci==4)
            {
              //POSIZIONE_SCIVOLI.sort(comparePosdaSXabs);
              //POSIZIONE_SUPPORTI.sort(comparePosdaSXabs);
              //POSIZIONE_BRACCI.sort(comparePosdaSXabs);

              //console.table(POSIZIONE_SCIVOLI);

              //let infoSX = getInfoSCIVOLI('scivolo_sx_1');

              let info_B_SX_2 = getInfoBRACCI('braccio_sx_2');
              let info_S_SX_2 = getInfoSCIVOLI('scivolo_sx_2');
              let info_B_DX_2 = getInfoBRACCI('braccio_dx_2');
              let info_S_SX_1 = getInfoSCIVOLI('scivolo_sx_1');
              let info_S_DX_2 = getInfoSCIVOLI('scivolo_dx_2');
              let info_S_DX_1 = getInfoSCIVOLI('scivolo_dx_1');

              //let DeltaPos = parseFloat((POSIZIONE_SCIVOLI[0].pos.daSX.abs - POSIZIONE_BRACCI[1].pos.daSX.abs));
              let DeltaPos = parseFloat((info_S_SX_2.pos.daSX.abs - info_B_SX_2.pos.daSX.abs));
              console.log('DeltaPos: '+DeltaPos);

              if(DeltaPos>0)
              {

                if(DeltaPos>30) // braccio a sx rispetto allo scivolo e con spazio
                {
                  POSIZIONE_SUPPORTI.push({pos: setPosByOffset(info_B_SX_2.pos, DeltaPos/2), offset:0, ref:'sup_medio_sx'}); numero_supporti--;
                  POSIZIONE_SUPPORTI.push({pos: setPosByOffset(info_B_DX_2.pos, -DeltaPos/2), offset:0, ref:'sup_medio_dx'}); numero_supporti--;

                  DeltaPos = parseFloat((info_S_SX_1.pos.daSX.abs -info_S_SX_2.pos.daSX.abs));
                  POSIZIONE_SUPPORTI.push({pos: setPosByOffset(info_S_SX_2.pos, DeltaPos/2), offset:0, ref:'sup_medio_sx1'}); numero_supporti--;
                  POSIZIONE_SUPPORTI.push({pos: setPosByOffset(info_S_DX_2.pos, -DeltaPos/2), offset:0, ref:'sup_medio_dx1'}); numero_supporti--;
                }
                else // braccio a sx dello scivolo, ma non riesco ad iserire tra loro il supporto
                {
                  POSIZIONE_SUPPORTI.push({pos: setPosByOffset(POSIZIONE_SCIVOLI[2].pos, 15), offset:0, ref:'sup_medio_sx1'}); numero_supporti--;
                  POSIZIONE_SUPPORTI.push({pos: setPosByOffset(POSIZIONE_SCIVOLI[3].pos, -15), offset:0, ref:'sup_medio_dx1'}); numero_supporti--;

                  POSIZIONE_SUPPORTI.push({pos: setPosByOffset(POSIZIONE_SCIVOLI[0].pos, -15), offset:0, ref:'sup_medio_sx1'}); numero_supporti--;
                  POSIZIONE_SUPPORTI.push({pos: setPosByOffset(POSIZIONE_SCIVOLI[1].pos, 15), offset:0, ref:'sup_medio_dx1'}); numero_supporti--;
                }
              } //scivolo a sx del secondo braccio sx
              else
              {

                POSIZIONE_SUPPORTI.push({pos: setPosByOffset(info_B_SX_2.pos, 30), offset:0, ref:'sup_medio_sx'}); numero_supporti--;
                POSIZIONE_SUPPORTI.push({pos: setPosByOffset(info_B_DX_2.pos, -30), offset:0, ref:'sup_medio_dx'}); numero_supporti--;

                POSIZIONE_SUPPORTI.push({pos: setPosByOffset(info_S_SX_1.pos, 15), offset:0, ref:'sup_medio_dx'}); numero_supporti--;
                POSIZIONE_SUPPORTI.push({pos: setPosByOffset(info_S_DX_1.pos, -15), offset:0, ref:'sup_medio_dx'}); numero_supporti--;
                numero_supporti = 0;
              }
                numero_supporti = 0;
            }

            if(numero_supporti==6 && n_scivoli==4 && n_bracci==5)
            {
              POSIZIONE_SUPPORTI.push({pos:posCentro, offset:0, ref: 'centro'});numero_supporti--;

              let info_B_SX_2 = getInfoBRACCI('braccio_sx_2');
              let info_B_DX_2 = getInfoBRACCI('braccio_dx_2');
              POSIZIONE_SUPPORTI.push({pos: setPosByOffset(info_B_SX_2.pos,  15), offset:0, ref:'sup_medio_sx'}); numero_supporti--;
              POSIZIONE_SUPPORTI.push({pos: setPosByOffset(info_B_DX_2.pos, -15), offset:0, ref:'sup_medio_dx'}); numero_supporti--;

              let info_S_SX_1 = getInfoSCIVOLI('scivolo_sx_1');
              let info_S_SX_2 = getInfoSCIVOLI('scivolo_sx_2');
              let info_S_DX_1 = getInfoSCIVOLI('scivolo_dx_1');
              let info_S_DX_2 = getInfoSCIVOLI('scivolo_dx_2');
              //POSIZIONE_SUPPORTI.push({pos: setPosByOffset(info_S_SX_2.pos,  15), offset:0, ref:'sup_medio_sx'}); numero_supporti--;
              //POSIZIONE_SUPPORTI.push({pos: setPosByOffset(info_S_DX_2.pos, -15), offset:0, ref:'sup_medio_dx'}); numero_supporti--;

              if(iTipoBRACCIO=='L')
              {
                  let info_B_SX_3 = getInfoBRACCI('braccio_sx_3');
                  POSIZIONE_SUPPORTI.push({pos: setPosByOffset(info_B_SX_3.pos,  15), offset:0, ref:'sup_medio_sx'}); numero_supporti--;
                  POSIZIONE_SUPPORTI.push({pos: setPosByOffset(info_S_DX_1.pos,  -15), offset:0, ref:'sup_medio_sx'}); numero_supporti--;
                  POSIZIONE_SUPPORTI.push({pos: setPosByOffset(info_S_DX_2.pos, -15), offset:0, ref:'sup_medio_dx'}); numero_supporti--;
                  //resetPosSupporti('sup_braccio_dx_1', newValore, inObject);
              }
              else
              {
                let info_B_DX_3 = getInfoBRACCI('braccio_dx_3');
                POSIZIONE_SUPPORTI.push({pos: setPosByOffset(info_B_DX_3.pos,  -15), offset:0, ref:'sup_medio_sx'}); numero_supporti--;
                POSIZIONE_SUPPORTI.push({pos: setPosByOffset(info_S_SX_1.pos,  15), offset:0, ref:'sup_medio_sx'}); numero_supporti--;
                POSIZIONE_SUPPORTI.push({pos: setPosByOffset(info_S_SX_2.pos, 15), offset:0, ref:'sup_medio_dx'}); numero_supporti--;
              }
              console.log('caso corrente:: supporti rimasti:'+numero_supporti);
              numero_supporti = 0;
            }


            if(numero_supporti==6 && n_scivoli==4 && n_bracci==4)
            {
              /*
              POSIZIONE_SUPPORTI.push({pos:posCentro, offset:0, ref: 'centro'});numero_supporti--;
              */

              let info_B_SX_2 = getInfoBRACCI('braccio_sx_2');
              let info_B_DX_2 = getInfoBRACCI('braccio_dx_2');
              POSIZIONE_SUPPORTI.push({pos: setPosByOffset(info_B_SX_2.pos,  25), offset:0, ref:'sup_medio_sx'}); numero_supporti--;
              POSIZIONE_SUPPORTI.push({pos: setPosByOffset(info_B_DX_2.pos, -25), offset:0, ref:'sup_medio_dx'}); numero_supporti--;

              let info_S_SX_1 = getInfoSCIVOLI('scivolo_sx_1');
              let info_S_SX_2 = getInfoSCIVOLI('scivolo_sx_2');
              let info_S_DX_1 = getInfoSCIVOLI('scivolo_dx_1');
              let info_S_DX_2 = getInfoSCIVOLI('scivolo_dx_2');


              let DeltaPos = parseFloat((info_S_DX_1.pos.daSX.abs - info_S_SX_1.pos.daSX.abs));
              if(DeltaPos>150)
              {
                POSIZIONE_SUPPORTI.push({pos: setPosByOffset(info_S_SX_1.pos,  -15), offset:0, ref:'sup_medio_sx'}); numero_supporti--;
                POSIZIONE_SUPPORTI.push({pos: setPosByOffset(info_S_DX_1.pos, +15), offset:0, ref:'sup_medio_dx'}); numero_supporti--;

                DeltaPos = parseFloat((info_S_DX_1.pos.daSX.abs - info_S_SX_1.pos.daSX.abs)/3);
                POSIZIONE_SUPPORTI.push({pos: setPosByOffset(info_S_SX_1.pos,  DeltaPos), offset:0, ref:'sup_medio_sx'}); numero_supporti--;
                POSIZIONE_SUPPORTI.push({pos: setPosByOffset(info_S_DX_1.pos,  -DeltaPos), offset:0, ref:'sup_medio_sx'}); numero_supporti--;
              }
              else
              {
                POSIZIONE_SUPPORTI.push({pos: setPosByOffset(info_S_SX_1.pos,  15), offset:0, ref:'sup_medio_sx'}); numero_supporti--;
                POSIZIONE_SUPPORTI.push({pos: setPosByOffset(info_S_DX_1.pos, -15), offset:0, ref:'sup_medio_dx'}); numero_supporti--;

                POSIZIONE_SUPPORTI.push({pos: setPosByOffset(info_S_SX_2.pos,  15), offset:0, ref:'sup_medio_sx'}); numero_supporti--;
                POSIZIONE_SUPPORTI.push({pos: setPosByOffset(info_S_DX_2.pos, -15), offset:0, ref:'sup_medio_dx'}); numero_supporti--;
              }
              /*
              if(iTipoBRACCIO=='L')
              {
                  let info_B_SX_3 = getInfoBRACCI('braccio_sx_3');
                  POSIZIONE_SUPPORTI.push({pos: setPosByOffset(info_B_SX_3.pos,  15), offset:0, ref:'sup_medio_sx'}); numero_supporti--;
                  POSIZIONE_SUPPORTI.push({pos: setPosByOffset(info_S_DX_1.pos,  -15), offset:0, ref:'sup_medio_sx'}); numero_supporti--;
                  POSIZIONE_SUPPORTI.push({pos: setPosByOffset(info_S_DX_2.pos, -15), offset:0, ref:'sup_medio_dx'}); numero_supporti--;
                  //resetPosSupporti('sup_braccio_dx_1', newValore, inObject);
              }
              else
              {
                let info_B_DX_3 = getInfoBRACCI('braccio_dx_3');
                POSIZIONE_SUPPORTI.push({pos: setPosByOffset(info_B_DX_3.pos,  -15), offset:0, ref:'sup_medio_sx'}); numero_supporti--;
                POSIZIONE_SUPPORTI.push({pos: setPosByOffset(info_S_SX_1.pos,  15), offset:0, ref:'sup_medio_sx'}); numero_supporti--;
                POSIZIONE_SUPPORTI.push({pos: setPosByOffset(info_S_SX_2.pos, 15), offset:0, ref:'sup_medio_dx'}); numero_supporti--;
              }
              console.log('caso corrente:: supporti rimasti:'+numero_supporti);
              */
              numero_supporti = 0;
            }




            if(numero_supporti==1 && n_scivoli==0)
            {
               const offsetQuotaSupporti   = 6.0;
               let posCentro = new Object();
               posCentro.daSX = {abs:iLARGHEZZA/2, suBQ:iLARGHEZZA/2-offsetQuotaSupporti};
               posCentro.daDX = {abs:iLARGHEZZA/2, suBQ:iLARGHEZZA/2-offsetQuotaSupporti};
               POSIZIONE_SUPPORTI.push({pos: setPosByOffset(posCentro, (0)), offset:0, ref:'sup_centrale_no_scivolo'});
               numero_supporti--;
            }

            if(numero_supporti==1 && n_scivoli==1)
            {
               let info = getInfoSCIVOLI('scivolo_centrale');
               console.log(POSIZIONE_SCIVOLI);
               POSIZIONE_SUPPORTI.push({pos: setPosByOffset(info.pos, (15)), offset:0, ref:'sup_scivolo_centrale'});
               numero_supporti--;
            }

            if(numero_supporti==1 && n_scivoli==2)
            {
              let found = false;
              for( let i = 0; i < POSIZIONE_SUPPORTI.length; i++){

                  if ( POSIZIONE_SUPPORTI[i].ref === 'centro') {
                      POSIZIONE_SUPPORTI.splice(i, 1);
                      numero_supporti++;
                      i--;
                      found = true;
                      break;
                  }
              }

              if(found)
              {
                let info = getInfoSCIVOLI('scivolo_sx_1');
                POSIZIONE_SUPPORTI.push({pos: setPosByOffset(info.pos, (-15)), offset:0, ref:'sup_scivolo_scivolo_sx_1'});
                info = getInfoSCIVOLI('scivolo_dx_1');
                POSIZIONE_SUPPORTI.push({pos: setPosByOffset(info.pos, (15)), offset:0, ref:'sup_scivolo_scivolo_dx_1'});
                numero_supporti = numero_supporti-2;
              }
              else
              {

              }
            }

            if(numero_supporti==2 && n_scivoli==4)
            {
              /*
              for( let i = 0; i < POSIZIONE_SUPPORTI.length; i++){

                  if ( POSIZIONE_SUPPORTI[i].ref === 'centro') {
                      POSIZIONE_SUPPORTI.splice(i, 1);
                      numero_supporti++;
                      i--;
                  }
              }
              */
              let info = getInfoSCIVOLI('scivolo_sx_2');
              POSIZIONE_SUPPORTI.push({pos: setPosByOffset(info.pos, (15)), offset:0, ref:'sup_scivolo_scivolo_sx_2'});
              info = getInfoSCIVOLI('scivolo_dx_2');
              POSIZIONE_SUPPORTI.push({pos: setPosByOffset(info.pos, (-15)), offset:0, ref:'sup_scivolo_scivolo_dx_2'});


              /*
              let posCentro = new Object();
              posCentro.daSX = {abs:iLARGHEZZA/2, suBQ:iLARGHEZZA/2-offsetQuotaSupporti};
              posCentro.daDX = {abs:iLARGHEZZA/2, suBQ:iLARGHEZZA/2-offsetQuotaSupporti};
              POSIZIONE_SUPPORTI.push({pos: setPosByOffset(posCentro, (15)), offset:0, ref:'sup_centrale_con_scivolo'});
              */

              /*
              info = getInfoSCIVOLI('scivolo_sx_1');
              POSIZIONE_SUPPORTI.push({pos: setPosByOffset(info.pos, (15)), offset:0, ref:'sup_scivolo_scivolo_sx_1'});
              info = getInfoSCIVOLI('scivolo_dx_1');
              POSIZIONE_SUPPORTI.push({pos: setPosByOffset(info.pos, (-15)), offset:0, ref:'sup_scivolo_scivolo_dx_1'});
              */
              numero_supporti = numero_supporti-2;
            }

            console.log('STEP 2: supporti ancora da posizionare: '+numero_supporti);

            if(numero_supporti==2 && n_scivoli==0)
            {
              if(POSIZIONE_SUPPORTI.length==4)
              {
                let info1 = getInfoSUPPORTI('sup_braccio_sx_1');
                let info2 = getInfoSUPPORTI('sup_braccio_sx_1_1');
                let estremo = (info1.pos.daSX.abs>info2.pos.daSX.abs)?info1:info2;
                let spazio = parseFloat((iLARGHEZZA-2*(estremo.pos.daSX.abs))/3);
                POSIZIONE_SUPPORTI.push({pos: setPosByOffset(estremo.pos, (spazio)), offset:0, ref:'sup_intermedio_sx'});
                POSIZIONE_SUPPORTI.push({pos: setPosByOffset(estremo.pos, (2*spazio)), offset:0, ref:'sup_intermedio_dx'});
              }
            }

            if(numero_supporti==3 && n_scivoli==0)
            {
              if(POSIZIONE_SUPPORTI.length==4)
              {
                let info1 = getInfoSUPPORTI('sup_braccio_sx_1');
                let info2 = getInfoSUPPORTI('sup_braccio_sx_1_1');
                let estremo = (info1.pos.daSX.abs>info2.pos.daSX.abs)?info1:info2;
                let spazio = parseFloat((iLARGHEZZA-2*(estremo.pos.daSX.abs))/4);
                POSIZIONE_SUPPORTI.push({pos: setPosByOffset(estremo.pos, (spazio)), offset:0, ref:'sup_intermedio_sx'});
                POSIZIONE_SUPPORTI.push({pos: setPosByOffset(estremo.pos, (2*spazio)), offset:0, ref:'sup_intermedio_centrale'});
                POSIZIONE_SUPPORTI.push({pos: setPosByOffset(estremo.pos, (3*spazio)), offset:0, ref:'sup_intermedio_dx'});
              }
            }

            if(numero_supporti==3 && n_scivoli==1)
            {
              if(POSIZIONE_SUPPORTI.length==4)
              {
                let info1 = getInfoSUPPORTI('sup_braccio_sx_1');
                let info2 = getInfoSUPPORTI('sup_braccio_sx_1_1');
                let estremo = (info1.pos.daSX.abs>info2.pos.daSX.abs)?info1:info2;
                let spazio = parseFloat((iLARGHEZZA-2*(estremo.pos.daSX.abs))/4);
                POSIZIONE_SUPPORTI.push({pos: setPosByOffset(estremo.pos, (spazio)), offset:0, ref:'sup_intermedio_sx'});
                POSIZIONE_SUPPORTI.push({pos: setPosByOffset(estremo.pos, (2*spazio)+15), offset:0, ref:'sup_intermedio_centrale'});
                POSIZIONE_SUPPORTI.push({pos: setPosByOffset(estremo.pos, (3*spazio)), offset:0, ref:'sup_intermedio_dx'});
              }
            }


            if(numero_supporti==2 && n_scivoli==1 && POSIZIONE_SUPPORTI.length==5)
            {

               let info1 = getInfoBRACCI('braccio_dx_2');
               if(info1.found==true)
               {
                  POSIZIONE_SUPPORTI.push({pos: setPosByOffset(info1.pos, (-15)), offset:0, ref:'sup_intermedio_sx'});
                  let info2 = getInfoSCIVOLI('scivolo_centrale');
                  POSIZIONE_SUPPORTI.push({pos: setPosByOffset(info2.pos, (-15)), offset:0, ref:'sup_intermedio_sx'});
               }
               else
               {
                 info1 = getInfoBRACCI('braccio_sx_2');
                 if(info1.found==true)
                 {
                   POSIZIONE_SUPPORTI.push({pos: setPosByOffset(info1.pos, (15)), offset:0, ref:'sup_intermedio_sx'});
                   let info2 = getInfoSCIVOLI('scivolo_centrale');
                   POSIZIONE_SUPPORTI.push({pos: setPosByOffset(info2.pos, (15)), offset:0, ref:'sup_intermedio_sx'});
                 }
               }
            }

            console.log('STEP 3: supporti ancora da posizionare: '+numero_supporti);

            if(numero_supporti==2 && n_scivoli==2 && POSIZIONE_SUPPORTI.length==6)
            {

               let info1;
               let info2;
               if(pesoBraccio==0)
               {
                 info1 = getInfoBRACCI('braccio_dx_2');
                 POSIZIONE_SUPPORTI.push({pos: setPosByOffset(info1.pos, (-15)), offset:0, ref:'sup_intermedio_sx'});
                 info2 = getInfoSCIVOLI('scivolo_sx_1');
                 POSIZIONE_SUPPORTI.push({pos: setPosByOffset(info2.pos, (-15)), offset:0, ref:'sup_intermedio_sx'});
               }
               else
               {
                  info1 = getInfoBRACCI('braccio_sx_2');
                  POSIZIONE_SUPPORTI.push({pos: setPosByOffset(info1.pos, (15)), offset:0, ref:'sup_intermedio_dx'});
                  info2 = getInfoSCIVOLI('scivolo_dx_1');
                  POSIZIONE_SUPPORTI.push({pos: setPosByOffset(info2.pos, (15)), offset:0, ref:'sup_intermedio_dx'});
               }


            }

            if(numero_supporti==4 && n_scivoli==2 && POSIZIONE_BRACCI.length==4)
            {
               let info1 = getInfoBRACCI('braccio_sx_2');
               POSIZIONE_SUPPORTI.push({pos: setPosByOffset(info1.pos, (15)), offset:0, ref:'sup_intermedio_sx'});
               info1 = getInfoBRACCI('braccio_dx_2');
               POSIZIONE_SUPPORTI.push({pos: setPosByOffset(info1.pos, (-15)), offset:0, ref:'sup_intermedio_sx'});

               let info2 = getInfoSCIVOLI('scivolo_sx_1');
               POSIZIONE_SUPPORTI.push({pos: setPosByOffset(info2.pos, (-15)), offset:0, ref:'sup_intermedio_sx'});
               info2 = getInfoSCIVOLI('scivolo_dx_1');
               POSIZIONE_SUPPORTI.push({pos: setPosByOffset(info2.pos, (+15)), offset:0, ref:'sup_intermedio_sx'});
            }

            if(numero_supporti==5 && n_scivoli==4 && POSIZIONE_BRACCI.length==4)
            {
               for( let i = 0; i < POSIZIONE_SUPPORTI.length; i++){

                    if ( POSIZIONE_SUPPORTI[i].ref === 'centro') {
                        POSIZIONE_SUPPORTI.splice(i, 1);
                        numero_supporti++;
                        i--;
                    }
               }

               let info1 = getInfoBRACCI('braccio_sx_2');
               POSIZIONE_SUPPORTI.push({pos: setPosByOffset(info1.pos, (15)), offset:0, ref:'sup_intermedio_sx'});
               info1 = getInfoBRACCI('braccio_dx_2');
               POSIZIONE_SUPPORTI.push({pos: setPosByOffset(info1.pos, (-15)), offset:0, ref:'sup_intermedio_sx'});

               let info2 = getInfoSCIVOLI('scivolo_sx_2');
               POSIZIONE_SUPPORTI.push({pos: setPosByOffset(info2.pos, (15)), offset:0, ref:'sup_intermedio_sx'});
               info2 = getInfoSCIVOLI('scivolo_sx_1');
               POSIZIONE_SUPPORTI.push({pos: setPosByOffset(info2.pos, (15)), offset:0, ref:'sup_intermedio_sx'});
               info2 = getInfoSCIVOLI('scivolo_dx_1');
               POSIZIONE_SUPPORTI.push({pos: setPosByOffset(info2.pos, (-15)), offset:0, ref:'sup_intermedio_sx'});
               info2 = getInfoSCIVOLI('scivolo_dx_2');
               POSIZIONE_SUPPORTI.push({pos: setPosByOffset(info2.pos, (-15)), offset:0, ref:'sup_intermedio_sx'});
            }



          console.log('STEP 4: supporti ancora da posizionare: '+numero_supporti);

          if(numero_supporti==5 && n_scivoli==4 && POSIZIONE_BRACCI.length==5)
          {
/*
             for( let i = 0; i < POSIZIONE_SUPPORTI.length; i++){

                  if ( POSIZIONE_SUPPORTI[i].ref === 'centro') {
                      POSIZIONE_SUPPORTI.splice(i, 1);
                      numero_supporti++;
                      i--;
                  }
             }
*/
             let info1 = getInfoBRACCI('braccio_sx_2');
             POSIZIONE_SUPPORTI.push({pos: setPosByOffset(info1.pos, (15)), offset:0, ref:'sup_intermedio_sx'});
             info1 = getInfoBRACCI('braccio_dx_2');
             POSIZIONE_SUPPORTI.push({pos: setPosByOffset(info1.pos, (-15)), offset:0, ref:'sup_intermedio_sx'});
             info1 = getInfoBRACCI('braccio_dx_3');
             POSIZIONE_SUPPORTI.push({pos: setPosByOffset(info1.pos, (-15)), offset:0, ref:'sup_intermedio_sx'});

             let info2 = getInfoSCIVOLI('scivolo_sx_2');
             POSIZIONE_SUPPORTI.push({pos: setPosByOffset(info2.pos, (-15)), offset:0, ref:'sup_intermedio_sx'});
             info2 = getInfoSCIVOLI('scivolo_sx_1');
             POSIZIONE_SUPPORTI.push({pos: setPosByOffset(info2.pos, (-15)), offset:0, ref:'sup_intermedio_sx'});
             //info2 = getInfoSCIVOLI('scivolo_dx_1');
             //POSIZIONE_SUPPORTI.push({pos: setPosByOffset(info2.pos, (-15)), offset:0, ref:'sup_intermedio_sx'});
             info2 = getInfoSCIVOLI('scivolo_dx_2');
             POSIZIONE_SUPPORTI.push({pos: setPosByOffset(info2.pos, (15)), offset:0, ref:'sup_intermedio_sx'});
          }

        }

  }






}


function resetPosSupporti(riferimento, valore, inObject)
{
  let iLARGHEZZA            = parseFloat(inObject.LARGHEZZA);       // larghezza
  let iSPORGENZA            = parseInt(inObject.SPORGENZA);         // sporgenza nominale bracci
  let iN_BRACCI             = parseInt(inObject.N_BRACCI);          // numero bracci forzato da SMEUP
  let iTipoTENDA            = parseInt(inObject.TipoTENDA);         // 0: spazio60, 1:spazio75

  let found = false;
  for(let i=0; i<POSIZIONE_SUPPORTI.length;i++)
  {
    if(POSIZIONE_SUPPORTI[i].ref===riferimento)
    {
      let newPos = {daSX:{suBQ:0 , abs:6}, daDX:{suBQ:iLARGHEZZA-6, abs:iLARGHEZZA-1*6}}; //2*6
      POSIZIONE_SUPPORTI[i].pos = setPosByOffset(newPos, valore);
      if(POSIZIONE_SUPPORTI[i].pos.daDX.abs<=POSIZIONE_SUPPORTI[i].pos.daDX.suBQ)
      {
        POSIZIONE_SUPPORTI[i].pos.daDX.suBQ=POSIZIONE_SUPPORTI[i].pos.daDX.suBQ-6;
      }
      //console.log(POSIZIONE_SUPPORTI[i]);
      found = true;
    }
  }
  if(!found) console.log('SUPPORTO: '+riferimento+' not found');

}

function getInfoBRACCI(riferimento)
{
  let info = new Object();
  let found= false;
  let indice = 0;
  for(let i=0; i<POSIZIONE_BRACCI.length;i++)
  {
    if(POSIZIONE_BRACCI[i].ref===riferimento)
    {
      info = POSIZIONE_BRACCI[i];
      found = true;
      indice = i;
      break;
    }
  }
  if(!found) console.log('BRACCIO: '+riferimento+' not found');
  let lato ="SX";
  if(found) {lato =(indice<POSIZIONE_BRACCI.length/2)?"SX":"DX"};
  info.lato = lato;
  info.found = found;
  return info;
}

function getInfoSUPPORTI(riferimento)
{
  let info = new Object();
  let found= false;
  let indice = 0;
  for(let i=0; i<POSIZIONE_SUPPORTI.length;i++)
  {
    if(POSIZIONE_SUPPORTI[i].ref===riferimento)
    {
      info = POSIZIONE_SUPPORTI[i];
      found = true;
      indice = i;
      break;
    }
  }
  if(!found) console.log('SUPPORTO: '+riferimento+' not found');
  let lato ="SX";
  if(found) {lato =(indice<POSIZIONE_SUPPORTI.length/2)?"SX":"DX"};
  info.lato = lato;
  return info;
}




function setPosSUPPORTI(riferimento, valore_daSX_abs)
{
  let info = new Object();
  let found= false;
  let indice = 0;
  for(let i=0; i<POSIZIONE_SUPPORTI.length;i++)
  {
    if(POSIZIONE_SUPPORTI[i].ref===riferimento)
    {
      found = true;
      POSIZIONE_SUPPORTI[i].pos = setPosByValue_daSX_abs(POSIZIONE_SUPPORTI[i].pos, valore_daSX_abs);
      info = POSIZIONE_SUPPORTI[i];
      break;
    }
  }
  if(!found) console.log('SUPPORTO: '+riferimento+' not found');

  if(found) {POSIZIONE_SUPPORTI.sort(comparePosdaSXabs)};

  return info;
}

function setPosBRACCI(riferimento, valore_daSX_suBQ)
{
  let info = new Object();
  let found= false;
  let indice = 0;
  for(let i=0; i<POSIZIONE_BRACCI.length;i++)
  {
    if(POSIZIONE_BRACCI[i].ref===riferimento)
    {
      found = true;
      POSIZIONE_BRACCI[i].pos = setPosByValue_daSX_suBQ(POSIZIONE_BRACCI[i].pos, valore_daSX_suBQ);
      info = POSIZIONE_BRACCI[i];
      break;
    }
  }
  if(!found) console.log('BRACCI: '+riferimento+' not found');

  if(found) {POSIZIONE_BRACCI.sort(comparePosdaSXabs)};

  return info;
}

function getInfoSCIVOLI(riferimento)
{
  let info = new Object();
  let found= false;
  for(let i=0; i<POSIZIONE_SCIVOLI.length;i++)
  {
    if(POSIZIONE_SCIVOLI[i].ref===riferimento)
    {
      info = POSIZIONE_SCIVOLI[i];
      found = true;
    }
  }
  if(!found) console.log('SCIVOLO: '+riferimento+' not found');
  return info;
}

function setOffsetBracci(riferimento, valore)
{
  let found= false;
  for(let i=0; i<POSIZIONE_BRACCI.length;i++)
  {
    if(POSIZIONE_BRACCI[i].ref===riferimento)
    {
      console.log('..........');
      console.log(riferimento+'..val: '+valore);
      console.log(POSIZIONE_BRACCI[i].pos);
      let info = getInfoBRACCI(riferimento);
      POSIZIONE_BRACCI[i].pos = setPosByOffset(info.pos, valore);
      console.log(POSIZIONE_BRACCI[i].pos);
      console.log('----------');
      found = true;
    }
  }
  if(!found) console.log('BRACCIO: '+riferimento+' not found');
}

function setOffsetSupporti(riferimento, valore)
{
  let found = false;
  for(let i=0; i<POSIZIONE_SUPPORTI.length;i++)
  {
    if(POSIZIONE_SUPPORTI[i].ref===riferimento)
    {
      console.log('..........');
      console.log(riferimento+'..val: '+valore);
      console.log(POSIZIONE_SUPPORTI[i].pos);
      POSIZIONE_SUPPORTI[i].pos = setPosByOffset(POSIZIONE_SUPPORTI[i].pos, valore);
      console.log(POSIZIONE_SUPPORTI[i].pos);
      console.log('----------');
      found = true;
    }
  }
  if(!found) console.log('SUPPORTO: '+riferimento+' not found');
}


function CalcolaTessuti(inObject)
{
  let iLARGHEZZA            = parseFloat(inObject.LARGHEZZA);     // larghezza
  let iSPORGENZA            = parseInt(inObject.SPORGENZA);       // sporgenza nominale bracci
  let iN_BRACCI             = parseInt(inObject.N_BRACCI);        // numero bracci forzato da SMEUP
  let iTipoTENDA            = parseInt(inObject.TipoTENDA);       // 0: spazio60, 1:spazio75
  let iTessuto              = inObject.TipoTESSUTO;

  let iDIVISA               = parseInt(inObject.DIVISA);          // 0: no, 1:sì



  let iiLARGHEZZA = parseFloat(iLARGHEZZA-13);
  let richiesta_supporto_a_parete   = 0;
  let richiesta_scivolo_aggiuntivo  = 0;

  //se ACRILICO/POLIESTERE
  let larghezza_pezze = 117.8; // cm
  let numero_pezze;

  let altezza = 180;
  let cucitura= 1.8;
  numero_pezze = 1;


  if(inObject.CUSTOMIZED==0)
  {
      switch(iTessuto)
      {
        case 'Acrilico':
        case 'Poliestere-Uniti-Rigati':
        case 'Poliestere-Impermeabile':
          altezza  = 120;
          cucitura = 2.2;
          //larghezza_pezze = 117.8; // cm
          if(iiLARGHEZZA>113) numero_pezze  = 2;
          if(iiLARGHEZZA>231) numero_pezze = 3;
          if(iiLARGHEZZA>349) numero_pezze = 4;
          if(iiLARGHEZZA>466) numero_pezze = 5;
          if(iiLARGHEZZA>584) numero_pezze = 6;
          if(iiLARGHEZZA>702) numero_pezze = 7;
          if(iiLARGHEZZA>820) numero_pezze = 8;
          if(iiLARGHEZZA>938) numero_pezze = 9;
          if(iiLARGHEZZA>1055) numero_pezze = 10;
          if(iiLARGHEZZA>1173) numero_pezze = 11;
          if(iiLARGHEZZA>1291) numero_pezze = 12;
          if(iiLARGHEZZA>1409) numero_pezze = 13;

          larghezza_pezze = parseFloat(altezza-cucitura);

          if(inObject.DELTAPEZZE!=0)
          {
            numero_pezze = parseFloat(numero_pezze+1*inObject.DELTAPEZZE);
            console.log('nuovo numero di pezze: '+numero_pezze);
            let altezza_teorica = parseFloat(Math.ceil(iiLARGHEZZA/numero_pezze)+cucitura);
            console.log('altezza_teorica: '+altezza_teorica);
            //let proceed = confirm('Warning! I will change the canvas heigth to '+altezza_teorica+'. Proceed?' );
            let proceed = true; //false
            if(proceed)
            {
              larghezza_pezze = parseFloat(altezza_teorica-cucitura);
            }
          }
        break;

        case 'Poliestere-Ignifugo':
          altezza  = 152;
          cucitura = 2.2;
          //larghezza_pezze = 149.8; // cm
          if(iiLARGHEZZA>146) numero_pezze = 2;
          if(iiLARGHEZZA>295) numero_pezze = 3;
          if(iiLARGHEZZA>445) numero_pezze = 4;
          if(iiLARGHEZZA>595) numero_pezze = 5;
          if(iiLARGHEZZA>745) numero_pezze = 6;
          if(iiLARGHEZZA>895) numero_pezze = 7;
          if(iiLARGHEZZA>1044) numero_pezze = 8;
          if(iiLARGHEZZA>1194) numero_pezze = 9;
          if(iiLARGHEZZA>1344) numero_pezze = 10;
          if(iiLARGHEZZA>1494) numero_pezze = 11;
          if(iiLARGHEZZA>1644) numero_pezze = 12;
          if(iiLARGHEZZA>1793) numero_pezze = 13;

          larghezza_pezze = parseFloat(altezza-cucitura);

          if(inObject.DELTAPEZZE!=0)
          {
            numero_pezze = parseFloat(numero_pezze+1*inObject.DELTAPEZZE);
            console.log('nuovo numero di pezze: '+numero_pezze);
            let altezza_teorica = Math.ceil(iiLARGHEZZA/numero_pezze);
            console.log('altezza_teorica: '+altezza_teorica);
            //let proceed = confirm('Warning! I will change the canvas heigth to '+altezza_teorica+'. Proceed?' );
            let proceed = true;
            if(proceed)
            {
              larghezza_pezze = parseFloat(altezza_teorica-cucitura);
            }
          }
        break;

        case 'Precontraint 302':
          altezza = 180;
          numero_pezze = Math.ceil(iiLARGHEZZA/(altezza/2));
          larghezza_pezze = (iiLARGHEZZA+(numero_pezze-1)*cucitura)/numero_pezze;
          larghezza_pezze = parseFloat(larghezza_pezze - cucitura);


          if(inObject.DELTAPEZZE!=0)
          {
            numero_pezze = parseFloat(numero_pezze+1*inObject.DELTAPEZZE);
            console.log('nuovo numero di pezze: '+numero_pezze);
            let altezza_teorica = Math.ceil(iiLARGHEZZA/numero_pezze)*2;
            console.log('altezza_teorica: '+altezza_teorica);
            //let proceed = confirm('Warning! I will change the canvas heigth to '+altezza_teorica+'. Proceed?' );
            let proceed = true;
            if(proceed)
            {
              larghezza_pezze = (iiLARGHEZZA+(numero_pezze-1)*cucitura)/numero_pezze;
              larghezza_pezze = parseFloat(larghezza_pezze - cucitura);
            }
          }
        break;

        case 'Soltis 86-88-92':
          altezza = 177;
          numero_pezze =Math.ceil(iiLARGHEZZA/(altezza/2));
          larghezza_pezze = (iLARGHEZZA+(numero_pezze-1)*cucitura)/numero_pezze;
          larghezza_pezze = parseFloat(larghezza_pezze - cucitura);

          if(inObject.DELTAPEZZE!=0)
          {
            numero_pezze = parseFloat(numero_pezze+1*inObject.DELTAPEZZE);
            console.log('nuovo numero di pezze: '+numero_pezze);
            let altezza_teorica = Math.ceil(iiLARGHEZZA/numero_pezze)*2;
            console.log('altezza_teorica: '+altezza_teorica);
            //let proceed = confirm('Warning! I will change the canvas heigth to '+altezza_teorica+'. Proceed?' );
            let proceed = true;
            if(proceed)
            {
              larghezza_pezze = (iiLARGHEZZA+(numero_pezze-1)*cucitura)/numero_pezze;
              larghezza_pezze = parseFloat(larghezza_pezze - cucitura);
            }
          }
        break;

        case 'Soltis 96-W88-W96':
          altezza = 267;
          numero_pezze = Math.ceil(iiLARGHEZZA/(altezza/3));
          larghezza_pezze = (iiLARGHEZZA+(numero_pezze-1)*cucitura)/numero_pezze;
          larghezza_pezze = parseFloat(larghezza_pezze - cucitura);

          if(inObject.DELTAPEZZE!=0)
          {
            numero_pezze = parseFloat(numero_pezze+1*inObject.DELTAPEZZE);
            console.log('nuovo numero di pezze: '+numero_pezze);
            let altezza_teorica = Math.ceil(iiLARGHEZZA/numero_pezze)*3;
            console.log('altezza_teorica: '+altezza_teorica);
            //let proceed = confirm('Warning! I will change the canvas heigth to '+altezza_teorica+'. Proceed?' );
            let proceed = true;
            if(proceed)
            {
              larghezza_pezze = (iiLARGHEZZA+(numero_pezze-1)*cucitura)/numero_pezze;
              larghezza_pezze = parseFloat(larghezza_pezze - cucitura);
            }
          }
        break;

        default:
          numero_pezze = Math.ceil(iiLARGHEZZA/(altezza));
      }
  }
  else
  {
    if(inObject.CUSTOMIZED==1)
    {
      if(inObject.CANVAS_TYPE==0) // acrilico o poliestere
        {
           altezza         = inObject.HEIGHT;
           numero_pezze    = Math.ceil(iiLARGHEZZA/(altezza));
           cucitura        = inObject.SEWING;
           larghezza_pezze = parseFloat(altezza-cucitura);
        }
      else
       {
         cucitura        = inObject.SEWING;
         altezza         = inObject.HEIGHT;
         let divisor     = (altezza>=267)?3:2;
         numero_pezze    = Math.ceil(iiLARGHEZZA/(altezza/divisor));
         larghezza_pezze = (iiLARGHEZZA+(numero_pezze-1)*cucitura)/numero_pezze;
         larghezza_pezze = parseFloat(larghezza_pezze - cucitura);
       }
    }
    else
    {
      cucitura           = 0;
      umero_pezze        = 1;
      larghezza_pezze    = iiLARGHEZZA;
    }


  }

  let numero_teli_listino = numero_pezze;
  let numero_semiteli     = 0;

  console.log('Larghezza Telo: '+iiLARGHEZZA+'    -     '+iTessuto+' -> numero teli da listino: '+numero_pezze+' da '+larghezza_pezze);



  let posizione_scivoli = [];
  let posizione_teli    = [];
  let posGenerale       = [];


  let posTMP = 0;

  const offsetQuotaSupporti   = 6.0;
  let posCentro = new Object();
  posCentro.daSX = {abs:iLARGHEZZA/2, suBQ:iLARGHEZZA/2-offsetQuotaSupporti};
  posCentro.daDX = {abs:iLARGHEZZA/2, suBQ:iLARGHEZZA/2-offsetQuotaSupporti};

  n_scivoli = CalcolaScivoli(inObject);
  //if(isEven(numero_pezze)&&isEven(n_scivoli)&&n_scivoli>0) numero_pezze = numero_pezze + 1;

  console.log("inObject: "); console.log(inObject);

  if( ((iLARGHEZZA>540 && iLARGHEZZA<711) && isEven(numero_pezze)==false) ||
      (iDIVISA==1)
    )
  {

    if( ((iLARGHEZZA>540 && iLARGHEZZA<711) && isEven(numero_pezze)==false) ||
        (iLARGHEZZA<=540 && iDIVISA==1 && isEven(numero_pezze)==false)
      )
    {
      console.log('Larghezza Telo: '+iiLARGHEZZA+'    -     '+iTessuto+' -> numero teli da listino: '+numero_pezze+' da '+larghezza_pezze);

      // so già che il numero di pezze è dispari, lo trasformo in pari
      let tmp_n_pezze = numero_pezze+1;
      tmp_n_pezze -= 2; // tolgo le fasce laterali
      let larghezza_fasce = (iiLARGHEZZA-tmp_n_pezze*larghezza_pezze+(tmp_n_pezze-1)*cucitura)/2+cucitura;
      console.log('Larghezza fasce rimanenti: '+larghezza_fasce);




     if(iLARGHEZZA<=540 && iDIVISA==1 && isEven(numero_pezze)==false)
       {
          if(larghezza_fasce>30)
          {
            numero_pezze = numero_pezze + 1; // oltre i 540 forzo la cucitura centrale
            numero_semiteli = 2;
            richiesta_supporto_a_parete   = 1;
            richiesta_scivolo_aggiuntivo  = 1;
          }
          else
          {
            richiesta_scivolo_aggiuntivo = 2;
            richiesta_supporto_a_parete  = 1;
          }
      }

    }
    else
    {
      if(iLARGHEZZA<=540 && iDIVISA==1 && isEven(numero_pezze)==true)
      {
        richiesta_scivolo_aggiuntivo  = 1;
      }
    }


  }


n_scivoli += richiesta_scivolo_aggiuntivo;




if(inObject.CUSTOMIZED==2)
{
  n_scivoli     = 0;
  numero_pezze  = 1;
}


  // modifica: non considero più quello centrale, tanto lo metto d'ufficio nel caso di scivolo singolo
if(n_scivoli>1)
{
  if(isEven(numero_pezze))
  {
    for(let i=1;i<=numero_pezze;i++)
    {
        if(isEven(i))
            posTMP = iLARGHEZZA/2+(Math.floor(i/2))*larghezza_pezze;
        else
            posTMP = iLARGHEZZA/2-(Math.floor((i+1)/2))*larghezza_pezze;
      posizione_scivoli.push({n:i, x:posTMP});
      posGenerale.push({daSX:{abs:posTMP, suBQ:posTMP-offsetQuotaSupporti}, daDX:{abs:iLARGHEZZA-posTMP, suBQ:iLARGHEZZA-posTMP-offsetQuotaSupporti}});
    }
  }
  else
  {
    for(let i=1;i<=numero_pezze;i++)
    {
        if(isEven(i))
              posTMP = iLARGHEZZA/2+(Math.floor(i/2))*larghezza_pezze-larghezza_pezze/2;
        else
            posTMP = iLARGHEZZA/2-(Math.floor((i+1)/2))*larghezza_pezze+larghezza_pezze/2;
      posizione_scivoli.push({n:i, x:posTMP});
      posGenerale.push({daSX:{abs:posTMP, suBQ:posTMP-offsetQuotaSupporti}, daDX:{abs:iLARGHEZZA-posTMP, suBQ:iLARGHEZZA-posTMP-offsetQuotaSupporti}});
    }
  }
  if(isEven(numero_pezze)) posizione_teli.push({daSX:posCentro.daSX, daDX:posCentro.daDX});
  for(let i=0;i<posGenerale.length;i++) posizione_teli.push(posGenerale[i]);
}
else
{
  if(isEven(numero_pezze))
  {
    // serve telo centrale:
    if(inObject.CUSTOMIZED!==2) posizione_teli.push({daSX:posCentro.daSX, daDX:posCentro.daDX});

    for(let i=1;i<=numero_pezze;i++)
    {
        if(isEven(i))
            posTMP = iLARGHEZZA/2+(Math.floor(i/2))*larghezza_pezze;
        else
            posTMP = iLARGHEZZA/2-(Math.floor((i+1)/2))*larghezza_pezze;

      posizione_teli.push({daSX:{abs:posTMP, suBQ:posTMP-offsetQuotaSupporti}, daDX:{abs:iLARGHEZZA-posTMP, suBQ:iLARGHEZZA-posTMP-offsetQuotaSupporti}});
    }
  }
  else
  {
    for(let i=1;i<=numero_pezze;i++)
    {
        if(isEven(i))
              posTMP = iLARGHEZZA/2+(Math.floor(i/2))*larghezza_pezze-larghezza_pezze/2;
        else
            posTMP = iLARGHEZZA/2-(Math.floor((i+1)/2))*larghezza_pezze+larghezza_pezze/2;
      posizione_teli.push({daSX:{abs:posTMP, suBQ:posTMP-offsetQuotaSupporti}, daDX:{abs:iLARGHEZZA-posTMP, suBQ:iLARGHEZZA-posTMP-offsetQuotaSupporti}});
    }
  }

}



  //console.log('posGenerale');
  console.log(posizione_teli);
  console.log('numero teli: '+numero_pezze);
  //console.table(posGenerale)

  let out = new Object();
  out.numero_pezze      = numero_pezze;
  out.n_scivoli         = n_scivoli;

  out.posizione_scivoli = posizione_scivoli;
  out.posizioneGenerale = posGenerale;
  out.posizione_teli    = posizione_teli;
  out.larghezza_pezze   = larghezza_pezze;
  out.numero_teli_listino = numero_teli_listino;
  out.numero_semiteli   = numero_semiteli;
  out.DIVISA = iDIVISA;

  out.richiesta_scivolo_aggiuntivo= richiesta_scivolo_aggiuntivo;
  out.richiesta_supporto_a_parete = richiesta_supporto_a_parete;
  return out;
}



function CalcolaScivoli(inObject)
{
  let iLARGHEZZA            = parseFloat(inObject.LARGHEZZA);     // larghezza
  let iSPORGENZA            = parseInt(inObject.SPORGENZA);       // sporgenza nominale bracci
  let iN_BRACCI             = parseInt(inObject.N_BRACCI);        // numero bracci forzato da SMEUP
  let iTipoTENDA            = parseInt(inObject.TipoTENDA);       // 0: spazio60, 1:spazio75

  let iDIVISA               = parseInt(inObject.DIVISA);          // 0: no, 1:sì


  let n_scivoli = 0;
  if(iTipoTENDA==0) //spazio 60
  {
    if(iLARGHEZZA>=541&&iLARGHEZZA<711)
      n_scivoli = 1;
    if(iLARGHEZZA>=711&&iLARGHEZZA<951)
      n_scivoli = 2;
    if(iLARGHEZZA>=951&&iLARGHEZZA<1181)
      n_scivoli = 4;
  }
  else
  {
    if(iLARGHEZZA>=541&&iLARGHEZZA<711)
      n_scivoli = 1;
    if(iLARGHEZZA>=711&&iLARGHEZZA<951)
      n_scivoli = 2;
    if(iLARGHEZZA>=951&&iLARGHEZZA<1181)
      n_scivoli = 4;
  }

  if(inObject.CUSTOMIZED==2) n_scivoli = 0;
  //console.log(n_scivoli);
  return n_scivoli;
}

function PosizionaScivoli(inObject)
{
  let iLARGHEZZA            = parseFloat(inObject.LARGHEZZA);     // larghezza
  let iSPORGENZA            = parseInt(inObject.SPORGENZA);       // sporgenza nominale bracci
  let iN_BRACCI             = parseInt(inObject.N_BRACCI);        // numero bracci forzato da SMEUP
  let iTipoTENDA            = parseInt(inObject.TipoTENDA);       // 0: spazio60, 1:spazio75

  //let numero_scivoli =  CalcolaScivoli(inObject);
  let numero_scivoli =  CalcolaTessuti(inObject).n_scivoli;
  let n_pezze        =  CalcolaTessuti(inObject).numero_pezze;

  //console.clear();

  POSIZIONE_SCIVOLI = [];
  console.log('numero_scivoli: '+numero_scivoli+' || n_pezze: '+n_pezze);
  let posizione_scivoli_teorici = CalcolaTessuti(inObject).posizioneGenerale;
  //console.log('posizione_scivoli_teorici');
  //console.log(posizione_scivoli_teorici);
  console.log('numero_scivoli: '+numero_scivoli+' || n_pezze: '+n_pezze);

  let start_scivoli = 0;
  /*
  if(isEven(n_pezze)&&isEven(numero_scivoli)&&numero_scivoli>0)
  {
    //console.log('tolgo scivolo centrale e aggiungo uno laterale per simmetria');
    posizione_scivoli_teorici.splice(0, 1);
    console.log('posizione_scivoli_teorici');
    console.log(posizione_scivoli_teorici);
    start_scivoli = 1;
  }
  */
  console.log('n_pezze: '+n_pezze);
  console.log('numero_scivoli: '+numero_scivoli);
  console.log('start_scivoli: '+start_scivoli);


  let testo = '';
  if(n_scivoli==1)
  {
    let posCentro = new Object();
    posCentro.daSX = {abs:iLARGHEZZA/2, suBQ:iLARGHEZZA/2-6};
    posCentro.daDX = {abs:iLARGHEZZA/2, suBQ:iLARGHEZZA/2-6};
    testo="centrale";
    POSIZIONE_SCIVOLI.push({pos: posCentro, offset: 0, ref: 'scivolo_'+testo});
  }
  else
  {
    if(n_scivoli>1)
    {
      for(let i=0;i<numero_scivoli;i++)
      {
        if(isEven(n_scivoli))
        {
          if(isEven(i)) testo = "sx_"+Math.round(i/2+1);  else   testo="dx_"+Math.round(i/2);
        }
        else
        {
          //if(i==0)  testo="centrale";
          //else
          //{
            if(!isEven(i)) testo = "dx_"+Math.round(i/2);  else   testo="sx_"+Math.round(i/2);
          //}
        }

        POSIZIONE_SCIVOLI.push({pos: posizione_scivoli_teorici[i+start_scivoli], offset: 0, ref: 'scivolo_'+testo});
      }
   }
  }







  //console.table(POSIZIONE_SCIVOLI);
}

function CalcolaIngombroBraccioSingolo(inObject)
{
  let iLARGHEZZA            = parseFloat(inObject.LARGHEZZA);     // larghezza
  let iSPORGENZA            = parseInt(inObject.SPORGENZA);       // sporgenza nominale bracci
  let iN_BRACCI             = parseInt(inObject.N_BRACCI);        // numero bracci forzato da SMEUP
  let iTipoTENDA            = parseInt(inObject.TipoTENDA);       // 0: spazio60, 1:spazio75


  let ingombro = 0;
  if(iTipoTENDA==0||iTipoTENDA==2) //spazio 60
  {
    switch(iSPORGENZA)
    {
      case 150:
         ingombro = 82;
      break;
      case 200:
         ingombro = 105;
      break;
      case 225:
         ingombro = 118.5;
      break;
      case 250:
         ingombro = 130.5;
      break;
      case 300:
         ingombro = 155;
      break;
    }
  }
  else
  {
    switch(iSPORGENZA)
    {
      case 200:
        ingombro = 108.5;
      break;
      case 250:
        ingombro = 132.5;
      break;
      case 300:
        ingombro = 156.5;
      break;
      case 350:
        ingombro = 181.5;
      break;
      case 400:
        ingombro = 206.5;
      break;
    }
  }
//  if(iTipoTENDA==2) ingombro += 1; // correzione per sistema atuomatico
  return ingombro;
}


function CalcolaPosizioneBraccio(inObject, indice_braccio=1)
{
  let iLARGHEZZA              = parseFloat(inObject.LARGHEZZA);     // larghezza
  let iSPORGENZA              = parseInt(inObject.SPORGENZA);       // sporgenza nominale bracci
  let iN_BRACCI               = parseInt(inObject.N_BRACCI);        // numero bracci forzato da SMEUP
  let iTipoTENDA              = parseInt(inObject.TipoTENDA);       // 0: spazio60, 1:spazio75
  let iTipoBRACCIO            = inObject.TipoBRACCIO;

  let n_bracci                = CalcolaBracci(inObject);
  if(n_bracci<2) n_bracci = 2;

  let pesoBraccio = 0;
  if(isEven(n_bracci)==false) pesoBraccio = (iTipoBRACCIO=='L')?1:0;

  let ingombro_braccio        = CalcolaIngombroBraccioSingolo(inObject);
  INGOMBRO_BRACCIO            = ingombro_braccio;
  //console.log('ingombro_braccio: '+ingombro_braccio);

  const gioco_min_sx          = 1;
  const gioco_min_dx          = 1;
  const spostamento_max       = (iTipoTENDA==1)?65:54;  // relativo a 2 bracci e 590 di larghezza

  const offsetQuotaSupporti   = 6.0;

  let lunghezza_bq            = parseFloat(iLARGHEZZA-2*offsetQuotaSupporti);

  let sp_max                  = spostamento_max;
  let off_braccio             = 0;
  if(n_bracci==2)      sp_max = parseFloat(spostamento_max*iLARGHEZZA/590);
  //console.log('sp_max: '+sp_max);

  let spazio_per_braccio      = parseFloat(lunghezza_bq/n_bracci);
  SPAZIO_BRACCIO              = spazio_per_braccio;
  console.log('spazio_per_braccio: '+spazio_per_braccio);

  //let centraggio_braccio      = parseFloat((spazio_per_braccio-ingombro_braccio-gioco_min_sx-gioco_min_dx)/2);
  let centraggio_braccio      = parseFloat((spazio_per_braccio-ingombro_braccio));

  console.log('centraggio_braccio: '+centraggio_braccio);
  if(centraggio_braccio<=gioco_min_sx+gioco_min_dx) // ho poco margine di manovra, rinuncio alla tolleranza di sicurezza laterale
  {
    if(centraggio_braccio<=gioco_min_dx)
    {
      centraggio_braccio      = parseFloat((spazio_per_braccio-ingombro_braccio)/2);
    }
    else
    {
      centraggio_braccio      = parseFloat((spazio_per_braccio-ingombro_braccio-0*gioco_min_dx)/2);
    }
    console.log('centraggio_braccio senza sicurezza: '+centraggio_braccio);
  }
  else
  {
    centraggio_braccio      = parseFloat((spazio_per_braccio-ingombro_braccio-gioco_min_sx-gioco_min_dx)/2);
  }

  if(centraggio_braccio<0)
  {
    centraggio_braccio = (parseFloat(spazio_per_braccio-ingombro_braccio)/2);
    if(centraggio_braccio<0) {centraggio_braccio=0; console.log('ERRORE');}
    console.log('nuovo centraggio_braccio: '+centraggio_braccio);
  }



  let pos = new Object();
  pos.daSX = {abs:0, suBQ:0};
  pos.daDX = {abs:0, suBQ:0};
  if(indice_braccio<=n_bracci)
  {
     if(indice_braccio==1 || indice_braccio==n_bracci) // bracci laterali, cerco di stare più al centro possibile
     {
        if(centraggio_braccio>sp_max)
          off_braccio = -parseFloat(centraggio_braccio-sp_max); // non posso spostarmi oltre il limite estetico
        else
        {
          if(sp_max<=2*centraggio_braccio)
            off_braccio = parseFloat(sp_max-centraggio_braccio);
          else
            off_braccio = 0; //centraggio_braccio/2;
        }
     }
     console.log('off_braccio: '+off_braccio);
     let semiLarghezzaCalcagno = (iTipoTENDA==1)?4.2:3.5;

     if(indice_braccio<=n_bracci/2+pesoBraccio) // bracci a sx
     {
       pos.daSX.suBQ = parseFloat( parseFloat((indice_braccio-1)*spazio_per_braccio+off_braccio+centraggio_braccio+semiLarghezzaCalcagno));  //ceil
       if(n_bracci==2 && centraggio_braccio<=1) pos.daSX.suBQ = parseFloat( parseFloat((indice_braccio-1)*spazio_per_braccio+off_braccio+1.5*centraggio_braccio+semiLarghezzaCalcagno));  //ceil
     }
     else
     {
       pos.daSX.suBQ = parseFloat( parseFloat((indice_braccio)*spazio_per_braccio-off_braccio-centraggio_braccio-semiLarghezzaCalcagno)) ;  // floor
       if(n_bracci==2 && centraggio_braccio<=1) pos.daSX.suBQ = parseFloat( parseFloat((indice_braccio)*spazio_per_braccio-off_braccio-1.5*centraggio_braccio-semiLarghezzaCalcagno)) ;  // floor
     }
     //console.log('pos.daSX.suBQ: '+pos.daSX.suBQ);

     pos.daSX.abs = parseFloat(pos.daSX.suBQ+offsetQuotaSupporti);
     pos.daDX.suBQ= parseFloat(lunghezza_bq-pos.daSX.suBQ);
     pos.daDX.abs = parseFloat(pos.daDX.suBQ+offsetQuotaSupporti);

  }

  return pos;
}

let POSIZIONE_BRACCI   = [];
let POSIZIONE_SUPPORTI = [];
let POSIZIONE_SCIVOLI  = [];
let SPAZIO_BRACCIO     = 0;
let INGOMBRO_BRACCIO   = 0;

function posizioneInizialeBracci(inObject, n_bracci)
{
  let iLARGHEZZA            = parseFloat(inObject.LARGHEZZA);     // larghezza
  let iSPORGENZA            = parseInt(inObject.SPORGENZA);       // sporgenza nominale bracci
  let iN_BRACCI             = parseInt(inObject.N_BRACCI);        // numero bracci forzato da SMEUP
  let iTipoTENDA            = parseInt(inObject.TipoTENDA);       // 0: spazio60, 1:spazio75
  let iTipoBRACCIO          = inObject.TipoBRACCIO;

  console.log('TipoBRACCIO: '+iTipoBRACCIO);
  POSIZIONE_BRACCI = [];
  let pos;
  for(let i=0; i<n_bracci; i++)
  {
    pos = CalcolaPosizioneBraccio(inObject, parseInt(i+1));
    let pesoBraccio = 0;
    if(isEven(n_bracci)==false) pesoBraccio = (iTipoBRACCIO=='L')?1:0;

    if((i+1)<=(n_bracci/2+pesoBraccio))
    {
      POSIZIONE_BRACCI.push({pos:pos, offset:0, ref: 'braccio_sx_'+(i+1)});
    }
    else
    {
      POSIZIONE_BRACCI.push({pos:pos, offset:0, ref: 'braccio_dx_'+(n_bracci-i)});
    }
  }


}



function CalcolaBracci(inObject)
{
  let iLARGHEZZA            = parseFloat(inObject.LARGHEZZA);     // larghezza
  let iSPORGENZA            = parseInt(inObject.SPORGENZA);       // sporgenza nominale bracci
  let iN_BRACCI             = parseInt(inObject.N_BRACCI);        // numero bracci forzato da SMEUP
  let iTipoTENDA            = parseInt(inObject.TipoTENDA);       // 0: spazio60, 1:spazio75

  let n_bracci = 2;
  if(iN_BRACCI>0)
  {
    n_bracci = iN_BRACCI;
  }
  else
  {
    if(iTipoTENDA==0 || iTipoTENDA==2)
    {
      switch(iSPORGENZA)
      {
        case 150:
          if(iLARGHEZZA>=179&&iLARGHEZZA<591)     // 2 bracci
            n_bracci = 2;
          if(iLARGHEZZA>=591&&iLARGHEZZA<1071)    // 4 bracci
            n_bracci = 4;
          if(iLARGHEZZA>=1071&&iLARGHEZZA<1181)   // 6 bracci
            n_bracci = 6;
        break;
        case 200:
          if(iLARGHEZZA>=225&&iLARGHEZZA<591)     // 2 bracci
            n_bracci = 2;
          if(iLARGHEZZA>=591&&iLARGHEZZA<1071)    // 4 bracci
            n_bracci = 4;
          if(iLARGHEZZA>=1071&&iLARGHEZZA<1181)   // 6 bracci
            n_bracci = 6;
        break;
        case 225:
          if(iLARGHEZZA>=250&&iLARGHEZZA<591)     // 2 bracci
            n_bracci = 2;
          if(iLARGHEZZA>=591&&iLARGHEZZA<1071)    // 4 bracci
            n_bracci = 4;
          if(iLARGHEZZA>=1071&&iLARGHEZZA<1181)   // 6 bracci
            n_bracci = 6;
        break;
        case 250:
          if(iLARGHEZZA>=275&&iLARGHEZZA<591)     // 2 bracci
            n_bracci = 2;
          if(iLARGHEZZA>=591&&iLARGHEZZA<1071)    // 4 bracci
            n_bracci = 4;
          if(iLARGHEZZA>=1071&&iLARGHEZZA<1181)   // 6 bracci
            n_bracci = 6;
        break;
        case 300:
          if(iLARGHEZZA>=325&&iLARGHEZZA<591)     // 2 bracci
              n_bracci = 2;
          if(iLARGHEZZA>=591&&iLARGHEZZA<644)     // 3 bracci
              n_bracci = 3;
          if(iLARGHEZZA>=644&&iLARGHEZZA<1071)    // 4 bracci
              n_bracci = 4;
          if(iLARGHEZZA>=1071&&iLARGHEZZA<1181)   // 6 bracci
            n_bracci = 6;
        break;
      }
    }
    else // SPAZIO75
    {
      switch(iSPORGENZA)
      {
        case 200:
        case 250:
          if(iLARGHEZZA>=179&&iLARGHEZZA<591)     // 2 bracci
            n_bracci = 2;
          if(iLARGHEZZA>=591&&iLARGHEZZA<1071)    // 4 bracci
            n_bracci = 4;
          if(iLARGHEZZA>=1071&&iLARGHEZZA<1181)   // 6 bracci
            n_bracci = 6;
        break;
        case 300:
          if(iLARGHEZZA>=225&&iLARGHEZZA<591)     // 2 bracci
            n_bracci = 2;
          if(iLARGHEZZA>=591&&iLARGHEZZA<649)     // 3 bracci
              n_bracci = 3;
          if(iLARGHEZZA>=649&&iLARGHEZZA<1071)    // 4 bracci
            n_bracci = 4;
          if(iLARGHEZZA>=1071&&iLARGHEZZA<1181)   // 6 bracci
            n_bracci = 6;
        break;
        case 350:
          if(iLARGHEZZA>=361&&iLARGHEZZA<591)     // 2 bracci
            n_bracci = 2;
          if(iLARGHEZZA>=591&&iLARGHEZZA<711)     // 3 bracci
            n_bracci = 3;
          if(iLARGHEZZA>=711&&iLARGHEZZA<1071)    // 4 bracci
            n_bracci = 4;
          if(iLARGHEZZA>=1071&&iLARGHEZZA<1181)   // 5 bracci
            n_bracci = 5;
          //if(iLARGHEZZA>=1170&&iLARGHEZZA<1181)   // 6 bracci
          //    n_bracci = 6;
        break;
        case 400:
          if(iLARGHEZZA>=421&&iLARGHEZZA<591)     // 2 bracci
            n_bracci = 2;
          if(iLARGHEZZA>=591&&iLARGHEZZA<850)     // 3 bracci
            n_bracci = 3;
          if(iLARGHEZZA>=850&&iLARGHEZZA<1071)    // 4 bracci
            n_bracci = 4;
          if(iLARGHEZZA>=1071&&iLARGHEZZA<1181)   // 5 bracci
            n_bracci = 5;
        break;

      }
    }

  }
  //console.log('n_bracci: '+n_bracci);
  return n_bracci;
}

function CalcolaSupporti(inObject)
{
  n_supporti = CalcolaSupportiNEW(inObject);
  return n_supporti;
}



function CalcolaSupportiNEW(inObject)
{
  let iLARGHEZZA            = parseFloat(inObject.LARGHEZZA);     // larghezza
  let iSPORGENZA            = parseInt(inObject.SPORGENZA);       // sporgenza nominale bracci
  let iN_BRACCI             = parseInt(inObject.N_BRACCI);        // numero bracci forzato da SMEUP
  let iTipoTENDA            = parseInt(inObject.TipoTENDA);       // 0: spazio60, 1:spazio75
  let iN_SUPPORTI           = parseInt(inObject.N_SUPPORTI);      // numero bracci forzato da SMEUP

  let iDIVISA               = parseInt(inObject.DIVISA);          // 0: no, 1:sì

  let n_supporti = 2;
  //if(iN_SUPPORTI>0&&iTipoTENDA==1)
  if(iN_SUPPORTI>0)
  {
    n_supporti = iN_SUPPORTI;
  }
  else
  {
    if(iTipoTENDA==0||iTipoTENDA==2)
    {
      switch(iSPORGENZA)
      {
        case 150:
        case 200:
        case 225:
        case 250:
          if(iLARGHEZZA>=179&&iLARGHEZZA<361)
          n_supporti = 2;
          if(iLARGHEZZA>=361&&iLARGHEZZA<481)
          {
              n_supporti = 3;
          }
          if(iLARGHEZZA>=481&&iLARGHEZZA<541)
          {
              n_supporti = 4;
              if(inObject.VOLANT==1) n_supporti = 4;
          }


          if(iLARGHEZZA>=541&&iLARGHEZZA<591)
          {
            n_supporti = 5;
            if(iLARGHEZZA>=541 && inObject.VOLANT==1) n_supporti=5;
          }
          if(iLARGHEZZA>=591&&iLARGHEZZA<831)
          n_supporti = 5;
          if(iLARGHEZZA>=831&&iLARGHEZZA<951)
          n_supporti = 7;
          if(iLARGHEZZA>=951&&iLARGHEZZA<1181)
          n_supporti = 7;
        break;
        case 300:
          if(iLARGHEZZA>=325&&iLARGHEZZA<361)
          n_supporti = 2;
          if(iLARGHEZZA>=361&&iLARGHEZZA<481)
          n_supporti = 3;
          if(iLARGHEZZA>=481&&iLARGHEZZA<541)
          n_supporti = 4;
          if(iLARGHEZZA>=541&&iLARGHEZZA<591)
          {
            n_supporti = 5;
          }
          if(iLARGHEZZA>=591&&iLARGHEZZA<711)
          n_supporti = 5;
          if(iLARGHEZZA>=711&&iLARGHEZZA<831)
          n_supporti = 6;
          if(iLARGHEZZA>=831&&iLARGHEZZA<1071)
          n_supporti = 7;
          if(iLARGHEZZA>=1071&&iLARGHEZZA<1181)
          n_supporti = 7;
        break;
      }
    }
    else // SPAZIO75
    {
      switch(iSPORGENZA)
      {
        case 200:
        case 250:
          if(iLARGHEZZA>=179&&iLARGHEZZA<361)
            n_supporti = 2;
          if(iLARGHEZZA>=361&&iLARGHEZZA<481)
            n_supporti = 3;
            if(iLARGHEZZA>=481&&iLARGHEZZA<541)
              n_supporti = 4;
          if(iLARGHEZZA>=541&&iLARGHEZZA<591)
            n_supporti = 5; // 4
          if(iLARGHEZZA>=591&&iLARGHEZZA<831)
            n_supporti = 5;
          if(iLARGHEZZA>=831&&iLARGHEZZA<951)
            n_supporti = 7;
          if(iLARGHEZZA>=951&&iLARGHEZZA<1181)
            n_supporti = 7;
        break;
        case 300:
          if(iLARGHEZZA>=225&&iLARGHEZZA<361)
            n_supporti = 2;
          if(iLARGHEZZA>=361&&iLARGHEZZA<481)
            n_supporti = 3; //4
            if(iLARGHEZZA>=481&&iLARGHEZZA<541)
              n_supporti = 4;
          if(iLARGHEZZA>=541&&iLARGHEZZA<591)
            n_supporti = 5; //4
          if(iLARGHEZZA>=591&&iLARGHEZZA<711)
            n_supporti = 5;
          if(iLARGHEZZA>=711&&iLARGHEZZA<831)
            n_supporti = 7;
          if(iLARGHEZZA>=831&&iLARGHEZZA<1071)
            n_supporti = 7;
          if(iLARGHEZZA>=1071&&iLARGHEZZA<1181)
            n_supporti = 9;
        break;
        case 350:
          if(iLARGHEZZA>=361&&iLARGHEZZA<481)
            n_supporti = 4;
          if(iLARGHEZZA>=481&&iLARGHEZZA<591)
            n_supporti = 5;
          if(iLARGHEZZA>=591&&iLARGHEZZA<711)
            n_supporti = 6;
          if(iLARGHEZZA>=711&&iLARGHEZZA<831)
            n_supporti = 7;
          if(iLARGHEZZA>=831&&iLARGHEZZA<951)
            n_supporti = 9;
          if(iLARGHEZZA>=951&&iLARGHEZZA<1071)
            n_supporti = 9;
          if(iLARGHEZZA>=1071&&iLARGHEZZA<1181)
            n_supporti = 10; //
        break;
        case 400:
          if(iLARGHEZZA>=421&&iLARGHEZZA<481)
            n_supporti = 6;
          if(iLARGHEZZA>=481&&iLARGHEZZA<541)
            n_supporti = 6;
          if(iLARGHEZZA>=541&&iLARGHEZZA<711)
            n_supporti = 7;
          if(iLARGHEZZA>=711&&iLARGHEZZA<831)
            n_supporti = 8;
          if(iLARGHEZZA>=831&&iLARGHEZZA<951)
            n_supporti = 11;
          if(iLARGHEZZA>=951&&iLARGHEZZA<1071)
            n_supporti = 11;
          if(iLARGHEZZA>=1071&&iLARGHEZZA<1181)
            n_supporti = 13;
        break;

      }
    }
/*
    if(iLARGHEZZA<=540 && iDIVISA==1)
    {
      if(isEven(n_supporti)==true)
       n_supporti += 1;  // controllare
    }
*/

  }
  console.log('n_supporti: '+n_supporti);


  return n_supporti;
}


function disegna_linea_verticale(x, y, dSU, dGIU, scala=1, colore='rgb(65,55,55)')
{
  let sDis = '';
  let dashed = 2*scala+','+2*scala;
  sDis += '<line x1="'+parseFloat(x)+'" y1="'+parseFloat(y-dSU)+'" x2="'+parseFloat(x)+'" y2="'+parseFloat(y+dGIU)+'" style="stroke:'+colore+';stroke-width:'+parseFloat(1*scala)+'" stroke-dasharray="'+dashed+'"/>';
  return sDis;
}


function disegna_posizionamento_tende_a_bracci(inObject)
{

  if(typeof inObject.DELTAPEZZE === 'undefined') // vecchio sistema
  {
    inObject.DELTAPEZZE     = 0;
    inObject.CUSTOMIZED     = 0;
    inObject.CANVAS_TYPE    = 0;
    inObject.HEIGHT         = 120;
    inObject.SEWING         = 2.2;
  }

  //if(Math.abs(inObject.DELTAPEZZE)>1) {inObject.DELTAPEZZE=0; alert('Wrong number of canvas');}


  if(inObject.TipoTENDA==0) inObject.TipoTENDA = 2;   // forzo a posizionamento automatico anche per spazio60

  if( typeof inObject.ruota         === 'undefined' || inObject.ruota         === null ) inObject.ruota = 0;

  if( typeof inObject.SMEUP         === 'undefined' || inObject.SMEUP         === null ||
      typeof inObject.SMEUP.arms    === 'undefined' || inObject.SMEUP.arms    === null ||
      typeof inObject.SMEUP.holders === 'undefined' || inObject.SMEUP.holders === null ||
      typeof inObject.SMEUP.slides  === 'undefined' || inObject.SMEUP.slides  === null )
  {
    inObject.check_SMEUP = false;
  }
  else
  {
    inObject.check_SMEUP = true;
  }
  ////////////////////////////////////////////////////
  let disegno = new Object();

  let posizionamento = posizionamentoAutomaticoSPAZIO(inObject);
  disegno.svg           = posizionamento.sDis;
  disegno.ok            = posizionamento.ok_SMEUP;
  return disegno;
}

let GLOBAL_INPUT_OBJECT = new Object();

function posizionamentoAutomaticoSPAZIO(inObject, calcolaTutto=true)
{
    let iLARGHEZZA;
    let iSPORGENZA;
    let iN_BRACCI;
    let iTipoTENDA;
    let iORDER;
    let iTipoBRACCIO;
    let iVOLANT;
    let icheck_SMEUP;
    let iDIVISA = 0;


    console.log('[iDIVISA]---------------------------------------------');
    console.log(JSON.stringify(inObject));
    console.log('[iDIVISA]---------------------------------------------');

    console.log('calcolaTutto '+ calcolaTutto);
    if(calcolaTutto==true)
    {
        GLOBAL_INPUT_OBJECT   = inObject;
        iLARGHEZZA            = parseFloat(inObject.LARGHEZZA);     // larghezza
        iSPORGENZA            = parseInt(inObject.SPORGENZA);     // sporgenza nominale bracci
        iN_BRACCI             = parseInt(inObject.N_BRACCI);      // numero bracci forzato da SMEUP
        iTipoTENDA            = parseInt(inObject.TipoTENDA);      // 0: spazio60, 1:spazio75
        iORDER                = parseInt(inObject.ORDER);
        iTipoBRACCIO          = inObject.TipoBRACCIO;
        iVOLANT               = parseInt(inObject.VOLANT);
        icheck_SMEUP          = inObject.check_SMEUP;
        iDIVISA               = inObject.DIVISA;
    }
    else
    {
         iLARGHEZZA            = parseFloat(GLOBAL_INPUT_OBJECT.LARGHEZZA);     // larghezza
         iSPORGENZA            = parseInt(GLOBAL_INPUT_OBJECT.SPORGENZA);     // sporgenza nominale bracci
         iN_BRACCI             = parseInt(GLOBAL_INPUT_OBJECT.N_BRACCI);      // numero bracci forzato da SMEUP
         iTipoTENDA            = parseInt(GLOBAL_INPUT_OBJECT.TipoTENDA);      // 0: spazio60, 1:spazio75
         iORDER                = parseInt(GLOBAL_INPUT_OBJECT.ORDER);
         iTipoBRACCIO          = GLOBAL_INPUT_OBJECT.TipoBRACCIO;
         iVOLANT               = parseInt(GLOBAL_INPUT_OBJECT.VOLANT);
         icheck_SMEUP          = GLOBAL_INPUT_OBJECT.check_SMEUP;
         iDIVISA               = GLOBAL_INPUT_OBJECT.DIVISA;
    }



    let inObjectX = inObject;
    let collisioneBracci    = false;
    ////////////////////////////////////////////////////

    //////////////////////////////////////////////////////

    let sLARGHEZZA_V = 200;
    let sALTEZZA_V   = sLARGHEZZA_V*350.8/248; // proporzione per foglio A4

    let sLARGHEZZA = sALTEZZA_V;
    let sALTEZZA   = sLARGHEZZA_V;

    let sSVGh = '';


    if(inObject.ruota==1)
    {
      sSVGh+='<svg id="svg-POSIZIONAMENTO" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 '+sALTEZZA+' '+sLARGHEZZA+'">';
      sSVGh+='<g  transform="translate('+parseFloat(-0*sALTEZZA/2)+' '+parseFloat(sLARGHEZZA)+') rotate(-90 0 0) " >';
    }
    else
    {
      sSVGh+='<svg id="svg-POSIZIONAMENTO" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 '+sLARGHEZZA+' '+sALTEZZA+'">';
      sSVGh+='<g>';
    }


    let sDis = '';
    // rettangolo bianco di sfondo
    sDis += '<rect width="'+sLARGHEZZA+'" height="'+sALTEZZA+'" style="fill:rgb(255,255,255);stroke-width:0;stroke:rgb(0,0,0)"  />';
    // cornice, logo ecc
    let DeltaCornicetta = 5;
    sDis += '<g><rect x="'+DeltaCornicetta+'"  y="'+DeltaCornicetta+'" width="'+parseFloat(sLARGHEZZA-2*DeltaCornicetta)+'" height="'+parseFloat(sALTEZZA-2*DeltaCornicetta)+'" style="fill:none;stroke-width:0.3;stroke:rgb(2550,0,0)"  />';
    sDis += '<g id="generale">'; // inizio gruppo generale

    //
    let margine_laterale = parseFloat(5*DeltaCornicetta);  //5*DeltaCornicetta
    let scala = parseFloat((sLARGHEZZA-2*margine_laterale)/iLARGHEZZA);
    console.log('scala: '+scala);
    if(scala>1) { scala = 1; margine_laterale = parseFloat((sLARGHEZZA-iLARGHEZZA*scala)/2) };


    let posAlta = 0.45*sALTEZZA;

    ////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////
    // POSIZIONAMENTO BRACCI --> PRIORITA' MEDIA (posso spostare i bracci, ma non di molto)
    if(calcolaTutto==true) POSIZIONE_BRACCI = [];

    let n_bracci                = CalcolaBracci(inObject);
    if(n_bracci<2) n_bracci = 2;
    let pesoBraccio = 0;
    if(isEven(n_bracci)==false) pesoBraccio = (iTipoBRACCIO=='L')?1:0;

    if(calcolaTutto)
    {
      posizioneInizialeBracci(inObject, n_bracci); // è una posione iniziale perchè potrebbe essere cambiata dalla posizione dei supporti/scivoli
      console.log('POSIZIONE_START_BRACCI: '); console.log(POSIZIONE_BRACCI); // POSIZIONE_BRACCI è la variabile globale che contiene la posizione
    }
    // FINE POSIZIONAMENTO BRACCI
    ////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////

    let maxCounter   = 5;
    let stepQuote    = 6.9;
    let startQuote   = posAlta-maxCounter*stepQuote;
    let counterQuote = 0;
    let startQuoteSotto   = posAlta+ (APERTURA+45)*scala;//(5-(Math.round(n_bracci/2)-1))*stepQuote;
    let counterQuoteSotto = 0;
    let righeVerticali = 9*stepQuote;
    let offsetQuotaSupporti = 6.0;



    ////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////
    // POSIZIONAMENTO SCIVOLI --> PRIORITA' MASSIMA (non posso spostare gli scivoli)

    let tessuto     = CalcolaTessuti(inObject);
    if(calcolaTutto)
    {
      PosizionaScivoli(inObject);
      console.log('POSIZIONE_SCIVOLI: '); console.log(POSIZIONE_SCIVOLI); // POSIZIONE_SCIVOLI è la variabile globale che contiene la posizione
    }
    // FINE POSIZIONAMENTO SCIVOLI
    ////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////


    ////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////
    // POSIZIONAMENTO SUPPORTI --> PRIORITA' BASSA (posso spostare i supporti dove serve)
    if(calcolaTutto)
    {
      CalcolaPosizioneSupporti(inObject);
      console.log('POSIZIONE_SUPPORTI: '); console.log(POSIZIONE_SUPPORTI); // POSIZIONE_SUPPORTI è la variabile globale che contiene la posizione
    }
    // FINE POSIZIONAMENTO SUPPORTI
    ////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////



    ////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////
    // DISEGNI

    //--->>> Struttura tenda, supporti rullo e frontale
    let lato_sx;
    //if(iTipoTENDA==1) lato_sx = render_LATO_75({x:parseFloat(margine_laterale), y:posAlta}, scala, 'SX');
    //if(iTipoTENDA==2) lato_sx = render_LATO_60({x:parseFloat(margine_laterale), y:posAlta}, scala, 'SX');
    lato_sx = render_LATO_TESTATA({x:parseFloat(margine_laterale), y:posAlta}, scala, 'SX');

    sDis += lato_sx.sDis;

    let lato_dx;
    //if(iTipoTENDA==1) lato_dx = render_LATO_75({x:parseFloat(sLARGHEZZA-margine_laterale), y:posAlta}, scala, 'DX');
    //if(iTipoTENDA==2) lato_dx = render_LATO_60({x:parseFloat(sLARGHEZZA-margine_laterale), y:posAlta}, scala, 'DX');
    lato_dx = render_LATO_TESTATA({x:parseFloat(margine_laterale+iLARGHEZZA*scala), y:posAlta}, scala, 'DX');

    sDis += lato_dx.sDis;

    let barraQuadra = render_BARRAQUADRA({x:parseFloat(margine_laterale+lato_dx.dimensioni.w*scala), y:parseFloat(posAlta)}, scala, parseFloat(iLARGHEZZA-2*lato_dx.dimensioni.w));
    sDis += barraQuadra.sDis;

    //let frontaleSTANDARD;
    //if(iTipoTENDA==1) frontaleSTANDARD = render_FRONTALESTANDARD({x:parseFloat(margine_laterale+3.5*scala), y:parseFloat(posAlta+0*19.1*scala+(APERTURA+11.5)*scala)}, scala, parseFloat(iLARGHEZZA-2*3.5));
    //if(iTipoTENDA==2) frontaleSTANDARD = render_FRONTALESTANDARD({x:parseFloat(margine_laterale+3.5*scala), y:parseFloat(posAlta+0*17.5*scala+(APERTURA+11.5)*scala)}, scala, parseFloat(iLARGHEZZA-2*3.5));
/*
    let frontaleSTANDARD = render_FRONTALESTANDARD({x:parseFloat(margine_laterale+3.5*scala), y:parseFloat(posAlta+0*17.5*scala+(APERTURA+11.5)*scala)}, scala, parseFloat(iLARGHEZZA-2*3.5));
    sDis += frontaleSTANDARD.sDis;

    let tappoDrontaleSX   = render_TAPPO_FRONTALE({x:parseFloat(margine_laterale+3.5*scala), y:parseFloat(posAlta+0*17.5*scala+(APERTURA+11.5)*scala)}, scala, 'SX');
    sDis += tappoDrontaleSX.sDis;
    let tappoDrontaleDX   = render_TAPPO_FRONTALE({x:parseFloat(margine_laterale+(iLARGHEZZA-1*3.5)*scala), y:parseFloat(posAlta+0*17.5*scala+(APERTURA+11.5)*scala)}, scala, 'DX');
    sDis += tappoDrontaleDX.sDis;
*/
    //<<<---

    //--->>> teli e scivoli
    /*
    for(let j=0;j<tessuto.posizione_scivoli.length;j++)
    {
      if(tessuto.posizione_scivoli[j].x>0 && tessuto.posizione_scivoli[j].x<iLARGHEZZA)
         sDis += disegna_linea_verticale(margine_laterale+tessuto.posizione_scivoli[j].x*scala, posAlta, 1.2*stepQuote, 2.85*stepQuote);
    }
    */
    console.log('dimensione posizione teli: '+tessuto.posizione_teli.length);
    //sDis += '<rect x="'+parseFloat(margine_laterale+6*scala)+'" y="'+parseFloat(posAlta+1.7*stepQuote)+'" width="'+parseFloat(iLARGHEZZA-13)*scala+'" height="'+1.3*stepQuote+'" style="fill:lightgrey;stroke-width:'+parseFloat(0.69*scala)+';stroke:darkgray" />';
    //sDis += '<rect x="'+parseFloat(margine_laterale+6*scala)+'" y="'+parseFloat(posAlta+28*scala)+'" width="'+parseFloat(iLARGHEZZA-13)*scala+'" height="'+1.3*stepQuote+'" style="fill:brown;stroke-width:'+parseFloat(0.69*scala)+';stroke:darkgray;fill-opacity: .25;" />';

/*
    sDis += '<rect x="'+parseFloat(margine_laterale+6*scala)+'" y="'+parseFloat(posAlta+8*scala)+'" width="'+parseFloat(iLARGHEZZA-13)*scala+'" height="'+parseFloat(11*scala)+'" style="fill:brown;stroke-width:'+parseFloat(0.69*scala)+';stroke:darkgray;fill-opacity: .15;" />';

    //parseFloat(posAlta+19.1*scala)
    for(let j=0;j<tessuto.posizione_teli.length;j++)
    {
      if(tessuto.posizione_teli[j].daSX.abs>=6 && tessuto.posizione_teli[j].daSX.abs<=(iLARGHEZZA-13))
      {
         //sDis += disegna_linea_verticale(margine_laterale+tessuto.posizione_teli[j].daSX.abs*scala, parseFloat(posAlta+28*scala), 0*stepQuote, 1.3*stepQuote, scala, 'darkgray');
         sDis += disegna_linea_verticale(margine_laterale+tessuto.posizione_teli[j].daSX.abs*scala, parseFloat(posAlta+8*scala), 0*stepQuote, parseFloat(11*scala), scala, 'darkgray');
      }
    }
/*/

/*
    for(let j=0;j<POSIZIONE_SCIVOLI.length;j++)
    {
       sDis += render_SCIVOLO({x:parseFloat(margine_laterale+POSIZIONE_SCIVOLI[j].pos.daSX.abs*scala), y:parseFloat(posAlta-1)}, scala).sDis;;
    }
*/
    //<<<---


    //--->>> check interferenza
    POSIZIONE_SUPPORTI.sort(comparePosdaSXabs);
    POSIZIONE_BRACCI.sort(comparePosdaSXabs);
    POSIZIONE_SCIVOLI.sort(comparePosdaSXabs);
    let spazio_sicurezza = 8;


    // interferenza supporti-supporti
    for(let i=0;i<POSIZIONE_SUPPORTI.length;i++)
    {
      let posSup = POSIZIONE_SUPPORTI[i].pos.daSX.abs;
      for(let ii=0; ii<POSIZIONE_SUPPORTI.length;ii++)
      {
        if(i!=ii)
        {
          let posSup1 = POSIZIONE_SUPPORTI[ii].pos.daSX.abs;
          if(Math.abs(posSup-posSup1)<spazio_sicurezza)
          {
            console.log('Interferenza supporti-supporti: supporto['+i+'] con supporto ['+ii+']');
            let spostamento = (posSup>posSup1)?(spazio_sicurezza-Math.abs(posSup-posSup1)):(-spazio_sicurezza+Math.abs(posSup-posSup1));
            // controllo se lo spostamento del supporto in questa direzione può interferire con qualche braccio, altrimenti vado nella direzione opposta
            let posSupNew = parseFloat(POSIZIONE_SUPPORTI[i].pos.daSX.abs+spostamento);
            for(let iii=0;iii<POSIZIONE_BRACCI.length;iii++)
            {
              let posBra    = POSIZIONE_BRACCI[iii].pos.daSX.abs;
              if(Math.abs(posSupNew-posBra)<spazio_sicurezza) spostamento = -spostamento;
            }
            /////
            POSIZIONE_SUPPORTI[i].pos = setPosByOffset(POSIZIONE_SUPPORTI[i].pos, spostamento);
          }
        }
      }
    }
    POSIZIONE_SUPPORTI.sort(comparePosdaSXabs);
    //<<<---


    // interferenza supporti-bracci
    for(let i=0;i<POSIZIONE_SUPPORTI.length;i++)
    {
      let posSup = POSIZIONE_SUPPORTI[i].pos.daSX.abs;
      for(let ii=0; ii<POSIZIONE_BRACCI.length;ii++)
      {
        let posBra = POSIZIONE_BRACCI[ii].pos.daSX.abs;
        if(Math.abs(posSup-posBra)<spazio_sicurezza)
        {
          console.log('Interferenza supporti-bracci: supporto['+i+'] con braccio ['+ii+']');
          let spostamento = (posSup>posBra)?(spazio_sicurezza-Math.abs(posSup-posBra)):(-spazio_sicurezza+Math.abs(posSup-posBra));
          // controllo se lo spostamento del supporto in questa direzione può interferire con qualche braccio, altrimenti vado nella direzione opposta
          let posSupNew = parseFloat(POSIZIONE_SUPPORTI[i].pos.daSX.abs+spostamento);
          for(let iii=0;iii<POSIZIONE_BRACCI.length;iii++)
          {
            let posBra    = POSIZIONE_BRACCI[iii].pos.daSX.abs;
            if(Math.abs(posSupNew-posBra)<spazio_sicurezza) spostamento = -spostamento;
          }
          /////
          POSIZIONE_SUPPORTI[i].pos = setPosByOffset(POSIZIONE_SUPPORTI[i].pos, spostamento);
        }
      }
    }
    POSIZIONE_SUPPORTI.sort(comparePosdaSXabs);
    //<<<---


   spazio_sicurezza = 15;
    // interferenza bracci-scivoli
    for(let i=0;i<POSIZIONE_BRACCI.length;i++)
    {
      let posBra = POSIZIONE_BRACCI[i].pos.daSX.abs;
      for(let ii=0; ii<POSIZIONE_SCIVOLI.length;ii++)
      {
        let posSci = POSIZIONE_SCIVOLI[ii].pos.daSX.abs;
        if(Math.abs(posBra-posSci)<spazio_sicurezza)
        {
          console.log('Interferenza bracci-scivoli: braccio['+i+'] con scivolo ['+ii+']');
          let spostamento = (posBra>posSci)?(spazio_sicurezza-Math.abs(posBra-posSci)):(-spazio_sicurezza+Math.abs(posBra-posSci))
          POSIZIONE_BRACCI[i].pos = setPosByOffset(POSIZIONE_BRACCI[i].pos, spostamento);
        }
      }
    }
    POSIZIONE_BRACCI.sort(comparePosdaSXabs);

    // interferenza supporti-scivoli
    for(let i=0;i<POSIZIONE_SUPPORTI.length;i++)
    {
      let posSup = POSIZIONE_SUPPORTI[i].pos.daSX.abs;
      for(let ii=0; ii<POSIZIONE_SCIVOLI.length;ii++)
      {
        let posSci = POSIZIONE_SCIVOLI[ii].pos.daSX.abs;
        if(Math.abs(posSup-posSci)<spazio_sicurezza)
        {
          console.log('Interferenza supporti-scivoli: supporto['+i+'] con scivolo ['+ii+']');
          let spostamento = (posSup>posSci)?spazio_sicurezza:-spazio_sicurezza; //(spazio_sicurezza-Math.abs(posSup-posSci)):(-spazio_sicurezza+Math.abs(posSup-posSci));
          // controllo se lo spostamento del supporto in questa direzione può interferire con qualche braccio, altrimenti vado nella direzione opposta
          //let posSupNew = parseFloat(POSIZIONE_SUPPORTI[i].pos.daSX.abs+spostamento);
          let posSupNew = parseFloat(POSIZIONE_SCIVOLI[ii].pos.daSX.abs+spostamento);
          for(let iii=0;iii<POSIZIONE_BRACCI.length;iii++)
          {
            let posBra    = POSIZIONE_BRACCI[iii].pos.daSX.abs;
            if(Math.abs(posSupNew-posBra)<spazio_sicurezza)
            {
              spostamento = -spostamento;
              console.log('.. non possibile, cambio direzione');
              break;
            }
          }
          /////
          //POSIZIONE_SUPPORTI[i].pos = setPosByOffset(POSIZIONE_SUPPORTI[i].pos, spostamento);
          console.log('spostato il supporto di: '+spostamento);
          POSIZIONE_SUPPORTI[i].pos = setPosByOffset(POSIZIONE_SCIVOLI[ii].pos, spostamento);
        }
      }
    }
    POSIZIONE_SUPPORTI.sort(comparePosdaSXabs);
    //<<<---





    //--->>> bracci
    let spostamentoPerCalcagno = 4.2;

/*
    for(let j=0;j<POSIZIONE_BRACCI.length;j++)
    {

      if(j<POSIZIONE_BRACCI.length/2)
      {
         //sDis += disegna_linea_verticale(margine_laterale+(POSIZIONE_BRACCI[j].pos.daSX.abs+INGOMBRO_BRACCIO-spostamentoPerCalcagno)*scala, posAlta, 1.2*stepQuote, 2.85*stepQuote, "green", ".1,.1");
         //sDis += disegna_linea_verticale(margine_laterale+(POSIZIONE_BRACCI[j].pos.daSX.abs-spostamentoPerCalcagno)*scala, posAlta, 1.2*stepQuote, 2.85*stepQuote, "red", '.1,.1');
      }
      else
      {
         //sDis += disegna_linea_verticale(margine_laterale+(POSIZIONE_BRACCI[j].pos.daSX.abs-INGOMBRO_BRACCIO+spostamentoPerCalcagno)*scala, posAlta, 1.2*stepQuote, 2.85*stepQuote, "blue",".1,.1");
         //sDis += disegna_linea_verticale(margine_laterale+(POSIZIONE_BRACCI[j].pos.daSX.abs+spostamentoPerCalcagno)*scala, posAlta, 1.2*stepQuote, 2.85*stepQuote, "red", '.1,.1');
      }
    }
*/

    let fnRENDER = null;
    switch(iSPORGENZA)
    {
      case 150:
         if(iTipoTENDA==2) fnRENDER= render_BRACCIO_150;
      break;
      case 200:
         if(iTipoTENDA==1) fnRENDER= render_BRACCIO_200_EDGE75;
         if(iTipoTENDA==2) fnRENDER= render_BRACCIO_200;
      break;
      case 225:
         if(iTipoTENDA==2) fnRENDER= render_BRACCIO_225;
      break;
      case 250:
         if(iTipoTENDA==1) fnRENDER= render_BRACCIO_250_EDGE75;
         if(iTipoTENDA==2) fnRENDER= render_BRACCIO_250;
      break;
      case 300:
         if(iTipoTENDA==1) fnRENDER= render_BRACCIO_300_EDGE75;
         if(iTipoTENDA==2) fnRENDER= render_BRACCIO_300;
      break;
      case 350:
         if(iTipoTENDA==1) fnRENDER= render_BRACCIO_350_EDGE75;
      break;
      case 400:
         if(iTipoTENDA==1) fnRENDER= render_BRACCIO_400_EDGE75;
      break;
    }

    let running_quote_daSX_BQ = 0;
    let pos;

    for(let i=0; i<n_bracci; i++)
    {

      let tipo = 'DX';
      let tipox= 'dx';
      if((i+1)<=n_bracci/2+pesoBraccio)
      {
        tipo = 'SX';
        tipox= 'sx';
      }
      let rif_braccio = "braccio_"+tipox+"_"+parseInt(i+1);
      //sDis += fnRENDER({x:margine_laterale+(POSIZIONE_BRACCI[i].pos.daSX.abs+POSIZIONE_BRACCI[i].offset)*scala, y:parseFloat(posAlta-1)}, scala, tipo, rif_braccio).sDis;
      sDis += fnRENDER({x:margine_laterale+(POSIZIONE_BRACCI[i].pos.daSX.abs+POSIZIONE_BRACCI[i].offset)*scala, y:parseFloat(posAlta-1)}, scala, tipo, POSIZIONE_BRACCI[i].ref).sDis;

    }


    let frontaleSTANDARD = render_FRONTALESTANDARD({x:parseFloat(margine_laterale+3.5*scala), y:parseFloat(posAlta+0*17.5*scala+(APERTURA+11.5)*scala)}, scala, parseFloat(iLARGHEZZA-2*3.5));
    sDis += frontaleSTANDARD.sDis;

    let tappoDrontaleSX   = render_TAPPO_FRONTALE({x:parseFloat(margine_laterale+3.5*scala), y:parseFloat(posAlta+0*17.5*scala+(APERTURA+11.5)*scala)}, scala, 'SX');
    sDis += tappoDrontaleSX.sDis;
    let tappoDrontaleDX   = render_TAPPO_FRONTALE({x:parseFloat(margine_laterale+(iLARGHEZZA-1*3.5)*scala), y:parseFloat(posAlta+0*17.5*scala+(APERTURA+11.5)*scala)}, scala, 'DX');
    sDis += tappoDrontaleDX.sDis;


/*
    //--->>> supporti
    for(let i=0; i<POSIZIONE_SUPPORTI.length; i++)
    {
      try {
        sDis += render_SUPPORTO({x:margine_laterale+parseFloat(POSIZIONE_SUPPORTI[i].pos.daSX.abs+POSIZIONE_SUPPORTI[i].offset)*scala, y:parseFloat(posAlta-1)}, scala, POSIZIONE_SUPPORTI[i].ref).sDis;
      }
      catch(err)
      {
        console.log(err.message);
        console.log('i: '+i);
        console.log(posSUPPORTI);
      }
    }
    //<<<---
*/
    //--->>> quote sopra (per installatore), riferite ad abs
    counterQuote = 3;
    sDis += render_QUOTA({x:parseFloat(margine_laterale+(0)*scala), y:parseFloat(startQuote+stepQuote*(counterQuote-parseInt(POSIZIONE_SUPPORTI.length/2)-1) )},
                        scala,
                        parseFloat(iLARGHEZZA).toFixed(1),
                        0, righeVerticali).sDis;
    POSIZIONE_SUPPORTI.sort(comparePosdaSXabs);
    let running_quote_daSX_abs = 0;
    for(let i=0;i<POSIZIONE_SUPPORTI.length;i++)
    {
      let distanza = parseFloat(POSIZIONE_SUPPORTI[i].pos.daSX.abs-running_quote_daSX_abs);
      if(distanza>0.5)
      sDis += render_QUOTA({x:parseFloat(margine_laterale+(running_quote_daSX_abs)*scala), y:parseFloat(startQuote+stepQuote*(counterQuote))},
                          scala,
                          parseFloat(POSIZIONE_SUPPORTI[i].pos.daSX.abs-running_quote_daSX_abs).toFixed(1),
                          0, righeVerticali,
                          0, parseFloat(posAlta-1)).sDis;
      running_quote_daSX_abs = POSIZIONE_SUPPORTI[i].pos.daSX.abs;

      if(i==POSIZIONE_SUPPORTI.length-1)
      {
        sDis += render_QUOTA({x:parseFloat(margine_laterale+(running_quote_daSX_abs)*scala), y:parseFloat(startQuote+stepQuote*(counterQuote))},
                            scala,
                            parseFloat(iLARGHEZZA-POSIZIONE_SUPPORTI[i].pos.daSX.abs).toFixed(1),
                            //parseFloat(POSIZIONE_SUPPORTI[i].pos.daDX.suBQ+offsetQuotaSupporti).toFixed(1),
                            0, righeVerticali,
                            0, parseFloat(posAlta-1)).sDis;
        console.log(POSIZIONE_SUPPORTI[i]);
      }
    }

    for(let i=0;i<POSIZIONE_SUPPORTI.length/2;i++)
    {
      if(i!==0)
      {
      sDis += render_QUOTA({x:parseFloat(margine_laterale+(0)*scala), y:parseFloat(startQuote+stepQuote*(counterQuote-i))},
                          scala,
                          parseFloat(POSIZIONE_SUPPORTI[i].pos.daSX.abs).toFixed(1),
                          0, righeVerticali+(5*i)*stepQuote,
                          0, parseFloat(posAlta-1)).sDis;

      sDis += render_QUOTA({x:parseFloat(margine_laterale+(POSIZIONE_SUPPORTI[POSIZIONE_SUPPORTI.length-i-1].pos.daSX.abs)*scala), y:parseFloat(startQuote+stepQuote*(counterQuote-i))},
                          scala,
                          parseFloat(POSIZIONE_SUPPORTI[POSIZIONE_SUPPORTI.length-i-1].pos.daDX.abs).toFixed(1),
                          0, righeVerticali+5*(i)*stepQuote,
                          0, parseFloat(posAlta-1)).sDis;
      }
    }
    //<<<---


    //--->>> quote sotto (per reparto), riferite a BQ
    let quoteReparto = [];
    for(let i=0; i<POSIZIONE_BRACCI.length;i++) quoteReparto.push(POSIZIONE_BRACCI[i]);
    for(let i=0; i<POSIZIONE_SCIVOLI.length;i++) quoteReparto.push(POSIZIONE_SCIVOLI[i]);
    quoteReparto.sort(comparePosdaSXabs);
    console.log('offsetQuotaSupporti: '+offsetQuotaSupporti);

    counterQuoteSotto = 0;
    running_quote_daSX_abs = 0;
    for(let i=0;i<quoteReparto.length;i++)
    {
      sDis += render_QUOTA({x:parseFloat(margine_laterale+(offsetQuotaSupporti+running_quote_daSX_abs)*scala), y:parseFloat(startQuoteSotto+stepQuote*(counterQuoteSotto))},
                          scala,
                          parseFloat(quoteReparto[i].pos.daSX.suBQ-running_quote_daSX_abs).toFixed(1),
                          0, righeVerticali,
                          0, parseFloat(posAlta-1)).sDis;
      running_quote_daSX_abs = quoteReparto[i].pos.daSX.suBQ;
      if(i==quoteReparto.length-1)
      {
        sDis += render_QUOTA({x:parseFloat(margine_laterale+(offsetQuotaSupporti+running_quote_daSX_abs)*scala), y:parseFloat(startQuoteSotto+stepQuote*(counterQuoteSotto))},
                            scala,
                            parseFloat(quoteReparto[i].pos.daDX.suBQ).toFixed(1),
                            0, righeVerticali,
                            0, parseFloat(posAlta-1)).sDis;
      }
    }

    for(let i=0;i<quoteReparto.length/2;i++)
    {
      if(i!==0)
      {
      sDis += render_QUOTA({x:parseFloat(margine_laterale+(offsetQuotaSupporti)*scala), y:parseFloat(startQuoteSotto+stepQuote*(counterQuoteSotto+i))},
                          scala,
                          parseFloat(quoteReparto[i].pos.daSX.suBQ).toFixed(1),
                          0, righeVerticali+(5*i)*stepQuote,
                          0, parseFloat(posAlta-1)).sDis;

      sDis += render_QUOTA({x:parseFloat(margine_laterale+(offsetQuotaSupporti+quoteReparto[quoteReparto.length-i-1].pos.daSX.suBQ)*scala), y:parseFloat(startQuoteSotto+stepQuote*(counterQuoteSotto+i))},
                          scala,
                          parseFloat(quoteReparto[quoteReparto.length-i-1].pos.daDX.suBQ).toFixed(1),
                          0, righeVerticali+5*(i)*stepQuote,
                          0, parseFloat(posAlta-1)).sDis;
      }
    }

    // quota BQ
    sDis += render_QUOTA({x:parseFloat(margine_laterale+(offsetQuotaSupporti)*scala), y:parseFloat(startQuoteSotto+stepQuote*(counterQuoteSotto+quoteReparto.length/2+0.5))},
                        scala,
                        parseFloat(iLARGHEZZA-2*offsetQuotaSupporti).toFixed(1),
                        0, righeVerticali+5*(quoteReparto.length/2+1)*stepQuote,
                        0, parseFloat(posAlta-1)).sDis;

    //<<<---

    //--->>> CHECK TENDA

    // check collisione bracci
    let iniBRACCIO          = 0;
    let fineBRACCIO         = 0;
    let fineBRACCIOprec     = 0;
    //let collisioneBracci    = false;
    let MargineTraBracci    = 0.85; //2.5

    spostamentoPerCalcagno = (iTipoTENDA==1)?4.2:3.5;

    for(let i=0;i<POSIZIONE_BRACCI.length;i++)
    {
      if(i<parseInt(POSIZIONE_BRACCI.length/2)+pesoBraccio)
         iniBRACCIO  = margine_laterale+(POSIZIONE_BRACCI[i].pos.daSX.abs-spostamentoPerCalcagno);
      else
         iniBRACCIO  = margine_laterale+(POSIZIONE_BRACCI[i].pos.daSX.abs-INGOMBRO_BRACCIO+spostamentoPerCalcagno);

      if(i<parseInt(POSIZIONE_BRACCI.length/2)+pesoBraccio)
        fineBRACCIO = margine_laterale+(POSIZIONE_BRACCI[i].pos.daSX.abs+INGOMBRO_BRACCIO-spostamentoPerCalcagno);
      else
        fineBRACCIO = margine_laterale+(POSIZIONE_BRACCI[i].pos.daSX.abs-spostamentoPerCalcagno);

      if((iniBRACCIO-MargineTraBracci<fineBRACCIOprec))
      {
        collisioneBracci = true;
        console.log('[COLLISIONE] iniBRACCIO: '+iniBRACCIO+'  fineBRACCIO prec: '+fineBRACCIOprec);
        console.log('differenza: '+parseFloat(iniBRACCIO-MargineTraBracci-fineBRACCIOprec));
        console.log('INGOMBRO_BRACCIO: '+parseFloat(INGOMBRO_BRACCIO));
        console.table(POSIZIONE_BRACCI);
      }

      //console.log('posizione: '+parseFloat(margine_laterale+POSIZIONE_BRACCI[i].pos.daSX.abs-spostamentoPerCalcagno));
      //console.log('iniBRACCIO: '+iniBRACCIO+'  fineBRACCIO: '+fineBRACCIO+'  fineBRACCIO prec: '+fineBRACCIOprec+ '--------------'+i+':'+POSIZIONE_BRACCI.length/2);

      fineBRACCIOprec =  fineBRACCIO;
    }




    // rullo
    sDis += '<rect x="'+parseFloat(margine_laterale+3*scala)+'" y="'+parseFloat(posAlta+8*scala)+'" width="'+parseFloat(iLARGHEZZA-6)*scala+'" height="'+parseFloat(8.1*scala)+'" style="fill:lightgray;stroke-width:'+parseFloat(0.51*scala)+';stroke:gray;fill-opacity: .22;" />';
    // disegno telo con cuciture
    let spessoreTenda = (APERTURA+3);//(iTipoTENDA==1)?11:10;
    sDis += '<rect x="'+parseFloat(margine_laterale+6*scala)+'" y="'+parseFloat(posAlta+8*scala)+'" width="'+parseFloat(iLARGHEZZA-12)*scala+'" height="'+parseFloat(spessoreTenda*scala)+'" style="fill:brown;stroke-width:'+parseFloat(0.51*scala)+';stroke:brown;fill-opacity: .22;" />';
    for(let j=0;j<tessuto.posizione_teli.length;j++)
    {
      if(tessuto.posizione_teli[j].daSX.abs>=6 && tessuto.posizione_teli[j].daSX.abs<=(iLARGHEZZA-6)) //13
      {
         sDis += '<rect x="'+parseFloat(margine_laterale+(tessuto.posizione_teli[j].daSX.abs-1.1)*scala)+'" y="'+parseFloat(posAlta+8*scala)+'" width="'+parseFloat(2.2)*scala+'" height="'+parseFloat(spessoreTenda*scala)+'" style="fill:brown;stroke-width:'+parseFloat(0.22*scala)+';stroke:gray;fill-opacity: .35;" />';
      }
    }

   // disegno scivoli (va sopra al telo)
   for(let j=0;j<POSIZIONE_SCIVOLI.length;j++)
   {
      sDis += render_SCIVOLO({x:parseFloat(margine_laterale+POSIZIONE_SCIVOLI[j].pos.daSX.abs*scala), y:parseFloat(posAlta-1)}, scala).sDis;;
   }
   //<<<---
   //--->>> supporti
   for(let i=0; i<POSIZIONE_SUPPORTI.length; i++)
   {
     try {
       sDis += render_SUPPORTO({x:margine_laterale+parseFloat(POSIZIONE_SUPPORTI[i].pos.daSX.abs+POSIZIONE_SUPPORTI[i].offset)*scala, y:parseFloat(posAlta-1)}, scala, POSIZIONE_SUPPORTI[i].ref).sDis;
     }
     catch(err)
     {
       console.log(err.message);
       console.log('i: '+i);
       console.log(posSUPPORTI);
     }
   }
   //<<<---

    // logo
    let dim_logo = {w:'', h:1.5*DeltaCornicetta};
    sDis += render_LOGO_pos({x:DeltaCornicetta+2, y:sALTEZZA-3*DeltaCornicetta-2}, dim_logo);







    // scritte
    let sTipoTenda = (iTipoTENDA==1)?'SPAZIO75':'SPAZIO60';
    let stepTest    = 3;
    let startYTesto = sALTEZZA-36*DeltaCornicetta-3;
    let counterTesto= 0;
    let testo_1     = 55;
    let testo_2     = 35;

    //DeltaCornicetta -= 0.5;

/*
    sDis += '<text x="'+parseFloat(sLARGHEZZA-testo_1)+'" y="'+parseFloat(startYTesto+counterTesto+stepTest*counterTesto)+'" font-size="3px" font-family="monospace" >Order:</text>';
    sDis += '<text x="'+parseFloat(sLARGHEZZA-testo_2)+'" y="'+parseFloat(startYTesto+counterTesto+stepTest*counterTesto++)+'" font-size="3px" font-family="monospace" >'+iORDER+'</text>';

    sDis += '<text x="'+parseFloat(sLARGHEZZA-testo_1)+'" y="'+parseFloat(startYTesto+counterTesto+stepTest*counterTesto)+'" font-size="3px" font-family="monospace" >Awning:</text>';
    sDis += '<text x="'+parseFloat(sLARGHEZZA-testo_2)+'" y="'+parseFloat(startYTesto+counterTesto+stepTest*counterTesto++)+'" font-size="3px" font-family="monospace" >'+sTipoTenda+'</text>';

    sDis += '<text x="'+parseFloat(sLARGHEZZA-testo_1)+'" y="'+parseFloat(startYTesto+counterTesto+stepTest*counterTesto)+'" font-size="3px" font-family="monospace" >Dimensions:</text>';
    sDis += '<text x="'+parseFloat(sLARGHEZZA-testo_2)+'" y="'+parseFloat(startYTesto+counterTesto+stepTest*counterTesto++)+'" font-size="3px" font-family="monospace" >'+iLARGHEZZA+'x'+iSPORGENZA+'</text>';
*/

    //startYTesto = sALTEZZA-6*DeltaCornicetta-3;


    // controllo se corrisponde a SMEUP
    let ok_SMEUP = true;
    if(icheck_SMEUP)
    {
      if(POSIZIONE_BRACCI.length  !=inObject.SMEUP.arms)    ok_SMEUP = false;
      if(POSIZIONE_SUPPORTI.length!=inObject.SMEUP.holders) ok_SMEUP = false;
      if(POSIZIONE_SCIVOLI.length !=inObject.SMEUP.slides)  ok_SMEUP = false;
    }

    if(collisioneBracci || ok_SMEUP==false)
    {
      sDis += '<line x1="'+parseFloat(DeltaCornicetta)+'" y1="'+parseFloat(DeltaCornicetta)+'" x2="'+parseFloat(sLARGHEZZA-DeltaCornicetta)+'" y2="'+parseFloat(sALTEZZA-DeltaCornicetta)+'" style="stroke:rgb(255,0,0);stroke-width:2" />';
    }



    startYTesto = sALTEZZA-4*DeltaCornicetta-3;
    counterTesto= 0;
    if(collisioneBracci)
    {
      //sDis += '<text x="'+parseFloat(sLARGHEZZA-testo_1)+'" y="'+parseFloat(startYTesto+counterTesto+stepTest*counterTesto)+'" font-size="3px" font-family="monospace" >ERROR:</text>';
      //sDis += '<text x="'+parseFloat(sLARGHEZZA-testo_2)+'" y="'+parseFloat(startYTesto+counterTesto+stepTest*counterTesto++)+'" font-size="3px" font-family="monospace" >ARM COLLISION</text>';
      sDis += '<text x="'+parseFloat(sLARGHEZZA/2)+'" y="'+parseFloat(startYTesto+counterTesto+stepTest*counterTesto++)+'" text-anchor="middle" alignment-baseline="middle" font-size="3px" font-family="monospace" >ERROR: ARM COLLISION</text>';
    }

    if(ok_SMEUP==false)
    {
      //sDis += '<text x="'+parseFloat(sLARGHEZZA-testo_1)+'" y="'+parseFloat(startYTesto+counterTesto+stepTest*counterTesto)+'" font-size="3px" font-family="monospace" >ERROR:</text>';
      sDis += '<text x="'+parseFloat(sLARGHEZZA/2)+'" y="'+parseFloat(startYTesto+counterTesto+stepTest*counterTesto++)+'" text-anchor="middle" alignment-baseline="middle" font-size="3px" font-family="monospace" >ERROR: SMEUP MISMATCHING</text>';
    }


    sDis += '</g>'; // fine gruppo generale



    //sDis += '<text x="'+parseFloat(sLARGHEZZA-testo_1)+'" y="'+parseFloat(startYTesto+counterTesto+stepTest*counterTesto)+'" font-size="3px" font-family="monospace" >#Canvas:</text>';
    //sDis += '<text x="'+parseFloat(sLARGHEZZA-testo_2)+'" y="'+parseFloat(startYTesto+counterTesto+stepTest*counterTesto++)+'" font-size="3px" font-family="monospace" >'+tessuto.numero_teli_listino+'</text>';

    let scrittaBracci = "LEFT";
    if(iTipoBRACCIO!=='L') scrittaBracci= "RIGHT";
    //console.log('scrittaBracci: '+iTipoBRACCIO+' - '+scrittaBracci);
    //sDis += '<text x="'+parseFloat(sLARGHEZZA-testo_1)+'" y="'+parseFloat(startYTesto+counterTesto+stepTest*counterTesto)+'" font-size="3px" font-family="monospace" >PREF. ARM:</text>';
    //sDis += '<text x="'+parseFloat(sLARGHEZZA-testo_2)+'" y="'+parseFloat(startYTesto+counterTesto+stepTest*counterTesto++)+'" font-size="3px" font-family="monospace" >'+scrittaBracci+'</text>';


    let disegnatore = 'G.T.';
    if (typeof OPERATORE_ATTUALE !== 'undefined') {
       let testo = OPERATORE_ATTUALE;
       disegnatore = testo.match(/\b(\w)/g).join('.');
       disegnatore += '.';
    }
    //sDis += '<text x="'+parseFloat(sLARGHEZZA-testo_1)+'" y="'+parseFloat(startYTesto+counterTesto+stepTest*counterTesto)+'" font-size="3px" font-family="monospace" >Drawn by:</text>';
    //sDis += '<text x="'+parseFloat(sLARGHEZZA-testo_2)+'" y="'+parseFloat(startYTesto+counterTesto+stepTest*counterTesto++)+'" font-size="3px" font-family="monospace" >'+disegnatore+'</text>';

    //sDis += '<text x="'+parseFloat(sLARGHEZZA-testo_1)+'" y="'+parseFloat(startYTesto+counterTesto+stepTest*counterTesto)+'" font-size="3px" font-family="monospace" >SW</text>';
    //sDis += '<text x="'+parseFloat(sLARGHEZZA-testo_2)+'" y="'+parseFloat(startYTesto+counterTesto+stepTest*counterTesto++)+'" font-size="3px" font-family="monospace" >'+VER_FUNZIONE+'</text>';



    // cartiglio
    let today = new Date();
    sDis += '<rect x="'+DeltaCornicetta+'"  y="'+DeltaCornicetta+'" width="'+parseFloat(sLARGHEZZA-2*DeltaCornicetta)+'" height="'+parseFloat(1*DeltaCornicetta)+'" style="fill:none;stroke-width:0.3;stroke:rgb(255,0,0)"  />';
    sDis += '<rect x="'+DeltaCornicetta+'"  y="'+DeltaCornicetta+'" width="'+parseFloat((sLARGHEZZA-2*DeltaCornicetta)/5)+'" height="'+parseFloat(1*DeltaCornicetta)+'" style="fill:none;stroke-width:0.3;stroke:rgb(255,0,0)"  />';
    sDis += '<rect x="'+DeltaCornicetta+'"  y="'+DeltaCornicetta+'" width="'+parseFloat(2*(sLARGHEZZA-2*DeltaCornicetta)/5)+'" height="'+parseFloat(1*DeltaCornicetta)+'" style="fill:none;stroke-width:0.3;stroke:rgb(255,0,0)"  />';
    sDis += '<rect x="'+DeltaCornicetta+'"  y="'+DeltaCornicetta+'" width="'+parseFloat(3*(sLARGHEZZA-2*DeltaCornicetta)/5)+'" height="'+parseFloat(1*DeltaCornicetta)+'" style="fill:none;stroke-width:0.3;stroke:rgb(255,0,0)"  />';
    sDis += '<rect x="'+DeltaCornicetta+'"  y="'+DeltaCornicetta+'" width="'+parseFloat(4*(sLARGHEZZA-2*DeltaCornicetta)/5)+'" height="'+parseFloat(1*DeltaCornicetta)+'" style="fill:none;stroke-width:0.3;stroke:rgb(255,0,0)"  />';
    let posXT = 1.5*DeltaCornicetta;
    let posYT = 1.69*DeltaCornicetta;
    sDis += '<text x="'+parseFloat(posXT)+'" y="'+parseFloat(posYT)+'" font-size="3px" font-family="monospace" fill="red" >Order:</text>';
    sDis += '<text x="'+parseFloat(posXT+parseFloat(1*(sLARGHEZZA-2*DeltaCornicetta)/5))+'" y="'+parseFloat(posYT)+'" font-size="3px" font-family="monospace" fill="red" >Awning:</text>';
    sDis += '<text x="'+parseFloat(posXT+parseFloat(2*(sLARGHEZZA-2*DeltaCornicetta)/5))+'" y="'+parseFloat(posYT)+'" font-size="3px" font-family="monospace" fill="red" >Dimensions:</text>';
    sDis += '<text x="'+parseFloat(posXT+parseFloat(3*(sLARGHEZZA-2*DeltaCornicetta)/5))+'" y="'+parseFloat(posYT)+'" font-size="3px" font-family="monospace" fill="red" >Drawn by:</text>';
    sDis += '<text x="'+parseFloat(posXT+parseFloat(4*(sLARGHEZZA-2*DeltaCornicetta)/5))+'" y="'+parseFloat(posYT)+'" font-size="3px" font-family="monospace" fill="red" >Date:</text>';
    posXT = 6*DeltaCornicetta;
    sDis += '<text x="'+parseFloat(posXT)+'" y="'+parseFloat(posYT)+'" font-size="3px" font-family="monospace" fill="black" >'+iORDER+'</text>';
    sDis += '<text x="'+parseFloat(posXT+parseFloat(1*(sLARGHEZZA-2*DeltaCornicetta)/5))+'" y="'+parseFloat(posYT)+'" font-size="3px" font-family="monospace" fill="black" >'+sTipoTenda+'</text>';
    sDis += '<text x="'+parseFloat(posXT+parseFloat(2*(sLARGHEZZA-2*DeltaCornicetta)/5))+'" y="'+parseFloat(posYT)+'" font-size="3px" font-family="monospace" fill="black" >'+iLARGHEZZA+'x'+iSPORGENZA+'</text>';
    sDis += '<text x="'+parseFloat(posXT+parseFloat(3*(sLARGHEZZA-2*DeltaCornicetta)/5))+'" y="'+parseFloat(posYT)+'" font-size="3px" font-family="monospace" fill="black" >'+disegnatore+'</text>';
    sDis += '<text x="'+parseFloat(posXT+parseFloat(4*(sLARGHEZZA-2*DeltaCornicetta)/5))+'" y="'+parseFloat(posYT)+'" font-size="3px" font-family="monospace" fill="black" >'+today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()+'</text>';

    let stepCornicetta=1*DeltaCornicetta;
    let rectDivi = 7;
    sDis += '<rect x="'+DeltaCornicetta+'"  y="'+parseFloat(DeltaCornicetta+stepCornicetta)+'" width="'+parseFloat(sLARGHEZZA-2*DeltaCornicetta)+'" height="'+parseFloat(1*DeltaCornicetta)+'" style="fill:none;stroke-width:0.3;stroke:rgb(2550,0,0)"  />';
    sDis += '<rect x="'+DeltaCornicetta+'"  y="'+parseFloat(DeltaCornicetta+stepCornicetta)+'" width="'+parseFloat(1*(sLARGHEZZA-2*DeltaCornicetta)/rectDivi)+'" height="'+parseFloat(1*DeltaCornicetta)+'" style="fill:none;stroke-width:0.3;stroke:rgb(255,0,0)"  />';
    sDis += '<rect x="'+DeltaCornicetta+'"  y="'+parseFloat(DeltaCornicetta+stepCornicetta)+'" width="'+parseFloat(2*(sLARGHEZZA-2*DeltaCornicetta)/rectDivi)+'" height="'+parseFloat(1*DeltaCornicetta)+'" style="fill:none;stroke-width:0.3;stroke:rgb(255,0,0)"  />';
    sDis += '<rect x="'+DeltaCornicetta+'"  y="'+parseFloat(DeltaCornicetta+stepCornicetta)+'" width="'+parseFloat(4*(sLARGHEZZA-2*DeltaCornicetta)/rectDivi)+'" height="'+parseFloat(1*DeltaCornicetta)+'" style="fill:none;stroke-width:0.3;stroke:rgb(255,0,0)"  />';
    sDis += '<rect x="'+DeltaCornicetta+'"  y="'+parseFloat(DeltaCornicetta+stepCornicetta)+'" width="'+parseFloat(3*(sLARGHEZZA-2*DeltaCornicetta)/rectDivi)+'" height="'+parseFloat(1*DeltaCornicetta)+'" style="fill:none;stroke-width:0.3;stroke:rgb(255,0,0)"  />';
    sDis += '<rect x="'+DeltaCornicetta+'"  y="'+parseFloat(DeltaCornicetta+stepCornicetta)+'" width="'+parseFloat(5*(sLARGHEZZA-2*DeltaCornicetta)/rectDivi)+'" height="'+parseFloat(1*DeltaCornicetta)+'" style="fill:none;stroke-width:0.3;stroke:rgb(255,0,0)"  />';
    sDis += '<rect x="'+DeltaCornicetta+'"  y="'+parseFloat(DeltaCornicetta+stepCornicetta)+'" width="'+parseFloat(6*(sLARGHEZZA-2*DeltaCornicetta)/rectDivi)+'" height="'+parseFloat(1*DeltaCornicetta)+'" style="fill:none;stroke-width:0.3;stroke:rgb(255,0,0)"  />';

    stepCornicetta=1*DeltaCornicetta;
    posXT = 1.5*DeltaCornicetta;
    posYT = parseFloat(1.69*DeltaCornicetta+stepCornicetta);
    sDis += '<text x="'+parseFloat(posXT)+'" y="'+parseFloat(posYT)+'" font-size="3px" font-family="monospace" fill="red" >#Canvas:</text>';
    sDis += '<text x="'+parseFloat(posXT+parseFloat(1*(sLARGHEZZA-2*DeltaCornicetta)/rectDivi))+'" y="'+parseFloat(posYT)+'" font-size="3px" font-family="monospace" fill="red" >Fabric Int.:</text>';
    sDis += '<text x="'+parseFloat(posXT+parseFloat(2*(sLARGHEZZA-2*DeltaCornicetta)/rectDivi))+'" y="'+parseFloat(posYT)+'" font-size="3px" font-family="monospace" fill="red" >#Arms:</text>';
    sDis += '<text x="'+parseFloat(posXT+parseFloat(3*(sLARGHEZZA-2*DeltaCornicetta)/rectDivi))+'" y="'+parseFloat(posYT)+'" font-size="3px" font-family="monospace" fill="red" >#Holders:</text>';
    sDis += '<text x="'+parseFloat(posXT+parseFloat(4*(sLARGHEZZA-2*DeltaCornicetta)/rectDivi))+'" y="'+parseFloat(posYT)+'" font-size="3px" font-family="monospace" fill="red" >#Slides:</text>';
    sDis += '<text x="'+parseFloat(posXT+parseFloat(5*(sLARGHEZZA-2*DeltaCornicetta)/rectDivi))+'" y="'+parseFloat(posYT)+'" font-size="3px" font-family="monospace" fill="red" >Pref.Arm:</text>';
    sDis += '<text x="'+parseFloat(posXT+parseFloat(6*(sLARGHEZZA-2*DeltaCornicetta)/rectDivi))+'" y="'+parseFloat(posYT)+'" font-size="3px" font-family="monospace" fill="red" >SW:</text>';

    posXT = 6*DeltaCornicetta;
    sDis += '<text x="'+parseFloat(posXT)+'" y="'+parseFloat(posYT)+'" font-size="3px" font-family="monospace" fill="black" >'+tessuto.numero_teli_listino+'</text>';
    sDis += '<text x="'+parseFloat(posXT+parseFloat(1*(sLARGHEZZA-2*DeltaCornicetta)/rectDivi))+'" y="'+parseFloat(posYT)+'" font-size="3px" font-family="monospace" fill="black" >'+parseFloat(tessuto.larghezza_pezze).toFixed(1)+'</text>';
    sDis += '<text x="'+parseFloat(posXT+parseFloat(2*(sLARGHEZZA-2*DeltaCornicetta)/rectDivi))+'" y="'+parseFloat(posYT)+'" font-size="3px" font-family="monospace" fill="black" >'+POSIZIONE_BRACCI.length+'</text>';
    sDis += '<text x="'+parseFloat(posXT+parseFloat(3*(sLARGHEZZA-2*DeltaCornicetta)/rectDivi))+'" y="'+parseFloat(posYT)+'" font-size="3px" font-family="monospace" fill="black" >'+POSIZIONE_SUPPORTI.length+'</text>';
    sDis += '<text x="'+parseFloat(posXT+parseFloat(4*(sLARGHEZZA-2*DeltaCornicetta)/rectDivi))+'" y="'+parseFloat(posYT)+'" font-size="3px" font-family="monospace" fill="black" >'+POSIZIONE_SCIVOLI.length+'</text>';
    sDis += '<text x="'+parseFloat(posXT+parseFloat(5*(sLARGHEZZA-2*DeltaCornicetta)/rectDivi))+'" y="'+parseFloat(posYT)+'" font-size="3px" font-family="monospace" fill="black" >'+scrittaBracci+'</text>';

    posXT = 3*DeltaCornicetta;
    sDis += '<text x="'+parseFloat(posXT+parseFloat(6*(sLARGHEZZA-2*DeltaCornicetta)/rectDivi))+'" y="'+parseFloat(posYT)+'" font-size="3px" font-family="monospace" fill="black" >'+VER_FUNZIONE+'</text>';




    let sSVGf = '';
    sSVGf+='</g></g></svg>';



    let out = new Object();
    out.sDis             = sSVGh  + sDis + sSVGf;
    out.collisioneBracci = collisioneBracci;
    out.ok_SMEUP         = ok_SMEUP;

    return out;
}





function comparePosdaSXabs(a, b) {

    const pos1 = a.pos.daSX.abs;
    const pos2 = b.pos.daSX.abs;

    let comparison = 0;

    if (pos1 > pos2) {
        comparison = 1;
    } else if (pos1 < pos2) {
        comparison = -1;
    }
    return comparison;
}















/// vettoriali
function render_LOGO_pos_OLD(pos, dim_target)
{
  let dimensioni = {w:100, h:39.523};
  let scale = 1;
  if(dim_target.w!=='')
  {
    scale = dim_target.w/dimensioni.w;
  }
  else
  {
     if(dim_target.h!=='')
     {
       scale = dim_target.h/dimensioni.h;
     }
  }


  let sDis = '';
  sDis += '<g>';
  //sDis += ScriviLabel(info.pos, etk);
  sDis += '<g transform="translate('+pos.x+' '+pos.y+')" ><g transform="scale('+scale+')" ><g transform="translate(-64.391 -112.6)"><g transform="matrix(.35278 0 0 -.35278 63.891 152.36)"><g transform="translate(7.092 16.717)"><path d="m0 0v-1.965h4.49v-13.898h2.033v13.898h4.514v1.965z" fill="#3c3c3c"/></g><g transform="translate(30.894 16.717)"><path d="m0 0v-6.769h-8.759v6.769h-2.032v-15.863h2.032v7.128h8.759v-7.128h2.033v15.863z" fill="#3c3c3c"/></g><g transform="translate(36.588 16.717)"><path d="m0 0v-15.863h9.16v1.967h-7.127v5.161h5.787v1.966h-5.787v4.804h7.127v1.965z" fill="#3c3c3c"/></g><g transform="translate(59.413 9.5684)"><path d="m0 0-1.453 0.626c-1.674 0.736-2.345 1.519-2.345 2.681 0 1.318 1.185 2.076 2.526 2.076 1.384 0 2.254-0.535 3.082-1.518l1.43 1.43c-1.072 1.297-2.592 2.032-4.445 2.032-2.346 0-4.626-1.563-4.626-3.975 0-1.99 1.05-3.463 3.463-4.494l1.453-0.625c1.697-0.735 2.592-1.498 2.592-2.946 0-1.386-1.163-2.234-2.993-2.234-1.543 0-2.839 0.868-3.598 1.852l-1.543-1.341c0.939-1.339 2.861-2.456 5.161-2.456 3.106 0 5.027 1.811 5.027 4.401 0 2.235-1.585 3.553-3.731 4.491" fill="#3c3c3c"/></g><g transform="translate(76.05 6.7988)"><path d="m0 0c0-2.749-1.742-4.178-4.29-4.178-2.546 0-4.288 1.429-4.288 4.178v9.918h-2.034v-9.83c0-3.887 2.637-6.21 6.322-6.21 3.711 0 6.324 2.323 6.324 6.21v9.83h-2.034z" fill="#3c3c3c"/></g><g transform="translate(92.922 5.4336)"><path d="m0 0-11.305 11.462v-16.041h2.034v11.282l11.303-11.46v16.04h-2.032z" fill="#3c3c3c"/></g><g transform="translate(106.45 14.752)"><path d="m0 0h6.86v1.965h-8.892v-15.862h2.032v7.126h5.362v1.966h-5.362z" fill="#3c3c3c"/></g><g transform="translate(117.04 6.8867)"><path d="m0 0 2.681 5.676 2.681-5.676zm-5.05-6.032h2.191l1.964 4.157h7.15l1.967-4.157h2.188l-7.729 16.041z" fill="#3c3c3c"/></g><g transform="translate(135.54 14.951)"><path d="m0 0c1.588 0 2.929-0.603 3.955-1.474l1.185 1.543c-1.364 1.227-3.152 1.875-5.14 1.875-4.535 0-8.11-3.506-8.11-8.109 0-4.604 3.575-8.109 8.11-8.109 1.988 0 3.776 0.648 5.14 1.875l-1.185 1.543c-1.026-0.873-2.367-1.474-3.955-1.474-3.463 0-6.031 2.68-6.031 6.165s2.568 6.165 6.031 6.165" fill="#3c3c3c"/></g><g transform="translate(142.07 14.752)"><path d="m0 0h4.486v-13.897h2.037v13.897h4.512v1.965h-11.035z" fill="#3c3c3c"/></g><g transform="translate(161.55 2.6211)"><path d="m0 0c-3.464 0-6.03 2.68-6.03 6.165s2.566 6.165 6.03 6.165c3.463 0 6.03-2.68 6.03-6.165s-2.567-6.165-6.03-6.165m0 14.274c-4.536 0-8.109-3.506-8.109-8.109s3.573-8.109 8.109-8.109c4.535 0 8.109 3.506 8.109 8.109s-3.574 8.109-8.109 8.109" fill="#3c3c3c"/></g><g transform="translate(174.34 9.5908)"><path d="m0 0v5.251h2.544c2.082 0 3.13-0.984 3.13-2.638 0-1.631-1.048-2.613-3.13-2.613zm7.774 2.658c0 2.702-1.989 4.468-5.092 4.468h-4.716v-15.862h2.034v6.927h1.741l5.293-6.927h2.46l-5.473 7.061c2.325 0.446 3.753 2.077 3.753 4.333" fill="#3c3c3c"/></g><g transform="translate(190.09 9.5684)"><path d="m0 0-4.467 7.148h-2.37l5.809-9.134v-6.728h2.055v6.728l5.809 9.134h-2.367z" fill="#3c3c3c"/></g><path d="m216.12 0.854h2.034v15.862h-2.034z" fill="#3c3c3c"/><g transform="translate(231.15 16.717)"><path d="m0 0h-11.036v-1.965h4.491v-13.897h2.031v13.897h4.514z" fill="#3c3c3c"/></g><g transform="translate(235.04 6.8867)"><path d="m0 0 2.682 5.676 2.677-5.676zm-5.051-6.032h2.191l1.964 4.157h7.151l1.966-4.157h2.189l-7.728 16.041z" fill="#3c3c3c"/></g><g transform="translate(249.34 16.717)"><path d="m0 0h-2.034v-15.862h8.981v1.989h-6.947z" fill="#3c3c3c"/></g><g transform="translate(265.69 16.717)"><path d="m0 0-4.47-7.148-4.469 7.148h-2.364l5.806-9.135v-6.727h2.055v6.727l5.809 9.135z" fill="#3c3c3c"/></g><g transform="translate(205.3 8.584)"><path d="m0 0c-0.893 0-1.65-0.737-1.65-1.654 0-0.915 0.757-1.652 1.65-1.652 0.917 0 1.656 0.737 1.656 1.652 0 0.917-0.739 1.654-1.656 1.654" fill="#3c3c3c"/></g><g transform="translate(279.22 90.473)"><path d="m0 0c-2.509 0-4.564 2.055-4.564 4.562 0 2.522 2.055 4.579 4.564 4.579 2.521 0 4.576-2.057 4.576-4.579 0-2.507-2.055-4.562-4.576-4.562m0.014 10.229c-3.115 0-5.652-2.553-5.652-5.667 0-3.098 2.537-5.652 5.652-5.652 3.113 0 5.652 2.554 5.652 5.652 0 3.114-2.539 5.667-5.652 5.667" fill="#eb0000"/></g><g transform="translate(279.28 95.595)"><path d="m0 0h-0.933v1.433h0.933c0.562 0 0.855-0.25 0.855-0.718 0-0.451-0.293-0.715-0.855-0.715m1.992 0.779c0 1.012-0.777 1.68-1.805 1.68h-2.194v-5.978h1.058v2.538h0.452l1.852-2.538h1.246l-1.931 2.616c0.763 0.203 1.308 0.81 1.322 1.682" fill="#eb0000"/></g><g transform="translate(80.705 111.8)"><path d="m0 0c-1.152-1.635-1.8-3.667-1.8-5.907 0-5.718 4.442-10.293 9.994-10.293s9.993 4.575 9.993 10.293c0 2.24-0.647 4.272-1.799 5.907z" fill="#eb0000"/></g><g transform="translate(37.963 62.055)"><path d="m0 0h18.997v-8.998c-3.888-2.777-8.777-3.887-15.219-3.887-12.775 0-22.439 10.552-22.439 23.215 0 12.662 9.664 23.214 22.439 23.214 8.442 0 13.663-2.775 18.44-8.771l13.441 10.994c-7.666 9.445-18.331 14.887-31.881 14.887-22.217 0-40.323-18.109-40.323-40.324 0-22.216 18.106-40.323 40.323-40.323 13.33 0 24.659 4.001 32.437 12.888v31.764h-29.259z" fill="#eb0000"/></g><path d="m80.461 32.963h16.767v55.518h-16.767z" fill="#eb0000"/><g transform="translate(129.71 47.891)"><path d="m0 0c-4.107 0-7.216 1.804-9.438 4.801v16.69c2.222 2.998 5.331 4.664 9.438 4.664 7.995 0 12.769-5.995 12.769-13.324s-4.774-12.831-12.769-12.831m2.776 41.478c-4.552 0-8.993-1.555-12.214-4.22v26.65h-16.765v-78.836h16.765v4.372c2.915-3.264 7.866-5.259 12.418-5.259 16.433 0 26.665 13.435 26.665 28.646 0 15.212-10.436 28.647-26.869 28.647" fill="#eb0000"/></g><g transform="translate(201.39 53.213)"><path d="m0 0c-2.22-3.555-6.328-5.815-10.436-5.815-6.663 0-9.773 5.552-9.773 13.103v27.98h-16.766v-30.979c0-15.101 8.773-25.427 23.762-25.427 4.663 0 9.771 2.04 13.213 5.26v-4.372h16.767v55.518h-16.767z" fill="#eb0000"/></g><g transform="translate(250.15 67.889)"><path d="m0 0c-1.48 0.252-2.853 0.483-4.041 0.737-0.038 6e-3 -0.983 0.192-1.98 0.563-0.158 0.058-0.315 0.125-0.593 0.255-0.117 0.055-0.235 0.113-0.348 0.174l-0.168 0.101c-0.098 0.057-0.194 0.117-0.286 0.181l-0.176 0.13c-0.086 0.064-0.169 0.131-0.248 0.203l-0.166 0.157c-0.074 0.073-0.142 0.152-0.21 0.233-0.05 0.059-0.096 0.117-0.14 0.178-0.064 0.09-0.119 0.184-0.196 0.321l-0.081 0.154c-0.049 0.111-0.086 0.228-0.121 0.351l-0.057 0.181c-0.044 0.206-0.066 0.402-0.066 0.602l0.029 0.166c0.085 1.58 2.106 2.84 5.524 3.202l0.408 0.033c0.32 0.028 0.648 0.047 0.992 0.06 0.289 0.011 0.58 0.018 0.928 0.018h3e-3c3.223-8e-3 10.118-0.834 16.581-5.611l5.599 11.835c-6.565 4.758-14.547 7.27-23.095 7.27-16.296 0-23.719-9.424-23.719-18.182 0-14.422 13.216-16.61 22.866-18.207 2.797-0.461 5.213-0.861 6.937-1.501 1.251-0.521 2.711-1.502 2.555-3.226l-0.022-0.194c-0.027-0.174-0.07-0.354-0.134-0.538l-0.085-0.221c-0.066-0.161-0.135-0.324-0.232-0.509-1.01-1.618-3.451-2.37-7.683-2.37-6.7 0-15.63 3.47-20.596 7.16l-5.638-11.853c5.812-5.185 15.991-8.53 25.981-8.53 15.25 0 25.282 7.096 25.105 18.071-0.24 14.791-14.088 17.023-23.427 18.606" fill="#eb0000"/></g></g></g> </g></g>';
  sDis += '</g>';
  return sDis;
}



function render_BARRAQUADRA(pos, scale, larghezza_cm)
{
  let dimensioni = {w:larghezza_cm, h:4.0};
  let sDis = '';
  sDis += '<g>';
  sDis += '<g transform="translate('+pos.x+' '+pos.y+')" ><g transform="scale('+scale+')" >';
  sDis += '<rect x="'+0+'" y="'+0+'" width="'+dimensioni.w+'" height="'+dimensioni.h+'" style="fill:lightgrey;stroke:black;stroke-width:0.2;" />';
  sDis += '</g></g>';
  sDis += '</g>';

  let out = new Object();
  out.sDis = sDis;
  out.dimensioni = dimensioni;
  return out;
}

function render_FRONTALESTANDARD(pos, scale, larghezza_cm)
{
  let dimensioni = {w:larghezza_cm, h:6.2};
  let sDis = '';
  sDis += '<g>';
  sDis += '<g transform="translate('+pos.x+' '+pos.y+')" ><g transform="scale('+scale+')" >';
  sDis += '<rect x="'+0+'" y="'+0+'" width="'+dimensioni.w+'" height="'+dimensioni.h+'" style="fill:lightgrey;stroke:black;stroke-width:0.2;" />';
  sDis += '</g></g>';
  sDis += '</g>';

  let out = new Object();
  out.sDis = sDis;
  out.dimensioni = dimensioni;
  return out;
}

function render_QUOTA(pos, scale, larghezza_cm, su_cm, giu_cm, limitSU=0, limitGIU=0)
{
  let fontSize = 3/scale;
  let dimensioni = {w:larghezza_cm, h:0.51};
  let salto_per_testo = 4;
  let stile_testo = '';
  //if(larghezza_cm<20) {salto_per_testo = 4; fontSize= 2*fontSize/3; stile_testo = ' writing-mode: tb;';}
  if(larghezza_cm*scale<parseFloat(5)) {salto_per_testo = 7.5; fontSize= 2*fontSize/3; stile_testo = ' writing-mode: tb;';}

  //let disable_arrows = false;
  //if(dimensioni.w-2*freccia_SX.dimensioni.w<1) disable_arrows= true;

  let sDis = '';
  sDis += '<g>';
  sDis += '<g transform="translate('+pos.x+' '+pos.y+')" ><g transform="scale('+scale+')" >';
  //sDis += '<rect x="'+0+'" y="'+0+'" width="'+dimensioni.w+'" height="'+dimensioni.h+'" style="fill:white;stroke:black;stroke-width:0.2;" />';

  let scalaFreccia = 0.59;
  let freccia_SX = render_FRECCIA_SX({x:0, y:0}, scalaFreccia);


  let disable_arrows = false;
  if(dimensioni.w-2*freccia_SX.dimensioni.w<1) disable_arrows= true;



  if(!disable_arrows)
  {
    sDis += freccia_SX.sDis;
    sDis += render_FRECCIA_DX({x:parseFloat(larghezza_cm-freccia_SX.dimensioni.w*scalaFreccia), y:0}, scalaFreccia).sDis;
  }
  /*
  let freccia_SX = render_FRECCIA_QUOTE({x:0, y:0}, 1, 'SX');
  sDis += freccia_SX.sDis;
  sDis += render_FRECCIA_QUOTE({x:parseFloat(larghezza_cm-1*freccia_SX.dimensioni.w), y:0}, 1, 'DX').sDis;
  */
  sDis += '<g>';
  if(!disable_arrows)
    sDis += '<rect x="'+freccia_SX.dimensioni.w*scalaFreccia+'" y="'+freccia_SX.dimensioni.h/2*scalaFreccia+'" width="'+parseFloat(dimensioni.w-2*freccia_SX.dimensioni.w*scalaFreccia)+'" height="'+dimensioni.h+'" style="fill:blue;stroke:blue;stroke-width:0.051;" />';
  else
    sDis += '<rect x="'+0+'" y="'+freccia_SX.dimensioni.h/2*scalaFreccia+'" width="'+parseFloat(dimensioni.w)+'" height="'+dimensioni.h+'" style="fill:blue;stroke:blue;stroke-width:0.051;" />';

  sDis += '<text x="'+parseFloat(larghezza_cm/2)+'" y="'+parseFloat(freccia_SX.dimensioni.h/2*scalaFreccia-salto_per_testo)+'"  font-family="monospace" text-anchor="middle" alignment-baseline="middle" style="fill:black; stroke:none;font-size:'+fontSize+'px;font-weight=bold;'+stile_testo+'"> '+larghezza_cm+' </text>';
  sDis += '</g>';

  let punto_GIU = parseFloat(freccia_SX.dimensioni.h/2*scalaFreccia+giu_cm);
  if(punto_GIU>(limitGIU-pos.y)/scale && limitGIU!=0) { punto_GIU = (limitGIU-pos.y)/scale; }

  let punto_SU = parseFloat(freccia_SX.dimensioni.h/2*scalaFreccia-su_cm);
  if(punto_SU<(limitSU-pos.y)/scale && limitSU!=0) {punto_SU = parseFloat((limitSU-pos.y)/scale); }

  sDis += '<line x1="'+0+'" y1="'+parseFloat(punto_SU)+'" x2="'+0+'" y2="'+parseFloat(punto_GIU)+'" style="fill:black;stroke:black;stroke-width:0.1;" />';
  sDis += '<line x1="'+larghezza_cm+'" y1="'+parseFloat(punto_SU)+'" x2="'+larghezza_cm+'" y2="'+parseFloat(punto_GIU)+'" style="fill:black;stroke:black;stroke-width:0.1;" />';
  //sDis += '<text x="'+parseFloat(0)+'" y="'+parseFloat(freccia_SX.dimensioni.h/2-9)+'"  text-anchor="middle" alignment-baseline="middle" style="fill:black; stroke:none;font-size:'+fontSize+'px;font-weight=bold;"> '+larghezza_cm+' </text>';
  sDis += '</g></g>';
  sDis += '</g>';

  let out = new Object();
  out.sDis = sDis;
  out.dimensioni = dimensioni;
  return out;
}


function render_FRECCIA_SX(pos, scale)
{
  let dimensioni = {w:6.8011, h:5.4697};
  let sDis = '';
  sDis += '<g>';
  sDis += '<g transform="translate('+pos.x+' '+pos.y+')" ><g transform="scale('+scale+')" ><g transform="translate(-85.802 -68.991)"><path d="m86.156 71.726 6.3142-2.5391v5.0781z" fill="#00f" stroke="#00f" stroke-width=".26458px"/></g> </g></g>';
  sDis += '</g>';

  let out = new Object();
  out.sDis = sDis;
  out.dimensioni = dimensioni;
  return out;
}

function render_FRECCIA_DX(pos, scale)
{
  let dimensioni = {w:6.8011, h:5.4697};
  let sDis = '';
  sDis += '<g>';
  sDis += '<g transform="translate('+pos.x+' '+pos.y+')" ><g transform="scale('+scale+')" ><g transform="translate(-85.802 -68.991)"><path d="m92.248 71.726-6.3142-2.5391v5.0781z" fill="#00f" stroke="#00f" stroke-width=".26458px"/></g> </g></g>';
  sDis += '</g>';

  let out = new Object();
  out.sDis = sDis;
  out.dimensioni = dimensioni;
  return out;
}



function render_BRACCIO_300(pos, scale, tipo, nome='')
{
  let dimensioni = {w:155.06, h:19.389};
  let verso = 1;
  let gain  = 1;
  if(tipo!=='DX') {verso = -1;};
  let sDis = '';
  sDis += '<g id="'+nome+'" onclick="mouse_click_bracci(\''+nome+'\' );">';
  sDis += '<g transform="translate('+pos.x+' '+pos.y+')" ><g transform="scale('+scale+')">';
  sDis += '<g transform="translate('+parseFloat(0*verso)+' '+0+')">';

  sDis += renderBRACCIO60({x:0, y:0}, verso, 300, APERTURA);

  sDis += '</g>';
  sDis += '</g></g>';
  sDis += '</g>';

  let out = new Object();
  out.sDis = sDis;
  out.dimensioni = dimensioni;
  return out;
}

function render_BRACCIO_250(pos, scale, tipo, nome='')
{
  let dimensioni = {w:130.64, h:20.066};
  let verso = 1;
  let gain  = 1;
  if(tipo!=='DX') {verso = -1;};
  let sDis = '';
  sDis += '<g id="'+nome+'" onclick="mouse_click_bracci(\''+nome+'\' );">';
  sDis += '<g transform="translate('+pos.x+' '+pos.y+')" ><g transform="scale('+scale+')">';
  sDis += '<g transform="translate('+parseFloat(0*verso)+' '+0+')">';

  sDis += renderBRACCIO60({x:0, y:0}, verso, 250, APERTURA);

  sDis += '</g>';
  sDis += '</g></g>';
  sDis += '</g>';

  let out = new Object();
  out.sDis = sDis;
  out.dimensioni = dimensioni;
  return out;
}


function render_BRACCIO_225(pos, scale, tipo, nome='')
{
  let dimensioni = {w:118.18, h:19.802};
  let verso = 1;
  let gain  = 1;
  if(tipo!=='DX') {verso = -1;};
  let sDis = '';
  sDis += '<g id="'+nome+'" onclick="mouse_click_bracci(\''+nome+'\' );">';
  sDis += '<g transform="translate('+pos.x+' '+pos.y+')" ><g transform="scale('+scale+')">';
  sDis += '<g transform="translate('+parseFloat(0*verso)+' '+0+')">';

  sDis += renderBRACCIO60({x:0, y:0}, verso, 225, APERTURA);

  sDis += '</g>';
  sDis += '</g></g>';
  sDis += '</g>';

  let out = new Object();
  out.sDis = sDis;
  out.dimensioni = dimensioni;
  return out;
}

function render_BRACCIO_200(pos, scale, tipo, nome='')
{
  let dimensioni = {w:105.22, h:19.389};
  let verso = 1;
  let gain  = 1;
  if(tipo!=='DX') {verso = -1;};
  let sDis = '';
  sDis += '<g id="'+nome+'" onclick="mouse_click_bracci(\''+nome+'\' );">';
  sDis += '<g transform="translate('+pos.x+' '+pos.y+')" ><g transform="scale('+scale+')">';
  sDis += '<g transform="translate('+parseFloat(0*verso)+' '+0+')">';

  sDis += renderBRACCIO60({x:0, y:0}, verso, 200, APERTURA);

  sDis += '</g>';
  sDis += '</g></g>';
  sDis += '</g>';

  let out = new Object();
  out.sDis = sDis;
  out.dimensioni = dimensioni;
  return out;
}


function render_BRACCIO_150(pos, scale, tipo, nome='')
{
  let dimensioni = {w:81.799, h:19.389};
  let verso = 1;
  let gain  = 1;
  if(tipo!=='DX') {verso = -1;};
  let sDis = '';
  sDis += '<g id="'+nome+'" onclick="mouse_click_bracci(\''+nome+'\' );">';
  sDis += '<g transform="translate('+pos.x+' '+pos.y+')" ><g transform="scale('+scale+')">';
  sDis += '<g transform="translate('+parseFloat(0*verso)+' '+0+')">';

  sDis += renderBRACCIO60({x:0, y:0}, verso, 150, APERTURA);

  sDis += '</g>';
  sDis += '</g></g>';
  sDis += '</g>';

  let out = new Object();
  out.sDis = sDis;
  out.dimensioni = dimensioni;
  return out;
}









function render_FRECCIA_QUOTE(pos, scale, tipo)
{
  let dimensioni = {w:6.8011, h:5.4697};
  let verso = 1;
  let gain  = 1;
  if(tipo!=='DX') {verso = -1; gain = 0};
  let sDis = '';
  sDis += '<g>';
  sDis += '<g transform="translate('+pos.x+' '+pos.y+')" ><g transform="scale('+scale+')">';
  sDis += '<g transform="translate('+parseFloat(-dimensioni.w*verso)+' '+0+')">';
  sDis += '<g transform="scale('+verso+', 1)">';
  sDis += '<g transform="translate(-85.802 -68.991)"><path d="m92.248 71.726-6.3142-2.5391v5.0781z" fill="#00f" stroke="#00f" stroke-width=".26458px"/>';
  sDis += '</g>';
  sDis += '</g>';
  sDis += '</g></g>';
  sDis += '</g>';

  let out = new Object();
  out.sDis = sDis;
  out.dimensioni = dimensioni;
  return out;
}

function render_SUPPORTO(pos, scale, nome='')
{
  let dimensioni = {w:5.962, h:12.615};
  let verso = 1;
  let sDis = '';
  sDis += '<g id="'+nome+'" onclick="mouse_click_supporti(\''+nome+'\' );">';
  sDis += '<g transform="translate('+pos.x+' '+pos.y+')" >  <g transform="scale('+scale+')">';
  sDis += '<g transform="translate('+parseFloat(-dimensioni.w/2*verso)+' '+0+')">';
  sDis += '<g transform="scale('+verso+', 1)">';
  sDis += '<g transform="translate(-93.025 -113.42)"><g><g transform="translate(271.01 118.31)"><path d="m-172.27-3.2552v4.4344" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width=".254"/><path d="m-172.27 3.4229v1.4393" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width=".254"/><path d="m-177.75 4.8622v-1.4922" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width=".254"/><path d="m-177.75 1.1792v-4.4344" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width=".254"/><path d="m-172.27 4.8622v0.28575l-0.0106 0.28575-0.0212 0.27517-0.0423 0.28575-0.0635 0.28575-0.0317 0.13758-0.0529 0.13758-0.0635 0.13758-0.0741 0.127-0.0847 0.127-0.0952 0.10583-0.11642 0.10583-0.127 0.08467-0.127 0.07408-0.13758 0.0635-0.27517 0.08466-0.28575 0.0635-0.27517 0.04233-0.28575 0.02117-0.28575 0.01058h-0.56091l-0.28575-0.01058-0.28575-0.02117-0.27517-0.04233-0.28575-0.0635-0.27517-0.08466-0.13758-0.0635-0.127-0.07408-0.127-0.08467-0.11642-0.10583-0.0953-0.10583-0.0952-0.127-0.0635-0.127-0.0635-0.13758-0.0529-0.13758-0.0423-0.13758-0.0529-0.28575-0.0423-0.28575-0.0212-0.27517-0.0106-0.28575-0.0106-0.28575" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width=".254"/><path d="m-177.64-4.758h5.2811" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width=".254"/><path d="m-177.75 3.4229h-0.0529 0.0529" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width=".254"/><path d="m-172.26 3.4229h-0.0106 0.0106v0" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width=".254"/><path d="m-177.8 3.4229v0" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width=".254"/><path d="m-172.15-4.7051v0" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width=".254"/><g transform="matrix(0 .010583 .010583 0 -172.2 -4.7104)"><path d="m0 4.5c-2.4853 0-4.5-2.0147-4.5-4.5" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="24"/></g><path d="m-172.2-4.758v0" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width=".254"/><path d="m-177.8-4.758v0" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width=".254"/><g transform="matrix(0 .010583 .010583 0 -177.8 -4.7104)"><path d="m-4.5 0c0-2.4853 2.0147-4.5 4.5-4.5" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="24"/></g><path d="m-177.86-4.7051v0" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width=".254"/><g transform="matrix(0 -.010583 -.010583 0 -172.25 3.3118)"><path d="m-9.5 0c0-5.2467 4.2533-9.5 9.5-9.5" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="24"/></g><path d="m-172.15 3.317v-2.2437" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width=".254"/><path d="m-172.15-2.906v-1.7992" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width=".254"/><g transform="matrix(0 -.010583 -.010583 0 -177.8 3.3647)"><path d="m0 4.5c-2.4853 0-4.5-2.0147-4.5-4.5" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="24"/></g><path d="m-177.86-4.7051v1.7992" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width=".254"/><path d="m-177.86 1.0734v2.1696" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width=".254"/><path d="m-177.8-4.758h0.0317" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width=".254"/><path d="m-172.24-4.758h0.0318" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width=".254"/><path d="m-172.25 3.4123c0.0555 0 0.10054-0.045021 0.10054-0.10054" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width=".254"/><path d="m-172.15 1.0734v2.2437" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width=".254"/><path d="m-177.86 1.0734v2.2966l0.0212 0.042334 0.0318 0.010583" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width=".254"/><path d="m-172.36-4.758h0.127" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width=".254"/><path d="m-177.77-4.758h0.127" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width=".254"/></g><path transform="matrix(.26458 0 0 .26458 93.025 113.42)" d="m6.7073 46.237c-2.0647-0.4664-3.4616-1.436-4.1983-2.9142-0.992-1.9903-1.152-5.2657-1.1931-24.421l-0.038086-17.741 19.951-1e-6 -0.03892 18.246c-0.02551 11.958-0.13837 19.029-0.3275 20.519-0.47082 3.7082-1.527 5.2646-4.1281 6.0831-1.861 0.58561-7.8424 0.72205-10.026 0.22871z" fill="#0f0" stroke="#000" stroke-linecap="square" stroke-width=".25294"/></g></g>';
  sDis += '</g>';
  sDis += '</g>';
  sDis += '</g></g>';
  sDis += '</g>';

  let out = new Object();
  out.sDis = sDis;
  out.dimensioni = dimensioni;
  return out;
}

function render_SCIVOLO(pos, scale)
{
  let dimensioni = {w:11.219, h:20.045};
  let verso = 1;
  let sDis = '';
  sDis += '<g>';
  sDis += '<g transform="translate('+pos.x+' '+pos.y+')" ><g transform="scale('+scale+')">';
  sDis += '<g transform="translate('+parseFloat(-dimensioni.w/2*verso)+' '+0+')">';
  sDis += '<g transform="scale('+verso+', 1)">';
  sDis += '<g transform="translate(-86.866 -79.042)"><g transform="translate(367.64 42.234)"><g><path d="m-272.47 45.042v3.1115" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width=".254"/><path d="m-277.85 45.042v3.1115" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width=".254"/><path d="m-279.65 56.726h8.9747" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width=".254"/><path d="m-272.47 48.153 2.7834 7.7258v0.6985l-0.99483 0.14817" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width=".254"/><path d="m-277.85 48.153-2.794 7.7258" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width=".254"/><path d="m-279.65 56.726-0.99483-0.14817v-0.6985" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width=".254"/><path d="m-277.76 44.936h2.5929" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width=".254"/><path d="m-275.17 44.936h2.5929" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width=".254"/><path d="m-272.47 45.037c0-0.05552-0.045-0.10054-0.10054-0.10054" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width=".254"/><path d="m-275.17 44.544v0.39158" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width=".254"/><path d="m-275.17 43.592v0.49742" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width=".254"/><path d="m-277.75 44.936c-0.0555 0-0.10054 0.04502-0.10054 0.10054" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width=".254"/><path d="m-278.06 43.994v4.7202" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width=".254"/><path d="m-277.16 43.793h-0.6985" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width=".254"/><path d="m-275.17 44.502v-2.1061" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width=".254"/><path d="m-277.16 43.793v-1.397" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width=".254"/><path d="m-276.07 42.417c-0.01 0.02379-1.0795-0.05224-1.0795-0.02646" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width=".254"/><path d="m-277.85 43.793c-0.10813 0-0.19579 0.08766-0.19579 0.19579" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width=".254"/><path d="m-272.77 37.136v5.08" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width=".254"/><path d="m-276.27 37.136v5.08" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width=".254"/><path d="m-272.98 36.935h-3.0903" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width=".254"/><path d="m-272.98 42.417h-0.34925" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width=".254"/><path d="m-275.11 42.417h-0.9525" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width=".254"/><path d="m-274.22 44.798h-0.39158" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width=".254"/><path d="m-273.49 43.19-0.35983 0.05292" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width=".254"/><path d="m-276.06 36.935c-0.10813 0-0.19579 0.08764-0.19579 0.19579" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width=".254"/><path d="m-272.77 37.131c0-0.10815-0.0877-0.19579-0.19579-0.19579" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width=".254"/><path d="m-272.97 42.407c0.10813 0 0.19579-0.08766 0.19579-0.19579" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width=".254"/><path d="m-276.26 42.211c0 0.10813 0.0877 0.19579 0.19579 0.19579" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width=".254"/><path d="m-274.22 44.788c0.10813 0 0.19579-0.08766 0.19579-0.19579" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width=".254"/><path d="m-275.03 44.756 0.41275 0.04233" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width=".254"/><path d="m-275.11 44.656c0 0.05166 0.0391 0.0949 0.0905 0.10004" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width=".254"/><path d="m-273.49 43.177c0.0965-0.01378 0.1681-0.09638 0.1681-0.19382" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width=".254"/><path d="m-274.02 43.433v1.1642" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width=".254"/><path d="m-273.84 43.234c-0.0965 0.01378-0.1681 0.09638-0.1681 0.19382" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width=".254"/><path d="m-273.32 42.989v-0.5715" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width=".254"/><path transform="matrix(.26458 0 0 .26458 -367.64 -42.234)" d="m330.68 373.22-1.3574-0.19424v-2.0761l10.607-29.327v-11.611h19.193v11.572l10.617 29.467-0.0369 0.9776-0.0369 0.97761-1.389 0.21277c-1.2541 0.19211-3.0805 0.21192-18.814 0.20406-14.977-7e-3 -17.616-0.036-18.783-0.20294z" fill="#ff0"/><path transform="matrix(.26458 0 0 .26458 -367.64 -42.234)" d="m350.47 328.28c-0.1389-0.0358-0.29429-0.12961-0.34531-0.20839-0.146-0.22542-0.11756-7.7547 0.0296-7.8456 0.17431-0.10773 0.15795-0.35036-0.0421-0.62392-0.15176-0.20754-0.36182-0.22798-2.1307-0.20732-1.7113 0.02-1.9724-3e-3 -2.0414-0.18303-0.0435-0.11327-0.079-4.4843-0.079-9.7135 0-7.8778 0.0295-9.532 0.17231-9.6505 0.12414-0.10302 1.8098-0.13382 6.0294-0.11016l5.857 0.0328v19.572l-0.84144 0.0371c-0.48042 0.0212-0.89819 0.10548-0.97371 0.19648-0.0728 0.0877-0.14868 0.72441-0.16872 1.415l-0.0364 1.2556-0.44195 0.0918c-0.24306 0.0505-0.65479 0.12405-0.91495 0.16347-0.26016 0.0394-0.62949 0.20615-0.82075 0.37051l-0.34774 0.29883-0.1262 5.1363-1.2627 0.019c-0.69448 0.0104-1.3763-0.0103-1.5152-0.0462z" fill="#ff0"/><path transform="matrix(.26458 0 0 .26458 -367.64 -42.234)" d="m339.17 327.43v-1.7091h1.4957c1.2886 0 1.5246-0.032 1.7046-0.23091 0.17927-0.19809 0.20898-0.57752 0.20898-2.6688v-2.4379l2.115 0.0784c1.1632 0.0431 2.6122 0.0793 3.2199 0.0803l1.1048 2e-3v8.3338h-4.6803c-2.9848 0-4.7687 0.0473-4.9245 0.13071-0.23588 0.12624-0.24424 0.0722-0.24424-1.5784z" fill="#ff0"/></g></g></g>';
  sDis += '</g>';
  sDis += '</g>';
  sDis += '</g></g>';
  sDis += '</g>';

  let out = new Object();
  out.sDis = sDis;
  out.dimensioni = dimensioni;
  return out;
}





function render_LATO_TESTATA(pos, scale, tipo)
{
  let dimensioni = {w:6.23, h:25.501};
  let verso = 1;
  let gain  = 1;
  if(tipo=='SX') {verso = -1; gain = -1};
  let sDis = '';
  sDis += '<g>';
  sDis += '<g transform="translate('+pos.x+' '+pos.y+')" ><g transform="scale('+scale+')">';
  sDis += '<g transform="translate('+parseFloat(-dimensioni.w*gain)+' '+0+')">';
  sDis += '<g transform="scale('+verso+', 1)">';
  sDis += '<g transform="translate(-20.954 -54.233)"><g transform="matrix(-1.2574,0,0,1.2574,53.53,-20.527)"><path d="m25.811 62.728v-3.175" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width=".1905"/><path d="m23.737 66.39v6.1807" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width=".1905"/><g transform="matrix(.021167 0 0 -.021167 23.663 66.379)"><path d="m3.5 0c0 1.933-1.567 3.5-3.5 3.5" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="9"/></g><g transform="matrix(.021167 0 0 -.021167 23.663 72.56)"><path d="m0-3.5c1.933 0 3.5 1.567 3.5 3.5" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="9"/></g><path d="m21.874 72.295v-0.08467" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width=".1905"/><path d="m23.038 72.613v-2.667" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width=".1905"/><g transform="matrix(.021167 0 0 -.021167 21.906 72.285)"><path d="m-1.5 0c0-0.32456 0.10527-0.64036 0.3-0.9" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="9"/></g><g transform="matrix(.021167 0 0 -.021167 23.049 66.337)"><path d="m0 1.5c-0.51138 0-0.98753-0.26052-1.2633-0.6912" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="9"/></g><g transform="matrix(.021167 0 0 -.021167 23.049 72.602)"><path d="m-1.5 0c0-0.82843 0.67157-1.5 1.5-1.5" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="9"/></g><g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width=".1905"><path d="m23.059 66.305h0.61383"/><path d="m23.059 72.655h0.61383"/><path d="m25.811 59.744v2.794"/><path d="m25.811 62.728-0.35983 0.02117-0.3175 0.02117h-0.254l-0.21167 0.02117h-0.14817l-0.127 0.02117h-0.16933l-0.08467 0.02117h-0.04234l-0.127 0.02117-0.23283 0.08467-0.21167 0.127-0.127 0.16933-0.10583 0.1905-0.0635 0.1905-0.08467 0.381-0.0635 0.74083-0.04233 0.74083v4.0852"/><path d="m21.62 72.655h0.16933"/><path d="m21.049 69.48 0.381 2.9845"/><path d="m25.811 62.538v0.1905"/><path d="m21.049 69.48v-3.3443l0.04233-1.651 0.02117-0.8255 0.0635-0.8255 0.10583-0.8255 0.08467-0.40217 0.10583-0.40217 0.16933-0.381 0.1905-0.35983 0.14817-0.16933 0.14817-0.14817 0.16933-0.127 0.16933-0.10583 0.40217-0.14817 0.40217-0.10583 0.84667-0.08466 1.6933-0.02117v0.1905"/><path d="m21.832 72.613v-2.5612"/><path d="m23.038 69.925v0.02117"/></g><g transform="matrix(.021167 0 0 -.021167 21.779 72.602)"><path d="m0-1.5c0.82843 0 1.5 0.67157 1.5 1.5" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="9"/></g><path d="m21.916 69.967-0.0635 0.02117-0.02117 0.0635" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width=".1905"/><g transform="matrix(.021167 0 0 -.021167 21.906 70.147)"><path d="m-3.5 0c0-1.9211 1.5485-3.4831 3.4695-3.4999" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="9"/></g><g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width=".1905"><path d="m21.916 70.242"/><path d="m22.996 70.242h0.04233"/><path d="m23.038 69.946-1.1218 0.02117"/><path d="m23.038 69.925v-0.35983"/><path d="m21.43 72.465v0.0635l0.04233 0.0635 0.0635 0.04233 0.08467 0.02117"/><path d="m21.895 72.211-0.04233 0.04233-0.02117 0.04233 0.04234-0.08466"/><path d="m21.916 70.306v-0.254"/><path d="m22.996 70.052v0.254"/><path d="m22.996 72.634h-1.0795"/><path d="m21.895 70.327v0.02117"/><path d="m21.916 70.285"/><path d="m23.038 70.327-0.04233-0.04233"/><path d="m22.001 69.967-0.04233 0.02117-0.04233 0.0635"/><path d="m22.911 69.967 0.0635 0.02117 0.02117 0.0635"/><path d="m21.895 70.327 0.02117-0.04233"/><path d="m21.916 72.634h-0.02117v-2.286"/><path d="m22.996 72.634h0.02117l0.02117-0.02117"/><path d="m22.001 69.967h0.91017"/></g><g fill="#ac9393"><path transform="matrix(-.21042 0 0 .21042 25.908 59.458)" d="m19.926 56.254c0-4.1301-0.04221-6.0838-0.13588-6.2894-0.23136-0.50778-0.57684-0.56999-3.1651-0.56999h-2.4328l-0.056552-11.657c-0.051284-10.571-0.079818-11.891-0.30622-14.166-0.13732-1.3799-0.36308-2.9636-0.50171-3.5194-0.43731-1.7532-1.248-3.062-2.2747-3.6724-1.3173-0.7832-2.304-0.95184-6.67-1.14-1.7838-0.076872-3.2845-0.16449-3.335-0.19472-0.050484-0.030222-0.09179-3.2157-0.09179-7.0788v-7.0238l3.641 0.060247c5.8166 0.096247 8.3143 0.4047 10.736 1.3259 1.1741 0.44659 1.8331 0.89607 2.8373 1.9352 1.1882 1.2296 2.218 3.3211 2.8108 5.7085 0.44017 1.7727 0.9207 5.0901 1.1455 7.9084 0.23746 2.9768 0.48656 14.158 0.4891 21.954l0.0024 7.5129-0.92819 7.2959c-0.96989 7.6236-0.96547 7.6018-1.5429 7.6018-0.21057 0-0.22138-0.2926-0.22138-5.9912z"/><path transform="matrix(-.21042 0 0 .21042 25.908 59.458)" d="m10.951 62.164c-0.04487-0.04487-0.08159-6.6262-0.08159-14.625v-14.544h2.203v29.25h-1.0199c-0.56094 0-1.0566-0.03672-1.1015-0.08159z"/><path transform="matrix(-.21042 0 0 .21042 25.908 59.458)" d="m14.174 57.32c4.04e-4 -2.642 0.0361-5.258 0.07933-5.8133l0.0786-1.0097h4.0886l0.0786 1.0097c0.04323 0.55533 0.07893 3.1713 0.07933 5.8133l7.33e-4 4.8037h-4.4059z"/></g></g></g>';
  sDis += '</g>';
  sDis += '</g>';
  sDis += '</g></g>';
  sDis += '</g>';

  let out = new Object();
  out.sDis = sDis;
  out.dimensioni = dimensioni;
  return out;
}

function render_TAPPO_FRONTALE(pos, scale, tipo)
{
  let dimensioni = {w:2.7686, h:6.5241};
  let verso = 1;
  let gain  = 1;
  if(tipo=='SX') {verso = -1; gain = -1};
  let sDis = '';
  sDis += '<g>';
  sDis += '<g transform="translate('+pos.x+' '+pos.y+')" ><g transform="scale('+scale+')">';
  sDis += '<g transform="translate('+parseFloat(-dimensioni.w*gain)+' '+0+')">';
  sDis += '<g transform="scale('+verso+', 1)">';
  sDis += '<g transform="translate(-94.622 -51.833)"><g transform="matrix(-1.2574 0 0 1.2574 124.59 -41.903)"><path d="m23.737 74.687v4.9107" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width=".1905"/><g transform="matrix(.021167 0 0 -.021167 23.684 74.677)"><path d="m1.5 0c0 0.82843-0.67157 1.5-1.5 1.5" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="9"/></g><g transform="matrix(.021167 0 0 -.021167 23.684 79.587)"><path d="m0-1.5c0.82843 0 1.5 0.67157 1.5 1.5" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="9"/></g><path d="m23.694 74.645h-1.5452v4.9953h1.5452" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width=".1905"/><path d="m22.149 79.64-0.42333-2.4977 0.42333-2.4977" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width=".1905"/></g><path transform="scale(.26458)" d="m358.65 208.3v-11.339h6.4286v22.679h-6.4286z" fill="#ac9393"/><path transform="scale(.26458)" d="m366.19 208.21-2e-3 -5.0893 0.42412 2.3214c0.51766 2.8334 0.51765 2.8589-1e-3 5.625l-0.41878 2.2321z" fill="#ac9393"/></g>';
  sDis += '</g>';
  sDis += '</g>';
  sDis += '</g></g>';
  sDis += '</g>';

  let out = new Object();
  out.sDis = sDis;
  out.dimensioni = dimensioni;
  return out;
}





function render_BRACCIO_200_EDGE75(pos, scale, tipo, nome='')
{
  let dimensioni = {w:108.5, h:21.212};
  let verso = 1;
  let gain  = 1;
  if(tipo!=='DX') {verso = -1;};
  let sDis = '';
  sDis += '<g id="'+nome+'" onclick="mouse_click_bracci(\''+nome+'\' );">';
  sDis += '<g transform="translate('+pos.x+' '+pos.y+')" ><g transform="scale('+scale+')">';
  sDis += '<g transform="translate('+parseFloat(0*verso)+' '+0+')">';

  sDis += renderBRACCIO75({x:0, y:0}, verso, 200, APERTURA);

  sDis += '</g>';
  sDis += '</g></g>';
  sDis += '</g>';

  let out = new Object();
  out.sDis = sDis;
  out.dimensioni = dimensioni;
  return out;
}

function render_BRACCIO_250_EDGE75(pos, scale, tipo, nome='')
{
  let dimensioni = {w:132.5, h:21.122};
  let verso = 1;
  let gain  = 1;
  if(tipo!=='DX') {verso = -1;};
  let sDis = '';
  sDis += '<g id="'+nome+'" onclick="mouse_click_bracci(\''+nome+'\' );">';
  sDis += '<g transform="translate('+pos.x+' '+pos.y+')" ><g transform="scale('+scale+')">';
  sDis += '<g transform="translate('+parseFloat(0*verso)+' '+0+')">';

  sDis += renderBRACCIO75({x:0, y:0}, verso, 250, APERTURA);

  sDis += '</g>';
  sDis += '</g></g>';
  sDis += '</g>';

  let out = new Object();
  out.sDis = sDis;
  out.dimensioni = dimensioni;
  return out;
}


function render_BRACCIO_300_EDGE75(pos, scale, tipo, nome='')
{
  let dimensioni = {w:156.5, h:21.258};
  let verso = 1;
  let gain  = 1;
  if(tipo!=='DX') {verso = -1;};
  let sDis = '';
  sDis += '<g id="'+nome+'" onclick="mouse_click_bracci(\''+nome+'\' );">';
  sDis += '<g transform="translate('+pos.x+' '+pos.y+')" ><g transform="scale('+scale+')">';
  sDis += '<g transform="translate('+parseFloat(0*verso)+' '+0+')">';

  sDis += renderBRACCIO75({x:0, y:0}, verso, 300, APERTURA);

  sDis += '</g>';
  sDis += '</g></g>';
  sDis += '</g>';

  let out = new Object();
  out.sDis = sDis;
  out.dimensioni = dimensioni;
  return out;
}


function render_BRACCIO_350_EDGE75(pos, scale, tipo, nome='')
{
  let dimensioni = {w:181.5, h:21.21};
  let verso = 1;
  let gain  = 1;
  if(tipo!=='DX') {verso = -1;};
  let sDis = '';
  sDis += '<g id="'+nome+'" onclick="mouse_click_bracci(\''+nome+'\' );">';
  sDis += '<g transform="translate('+pos.x+' '+pos.y+')" ><g transform="scale('+scale+')">';
  sDis += '<g transform="translate('+parseFloat(0*verso)+' '+0+')">';

  sDis += renderBRACCIO75({x:0, y:0}, verso, 350, APERTURA);

  sDis += '</g>';
  sDis += '</g></g>';
  sDis += '</g>';

  let out = new Object();
  out.sDis = sDis;
  out.dimensioni = dimensioni;
  return out;
}


function render_BRACCIO_400_EDGE75(pos, scale, tipo, nome='')
{
  let dimensioni = {w:206.5, h:21.292};
  let verso = 1;
  let gain  = 1;
  if(tipo!=='DX') {verso = -1;};
  let sDis = '';
  sDis += '<g id="'+nome+'" onclick="mouse_click_bracci(\''+nome+'\' );">';
  sDis += '<g transform="translate('+pos.x+' '+pos.y+')" ><g transform="scale('+scale+')">';
  sDis += '<g transform="translate('+parseFloat(0*verso)+' '+0+')">';

  sDis += renderBRACCIO75({x:0, y:0}, verso, 400, APERTURA);

  sDis += '</g>';
  sDis += '</g></g>';
  sDis += '</g>';

  let out = new Object();
  out.sDis = sDis;
  out.dimensioni = dimensioni;
  return out;
}





















////////////////////////////////////////////////////////////////////////////////
/// NUOVI disegni

// lavoro in scala 1 a 1 fino alla preparazione del braccio completo
// il riferimento (0,0) è nella base del supporto
function render_SUPPORTO_SPAZIO_60(pos)
{
  let sDis = '';
  sDis += '<g transform="translate('+pos.x+' '+pos.y+')">';
  sDis += '<g transform="translate(-3.54,-15)">';  // centrato sull'asse del braccio
  sDis += '<g transform="translate(-65.225 -86.705)"><g transform="translate(-59.413 -49.86)"><g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"><g stroke-width=".254"><path d="m128.61 149.7c0-0.21919-0.17769-0.39688-0.39688-0.39688s-0.39687 0.17769-0.39687 0.39688c0 0.21918 0.17768 0.39687 0.39687 0.39687s0.39688-0.17769 0.39688-0.39687"/><path d="m130.36 143.41 0.67734 0.0212 0.0423 0.0106 0.0212 0.0318 0.0212 0.0212v2.5611"/><path d="m131.13 146.06v0.92075l-0.0106 0.46567-0.0212 0.45508-0.0106 0.0423 0.0106 0.0317 0.0106 0.0212h0.0106l0.0952-0.0318 0.0953-0.0317 0.0741-0.0317 0.0741-0.0318 0.0529-0.0423 0.0317-0.0318 0.0318-0.0317 0.0106-0.0317"/><path d="m125.32 147.92-0.0212-0.46567-0.0106-0.46567-0.0106-0.93133"/><path d="m126.03 143.38-0.67733 0.0317h-0.0212l-0.0317 0.0212-0.0212 0.0317-0.0106 0.0318v0.0317"/><path d="m129.4 151.47-0.13758 0.0847-0.13759 0.0741-0.14816 0.0635-0.14817 0.0529-0.14817 0.0423-0.15875 0.0318-0.3175 0.0212-0.3175-0.0212-0.15875-0.0318-0.15875-0.0423-0.14816-0.0529-0.14817-0.0635-0.13758-0.0741-0.13759-0.0847"/><path d="m131.56 147.65 0.0212 0.0846"/><path d="m125.32 147.92-0.0318-0.46567-0.0106-0.46567v-3.4608"/><path d="m131.58 147.73-0.0318 0.254-0.0423 0.26458-0.0423 0.254-0.0529 0.254-0.1482 0.508-0.0952 0.23283-0.0952 0.23284"/><path d="m127 151.47-0.0318-0.0317-0.0317-0.0212-0.0423-0.0317-0.0423-0.0212"/><path d="m129.56 151.36-0.0423 0.0212-0.0423 0.0318-0.0423 0.0212-0.0317 0.0318"/><path d="m125.34 148.2-0.0212-0.20108"/><path d="m130.6 150.11c5.5e-4 -7e-5 8.9e-4 -2.5e-4 1e-3 -5.2e-4"/><path d="m130.6 150.11-0.0847 0.17991-0.10584 0.17992-0.11641 0.16933-0.127 0.16934-0.127 0.14816-0.14817 0.14817-0.15875 0.127-0.16933 0.127"/><path d="m126.85 151.36-0.1905-0.13758-0.16934-0.14817-0.15875-0.15875-0.14816-0.17992-0.13759-0.1905-0.11641-0.1905-0.10584-0.20108-0.0953-0.20108-0.0847-0.21167-0.0635-0.22225-0.0635-0.21167-0.0529-0.22225-0.0741-0.4445-0.0529-0.4445"/><path d="m130.69 149.95-0.0212 0.0317-0.0212 0.0423-0.0529 0.0847"/><path d="m125.32 147.96-0.0106-0.0423h0.0106"/><path d="m125.32 148 0.0106 0.20108 0.0529 0.4445 0.0847 0.4445 0.0529 0.22225 0.0635 0.21167 0.0635 0.22225 0.0847 0.21167 0.0952 0.20108 0.10584 0.20108 0.11641 0.1905 0.13759 0.1905 0.14816 0.17992 0.15875 0.15875 0.16934 0.14817 0.1905 0.13758"/><path d="m129.56 151.36 0.16933-0.127 0.15875-0.127 0.14817-0.14817 0.127-0.14816 0.127-0.16934 0.11642-0.16933 0.10583-0.17992 0.0847-0.17991 0.0423-0.0741 0.0423-0.0635"/><path d="m125.3 147.92v0.0423"/><path d="m130.68 149.97 0.0106-0.0212 0.13758-0.0529 0.11642-0.0529 0.0423-0.0318 0.0317-0.0212 0.0317-0.0318 0.0212-0.0317"/><path d="m130.67 149.99 0.0212-0.0317"/><path d="m125.3 147.92h0.0106"/><path d="m131.64 142.3v3.4819l-0.0106 0.89959-0.0212 0.4445-0.0212 0.45508-0.0212 0.0423-0.0318 0.0529-0.0423 0.0317-0.0529 0.0423-0.0741 0.0318-0.0741 0.0317-0.0952 0.0318-0.10584 0.0317"/><path d="m125.32 147.88-0.10583-0.0317-0.0952-0.0318-0.0847-0.0317-0.0635-0.0318-0.0635-0.0423-0.0423-0.0317-0.0317-0.0529-0.0106-0.0423"/><path d="m124.78 145.78v9e-5"/><path d="m124.82 147.58-0.0317-0.45508-0.0212-0.4445v-4.3815"/><path d="m130.46 137.14-0.0847-0.10583-0.10583-0.0847-0.10584-0.0741-0.10583-0.0741-0.254-0.0846-0.127-0.0212h-2.8152"/><path d="m125.95 137.14 0.0952-0.11642 0.11642-0.0953 0.11642-0.0847 0.13758-0.0635 0.10583-0.0423 0.10584-0.0212 0.11641-0.0212h0.11642"/><path d="m126.03 143.38-0.0212-0.16934"/><path d="m130.57 143.19h1e-3"/><path d="m125.84 143.19h1e-3"/><path d="m125.83 143.2h4.7308"/><path d="m130.57 143.19c0.0542-5.3e-4 0.0983-0.044 0.0995-0.0982"/><path d="m125.74 143.09c1e-3 0.0542 0.0453 0.0977 0.0995 0.0982"/><path d="m130.4 143.21-0.0317 0.20109"/><path d="m126 143.21 0.0318 0.16934"/><path d="m130.67 143.11 0.0212-1.3229v-4.0429l-0.0106-0.0952-0.0212-0.0952-0.0317-0.0847-0.0317-0.0952-0.0423-0.0847-0.0423-0.0741-0.0635-0.0847"/><path d="m125.95 137.13-0.0529 0.0847-0.0529 0.0741-0.0423 0.0847-0.0317 0.0952-0.0318 0.0847-0.0212 0.0952-0.0106 0.0952v2.7306l0.0106 1.3123 0.0212 1.3229"/></g><path transform="matrix(.26458 0 0 .26458 124.64 136.56)" d="m4.6915 24.546c-0.071913-0.11636-0.13627-7.272-0.12209-13.574l0.015752-7.001 0.18394-0.46622c0.37245-0.94401 1.1954-1.8112 2.0792-2.1911 0.80514-0.34604 0.59936-0.3364 6.8357-0.32031l5.6185 0.014488 0.48529 0.17447c0.90293 0.32461 1.7492 1.048 2.142 1.8309 0.18797 0.37466 0.35518 0.89175 0.41713 1.2899 0.04479 0.28791 0.05082 2.6909 0.02423 9.6583-0.01947 5.1013-0.051 9.574-0.07006 9.9394l-0.03466 0.66433-8.7737 0.01292c-4.9716 0.0073-8.7856-0.0064-8.8013-0.03177z" fill="#f00" stroke="none"/></g><path d="m124.76 142.3 1.0112-0.0135" fill="none" stroke="#000" stroke-width=".26458px"/><g fill="#c8b7b7"><path d="m127.76 151.65c-0.55054-0.13046-1.2126-0.62467-1.5834-1.182-0.32249-0.48467-0.49928-0.97181-0.61918-1.7061-0.10875-0.66601-0.13247-1.2488-0.13278-3.2618l-2.6e-4 -1.9254 0.0752-0.0202c0.0413-0.0111 0.18868-0.0204 0.3274-0.0206 0.26031-4.7e-4 0.33242-0.031 0.33242-0.14077 0-0.0573 0.0978-0.0601 2.0379-0.0601h2.0379v0.0768c0 0.13428 0.0593 0.15703 0.40905 0.15703h0.32887l-5e-3 2.2424c-5e-3 2.5311-0.0205 2.3818 0.23733 2.3046 0.0761-0.0228 0.1465-0.0333 0.15649-0.0233 0.0552 0.0552-0.14907 0.91553-0.31407 1.3228-0.10601 0.26165-0.1549 0.31808-0.32721 0.37764-0.11785 0.0407-0.15047 0.0791-0.30068 0.35336-0.25091 0.45817-0.50505 0.76558-0.84191 1.0184-0.33382 0.25054-0.61231 0.39678-0.89661 0.47083-0.21219 0.0553-0.71982 0.0643-0.92186 0.0165zm0.73339-1.4927c0.33461-0.24779 0.31865-0.74435-0.0295-0.91929-0.14176-0.0712-0.37047-0.0756-0.49815-0.01-0.3864 0.19981-0.38774 0.74891-2e-3 0.94715 0.17798 0.0915 0.39167 0.0842 0.53-0.0183z"/><path d="m125.03 147.62c-0.0631-0.0524-0.0738-0.11219-0.10251-0.5763-0.0177-0.28481-0.0329-1.4312-0.034-2.5474l-2e-3 -2.0296h0.70254v0.33628c0 0.18496 0.0156 0.36536 0.0346 0.40091 0.0323 0.0603 0.0221 0.0646-0.15185 0.0646-0.15439 0-0.20082 0.0144-0.27006 0.0836l-0.0836 0.0836 0.01 2.1214c5e-3 1.1668 2.7e-4 2.1214-0.0114 2.1214-0.0118-1e-5 -0.053-0.0263-0.0918-0.0585z"/><path d="m131.27 145.56 0.01-2.1092-0.0743-0.0791c-0.0633-0.0674-0.10629-0.0791-0.29079-0.0791-0.20764 0-0.21424-3e-3 -0.16122-0.0611 0.0421-0.0466 0.0554-0.128 0.0557-0.34244 7.9e-4 -0.45156-0.0164-0.43168 0.37093-0.43168h0.33019l-2e-3 2.0463c-1e-3 1.1255-0.0143 2.2709-0.0293 2.5455-0.0251 0.45894-0.0333 0.50405-0.10193 0.5596-0.041 0.0332-0.0842 0.0604-0.096 0.0604-0.0117 0-0.0169-0.94914-0.0114-2.1092z"/></g><path d="m130.63 142.31 1.0112-0.0135" fill="none" stroke="#000" stroke-width=".26458px"/></g></g>';
  sDis += '</g></g>';
  return sDis;
}

function render_SUPPORTO_SPAZIO_75(pos)
{
  let sDis = '';
  sDis += '<g transform="translate('+pos.x+' '+pos.y+')">';
  sDis += '<g transform="translate(-3.9, -13.5)">';  // 14 centrato sull'asse del braccio
  sDis += '<g transform="translate(-100.13 -116.57)"><g transform="matrix(.99952 0 0 .99952 -89.345 -56.138)"><g fill="none" stroke="#000"><path d="m189.82 178.59 0.96955-0.0537" stroke-width=".26459px"/><g stroke-linecap="square" stroke-miterlimit="10" stroke-width=".36309"><g stroke-linejoin="round"><path d="m197.71 184.53v0.45762"/><path d="m189.82 184.53v0.34308"/><path d="m193.37 188.65 0.60972 0.064 0.226 0.0299 0.53384-0.064 0.91485-0.45762 0.80054-0.57178 0.68615-0.80053 0.45746-0.91486 0.11437-0.91485"/><path d="m189.93 184.43"/><path d="m197.6 184.43h-0.11438"/><path d="m197.71 184.53-0.2287-0.11454h-0.34307v-5.2605l-0.11438-0.11454"/><path d="m190.39 179.08v5.375h-0.45745l-0.11438 0.11454"/><path d="m190.39 179.08h0.57178"/><path d="m196.57 179.08h0.45746"/><path d="m197.48 184.43 0.2287-0.11454"/><path d="m197.14 184.43h0.45745"/><path d="m197.71 178.59v5.7178"/><path d="m189.82 178.59v5.7178l0.11437 0.11454h0.45746"/><path d="m192.22 181.67"/><path d="m195.31 182.61v-1.4863"/><path d="m192 182.61v-1.4863"/></g><path d="m192.11 181.13" stroke-linejoin="bevel"/></g></g><g stroke-linecap="square" stroke-miterlimit="10"><g stroke-width="3.175"><g transform="matrix(-.085051 .07645 .07645 .085051 192.05 180.81)"><path d="m1.5 0c0 0.52494-0.27441 1.0117-0.72355 1.2834" fill="none" stroke="#000" stroke-linecap="square" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3.175"/></g><g transform="matrix(.085721 .075693 .075693 -.085721 191.93 180.91)"><path d="m0.40893 0.48106c-0.08908 0.00841-0.1803 0.01406-0.2725 0.01687" fill="none" stroke="#000" stroke-linecap="square" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3.175"/></g><g transform="matrix(.11436 -.0008886 -.0008886 -.11436 192.05 180.7)"><path d="m-1.1766-0.93042c0.27974-0.35374 0.70378-0.56285 1.1547-0.56942" fill="none" stroke="#000" stroke-linecap="square" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3.175"/></g></g><path d="m191.99 180.86" fill="none" stroke="#000" stroke-linejoin="bevel" stroke-width=".36309"/><path d="m191.99 180.86-0.45745-0.45762" fill="none" stroke="#000" stroke-linejoin="round" stroke-width=".36309"/><g transform="matrix(-.088174 .07283 .07283 .088174 191.59 180.27)" stroke-width="3.175"><path d="M 1.5,-1.4e-4 V 0" fill="none" stroke="#000" stroke-linecap="square" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3.175"/></g><g transform="matrix(-.088179 .072819 .072819 .088179 191.59 180.27)" stroke-width="3.175"><path d="m1.407-0.52007c0.06154 0.16649 0.09304 0.34258 0.09304 0.52007" fill="none" stroke="#000" stroke-linecap="square" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3.175"/></g></g><g fill="none" stroke="#000" stroke-linecap="square" stroke-miterlimit="10" stroke-width=".36309"><g stroke-linejoin="round"><path d="m191.53 180.43-0.2287-0.34308-0.2287-0.45761-0.2287-0.68616-0.11438-0.57178-0.22875-1.3723v-0.80069"/><path d="m190.62 176.21"/><path d="m197.02 176.21v0.45761l-0.11438 0.34308v0.57178l-0.11438 0.80053-0.11437 0.45762-0.2287 0.80048-0.45746 0.80053"/></g><path d="m195.88 180.43" stroke-linejoin="bevel"/></g><g transform="matrix(.088184 .072814 .072814 -.088184 195.71 180.27)" stroke-linecap="square" stroke-miterlimit="10" stroke-width="3.175"><path d="m1.5 0c0 0.17745-0.03149 0.35349-0.09299 0.51993" fill="none" stroke="#000" stroke-linecap="square" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3.175"/></g><g fill="none" stroke="#000" stroke-linecap="square" stroke-miterlimit="10" stroke-width=".36309"><path d="m195.31 181.13" stroke-linejoin="bevel"/><g stroke-linejoin="round"><path d="m191.99 180.86v-0.45762l-0.11438-0.45762-0.2287-0.45762"/><path d="m190.96 173.78 0.11437-0.11454 0.57178-0.34308h0.11438l0.57178 0.34308 0.11438 0.11454v0.68615l-0.11438 0.11454-0.57178 0.34308h-0.11438l-0.57178-0.34308-0.11437-0.11454v-0.68615"/><path d="m195.08 173.78v-0.11454l0.68616-0.34308h0.11437l0.57178 0.34308 0.11438 0.11454-0.11438 0.68615v0.11454l-0.57178 0.34308h-0.11437l-0.68616-0.34308v-0.80069"/><path d="m197.02 174.16v2.0585"/><path d="m196 180.43-0.45746 0.45762v-0.45762l0.11438-0.45762 0.2287-0.45761"/><path d="m191.08 178.37"/><path d="m190.51 176.21v-2.0585"/><path d="m191.65 172.97h4.1169"/></g></g><g stroke-linecap="square" stroke-miterlimit="10"><g transform="matrix(.08564 -.075785 -.075785 -.08564 195.71 174.05)" stroke-width="3.175"><path d="m7.8633-6.9584c0.18304 0.20684 0.35785 0.42082 0.52401 0.64145" fill="none" stroke="#000" stroke-linecap="square" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3.175"/></g><g transform="matrix(.083457 .078184 .078184 -.083457 191.69 174.19)" stroke-width="3.175"><path d="m-7.2453 7.5997c-3.7102-3.5372-4.324-9.2364-1.452-13.483" fill="none" stroke="#000" stroke-linecap="square" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3.175"/></g><path d="m192.11 181.13-0.11438-0.11454" fill="none" stroke="#000" stroke-linejoin="round" stroke-width=".36309"/><g transform="matrix(.11436 0 0 -.11436 192.05 180.7)" stroke-width="3.175"><path d="m-1.2322-0.85546c0.05815-0.08375 0.12468-0.16135 0.19857-0.2316" fill="none" stroke="#000" stroke-linecap="square" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3.175"/></g></g><g fill="none" stroke="#000" stroke-linecap="square" stroke-linejoin="round" stroke-miterlimit="10" stroke-width=".36309"><path d="m191.99 180.86-0.45745-0.45762"/><path d="m195.42 181.13 0.11438-0.11454"/><path d="m191.65 179.49-0.57361-0.77206-0.2287-0.80053-0.2287-0.80048-0.11438-0.91491"/><path d="m195.76 172.97h0.45745l0.68616 0.68615 0.11437 0.34308"/><path d="m197.02 176.21-0.11438 0.91491-0.2287 0.80048-0.34308 0.80053-0.45475 0.78303"/><path d="m196 180.43-0.45746 0.45762"/></g><g transform="matrix(.11436 0 0 -.11436 193.65 182.53)" stroke-linecap="square" stroke-miterlimit="10" stroke-width="3.175"><path d="m-14.485-0.66843c0.35718-7.74 6.7364-13.832 14.485-13.832s14.127 6.0916 14.485 13.832" fill="none" stroke="#000" stroke-linecap="square" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3.175"/></g><path d="m193.94 188.77h-0.2287l-0.34308-0.11454-0.57178-0.11454-0.91485-0.45762-0.80054-0.57178-0.68615-0.80053-0.45746-0.91486-0.11437-0.91485" fill="none" stroke="#000" stroke-linecap="square" stroke-linejoin="round" stroke-miterlimit="10" stroke-width=".36309"/><path d="m196.74 178.64 0.96955-0.0537" fill="none" stroke="#000" stroke-width=".26459px"/><g fill="#f00"><path d="m193.45 183.98c-0.45283-0.0697-0.87609-0.36426-1.0776-0.74983-0.16931-0.32394-0.17767-0.3755-0.19026-1.1734l-0.0114-0.72083 0.2043-0.1976-0.048-0.061c-0.0308-0.0392-0.0542-0.12373-0.0653-0.23636-0.0121-0.12328-0.0276-0.17538-0.0519-0.17538-0.0259 0-0.0348-0.0432-0.0352-0.17072-5.3e-4 -0.21362-0.0924-0.57536-0.19955-0.78662-0.0448-0.0883-0.0757-0.16641-0.0686-0.17347 0.0142-0.0142-0.13324-0.24357-0.20784-0.32349-0.026-0.0278-0.13641-0.16956-0.24542-0.31497l-0.1982-0.26439-0.22137-0.77294c-0.31172-1.0884-0.32588-1.2091-0.3236-2.7577 1e-3 -0.64685 0.011-1.1988 0.0224-1.2267 0.0126-0.0308 0.0242 0.0895 0.0298 0.3085l9e-3 0.35909 0.0885 0.0917c0.11139 0.1154 0.67797 0.45942 0.79181 0.48078 0.0537 0.0101 0.12013 1e-3 0.1796-0.0234 0.17934-0.0749 0.64245-0.3698 0.72061-0.45882l0.0784-0.0893v-0.84764l-0.10749-0.1044c-0.0591-0.0574-0.23269-0.17928-0.38571-0.2708l-0.27821-0.1664 3.7938 2e-3 -0.35355 0.1788c-0.19445 0.0983-0.36766 0.19732-0.3849 0.21998-0.0402 0.0528-0.046 1.0444-7e-3 1.1182 0.0145 0.0271 0.19947 0.13632 0.41101 0.24265 0.5169 0.25985 0.51313 0.25985 0.94656-1e-3 0.35209-0.21202 0.38544-0.24881 0.38806-0.42813 7.9e-4 -0.0585 0.0166-0.18597 0.0351-0.28335 0.0301-0.15908 0.0338-0.16614 0.0364-0.0695 2e-3 0.0897 0.0112 0.10749 0.0534 0.10749 0.0497 0 0.0506 0.0169 0.0505 0.98008-2e-5 0.98128-0.0195 1.2719-0.12463 1.8653-0.0859 0.48482-0.4197 1.3432-0.72283 1.859-0.28872 0.49126-0.32775 0.56228-0.42397 0.77141-0.12014 0.26114-0.22079 0.66732-0.22079 0.8911 0 0.23029-0.0373 0.30983-0.14543 0.31009l-0.0822 2e-4v0.9052c0 0.72745-8e-3 0.93482-0.0385 1.056-0.12353 0.48386-0.51685 0.90129-0.98585 1.0463-0.18502 0.0572-0.46123 0.0807-0.63479 0.0539z"/><path d="m190.9 173.56c0.0895-0.11416 0.22677-0.22189 0.36754-0.28849 0.0772-0.0365 0.21787-0.0822 0.22653-0.0735 2e-3 2e-3 -0.11591 0.0754-0.2623 0.16288-0.15216 0.0909-0.28354 0.17574-0.30672 0.19807-0.0516 0.0497-0.0636 0.0502-0.025 1e-3z"/><path d="m196.18 173.29-0.21461-0.12929 0.188-2e-5 0.12943 0.12967c0.0712 0.0713 0.12545 0.12949 0.1206 0.12929-5e-3 -1.9e-4 -0.1054-0.0585-0.22344-0.12965z"/><path d="m191.72 180.32c-0.0467-0.0473-0.0657-0.0764-0.0657-0.10085 0-0.0276-6e-3 -0.0344-0.0296-0.0344-0.0213 0-0.0364-0.013-0.0537-0.0463-0.0133-0.0255-0.0372-0.0607-0.0532-0.0784-0.016-0.0176-0.0821-0.13765-0.14689-0.2667-0.1332-0.26519-0.22641-0.52277-0.22004-0.60804l4e-3 -0.0526 0.16607 0.22564c0.13462 0.1829 0.18664 0.26678 0.27466 0.44285 0.0927 0.1854 0.1152 0.2435 0.15379 0.39674 0.0249 0.0987 0.0432 0.18154 0.0408 0.18399-2e-3 2e-3 -0.034-0.0255-0.0701-0.062z"/><path d="m195.87 180.12c-0.0477-0.0183-0.0525-0.024-0.0456-0.0528 0.0153-0.0631 0.21115-0.44144 0.38138-0.7365l0.17281-0.29953 4e-3 0.082c3e-3 0.0657-7e-3 0.11864-0.0485 0.2658-0.0496 0.17439-0.0607 0.19865-0.217 0.4736-0.0906 0.1594-0.17123 0.28939-0.17914 0.28888-8e-3 -5.3e-4 -0.0384-0.0102-0.0677-0.0214z"/><path d="m191.46 174.59c-0.32357-0.1963-0.30081-0.16052-0.30081-0.47286v-0.27181l0.54872-0.32842 0.53885 0.32522v0.56606l-0.26329 0.15788c-0.14481 0.0868-0.27285 0.15745-0.28454 0.15694-0.0117-5.3e-4 -0.11921-0.0604-0.23893-0.13301z"/><path d="m195.53 174.6-0.2466-0.12542v-0.68195l0.54008-0.27094 0.26938 0.16124 0.26939 0.16123-0.0525 0.31718-0.0525 0.31717-0.20234 0.12402c-0.11128 0.0682-0.21941 0.12376-0.24028 0.12345-0.0208-2.6e-4 -0.1489-0.057-0.28453-0.12598z"/></g><g fill="#ac9393"><path transform="matrix(.26471 0 0 .26471 12.411 135.91)" d="m684.88 198.64c-2.389-0.28595-2.9786-0.45572-4.8695-1.4023-1.243-0.62222-2.1142-1.1427-3.1384-1.8748-1.293-0.92433-1.5228-1.1356-2.6109-2.4008-1.1284-1.3121-1.24-1.4803-2.0599-3.1071l-0.86681-1.7198-0.17482-1.3377c-0.0962-0.73571-0.17639-1.6494-0.17829-2.0304l-3e-3 -0.69272h0.75243c0.41383 0 0.88679-0.0269 1.051-0.0597l0.29858-0.0597v-20.136h0.32657c0.3243 0 0.32838 5e-3 0.58691 0.78826 0.22953 0.69496 0.91606 2.15 1.4757 3.1277 0.10482 0.18311 0.19058 0.47333 0.19058 0.64494 0 0.25356 0.0377 0.31202 0.20123 0.31202 0.11068 0 0.2861 0.10789 0.38984 0.23977 0.10373 0.13188 0.23188 0.21304 0.28476 0.18035 0.16022-0.099 0.75754 0.54732 0.69319 0.75008-0.0347 0.10945 0.0377 0.29945 0.19072 0.50002l0.24674 0.3235v3.1196c0 2.8234 0.0185 3.1919 0.19426 3.8804 0.25361 0.99328 0.5681 1.691 1.087 2.4117 1.043 1.4485 2.4359 2.397 4.1717 2.8408 0.85235 0.21793 2.5766 0.17118 3.4328-0.0931 2.071-0.63917 3.641-1.9927 4.4943-3.8746 0.54424-1.2003 0.59852-1.6357 0.57758-4.6332l-0.019-2.7149 0.59206-0.59737c0.43654-0.44045 0.5751-0.64158 0.52749-0.76564-0.0466-0.12151 0.0615-0.29631 0.38922-0.62899 0.24958-0.25339 0.50861-0.46071 0.57561-0.46071s0.22401-0.16187 0.3489-0.3597c0.12489-0.19784 0.29694-0.41769 0.38233-0.48856 0.0854-0.0709 0.13251-0.16567 0.10471-0.21066-0.0278-0.045 0.27229-0.64363 0.66687-1.3303 0.42268-0.73559 0.79971-1.5317 0.9177-1.9378 0.11016-0.37907 0.2219-0.76446 0.24832-0.85643 0.0354-0.12331 0.1482-0.1672 0.4296-0.1672h0.38158l-0.037 20.113 0.74866 0.0283c0.41177 0.0155 0.80238 0.0728 0.86804 0.12732 0.0657 0.0545 0.20743 0.0711 0.31505 0.037 0.18639-0.0592 0.19568-0.0248 0.19568 0.72437 0 0.43256-0.0907 1.4987-0.20155 2.3693l-0.20155 1.5828-0.79274 1.5785c-0.74039 1.4742-0.87537 1.6754-2.044 3.0459-1.1604 1.3609-1.3535 1.5405-2.6573 2.473-1.0594 0.7577-1.8542 1.2273-3.2244 1.9053l-1.8185 0.89977-1.1466 0.0373c-0.65525 0.0213-1.6379-0.0215-2.2931-0.1z"/><path transform="matrix(.26471 0 0 .26471 12.411 135.91)" d="m670.98 172.14v-10.401l0.64494-0.0609c1.0274-0.097 1.5525-0.0777 1.5539 0.0572 7.1e-4 0.0657 0.0272 0.21617 0.0589 0.33441 0.0565 0.21077 0.0415 0.21498-0.76568 0.21498h-0.82329v20.256h-0.66882z"/><path transform="matrix(.26471 0 0 .26471 12.411 135.91)" d="m698.59 172.85v-9.6906l-0.23887-0.28387c-0.13138-0.15614-0.23887-0.35292-0.23887-0.4373 0-0.0854-0.0781-0.15341-0.17628-0.15341-0.097 0-0.24847-0.0798-0.33669-0.17724-0.1542-0.17039-0.1376-0.17963 0.42917-0.23887 0.32426-0.0339 0.73375-0.0616 0.90996-0.0616h0.3204v10.309c0 11.195 0.0359 10.425-0.48555 10.425-0.17946 0-0.18327-0.20143-0.18327-9.6907z"/></g></g></g>';
  sDis += '</g></g>';
  return sDis;
}





function render_PUNTALE_SPAZIO_75_A(pos, angolodeg)
{
  let sDis = '';
  sDis += '<g transform="translate('+pos.x+' '+pos.y+')">';
  sDis += '<g  transform="rotate('+parseFloat(angolodeg)+', 0, 0)" >';
  sDis += '<g transform="translate(0 1)">';
  sDis += '<g transform="translate(-83.805 -111.18)"><g transform="matrix(.99952 0 0 .99952 -113.43 70.977)"><g fill="none" stroke="#000" stroke-linecap="square" stroke-linejoin="round" stroke-miterlimit="10" stroke-width=".36309"><path d="m201.12 43.157v-0.80053"/><path d="m197.57 43.157v-0.80053"/><path d="m198.14 41.807v-0.45708l0.11437-0.22854 0.2287-0.22854 0.11438-0.11454 0.4574-0.22908h0.2287"/><path d="m199.28 40.564h0.34307l0.22871 0.11454 0.34307 0.22854 0.2287 0.22854 0.11438 0.22854v0.22854l-0.11438 0.22854"/><path d="m201.12 43.157"/><path d="m197.57 43.157"/><path d="m201 43.157-0.11438 0.22854 0.11438-0.11454 0.11437-0.91491"/><path d="m197.8 43.374"/><path d="m200.77 43.374"/><path d="m197.57 42.347 0.11438 0.91491v0.11454l-0.11438-0.22854"/><path d="m201.12 43.157"/><path d="m197.57 43.157"/><path d="m200.43 41.807-0.45745 0.22854-0.68616 0.11454-0.68616-0.11454-0.45745-0.22854"/><path d="m197.8 43.374"/><path d="m200.77 43.374"/><path d="m200.77 43.536h-2.9733"/><path d="m201.12 42.347-0.11438-0.80048-0.57178-0.68616-0.45745-0.34308-0.80054-0.11454-0.68615 0.22854-0.34308 0.22854-0.45746 0.68616-0.11437 0.80048"/><path d="m200.09 42.023v-0.34308l-0.11437-0.22854-0.11438-0.11454h-1.0292l-0.2287 0.11454-0.11438 0.22854v0.34308"/></g><g fill="#ac9393" stroke-width=".26459"><path d="m197.87 43.281c-7e-5 -0.01148-0.0261-0.22635-0.0579-0.4775l-0.0577-0.4566 0.0513-0.3619c0.0458-0.32327 0.0564-0.36994 0.0994-0.4371l0.0481-0.07517 2e-4 0.12177c1.5e-4 0.09084-9e-3 0.13916-0.0347 0.19019-0.0283 0.05545-0.0307 0.07111-0.0125 0.0826 0.0123 0.0078 0.028 0.01429 0.0349 0.01445 7e-3 1.43e-4 0.0125 0.01905 0.0125 0.04202 0 0.03833 6e-3 0.04176 0.0748 0.04176 0.0475 0 0.10849 0.01654 0.16704 0.04524 0.0877 0.043 0.0922 0.04837 0.0922 0.10858v0.06334l0.12111-2.65e-4c0.0666-1.77e-4 0.28986 0.02757 0.49608 0.06165l0.37497 0.06197 0.37674-0.0619c0.2072-0.03405 0.43122-0.06179 0.49784-0.06165l0.12111 2.54e-4v-0.06349c0-0.0588 6e-3 -0.06621 0.076-0.10039 0.0572-0.02777 0.0838-0.03273 0.10748-0.02003 0.0443 0.02373 0.0465 0.02275 0.0758-0.03388 0.0144-0.02791 0.0524-0.06324 0.0845-0.0785 0.0413-0.01971 0.0551-0.03528 0.0475-0.05366-0.0262-0.063-0.0239-0.08493 0.0167-0.16516 0.0237-0.04683 0.0431-0.09758 0.0431-0.11279 0-0.0232 4e-3 -0.02416 0.0262-6e-3 0.0519 0.04306 0.0699 0.1132 0.11676 0.45374l0.0476 0.34605-0.0385 0.33047c-0.0364 0.31306-0.042 0.33816-0.10637 0.47662l-0.0679 0.14617h-1.4171c-1.1225 0-1.4172-0.0043-1.4172-0.02088z"/><path d="m200.2 41.471c-0.0576-0.12309-0.0955-0.17875-0.16998-0.24982l-0.0959-0.09144h-1.1558l-0.14583 0.0733c-0.1659 0.08339-0.18121 0.09773-0.25171 0.23573l-0.0512 0.10022-7.9e-4 -0.08825c-1e-3 -0.12868 0.0532-0.21923 0.24434-0.40722 0.14473-0.14232 0.18629-0.17241 0.35177-0.25474l0.18764-0.09336h0.22627c0.22038 0 0.22896 0.0013 0.33002 0.05237 0.16013 0.08083 0.39447 0.24249 0.50215 0.34642 0.12236 0.11807 0.17824 0.22314 0.17824 0.33507 0 0.0751-0.0418 0.20272-0.0657 0.20083-5e-3 -5.3e-4 -0.0428-0.07202-0.0836-0.15913z"/><path d="m198.94 41.868-0.25893-0.04435-5e-3 -0.06118c-7e-3 -0.08898 0.049-0.18906 0.12996-0.23035 0.0612-0.03124 0.0979-0.03363 0.51502-0.03363 0.50327 0 0.46659-0.0089 0.53679 0.13063 0.0227 0.0451 0.0344 0.09506 0.0312 0.1332l-5e-3 0.06103-0.26729 0.04533c-0.32482 0.05509-0.35104 0.05507-0.67654-7.94e-4z"/></g></g></g>';
  sDis += '</g></g></g>';
  return sDis;
}

function render_PUNTALE_SPAZIO_75_B(pos, angolodeg)
{
  let sDis = '';
  sDis += '<g transform="translate('+pos.x+' '+pos.y+')">';
  sDis += '<g  transform="rotate('+parseFloat(angolodeg)+', 0, 0)" >';
  sDis += '<g transform="translate(-0.55 0)">';
  sDis += '<g transform="translate(-109.63 -138.06)"><g transform="matrix(.99952 0 0 .99952 -91.764 97.453)" fill="#ac9393" stroke="#000"><rect x="201.6" y="40.743" width=".70466" height="3.3404" stroke-width=".22551"/><rect x="202.35" y="41.571" width="1.0462" height="2.1014" stroke-width=".26471"/></g></g>';
  sDis += '</g></g></g>';
  return sDis;
}

function render_PROFILO_SU_CALCAGNO_SPAZIO_75(pos, angolodeg)
{
  let sDis = '';
  sDis += '<g transform="translate('+pos.x+' '+pos.y+')">';
  sDis += '<g  transform="rotate('+parseFloat(angolodeg)+', 0, 0)" >';
  sDis += '<g transform="translate(-4.31 -2.1)">'; //3.9 3.5
  sDis += '<g transform="translate(-91.155 -116.01)"><g transform="matrix(.11431 0 0 -.11431 274.23 105.16)" stroke-linecap="square" stroke-miterlimit="10" stroke-width="3.175"><g transform="translate(-1564.1 -113.23)" stroke-linecap="square" stroke-miterlimit="10"><g fill="none" stroke="#000" stroke-linejoin="round" stroke-width=".36309"><path transform="matrix(8.7442 0 0 -8.7442 -1783.5 293.31)" d="m199.9 35.434v-3.7742"/><path transform="matrix(8.7442 0 0 -8.7442 -1783.5 293.31)" d="m199.9 35.434v0.68616"/><path transform="matrix(8.7442 0 0 -8.7442 -1783.5 293.31)" d="m201.38 35.434"/><path transform="matrix(8.7442 0 0 -8.7442 -1783.5 293.31)" d="m201.38 35.434"/><path transform="matrix(8.7442 0 0 -8.7442 -1783.5 293.31)" d="m201.27 35.434h-0.11438"/><path transform="matrix(8.7442 0 0 -8.7442 -1783.5 293.31)" d="m201.38 35.434h0.6861"/><path transform="matrix(8.7442 0 0 -8.7442 -1783.5 293.31)" d="m202.3 35.434h1.7154l0.68616-0.11454 0.57178-0.45762 0.45745-0.57178 0.1126-0.70004"/><path transform="matrix(8.7442 0 0 -8.7442 -1783.5 293.31)" d="m201.27 35.434h0.11438"/><path transform="matrix(8.7442 0 0 -8.7442 -1783.5 293.31)" d="m201.84 31.76-1.945-0.11454"/><path transform="matrix(8.7442 0 0 -8.7442 -1783.5 293.31)" d="m201.38 35.434-1.3723 0.68616"/><path transform="matrix(8.7442 0 0 -8.7442 -1783.5 293.31)" d="m201.84 31.76h2.1728l0.68615 0.11454 0.57178 0.34308 0.45746 0.68616 0.11438 0.68616"/><path transform="matrix(8.7442 0 0 -8.7442 -1783.5 293.31)" d="m201.38 35.434"/></g><g transform="matrix(.99995 .0088199 -.0088199 .99995 -190.01 -17.952)" stroke-width="3.175"><path d="m166.9 0.43817c-0.2426 2e-4 -0.48536 3.9e-4 -0.72828 5.8e-4" fill="none" stroke="#000" stroke-linecap="square" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3.175"/></g><g fill="none" stroke="#000" stroke-linejoin="round"><g stroke-width=".36309"><path transform="matrix(8.7442 0 0 -8.7442 -1783.5 293.31)" d="m203.79 35.434h-2.4015"/><path transform="matrix(8.7442 0 0 -8.7442 -1783.5 293.31)" d="m199.9 34.948"/><path transform="matrix(8.7442 0 0 -8.7442 -1783.5 293.31)" d="m199.9 31.652"/><path transform="matrix(8.7442 0 0 -8.7442 -1783.5 293.31)" d="m199.9 36.082"/><path transform="matrix(8.7442 0 0 -8.7442 -1783.5 293.31)" d="m201.15 35.434-0.2287-0.11454-1.0292-0.34308"/><path transform="matrix(8.7442 0 0 -8.7442 -1783.5 293.31)" d="m204.01 35.434h0.11438"/><path transform="matrix(8.7442 0 0 -8.7442 -1783.5 293.31)" d="m203.79 35.434"/><path transform="matrix(8.7442 0 0 -8.7442 -1783.5 293.31)" d="m204.01 35.434"/><path transform="matrix(8.7442 0 0 -8.7442 -1783.5 293.31)" d="m203.67 35.434h0.11438"/></g><path d="m3.5 0c0 1.933-1.567 3.5-3.5 3.5s-3.5-1.567-3.5-3.5 1.567-3.5 3.5-3.5 3.5 1.567 3.5 3.5" stroke-width="3.175"/></g></g><path transform="matrix(2.3147 0 0 -2.3147 -1783.5 293.35)" d="m85.478 181.98v-0.10134h-1.5558l-0.19328-0.0966c-0.1063-0.0531-0.95715-0.35081-1.8908-0.66154l-1.6975-0.56495v-11.329l2.9513 0.17337c1.6232 0.0953 2.969 0.1843 2.9906 0.19767 0.02162 0.0134 2.0264 0.0231 4.4551 0.0217l4.4158-3e-3 2.3786 0.39976 1.9149 1.1498 1.5652 2.3521 0.19181 1.1486 0.19182 1.1486-0.1788 1.1317c-0.0983 0.62241-0.18908 1.1604-0.20164 1.1954-0.0126 0.0351-0.37086 0.49922-0.79622 1.0314l-0.77339 0.96763-0.96988 0.77586-0.96988 0.77585-1.1256 0.19228-1.1256 0.19227-9.5769 4e-3zm9.7796-4.1719c0.62393-0.13055 1.2175-0.594 1.5036-1.1739 0.08019-0.16257 0.16612-0.29558 0.19096-0.29558 0.03621 0 0.04515-0.13711 0.04515-0.69251 0-0.56979-0.0083-0.6925-0.04711-0.6925-0.02591 0-0.11292-0.13302-0.19335-0.29559-0.26555-0.53675-0.75297-0.94496-1.3472-1.1283-0.20538-0.0634-0.32692-0.0777-0.64184-0.0759-0.33533 2e-3 -0.42765 0.0155-0.67481 0.0993-1.2865 0.43622-1.8756 1.8629-1.2756 3.0896 0.27534 0.56297 0.87318 1.0338 1.4775 1.1636 0.28982 0.0622 0.67069 0.063 0.96275 2e-3z" fill="#ac9393"/><path transform="matrix(2.3147 0 0 -2.3147 -1783.5 293.35)" d="m80.141 183.25c0-0.94807 0.0089-1.1995 0.04223-1.1872 0.02322 9e-3 0.67701 0.22673 1.4528 0.48478l1.4106 0.46917-1.4275 0.71621c-0.78513 0.39392-1.4389 0.71705-1.4528 0.71806-0.01393 1e-3 -0.02533-0.53943-0.02533-1.201z" fill="#ac9393"/></g></g>';
  sDis += '</g></g></g>';
  return sDis;
}


function render_GOMITO_A_SPAZIO_60(pos, angolodeg)
{
  let sDis = '';
  sDis += '<g transform="translate('+pos.x+' '+pos.y+')">';
  sDis += '<g  transform="rotate('+parseFloat(angolodeg)+', 0, 0)" >';
  sDis += '<g  transform="translate(-2.88, -3.5)" >';
  sDis += '<g transform="translate(-128.43 -153.96)"><g transform="translate(78.462 6.3009)"><g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width=".254"><path transform="translate(1.2708e-6)" d="m52.258 151.15c0 0.33025 0.26772 0.59796 0.59796 0.59796s0.59796-0.26771 0.59796-0.59796c0-0.33024-0.26772-0.59795-0.59796-0.59795s-0.59796 0.26771-0.59796 0.59795"/><path transform="translate(1.2708e-6)" d="m56.037 150.47v-0.41275"/><path transform="translate(1.2708e-6)" d="m56.047 147.83c0-0.0263-0.0213-0.0476-0.0476-0.0476"/><path transform="translate(1.2708e-6)" d="m56 151.02c0.0263 0 0.0476-0.0213 0.0476-0.0476"/><path transform="translate(1.2708e-6)" d="m52.851 148.38v-0.48687"/><path transform="translate(1.2708e-6)" d="m52.83 148.39-0.0635 0.0106h-0.0741"/><path transform="translate(1.2708e-6)" d="m52.701 148.4c-1.4768 0.0832-2.6248 1.3169-2.6016 2.7958 0.0232 1.4789 1.2093 2.676 2.688 2.7128 1.4786 0.0368 2.7229-1.0998 2.8197-2.5757"/><path transform="translate(1.2708e-6)" d="m55.603 151.34 0.0106-0.0741 0.0317-0.0741 0.0423-0.0529 0.1058-0.0846 0.0741-0.0212"/><path transform="translate(1.2708e-6)" d="m52.952 147.78c-0.0555 0-0.10054 0.045-0.10054 0.10054"/><path transform="translate(1.2708e-6)" d="m52.851 148.38-0.0212 0.0106"/><path transform="translate(1.2708e-6)" d="m52.946 147.79h3.048"/><path transform="translate(1.2708e-6)" d="m55.867 151.03h0.127"/><path transform="translate(1.2708e-6)" d="m56.037 150.06"/><path transform="translate(1.2708e-6)" d="m56.037 150.04v-2.2226"/><path transform="translate(1.2708e-6)" d="m56.037 150.48v0.51859"/><path transform="translate(1.2708e-6)" d="m56.037 150.06v-0.0212"/><path transform="translate(1.2708e-6)" d="m56.037 150.48v-0.0106"/><path transform="translate(1.2708e-6)" d="m56.037 150.46v-0.40217"/><path transform="translate(1.2708e-6)" d="m56.037 147.83c0-0.0263-0.0213-0.0476-0.0476-0.0476"/><path transform="translate(1.2708e-6)" d="m55.989 151.02c0.0263 0 0.0476-0.0213 0.0476-0.0476"/><path transform="translate(1.2708e-6)" d="m52.851 148.38v-0.48687"/><path transform="translate(1.2708e-6)" d="m52.83 148.39-0.0635 0.0106h-0.0741"/><path transform="translate(1.2708e-6)" d="m52.701 148.39c-1.4768 0.0832-2.6248 1.3169-2.6016 2.7958 0.0232 1.4789 1.2093 2.676 2.688 2.7128 1.4786 0.0368 2.7229-1.0998 2.8197-2.5757"/><path transform="translate(1.2708e-6)" d="m55.603 151.33 0.0106-0.0635 0.0317-0.0741 0.0423-0.0529 0.1058-0.0846 0.0635-0.0212"/><path transform="translate(1.2708e-6)" d="m52.952 147.78c-0.0555 0-0.10054 0.045-0.10054 0.10054"/><path transform="translate(1.2708e-6)" d="m52.851 148.38-0.0212 0.0106"/><path transform="translate(1.2708e-6)" d="m52.946 147.79h3.0374"/><path transform="translate(1.2708e-6)" d="m55.857 151.03h0.127"/><path transform="translate(1.2708e-6)" d="m56.037 150.06"/><path transform="translate(1.2708e-6)" d="m56.037 150.04v-2.2226"/><path transform="translate(1.2708e-6)" d="m56.037 150.48v0.51859"/><path transform="translate(1.2708e-6)" d="m56.037 150.06v-0.0212"/><path transform="translate(1.2708e-6)" d="m56.037 150.48v-0.0212"/><path transform="translate(1.2708e-6)" d="m53.164 150.75c-0.0359-0.0279-0.0754-0.0507-0.11749-0.068"/><path transform="translate(1.2708e-6)" d="m53.047 150.68c-0.24468-0.1003-0.52523 6e-3 -0.64187 0.24342-0.11662 0.23733-0.0294 0.52444 0.19944 0.65686 0.2289 0.13242 0.52124 0.0649 0.66885-0.15454 0.1476-0.21941 0.1-0.51565-0.10893-0.67776"/></g><path d="m51.836 153.49c-0.52709-0.23528-1.0716-0.8265-1.3293-1.4433-0.62173-1.4884 0.37981-3.1563 2.0642-3.4377 0.35263-0.0589 0.47823-0.15168 0.51042-0.37701 0.04109-0.28759 0.09538-0.29888 1.4366-0.29888h1.3939v1.4378c0 1.2569-0.03127 1.4574-0.2485 1.593-0.13805 0.0862-0.28526 0.38263-0.33121 0.66691-0.24561 1.5196-2.0761 2.493-3.4962 1.8591zm1.5597-1.769c0.13441-0.12164 0.24438-0.36218 0.24438-0.53454 0-0.38352-0.43914-0.84792-0.80181-0.84792-0.34418 0-0.80181 0.45763-0.80181 0.80181 0 0.35359 0.46102 0.80181 0.82469 0.80181 0.15959 0 0.40013-0.0995 0.53454-0.22116z" fill="#c8b7b7"/></g></g>';
  sDis += '</g></g></g>';
  return sDis;
}

function render_GOMITO_A_SPAZIO_75(pos, angolodeg)
{
  let sDis = '';
  sDis += '<g transform="translate('+pos.x+' '+pos.y+')">';
  sDis += '<g  transform="rotate('+parseFloat(angolodeg)+', 0, 0)" >';
  sDis += '<g  transform="translate(-3.71, -3.9)" >';
  sDis += '<g transform="translate(-91.698 -133.66)"><g transform="matrix(5.4002 0 0 5.4002 -203.89 -734.4)"><g fill="none" stroke="#000" stroke-linecap="square" stroke-linejoin="round" stroke-miterlimit="10" stroke-width=".067204"><path d="m56.295 161.2v0.1482"/><path d="m56.295 161.22v-0.0212 0.14817"/><path d="m56.295 161.2"/><path d="m56.295 161.35"/><path d="m56.295 160.78v0.42337"/><path d="m56.295 161.47v-0.1271"/><path d="m56.295 161.35v-0.1482h-0.16933l-0.04233 0.0212-0.02117 0.0212-0.02117 0.0423 0.02117 0.0212 0.0635 0.0212 0.16933 0.0212"/><path d="m56.019 161.43v-0.0212"/><path d="m55.342 160.84-0.16933 0.0212-0.16933 0.0847-0.127 0.127-0.08467 0.16934-0.02117 0.16933 0.02117 0.1905 0.0635 0.16933 0.127 0.127 0.14817 0.10584 0.16933 0.0635h0.1905l0.16933-0.0423 0.14817-0.10583 0.127-0.127 0.0635-0.16933 0.02117-0.1905"/><path d="m55.342 160.84h0.04233"/><path d="m55.363 160.84"/><path d="m55.342 160.84v-0.0423l0.02117-0.0212h0.93133"/><path d="m56.295 161.47"/><path d="m56.083 161.47h0.21167"/><path d="m55.363 162.13"/><path d="m55.384 162.13"/><path d="m55.363 162.09"/></g><g transform="matrix(.018992 .0093442 .0093442 -.018992 55.395 161.4)" stroke-linecap="square" stroke-miterlimit="10" stroke-width="3.175"><path d="m-3.5 0c0-1.933 1.567-3.5 3.5-3.5s3.5 1.567 3.5 3.5-1.567 3.5-3.5 3.5-3.5-1.567-3.5-3.5" fill="none" stroke="#000" stroke-linecap="square" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3.175"/></g><path d="m55.222 162c-0.08948-0.0342-0.19613-0.10855-0.27955-0.19487-0.04955-0.0513-0.06168-0.0705-0.08595-0.13627-0.03728-0.10102-0.05102-0.22195-0.03794-0.33378 0.02014-0.17209 0.13686-0.3275 0.304-0.40475 0.07065-0.0327 0.09011-0.0375 0.1902-0.0475l0.1115-0.0111v-0.0576h0.83077v0.3498h-0.07031c-0.10307 0-0.16022 0.0355-0.18017 0.11198-0.0072 0.0277 0.02383 0.059 0.07465 0.0752 0.03198 0.0102 0.14738 0.0314 0.17095 0.0314 0.0027 0 0.0049 0.0118 0.0049 0.0262v0.0262h-0.10108c-0.06192 0-0.09909-3e-3 -0.09593-8e-3 0.0028-5e-3 0.0026-0.0184-4.31e-4 -0.0306-0.0047-0.0189-0.01055-0.0223-0.0382-0.0223h-0.03261l-0.01128 0.11587c-0.01617 0.16602-0.05154 0.26076-0.12591 0.3372-0.02952 0.0303-0.08713 0.0793-0.12801 0.10886-0.09866 0.0713-0.17757 0.0941-0.32356 0.0935-0.09221-3.4e-4 -0.10684-3e-3 -0.17604-0.0292zm0.25226-0.52469c0.02436-0.0266 0.02872-0.0379 0.02872-0.0745 0-0.0336-5e-3 -0.0491-0.02242-0.0698-0.06536-0.0777-0.1962-0.0316-0.1962 0.069 0 0.10181 0.12148 0.15 0.1899 0.0753z" fill="#ac9393" stroke-width=".048972"/><path d="m56.18 161.29c-0.01443-2e-3 -0.04136-7e-3 -0.05984-0.0124-0.03253-9e-3 -0.03312-0.01-0.01832-0.0262 0.01263-0.014 0.0272-0.0169 0.08389-0.0169h0.0686v0.0306c0 0.033-0.0015 0.0335-0.07433 0.0249z" fill="#ac9393" stroke-width=".048972"/></g></g>';
  sDis += '</g></g></g>';
  return sDis;
}

function render_GOMITO_B_SPAZIO_75(pos, angolodeg)
{
  let sDis = '';
  sDis += '<g transform="translate('+pos.x+' '+pos.y+')">';
  sDis += '<g  transform="rotate('+parseFloat(angolodeg)+', 0, 0)" >';
  sDis += '<g  transform="translate(-3.711, -3.8)" >';
  sDis += '<g transform="translate(-71.824 -163.16)"><g transform="matrix(.99952 0 0 .99952 63.561 125.33)"><g fill="none" stroke="#000" stroke-linecap="square" stroke-linejoin="round" stroke-miterlimit="10" stroke-width=".36309"><path d="m17.141 40.806"/><path d="m9.0203 40.212-0.34308 0.68616-0.11438 0.80048-0.11438 0.68616 0.2287 0.80053 0.34308 0.68616 0.45746 0.57178 0.57178 0.45762 0.68616 0.34308"/><path d="m11.992 38.05-0.91486 0.11454-0.91486 0.45762-0.68616 0.68616-0.45746 0.91491-0.11438 0.91486 0.11438 1.0292 0.34308 0.91486 0.68616 0.68616 0.80053 0.57183 0.91486 0.34308h1.0292l0.91486-0.22854 0.80053-0.57178 0.68616-0.68616 0.34308-0.91486 0.10173-0.85219"/><path d="m11.992 38.05h0.2287"/><path d="m12.105 38.05"/><path d="m17.141 41.616"/><path d="m17.141 42.373"/><path d="m17.141 41.616"/><path d="m17.141 42.373"/><path d="m17.141 41.454"/><path d="m17.141 41.616h-0.91486l-0.2287 0.11454"/><path d="m15.995 41.724h-0.11438l-0.11438 0.22854 0.11438 0.22854 0.34308 0.22854h0.91486"/><path d="m15.995 41.454h-0.11438l-0.11438 0.22854"/><path d="m15.768 41.724h-0.11438"/><path d="m15.995 41.454h1.1436"/><path d="m12.105 45.02"/><path d="m12.219 45.02"/><path d="m12.105 45.02 0.11438 0.11454 4.921 0.09795"/><path d="m15.65 41.724"/></g><g transform="matrix(-.00095376 .11436 .11436 .00095376 17.081 41.778)" stroke-linecap="square" stroke-miterlimit="10" stroke-width="3.175"><path d="m-2.5 0c0-0.26564 1.0386-0.48491 2.3649-0.49927" fill="none" stroke="#000" stroke-linecap="square" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3.175"/></g><g fill="none" stroke="#000" stroke-linecap="square" stroke-linejoin="round" stroke-miterlimit="10" stroke-width=".36309"><path d="m17.141 41.724v2.4015"/><path d="m17.141 44.318v0.91486"/><path d="m11.306 44.588"/><path d="m11.306 44.588"/><path d="m10.94 45.261 0.25399-0.71145"/><path d="m12.105 44.804"/></g><g transform="matrix(.10261 .050485 .050485 -.10261 12.278 41.076)" stroke-linecap="square" stroke-miterlimit="10" stroke-width="3.175"><path d="m-3.5 0c0-1.933 1.567-3.5 3.5-3.5s3.5 1.567 3.5 3.5-1.567 3.5-3.5 3.5-3.5-1.567-3.5-3.5" fill="none" stroke="#000" stroke-linecap="square" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3.175"/></g><g fill="#ac9393"><path transform="matrix(.26471 0 0 .26471 -.35558 -.8772)" d="m56.216 173.27c-7.1685-0.15171-8.3763-0.19737-8.5002-0.32135-0.12898-0.12898-0.01893-0.14451 1.0243-0.14451 1.072 0 1.3154-0.0367 2.9384-0.44278l1.7696-0.44279 1.6444-1.1724c1.2967-0.92448 1.9218-1.4521 2.9563-2.4953l1.3119-1.3229 1.4038-3.7654 1.6097 1.0902 3.0097 0.0646v9.1557l-0.40607-0.0131c-0.22334-7e-3 -4.1662-0.0926-8.7618-0.1899z"/><path transform="matrix(.26471 0 0 .26471 -.35558 -.8772)" d="m62.403 162.49c-0.74896-0.47036-0.81543-0.8558-0.14822-0.85951 0.16019-8.9e-4 0.26275-0.0534 0.26275-0.13456 0-0.20761 0.22404-0.24909 1.3455-0.24909h1.0432v0.28664c0 0.24205 0.03716 0.28664 0.23887 0.28664 0.22294 0 0.23887 0.0318 0.23887 0.47773v0.47773l-1.266-2e-3c-1.2354-2e-3 -1.2768-9e-3 -1.7149-0.28377z"/><path transform="matrix(.26471 0 0 .26471 -.35558 -.8772)" d="m40.779 172.83c-3.2008-1.6493-5.2983-4.2845-6.364-7.9958l-0.40277-1.4026 0.17466-1.1153c0.26113-1.6675 0.28437-1.698 0.40731-0.5334 0.09646 0.91373 0.19392 1.2664 0.78966 2.8578l0.67962 1.8154 1.3556 1.3664c1.0653 1.0738 1.7009 1.6136 2.9682 2.5208 0.88697 0.63493 1.7623 1.2004 1.9452 1.2565 0.18289 0.0561 0.35122 0.15076 0.37406 0.2103 0.05422 0.14131-0.47487 1.6004-0.59278 1.6347-0.04981 0.0145-0.65045-0.26214-1.3348-0.61475z"/></g></g></g>';
  sDis += '</g></g></g>';
  return sDis;
}


function render_GOMITO_B_SPAZIO_60(pos, angolodeg)
{
  let sDis = '';
  sDis += '<g transform="translate('+pos.x+' '+pos.y+')">';
  sDis += '<g  transform="rotate('+parseFloat(angolodeg)+', 0, 0)" >';
  sDis += '<g  transform="translate(-1.15, -1)" >';
  sDis += '<g transform="translate(179.94 -213.25)"><g transform="rotate(-3.3773 -345.4 2872.4)"><g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width=".254"><path d="m-23.464 230.97-0.01054 0.0423"/><path d="m-23.475 231.01-0.18984 0.44479-0.01055 0.0317"/><path d="m-23.661 231.47c-5e-3 0.0118-5e-3 0.0251 5.15e-4 0.0368 5e-3 0.0117 0.01463 0.0209 0.02654 0.0255"/><path d="m-22.603 231.76c0.0127 6.1e-4 0.02519-4e-3 0.03458-0.0126 9e-3 -9e-3 0.01487-0.0207 0.01535-0.0334"/><path d="m-23.636 231.54c0.33184 0.1277 0.68194 0.20156 1.0371 0.21882"/><path d="m-23.034 228.41c4.94e-4 0.33025 0.26861 0.59756 0.59885 0.59707 0.33024-5e-4 0.59756-0.26861 0.59706-0.59886-4.94e-4 -0.33024-0.26861-0.59755-0.59885-0.59705-0.33024 4.9e-4 -0.59756 0.2686-0.59706 0.59884"/><path d="m-19.286 229.61 0.01-0.40217"/><path d="m-19.256 228.68c9.11e-4 -0.0263-0.01967-0.0483-0.04597-0.0492"/><path d="m-19.406 231.87c0.0263 8.8e-4 0.04827-0.0197 0.04923-0.046"/><path d="m-22.5 231.77 3.0799 0.11181"/><path d="m-19.51 228.63 0.2011 0.0103"/><path d="m-22.553 231.72-3.2e-5 -0.0212 0.02049-0.47628-1.6e-5 -0.0106"/><path d="m-22.543 231.72c-8.8e-4 0.0263 0.01977 0.0483 0.04597 0.0492"/><path d="m-19.563 228.68 3.2e-5 0.0212-0.01054 0.0423 9.5e-5 0.0635-0.0105 0.0635"/><path d="m-20.681 230.71c0.58985-0.44991 0.98443-1.1091 1.1023-1.8415"/><path d="m-20.692 230.71-0.16915 0.12725-0.08464 0.0424-0.03167 0.0212-0.03177 0.0212"/><path d="m-21.523 231.16c0.18026-0.06 0.35418-0.13752 0.51924-0.23156"/><path d="m-19.503 228.63c-0.0252-8.6e-4 -0.04667 0.0181-0.04904 0.0432"/><path d="m-19.563 228.67-0.0423 6e-5"/><path d="m-19.276 229.2-3.1e-5 -0.0212"/><path d="m-19.297 229.63 0.01057-0.0212"/><path d="m-19.276 229.18 0.01016-0.29635"/><path d="m-19.286 229.61"/><path d="m-19.256 228.66-0.01027 0.22226"/><path d="m-19.367 231.85-3.2e-5 -0.0212 0.03063-0.78322 0.01022-0.25401 0.03006-1.1642"/><path d="m-23.464 230.97-0.02114 0.0423"/><path d="m-23.486 231.01-0.17926 0.44477-0.01057 0.0212"/><path d="m-23.661 231.47c-5e-3 0.0118-5e-3 0.0251 5.15e-4 0.0368 5e-3 0.0117 0.01463 0.0209 0.02654 0.0255"/><path d="m-22.603 231.76c0.0127 6.1e-4 0.02519-4e-3 0.03458-0.0126 9e-3 -9e-3 0.01487-0.0207 0.01535-0.0334"/><path d="m-23.636 231.54c0.33184 0.1277 0.68194 0.20156 1.0371 0.21882"/><path d="m-19.297 229.61 0.0206-0.40219"/><path d="m-19.256 228.68c9.11e-4 -0.0263-0.01967-0.0483-0.04597-0.0492"/><path d="m-19.417 231.87c0.0263 8.8e-4 0.04827-0.0197 0.04923-0.046"/><path d="m-22.511 231.77 3.0905 0.10122"/><path d="m-19.51 228.63 0.2011 0.0103"/><path d="m-22.553 231.72-3.2e-5 -0.0212 0.02049-0.47628-1.6e-5 -0.0106"/><path d="m-22.543 231.72c-8.8e-4 0.0263 0.01977 0.0483 0.04597 0.0492"/><path d="m-19.563 228.68 3.2e-5 0.0212-0.01054 0.0423-0.01052 0.0529-0.01049 0.0741"/><path d="m-20.681 230.7c0.58985-0.44991 0.98443-1.1091 1.1023-1.8415"/><path d="m-20.692 230.71-0.16917 0.11667-0.08462 0.053-0.04227 0.0213-0.02117 0.0212"/><path d="m-21.523 231.15c0.18026-0.06 0.35418-0.13753 0.51924-0.23157"/><path d="m-19.513 228.63c-0.0252-8.6e-4 -0.04667 0.0181-0.04904 0.0432"/><path d="m-19.276 229.2-3.1e-5 -0.0212"/><path d="m-19.297 229.63-3.2e-5 -0.0212"/><path d="m-19.276 229.18 0.01016-0.29635"/><path d="m-19.297 229.61"/><path d="m-19.256 228.66-0.01027 0.22226"/><path d="m-19.367 231.85-3.2e-5 -0.0212 0.03063-0.78322 0.01022-0.25401 0.03006-1.1642"/><path d="m-22.129 228c-0.03594-0.0279-0.07548-0.0506-0.11759-0.0678"/><path d="m-22.246 227.93c-0.24483-0.0999-0.52522 7e-3 -0.6415 0.24438-0.11626 0.23751-0.02862 0.52448 0.20042 0.65656 0.2291 0.13208 0.52134 0.0641 0.66862-0.15554 0.14727-0.21963 0.09923-0.5158-0.10994-0.67759"/></g><path d="m-21.114 231.6c-0.69831-0.0444-1.1019-0.0924-0.89687-0.10672 0.75178-0.0527 1.8933-0.88093 2.3425-1.6995 0.11672-0.21274 0.14794-0.0418 0.15248 0.83499 0.0042 0.80832-0.03886 1.0957-0.16137 1.0771-0.09189-0.014-0.73842-0.0616-1.4367-0.1059z" fill="#c8b7b7"/><path d="m-22.905 231.59c-0.01838-6e-3 -0.15056-0.0371-0.29373-0.0691-0.14317-0.0319-0.26715-0.0691-0.27552-0.0826-0.0084-0.0135 8e-3 -0.0803 0.03636-0.1485 0.04284-0.10294 0.06401-0.12055 0.12491-0.10383 0.04033 0.011 0.19739 0.0448 0.34903 0.0749l0.2757 0.0548 2.17e-4 0.14512c2.05e-4 0.13667-0.0051 0.14496-0.09166 0.14261-0.05053-9.2e-4 -0.10692-8e-3 -0.1253-0.0135z" fill="#c8b7b7"/><path d="m-21.523 231.16-0.47703 0.0942-0.31892-0.0119-0.21403-0.0295" fill="none" stroke="#000" stroke-width=".26458px"/><path d="m-22.533 231.21-0.38673-0.0798-0.24222-0.0585-0.30279-0.10367" fill="none" stroke="#000" stroke-width=".26458px"/></g></g>';
  sDis += '</g></g></g>';
  return sDis;
}



function render_PROFILO_SPAZIO_60(pos, angolodeg, lunghezza, offy=0)
{
  let spessore_profilo = 3.36;
  let spostaY = spessore_profilo;
  if(offy!=0) spostaY = 0.2;
  let sDis = '';
  sDis += '<g transform="translate('+pos.x+' '+pos.y+')">';
  sDis += '<g  transform="rotate('+parseFloat(angolodeg)+', 0, 0)" >';
  sDis += '<g transform="translate(0 '+parseFloat(-spostaY)+')">';
  sDis += '<rect x="0" y="0" width="'+parseFloat(lunghezza)+'" height="'+parseFloat(spessore_profilo)+'" style="fill:#ac9393;stroke:black;stroke-width:.26458px;fill-opacity:0.9;stroke-opacity:0.9" />';
  sDis += '</g></g></g>';
  return sDis;
}

function render_PROFILO_SPAZIO_75(pos, angolodeg, lunghezza, offy=0)
{
  let spessore_profilo = 4.2; //4.8
  let spostaY = 1.65;//5.775; //3.6
  if(offy!=0) spostaY = 0.6;
  let sDis = '';
  sDis += '<g transform="translate('+pos.x+' '+pos.y+')">';
  sDis += '<g  transform="rotate('+parseFloat(angolodeg)+', 0, 0)" >';
  sDis += '<g transform="translate(0 '+parseFloat(-spostaY)+')">';
  sDis += '<rect x="0" y="0" width="'+parseFloat(lunghezza)+'" height="'+parseFloat(spessore_profilo)+'" style="fill:#ac9393;stroke:black;stroke-width:.26458px;fill-opacity:0.9;stroke-opacity:0.9" />';
  sDis += '</g></g></g>';
  return sDis;
}

function render_BRACCIO_SPAZIO_60_generico(pos, aperturaX, L1, L2)
{
  let apertura = parseFloat(aperturaX);
  let deltaCx = parseFloat(L1-L2);
  let A = {x:0 , y:0};
  let C = {x:-deltaCx, y:apertura};
  //console.log('C: '+C.x+';'+C.y);
  let AC = calcolaDistanzaPunti(A, C);
  //console.log('AC: '+(AC));

  let phi_C = 1*Math.PI-calcolaAngoloVettore(C, A);
  //console.log('phi_C: '+inDeg(phi_C));

  let vAC   = calcolaVettore(AC, phi_C);


  let alpha = teoremaCosenoAngoloOpposto(L1, L2, AC, L2);
  //console.log('alpha: '+inDeg(alpha));

  let beta = teoremaCosenoAngoloOpposto(L1, L2, AC, AC);
  //console.log('beta: '+inDeg(beta));

  let gamma = teoremaCosenoAngoloOpposto(L1, L2, AC, L1);
  //console.log('gamma: '+inDeg(gamma));

  let phi_B = parseFloat(phi_C-alpha);
  //console.log('phi_B: '+inDeg(phi_B));
  let vAB   = calcolaVettore(L1, phi_B);
  let B     = somma2vettori(A, vAB);

  //console.log(B);

  let sDis = '';
  sDis += '<g transform="translate('+pos.x+' '+pos.y+')"> <g>';

  // profilo braccio lungo
  sDis += render_PROFILO_SPAZIO_60(B, inDeg(Math.PI-phi_B), L1);

  // profilo braccio corto
  sDis += render_PROFILO_SPAZIO_60(B, inDeg(Math.PI-phi_B+beta), L2, 1);


  // posiziono supporto braccio
  sDis += render_SUPPORTO_SPAZIO_60(A);

  // posiziono gomito A, NON ANCORA RUOTATO
  sDis += render_GOMITO_A_SPAZIO_60(B, inDeg(Math.PI-phi_B));

  // posiziono gomito B, NON ANCORA RUOTATO
  sDis += render_GOMITO_B_SPAZIO_60(B, inDeg(Math.PI-phi_B+beta));

  // posiziono puntale, NON ANCORA RUOTATO
  //sDis += render_PUNTALE_SPAZIO_60(C);
  sDis += render_PUNTALE_SPAZIO_75_B(C, inDeg(Math.PI-phi_B+beta));
  sDis += render_PUNTALE_SPAZIO_75_A(C, 0);

  //sDis += '<circle id="testB" cx="'+A.x+'" cy="'+A.y+'" r=.1 stroke="black" stroke-width=".1" fill="green" />';
  //sDis += '<circle id="testB" cx="'+B.x+'" cy="'+B.y+'" r=.1 stroke="black" stroke-width=".1" fill="blue" />';
  //sDis += '<circle id="testB" cx="'+C.x+'" cy="'+C.y+'" r=.1 stroke="black" stroke-width=".1" fill="brown" />';

  //sDis += '<circle id="testB" cx="'+vAC.x+'" cy="'+vAC.y+'" r=.1 stroke="black" stroke-width=".1" fill="red" />';


  sDis += '</g></g>';
  return sDis;
}


function render_BRACCIO_SPAZIO_75_generico(pos, aperturaX, L1, L2)
{
  let apertura = parseFloat(aperturaX-4.5);
  let deltaCx = parseFloat(L1-L2);
  let h1 = 2.5;
  let L1s = Math.sqrt(L1*L1+h1*h1);
  let epsilon = Math.atan(h1/L1);

  let A = {x:0 , y:0};
  let C = {x:-deltaCx, y:apertura};
  let Ct= {x:-deltaCx, y:aperturaX};
  //console.log('C: '+C.x+';'+C.y);
  let AC = calcolaDistanzaPunti(A, C);
  //console.log('AC: '+(AC));

  let phi_C = 1*Math.PI-calcolaAngoloVettore(C, A);
  //console.log('phi_C: '+inDeg(phi_C));

  let vAC   = calcolaVettore(AC, phi_C);


  let alpha = teoremaCosenoAngoloOpposto(L1s, L2, AC, L2);
  //console.log('alpha: '+inDeg(alpha));

  let beta = teoremaCosenoAngoloOpposto(L1s, L2, AC, AC);
  //console.log('beta: '+inDeg(beta));

  let gamma = teoremaCosenoAngoloOpposto(L1s, L2, AC, L1);
  //console.log('gamma: '+inDeg(gamma));

  let phi_Bs = parseFloat(phi_C-alpha-epsilon); // per inclinazione del primo braccio
  let phi_B  = parseFloat(phi_C-alpha);         // per posizione cerniera

  //console.log('phi_B: '+inDeg(phi_B));
  let vAB   = calcolaVettore(L1s, 1*(phi_B));  // per posizione cerniera
  let vABs  = calcolaVettore(L1, 1*(phi_B-epsilon)); // per rotazione primo braccio

  let B     = somma2vettori(A, vAB);
  let Bs    = somma2vettori(A, vABs);


//  console.log(B);

  let sDis = '';
  sDis += '<g transform="translate('+pos.x+' '+pos.y+')"> <g>';

  // profilo braccio lungo
  sDis += render_PROFILO_SPAZIO_75(Bs, inDeg(Math.PI-phi_Bs), L1);

  // profilo braccio corto
  sDis += render_PROFILO_SPAZIO_75(B, inDeg(Math.PI-phi_B+beta), L2, 1);


  // posiziono supporto braccio
  sDis += render_SUPPORTO_SPAZIO_75(A);

  sDis += render_PROFILO_SU_CALCAGNO_SPAZIO_75(A, inDeg(Math.PI-phi_B));

  // posiziono gomito A, NON ANCORA RUOTATO
  sDis += render_GOMITO_A_SPAZIO_75(B, inDeg(Math.PI-phi_Bs));

  // posiziono gomito B, NON ANCORA RUOTATO
  sDis += render_GOMITO_B_SPAZIO_75(B, inDeg(Math.PI-phi_B+beta));

  // posiziono puntale, NON ANCORA RUOTATO
  sDis += render_PUNTALE_SPAZIO_75_B(C, inDeg(Math.PI-phi_B+beta));
  sDis += render_PUNTALE_SPAZIO_75_A(C, 0);


  //sDis += '<circle id="testB" cx="'+A.x+'" cy="'+A.y+'" r=.6 stroke="black" stroke-width=".1" fill="green" />';
  //sDis += '<circle id="testB" cx="'+B.x+'" cy="'+B.y+'" r=.6 stroke="black" stroke-width=".1" fill="blue" />';
  //sDis += '<circle id="testB" cx="'+Bs.x+'" cy="'+Bs.y+'" r=.6 stroke="black" stroke-width=".1" fill="yellow" />';
  //sDis += '<circle id="testB" cx="'+C.x+'" cy="'+C.y+'" r=.6 stroke="black" stroke-width=".1" fill="brown" />';
  //sDis += '<circle id="testB" cx="'+Ct.x+'" cy="'+Ct.y+'" r=.6 stroke="black" stroke-width=".1" fill="yellow" />';

  //sDis += '<circle id="testB" cx="'+vAC.x+'" cy="'+vAC.y+'" r=.6 stroke="black" stroke-width=".1" fill="red" />';


  sDis += '</g></g>';
  return sDis;
}

let APERTURA = 35;//35;

function renderBRACCIO60(pos, verso, sporgenza)
{
  let L1, L2;
  switch(sporgenza)
  {
    case 150:
      L1 = 75.5;
      L2 = 60.0;
    break;
    case 200:
      L1 = 99.0;
      L2 = 85.5;
    break;
    case 225:
      L1 = 112.0;
      L2 = 97.5;
    break;
    case 250:
      L1 = 124.5;
      L2 = 110.0;
    break;
    case 300:
      L1 = 149.0;
      L2 = 134.5;
    break;
  }
  let sDis = '';
  sDis += '<g transform="translate('+pos.x+' '+(pos.y)+')"> <g>';
  sDis += '<g transform="scale('+verso+', 1)"> <g>';
  sDis += render_BRACCIO_SPAZIO_60_generico({x:0, y:10.5}, APERTURA, L1, L2);
  sDis += '</g></g></g></g>';
//  console.log(sDis);
  return sDis;
}


function renderBRACCIO75(pos, verso, sporgenza)
{
  let L1, L2;
  switch(sporgenza)
  {
    case 200:
      L1 = 100.9;
      L2 = 85.5;
    break;
    case 250:
      L1 = 124.9;
      L2 = 112.5;
    break;
    case 300:
      L1 = 148.9;
      L2 = 137.5;
    break;
    case 350:
      L1 = 162.5;
      L2 = 137.9;
    break;
    case 400:
      L1 = 198.8;
      L2 = 187.5;
    break;
  }
  let sDis = '';
  sDis += '<g transform="translate('+pos.x+' '+(pos.y)+')"> <g>';
  sDis += '<g transform="scale('+verso+', 1)"> <g>';
  sDis += render_BRACCIO_SPAZIO_75_generico({x:0, y:14}, APERTURA, L1, L2);
  sDis += '</g></g></g></g>';
//  console.log(sDis);
  return sDis;
}




function calcolaVettore(modulo, fase)
{
  return {x:parseFloat(1*modulo*Math.cos(fase)), y:parseFloat(1*modulo*Math.sin(-fase))};
}

function somma2vettori(v1, v2)
{
  return {x:parseFloat(v1.x+v2.x), y:parseFloat(v1.y+v2.y)};
}

function calcolaDistanzaPunti(puntoA, puntoB)
{
  //console.log('puntoA: '+puntoA.x+';'+puntoA.y);
  //console.log('puntoB: '+puntoB.x+';'+puntoB.y);
  let x  = parseFloat( Math.sqrt( Math.pow((puntoB.x-puntoA.x)*1,2) + Math.pow((puntoB.y-puntoA.y)*1,2) ) );
  return x;
}

function calcolaAngoloVettore(puntoA, puntoB)
{
  let x = parseFloat(Math.atan2(1*(puntoB.y-puntoA.y)*1, 1*(puntoB.x-puntoA.x)*1));
  //console.log('x: '+inDeg(x));
  return x;
}

function inDeg(angleRAD) {
  return parseFloat(angleRAD * 180 / Math.PI);
}

function inRad(angleDEG) {
  return parseFloat(angleDEG / 180 * Math.PI);
}

function teoremaCosenoAngoloOpposto(L1, L2, L3, Lx)
{
  //console.log('L1:'+ L1+' | L2:'+L2+' | L3:'+L3+' | Lx:'+Lx);
  if(Lx==L1) return teoremaCosenoAngolo(Lx, L2, L3);
  if(Lx==L2) return teoremaCosenoAngolo(Lx, L1, L3);
  if(Lx==L3) return teoremaCosenoAngolo(Lx, L2, L1);
  //console.log('..non trovato');
  return 0;
}

function teoremaCosenoAngolo(L1, L2, L3)
{
  //console.log('L1:'+ L1+' | L2:'+L2+' | L3:'+L3);
  let numeratore   = parseFloat( Math.pow(L2,2)+ Math.pow(L3,2) - Math.pow(L1, 2));
  //console.log('numeratore: '+numeratore);
  let denominatore = parseFloat(2*L2*L3);
  //console.log('denominatore: '+denominatore);
  return parseFloat(Math.acos(numeratore/denominatore));
}

function disegna_test()
{
  let disegno = new Object();
  disegno.svg           = '';
  //////////////////////////////////////////////////////

  let sLARGHEZZA_V = 200;
  let sALTEZZA_V   = sLARGHEZZA_V*350.8/248; // proporzione per foglio A4

  let sLARGHEZZA = sALTEZZA_V;
  let sALTEZZA   = sLARGHEZZA_V;

  let sSVGh = '';
  sSVGh+='<svg id="svg-POSIZIONAMENTO" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 '+sLARGHEZZA+' '+sALTEZZA+'">';

  let sDis = '';
  //sDis += render_BRACCIO_SPAZIO_60_generico({x:200, y:30}, 15, 99.08, 85.535);
  //sDis += render_BRACCIO_SPAZIO_75_generico({x:200, y:130}, 55, 99.08, 85.535);
  sDis += renderBRACCIO60({x:200, y:130}, 1, 200, 55);
  let sSVGf = '';
  sSVGf+='</svg>';

  disegno.svg =  sSVGh  + sDis + sSVGf;
  return disegno;
}
