export {C_2323 as tenseClass};

export {creaInputFor_2323 as calcTenseInput};

class C_2323 {
    constructor(input) {
      this.input              = this.cloneMyObj(input);
      this.extra_var          = this.cloneMyObj(this.crea_extra_var());
  
      this.update_extra_var();
      this.LISTA_BOM_TOTALE   = [];
  
      this.FISHER_EL          = this.cloneMyObj(this.crea_FISHER_ELEM());
      this.FISHER_COD         = this.cloneMyObj(this.crea_FISHER_COD());
  
      this.CreaListaTotale();
    }
  
    cloneMyObj(obj){
      return JSON.parse(JSON.stringify(obj))
    };
  
  
  
    
  
  up2date_SUPPORTI_GUIDA(){
  let out = null;
  
  var tot = 0;
  
  switch (true) {
      case (this.input.SPORGENZA<=200):
          tot = 2;
          break;
      case (this.input.SPORGENZA<=300):
          tot = 3;
          break;
      case (this.input.SPORGENZA<=400):
          tot = 4;
          break;
      case (this.input.SPORGENZA<=500):
          tot = 5;
          break;
      case (this.input.SPORGENZA<=550):
          tot = 6;
          break;
      case (this.input.SPORGENZA<=600):
          tot = 7;
          break;
      default:
          tot = 8;
          break;
  }
    
  
  // mandatory output ----------------------------------- 
  out = tot;
  
  
  this.extra_var.SUPPORTI_GUIDA       = out;
  }
  
  up2date_LARGHEZZA_VOLANT(){
  let out = null;
   var tmp = 0;
  
  if(this.input.ZIP=='NO')
      tmp = 10.1;
  else
      tmp = 14.5;
  
   out = this.input.LARGHEZZA - tmp;  
  this.extra_var.LARGHEZZA_VOLANT     = out;
  }
  
  up2date_TIPOLOGIA_SUPPORTO_GUIDA(){
  let out = null;
  /*this.input.VERSIONE_SUPPORTO 'HUNG'
  this.input.VERSIONE_SUPPORTO 'LAY - IN'
  this.input.TIPOLOGIA_SUPPORTO 'STANDARD'
  this.input.TIPOLOGIA_SUPPORTO 'NICHE'
  this.input.TIPOLOGIA_SUPPORTO 'MISALIGNED' */
  var prodotto = 0;
  var moltiplicando = 0;
  var moltiplicatore = 0;
  
  switch (this.input.VERSIONE_SUPPORTO) {
      case ('HUNG'):
          moltiplicando = 2;
          break;
      case ('LAY - IN'):
          moltiplicando = 3;
          break;
  }
  
  switch (this.input.TIPOLOGIA_SUPPORTO) {
      case ('STANDARD'):
          moltiplicatore = 5;
          break;
      case ('NICHE'):
          moltiplicatore = 7;
          break; 
      case ('MISALIGNED'):
          moltiplicatore = 11;
          break;
  }
  
  prodotto = moltiplicando * moltiplicatore;
  
  // mandatory output ----------------------------------- 
  out = prodotto;
  this.extra_var.TIPOLOGIA_SUPPORTO_GUIDA = out;
  }
  
  up2date_TIPOLOGIA_SUPPORTO_GUIDA_ACC(){
  let out = null;
  /*this.input.VERSIONE_SUPPORTO 'HUNG'
  this.input.VERSIONE_SUPPORTO 'LAY - IN'
  this.input.TIPOLOGIA_SUPPORTO 'STANDARD'
  this.input.TIPOLOGIA_SUPPORTO 'NICHE'
  this.input.TIPOLOGIA_SUPPORTO 'MISALIGNED' */
  var prodotto = 0;
  var moltiplicando = 0;
  var moltiplicatore = 0;
  
  switch (this.input.VERSIONE_SUPPORTO) {
      case ('HUNG'):
          moltiplicando = 2;
          break;
      case ('LAY - IN'):
          moltiplicando = 3;
          break;
  }
  
  if(this.input.ACCOPPIAMENTO == 'YES' )
      moltiplicatore = 13;
  else
      switch (this.input.TIPOLOGIA_SUPPORTO) {
          case ('STANDARD'):
              moltiplicatore = 5;
              break;
          case ('NICHE'):
              moltiplicatore = 7;
              break; 
          case ('MISALIGNED'):
              moltiplicatore = 11;
              break;
      }
  
  prodotto = moltiplicando * moltiplicatore;
  
  // mandatory output ----------------------------------- 
  out = prodotto;
  this.extra_var.TIPOLOGIA_SUPPORTO_GUIDA_ACC = out;
  }
  
  up2date_FORZATORE(){
  let out = null;
  if((this.input.GAMBE=='YES')&&(this.input.TIPO_GAMBA=='TELESCOPIC'))
      this.input.ACCOPPIAMENTO = 'NO';
    
  
  this.extra_var.FORZATORE            = out;
  }
  
  up2date_LARGHEZZA_TELO(){
  let out = null;
   var tmp = 0;
   var riduzione = 0.5;
  
  if(this.input.ZIP=='NO')
      tmp = 14.5;
  else
      tmp = 13.7;
  
   out = this.input.LARGHEZZA - tmp - riduzione;  
  this.extra_var.LARGHEZZA_TELO       = out;
  }
  
  up2date_LARGHEZZA_TELO_VOLANT(){
  let out = null;
   out = this.extra_var.LARGHEZZA_VOLANT - 8.2;
  this.extra_var.LARGHEZZA_TELO_VOLANT = out;
  }
  
  up2date_SPORGENZA_TELO(){
  let out = null;
     out = this.input.SPORGENZA + 31.5;     
  this.extra_var.SPORGENZA_TELO       = out;
  }
  
  up2date_SPORGENZA_TELO_VOLANT(){
  let out = null;
     out = this.input.ALTEZZA_VOLANT;
  this.extra_var.SPORGENZA_TELO_VOLANT = out;
  }
  
  crea_extra_var(){
    let out                        = {};
    out.SUPPORTI_GUIDA                  = null;
    out.LARGHEZZA_VOLANT                = null;
    out.TIPOLOGIA_SUPPORTO_GUIDA        = null;
    out.TIPOLOGIA_SUPPORTO_GUIDA_ACC    = null;
    out.FORZATORE                       = null;
    out.LARGHEZZA_TELO                  = null;
    out.LARGHEZZA_TELO_VOLANT           = null;
    out.SPORGENZA_TELO                  = null;
    out.SPORGENZA_TELO_VOLANT           = null;
  
    return out;
  }
  
  
    
  
  update_extra_var(){
    this.up2date_SUPPORTI_GUIDA();
    this.up2date_LARGHEZZA_VOLANT();
    this.up2date_TIPOLOGIA_SUPPORTO_GUIDA();
    this.up2date_TIPOLOGIA_SUPPORTO_GUIDA_ACC();
    this.up2date_FORZATORE();
    this.up2date_LARGHEZZA_TELO();
    this.up2date_LARGHEZZA_TELO_VOLANT();
    this.up2date_SPORGENZA_TELO();
    this.up2date_SPORGENZA_TELO_VOLANT();
  }
  
  
    
  crea_FISHER_ELEM(){
  
          let FISHER_EL = [
  {  'key': '0',  'rifcode': '272345',  'parent': '',  'parent_key': '',  'livello': '0',  'posizione': '01',  'tipo_kit': '4',  'funzione': {'codice': " /* pezzi = 1;  $*/  $pezzi = 0;$"} }, 
  {  'key': '0-0',  'rifcode': '111471',  'parent': '272345',  'parent_key': '0',  'livello': '1',  'posizione': '01',  'tipo_kit': '',  'funzione': {'codice': " pezzi = 1;  $"} }, 
  {  'key': '0-1',  'rifcode': '111464',  'parent': '272345',  'parent_key': '0',  'livello': '1',  'posizione': '02',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;$"} }, 
  {  'key': '0-2',  'rifcode': '146270',  'parent': '272345',  'parent_key': '0',  'livello': '1',  'posizione': '03',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 10;   $"} }, 
  {  'key': '0-3',  'rifcode': '146251',  'parent': '272345',  'parent_key': '0',  'livello': '1',  'posizione': '04',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 2;   $"} }, 
  {  'key': '0-4',  'rifcode': '140597',  'parent': '272345',  'parent_key': '0',  'livello': '1',  'posizione': '05',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 2;   $"} }, 
  {  'key': '0-5',  'rifcode': '160160',  'parent': '272345',  'parent_key': '0',  'livello': '1',  'posizione': '06',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;   $"} }, 
  {  'key': '0-6',  'rifcode': '111463',  'parent': '272345',  'parent_key': '0',  'livello': '1',  'posizione': '07',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 2;   $"} }, 
  {  'key': '0-7',  'rifcode': '111462',  'parent': '272345',  'parent_key': '0',  'livello': '1',  'posizione': '08',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;$"} }, 
  {  'key': '0-8',  'rifcode': '146431',  'parent': '272345',  'parent_key': '0',  'livello': '1',  'posizione': '09',  'tipo_kit': '',  'funzione': {'codice': "  pezzi = 8; $"} }, 
  {  'key': '0-9',  'rifcode': '111461',  'parent': '272345',  'parent_key': '0',  'livello': '1',  'posizione': '10',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;   $"} }, 
  {  'key': '0-10',  'rifcode': '290232',  'parent': '272345',  'parent_key': '0',  'livello': '1',  'posizione': '11',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;   $"} }, 
  {  'key': '0-11',  'rifcode': '131392',  'parent': '272345',  'parent_key': '0',  'livello': '1',  'posizione': '12',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;   $"} }, 
  {  'key': '0-12',  'rifcode': '111470',  'parent': '272345',  'parent_key': '0',  'livello': '1',  'posizione': '13',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;$"} }, 
  {  'key': '0-13',  'rifcode': '111060',  'parent': '272345',  'parent_key': '0',  'livello': '1',  'posizione': '14',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;$"} }, 
  {  'key': '0-14',  'rifcode': '131393',  'parent': '272345',  'parent_key': '0',  'livello': '1',  'posizione': '15',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;   $"} }, 
  {  'key': '0-15',  'rifcode': '146143',  'parent': '272345',  'parent_key': '0',  'livello': '1',  'posizione': '16',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 2;   $"} }, 
  {  'key': '0-16',  'rifcode': '131395',  'parent': '272345',  'parent_key': '0',  'livello': '1',  'posizione': '17',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;   $"} }, 
  {  'key': '1',  'rifcode': '272344',  'parent': '',  'parent_key': '',  'livello': '0',  'posizione': '02',  'tipo_kit': '4',  'funzione': {'codice': "if(this.input.ZIP == 'NO')$    pezzi = 0;$else$    pezzi = 2;$$"} }, 
  {  'key': '1-0',  'rifcode': '101037',  'parent': '272344',  'parent_key': '1',  'livello': '1',  'posizione': '01',  'tipo_kit': '',  'funzione': {'codice': " pezzi = 2;  $"} }, 
  {  'key': '1-1',  'rifcode': '101036',  'parent': '272344',  'parent_key': '1',  'livello': '1',  'posizione': '02',  'tipo_kit': '',  'funzione': {'codice': "  pezzi = 2;    $"} }, 
  {  'key': '1-2',  'rifcode': '111489',  'parent': '272344',  'parent_key': '1',  'livello': '1',  'posizione': '03',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 2;$"} }, 
  {  'key': '1-3',  'rifcode': '111466',  'parent': '272344',  'parent_key': '1',  'livello': '1',  'posizione': '04',  'tipo_kit': '',  'funzione': {'codice': " pezzi = 2;  $"} }, 
  {  'key': '1-4',  'rifcode': '131379',  'parent': '272344',  'parent_key': '1',  'livello': '1',  'posizione': '05',  'tipo_kit': '',  'funzione': {'codice': " pezzi = 2;  $"} }, 
  {  'key': '1-5',  'rifcode': '140783',  'parent': '272344',  'parent_key': '1',  'livello': '1',  'posizione': '06',  'tipo_kit': '',  'funzione': {'codice': " pezzi = 2;  $"} }, 
  {  'key': '1-6',  'rifcode': '146157',  'parent': '272344',  'parent_key': '1',  'livello': '1',  'posizione': '07',  'tipo_kit': '',  'funzione': {'codice': " pezzi = 12;  $"} }, 
  {  'key': '1-7',  'rifcode': '131399',  'parent': '272344',  'parent_key': '1',  'livello': '1',  'posizione': '08',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 2;   $"} }, 
  {  'key': '1-8',  'rifcode': '140600',  'parent': '272344',  'parent_key': '1',  'livello': '1',  'posizione': '09',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 4;   $"} }, 
  {  'key': '1-9',  'rifcode': '146436',  'parent': '272344',  'parent_key': '1',  'livello': '1',  'posizione': '10',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 4;   $"} }, 
  {  'key': '1-10',  'rifcode': '101033',  'parent': '272344',  'parent_key': '1',  'livello': '1',  'posizione': '11',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;   $"} }, 
  {  'key': '1-11',  'rifcode': '101032',  'parent': '272344',  'parent_key': '1',  'livello': '1',  'posizione': '12',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;   $"} }, 
  {  'key': '2',  'rifcode': '272346',  'parent': '',  'parent_key': '',  'livello': '0',  'posizione': '03',  'tipo_kit': '4',  'funzione': {'codice': "if(this.input.ZIP == 'NO')$    pezzi = 2;$else$    pezzi = 0;  $$"} }, 
  {  'key': '2-0',  'rifcode': '101038',  'parent': '272346',  'parent_key': '2',  'livello': '1',  'posizione': '01',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 2;$"} }, 
  {  'key': '2-1',  'rifcode': '122266',  'parent': '272346',  'parent_key': '2',  'livello': '1',  'posizione': '02',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 2;   $"} }, 
  {  'key': '2-2',  'rifcode': '111466',  'parent': '272346',  'parent_key': '2',  'livello': '1',  'posizione': '03',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 2;$"} }, 
  {  'key': '2-3',  'rifcode': '131379',  'parent': '272346',  'parent_key': '2',  'livello': '1',  'posizione': '04',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 2;$"} }, 
  {  'key': '2-4',  'rifcode': '146430',  'parent': '272346',  'parent_key': '2',  'livello': '1',  'posizione': '05',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 2;   $"} }, 
  {  'key': '2-5',  'rifcode': '146157',  'parent': '272346',  'parent_key': '2',  'livello': '1',  'posizione': '06',  'tipo_kit': '',  'funzione': {'codice': "   pezzi = 4;      $"} }, 
  {  'key': '3',  'rifcode': 'GR0343',  'parent': '',  'parent_key': '',  'livello': '0',  'posizione': 'GR0343',  'tipo_kit': '6',  'funzione': {'codice': "  /*pezzi = 1;  */  $  pezzi = 0;$"} }, 
  {  'key': '3-0',  'rifcode': '010634',  'parent': 'GR0343',  'parent_key': '3',  'livello': '1',  'posizione': '01',  'tipo_kit': '',  'funzione': {'codice': "  pezzi = 1;$ var tmp = 0;$ if (this.input.ZIP == 'NO')$    tmp = 13.1;$ else$    tmp = 17.5;$$ taglio = this.input.LARGHEZZA - tmp;  $"} }, 
  {  'key': '3-1',  'rifcode': '272359',  'parent': 'GR0343',  'parent_key': '3',  'livello': '1',  'posizione': '02',  'tipo_kit': '4',  'funzione': {'codice': " pezzi = 1;  $"} }, 
  {  'key': '3-1-0',  'rifcode': '090363',  'parent': '272359',  'parent_key': '3-1',  'livello': '2',  'posizione': '01',  'tipo_kit': '',  'funzione': {'codice': "  pezzi = 1;    $"} }, 
  {  'key': '3-1-1',  'rifcode': '146409',  'parent': '272359',  'parent_key': '3-1',  'livello': '2',  'posizione': '02',  'tipo_kit': '',  'funzione': {'codice': "  pezzi = 1;    $"} }, 
  {  'key': '3-1-2',  'rifcode': '131406',  'parent': '272359',  'parent_key': '3-1',  'livello': '2',  'posizione': '03',  'tipo_kit': '',  'funzione': {'codice': "  pezzi = 1;    $"} }, 
  {  'key': '3-1-3',  'rifcode': '146426',  'parent': '272359',  'parent_key': '3-1',  'livello': '2',  'posizione': '04',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;$"} }, 
  {  'key': '3-1-4',  'rifcode': '140658',  'parent': '272359',  'parent_key': '3-1',  'livello': '2',  'posizione': '05',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;   $"} }, 
  {  'key': '4',  'rifcode': 'GR0344',  'parent': '',  'parent_key': '',  'livello': '0',  'posizione': 'GR0344',  'tipo_kit': '6',  'funzione': {'codice': "pezzi = 1;$"} }, 
  {  'key': '4-0',  'rifcode': '272343',  'parent': 'GR0344',  'parent_key': '4',  'livello': '1',  'posizione': '01',  'tipo_kit': '6',  'funzione': {'codice': "pezzi = 1;$"} }, 
  {  'key': '4-0-0',  'rifcode': '101035',  'parent': '272343',  'parent_key': '4-0',  'livello': '2',  'posizione': '01',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;$"} }, 
  {  'key': '4-0-1',  'rifcode': '111466',  'parent': '272343',  'parent_key': '4-0',  'livello': '2',  'posizione': '02',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 2;$"} }, 
  {  'key': '4-0-2',  'rifcode': '131379',  'parent': '272343',  'parent_key': '4-0',  'livello': '2',  'posizione': '03',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 2;$"} }, 
  {  'key': '4-0-3',  'rifcode': '140674',  'parent': '272343',  'parent_key': '4-0',  'livello': '2',  'posizione': '04',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 2;$"} }, 
  {  'key': '4-0-4',  'rifcode': '101042',  'parent': '272343',  'parent_key': '4-0',  'livello': '2',  'posizione': '05',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;$"} }, 
  {  'key': '4-0-5',  'rifcode': '111459',  'parent': '272343',  'parent_key': '4-0',  'livello': '2',  'posizione': '06',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 2;$"} }, 
  {  'key': '4-0-6',  'rifcode': '146430',  'parent': '272343',  'parent_key': '4-0',  'livello': '2',  'posizione': '07',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 2;$"} }, 
  {  'key': '4-0-7',  'rifcode': '101034',  'parent': '272343',  'parent_key': '4-0',  'livello': '2',  'posizione': '08',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;$"} }, 
  {  'key': '4-0-8',  'rifcode': '101041',  'parent': '272343',  'parent_key': '4-0',  'livello': '2',  'posizione': '09',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;$"} }, 
  {  'key': '4-0-9',  'rifcode': '111489',  'parent': '272343',  'parent_key': '4-0',  'livello': '2',  'posizione': '10',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 2;   $"} }, 
  {  'key': '4-0-10',  'rifcode': '111458',  'parent': '272343',  'parent_key': '4-0',  'livello': '2',  'posizione': '11',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 2;   $"} }, 
  {  'key': '4-0-11',  'rifcode': '131379',  'parent': '272343',  'parent_key': '4-0',  'livello': '2',  'posizione': '12',  'tipo_kit': '',  'funzione': {'codice': "   pezzi = 4;$"} }, 
  {  'key': '4-0-12',  'rifcode': '101031',  'parent': '272343',  'parent_key': '4-0',  'livello': '2',  'posizione': '13',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 2;   $"} }, 
  {  'key': '4-0-13',  'rifcode': '111466',  'parent': '272343',  'parent_key': '4-0',  'livello': '2',  'posizione': '14',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 4;   $"} }, 
  {  'key': '4-0-14',  'rifcode': '122238',  'parent': '272343',  'parent_key': '4-0',  'livello': '2',  'posizione': '15',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 2;   $"} }, 
  {  'key': '4-0-15',  'rifcode': '146422',  'parent': '272343',  'parent_key': '4-0',  'livello': '2',  'posizione': '16',  'tipo_kit': '',  'funzione': {'codice': "   pezzi = 2;$"} }, 
  {  'key': '4-0-16',  'rifcode': '122235',  'parent': '272343',  'parent_key': '4-0',  'livello': '2',  'posizione': '17',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 2;   $"} }, 
  {  'key': '4-0-17',  'rifcode': '140769',  'parent': '272343',  'parent_key': '4-0',  'livello': '2',  'posizione': '18',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 4;   $"} }, 
  {  'key': '4-0-18',  'rifcode': '320048',  'parent': '272343',  'parent_key': '4-0',  'livello': '2',  'posizione': '19',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 4;   $"} }, 
  {  'key': '4-0-19',  'rifcode': '160161',  'parent': '272343',  'parent_key': '4-0',  'livello': '2',  'posizione': '20',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 2;   $"} }, 
  {  'key': '4-0-20',  'rifcode': '101039',  'parent': '272343',  'parent_key': '4-0',  'livello': '2',  'posizione': '21',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;   $"} }, 
  {  'key': '4-0-21',  'rifcode': '101040',  'parent': '272343',  'parent_key': '4-0',  'livello': '2',  'posizione': '22',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;   $"} }, 
  {  'key': '4-0-22',  'rifcode': '146144',  'parent': '272343',  'parent_key': '4-0',  'livello': '2',  'posizione': '23',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 8;   $"} }, 
  {  'key': '4-1',  'rifcode': '010634',  'parent': 'GR0344',  'parent_key': '4',  'livello': '1',  'posizione': '02',  'tipo_kit': '',  'funzione': {'codice': "var tmp = 0;$$if (this.input.ZIP == 'NO')$    tmp = 13.1;$else$    tmp = 17.5;$$pezzi = 1;$taglio = this.input.LARGHEZZA - tmp;      $"} }, 
  {  'key': '4-2',  'rifcode': 'GR0349',  'parent': 'GR0344',  'parent_key': '4',  'livello': '1',  'posizione': '03',  'tipo_kit': '6',  'funzione': {'codice': " //GRUPPO TENSIONATORE SEMPLICE this.input.MOTORE SX D100$if((this.input.LARGHEZZA >= 550) && (this.input.LATO_MOTORE == 'LEFT'))$    pezzi = 1;$else$    pezzi = 0;  $$/*if((this.input.LARGHEZZA >= 500) && (this.input.LATO_MOTORE == 'LEFT'))$    pezzi = 1;$else$    pezzi = 0;          $    */$"} }, 
  {  'key': '4-2-0',  'rifcode': '111471',  'parent': 'GR0349',  'parent_key': '4-2',  'livello': '2',  'posizione': '01',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;$$"} }, 
  {  'key': '4-2-1',  'rifcode': '111464',  'parent': 'GR0349',  'parent_key': '4-2',  'livello': '2',  'posizione': '02',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;$$"} }, 
  {  'key': '4-2-2',  'rifcode': '146270',  'parent': 'GR0349',  'parent_key': '4-2',  'livello': '2',  'posizione': '03',  'tipo_kit': '',  'funzione': {'codice': " pezzi = 12;  $"} }, 
  {  'key': '4-2-3',  'rifcode': '146251',  'parent': 'GR0349',  'parent_key': '4-2',  'livello': '2',  'posizione': '04',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 2;$$"} }, 
  {  'key': '4-2-4',  'rifcode': '111469',  'parent': 'GR0349',  'parent_key': '4-2',  'livello': '2',  'posizione': '05',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;$"} }, 
  {  'key': '4-2-5',  'rifcode': '140597',  'parent': 'GR0349',  'parent_key': '4-2',  'livello': '2',  'posizione': '06',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 2;$"} }, 
  {  'key': '4-2-6',  'rifcode': '160160',  'parent': 'GR0349',  'parent_key': '4-2',  'livello': '2',  'posizione': '07',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;$"} }, 
  {  'key': '4-2-7',  'rifcode': '111474',  'parent': 'GR0349',  'parent_key': '4-2',  'livello': '2',  'posizione': '08',  'tipo_kit': '',  'funzione': {'codice': "if((this.input.MOTORE == 'SOMFY IO') || (this.input.MOTORE == 'SOMFY RTS') || (this.input.MOTORE == 'SOMFY WT'))$    pezzi = 1;$else$    pezzi = 0;$$"} }, 
  {  'key': '4-2-8',  'rifcode': '111472',  'parent': 'GR0349',  'parent_key': '4-2',  'livello': '2',  'posizione': '08',  'tipo_kit': '',  'funzione': {'codice': "if((this.input.MOTORE == 'CHERUBINI RX') || (this.input.MOTORE == 'CHERUBINI WIRE'))$    pezzi = 1;$else$    pezzi = 0;$$"} }, 
  {  'key': '4-2-9',  'rifcode': '111473',  'parent': 'GR0349',  'parent_key': '4-2',  'livello': '2',  'posizione': '08',  'tipo_kit': '',  'funzione': {'codice': "if((this.input.MOTORE == 'NICE 24V') || (this.input.MOTORE == 'NICE AC - DC'))$    pezzi = 1;$else$    pezzi = 0;$$"} }, 
  {  'key': '4-2-10',  'rifcode': '010209',  'parent': 'GR0349',  'parent_key': '4-2',  'livello': '2',  'posizione': '09',  'tipo_kit': '',  'funzione': {'codice': " var mot = 0;$$switch (this.input.MOTORE) {$    case ('SOMFY IO'):$        mot = 5;$        break;$    case ('CHERUBINI RX'):$        mot = 17;$        break;$    case ('CHERUBINI WIRE'):$        mot = 17;$        break;$    case ('NICE 24V'):$        mot = 26;$        break;$    case ('SOMFY RTS'):$        mot = 7;$        break;$    case ('NICE AC - DC'):$        mot = 15;$        break;$    case ('SOMFY WT'):$        mot = 7; //valore da verificare$        break;$    default:$        mot = 5;$        break;$}$pezzi = 1;  $taglio= mot;$"} }, 
  {  'key': '4-2-11',  'rifcode': '290232',  'parent': 'GR0349',  'parent_key': '4-2',  'livello': '2',  'posizione': '10',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;$"} }, 
  {  'key': '4-2-12',  'rifcode': 'NOCOD',  'parent': 'GR0349',  'parent_key': '4-2',  'livello': '2',  'posizione': '11',  'tipo_kit': '',  'funzione': {'codice': " pezzi = 1;$$//T0002.452 BLOCCA this.input.MOTORE SUPERIORE$"} }, 
  {  'key': '4-2-13',  'rifcode': '146354',  'parent': 'GR0349',  'parent_key': '4-2',  'livello': '2',  'posizione': '12',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 2;$"} }, 
  {  'key': '4-2-14',  'rifcode': '111463',  'parent': 'GR0349',  'parent_key': '4-2',  'livello': '2',  'posizione': '13',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 2;$"} }, 
  {  'key': '4-2-15',  'rifcode': '111462',  'parent': 'GR0349',  'parent_key': '4-2',  'livello': '2',  'posizione': '14',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;$"} }, 
  {  'key': '4-2-16',  'rifcode': '146423',  'parent': 'GR0349',  'parent_key': '4-2',  'livello': '2',  'posizione': '15',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;$"} }, 
  {  'key': '4-2-17',  'rifcode': '146431',  'parent': 'GR0349',  'parent_key': '4-2',  'livello': '2',  'posizione': '16',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 8;$"} }, 
  {  'key': '4-2-18',  'rifcode': '111461',  'parent': 'GR0349',  'parent_key': '4-2',  'livello': '2',  'posizione': '17',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;$"} }, 
  {  'key': '4-2-19',  'rifcode': '111161',  'parent': 'GR0349',  'parent_key': '4-2',  'livello': '2',  'posizione': '18',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;$"} }, 
  {  'key': '4-2-20',  'rifcode': '146251',  'parent': 'GR0349',  'parent_key': '4-2',  'livello': '2',  'posizione': '19',  'tipo_kit': '',  'funzione': {'codice': " pezzi = 1;$$"} }, 
  {  'key': '4-2-21',  'rifcode': '146143',  'parent': 'GR0349',  'parent_key': '4-2',  'livello': '2',  'posizione': '20',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 2;$"} }, 
  {  'key': '4-2-22',  'rifcode': '131392',  'parent': 'GR0349',  'parent_key': '4-2',  'livello': '2',  'posizione': '21',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;$"} }, 
  {  'key': '4-2-23',  'rifcode': '131395',  'parent': 'GR0349',  'parent_key': '4-2',  'livello': '2',  'posizione': '22',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;$"} }, 
  {  'key': '4-2-24',  'rifcode': '131393',  'parent': 'GR0349',  'parent_key': '4-2',  'livello': '2',  'posizione': '23',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;$"} }, 
  {  'key': '4-3',  'rifcode': 'GR0350',  'parent': 'GR0344',  'parent_key': '4',  'livello': '1',  'posizione': '03',  'tipo_kit': '6',  'funzione': {'codice': " //GRUPPO TENSIONATORE SEMPLICE this.input.MOTORE DX D100$if((this.input.LARGHEZZA >= 550) && (this.input.LATO_MOTORE == 'RIGHT'))$    pezzi = 1;$else$    pezzi = 0; $$/*if((this.input.LARGHEZZA >= 500) && (this.input.LATO_MOTORE == 'RIGHT'))$    pezzi = 1;$else$    pezzi = 0;        $    */$"} }, 
  {  'key': '4-3-0',  'rifcode': '111471',  'parent': 'GR0350',  'parent_key': '4-3',  'livello': '2',  'posizione': '01',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;$$"} }, 
  {  'key': '4-3-1',  'rifcode': '111464',  'parent': 'GR0350',  'parent_key': '4-3',  'livello': '2',  'posizione': '02',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;$$"} }, 
  {  'key': '4-3-2',  'rifcode': '146270',  'parent': 'GR0350',  'parent_key': '4-3',  'livello': '2',  'posizione': '03',  'tipo_kit': '',  'funzione': {'codice': " pezzi = 12;  $"} }, 
  {  'key': '4-3-3',  'rifcode': '146251',  'parent': 'GR0350',  'parent_key': '4-3',  'livello': '2',  'posizione': '04',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 2;$"} }, 
  {  'key': '4-3-4',  'rifcode': '111469',  'parent': 'GR0350',  'parent_key': '4-3',  'livello': '2',  'posizione': '05',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;$"} }, 
  {  'key': '4-3-5',  'rifcode': '140597',  'parent': 'GR0350',  'parent_key': '4-3',  'livello': '2',  'posizione': '06',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 2;$"} }, 
  {  'key': '4-3-6',  'rifcode': '160159',  'parent': 'GR0350',  'parent_key': '4-3',  'livello': '2',  'posizione': '07',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;$"} }, 
  {  'key': '4-3-7',  'rifcode': '111474',  'parent': 'GR0350',  'parent_key': '4-3',  'livello': '2',  'posizione': '08',  'tipo_kit': '',  'funzione': {'codice': "if((this.input.MOTORE == 'SOMFY IO') || (this.input.MOTORE == 'SOMFY RTS') || (this.input.MOTORE == 'SOMFY WT'))$    pezzi = 1;$else$    pezzi = 0;$$"} }, 
  {  'key': '4-3-8',  'rifcode': '111472',  'parent': 'GR0350',  'parent_key': '4-3',  'livello': '2',  'posizione': '08',  'tipo_kit': '',  'funzione': {'codice': "if((this.input.MOTORE == 'CHERUBINI RX') || (this.input.MOTORE == 'CHERUBINI WIRE'))$    pezzi = 1;$else$    pezzi = 0;$$"} }, 
  {  'key': '4-3-9',  'rifcode': '111473',  'parent': 'GR0350',  'parent_key': '4-3',  'livello': '2',  'posizione': '08',  'tipo_kit': '',  'funzione': {'codice': "if((this.input.MOTORE == 'NICE 24V') || (this.input.MOTORE == 'NICE AC - DC'))$    pezzi = 1;$else$    pezzi = 0;$$"} }, 
  {  'key': '4-3-10',  'rifcode': '010209',  'parent': 'GR0350',  'parent_key': '4-3',  'livello': '2',  'posizione': '09',  'tipo_kit': '',  'funzione': {'codice': " var mot = 0;$$switch (this.input.MOTORE) {$    case ('SOMFY IO'):$        mot = 5;$        break;$    case ('CHERUBINI RX'):$        mot = 17;$        break;$    case ('CHERUBINI WIRE'):$        mot = 17;$        break;$    case ('NICE 24V'):$        mot = 26;$        break;$    case ('SOMFY RTS'):$        mot = 7;$        break;$    case ('NICE AC - DC'):$        mot = 15;$        break;$    case ('SOMFY WT'):$        mot = 7; //valore da verificare$        break;$    default:$        mot = 5;$        break;$}$taglio = mot;  $pezzi = 1;$"} }, 
  {  'key': '4-3-11',  'rifcode': '290232',  'parent': 'GR0350',  'parent_key': '4-3',  'livello': '2',  'posizione': '10',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;$"} }, 
  {  'key': '4-3-12',  'rifcode': 'NOCOD',  'parent': 'GR0350',  'parent_key': '4-3',  'livello': '2',  'posizione': '11',  'tipo_kit': '',  'funzione': {'codice': " pezzi = 1;$$//T0002.452 BLOCCA this.input.MOTORE SUPERIORE $"} }, 
  {  'key': '4-3-13',  'rifcode': '146354',  'parent': 'GR0350',  'parent_key': '4-3',  'livello': '2',  'posizione': '12',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 2;$"} }, 
  {  'key': '4-3-14',  'rifcode': '111463',  'parent': 'GR0350',  'parent_key': '4-3',  'livello': '2',  'posizione': '13',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 2;$"} }, 
  {  'key': '4-3-15',  'rifcode': '111462',  'parent': 'GR0350',  'parent_key': '4-3',  'livello': '2',  'posizione': '14',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;$"} }, 
  {  'key': '4-3-16',  'rifcode': '146423',  'parent': 'GR0350',  'parent_key': '4-3',  'livello': '2',  'posizione': '15',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;$"} }, 
  {  'key': '4-3-17',  'rifcode': '146431',  'parent': 'GR0350',  'parent_key': '4-3',  'livello': '2',  'posizione': '16',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 8;$"} }, 
  {  'key': '4-3-18',  'rifcode': '111461',  'parent': 'GR0350',  'parent_key': '4-3',  'livello': '2',  'posizione': '17',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;$"} }, 
  {  'key': '4-3-19',  'rifcode': '111161',  'parent': 'GR0350',  'parent_key': '4-3',  'livello': '2',  'posizione': '18',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;$"} }, 
  {  'key': '4-3-20',  'rifcode': '146143',  'parent': 'GR0350',  'parent_key': '4-3',  'livello': '2',  'posizione': '19',  'tipo_kit': '',  'funzione': {'codice': " pezzi = 2;$//da capire con cosa sostituirla  $"} }, 
  {  'key': '4-3-21',  'rifcode': '146146',  'parent': 'GR0350',  'parent_key': '4-3',  'livello': '2',  'posizione': '20',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 2;$"} }, 
  {  'key': '4-3-22',  'rifcode': '131392',  'parent': 'GR0350',  'parent_key': '4-3',  'livello': '2',  'posizione': '21',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;$"} }, 
  {  'key': '4-3-23',  'rifcode': '131395',  'parent': 'GR0350',  'parent_key': '4-3',  'livello': '2',  'posizione': '22',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;$"} }, 
  {  'key': '4-3-24',  'rifcode': '131393',  'parent': 'GR0350',  'parent_key': '4-3',  'livello': '2',  'posizione': '23',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;$"} }, 
  {  'key': '4-4',  'rifcode': 'GR0351',  'parent': 'GR0344',  'parent_key': '4',  'livello': '1',  'posizione': '03',  'tipo_kit': '6',  'funzione': {'codice': " //GRUPPO TENSIONATORE SEMPLICE this.input.MOTORE SX D85$if((550 > this.input.LARGHEZZA) && (this.input.LATO_MOTORE == 'LEFT'))$    pezzi = 1;$else$    pezzi = 0;  $$/*if((500 > this.input.LARGHEZZA) && (this.input.LATO_MOTORE == 'LEFT'))$    pezzi = 1;$else$    pezzi = 0;      $    */$"} }, 
  {  'key': '4-4-0',  'rifcode': '272345',  'parent': 'GR0351',  'parent_key': '4-4',  'livello': '2',  'posizione': '01',  'tipo_kit': '4',  'funzione': {'codice': "pezzi = 1;$"} }, 
  {  'key': '4-4-0-0',  'rifcode': '111471',  'parent': '272345',  'parent_key': '4-4-0',  'livello': '3',  'posizione': '01',  'tipo_kit': '',  'funzione': {'codice': " pezzi = 1;  $"} }, 
  {  'key': '4-4-0-1',  'rifcode': '111464',  'parent': '272345',  'parent_key': '4-4-0',  'livello': '3',  'posizione': '02',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;$"} }, 
  {  'key': '4-4-0-2',  'rifcode': '146270',  'parent': '272345',  'parent_key': '4-4-0',  'livello': '3',  'posizione': '03',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 10;   $"} }, 
  {  'key': '4-4-0-3',  'rifcode': '146251',  'parent': '272345',  'parent_key': '4-4-0',  'livello': '3',  'posizione': '04',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 2;   $"} }, 
  {  'key': '4-4-0-4',  'rifcode': '140597',  'parent': '272345',  'parent_key': '4-4-0',  'livello': '3',  'posizione': '05',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 2;   $"} }, 
  {  'key': '4-4-0-5',  'rifcode': '160160',  'parent': '272345',  'parent_key': '4-4-0',  'livello': '3',  'posizione': '06',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;   $"} }, 
  {  'key': '4-4-0-6',  'rifcode': '111463',  'parent': '272345',  'parent_key': '4-4-0',  'livello': '3',  'posizione': '07',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 2;   $"} }, 
  {  'key': '4-4-0-7',  'rifcode': '111462',  'parent': '272345',  'parent_key': '4-4-0',  'livello': '3',  'posizione': '08',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;$"} }, 
  {  'key': '4-4-0-8',  'rifcode': '146431',  'parent': '272345',  'parent_key': '4-4-0',  'livello': '3',  'posizione': '09',  'tipo_kit': '',  'funzione': {'codice': "  pezzi = 8; $"} }, 
  {  'key': '4-4-0-9',  'rifcode': '111461',  'parent': '272345',  'parent_key': '4-4-0',  'livello': '3',  'posizione': '10',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;   $"} }, 
  {  'key': '4-4-0-10',  'rifcode': '290232',  'parent': '272345',  'parent_key': '4-4-0',  'livello': '3',  'posizione': '11',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;   $"} }, 
  {  'key': '4-4-0-11',  'rifcode': '131392',  'parent': '272345',  'parent_key': '4-4-0',  'livello': '3',  'posizione': '12',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;   $"} }, 
  {  'key': '4-4-0-12',  'rifcode': '111470',  'parent': '272345',  'parent_key': '4-4-0',  'livello': '3',  'posizione': '13',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;$"} }, 
  {  'key': '4-4-0-13',  'rifcode': '111060',  'parent': '272345',  'parent_key': '4-4-0',  'livello': '3',  'posizione': '14',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;$"} }, 
  {  'key': '4-4-0-14',  'rifcode': '131393',  'parent': '272345',  'parent_key': '4-4-0',  'livello': '3',  'posizione': '15',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;   $"} }, 
  {  'key': '4-4-0-15',  'rifcode': '146143',  'parent': '272345',  'parent_key': '4-4-0',  'livello': '3',  'posizione': '16',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 2;   $"} }, 
  {  'key': '4-4-0-16',  'rifcode': '131395',  'parent': '272345',  'parent_key': '4-4-0',  'livello': '3',  'posizione': '17',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;   $"} }, 
  {  'key': '4-4-1',  'rifcode': '146354',  'parent': 'GR0351',  'parent_key': '4-4',  'livello': '2',  'posizione': '02',  'tipo_kit': '',  'funzione': {'codice': "  pezzi = 2;$    $"} }, 
  {  'key': '4-4-2',  'rifcode': '111474',  'parent': 'GR0351',  'parent_key': '4-4',  'livello': '2',  'posizione': '03',  'tipo_kit': '',  'funzione': {'codice': "if((this.input.MOTORE == 'SOMFY IO') || (this.input.MOTORE == 'SOMFY RTS') || (this.input.MOTORE == 'SOMFY WT'))$    pezzi = 1;$else$    pezzi = 0;$$"} }, 
  {  'key': '4-4-3',  'rifcode': '111472',  'parent': 'GR0351',  'parent_key': '4-4',  'livello': '2',  'posizione': '03',  'tipo_kit': '',  'funzione': {'codice': "if((this.input.MOTORE == 'CHERUBINI RX') || (this.input.MOTORE == 'CHERUBINI WIRE'))$    pezzi = 1;$else$    pezzi = 0;$$"} }, 
  {  'key': '4-4-4',  'rifcode': '111473',  'parent': 'GR0351',  'parent_key': '4-4',  'livello': '2',  'posizione': '03',  'tipo_kit': '',  'funzione': {'codice': "if((this.input.MOTORE == 'NICE 24V') || (this.input.MOTORE == 'NICE AC - DC'))$    pezzi = 1;$else$    pezzi = 0;$$"} }, 
  {  'key': '4-4-5',  'rifcode': '146251',  'parent': 'GR0351',  'parent_key': '4-4',  'livello': '2',  'posizione': '04',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;$"} }, 
  {  'key': '4-4-6',  'rifcode': '146423',  'parent': 'GR0351',  'parent_key': '4-4',  'livello': '2',  'posizione': '05',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;$$"} }, 
  {  'key': '4-4-7',  'rifcode': '131401',  'parent': 'GR0351',  'parent_key': '4-4',  'livello': '2',  'posizione': '06',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;$"} }, 
  {  'key': '4-4-8',  'rifcode': '146136',  'parent': 'GR0351',  'parent_key': '4-4',  'livello': '2',  'posizione': '07',  'tipo_kit': '',  'funzione': {'codice': " pezzi = 1;$$"} }, 
  {  'key': '4-4-9',  'rifcode': '010209',  'parent': 'GR0351',  'parent_key': '4-4',  'livello': '2',  'posizione': '08',  'tipo_kit': '',  'funzione': {'codice': "  var mot = 0;$$switch (this.input.MOTORE) {$    case ('SOMFY IO'):$        mot = 5;$        break;$    case ('CHERUBINI RX'):$        mot = 17;$        break;$    case ('CHERUBINI WIRE'):$        mot = 17;$        break;$    case ('NICE 24V'):$        mot = 26;$        break;$    case ('SOMFY RTS'):$        mot = 7;$        break;$    case ('NICE AC - DC'):$        mot = 15;$        break;$    case ('SOMFY WT'):$        mot = 7; //valore da verificare$        break;$    default:$        mot = 5;$        break;$}$pezzi = 1;  $$taglio = mot;  $"} }, 
  {  'key': '4-4-10',  'rifcode': '220045',  'parent': 'GR0351',  'parent_key': '4-4',  'livello': '2',  'posizione': '09',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;$"} }, 
  {  'key': '4-5',  'rifcode': 'GR0352',  'parent': 'GR0344',  'parent_key': '4',  'livello': '1',  'posizione': '03',  'tipo_kit': '6',  'funzione': {'codice': " //GRUPPO TENSIONATORE SEMPLICE this.input.MOTORE DX D85$if((550 > this.input.LARGHEZZA) && (this.input.LATO_MOTORE == 'RIGHT'))$    pezzi = 1;$else$    pezzi = 0; $$/*if((500 > this.input.LARGHEZZA) && (this.input.LATO_MOTORE == 'RIGHT'))$    pezzi = 1;$else$    pezzi = 0;      $    */$"} }, 
  {  'key': '4-5-0',  'rifcode': '272348',  'parent': 'GR0352',  'parent_key': '4-5',  'livello': '2',  'posizione': '01',  'tipo_kit': '6',  'funzione': {'codice': "pezzi = 1;$$"} }, 
  {  'key': '4-5-0-0',  'rifcode': '111471',  'parent': '272348',  'parent_key': '4-5-0',  'livello': '3',  'posizione': '01',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;   $"} }, 
  {  'key': '4-5-0-1',  'rifcode': '111464',  'parent': '272348',  'parent_key': '4-5-0',  'livello': '3',  'posizione': '02',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;   $"} }, 
  {  'key': '4-5-0-2',  'rifcode': '146270',  'parent': '272348',  'parent_key': '4-5-0',  'livello': '3',  'posizione': '03',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 10;   $"} }, 
  {  'key': '4-5-0-3',  'rifcode': '146251',  'parent': '272348',  'parent_key': '4-5-0',  'livello': '3',  'posizione': '04',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 2;   $"} }, 
  {  'key': '4-5-0-4',  'rifcode': '140597',  'parent': '272348',  'parent_key': '4-5-0',  'livello': '3',  'posizione': '05',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 2;   $"} }, 
  {  'key': '4-5-0-5',  'rifcode': '111463',  'parent': '272348',  'parent_key': '4-5-0',  'livello': '3',  'posizione': '06',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 2;   $"} }, 
  {  'key': '4-5-0-6',  'rifcode': '111462',  'parent': '272348',  'parent_key': '4-5-0',  'livello': '3',  'posizione': '07',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;   $"} }, 
  {  'key': '4-5-0-7',  'rifcode': '146431',  'parent': '272348',  'parent_key': '4-5-0',  'livello': '3',  'posizione': '08',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 8;   $"} }, 
  {  'key': '4-5-0-8',  'rifcode': '111461',  'parent': '272348',  'parent_key': '4-5-0',  'livello': '3',  'posizione': '09',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;   $"} }, 
  {  'key': '4-5-0-9',  'rifcode': '290232',  'parent': '272348',  'parent_key': '4-5-0',  'livello': '3',  'posizione': '10',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;   $"} }, 
  {  'key': '4-5-0-10',  'rifcode': '131392',  'parent': '272348',  'parent_key': '4-5-0',  'livello': '3',  'posizione': '11',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;   $"} }, 
  {  'key': '4-5-0-11',  'rifcode': '111470',  'parent': '272348',  'parent_key': '4-5-0',  'livello': '3',  'posizione': '12',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;   $"} }, 
  {  'key': '4-5-0-12',  'rifcode': '111060',  'parent': '272348',  'parent_key': '4-5-0',  'livello': '3',  'posizione': '13',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;   $"} }, 
  {  'key': '4-5-0-13',  'rifcode': '131393',  'parent': '272348',  'parent_key': '4-5-0',  'livello': '3',  'posizione': '14',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;   $"} }, 
  {  'key': '4-5-0-14',  'rifcode': '146143',  'parent': '272348',  'parent_key': '4-5-0',  'livello': '3',  'posizione': '15',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 2;   $"} }, 
  {  'key': '4-5-0-15',  'rifcode': '131395',  'parent': '272348',  'parent_key': '4-5-0',  'livello': '3',  'posizione': '16',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;   $"} }, 
  {  'key': '4-5-0-16',  'rifcode': '160159',  'parent': '272348',  'parent_key': '4-5-0',  'livello': '3',  'posizione': '17',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;   $"} }, 
  {  'key': '4-5-1',  'rifcode': '146354',  'parent': 'GR0352',  'parent_key': '4-5',  'livello': '2',  'posizione': '02',  'tipo_kit': '',  'funzione': {'codice': " pezzi = 2;$  $"} }, 
  {  'key': '4-5-2',  'rifcode': '111474',  'parent': 'GR0352',  'parent_key': '4-5',  'livello': '2',  'posizione': '03',  'tipo_kit': '',  'funzione': {'codice': "if((this.input.MOTORE == 'SOMFY IO') || (this.input.MOTORE == 'SOMFY RTS') || (this.input.MOTORE == 'SOMFY WT'))$    pezzi = 1;$else$    pezzi = 0;$$"} }, 
  {  'key': '4-5-3',  'rifcode': '111472',  'parent': 'GR0352',  'parent_key': '4-5',  'livello': '2',  'posizione': '03',  'tipo_kit': '',  'funzione': {'codice': "if((this.input.MOTORE == 'CHERUBINI RX') || (this.input.MOTORE == 'CHERUBINI WIRE'))$    pezzi = 1;$else$    pezzi = 0;$$"} }, 
  {  'key': '4-5-4',  'rifcode': '111473',  'parent': 'GR0352',  'parent_key': '4-5',  'livello': '2',  'posizione': '03',  'tipo_kit': '',  'funzione': {'codice': "if((this.input.MOTORE == 'NICE 24V') || (this.input.MOTORE == 'NICE AC - DC'))$    pezzi = 1;$else$    pezzi = 0;$$"} }, 
  {  'key': '4-5-5',  'rifcode': '146251',  'parent': 'GR0352',  'parent_key': '4-5',  'livello': '2',  'posizione': '04',  'tipo_kit': '',  'funzione': {'codice': " pezzi = 1;  $"} }, 
  {  'key': '4-5-6',  'rifcode': '146423',  'parent': 'GR0352',  'parent_key': '4-5',  'livello': '2',  'posizione': '05',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;$"} }, 
  {  'key': '4-5-7',  'rifcode': '131401',  'parent': 'GR0352',  'parent_key': '4-5',  'livello': '2',  'posizione': '06',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;$"} }, 
  {  'key': '4-5-8',  'rifcode': '146136',  'parent': 'GR0352',  'parent_key': '4-5',  'livello': '2',  'posizione': '07',  'tipo_kit': '',  'funzione': {'codice': "  pezzi = 1;$"} }, 
  {  'key': '4-5-9',  'rifcode': '010209',  'parent': 'GR0352',  'parent_key': '4-5',  'livello': '2',  'posizione': '08',  'tipo_kit': '',  'funzione': {'codice': " var mot = 0;$$switch (this.input.MOTORE) {$    case ('SOMFY IO'):$        mot = 5;$        break;$    case ('CHERUBINI RX'):$        mot = 17;$        break;$    case ('CHERUBINI WIRE'):$        mot = 17;$        break;$    case ('NICE 24V'):$        mot = 26;$        break;$    case ('SOMFY RTS'):$        mot = 7;$        break;$    case ('NICE AC - DC'):$        mot = 15;$        break;$    case ('SOMFY WT'):$        mot = 7; //valore da verificare$        break;$    default:$        mot = 5;$        break;$}$pezzi = 1;$taglio = mot;  $"} }, 
  {  'key': '4-5-10',  'rifcode': '220045',  'parent': 'GR0352',  'parent_key': '4-5',  'livello': '2',  'posizione': '09',  'tipo_kit': '',  'funzione': {'codice': " pezzi = 1;  $"} }, 
  {  'key': '4-6',  'rifcode': 'GR0353',  'parent': 'GR0344',  'parent_key': '4',  'livello': '1',  'posizione': '05',  'tipo_kit': '6',  'funzione': {'codice': " //GRUPPO TENSIONATORE SEMPLICE CONDOTTO SX D100$if((this.input.LARGHEZZA >= 550) && (this.input.LATO_MOTORE == 'LEFT'))$    pezzi = 1;$else$    pezzi = 0; $$/*if((this.input.LARGHEZZA >= 500) && (this.input.LATO_MOTORE == 'LEFT'))$    pezzi = 1;$else$    pezzi = 0;      $    */$"} }, 
  {  'key': '4-6-0',  'rifcode': '111471',  'parent': 'GR0353',  'parent_key': '4-6',  'livello': '2',  'posizione': '01',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;$"} }, 
  {  'key': '4-6-1',  'rifcode': '111464',  'parent': 'GR0353',  'parent_key': '4-6',  'livello': '2',  'posizione': '02',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;$"} }, 
  {  'key': '4-6-2',  'rifcode': '146270',  'parent': 'GR0353',  'parent_key': '4-6',  'livello': '2',  'posizione': '03',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 10;$"} }, 
  {  'key': '4-6-3',  'rifcode': '146251',  'parent': 'GR0353',  'parent_key': '4-6',  'livello': '2',  'posizione': '04',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 2;$"} }, 
  {  'key': '4-6-4',  'rifcode': '111469',  'parent': 'GR0353',  'parent_key': '4-6',  'livello': '2',  'posizione': '05',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;$"} }, 
  {  'key': '4-6-5',  'rifcode': '140597',  'parent': 'GR0353',  'parent_key': '4-6',  'livello': '2',  'posizione': '06',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 2;$"} }, 
  {  'key': '4-6-6',  'rifcode': '160160',  'parent': 'GR0353',  'parent_key': '4-6',  'livello': '2',  'posizione': '07',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;$"} }, 
  {  'key': '4-6-7',  'rifcode': '111343',  'parent': 'GR0353',  'parent_key': '4-6',  'livello': '2',  'posizione': '08',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;$"} }, 
  {  'key': '4-6-8',  'rifcode': '131382',  'parent': 'GR0353',  'parent_key': '4-6',  'livello': '2',  'posizione': '09',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;$"} }, 
  {  'key': '4-6-9',  'rifcode': '140783',  'parent': 'GR0353',  'parent_key': '4-6',  'livello': '2',  'posizione': '10',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;$"} }, 
  {  'key': '4-6-10',  'rifcode': '146354',  'parent': 'GR0353',  'parent_key': '4-6',  'livello': '2',  'posizione': '11',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;$"} }, 
  {  'key': '4-6-11',  'rifcode': '111462',  'parent': 'GR0353',  'parent_key': '4-6',  'livello': '2',  'posizione': '12',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;$"} }, 
  {  'key': '4-6-12',  'rifcode': '111463',  'parent': 'GR0353',  'parent_key': '4-6',  'livello': '2',  'posizione': '13',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 2;$"} }, 
  {  'key': '4-6-13',  'rifcode': '146423',  'parent': 'GR0353',  'parent_key': '4-6',  'livello': '2',  'posizione': '14',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;$"} }, 
  {  'key': '4-6-14',  'rifcode': '146431',  'parent': 'GR0353',  'parent_key': '4-6',  'livello': '2',  'posizione': '15',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;$"} }, 
  {  'key': '4-6-15',  'rifcode': '111460',  'parent': 'GR0353',  'parent_key': '4-6',  'livello': '2',  'posizione': '16',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;$"} }, 
  {  'key': '4-6-16',  'rifcode': '111161',  'parent': 'GR0353',  'parent_key': '4-6',  'livello': '2',  'posizione': '17',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;$"} }, 
  {  'key': '4-6-17',  'rifcode': '131394',  'parent': 'GR0353',  'parent_key': '4-6',  'livello': '2',  'posizione': '18',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;$"} }, 
  {  'key': '4-6-18',  'rifcode': '131392',  'parent': 'GR0353',  'parent_key': '4-6',  'livello': '2',  'posizione': '19',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;$"} }, 
  {  'key': '4-6-19',  'rifcode': '290232',  'parent': 'GR0353',  'parent_key': '4-6',  'livello': '2',  'posizione': '20',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;   $"} }, 
  {  'key': '4-6-20',  'rifcode': 'NOCOD',  'parent': 'GR0353',  'parent_key': '4-6',  'livello': '2',  'posizione': '21',  'tipo_kit': '',  'funzione': {'codice': " pezzi = 1;$$//T0002.453 STAFFETTA SUPPORTO  $"} }, 
  {  'key': '4-7',  'rifcode': 'GR0355',  'parent': 'GR0344',  'parent_key': '4',  'livello': '1',  'posizione': '05',  'tipo_kit': '6',  'funzione': {'codice': " //GRUPPO TENSIONATORE SEMPLICE CONDOTTO SX D85$if((550 > this.input.LARGHEZZA) && (this.input.LATO_MOTORE == 'LEFT'))$    pezzi = 1;$else$    pezzi = 0; $$/*if((500 > this.input.LARGHEZZA) && (this.input.LATO_MOTORE == 'LEFT'))$    pezzi = 1;$else$    pezzi = 0;$    */$"} }, 
  {  'key': '4-7-0',  'rifcode': '272355',  'parent': 'GR0355',  'parent_key': '4-7',  'livello': '2',  'posizione': '01',  'tipo_kit': '6',  'funzione': {'codice': "pezzi = 1;$"} }, 
  {  'key': '4-7-0-0',  'rifcode': '146270',  'parent': '272355',  'parent_key': '4-7-0',  'livello': '3',  'posizione': '01',  'tipo_kit': '',  'funzione': {'codice': " pezzi = 10;     $"} }, 
  {  'key': '4-7-0-1',  'rifcode': '111060',  'parent': '272355',  'parent_key': '4-7-0',  'livello': '3',  'posizione': '02',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;   $"} }, 
  {  'key': '4-7-0-2',  'rifcode': '131394',  'parent': '272355',  'parent_key': '4-7-0',  'livello': '3',  'posizione': '03',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;   $"} }, 
  {  'key': '4-7-0-3',  'rifcode': '111471',  'parent': '272355',  'parent_key': '4-7-0',  'livello': '3',  'posizione': '04',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;   $"} }, 
  {  'key': '4-7-0-4',  'rifcode': '131392',  'parent': '272355',  'parent_key': '4-7-0',  'livello': '3',  'posizione': '05',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;   $"} }, 
  {  'key': '4-7-0-5',  'rifcode': '111464',  'parent': '272355',  'parent_key': '4-7-0',  'livello': '3',  'posizione': '06',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;   $"} }, 
  {  'key': '4-7-0-6',  'rifcode': '146251',  'parent': '272355',  'parent_key': '4-7-0',  'livello': '3',  'posizione': '07',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 2;   $"} }, 
  {  'key': '4-7-0-7',  'rifcode': '111470',  'parent': '272355',  'parent_key': '4-7-0',  'livello': '3',  'posizione': '08',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;   $"} }, 
  {  'key': '4-7-0-8',  'rifcode': '140597',  'parent': '272355',  'parent_key': '4-7-0',  'livello': '3',  'posizione': '09',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 2;   $"} }, 
  {  'key': '4-7-0-9',  'rifcode': '160160',  'parent': '272355',  'parent_key': '4-7-0',  'livello': '3',  'posizione': '10',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;   $"} }, 
  {  'key': '4-7-0-10',  'rifcode': '111462',  'parent': '272355',  'parent_key': '4-7-0',  'livello': '3',  'posizione': '11',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;   $"} }, 
  {  'key': '4-7-0-11',  'rifcode': '111463',  'parent': '272355',  'parent_key': '4-7-0',  'livello': '3',  'posizione': '12',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 2;   $"} }, 
  {  'key': '4-7-0-12',  'rifcode': '146431',  'parent': '272355',  'parent_key': '4-7-0',  'livello': '3',  'posizione': '13',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 8;   $"} }, 
  {  'key': '4-7-0-13',  'rifcode': '111460',  'parent': '272355',  'parent_key': '4-7-0',  'livello': '3',  'posizione': '14',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;   $"} }, 
  {  'key': '4-7-0-14',  'rifcode': '290232',  'parent': '272355',  'parent_key': '4-7-0',  'livello': '3',  'posizione': '15',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;   $"} }, 
  {  'key': '4-7-0-15',  'rifcode': '111343',  'parent': '272355',  'parent_key': '4-7-0',  'livello': '3',  'posizione': '16',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;   $"} }, 
  {  'key': '4-7-1',  'rifcode': '146423',  'parent': 'GR0355',  'parent_key': '4-7',  'livello': '2',  'posizione': '02',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;$"} }, 
  {  'key': '4-7-2',  'rifcode': '131390',  'parent': 'GR0355',  'parent_key': '4-7',  'livello': '2',  'posizione': '03',  'tipo_kit': '',  'funzione': {'codice': " pezzi = 1;  $"} }, 
  {  'key': '4-7-3',  'rifcode': '131382',  'parent': 'GR0355',  'parent_key': '4-7',  'livello': '2',  'posizione': '04',  'tipo_kit': '',  'funzione': {'codice': " pezzi = 1;  $"} }, 
  {  'key': '4-7-4',  'rifcode': '140783',  'parent': 'GR0355',  'parent_key': '4-7',  'livello': '2',  'posizione': '05',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;$"} }, 
  {  'key': '4-7-5',  'rifcode': '146354',  'parent': 'GR0355',  'parent_key': '4-7',  'livello': '2',  'posizione': '06',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 2;$"} }, 
  {  'key': '4-8',  'rifcode': 'GR0356',  'parent': 'GR0344',  'parent_key': '4',  'livello': '1',  'posizione': '06',  'tipo_kit': '6',  'funzione': {'codice': " //GRUPPO TENSIONATORE SEMPLICE CONDOTTO DX D85$   if((550 > this.input.LARGHEZZA) && (this.input.LATO_MOTORE == 'RIGHT'))$    pezzi = 1;$else$    pezzi = 0;      $ $ /*if((500 > this.input.LARGHEZZA) && (this.input.LATO_MOTORE == 'RIGHT'))$    pezzi = 1;$else$    pezzi = 0;      $    */$"} }, 
  {  'key': '4-8-0',  'rifcode': '272356',  'parent': 'GR0356',  'parent_key': '4-8',  'livello': '2',  'posizione': '01',  'tipo_kit': '6',  'funzione': {'codice': "pezzi = 1;$"} }, 
  {  'key': '4-8-0-0',  'rifcode': '146270',  'parent': '272356',  'parent_key': '4-8-0',  'livello': '3',  'posizione': '01',  'tipo_kit': '',  'funzione': {'codice': " pezzi = 10;     $"} }, 
  {  'key': '4-8-0-1',  'rifcode': '111060',  'parent': '272356',  'parent_key': '4-8-0',  'livello': '3',  'posizione': '02',  'tipo_kit': '',  'funzione': {'codice': " pezzi = 1;     $"} }, 
  {  'key': '4-8-0-2',  'rifcode': '131394',  'parent': '272356',  'parent_key': '4-8-0',  'livello': '3',  'posizione': '03',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;   $"} }, 
  {  'key': '4-8-0-3',  'rifcode': '111471',  'parent': '272356',  'parent_key': '4-8-0',  'livello': '3',  'posizione': '04',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;   $"} }, 
  {  'key': '4-8-0-4',  'rifcode': '131392',  'parent': '272356',  'parent_key': '4-8-0',  'livello': '3',  'posizione': '05',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;   $"} }, 
  {  'key': '4-8-0-5',  'rifcode': '111464',  'parent': '272356',  'parent_key': '4-8-0',  'livello': '3',  'posizione': '06',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;   $"} }, 
  {  'key': '4-8-0-6',  'rifcode': '146251',  'parent': '272356',  'parent_key': '4-8-0',  'livello': '3',  'posizione': '07',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 2;   $"} }, 
  {  'key': '4-8-0-7',  'rifcode': '111470',  'parent': '272356',  'parent_key': '4-8-0',  'livello': '3',  'posizione': '08',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;   $"} }, 
  {  'key': '4-8-0-8',  'rifcode': '140597',  'parent': '272356',  'parent_key': '4-8-0',  'livello': '3',  'posizione': '09',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 2;   $"} }, 
  {  'key': '4-8-0-9',  'rifcode': '111462',  'parent': '272356',  'parent_key': '4-8-0',  'livello': '3',  'posizione': '10',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;   $"} }, 
  {  'key': '4-8-0-10',  'rifcode': '111463',  'parent': '272356',  'parent_key': '4-8-0',  'livello': '3',  'posizione': '11',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 2;   $"} }, 
  {  'key': '4-8-0-11',  'rifcode': '146431',  'parent': '272356',  'parent_key': '4-8-0',  'livello': '3',  'posizione': '12',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 8;   $"} }, 
  {  'key': '4-8-0-12',  'rifcode': '111460',  'parent': '272356',  'parent_key': '4-8-0',  'livello': '3',  'posizione': '13',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;   $"} }, 
  {  'key': '4-8-0-13',  'rifcode': '160159',  'parent': '272356',  'parent_key': '4-8-0',  'livello': '3',  'posizione': '14',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;   $"} }, 
  {  'key': '4-8-0-14',  'rifcode': '290232',  'parent': '272356',  'parent_key': '4-8-0',  'livello': '3',  'posizione': '15',  'tipo_kit': '',  'funzione': {'codice': " pezzi = 1;     $"} }, 
  {  'key': '4-8-0-15',  'rifcode': '111343',  'parent': '272356',  'parent_key': '4-8-0',  'livello': '3',  'posizione': '16',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;   $"} }, 
  {  'key': '4-8-1',  'rifcode': '146423',  'parent': 'GR0356',  'parent_key': '4-8',  'livello': '2',  'posizione': '02',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;$"} }, 
  {  'key': '4-8-2',  'rifcode': '131390',  'parent': 'GR0356',  'parent_key': '4-8',  'livello': '2',  'posizione': '03',  'tipo_kit': '',  'funzione': {'codice': " pezzi = 1;  $"} }, 
  {  'key': '4-8-3',  'rifcode': '131382',  'parent': 'GR0356',  'parent_key': '4-8',  'livello': '2',  'posizione': '04',  'tipo_kit': '',  'funzione': {'codice': " pezzi = 1;  $"} }, 
  {  'key': '4-8-4',  'rifcode': '140783',  'parent': 'GR0356',  'parent_key': '4-8',  'livello': '2',  'posizione': '05',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;$"} }, 
  {  'key': '4-8-5',  'rifcode': '146354',  'parent': 'GR0356',  'parent_key': '4-8',  'livello': '2',  'posizione': '06',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 2;$"} }, 
  {  'key': '4-9',  'rifcode': 'GR0354',  'parent': 'GR0344',  'parent_key': '4',  'livello': '1',  'posizione': '06',  'tipo_kit': '6',  'funzione': {'codice': " //GRUPPO TENSIONATORE SEMPLICE CONDOTTO DX D100$if((this.input.LARGHEZZA >= 550) && (this.input.LATO_MOTORE == 'RIGHT'))$    pezzi = 1;$else$    pezzi = 0;  $$/*if((this.input.LARGHEZZA >= 500) && (this.input.LATO_MOTORE == 'RIGHT'))$    pezzi = 1;$else$    pezzi = 0;      $    */$"} }, 
  {  'key': '4-9-0',  'rifcode': '111471',  'parent': 'GR0354',  'parent_key': '4-9',  'livello': '2',  'posizione': '01',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;$"} }, 
  {  'key': '4-9-1',  'rifcode': '111464',  'parent': 'GR0354',  'parent_key': '4-9',  'livello': '2',  'posizione': '02',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;$"} }, 
  {  'key': '4-9-2',  'rifcode': '146270',  'parent': 'GR0354',  'parent_key': '4-9',  'livello': '2',  'posizione': '03',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 10;$"} }, 
  {  'key': '4-9-3',  'rifcode': '146251',  'parent': 'GR0354',  'parent_key': '4-9',  'livello': '2',  'posizione': '04',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 2;$"} }, 
  {  'key': '4-9-4',  'rifcode': '111469',  'parent': 'GR0354',  'parent_key': '4-9',  'livello': '2',  'posizione': '05',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;$"} }, 
  {  'key': '4-9-5',  'rifcode': '140597',  'parent': 'GR0354',  'parent_key': '4-9',  'livello': '2',  'posizione': '06',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 2;$"} }, 
  {  'key': '4-9-6',  'rifcode': '160159',  'parent': 'GR0354',  'parent_key': '4-9',  'livello': '2',  'posizione': '07',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;$"} }, 
  {  'key': '4-9-7',  'rifcode': '111343',  'parent': 'GR0354',  'parent_key': '4-9',  'livello': '2',  'posizione': '08',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;$"} }, 
  {  'key': '4-9-8',  'rifcode': '131382',  'parent': 'GR0354',  'parent_key': '4-9',  'livello': '2',  'posizione': '09',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;$"} }, 
  {  'key': '4-9-9',  'rifcode': '140783',  'parent': 'GR0354',  'parent_key': '4-9',  'livello': '2',  'posizione': '10',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;$"} }, 
  {  'key': '4-9-10',  'rifcode': '146354',  'parent': 'GR0354',  'parent_key': '4-9',  'livello': '2',  'posizione': '11',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;$"} }, 
  {  'key': '4-9-11',  'rifcode': '111462',  'parent': 'GR0354',  'parent_key': '4-9',  'livello': '2',  'posizione': '12',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;$"} }, 
  {  'key': '4-9-12',  'rifcode': '111463',  'parent': 'GR0354',  'parent_key': '4-9',  'livello': '2',  'posizione': '13',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 2;$"} }, 
  {  'key': '4-9-13',  'rifcode': '146423',  'parent': 'GR0354',  'parent_key': '4-9',  'livello': '2',  'posizione': '14',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;$"} }, 
  {  'key': '4-9-14',  'rifcode': '146431',  'parent': 'GR0354',  'parent_key': '4-9',  'livello': '2',  'posizione': '15',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;$"} }, 
  {  'key': '4-9-15',  'rifcode': '111460',  'parent': 'GR0354',  'parent_key': '4-9',  'livello': '2',  'posizione': '16',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;$"} }, 
  {  'key': '4-9-16',  'rifcode': '111161',  'parent': 'GR0354',  'parent_key': '4-9',  'livello': '2',  'posizione': '17',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;$"} }, 
  {  'key': '4-9-17',  'rifcode': '131394',  'parent': 'GR0354',  'parent_key': '4-9',  'livello': '2',  'posizione': '18',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;$"} }, 
  {  'key': '4-9-18',  'rifcode': '131392',  'parent': 'GR0354',  'parent_key': '4-9',  'livello': '2',  'posizione': '19',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;$"} }, 
  {  'key': '4-9-19',  'rifcode': '290232',  'parent': 'GR0354',  'parent_key': '4-9',  'livello': '2',  'posizione': '20',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;   $"} }, 
  {  'key': '4-9-20',  'rifcode': 'NOCOD',  'parent': 'GR0354',  'parent_key': '4-9',  'livello': '2',  'posizione': '21',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;$$//T0002.453 STAFFETTA SUPPORTO$"} }, 
  {  'key': '4-10',  'rifcode': '020145',  'parent': 'GR0344',  'parent_key': '4',  'livello': '1',  'posizione': '07',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;$taglio = this.input.LARGHEZZA - 8.9;$"} }, 
  {  'key': '4-11',  'rifcode': '030213',  'parent': 'GR0344',  'parent_key': '4',  'livello': '1',  'posizione': '08',  'tipo_kit': '',  'funzione': {'codice': "if(this.input.LARGHEZZA > 550) $    pezzi = 1;$else$    pezzi = 0;$    $taglio = this.input.LARGHEZZA - 20.7;  $$/* if(this.input.LARGHEZZA > 500) $    pezzi = 1;$else$    pezzi = 0;$    $taglio = this.input.LARGHEZZA - 20.7;  $*/$"} }, 
  {  'key': '4-12',  'rifcode': '030208',  'parent': 'GR0344',  'parent_key': '4',  'livello': '1',  'posizione': '08',  'tipo_kit': '',  'funzione': {'codice': "  if(550 >= this.input.LARGHEZZA)$    pezzi = 1;$else$    pezzi = 0;$    $taglio = this.input.LARGHEZZA - 19.8;  $$/*if(500 >= this.input.LARGHEZZA)$    pezzi = 1;$else$    pezzi = 0;$    $taglio = this.input.LARGHEZZA - 19.8;  $*/$"} }, 
  {  'key': '4-13',  'rifcode': '010627',  'parent': 'GR0344',  'parent_key': '4',  'livello': '1',  'posizione': '09',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;$taglio = this.input.LARGHEZZA - 8.9;$"} }, 
  {  'key': '4-14',  'rifcode': '010638',  'parent': 'GR0344',  'parent_key': '4',  'livello': '1',  'posizione': '10',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;$taglio = this.input.LARGHEZZA - 8.9;$"} }, 
  {  'key': '4-15',  'rifcode': '010631',  'parent': 'GR0344',  'parent_key': '4',  'livello': '1',  'posizione': '11',  'tipo_kit': '',  'funzione': {'codice': " var tmp = 0;$ if(this.input.ZIP == 'NO')$    tmp = 8.9;$else$    tmp = 13.3;$$taglio = this.input.LARGHEZZA - tmp;    $pezzi = 1;    $"} }, 
  {  'key': '4-16',  'rifcode': '010628',  'parent': 'GR0344',  'parent_key': '4',  'livello': '1',  'posizione': '12',  'tipo_kit': '',  'funzione': {'codice': "  var tmp = 0;$ if(this.input.ZIP == 'NO')$    tmp = 8.9;$else$    tmp = 14.9;$$taglio = this.input.LARGHEZZA - tmp;    $pezzi = 1;      $"} }, 
  {  'key': '4-17',  'rifcode': '010628',  'parent': 'GR0344',  'parent_key': '4',  'livello': '1',  'posizione': '13',  'tipo_kit': '',  'funzione': {'codice': "   if(this.input.ZIP == 'NO')$    pezzi = 0;  $else$    pezzi = 2;  $$taglio = 3;    $"} }, 
  {  'key': '4-18',  'rifcode': '020165',  'parent': 'GR0344',  'parent_key': '4',  'livello': '1',  'posizione': '14',  'tipo_kit': '',  'funzione': {'codice': " if(this.input.LED_CASSONETTO == 'YES')$    pezzi = Math.ceil(this.input.LARGHEZZA/50);$else$    pezzi = 0;$    taglio = 20;$// 1 ogni 50cm SOLO quando ci sono i led nel cassonetto    $"} }, 
  {  'key': '4-19',  'rifcode': '020052',  'parent': 'GR0344',  'parent_key': '4',  'livello': '1',  'posizione': '15',  'tipo_kit': '',  'funzione': {'codice': " var tmp = 0;$ if(this.input.ZIP == 'NO')$    tmp = 8.9;$else$    tmp = 13.3;$$taglio = this.input.LARGHEZZA - tmp;    $pezzi = 1;    $"} }, 
  {  'key': '4-20',  'rifcode': '020183',  'parent': 'GR0344',  'parent_key': '4',  'livello': '1',  'posizione': '16',  'tipo_kit': '',  'funzione': {'codice': " var tmp = 0;$ if(this.input.ZIP == 'NO')$    tmp = 8.9;$else$    tmp = 13.3;$$taglio = this.input.LARGHEZZA - tmp;    $pezzi = 1;    $"} }, 
  {  'key': '4-21',  'rifcode': '020032',  'parent': 'GR0344',  'parent_key': '4',  'livello': '1',  'posizione': '17',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;$taglio = this.input.LARGHEZZA - 8.9;$"} }, 
  {  'key': '4-22',  'rifcode': '320051',  'parent': 'GR0344',  'parent_key': '4',  'livello': '1',  'posizione': '18',  'tipo_kit': '',  'funzione': {'codice': "pezzi = Math.ceil(this.input.LARGHEZZA/120);$"} }, 
  {  'key': '4-23',  'rifcode': '320111',  'parent': 'GR0344',  'parent_key': '4',  'livello': '1',  'posizione': '19',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 3;$"} }, 
  {  'key': '4-24',  'rifcode': '146428',  'parent': 'GR0344',  'parent_key': '4',  'livello': '1',  'posizione': '20',  'tipo_kit': '',  'funzione': {'codice': "if(this.input.LARGHEZZA > 450)$    pezzi = 1;$else$    pezzi = 0;$"} }, 
  {  'key': '4-25',  'rifcode': '122239',  'parent': 'GR0344',  'parent_key': '4',  'livello': '1',  'posizione': '21',  'tipo_kit': '',  'funzione': {'codice': "if(this.input.LARGHEZZA > 450)$    pezzi = 1;$else$    pezzi = 0;$"} }, 
  {  'key': '4-26',  'rifcode': '140769',  'parent': 'GR0344',  'parent_key': '4',  'livello': '1',  'posizione': '22',  'tipo_kit': '',  'funzione': {'codice': "if(this.input.LARGHEZZA > 450)$    pezzi = 2;$else$    pezzi = 0;$"} }, 
  {  'key': '4-27',  'rifcode': '090364',  'parent': 'GR0344',  'parent_key': '4',  'livello': '1',  'posizione': '23',  'tipo_kit': '',  'funzione': {'codice': "if(this.input.LARGHEZZA > 450)$    pezzi = 1;$else$    pezzi = 0;$"} }, 
  {  'key': '4-28',  'rifcode': '146429',  'parent': 'GR0344',  'parent_key': '4',  'livello': '1',  'posizione': '24',  'tipo_kit': '',  'funzione': {'codice': " pezzi = 2;  $"} }, 
  {  'key': '4-29',  'rifcode': '111458',  'parent': 'GR0344',  'parent_key': '4',  'livello': '1',  'posizione': '25',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 2;$"} }, 
  {  'key': '4-30',  'rifcode': '146157',  'parent': 'GR0344',  'parent_key': '4',  'livello': '1',  'posizione': '26',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 8;$"} }, 
  {  'key': '4-31',  'rifcode': '146409',  'parent': 'GR0344',  'parent_key': '4',  'livello': '1',  'posizione': '27',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 6;$"} }, 
  {  'key': '5',  'rifcode': 'GR0345',  'parent': '',  'parent_key': '',  'livello': '0',  'posizione': 'GR0345',  'tipo_kit': '6',  'funzione': {'codice': "if(this.input.VOLANT == 'YES')$    pezzi = 1;$else$    pezzi = 0; $"} }, 
  {  'key': '5-0',  'rifcode': '272400',  'parent': 'GR0345',  'parent_key': '5',  'livello': '1',  'posizione': '01',  'tipo_kit': '6',  'funzione': {'codice': "pezzi = 1;   $"} }, 
  {  'key': '5-0-0',  'rifcode': '131403',  'parent': '272400',  'parent_key': '5-0',  'livello': '2',  'posizione': '01',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;$"} }, 
  {  'key': '5-0-1',  'rifcode': '131379',  'parent': '272400',  'parent_key': '5-0',  'livello': '2',  'posizione': '02',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 4;   $"} }, 
  {  'key': '5-0-2',  'rifcode': '111466',  'parent': '272400',  'parent_key': '5-0',  'livello': '2',  'posizione': '03',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 4;   $"} }, 
  {  'key': '5-0-3',  'rifcode': '122238',  'parent': '272400',  'parent_key': '5-0',  'livello': '2',  'posizione': '04',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 2;   $"} }, 
  {  'key': '5-0-4',  'rifcode': '160161',  'parent': '272400',  'parent_key': '5-0',  'livello': '2',  'posizione': '05',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 2;   $"} }, 
  {  'key': '5-0-5',  'rifcode': '146422',  'parent': '272400',  'parent_key': '5-0',  'livello': '2',  'posizione': '06',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 2;   $"} }, 
  {  'key': '5-0-6',  'rifcode': '122233',  'parent': '272400',  'parent_key': '5-0',  'livello': '2',  'posizione': '07',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;   $"} }, 
  {  'key': '5-0-7',  'rifcode': '146151',  'parent': '272400',  'parent_key': '5-0',  'livello': '2',  'posizione': '08',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 6;   $"} }, 
  {  'key': '5-0-8',  'rifcode': '146409',  'parent': '272400',  'parent_key': '5-0',  'livello': '2',  'posizione': '09',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 2;   $"} }, 
  {  'key': '5-0-9',  'rifcode': '140674',  'parent': '272400',  'parent_key': '5-0',  'livello': '2',  'posizione': '10',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 4;   $"} }, 
  {  'key': '5-0-10',  'rifcode': '110165',  'parent': '272400',  'parent_key': '5-0',  'livello': '2',  'posizione': '11',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;   $"} }, 
  {  'key': '5-0-11',  'rifcode': '110166',  'parent': '272400',  'parent_key': '5-0',  'livello': '2',  'posizione': '12',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;   $"} }, 
  {  'key': '5-0-12',  'rifcode': '146152',  'parent': '272400',  'parent_key': '5-0',  'livello': '2',  'posizione': '13',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 2;   $"} }, 
  {  'key': '5-0-13',  'rifcode': '140502',  'parent': '272400',  'parent_key': '5-0',  'livello': '2',  'posizione': '14',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 2;   $"} }, 
  {  'key': '5-0-14',  'rifcode': '131405',  'parent': '272400',  'parent_key': '5-0',  'livello': '2',  'posizione': '15',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;$"} }, 
  {  'key': '5-0-15',  'rifcode': '146436',  'parent': '272400',  'parent_key': '5-0',  'livello': '2',  'posizione': '16',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;   $"} }, 
  {  'key': '5-0-16',  'rifcode': '131404',  'parent': '272400',  'parent_key': '5-0',  'livello': '2',  'posizione': '17',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;   $"} }, 
  {  'key': '5-0-17',  'rifcode': '122234',  'parent': '272400',  'parent_key': '5-0',  'livello': '2',  'posizione': '18',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;   $"} }, 
  {  'key': '5-0-18',  'rifcode': '111096',  'parent': '272400',  'parent_key': '5-0',  'livello': '2',  'posizione': '19',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;   $"} }, 
  {  'key': '5-0-19',  'rifcode': '111097',  'parent': '272400',  'parent_key': '5-0',  'livello': '2',  'posizione': '20',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;   $"} }, 
  {  'key': '5-0-20',  'rifcode': '140856',  'parent': '272400',  'parent_key': '5-0',  'livello': '2',  'posizione': '21',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 2;   $"} }, 
  {  'key': '5-0-21',  'rifcode': '122269',  'parent': '272400',  'parent_key': '5-0',  'livello': '2',  'posizione': '22',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;   $"} }, 
  {  'key': '5-0-22',  'rifcode': '140769',  'parent': '272400',  'parent_key': '5-0',  'livello': '2',  'posizione': '23',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;   $"} }, 
  {  'key': '5-1',  'rifcode': '272181',  'parent': 'GR0345',  'parent_key': '5',  'livello': '1',  'posizione': '02',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;$"} }, 
  {  'key': '5-2',  'rifcode': '140706',  'parent': 'GR0345',  'parent_key': '5',  'livello': '1',  'posizione': '03',  'tipo_kit': '',  'funzione': {'codice': "pezzi = Math.ceil(this.extra_var.LARGHEZZA_VOLANT)/100;$"} }, 
  {  'key': '5-3',  'rifcode': '210262',  'parent': 'GR0345',  'parent_key': '5',  'livello': '1',  'posizione': '04',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;   $"} }, 
  {  'key': '5-4',  'rifcode': '210263',  'parent': 'GR0345',  'parent_key': '5',  'livello': '1',  'posizione': '05',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;$"} }, 
  {  'key': '5-5',  'rifcode': '210353',  'parent': 'GR0345',  'parent_key': '5',  'livello': '1',  'posizione': '06',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;   $"} }, 
  {  'key': '5-6',  'rifcode': '272183',  'parent': 'GR0345',  'parent_key': '5',  'livello': '1',  'posizione': '07',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;$"} }, 
  {  'key': '5-7',  'rifcode': '111431',  'parent': 'GR0345',  'parent_key': '5',  'livello': '1',  'posizione': '08',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;$"} }, 
  {  'key': '5-8',  'rifcode': '010451',  'parent': 'GR0345',  'parent_key': '5',  'livello': '1',  'posizione': '09',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;$taglio = this.extra_var.LARGHEZZA_VOLANT - 5;$"} }, 
  {  'key': '5-9',  'rifcode': '111179',  'parent': 'GR0345',  'parent_key': '5',  'livello': '1',  'posizione': '10',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 2;$"} }, 
  {  'key': '5-10',  'rifcode': '090139',  'parent': 'GR0345',  'parent_key': '5',  'livello': '1',  'posizione': '11',  'tipo_kit': '',  'funzione': {'codice': "pezzi = Math.ceil(this.input.LARGHEZZA/100);$$"} }, 
  {  'key': '5-11',  'rifcode': '320052',  'parent': 'GR0345',  'parent_key': '5',  'livello': '1',  'posizione': '12',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;$"} }, 
  {  'key': '5-12',  'rifcode': '010467',  'parent': 'GR0345',  'parent_key': '5',  'livello': '1',  'posizione': '13',  'tipo_kit': '',  'funzione': {'codice': " pezzi = 1;$taglio = this.extra_var.LARGHEZZA_VOLANT - 6;  $"} }, 
  {  'key': '5-13',  'rifcode': '020069',  'parent': 'GR0345',  'parent_key': '5',  'livello': '1',  'posizione': '14',  'tipo_kit': '',  'funzione': {'codice': " pezzi = 2;$taglio = this.extra_var.LARGHEZZA_VOLANT - 0.9;  $"} }, 
  {  'key': '5-14',  'rifcode': '010636',  'parent': 'GR0345',  'parent_key': '5',  'livello': '1',  'posizione': '15',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;$taglio = this.extra_var.LARGHEZZA_VOLANT - 0.8;$"} }, 
  {  'key': '5-15',  'rifcode': '010633',  'parent': 'GR0345',  'parent_key': '5',  'livello': '1',  'posizione': '16',  'tipo_kit': '',  'funzione': {'codice': " pezzi = 1;$taglio = this.extra_var.LARGHEZZA_VOLANT - 0.9;  $"} }, 
  {  'key': '5-16',  'rifcode': 'TS_TELO',  'parent': 'GR0345',  'parent_key': '5',  'livello': '1',  'posizione': '17',  'tipo_kit': '',  'funzione': {'codice': " var vt = [$        [],$        []$    ];$    $var intestazione = new Array();$intestazione = ['Width (cm)','Projection (cm)'];    $vt[0][0]=this.extra_var.LARGHEZZA_TELO_VOLANT;$vt[0][1]=this.extra_var.SPORGENZA_TELO_VOLANT;$$pezzi = 1;$vettore = vt;$$vettore.splice(0, 0, intestazione);$$nota = 'Fabric Dimensions'; $"} }, 
  {  'key': '6',  'rifcode': 'GR0346',  'parent': '',  'parent_key': '',  'livello': '0',  'posizione': 'GR0346',  'tipo_kit': '6',  'funzione': {'codice': "if(this.input.ZIP == 'NO')$    pezzi = 0;$else$    pezzi = 2;$$"} }, 
  {  'key': '6-0',  'rifcode': '020120',  'parent': 'GR0346',  'parent_key': '6',  'livello': '1',  'posizione': '01',  'tipo_kit': '',  'funzione': {'codice': " pezzi = 1;$//taglio = this.input.SPORGENZA - 23.8;$/*modificata in data 20/03/2025 per arrivare quasi in battuta sul cassonetto$    ed evitare che possa 'correre' da sola col movimento del telo*/$taglio = this.input.SPORGENZA - 21.9;$"} }, 
  {  'key': '6-1',  'rifcode': '010609',  'parent': 'GR0346',  'parent_key': '6',  'livello': '1',  'posizione': '02',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;$taglio = this.input.SPORGENZA - 23.8;$"} }, 
  {  'key': '6-2',  'rifcode': '020095',  'parent': 'GR0346',  'parent_key': '6',  'livello': '1',  'posizione': '03',  'tipo_kit': '',  'funzione': {'codice': "if (this.input.LED_GUIDE == 'YES')$    pezzi = 1;$else$    pezzi = 2;$$taglio = this.input.SPORGENZA - 23.8;  $"} }, 
  {  'key': '6-3',  'rifcode': '010635',  'parent': 'GR0346',  'parent_key': '6',  'livello': '1',  'posizione': '04',  'tipo_kit': '',  'funzione': {'codice': "   if (this.input.LED_GUIDE == 'YES')$    pezzi = 1;$else$    pezzi = 0;$    $taglio = this.input.SPORGENZA - 23.8 - 8;$      $"} }, 
  {  'key': '7',  'rifcode': 'GR0347',  'parent': '',  'parent_key': '',  'livello': '0',  'posizione': 'GR0347',  'tipo_kit': '6',  'funzione': {'codice': "if(this.input.ZIP == 'NO')$    pezzi = 2;$else$    pezzi = 0;$"} }, 
  {  'key': '7-0',  'rifcode': '020095',  'parent': 'GR0347',  'parent_key': '7',  'livello': '1',  'posizione': '01',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;$taglio = this.input.SPORGENZA - 23.8;$"} }, 
  {  'key': '7-1',  'rifcode': '010611',  'parent': 'GR0347',  'parent_key': '7',  'livello': '1',  'posizione': '02',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;$taglio = this.input.SPORGENZA - 23.8;$"} }, 
  {  'key': '7-2',  'rifcode': '010635',  'parent': 'GR0347',  'parent_key': '7',  'livello': '1',  'posizione': '03',  'tipo_kit': '',  'funzione': {'codice': "  if (this.input.LED_GUIDE == 'YES')$    pezzi = 1;$else$    pezzi = 0;$    $taglio = this.input.SPORGENZA - 23.8 - 8;$    $"} }, 
  {  'key': '8',  'rifcode': 'GR0348',  'parent': '',  'parent_key': '',  'livello': '0',  'posizione': 'GR0348',  'tipo_kit': '6',  'funzione': {'codice': "pezzi = 1;$"} }, 
  {  'key': '8-0',  'rifcode': '146409',  'parent': 'GR0348',  'parent_key': '8',  'livello': '1',  'posizione': '01',  'tipo_kit': '',  'funzione': {'codice': "  pezzi = Math.ceil(this.input.LARGHEZZA/100)-1;  $"} }, 
  {  'key': '8-1',  'rifcode': '010630',  'parent': 'GR0348',  'parent_key': '8',  'livello': '1',  'posizione': '02',  'tipo_kit': '',  'funzione': {'codice': "    pezzi = 1;$ var tmp = 0;$ if (this.input.ZIP == 'NO')$    tmp = 13.3;$ else$    tmp = 17.7;$$ taglio = this.input.LARGHEZZA - tmp;    $  $"} }, 
  {  'key': '8-2',  'rifcode': 'TS_TELO',  'parent': 'GR0348',  'parent_key': '8',  'livello': '1',  'posizione': '03',  'tipo_kit': '',  'funzione': {'codice': " var vt = [$        [],$        []$    ];$    $var intestazione = new Array();$intestazione = ['Width (cm)','Projection (cm)'];    $vt[0][0]=this.extra_var.LARGHEZZA_TELO;$vt[0][1]=this.extra_var.SPORGENZA_TELO;$$pezzi = 1;$vettore = vt;$$vettore.splice(0, 0, intestazione);$$nota = 'Fabric Dimensions'; $"} }, 
  {  'key': '9',  'rifcode': 'GR0357',  'parent': '',  'parent_key': '',  'livello': '0',  'posizione': 'GR0357',  'tipo_kit': '6',  'funzione': {'codice': "if((this.input.GAMBE=='YES')&&(this.input.TIPO_GAMBA=='STANDARD')&&(this.input.TIPO_SUPP_CASSONETTO=='WALL'))$    pezzi = 2;$else$    pezzi = 0;$    $"} }, 
  {  'key': '9-0',  'rifcode': '272349',  'parent': 'GR0357',  'parent_key': '9',  'livello': '1',  'posizione': '01',  'tipo_kit': '4',  'funzione': {'codice': " pezzi = 1;  $"} }, 
  {  'key': '9-0-0',  'rifcode': '090365',  'parent': '272349',  'parent_key': '9-0',  'livello': '2',  'posizione': '01',  'tipo_kit': '',  'funzione': {'codice': " pezzi = 2;  $"} }, 
  {  'key': '9-0-1',  'rifcode': '090359',  'parent': '272349',  'parent_key': '9-0',  'livello': '2',  'posizione': '02',  'tipo_kit': '',  'funzione': {'codice': "  pezzi = 2;    $"} }, 
  {  'key': '9-0-2',  'rifcode': '090362',  'parent': '272349',  'parent_key': '9-0',  'livello': '2',  'posizione': '03',  'tipo_kit': '',  'funzione': {'codice': " pezzi = 2;  $"} }, 
  {  'key': '9-0-3',  'rifcode': '131380',  'parent': '272349',  'parent_key': '9-0',  'livello': '2',  'posizione': '04',  'tipo_kit': '',  'funzione': {'codice': " pezzi = 2;  $"} }, 
  {  'key': '9-0-4',  'rifcode': '140578',  'parent': '272349',  'parent_key': '9-0',  'livello': '2',  'posizione': '05',  'tipo_kit': '',  'funzione': {'codice': "  pezzi = 4;    $"} }, 
  {  'key': '9-0-5',  'rifcode': '146430',  'parent': '272349',  'parent_key': '9-0',  'livello': '2',  'posizione': '06',  'tipo_kit': '',  'funzione': {'codice': "  pezzi = 6;    $"} }, 
  {  'key': '9-1',  'rifcode': '130186',  'parent': 'GR0357',  'parent_key': '9',  'livello': '1',  'posizione': '02',  'tipo_kit': '',  'funzione': {'codice': " pezzi = 2;  $"} }, 
  {  'key': '9-2',  'rifcode': '140707',  'parent': 'GR0357',  'parent_key': '9',  'livello': '1',  'posizione': '03',  'tipo_kit': '',  'funzione': {'codice': " pezzi = 4;  $"} }, 
  {  'key': '10',  'rifcode': 'GR0358',  'parent': '',  'parent_key': '',  'livello': '0',  'posizione': 'GR0358',  'tipo_kit': '6',  'funzione': {'codice': "if((this.input.GAMBE=='YES')&&(this.input.TIPO_GAMBA=='STANDARD')&&(this.input.TIPO_SUPP_CASSONETTO=='CEILING'))$    switch (this.input.TIPO_ATT_SOFFITTO) {$        case 'STANDARD':$            pezzi = 2;$            break;$        case 'FIX POSITION':$            pezzi = 0;$            break;$    }$else$    pezzi = 0;$$"} }, 
  {  'key': '10-0',  'rifcode': '272350',  'parent': 'GR0358',  'parent_key': '10',  'livello': '1',  'posizione': '01',  'tipo_kit': '4',  'funzione': {'codice': " pezzi = 2;  $"} }, 
  {  'key': '10-0-0',  'rifcode': '122255',  'parent': '272350',  'parent_key': '10-0',  'livello': '2',  'posizione': '01',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;   $"} }, 
  {  'key': '10-0-1',  'rifcode': '140707',  'parent': '272350',  'parent_key': '10-0',  'livello': '2',  'posizione': '02',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 4;   $"} }, 
  {  'key': '10-1',  'rifcode': '272349',  'parent': 'GR0358',  'parent_key': '10',  'livello': '1',  'posizione': '02',  'tipo_kit': '4',  'funzione': {'codice': "pezzi = 1;$"} }, 
  {  'key': '10-1-0',  'rifcode': '090365',  'parent': '272349',  'parent_key': '10-1',  'livello': '2',  'posizione': '01',  'tipo_kit': '',  'funzione': {'codice': " pezzi = 2;  $"} }, 
  {  'key': '10-1-1',  'rifcode': '090359',  'parent': '272349',  'parent_key': '10-1',  'livello': '2',  'posizione': '02',  'tipo_kit': '',  'funzione': {'codice': "  pezzi = 2;    $"} }, 
  {  'key': '10-1-2',  'rifcode': '090362',  'parent': '272349',  'parent_key': '10-1',  'livello': '2',  'posizione': '03',  'tipo_kit': '',  'funzione': {'codice': " pezzi = 2;  $"} }, 
  {  'key': '10-1-3',  'rifcode': '131380',  'parent': '272349',  'parent_key': '10-1',  'livello': '2',  'posizione': '04',  'tipo_kit': '',  'funzione': {'codice': " pezzi = 2;  $"} }, 
  {  'key': '10-1-4',  'rifcode': '140578',  'parent': '272349',  'parent_key': '10-1',  'livello': '2',  'posizione': '05',  'tipo_kit': '',  'funzione': {'codice': "  pezzi = 4;    $"} }, 
  {  'key': '10-1-5',  'rifcode': '146430',  'parent': '272349',  'parent_key': '10-1',  'livello': '2',  'posizione': '06',  'tipo_kit': '',  'funzione': {'codice': "  pezzi = 6;    $"} }, 
  {  'key': '10-2',  'rifcode': '130186',  'parent': 'GR0358',  'parent_key': '10',  'livello': '1',  'posizione': '03',  'tipo_kit': '',  'funzione': {'codice': " pezzi = 2;  $"} }, 
  {  'key': '10-3',  'rifcode': '140707',  'parent': 'GR0358',  'parent_key': '10',  'livello': '1',  'posizione': '04',  'tipo_kit': '',  'funzione': {'codice': " pezzi = 4;  $"} }, 
  {  'key': '11',  'rifcode': 'GR0359',  'parent': '',  'parent_key': '',  'livello': '0',  'posizione': 'GR0359',  'tipo_kit': '6',  'funzione': {'codice': "/* annullato$$if((this.input.GAMBE=='YES')&&(this.input.TIPO_GAMBA=='TELESCOPIC'))$    pezzi = 3;$else$    pezzi = 0;  $*/$$pezzi = 0;$"} }, 
  {  'key': '11-0',  'rifcode': '146424',  'parent': 'GR0359',  'parent_key': '11',  'livello': '1',  'posizione': '01',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 2;$"} }, 
  {  'key': '11-1',  'rifcode': '140472',  'parent': 'GR0359',  'parent_key': '11',  'livello': '1',  'posizione': '04',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 4;$"} }, 
  {  'key': '11-2',  'rifcode': '122232',  'parent': 'GR0359',  'parent_key': '11',  'livello': '1',  'posizione': '10',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;$"} }, 
  {  'key': '11-3',  'rifcode': '130186',  'parent': 'GR0359',  'parent_key': '11',  'livello': '1',  'posizione': '11',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;$"} }, 
  {  'key': '11-4',  'rifcode': '140707',  'parent': 'GR0359',  'parent_key': '11',  'livello': '1',  'posizione': '12',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 2;$"} }, 
  {  'key': '11-5',  'rifcode': '090360',  'parent': 'GR0359',  'parent_key': '11',  'livello': '1',  'posizione': '13',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;$"} }, 
  {  'key': '11-6',  'rifcode': '131381',  'parent': 'GR0359',  'parent_key': '11',  'livello': '1',  'posizione': '14',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 2;$"} }, 
  {  'key': '11-7',  'rifcode': '140508',  'parent': 'GR0359',  'parent_key': '11',  'livello': '1',  'posizione': '15',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 4;$"} }, 
  {  'key': '11-8',  'rifcode': '140783',  'parent': 'GR0359',  'parent_key': '11',  'livello': '1',  'posizione': '16',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 3;$"} }, 
  {  'key': '11-9',  'rifcode': '090366',  'parent': 'GR0359',  'parent_key': '11',  'livello': '1',  'posizione': '17',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;$"} }, 
  {  'key': '12',  'rifcode': 'GR0360',  'parent': '',  'parent_key': '',  'livello': '0',  'posizione': 'GR0360',  'tipo_kit': '6',  'funzione': {'codice': "//SNODO GAMBA DX SINGOLO$if(this.input.GAMBE=='YES')$    if(this.input.ACCOPPIAMENTO=='NO')$        pezzi = 0;$    else$        switch (this.input.TIPO_ACCOPPIAMENTO) {$            case 'MAIN':$                pezzi = 0;$                break;$            case 'CENTRAL':$                pezzi = 0;$                break;$            case 'LATERAL':$                pezzi = 1;$                break;$        }$else$    pezzi = 0;$"} }, 
  {  'key': '12-0',  'rifcode': '272351',  'parent': 'GR0360',  'parent_key': '12',  'livello': '1',  'posizione': '01',  'tipo_kit': '4',  'funzione': {'codice': "pezzi = 1;$"} }, 
  {  'key': '12-0-0',  'rifcode': '131389',  'parent': '272351',  'parent_key': '12-0',  'livello': '2',  'posizione': '01',  'tipo_kit': '',  'funzione': {'codice': " pezzi = 2;  $"} }, 
  {  'key': '12-0-1',  'rifcode': '122242',  'parent': '272351',  'parent_key': '12-0',  'livello': '2',  'posizione': '02',  'tipo_kit': '',  'funzione': {'codice': " pezzi = 2;     $"} }, 
  {  'key': '12-0-2',  'rifcode': '111343',  'parent': '272351',  'parent_key': '12-0',  'livello': '2',  'posizione': '03',  'tipo_kit': '',  'funzione': {'codice': " pezzi = 4;     $"} }, 
  {  'key': '12-0-3',  'rifcode': '140588',  'parent': '272351',  'parent_key': '12-0',  'livello': '2',  'posizione': '04',  'tipo_kit': '',  'funzione': {'codice': " pezzi = 4;     $"} }, 
  {  'key': '12-1',  'rifcode': '272360',  'parent': 'GR0360',  'parent_key': '12',  'livello': '1',  'posizione': '02',  'tipo_kit': '6',  'funzione': {'codice': " pezzi = 1;  $"} }, 
  {  'key': '12-1-0',  'rifcode': '131091',  'parent': '272360',  'parent_key': '12-1',  'livello': '2',  'posizione': '01',  'tipo_kit': '',  'funzione': {'codice': " pezzi = 2;     $"} }, 
  {  'key': '12-1-1',  'rifcode': '140564',  'parent': '272360',  'parent_key': '12-1',  'livello': '2',  'posizione': '02',  'tipo_kit': '',  'funzione': {'codice': " pezzi = 4;     $"} }, 
  {  'key': '13',  'rifcode': 'GR0360',  'parent': '',  'parent_key': '',  'livello': '0',  'posizione': 'GR0360',  'tipo_kit': '6',  'funzione': {'codice': "//SNODO GAMBA SX SINGOLO$if(this.input.GAMBE=='YES')$    if(this.input.ACCOPPIAMENTO=='NO')$        pezzi = 2;$    else$        switch (this.input.TIPO_ACCOPPIAMENTO) {$            case 'MAIN':$                pezzi = 1;$                break;$            case 'CENTRAL':$                pezzi = 0;$                break;$            case 'LATERAL':$                pezzi = 0;$                break;$        }$else$    pezzi = 0;$"} }, 
  {  'key': '13-0',  'rifcode': '272351',  'parent': 'GR0360',  'parent_key': '13',  'livello': '1',  'posizione': '01',  'tipo_kit': '4',  'funzione': {'codice': "pezzi = 1;$"} }, 
  {  'key': '13-0-0',  'rifcode': '131389',  'parent': '272351',  'parent_key': '13-0',  'livello': '2',  'posizione': '01',  'tipo_kit': '',  'funzione': {'codice': " pezzi = 2;  $"} }, 
  {  'key': '13-0-1',  'rifcode': '122242',  'parent': '272351',  'parent_key': '13-0',  'livello': '2',  'posizione': '02',  'tipo_kit': '',  'funzione': {'codice': " pezzi = 2;     $"} }, 
  {  'key': '13-0-2',  'rifcode': '111343',  'parent': '272351',  'parent_key': '13-0',  'livello': '2',  'posizione': '03',  'tipo_kit': '',  'funzione': {'codice': " pezzi = 4;     $"} }, 
  {  'key': '13-0-3',  'rifcode': '140588',  'parent': '272351',  'parent_key': '13-0',  'livello': '2',  'posizione': '04',  'tipo_kit': '',  'funzione': {'codice': " pezzi = 4;     $"} }, 
  {  'key': '13-1',  'rifcode': '272360',  'parent': 'GR0360',  'parent_key': '13',  'livello': '1',  'posizione': '02',  'tipo_kit': '6',  'funzione': {'codice': " pezzi = 1;  $"} }, 
  {  'key': '13-1-0',  'rifcode': '131091',  'parent': '272360',  'parent_key': '13-1',  'livello': '2',  'posizione': '01',  'tipo_kit': '',  'funzione': {'codice': " pezzi = 2;     $"} }, 
  {  'key': '13-1-1',  'rifcode': '140564',  'parent': '272360',  'parent_key': '13-1',  'livello': '2',  'posizione': '02',  'tipo_kit': '',  'funzione': {'codice': " pezzi = 4;     $"} }, 
  {  'key': '14',  'rifcode': 'GR0361',  'parent': '',  'parent_key': '',  'livello': '0',  'posizione': 'GR0361',  'tipo_kit': '6',  'funzione': {'codice': "//SNODO GAMBA DX ACCOPPIATO$if(this.input.GAMBE=='YES')$    if(this.input.ACCOPPIAMENTO=='NO')$        pezzi = 0;$    else$        switch (this.input.TIPO_ACCOPPIAMENTO) {$            case 'MAIN':$                pezzi = 1;$                break;$            case 'CENTRAL':$                pezzi = 1;$                break;$            case 'LATERAL':$                pezzi = 0;$                break;$        }$else$    pezzi = 0;$"} }, 
  {  'key': '14-0',  'rifcode': '131389',  'parent': 'GR0361',  'parent_key': '14',  'livello': '1',  'posizione': '01',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;$"} }, 
  {  'key': '14-1',  'rifcode': '272360',  'parent': 'GR0361',  'parent_key': '14',  'livello': '1',  'posizione': '02',  'tipo_kit': '6',  'funzione': {'codice': " pezzi = 1;  $"} }, 
  {  'key': '14-1-0',  'rifcode': '131091',  'parent': '272360',  'parent_key': '14-1',  'livello': '2',  'posizione': '01',  'tipo_kit': '',  'funzione': {'codice': " pezzi = 2;     $"} }, 
  {  'key': '14-1-1',  'rifcode': '140564',  'parent': '272360',  'parent_key': '14-1',  'livello': '2',  'posizione': '02',  'tipo_kit': '',  'funzione': {'codice': " pezzi = 4;     $"} }, 
  {  'key': '14-2',  'rifcode': '122241',  'parent': 'GR0361',  'parent_key': '14',  'livello': '1',  'posizione': '03',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;$"} }, 
  {  'key': '14-3',  'rifcode': '140588',  'parent': 'GR0361',  'parent_key': '14',  'livello': '1',  'posizione': '04',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 2;$"} }, 
  {  'key': '14-4',  'rifcode': '111343',  'parent': 'GR0361',  'parent_key': '14',  'livello': '1',  'posizione': '05',  'tipo_kit': '',  'funzione': {'codice': " pezzi = 2;  $"} }, 
  {  'key': '15',  'rifcode': 'GR0362',  'parent': '',  'parent_key': '',  'livello': '0',  'posizione': 'GR0362',  'tipo_kit': '6',  'funzione': {'codice': "//this.input.FRANGITRATTA '1' this.input.FRANGITRATTA 'NO' this.input.FRANGITRATTA '2' $    $switch (this.input.FRANGITRATTA) {$    case 'NO':$        tmp  = 0;$        tmp2 = 0;$        break;$    case '1':$        tmp  = 1;$        tmp2 = 1;$        break;$    case 'MAX 2':$        tmp  = 1;$        tmp2 = 2;$        break;$}$        $if((this.input.LARGHEZZA >= 500)||(this.input.SPORGENZA >= 500))$    pezzi = 1 + tmp;$else$    pezzi = 0 + tmp2;$"} }, 
  {  'key': '15-0',  'rifcode': '010618',  'parent': 'GR0362',  'parent_key': '15',  'livello': '1',  'posizione': '01',  'tipo_kit': '',  'funzione': {'codice': " pezzi = 1;$$taglio = this.input.LARGHEZZA - 5.4;  $"} }, 
  {  'key': '15-1',  'rifcode': '272353',  'parent': 'GR0362',  'parent_key': '15',  'livello': '1',  'posizione': '02',  'tipo_kit': '4',  'funzione': {'codice': "pezzi = 1;$"} }, 
  {  'key': '15-1-0',  'rifcode': '131391',  'parent': '272353',  'parent_key': '15-1',  'livello': '2',  'posizione': '01',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 2;$"} }, 
  {  'key': '15-1-1',  'rifcode': '090361',  'parent': '272353',  'parent_key': '15-1',  'livello': '2',  'posizione': '02',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 2;   $"} }, 
  {  'key': '15-1-2',  'rifcode': '146440',  'parent': '272353',  'parent_key': '15-1',  'livello': '2',  'posizione': '03',  'tipo_kit': '',  'funzione': {'codice': "//grano EI punta conica M8x50 INOX  A2  $pezzi = 2;$"} }, 
  {  'key': '15-1-3',  'rifcode': '140856',  'parent': '272353',  'parent_key': '15-1',  'livello': '2',  'posizione': '04',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 4;   $"} }, 
  {  'key': '15-1-4',  'rifcode': '140812',  'parent': '272353',  'parent_key': '15-1',  'livello': '2',  'posizione': '05',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 8;$"} }, 
  {  'key': '15-2',  'rifcode': '272354',  'parent': 'GR0362',  'parent_key': '15',  'livello': '1',  'posizione': '03',  'tipo_kit': '4',  'funzione': {'codice': "pezzi = 1;   $"} }, 
  {  'key': '15-2-0',  'rifcode': '122236',  'parent': '272354',  'parent_key': '15-2',  'livello': '2',  'posizione': '01',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 2;   $"} }, 
  {  'key': '15-2-1',  'rifcode': '160125',  'parent': '272354',  'parent_key': '15-2',  'livello': '2',  'posizione': '02',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 2;$"} }, 
  {  'key': '15-3',  'rifcode': '111465',  'parent': 'GR0362',  'parent_key': '15',  'livello': '1',  'posizione': '04',  'tipo_kit': '',  'funzione': {'codice': " pezzi = Math.ceil(this.input.LARGHEZZA/120)-1;  $"} }, 
  {  'key': '16',  'rifcode': 'GR0363',  'parent': '',  'parent_key': '',  'livello': '0',  'posizione': 'GR0363',  'tipo_kit': '6',  'funzione': {'codice': "$if((this.input.GAMBE=='YES')&&$   (this.input.TIPO_SUPP_CASSONETTO=='WALL')&&$   (this.input.TETTUCCIO=='YES' ))$    pezzi = 1;$else$    pezzi = 0;$"} }, 
  {  'key': '16-0',  'rifcode': '010616',  'parent': 'GR0363',  'parent_key': '16',  'livello': '1',  'posizione': '01',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;$taglio = this.input.LARGHEZZA - 0.1;$"} }, 
  {  'key': '16-1',  'rifcode': '020117',  'parent': 'GR0363',  'parent_key': '16',  'livello': '1',  'posizione': '02',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;$taglio = this.input.LARGHEZZA - 0.1;$"} }, 
  {  'key': '16-2',  'rifcode': '020032',  'parent': 'GR0363',  'parent_key': '16',  'livello': '1',  'posizione': '03',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;$taglio = this.input.LARGHEZZA - 0.1;$"} }, 
  {  'key': '16-3',  'rifcode': '122246',  'parent': 'GR0363',  'parent_key': '16',  'livello': '1',  'posizione': '04',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 2;$"} }, 
  {  'key': '16-4',  'rifcode': '141952',  'parent': 'GR0363',  'parent_key': '16',  'livello': '1',  'posizione': '05',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 4;$"} }, 
  {  'key': '16-5',  'rifcode': '272347',  'parent': 'GR0363',  'parent_key': '16',  'livello': '1',  'posizione': '06',  'tipo_kit': '4',  'funzione': {'codice': "pezzi = 1;   $"} }, 
  {  'key': '16-5-0',  'rifcode': '090363',  'parent': '272347',  'parent_key': '16-5',  'livello': '2',  'posizione': '01',  'tipo_kit': '',  'funzione': {'codice': " pezzi = 2;      $"} }, 
  {  'key': '16-5-1',  'rifcode': '146409',  'parent': '272347',  'parent_key': '16-5',  'livello': '2',  'posizione': '02',  'tipo_kit': '',  'funzione': {'codice': " pezzi = 2;     $"} }, 
  {  'key': '16-5-2',  'rifcode': '131374',  'parent': '272347',  'parent_key': '16-5',  'livello': '2',  'posizione': '03',  'tipo_kit': '',  'funzione': {'codice': " pezzi = 2;     $"} }, 
  {  'key': '16-5-3',  'rifcode': '146426',  'parent': '272347',  'parent_key': '16-5',  'livello': '2',  'posizione': '04',  'tipo_kit': '',  'funzione': {'codice': " pezzi = 2;     $"} }, 
  {  'key': '16-5-4',  'rifcode': '146338',  'parent': '272347',  'parent_key': '16-5',  'livello': '2',  'posizione': '05',  'tipo_kit': '',  'funzione': {'codice': " pezzi = 4;     $"} }, 
  {  'key': '16-5-5',  'rifcode': '140658',  'parent': '272347',  'parent_key': '16-5',  'livello': '2',  'posizione': '06',  'tipo_kit': '',  'funzione': {'codice': " pezzi = 2;     $"} }, 
  {  'key': '16-6',  'rifcode': '272359',  'parent': 'GR0363',  'parent_key': '16',  'livello': '1',  'posizione': '07',  'tipo_kit': '4',  'funzione': {'codice': " if(this.input.LARGHEZZA > 400)$pezzi = 1;$else$pezzi = 0;  $"} }, 
  {  'key': '16-6-0',  'rifcode': '090363',  'parent': '272359',  'parent_key': '16-6',  'livello': '2',  'posizione': '01',  'tipo_kit': '',  'funzione': {'codice': "  pezzi = 1;    $"} }, 
  {  'key': '16-6-1',  'rifcode': '146409',  'parent': '272359',  'parent_key': '16-6',  'livello': '2',  'posizione': '02',  'tipo_kit': '',  'funzione': {'codice': "  pezzi = 1;    $"} }, 
  {  'key': '16-6-2',  'rifcode': '131406',  'parent': '272359',  'parent_key': '16-6',  'livello': '2',  'posizione': '03',  'tipo_kit': '',  'funzione': {'codice': "  pezzi = 1;    $"} }, 
  {  'key': '16-6-3',  'rifcode': '146426',  'parent': '272359',  'parent_key': '16-6',  'livello': '2',  'posizione': '04',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;$"} }, 
  {  'key': '16-6-4',  'rifcode': '140658',  'parent': '272359',  'parent_key': '16-6',  'livello': '2',  'posizione': '05',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;   $"} }, 
  {  'key': '17',  'rifcode': 'GR0364',  'parent': '',  'parent_key': '',  'livello': '0',  'posizione': 'GR0364',  'tipo_kit': '6',  'funzione': {'codice': "//SUPPORTO GUIDA DX APPESO STD$var counter = 0;    $if(this.input.ACCOPPIAMENTO=='NO')$        counter = 1;$else$    switch (this.input.TIPO_ACCOPPIAMENTO) {$        case 'MAIN':$            counter = 0;$            break;$        case 'CENTRAL':$            counter = 0;$            break;$        case 'LATERAL':$            counter = 1;$            break;$    }$if((this.input.GAMBE=='NO')&&(this.extra_var.TIPOLOGIA_SUPPORTO_GUIDA==10))$    pezzi = (this.extra_var.SUPPORTI_GUIDA + this.input.SUPPORTI_AGGIUNTIVI_GUIDA) * counter;$else$    pezzi = 0; $$"} }, 
  {  'key': '17-0',  'rifcode': '272357',  'parent': 'GR0364',  'parent_key': '17',  'livello': '1',  'posizione': '01',  'tipo_kit': '4',  'funzione': {'codice': "pezzi = 1;  $"} }, 
  {  'key': '17-0-0',  'rifcode': '090361',  'parent': '272357',  'parent_key': '17-0',  'livello': '2',  'posizione': '01',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;$"} }, 
  {  'key': '17-0-1',  'rifcode': '146421',  'parent': '272357',  'parent_key': '17-0',  'livello': '2',  'posizione': '02',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;   $"} }, 
  {  'key': '17-0-2',  'rifcode': '111467',  'parent': '272357',  'parent_key': '17-0',  'livello': '2',  'posizione': '03',  'tipo_kit': '',  'funzione': {'codice': " pezzi = 2;     $"} }, 
  {  'key': '17-1',  'rifcode': '131385',  'parent': 'GR0364',  'parent_key': '17',  'livello': '1',  'posizione': '02',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;$"} }, 
  {  'key': '17-2',  'rifcode': '140612',  'parent': 'GR0364',  'parent_key': '17',  'livello': '1',  'posizione': '03',  'tipo_kit': '',  'funzione': {'codice': " pezzi = 2;  $"} }, 
  {  'key': '17-3',  'rifcode': '140485',  'parent': 'GR0364',  'parent_key': '17',  'livello': '1',  'posizione': '04',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 2;$"} }, 
  {  'key': '17-4',  'rifcode': '140522',  'parent': 'GR0364',  'parent_key': '17',  'livello': '1',  'posizione': '05',  'tipo_kit': '',  'funzione': {'codice': " pezzi = 2;  $"} }, 
  {  'key': '18',  'rifcode': 'GR0364',  'parent': '',  'parent_key': '',  'livello': '0',  'posizione': 'GR0364',  'tipo_kit': '6',  'funzione': {'codice': "//SUPPORTO GUIDA SX APPESO STD$var counter = 0;    $if(this.input.ACCOPPIAMENTO=='NO')$        counter = 1;$else$    switch (this.input.TIPO_ACCOPPIAMENTO) {$        case 'MAIN':$            counter = 1;$            break;$        case 'CENTRAL':$            counter = 0;$            break;$        case 'LATERAL':$            counter = 0;$            break;$    }$if((this.input.GAMBE=='NO')&&(this.extra_var.TIPOLOGIA_SUPPORTO_GUIDA==10))$    pezzi = (this.extra_var.SUPPORTI_GUIDA + this.input.SUPPORTI_AGGIUNTIVI_GUIDA) * counter;$else$    pezzi = 0; $"} }, 
  {  'key': '18-0',  'rifcode': '272357',  'parent': 'GR0364',  'parent_key': '18',  'livello': '1',  'posizione': '01',  'tipo_kit': '4',  'funzione': {'codice': "pezzi = 1;  $"} }, 
  {  'key': '18-0-0',  'rifcode': '090361',  'parent': '272357',  'parent_key': '18-0',  'livello': '2',  'posizione': '01',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;$"} }, 
  {  'key': '18-0-1',  'rifcode': '146421',  'parent': '272357',  'parent_key': '18-0',  'livello': '2',  'posizione': '02',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;   $"} }, 
  {  'key': '18-0-2',  'rifcode': '111467',  'parent': '272357',  'parent_key': '18-0',  'livello': '2',  'posizione': '03',  'tipo_kit': '',  'funzione': {'codice': " pezzi = 2;     $"} }, 
  {  'key': '18-1',  'rifcode': '131385',  'parent': 'GR0364',  'parent_key': '18',  'livello': '1',  'posizione': '02',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;$"} }, 
  {  'key': '18-2',  'rifcode': '140612',  'parent': 'GR0364',  'parent_key': '18',  'livello': '1',  'posizione': '03',  'tipo_kit': '',  'funzione': {'codice': " pezzi = 2;  $"} }, 
  {  'key': '18-3',  'rifcode': '140485',  'parent': 'GR0364',  'parent_key': '18',  'livello': '1',  'posizione': '04',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 2;$"} }, 
  {  'key': '18-4',  'rifcode': '140522',  'parent': 'GR0364',  'parent_key': '18',  'livello': '1',  'posizione': '05',  'tipo_kit': '',  'funzione': {'codice': " pezzi = 2;  $"} }, 
  {  'key': '19',  'rifcode': 'GR0365D',  'parent': '',  'parent_key': '',  'livello': '0',  'posizione': 'GR0365',  'tipo_kit': '6',  'funzione': {'codice': "//SUPPORTO GUIDA DX APPOGGIATO STD$var counter = 0;    $if(this.input.ACCOPPIAMENTO=='NO')$        counter = 1;$else$    switch (this.input.TIPO_ACCOPPIAMENTO) {$        case 'MAIN':$            counter = 0;$            break;$        case 'CENTRAL':$            counter = 0;$            break;$        case 'LATERAL':$            counter = 1;$            break;$    }$if((this.input.GAMBE=='NO')&&(this.extra_var.TIPOLOGIA_SUPPORTO_GUIDA==15))$    pezzi = (this.extra_var.SUPPORTI_GUIDA + this.input.SUPPORTI_AGGIUNTIVI_GUIDA) * counter;$else$    pezzi = 0; $"} }, 
  {  'key': '19-0',  'rifcode': 'GR0365B',  'parent': 'GR0365D',  'parent_key': '19',  'livello': '1',  'posizione': '00',  'tipo_kit': '6',  'funzione': {'codice': "pezzi = 1;$"} }, 
  {  'key': '19-0-0',  'rifcode': '272357',  'parent': 'GR0365B',  'parent_key': '19-0',  'livello': '2',  'posizione': '01',  'tipo_kit': '4',  'funzione': {'codice': "pezzi = 1;$$"} }, 
  {  'key': '19-0-0-0',  'rifcode': '090361',  'parent': '272357',  'parent_key': '19-0-0',  'livello': '3',  'posizione': '01',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;$"} }, 
  {  'key': '19-0-0-1',  'rifcode': '146421',  'parent': '272357',  'parent_key': '19-0-0',  'livello': '3',  'posizione': '02',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;   $"} }, 
  {  'key': '19-0-0-2',  'rifcode': '111467',  'parent': '272357',  'parent_key': '19-0-0',  'livello': '3',  'posizione': '03',  'tipo_kit': '',  'funzione': {'codice': " pezzi = 2;     $"} }, 
  {  'key': '19-0-1',  'rifcode': '131385',  'parent': 'GR0365B',  'parent_key': '19-0',  'livello': '2',  'posizione': '02',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;$"} }, 
  {  'key': '19-0-2',  'rifcode': '146144',  'parent': 'GR0365B',  'parent_key': '19-0',  'livello': '2',  'posizione': '03',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 2;$"} }, 
  {  'key': '19-0-3',  'rifcode': '146178',  'parent': 'GR0365B',  'parent_key': '19-0',  'livello': '2',  'posizione': '04',  'tipo_kit': '',  'funzione': {'codice': " pezzi = 2;  $"} }, 
  {  'key': '19-1',  'rifcode': '010344',  'parent': 'GR0365D',  'parent_key': '19',  'livello': '1',  'posizione': '05',  'tipo_kit': '',  'funzione': {'codice': " pezzi = 1;$taglio = this.input.ALTEZZA_SUPPORTO_GUIDA;  $"} }, 
  {  'key': '20',  'rifcode': 'GR0365S',  'parent': '',  'parent_key': '',  'livello': '0',  'posizione': 'GR0365',  'tipo_kit': '6',  'funzione': {'codice': "//SUPPORTO GUIDA SX APPOGGIATO STD$var counter = 0;    $if(this.input.ACCOPPIAMENTO=='NO')$        counter = 1;$else$    switch (this.input.TIPO_ACCOPPIAMENTO) {$        case 'MAIN':$            counter = 1;$            break;$        case 'CENTRAL':$            counter = 0;$            break;$        case 'LATERAL':$            counter = 0;$            break;$    }$if((this.input.GAMBE=='NO')&&(this.extra_var.TIPOLOGIA_SUPPORTO_GUIDA==15))$    pezzi = (this.extra_var.SUPPORTI_GUIDA + this.input.SUPPORTI_AGGIUNTIVI_GUIDA) * counter;$else$    pezzi = 0; $"} }, 
  {  'key': '20-0',  'rifcode': 'GR0365B',  'parent': 'GR0365S',  'parent_key': '20',  'livello': '1',  'posizione': '00',  'tipo_kit': '6',  'funzione': {'codice': "pezzi = 1;$"} }, 
  {  'key': '20-0-0',  'rifcode': '272357',  'parent': 'GR0365B',  'parent_key': '20-0',  'livello': '2',  'posizione': '01',  'tipo_kit': '4',  'funzione': {'codice': "pezzi = 1;$$"} }, 
  {  'key': '20-0-0-0',  'rifcode': '090361',  'parent': '272357',  'parent_key': '20-0-0',  'livello': '3',  'posizione': '01',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;$"} }, 
  {  'key': '20-0-0-1',  'rifcode': '146421',  'parent': '272357',  'parent_key': '20-0-0',  'livello': '3',  'posizione': '02',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;   $"} }, 
  {  'key': '20-0-0-2',  'rifcode': '111467',  'parent': '272357',  'parent_key': '20-0-0',  'livello': '3',  'posizione': '03',  'tipo_kit': '',  'funzione': {'codice': " pezzi = 2;     $"} }, 
  {  'key': '20-0-1',  'rifcode': '131385',  'parent': 'GR0365B',  'parent_key': '20-0',  'livello': '2',  'posizione': '02',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;$"} }, 
  {  'key': '20-0-2',  'rifcode': '146144',  'parent': 'GR0365B',  'parent_key': '20-0',  'livello': '2',  'posizione': '03',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 2;$"} }, 
  {  'key': '20-0-3',  'rifcode': '146178',  'parent': 'GR0365B',  'parent_key': '20-0',  'livello': '2',  'posizione': '04',  'tipo_kit': '',  'funzione': {'codice': " pezzi = 2;  $"} }, 
  {  'key': '20-1',  'rifcode': '010344',  'parent': 'GR0365S',  'parent_key': '20',  'livello': '1',  'posizione': '05',  'tipo_kit': '',  'funzione': {'codice': " pezzi = 1;$taglio = this.input.ALTEZZA_SUPPORTO_GUIDA;  $"} }, 
  {  'key': '21',  'rifcode': 'GR0366',  'parent': '',  'parent_key': '',  'livello': '0',  'posizione': 'GR0366',  'tipo_kit': '6',  'funzione': {'codice': "//SUPPORTO GUIDA DX APPESO LATERALE$var counter = 0;    $if(this.input.ACCOPPIAMENTO=='NO')$        counter = 1;$else$    switch (this.input.TIPO_ACCOPPIAMENTO) {$        case 'MAIN':$            counter = 0;$            break;$        case 'CENTRAL':$            counter = 0;$            break;$        case 'LATERAL':$            counter = 1;$            break;$    }$if((this.input.GAMBE=='NO')&&(this.extra_var.TIPOLOGIA_SUPPORTO_GUIDA==14))$    pezzi = (this.extra_var.SUPPORTI_GUIDA + this.input.SUPPORTI_AGGIUNTIVI_GUIDA) * counter;$else$    pezzi = 0; $"} }, 
  {  'key': '21-0',  'rifcode': '272357',  'parent': 'GR0366',  'parent_key': '21',  'livello': '1',  'posizione': '01',  'tipo_kit': '4',  'funzione': {'codice': "pezzi = 1;$"} }, 
  {  'key': '21-0-0',  'rifcode': '090361',  'parent': '272357',  'parent_key': '21-0',  'livello': '2',  'posizione': '01',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;$"} }, 
  {  'key': '21-0-1',  'rifcode': '146421',  'parent': '272357',  'parent_key': '21-0',  'livello': '2',  'posizione': '02',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;   $"} }, 
  {  'key': '21-0-2',  'rifcode': '111467',  'parent': '272357',  'parent_key': '21-0',  'livello': '2',  'posizione': '03',  'tipo_kit': '',  'funzione': {'codice': " pezzi = 2;     $"} }, 
  {  'key': '21-1',  'rifcode': '131386',  'parent': 'GR0366',  'parent_key': '21',  'livello': '1',  'posizione': '02',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;$"} }, 
  {  'key': '21-2',  'rifcode': '140709',  'parent': 'GR0366',  'parent_key': '21',  'livello': '1',  'posizione': '03',  'tipo_kit': '',  'funzione': {'codice': " pezzi = 2;  $"} }, 
  {  'key': '21-3',  'rifcode': '140522',  'parent': 'GR0366',  'parent_key': '21',  'livello': '1',  'posizione': '04',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 2;$"} }, 
  {  'key': '21-4',  'rifcode': '140485',  'parent': 'GR0366',  'parent_key': '21',  'livello': '1',  'posizione': '05',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 2;$"} }, 
  {  'key': '22',  'rifcode': 'GR0366',  'parent': '',  'parent_key': '',  'livello': '0',  'posizione': 'GR0366',  'tipo_kit': '6',  'funzione': {'codice': "//SUPPORTO GUIDA SX APPESO LATERALE$var counter = 0;    $if(this.input.ACCOPPIAMENTO=='NO')$        counter = 1;$else$    switch (this.input.TIPO_ACCOPPIAMENTO) {$        case 'MAIN':$            counter = 1;$            break;$        case 'CENTRAL':$            counter = 0;$            break;$        case 'LATERAL':$            counter = 0;$            break;$    }$if((this.input.GAMBE=='NO')&&(this.extra_var.TIPOLOGIA_SUPPORTO_GUIDA==14))$    pezzi = (this.extra_var.SUPPORTI_GUIDA + this.input.SUPPORTI_AGGIUNTIVI_GUIDA) * counter;$else$    pezzi = 0; $"} }, 
  {  'key': '22-0',  'rifcode': '272357',  'parent': 'GR0366',  'parent_key': '22',  'livello': '1',  'posizione': '01',  'tipo_kit': '4',  'funzione': {'codice': "pezzi = 1;$"} }, 
  {  'key': '22-0-0',  'rifcode': '090361',  'parent': '272357',  'parent_key': '22-0',  'livello': '2',  'posizione': '01',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;$"} }, 
  {  'key': '22-0-1',  'rifcode': '146421',  'parent': '272357',  'parent_key': '22-0',  'livello': '2',  'posizione': '02',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;   $"} }, 
  {  'key': '22-0-2',  'rifcode': '111467',  'parent': '272357',  'parent_key': '22-0',  'livello': '2',  'posizione': '03',  'tipo_kit': '',  'funzione': {'codice': " pezzi = 2;     $"} }, 
  {  'key': '22-1',  'rifcode': '131386',  'parent': 'GR0366',  'parent_key': '22',  'livello': '1',  'posizione': '02',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;$"} }, 
  {  'key': '22-2',  'rifcode': '140709',  'parent': 'GR0366',  'parent_key': '22',  'livello': '1',  'posizione': '03',  'tipo_kit': '',  'funzione': {'codice': " pezzi = 2;  $"} }, 
  {  'key': '22-3',  'rifcode': '140522',  'parent': 'GR0366',  'parent_key': '22',  'livello': '1',  'posizione': '04',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 2;$"} }, 
  {  'key': '22-4',  'rifcode': '140485',  'parent': 'GR0366',  'parent_key': '22',  'livello': '1',  'posizione': '05',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 2;$"} }, 
  {  'key': '23',  'rifcode': 'GR0367D',  'parent': '',  'parent_key': '',  'livello': '0',  'posizione': 'GR0367',  'tipo_kit': '6',  'funzione': {'codice': "//SUPPORTO GUIDA DX APPOGGIATO LATERALE$var counter = 0;    $if(this.input.ACCOPPIAMENTO=='NO')$        counter = 1;$else$    switch (this.input.TIPO_ACCOPPIAMENTO) {$        case 'MAIN':$            counter = 0;$            break;$        case 'CENTRAL':$            counter = 0;$            break;$        case 'LATERAL':$            counter = 1;$            break;$    }$if((this.input.GAMBE=='NO')&&(this.extra_var.TIPOLOGIA_SUPPORTO_GUIDA==21))$    pezzi = (this.extra_var.SUPPORTI_GUIDA + this.input.SUPPORTI_AGGIUNTIVI_GUIDA) * counter;$else$    pezzi = 0; $"} }, 
  {  'key': '23-0',  'rifcode': 'GR0367B',  'parent': 'GR0367D',  'parent_key': '23',  'livello': '1',  'posizione': '00',  'tipo_kit': '6',  'funzione': {'codice': "pezzi = 1;$"} }, 
  {  'key': '23-0-0',  'rifcode': '272357',  'parent': 'GR0367B',  'parent_key': '23-0',  'livello': '2',  'posizione': '01',  'tipo_kit': '4',  'funzione': {'codice': "pezzi = 1;$"} }, 
  {  'key': '23-0-0-0',  'rifcode': '090361',  'parent': '272357',  'parent_key': '23-0-0',  'livello': '3',  'posizione': '01',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;$"} }, 
  {  'key': '23-0-0-1',  'rifcode': '146421',  'parent': '272357',  'parent_key': '23-0-0',  'livello': '3',  'posizione': '02',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;   $"} }, 
  {  'key': '23-0-0-2',  'rifcode': '111467',  'parent': '272357',  'parent_key': '23-0-0',  'livello': '3',  'posizione': '03',  'tipo_kit': '',  'funzione': {'codice': " pezzi = 2;     $"} }, 
  {  'key': '23-0-1',  'rifcode': '131386',  'parent': 'GR0367B',  'parent_key': '23-0',  'livello': '2',  'posizione': '02',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;$"} }, 
  {  'key': '23-0-2',  'rifcode': '140606',  'parent': 'GR0367B',  'parent_key': '23-0',  'livello': '2',  'posizione': '03',  'tipo_kit': '',  'funzione': {'codice': " pezzi = 1  ;$"} }, 
  {  'key': '23-0-3',  'rifcode': '146178',  'parent': 'GR0367B',  'parent_key': '23-0',  'livello': '2',  'posizione': '04',  'tipo_kit': '',  'funzione': {'codice': " pezzi = 4;  $"} }, 
  {  'key': '23-1',  'rifcode': '010344',  'parent': 'GR0367D',  'parent_key': '23',  'livello': '1',  'posizione': '05',  'tipo_kit': '',  'funzione': {'codice': " pezzi = 1;$taglio = this.input.ALTEZZA_SUPPORTO_GUIDA;  $"} }, 
  {  'key': '24',  'rifcode': 'GR0367S',  'parent': '',  'parent_key': '',  'livello': '0',  'posizione': 'GR0367',  'tipo_kit': '6',  'funzione': {'codice': "//SUPPORTO GUIDA SX APPOGGIATO LATERALE$var counter = 0;    $if(this.input.ACCOPPIAMENTO=='NO')$        counter = 1;$else$    switch (this.input.TIPO_ACCOPPIAMENTO) {$        case 'MAIN':$            counter = 1;$            break;$        case 'CENTRAL':$            counter = 0;$            break;$        case 'LATERAL':$            counter = 0;$            break;$    }$if((this.input.GAMBE=='NO')&&(this.extra_var.TIPOLOGIA_SUPPORTO_GUIDA==21))$    pezzi = (this.extra_var.SUPPORTI_GUIDA + this.input.SUPPORTI_AGGIUNTIVI_GUIDA) * counter;$else$    pezzi = 0; $"} }, 
  {  'key': '24-0',  'rifcode': 'GR0367B',  'parent': 'GR0367S',  'parent_key': '24',  'livello': '1',  'posizione': '00',  'tipo_kit': '6',  'funzione': {'codice': "pezzi = 1;$"} }, 
  {  'key': '24-0-0',  'rifcode': '272357',  'parent': 'GR0367B',  'parent_key': '24-0',  'livello': '2',  'posizione': '01',  'tipo_kit': '4',  'funzione': {'codice': "pezzi = 1;$"} }, 
  {  'key': '24-0-0-0',  'rifcode': '090361',  'parent': '272357',  'parent_key': '24-0-0',  'livello': '3',  'posizione': '01',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;$"} }, 
  {  'key': '24-0-0-1',  'rifcode': '146421',  'parent': '272357',  'parent_key': '24-0-0',  'livello': '3',  'posizione': '02',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;   $"} }, 
  {  'key': '24-0-0-2',  'rifcode': '111467',  'parent': '272357',  'parent_key': '24-0-0',  'livello': '3',  'posizione': '03',  'tipo_kit': '',  'funzione': {'codice': " pezzi = 2;     $"} }, 
  {  'key': '24-0-1',  'rifcode': '131386',  'parent': 'GR0367B',  'parent_key': '24-0',  'livello': '2',  'posizione': '02',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;$"} }, 
  {  'key': '24-0-2',  'rifcode': '140606',  'parent': 'GR0367B',  'parent_key': '24-0',  'livello': '2',  'posizione': '03',  'tipo_kit': '',  'funzione': {'codice': " pezzi = 1  ;$"} }, 
  {  'key': '24-0-3',  'rifcode': '146178',  'parent': 'GR0367B',  'parent_key': '24-0',  'livello': '2',  'posizione': '04',  'tipo_kit': '',  'funzione': {'codice': " pezzi = 4;  $"} }, 
  {  'key': '24-1',  'rifcode': '010344',  'parent': 'GR0367S',  'parent_key': '24',  'livello': '1',  'posizione': '05',  'tipo_kit': '',  'funzione': {'codice': "  pezzi = 1;$taglio = this.input.ALTEZZA_SUPPORTO_GUIDA;    $"} }, 
  {  'key': '25',  'rifcode': 'GR0368',  'parent': '',  'parent_key': '',  'livello': '0',  'posizione': 'GR0368',  'tipo_kit': '6',  'funzione': {'codice': "//SUPPORTO GUIDA DX APPESO DISALLINEATO$var counter = 0;    $if(this.input.ACCOPPIAMENTO=='NO')$        counter = 1;$else$    switch (this.input.TIPO_ACCOPPIAMENTO) {$        case 'MAIN':$            counter = 0;$            break;$        case 'CENTRAL':$            counter = 0;$            break;$        case 'LATERAL':$            counter = 1;$            break;$    }$if((this.input.GAMBE=='NO')&&(this.extra_var.TIPOLOGIA_SUPPORTO_GUIDA==22))$    pezzi = (this.extra_var.SUPPORTI_GUIDA + this.input.SUPPORTI_AGGIUNTIVI_GUIDA) * counter;$else$    pezzi = 0; $"} }, 
  {  'key': '25-0',  'rifcode': '272357',  'parent': 'GR0368',  'parent_key': '25',  'livello': '1',  'posizione': '01',  'tipo_kit': '4',  'funzione': {'codice': "pezzi = 1;$"} }, 
  {  'key': '25-0-0',  'rifcode': '090361',  'parent': '272357',  'parent_key': '25-0',  'livello': '2',  'posizione': '01',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;$"} }, 
  {  'key': '25-0-1',  'rifcode': '146421',  'parent': '272357',  'parent_key': '25-0',  'livello': '2',  'posizione': '02',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;   $"} }, 
  {  'key': '25-0-2',  'rifcode': '111467',  'parent': '272357',  'parent_key': '25-0',  'livello': '2',  'posizione': '03',  'tipo_kit': '',  'funzione': {'codice': " pezzi = 2;     $"} }, 
  {  'key': '25-1',  'rifcode': '131387',  'parent': 'GR0368',  'parent_key': '25',  'livello': '1',  'posizione': '02',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;$"} }, 
  {  'key': '25-2',  'rifcode': '140612',  'parent': 'GR0368',  'parent_key': '25',  'livello': '1',  'posizione': '03',  'tipo_kit': '',  'funzione': {'codice': " pezzi = 2;  $"} }, 
  {  'key': '25-3',  'rifcode': '140485',  'parent': 'GR0368',  'parent_key': '25',  'livello': '1',  'posizione': '04',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 2;$"} }, 
  {  'key': '25-4',  'rifcode': '140522',  'parent': 'GR0368',  'parent_key': '25',  'livello': '1',  'posizione': '05',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 2;$"} }, 
  {  'key': '26',  'rifcode': 'GR0368',  'parent': '',  'parent_key': '',  'livello': '0',  'posizione': 'GR0368',  'tipo_kit': '6',  'funzione': {'codice': "//SUPPORTO GUIDA SX APPESO DISALLINEATO$var counter = 0;    $if(this.input.ACCOPPIAMENTO=='NO')$        counter = 1;$else$    switch (this.input.TIPO_ACCOPPIAMENTO) {$        case 'MAIN':$            counter = 1;$            break;$        case 'CENTRAL':$            counter = 0;$            break;$        case 'LATERAL':$            counter = 0;$            break;$    }$if((this.input.GAMBE=='NO')&&(this.extra_var.TIPOLOGIA_SUPPORTO_GUIDA==22))$    pezzi = (this.extra_var.SUPPORTI_GUIDA + this.input.SUPPORTI_AGGIUNTIVI_GUIDA) * counter;$else$    pezzi = 0; $"} }, 
  {  'key': '26-0',  'rifcode': '272357',  'parent': 'GR0368',  'parent_key': '26',  'livello': '1',  'posizione': '01',  'tipo_kit': '4',  'funzione': {'codice': "pezzi = 1;$"} }, 
  {  'key': '26-0-0',  'rifcode': '090361',  'parent': '272357',  'parent_key': '26-0',  'livello': '2',  'posizione': '01',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;$"} }, 
  {  'key': '26-0-1',  'rifcode': '146421',  'parent': '272357',  'parent_key': '26-0',  'livello': '2',  'posizione': '02',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;   $"} }, 
  {  'key': '26-0-2',  'rifcode': '111467',  'parent': '272357',  'parent_key': '26-0',  'livello': '2',  'posizione': '03',  'tipo_kit': '',  'funzione': {'codice': " pezzi = 2;     $"} }, 
  {  'key': '26-1',  'rifcode': '131387',  'parent': 'GR0368',  'parent_key': '26',  'livello': '1',  'posizione': '02',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;$"} }, 
  {  'key': '26-2',  'rifcode': '140612',  'parent': 'GR0368',  'parent_key': '26',  'livello': '1',  'posizione': '03',  'tipo_kit': '',  'funzione': {'codice': " pezzi = 2;  $"} }, 
  {  'key': '26-3',  'rifcode': '140485',  'parent': 'GR0368',  'parent_key': '26',  'livello': '1',  'posizione': '04',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 2;$"} }, 
  {  'key': '26-4',  'rifcode': '140522',  'parent': 'GR0368',  'parent_key': '26',  'livello': '1',  'posizione': '05',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 2;$"} }, 
  {  'key': '27',  'rifcode': 'GR0369D',  'parent': '',  'parent_key': '',  'livello': '0',  'posizione': 'GR0369',  'tipo_kit': '6',  'funzione': {'codice': "//SUPPORTO GUIDA DX APPOGGIATO DISALLINEATO$var counter = 0;    $if(this.input.ACCOPPIAMENTO=='NO')$        counter = 1;$else$    switch (this.input.TIPO_ACCOPPIAMENTO) {$        case 'MAIN':$            counter = 0;$            break;$        case 'CENTRAL':$            counter = 0;$            break;$        case 'LATERAL':$            counter = 1;$            break;$    }$if((this.input.GAMBE=='NO')&&(this.extra_var.TIPOLOGIA_SUPPORTO_GUIDA==33))$    pezzi = (this.extra_var.SUPPORTI_GUIDA + this.input.SUPPORTI_AGGIUNTIVI_GUIDA) * counter;$else$    pezzi = 0; $"} }, 
  {  'key': '27-0',  'rifcode': 'GR0369B',  'parent': 'GR0369D',  'parent_key': '27',  'livello': '1',  'posizione': '00',  'tipo_kit': '6',  'funzione': {'codice': "pezzi = 1;$"} }, 
  {  'key': '27-0-0',  'rifcode': '272357',  'parent': 'GR0369B',  'parent_key': '27-0',  'livello': '2',  'posizione': '01',  'tipo_kit': '4',  'funzione': {'codice': "pezzi = 1;$"} }, 
  {  'key': '27-0-0-0',  'rifcode': '090361',  'parent': '272357',  'parent_key': '27-0-0',  'livello': '3',  'posizione': '01',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;$"} }, 
  {  'key': '27-0-0-1',  'rifcode': '146421',  'parent': '272357',  'parent_key': '27-0-0',  'livello': '3',  'posizione': '02',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;   $"} }, 
  {  'key': '27-0-0-2',  'rifcode': '111467',  'parent': '272357',  'parent_key': '27-0-0',  'livello': '3',  'posizione': '03',  'tipo_kit': '',  'funzione': {'codice': " pezzi = 2;     $"} }, 
  {  'key': '27-0-1',  'rifcode': '131387',  'parent': 'GR0369B',  'parent_key': '27-0',  'livello': '2',  'posizione': '02',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;$"} }, 
  {  'key': '27-0-2',  'rifcode': '146144',  'parent': 'GR0369B',  'parent_key': '27-0',  'livello': '2',  'posizione': '03',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;$"} }, 
  {  'key': '27-0-3',  'rifcode': '146178',  'parent': 'GR0369B',  'parent_key': '27-0',  'livello': '2',  'posizione': '04',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 2;$"} }, 
  {  'key': '27-1',  'rifcode': '010344',  'parent': 'GR0369D',  'parent_key': '27',  'livello': '1',  'posizione': '05',  'tipo_kit': '',  'funzione': {'codice': " pezzi = 1;$taglio = this.input.ALTEZZA_SUPPORTO_GUIDA;  $"} }, 
  {  'key': '28',  'rifcode': 'GR0369S',  'parent': '',  'parent_key': '',  'livello': '0',  'posizione': 'GR0369',  'tipo_kit': '6',  'funzione': {'codice': "//SUPPORTO GUIDA SX APPOGGIATO DISALLINEATO$var counter = 0;    $if(this.input.ACCOPPIAMENTO=='NO')$        counter = 1;$else$    switch (this.input.TIPO_ACCOPPIAMENTO) {$        case 'MAIN':$            counter = 1;$            break;$        case 'CENTRAL':$            counter = 0;$            break;$        case 'LATERAL':$            counter = 0;$            break;$    }$if((this.input.GAMBE=='NO')&&(this.extra_var.TIPOLOGIA_SUPPORTO_GUIDA==33))$    pezzi = (this.extra_var.SUPPORTI_GUIDA + this.input.SUPPORTI_AGGIUNTIVI_GUIDA) * counter;$else$    pezzi = 0; $"} }, 
  {  'key': '28-0',  'rifcode': 'GR0369B',  'parent': 'GR0369S',  'parent_key': '28',  'livello': '1',  'posizione': '00',  'tipo_kit': '6',  'funzione': {'codice': "pezzi = 1;$"} }, 
  {  'key': '28-0-0',  'rifcode': '272357',  'parent': 'GR0369B',  'parent_key': '28-0',  'livello': '2',  'posizione': '01',  'tipo_kit': '4',  'funzione': {'codice': "pezzi = 1;$"} }, 
  {  'key': '28-0-0-0',  'rifcode': '090361',  'parent': '272357',  'parent_key': '28-0-0',  'livello': '3',  'posizione': '01',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;$"} }, 
  {  'key': '28-0-0-1',  'rifcode': '146421',  'parent': '272357',  'parent_key': '28-0-0',  'livello': '3',  'posizione': '02',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;   $"} }, 
  {  'key': '28-0-0-2',  'rifcode': '111467',  'parent': '272357',  'parent_key': '28-0-0',  'livello': '3',  'posizione': '03',  'tipo_kit': '',  'funzione': {'codice': " pezzi = 2;     $"} }, 
  {  'key': '28-0-1',  'rifcode': '131387',  'parent': 'GR0369B',  'parent_key': '28-0',  'livello': '2',  'posizione': '02',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;$"} }, 
  {  'key': '28-0-2',  'rifcode': '146144',  'parent': 'GR0369B',  'parent_key': '28-0',  'livello': '2',  'posizione': '03',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;$"} }, 
  {  'key': '28-0-3',  'rifcode': '146178',  'parent': 'GR0369B',  'parent_key': '28-0',  'livello': '2',  'posizione': '04',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 2;$"} }, 
  {  'key': '28-1',  'rifcode': '010344',  'parent': 'GR0369S',  'parent_key': '28',  'livello': '1',  'posizione': '05',  'tipo_kit': '',  'funzione': {'codice': " pezzi = 1;$taglio = this.input.ALTEZZA_SUPPORTO_GUIDA;  $"} }, 
  {  'key': '29',  'rifcode': 'GR0370',  'parent': '',  'parent_key': '',  'livello': '0',  'posizione': 'GR0370',  'tipo_kit': '6',  'funzione': {'codice': "//SUPPORTO GUIDA DX APPESO ACCOPPIATO$if((this.input.GAMBE=='NO')&&(this.extra_var.TIPOLOGIA_SUPPORTO_GUIDA_ACC==26))$    pezzi = this.extra_var.SUPPORTI_GUIDA + this.input.SUPPORTI_AGGIUNTIVI_GUIDA;$else$    pezzi = 0; $"} }, 
  {  'key': '29-0',  'rifcode': '272357',  'parent': 'GR0370',  'parent_key': '29',  'livello': '1',  'posizione': '01',  'tipo_kit': '4',  'funzione': {'codice': " pezzi = 2;  $"} }, 
  {  'key': '29-0-0',  'rifcode': '090361',  'parent': '272357',  'parent_key': '29-0',  'livello': '2',  'posizione': '01',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;$"} }, 
  {  'key': '29-0-1',  'rifcode': '146421',  'parent': '272357',  'parent_key': '29-0',  'livello': '2',  'posizione': '02',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;   $"} }, 
  {  'key': '29-0-2',  'rifcode': '111467',  'parent': '272357',  'parent_key': '29-0',  'livello': '2',  'posizione': '03',  'tipo_kit': '',  'funzione': {'codice': " pezzi = 2;     $"} }, 
  {  'key': '29-1',  'rifcode': '131383',  'parent': 'GR0370',  'parent_key': '29',  'livello': '1',  'posizione': '02',  'tipo_kit': '',  'funzione': {'codice': " pezzi = 1;  $"} }, 
  {  'key': '29-2',  'rifcode': '140612',  'parent': 'GR0370',  'parent_key': '29',  'livello': '1',  'posizione': '03',  'tipo_kit': '',  'funzione': {'codice': "  pezzi = 0;    // controllare$"} }, 
  {  'key': '29-3',  'rifcode': '140522',  'parent': 'GR0370',  'parent_key': '29',  'livello': '1',  'posizione': '04',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 4;$"} }, 
  {  'key': '29-4',  'rifcode': '140585',  'parent': 'GR0370',  'parent_key': '29',  'livello': '1',  'posizione': '05',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 4;$"} }, 
  {  'key': '30',  'rifcode': 'GR0371D',  'parent': '',  'parent_key': '',  'livello': '0',  'posizione': 'GR0371',  'tipo_kit': '6',  'funzione': {'codice': "//SUPPORTO GUIDA DX APPOGGIATO ACCOPPIATO$if((this.input.GAMBE=='NO')&&(this.extra_var.TIPOLOGIA_SUPPORTO_GUIDA_ACC==39))$    pezzi = this.extra_var.SUPPORTI_GUIDA + this.input.SUPPORTI_AGGIUNTIVI_GUIDA;$else$    pezzi = 0; $"} }, 
  {  'key': '30-0',  'rifcode': 'GR0371B',  'parent': 'GR0371D',  'parent_key': '30',  'livello': '1',  'posizione': '00',  'tipo_kit': '6',  'funzione': {'codice': "pezzi = 1;$"} }, 
  {  'key': '30-0-0',  'rifcode': '272357',  'parent': 'GR0371B',  'parent_key': '30-0',  'livello': '2',  'posizione': '01',  'tipo_kit': '4',  'funzione': {'codice': "pezzi = 2;$"} }, 
  {  'key': '30-0-0-0',  'rifcode': '090361',  'parent': '272357',  'parent_key': '30-0-0',  'livello': '3',  'posizione': '01',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;$"} }, 
  {  'key': '30-0-0-1',  'rifcode': '146421',  'parent': '272357',  'parent_key': '30-0-0',  'livello': '3',  'posizione': '02',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;   $"} }, 
  {  'key': '30-0-0-2',  'rifcode': '111467',  'parent': '272357',  'parent_key': '30-0-0',  'livello': '3',  'posizione': '03',  'tipo_kit': '',  'funzione': {'codice': " pezzi = 2;     $"} }, 
  {  'key': '30-0-1',  'rifcode': '131384',  'parent': 'GR0371B',  'parent_key': '30-0',  'livello': '2',  'posizione': '02',  'tipo_kit': '',  'funzione': {'codice': " pezzi = 1;  $"} }, 
  {  'key': '30-0-2',  'rifcode': '131385',  'parent': 'GR0371B',  'parent_key': '30-0',  'livello': '2',  'posizione': '03',  'tipo_kit': '',  'funzione': {'codice': " pezzi = 1;  $"} }, 
  {  'key': '30-0-3',  'rifcode': '146144',  'parent': 'GR0371B',  'parent_key': '30-0',  'livello': '2',  'posizione': '04',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 4;  $"} }, 
  {  'key': '30-0-4',  'rifcode': '140612',  'parent': 'GR0371B',  'parent_key': '30-0',  'livello': '2',  'posizione': '05',  'tipo_kit': '',  'funzione': {'codice': " pezzi = 4;  $"} }, 
  {  'key': '30-0-5',  'rifcode': '140485',  'parent': 'GR0371B',  'parent_key': '30-0',  'livello': '2',  'posizione': '06',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 4;$"} }, 
  {  'key': '30-0-6',  'rifcode': '140522',  'parent': 'GR0371B',  'parent_key': '30-0',  'livello': '2',  'posizione': '07',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 4;$"} }, 
  {  'key': '30-1',  'rifcode': '010344',  'parent': 'GR0371D',  'parent_key': '30',  'livello': '1',  'posizione': '08',  'tipo_kit': '',  'funzione': {'codice': " pezzi = 1;$taglio = this.input.ALTEZZA_SUPPORTO_GUIDA;  $"} }, 
  {  'key': '31',  'rifcode': 'GR0372D',  'parent': '',  'parent_key': '',  'livello': '0',  'posizione': 'GR0372',  'tipo_kit': '6',  'funzione': {'codice': "//GAMBA DX STD$if((this.input.GAMBE=='YES')&&(this.input.TIPO_GAMBA=='STANDARD'))$    if(this.input.ACCOPPIAMENTO=='NO')$        pezzi = 1;$    else$        switch (this.input.TIPO_ACCOPPIAMENTO) {$            case 'MAIN':$                pezzi = 1;$                break;$            case 'CENTRAL':$                pezzi = 1;$                break;$            case 'LATERAL':$                pezzi = 1;$                break;$        }$else$    pezzi = 0;$"} }, 
  {  'key': '31-0',  'rifcode': 'GR0372B',  'parent': 'GR0372D',  'parent_key': '31',  'livello': '1',  'posizione': '00',  'tipo_kit': '6',  'funzione': {'codice': "pezzi = 1;$"} }, 
  {  'key': '31-0-0',  'rifcode': '146180',  'parent': 'GR0372B',  'parent_key': '31-0',  'livello': '2',  'posizione': '01',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 4;$"} }, 
  {  'key': '31-0-1',  'rifcode': '140812',  'parent': 'GR0372B',  'parent_key': '31-0',  'livello': '2',  'posizione': '02',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 4;$"} }, 
  {  'key': '31-0-2',  'rifcode': '122245',  'parent': 'GR0372B',  'parent_key': '31-0',  'livello': '2',  'posizione': '03',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;$"} }, 
  {  'key': '31-0-3',  'rifcode': '131388',  'parent': 'GR0372B',  'parent_key': '31-0',  'livello': '2',  'posizione': '04',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;$"} }, 
  {  'key': '31-0-4',  'rifcode': '146425',  'parent': 'GR0372B',  'parent_key': '31-0',  'livello': '2',  'posizione': '05',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;$"} }, 
  {  'key': '31-0-5',  'rifcode': '122267',  'parent': 'GR0372B',  'parent_key': '31-0',  'livello': '2',  'posizione': '06',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;   $"} }, 
  {  'key': '31-1',  'rifcode': '010618',  'parent': 'GR0372D',  'parent_key': '31',  'livello': '1',  'posizione': '07',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;$taglio = this.input.ALTEZZA_GAMBA_DX - 6.4;$"} }, 
  {  'key': '32',  'rifcode': 'GR0372S',  'parent': '',  'parent_key': '',  'livello': '0',  'posizione': 'GR0372',  'tipo_kit': '6',  'funzione': {'codice': "//GAMBA SX STD$if((this.input.GAMBE=='YES')&&(this.input.TIPO_GAMBA=='STANDARD'))$    if(this.input.ACCOPPIAMENTO=='NO')$        pezzi = 1;$    else$        switch (this.input.TIPO_ACCOPPIAMENTO) {$            case 'MAIN':$                pezzi = 1;$                break;$            case 'CENTRAL':$                pezzi = 0;$                break;$            case 'LATERAL':$                pezzi = 0;$                break;$        }$else$    pezzi = 0;$"} }, 
  {  'key': '32-0',  'rifcode': 'GR0372B',  'parent': 'GR0372S',  'parent_key': '32',  'livello': '1',  'posizione': '00',  'tipo_kit': '6',  'funzione': {'codice': "pezzi = 1;$"} }, 
  {  'key': '32-0-0',  'rifcode': '146180',  'parent': 'GR0372B',  'parent_key': '32-0',  'livello': '2',  'posizione': '01',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 4;$"} }, 
  {  'key': '32-0-1',  'rifcode': '140812',  'parent': 'GR0372B',  'parent_key': '32-0',  'livello': '2',  'posizione': '02',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 4;$"} }, 
  {  'key': '32-0-2',  'rifcode': '122245',  'parent': 'GR0372B',  'parent_key': '32-0',  'livello': '2',  'posizione': '03',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;$"} }, 
  {  'key': '32-0-3',  'rifcode': '131388',  'parent': 'GR0372B',  'parent_key': '32-0',  'livello': '2',  'posizione': '04',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;$"} }, 
  {  'key': '32-0-4',  'rifcode': '146425',  'parent': 'GR0372B',  'parent_key': '32-0',  'livello': '2',  'posizione': '05',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;$"} }, 
  {  'key': '32-0-5',  'rifcode': '122267',  'parent': 'GR0372B',  'parent_key': '32-0',  'livello': '2',  'posizione': '06',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;   $"} }, 
  {  'key': '32-1',  'rifcode': '010618',  'parent': 'GR0372S',  'parent_key': '32',  'livello': '1',  'posizione': '07',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;$taglio = this.input.ALTEZZA_GAMBA_SX - 6.4;$"} }, 
  {  'key': '33',  'rifcode': 'GR0373D',  'parent': '',  'parent_key': '',  'livello': '0',  'posizione': 'GR0373',  'tipo_kit': '6',  'funzione': {'codice': "//GAMBA DX MONOBLOCCO$if((this.input.GAMBE=='YES')&&(this.input.TIPO_GAMBA=='TELESCOPIC'))$    if(this.input.ACCOPPIAMENTO=='YES')$        pezzi = 0;$    else$        switch (this.input.POSIZIONE_GAMBA_TELESCOPICA) {$            case 'LEFT':$                pezzi = 1;$                break;$            case 'RIGHT':$                pezzi = 0;$                break;$        }$else$    pezzi = 0;$"} }, 
  {  'key': '33-0',  'rifcode': 'GR0373B',  'parent': 'GR0373D',  'parent_key': '33',  'livello': '1',  'posizione': '00',  'tipo_kit': '6',  'funzione': {'codice': "pezzi = 1;$"} }, 
  {  'key': '33-0-0',  'rifcode': '122244',  'parent': 'GR0373B',  'parent_key': '33-0',  'livello': '2',  'posizione': '01',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;$"} }, 
  {  'key': '33-0-1',  'rifcode': '111468',  'parent': 'GR0373B',  'parent_key': '33-0',  'livello': '2',  'posizione': '02',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;$"} }, 
  {  'key': '33-0-2',  'rifcode': '146180',  'parent': 'GR0373B',  'parent_key': '33-0',  'livello': '2',  'posizione': '03',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 16;$"} }, 
  {  'key': '33-0-3',  'rifcode': '140812',  'parent': 'GR0373B',  'parent_key': '33-0',  'livello': '2',  'posizione': '04',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 4;$"} }, 
  {  'key': '33-0-4',  'rifcode': '131388',  'parent': 'GR0373B',  'parent_key': '33-0',  'livello': '2',  'posizione': '05',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;$"} }, 
  {  'key': '33-0-5',  'rifcode': '146425',  'parent': 'GR0373B',  'parent_key': '33-0',  'livello': '2',  'posizione': '06',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;$"} }, 
  {  'key': '33-0-6',  'rifcode': '122268',  'parent': 'GR0373B',  'parent_key': '33-0',  'livello': '2',  'posizione': '07',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;   $"} }, 
  {  'key': '33-1',  'rifcode': '010592',  'parent': 'GR0373D',  'parent_key': '33',  'livello': '1',  'posizione': '07',  'tipo_kit': '',  'funzione': {'codice': "  pezzi = 1;$taglio = this.input.ALTEZZA_GAMBA_DX - 53.8;    $"} }, 
  {  'key': '33-2',  'rifcode': '010618',  'parent': 'GR0373D',  'parent_key': '33',  'livello': '1',  'posizione': '09',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;$taglio = this.input.ALTEZZA_GAMBA_DX - 6.4;$"} }, 
  {  'key': '34',  'rifcode': 'GR0373S',  'parent': '',  'parent_key': '',  'livello': '0',  'posizione': 'GR0373',  'tipo_kit': '6',  'funzione': {'codice': "//GAMBA SX MONOBLOCCO$if((this.input.GAMBE=='YES')&&(this.input.TIPO_GAMBA=='TELESCOPIC'))$    if(this.input.ACCOPPIAMENTO=='YES')$        pezzi = 0;$    else$        switch (this.input.POSIZIONE_GAMBA_TELESCOPICA) {$            case 'LEFT':$                pezzi = 0;$                break;$            case 'RIGHT':$                pezzi = 1;$                break;$        }$else$    pezzi = 0;$"} }, 
  {  'key': '34-0',  'rifcode': 'GR0373B',  'parent': 'GR0373S',  'parent_key': '34',  'livello': '1',  'posizione': '00',  'tipo_kit': '6',  'funzione': {'codice': "pezzi = 1;$"} }, 
  {  'key': '34-0-0',  'rifcode': '122244',  'parent': 'GR0373B',  'parent_key': '34-0',  'livello': '2',  'posizione': '01',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;$"} }, 
  {  'key': '34-0-1',  'rifcode': '111468',  'parent': 'GR0373B',  'parent_key': '34-0',  'livello': '2',  'posizione': '02',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;$"} }, 
  {  'key': '34-0-2',  'rifcode': '146180',  'parent': 'GR0373B',  'parent_key': '34-0',  'livello': '2',  'posizione': '03',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 16;$"} }, 
  {  'key': '34-0-3',  'rifcode': '140812',  'parent': 'GR0373B',  'parent_key': '34-0',  'livello': '2',  'posizione': '04',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 4;$"} }, 
  {  'key': '34-0-4',  'rifcode': '131388',  'parent': 'GR0373B',  'parent_key': '34-0',  'livello': '2',  'posizione': '05',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;$"} }, 
  {  'key': '34-0-5',  'rifcode': '146425',  'parent': 'GR0373B',  'parent_key': '34-0',  'livello': '2',  'posizione': '06',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;$"} }, 
  {  'key': '34-0-6',  'rifcode': '122268',  'parent': 'GR0373B',  'parent_key': '34-0',  'livello': '2',  'posizione': '07',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;   $"} }, 
  {  'key': '34-1',  'rifcode': '010592',  'parent': 'GR0373S',  'parent_key': '34',  'livello': '1',  'posizione': '07',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;$taglio = this.input.ALTEZZA_GAMBA_SX - 53.8;$"} }, 
  {  'key': '34-2',  'rifcode': '010618',  'parent': 'GR0373S',  'parent_key': '34',  'livello': '1',  'posizione': '09',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;$taglio = this.input.ALTEZZA_GAMBA_SX - 6.4;$"} }, 
  {  'key': '35',  'rifcode': 'GR0374D',  'parent': '',  'parent_key': '',  'livello': '0',  'posizione': 'GR0374',  'tipo_kit': '6',  'funzione': {'codice': "//GAMBA DX TELESCOPICA$if((this.input.GAMBE=='YES')&&(this.input.TIPO_GAMBA=='TELESCOPIC'))$    if(this.input.ACCOPPIAMENTO=='YES')$        pezzi = 0;$    else$        switch (this.input.POSIZIONE_GAMBA_TELESCOPICA) {$            case 'LEFT':$                pezzi = 0;$                break;$            case 'RIGHT':$                pezzi = 1;$                break;$        }$else$    pezzi = 0;$"} }, 
  {  'key': '35-0',  'rifcode': 'GR0374B',  'parent': 'GR0374D',  'parent_key': '35',  'livello': '1',  'posizione': '00',  'tipo_kit': '6',  'funzione': {'codice': "pezzi = 1;$"} }, 
  {  'key': '35-0-0',  'rifcode': '272358',  'parent': 'GR0374B',  'parent_key': '35-0',  'livello': '2',  'posizione': '01',  'tipo_kit': '4',  'funzione': {'codice': "pezzi = 1;$"} }, 
  {  'key': '35-0-0-0',  'rifcode': '146180',  'parent': '272358',  'parent_key': '35-0-0',  'livello': '3',  'posizione': '01',  'tipo_kit': '',  'funzione': {'codice': "  pezzi = 4;       $"} }, 
  {  'key': '35-0-0-1',  'rifcode': '140541',  'parent': '272358',  'parent_key': '35-0-0',  'livello': '3',  'posizione': '02',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 4;  $"} }, 
  {  'key': '35-0-0-2',  'rifcode': '131375',  'parent': '272358',  'parent_key': '35-0-0',  'livello': '3',  'posizione': '03',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;$"} }, 
  {  'key': '35-0-0-3',  'rifcode': '260055',  'parent': '272358',  'parent_key': '35-0-0',  'livello': '3',  'posizione': '04',  'tipo_kit': '',  'funzione': {'codice': " pezzi = 1;     $"} }, 
  {  'key': '35-0-0-4',  'rifcode': '131373',  'parent': '272358',  'parent_key': '35-0-0',  'livello': '3',  'posizione': '05',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;     $"} }, 
  {  'key': '35-0-0-5',  'rifcode': '146210',  'parent': '272358',  'parent_key': '35-0-0',  'livello': '3',  'posizione': '06',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;$"} }, 
  {  'key': '35-0-0-6',  'rifcode': '131377',  'parent': '272358',  'parent_key': '35-0-0',  'livello': '3',  'posizione': '07',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;$"} }, 
  {  'key': '35-0-0-7',  'rifcode': '140749',  'parent': '272358',  'parent_key': '35-0-0',  'livello': '3',  'posizione': '08',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 4;$"} }, 
  {  'key': '35-0-0-8',  'rifcode': '131376',  'parent': '272358',  'parent_key': '35-0-0',  'livello': '3',  'posizione': '09',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;   $"} }, 
  {  'key': '35-0-0-9',  'rifcode': '140511',  'parent': '272358',  'parent_key': '35-0-0',  'livello': '3',  'posizione': '10',  'tipo_kit': '',  'funzione': {'codice': " pezzi = 1;     $"} }, 
  {  'key': '35-0-0-10',  'rifcode': '146419',  'parent': '272358',  'parent_key': '35-0-0',  'livello': '3',  'posizione': '11',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;   $"} }, 
  {  'key': '35-0-0-11',  'rifcode': '140507',  'parent': '272358',  'parent_key': '35-0-0',  'livello': '3',  'posizione': '12',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;   $"} }, 
  {  'key': '35-0-1',  'rifcode': '122244',  'parent': 'GR0374B',  'parent_key': '35-0',  'livello': '2',  'posizione': '02',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;$"} }, 
  {  'key': '35-0-2',  'rifcode': '111468',  'parent': 'GR0374B',  'parent_key': '35-0',  'livello': '2',  'posizione': '03',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;$"} }, 
  {  'key': '35-0-3',  'rifcode': '131378',  'parent': 'GR0374B',  'parent_key': '35-0',  'livello': '2',  'posizione': '04',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;$"} }, 
  {  'key': '35-0-4',  'rifcode': '146324',  'parent': 'GR0374B',  'parent_key': '35-0',  'livello': '2',  'posizione': '05',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;$"} }, 
  {  'key': '35-0-5',  'rifcode': '146180',  'parent': 'GR0374B',  'parent_key': '35-0',  'livello': '2',  'posizione': '06',  'tipo_kit': '',  'funzione': {'codice': " pezzi = 20;  $"} }, 
  {  'key': '35-0-6',  'rifcode': '140812',  'parent': 'GR0374B',  'parent_key': '35-0',  'livello': '2',  'posizione': '07',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 4;$"} }, 
  {  'key': '35-0-7',  'rifcode': '260053',  'parent': 'GR0374B',  'parent_key': '35-0',  'livello': '2',  'posizione': '08',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;$"} }, 
  {  'key': '35-0-8',  'rifcode': '140712',  'parent': 'GR0374B',  'parent_key': '35-0',  'livello': '2',  'posizione': '09',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;$"} }, 
  {  'key': '35-0-9',  'rifcode': '090368',  'parent': 'GR0374B',  'parent_key': '35-0',  'livello': '2',  'posizione': '10',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;$"} }, 
  {  'key': '35-0-10',  'rifcode': '131388',  'parent': 'GR0374B',  'parent_key': '35-0',  'livello': '2',  'posizione': '11',  'tipo_kit': '',  'funzione': {'codice': " pezzi = 1;  $"} }, 
  {  'key': '35-0-11',  'rifcode': '010618',  'parent': 'GR0374B',  'parent_key': '35-0',  'livello': '2',  'posizione': '13',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;$taglio = 110.5;$"} }, 
  {  'key': '35-0-12',  'rifcode': '010618',  'parent': 'GR0374B',  'parent_key': '35-0',  'livello': '2',  'posizione': '13',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;$taglio = 75.9;$"} }, 
  {  'key': '35-0-13',  'rifcode': '131388',  'parent': 'GR0374B',  'parent_key': '35-0',  'livello': '2',  'posizione': '14',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;$"} }, 
  {  'key': '35-0-14',  'rifcode': '146419',  'parent': 'GR0374B',  'parent_key': '35-0',  'livello': '2',  'posizione': '15',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;$"} }, 
  {  'key': '35-0-15',  'rifcode': '131373',  'parent': 'GR0374B',  'parent_key': '35-0',  'livello': '2',  'posizione': '16',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;$"} }, 
  {  'key': '35-0-16',  'rifcode': '260054',  'parent': 'GR0374B',  'parent_key': '35-0',  'livello': '2',  'posizione': '17',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;$"} }, 
  {  'key': '35-0-17',  'rifcode': '146420',  'parent': 'GR0374B',  'parent_key': '35-0',  'livello': '2',  'posizione': '18',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 2;$"} }, 
  {  'key': '35-0-18',  'rifcode': '131376',  'parent': 'GR0374B',  'parent_key': '35-0',  'livello': '2',  'posizione': '19',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;$"} }, 
  {  'key': '35-0-19',  'rifcode': '140525',  'parent': 'GR0374B',  'parent_key': '35-0',  'livello': '2',  'posizione': '20',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 3;$"} }, 
  {  'key': '35-0-20',  'rifcode': '146418',  'parent': 'GR0374B',  'parent_key': '35-0',  'livello': '2',  'posizione': '21',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;$"} }, 
  {  'key': '35-0-21',  'rifcode': '146425',  'parent': 'GR0374B',  'parent_key': '35-0',  'livello': '2',  'posizione': '22',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;$"} }, 
  {  'key': '35-1',  'rifcode': '010592',  'parent': 'GR0374D',  'parent_key': '35',  'livello': '1',  'posizione': '03',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;$taglio = this.input.ALTEZZA_GAMBA_DX - 53.8;$"} }, 
  {  'key': '36',  'rifcode': 'GR0374S',  'parent': '',  'parent_key': '',  'livello': '0',  'posizione': 'GR0374',  'tipo_kit': '6',  'funzione': {'codice': "//GAMBA SX TELESCOPICA$if((this.input.GAMBE=='YES')&&(this.input.TIPO_GAMBA=='TELESCOPIC'))$    if(this.input.ACCOPPIAMENTO=='YES')$        pezzi = 0;$    else$        switch (this.input.POSIZIONE_GAMBA_TELESCOPICA) {$            case 'LEFT':$                pezzi = 1;$                break;$            case 'RIGHT':$                pezzi = 0;$                break;$        }$else$    pezzi = 0;$"} }, 
  {  'key': '36-0',  'rifcode': 'GR0374B',  'parent': 'GR0374S',  'parent_key': '36',  'livello': '1',  'posizione': '00',  'tipo_kit': '6',  'funzione': {'codice': "pezzi = 1;$"} }, 
  {  'key': '36-0-0',  'rifcode': '272358',  'parent': 'GR0374B',  'parent_key': '36-0',  'livello': '2',  'posizione': '01',  'tipo_kit': '4',  'funzione': {'codice': "pezzi = 1;$"} }, 
  {  'key': '36-0-0-0',  'rifcode': '146180',  'parent': '272358',  'parent_key': '36-0-0',  'livello': '3',  'posizione': '01',  'tipo_kit': '',  'funzione': {'codice': "  pezzi = 4;       $"} }, 
  {  'key': '36-0-0-1',  'rifcode': '140541',  'parent': '272358',  'parent_key': '36-0-0',  'livello': '3',  'posizione': '02',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 4;  $"} }, 
  {  'key': '36-0-0-2',  'rifcode': '131375',  'parent': '272358',  'parent_key': '36-0-0',  'livello': '3',  'posizione': '03',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;$"} }, 
  {  'key': '36-0-0-3',  'rifcode': '260055',  'parent': '272358',  'parent_key': '36-0-0',  'livello': '3',  'posizione': '04',  'tipo_kit': '',  'funzione': {'codice': " pezzi = 1;     $"} }, 
  {  'key': '36-0-0-4',  'rifcode': '131373',  'parent': '272358',  'parent_key': '36-0-0',  'livello': '3',  'posizione': '05',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;     $"} }, 
  {  'key': '36-0-0-5',  'rifcode': '146210',  'parent': '272358',  'parent_key': '36-0-0',  'livello': '3',  'posizione': '06',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;$"} }, 
  {  'key': '36-0-0-6',  'rifcode': '131377',  'parent': '272358',  'parent_key': '36-0-0',  'livello': '3',  'posizione': '07',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;$"} }, 
  {  'key': '36-0-0-7',  'rifcode': '140749',  'parent': '272358',  'parent_key': '36-0-0',  'livello': '3',  'posizione': '08',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 4;$"} }, 
  {  'key': '36-0-0-8',  'rifcode': '131376',  'parent': '272358',  'parent_key': '36-0-0',  'livello': '3',  'posizione': '09',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;   $"} }, 
  {  'key': '36-0-0-9',  'rifcode': '140511',  'parent': '272358',  'parent_key': '36-0-0',  'livello': '3',  'posizione': '10',  'tipo_kit': '',  'funzione': {'codice': " pezzi = 1;     $"} }, 
  {  'key': '36-0-0-10',  'rifcode': '146419',  'parent': '272358',  'parent_key': '36-0-0',  'livello': '3',  'posizione': '11',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;   $"} }, 
  {  'key': '36-0-0-11',  'rifcode': '140507',  'parent': '272358',  'parent_key': '36-0-0',  'livello': '3',  'posizione': '12',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;   $"} }, 
  {  'key': '36-0-1',  'rifcode': '122244',  'parent': 'GR0374B',  'parent_key': '36-0',  'livello': '2',  'posizione': '02',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;$"} }, 
  {  'key': '36-0-2',  'rifcode': '111468',  'parent': 'GR0374B',  'parent_key': '36-0',  'livello': '2',  'posizione': '03',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;$"} }, 
  {  'key': '36-0-3',  'rifcode': '131378',  'parent': 'GR0374B',  'parent_key': '36-0',  'livello': '2',  'posizione': '04',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;$"} }, 
  {  'key': '36-0-4',  'rifcode': '146324',  'parent': 'GR0374B',  'parent_key': '36-0',  'livello': '2',  'posizione': '05',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;$"} }, 
  {  'key': '36-0-5',  'rifcode': '146180',  'parent': 'GR0374B',  'parent_key': '36-0',  'livello': '2',  'posizione': '06',  'tipo_kit': '',  'funzione': {'codice': " pezzi = 20;  $"} }, 
  {  'key': '36-0-6',  'rifcode': '140812',  'parent': 'GR0374B',  'parent_key': '36-0',  'livello': '2',  'posizione': '07',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 4;$"} }, 
  {  'key': '36-0-7',  'rifcode': '260053',  'parent': 'GR0374B',  'parent_key': '36-0',  'livello': '2',  'posizione': '08',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;$"} }, 
  {  'key': '36-0-8',  'rifcode': '140712',  'parent': 'GR0374B',  'parent_key': '36-0',  'livello': '2',  'posizione': '09',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;$"} }, 
  {  'key': '36-0-9',  'rifcode': '090368',  'parent': 'GR0374B',  'parent_key': '36-0',  'livello': '2',  'posizione': '10',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;$"} }, 
  {  'key': '36-0-10',  'rifcode': '131388',  'parent': 'GR0374B',  'parent_key': '36-0',  'livello': '2',  'posizione': '11',  'tipo_kit': '',  'funzione': {'codice': " pezzi = 1;  $"} }, 
  {  'key': '36-0-11',  'rifcode': '010618',  'parent': 'GR0374B',  'parent_key': '36-0',  'livello': '2',  'posizione': '13',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;$taglio = 110.5;$"} }, 
  {  'key': '36-0-12',  'rifcode': '010618',  'parent': 'GR0374B',  'parent_key': '36-0',  'livello': '2',  'posizione': '13',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;$taglio = 75.9;$"} }, 
  {  'key': '36-0-13',  'rifcode': '131388',  'parent': 'GR0374B',  'parent_key': '36-0',  'livello': '2',  'posizione': '14',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;$"} }, 
  {  'key': '36-0-14',  'rifcode': '146419',  'parent': 'GR0374B',  'parent_key': '36-0',  'livello': '2',  'posizione': '15',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;$"} }, 
  {  'key': '36-0-15',  'rifcode': '131373',  'parent': 'GR0374B',  'parent_key': '36-0',  'livello': '2',  'posizione': '16',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;$"} }, 
  {  'key': '36-0-16',  'rifcode': '260054',  'parent': 'GR0374B',  'parent_key': '36-0',  'livello': '2',  'posizione': '17',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;$"} }, 
  {  'key': '36-0-17',  'rifcode': '146420',  'parent': 'GR0374B',  'parent_key': '36-0',  'livello': '2',  'posizione': '18',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 2;$"} }, 
  {  'key': '36-0-18',  'rifcode': '131376',  'parent': 'GR0374B',  'parent_key': '36-0',  'livello': '2',  'posizione': '19',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;$"} }, 
  {  'key': '36-0-19',  'rifcode': '140525',  'parent': 'GR0374B',  'parent_key': '36-0',  'livello': '2',  'posizione': '20',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 3;$"} }, 
  {  'key': '36-0-20',  'rifcode': '146418',  'parent': 'GR0374B',  'parent_key': '36-0',  'livello': '2',  'posizione': '21',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;$"} }, 
  {  'key': '36-0-21',  'rifcode': '146425',  'parent': 'GR0374B',  'parent_key': '36-0',  'livello': '2',  'posizione': '22',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;$"} }, 
  {  'key': '36-1',  'rifcode': '010592',  'parent': 'GR0374S',  'parent_key': '36',  'livello': '1',  'posizione': '03',  'tipo_kit': '',  'funzione': {'codice': "  pezzi = 1;$taglio = this.input.ALTEZZA_GAMBA_SX - 53.8;    $"} }, 
  {  'key': '37',  'rifcode': 'GR0385',  'parent': '',  'parent_key': '',  'livello': '0',  'posizione': 'GR0385',  'tipo_kit': '6',  'funzione': {'codice': "if((this.input.GAMBE=='YES')&&(this.input.TIPO_GAMBA=='STANDARD')&&(this.input.TIPO_SUPP_CASSONETTO=='CEILING'))$    switch (this.input.TIPO_ATT_SOFFITTO) {$        case 'STANDARD':$            pezzi = 0;$            break;$        case 'FIX POSITION':$            pezzi = 2;$            break;$    }$else$    pezzi = 0;$$  $"} }, 
  {  'key': '37-0',  'rifcode': '130186',  'parent': 'GR0385',  'parent_key': '37',  'livello': '1',  'posizione': '01',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;$"} }, 
  {  'key': '37-1',  'rifcode': '140564',  'parent': 'GR0385',  'parent_key': '37',  'livello': '1',  'posizione': '02',  'tipo_kit': '',  'funzione': {'codice': " pezzi = 4 ;$"} }, 
  {  'key': '37-2',  'rifcode': '272350',  'parent': 'GR0385',  'parent_key': '37',  'livello': '1',  'posizione': '03',  'tipo_kit': '4',  'funzione': {'codice': "pezzi = 1;$"} }, 
  {  'key': '37-2-0',  'rifcode': '122255',  'parent': '272350',  'parent_key': '37-2',  'livello': '2',  'posizione': '01',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;   $"} }, 
  {  'key': '37-2-1',  'rifcode': '140707',  'parent': '272350',  'parent_key': '37-2',  'livello': '2',  'posizione': '02',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 4;   $"} }, 
  {  'key': '38',  'rifcode': 'GR0386',  'parent': '',  'parent_key': '',  'livello': '0',  'posizione': 'GR0386',  'tipo_kit': '6',  'funzione': {'codice': "  //SUPPORTINO this.input.TETTUCCIO$/*var std = 0;$var tor = 0;$$if((this.input.GAMBE=='YES')&&(this.input.TIPO_GAMBA=='STANDARD')&&(this.input.TIPO_SUPP_CASSONETTO=='WALL'))$    std = 2;$else$    std = 0;$$if((this.input.GAMBE=='YES')&&(this.input.TIPO_GAMBA=='TELESCOPIC'))$    tor = 3;$else$    tor = 0;  $$if(this.input.TETTUCCIO == 'YES')$    pezzi = std + tor;$else$    pezzi = 0;  */$    $//SPOSTATO ALL'INTERNO DEL GRUPPO this.input.TETTUCCIO    $      $"} }, 
  {  'key': '38-0',  'rifcode': '090363',  'parent': 'GR0386',  'parent_key': '38',  'livello': '1',  'posizione': '01',  'tipo_kit': '',  'funzione': {'codice': "$pezzi = 1;$"} }, 
  {  'key': '38-1',  'rifcode': '146409',  'parent': 'GR0386',  'parent_key': '38',  'livello': '1',  'posizione': '02',  'tipo_kit': '',  'funzione': {'codice': "$pezzi = 1;$"} }, 
  {  'key': '38-2',  'rifcode': '131374',  'parent': 'GR0386',  'parent_key': '38',  'livello': '1',  'posizione': '03',  'tipo_kit': '',  'funzione': {'codice': "pezzi = 1;$"} }, 
  {  'key': '38-3',  'rifcode': '146338',  'parent': 'GR0386',  'parent_key': '38',  'livello': '1',  'posizione': '04',  'tipo_kit': '',  'funzione': {'codice': "$pezzi = 2;$"} }, 
  {  'key': '38-4',  'rifcode': '146426',  'parent': 'GR0386',  'parent_key': '38',  'livello': '1',  'posizione': '11',  'tipo_kit': '',  'funzione': {'codice': "$pezzi = 1;$"} }, 
  ];
  
  return this.cloneMyObj(FISHER_EL);
  }
  
  
  
    crea_FISHER_COD(){
    let FISHER_COD = [
                   {  'code': 'GR0346',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/NONE.JPG',  'classe': { 'des1':'GR', 'des2': 'VIRTUAL GROUP'},  'descrizione': { 'id':'GRUPPO GUIDA CON    ZIP TENSE', 'des': 'GRUPPO GUIDA CON    ZIP TENSE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': 'GR0347',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/NONE.JPG',  'classe': { 'des1':'GR', 'des2': 'VIRTUAL GROUP'},  'descrizione': { 'id':'GRUPPO GUIDA SENZA    ZIP TENSE', 'des': 'GRUPPO GUIDA SENZA    ZIP TENSE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': 'GR0348',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/NONE.JPG',  'classe': { 'des1':'GR', 'des2': 'VIRTUAL GROUP'},  'descrizione': { 'id':'GRUPPO TELO    TENSE', 'des': 'GRUPPO TELO    TENSE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': 'GR0363',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/NONE.JPG',  'classe': { 'des1':'GR', 'des2': 'VIRTUAL GROUP'},  'descrizione': { 'id':'GRUPPO TETTUCCIO    TENSE', 'des': 'GRUPPO TETTUCCIO    TENSE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': 'GR0364',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/NONE.JPG',  'classe': { 'des1':'GR', 'des2': 'VIRTUAL GROUP'},  'descrizione': { 'id':'SUPPORTO GUIDA    SINGOLO H STD TENSE', 'des': 'SUPPORTO GUIDA    SINGOLO H STD TENSE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': 'GR0368',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/NONE.JPG',  'classe': { 'des1':'GR', 'des2': 'VIRTUAL GROUP'},  'descrizione': { 'id':'SUPPORTO    GUIDA DISASSATO TENSE', 'des': 'SUPPORTO    GUIDA DISASSATO TENSE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': 'GR0370',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/NONE.JPG',  'classe': { 'des1':'GR', 'des2': 'VIRTUAL GROUP'},  'descrizione': { 'id':'SUPPORTO    GUIDA ACCOPPIATO TENSE', 'des': 'SUPPORTO    GUIDA ACCOPPIATO TENSE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': 'GR0366',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/NONE.JPG',  'classe': { 'des1':'GR', 'des2': 'VIRTUAL GROUP'},  'descrizione': { 'id':'SUPPORTO    GUIDA LATERALE TENSE', 'des': 'SUPPORTO    GUIDA LATERALE TENSE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': 'GR0365D',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/NONE.JPG',  'classe': { 'des1':'GR', 'des2': 'VIRTUAL GROUP'},  'descrizione': { 'id':'SUPPORTO GUIDA SINGOLO CON DISTANZIALE TENSE', 'des': 'SUPPORTO GUIDA SINGOLO CON DISTANZIALE TENSE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': 'GR0367D',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/NONE.JPG',  'classe': { 'des1':'GR', 'des2': 'VIRTUAL GROUP'},  'descrizione': { 'id':'SUPPORTO GUIDA LATERALE CON DISTANZIALE TENSE - DX', 'des': 'SUPPORTO GUIDA LATERALE CON DISTANZIALE TENSE - DX'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': 'GR0369D',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/NONE.JPG',  'classe': { 'des1':'GR', 'des2': 'VIRTUAL GROUP'},  'descrizione': { 'id':'SUPPORTO GUIDA DISASSATO CON DISTANZIALE TENSE - DX', 'des': 'SUPPORTO GUIDA DISASSATO CON DISTANZIALE TENSE - DX'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': 'GR0371D',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/NONE.JPG',  'classe': { 'des1':'GR', 'des2': 'VIRTUAL GROUP'},  'descrizione': { 'id':'SUPPORTO GUIDA ACCOPPIATO CON DISTANZIALE TENSE - DX', 'des': 'SUPPORTO GUIDA ACCOPPIATO CON DISTANZIALE TENSE - DX'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': 'GR0358',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/NONE.JPG',  'classe': { 'des1':'GR', 'des2': 'VIRTUAL GROUP'},  'descrizione': { 'id':'SUPPORTO SOFFITTO    TENSE', 'des': 'SUPPORTO SOFFITTO    TENSE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': 'GR0345',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/NONE.JPG',  'classe': { 'des1':'GR', 'des2': 'VIRTUAL GROUP'},  'descrizione': { 'id':'GRUPPO FRONTALE VOLANT TENSE', 'des': 'GRUPPO FRONTALE VOLANT TENSE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': 'GR0344',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/NONE.JPG',  'classe': { 'des1':'GR', 'des2': 'VIRTUAL GROUP'},  'descrizione': { 'id':'GRUPPO CASSONETTO CON FRONTALE TENSE', 'des': 'GRUPPO CASSONETTO CON FRONTALE TENSE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': 'GR0343',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/NONE.JPG',  'classe': { 'des1':'GR', 'des2': 'VIRTUAL GROUP'},  'descrizione': { 'id':'GRUPPO FRONTALE    ZEROGRADI-WGB', 'des': 'GRUPPO FRONTALE    ZEROGRADI-WGB'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': 'GR0362',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/NONE.JPG',  'classe': { 'des1':'GR', 'des2': 'VIRTUAL GROUP'},  'descrizione': { 'id':'GRUPPO FRANGITRATTA TENSE', 'des': 'GRUPPO FRANGITRATTA TENSE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': 'GR0373D',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/NONE.JPG',  'classe': { 'des1':'GR', 'des2': 'VIRTUAL GROUP'},  'descrizione': { 'id':'', 'des': ''},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': 'GR0372D',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/NONE.JPG',  'classe': { 'des1':'GR', 'des2': 'VIRTUAL GROUP'},  'descrizione': { 'id':'GRUPPO GAMBA STANDARD TENSE - DX', 'des': 'GRUPPO GAMBA STANDARD TENSE - DX'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': 'GR0374D',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/NONE.JPG',  'classe': { 'des1':'GR', 'des2': 'VIRTUAL GROUP'},  'descrizione': { 'id':'GRUPPO GAMBA TELESCOPICA ZEROGRADI-WGB - DX', 'des': 'GRUPPO GAMBA TELESCOPICA ZEROGRADI-WGB - DX'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': 'GR0357',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/NONE.JPG',  'classe': { 'des1':'GR', 'des2': 'VIRTUAL GROUP'},  'descrizione': { 'id':'SUPPORTO PARETE    BASCULANTE TENSE', 'des': 'SUPPORTO PARETE    BASCULANTE TENSE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': 'GR0359',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/NONE.JPG',  'classe': { 'des1':'GR', 'des2': 'VIRTUAL GROUP'},  'descrizione': { 'id':'SUPPORTO PARETE    TORCENTE ZEROGRADI-WGB', 'des': 'SUPPORTO PARETE    TORCENTE ZEROGRADI-WGB'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': 'GR0361',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/NONE.JPG',  'classe': { 'des1':'GR', 'des2': 'VIRTUAL GROUP'},  'descrizione': { 'id':'SNODO GAMBA    ACCOPPIATA TENSE', 'des': 'SNODO GAMBA    ACCOPPIATA TENSE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': 'GR0360',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/NONE.JPG',  'classe': { 'des1':'GR', 'des2': 'VIRTUAL GROUP'},  'descrizione': { 'id':'SNODO GAMBA SINGOLA TENSE', 'des': 'SNODO GAMBA SINGOLA TENSE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': 'GR0374S',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/NONE.JPG',  'classe': { 'des1':'GR', 'des2': 'VIRTUAL GROUP'},  'descrizione': { 'id':'GRUPPO GAMBA TELESCOPICA ZEROGRADI-WGB - SX', 'des': 'GRUPPO GAMBA TELESCOPICA ZEROGRADI-WGB - SX'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': 'GR0372S',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/NONE.JPG',  'classe': { 'des1':'GR', 'des2': 'VIRTUAL GROUP'},  'descrizione': { 'id':'GRUPPO GAMBA STANDARD TENSE - SX', 'des': 'GRUPPO GAMBA STANDARD TENSE - SX'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': 'GR0373S',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/NONE.JPG',  'classe': { 'des1':'GR', 'des2': 'VIRTUAL GROUP'},  'descrizione': { 'id':'GRUPPO GAMBA MONOBLOCCO TENSE - SX', 'des': 'GRUPPO GAMBA MONOBLOCCO TENSE - SX'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': 'GR0365S',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/NONE.JPG',  'classe': { 'des1':'GR', 'des2': 'VIRTUAL GROUP'},  'descrizione': { 'id':'SUPPORTO GUIDA SINGOLO CON DISTANZIALE TENSE', 'des': 'SUPPORTO GUIDA SINGOLO CON DISTANZIALE TENSE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': 'GR0367S',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/NONE.JPG',  'classe': { 'des1':'GR', 'des2': 'VIRTUAL GROUP'},  'descrizione': { 'id':'SUPPORTO GUIDA LATERALE CON DISTANZIALE TENSE - SX', 'des': 'SUPPORTO GUIDA LATERALE CON DISTANZIALE TENSE - SX'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': 'GR0369S',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/NONE.JPG',  'classe': { 'des1':'GR', 'des2': 'VIRTUAL GROUP'},  'descrizione': { 'id':'SUPPORTO GUIDA DISASSATO CON DISTANZIALE TENSE - SX', 'des': 'SUPPORTO GUIDA DISASSATO CON DISTANZIALE TENSE - SX'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': 'GR0385',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/NONE.JPG',  'classe': { 'des1':'GR', 'des2': 'VIRTUAL GROUP'},  'descrizione': { 'id':'SUPPORTO    SOFFITTO FISSO TENSE', 'des': 'SUPPORTO    SOFFITTO FISSO TENSE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': 'GR0386',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/NONE.JPG',  'classe': { 'des1':'GR', 'des2': 'VIRTUAL GROUP'},  'descrizione': { 'id':'SUPPORTO TETTUCCIO ZEROGRADI-WGB', 'des': 'SUPPORTO TETTUCCIO ZEROGRADI-WGB'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '272345',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/NONE.JPG',  'classe': { 'des1':'27', 'des2': 'Kit'},  'descrizione': { 'id':'KIT TENSIONATORE D85 LATO MOTORE SX', 'des': 'TENSE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '272344',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/NONE.JPG',  'classe': { 'des1':'27', 'des2': 'Kit'},  'descrizione': { 'id':'KIT TAPPI GUIDA DX-SX CON ZIP', 'des': 'ZERO'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.53,  'peso_medio': 0.53,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '272346',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/NONE.JPG',  'classe': { 'des1':'27', 'des2': 'Kit'},  'descrizione': { 'id':'KIT TAPPI GUIDA DX-SX SENZA ZIP', 'des': 'ZERO'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.42,  'peso_medio': 0.42,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '020120',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/020120.JPG',  'classe': { 'des1':'02', 'des2': 'Estrusi plastica'},  'descrizione': { 'id':'PR GUIDA PORTA ZIP', 'des': 'CLICK ZIP guida 38'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.12,  'peso_medio': 0.12,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '010609',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/010609.JPG',  'classe': { 'des1':'01', 'des2': 'Estrusi metallici'},  'descrizione': { 'id':'PR GUIDA C-ZIP', 'des': 'ZEROGRADI - WGB'},  'misura': 0.00,  'prezzo': 47.60,  'costo': 9.52,  'lastcost': 0.00,  'peso': 2.38,  'peso_medio': 2.38,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '020095',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/020095.JPG',  'classe': { 'des1':'02', 'des2': 'Estrusi plastica'},  'descrizione': { 'id':'PVC COPERTURA SUPERIORE GUIDA', 'des': 'MED VIVA-LUCE-QUADRA'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '010635',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/NONE.JPG',  'classe': { 'des1':'01', 'des2': 'Estrusi metallici'},  'descrizione': { 'id':'PR REGGISTRIP', 'des': 'ZEROGRADI - WGB'},  'misura': 0.00,  'prezzo': 3.20,  'costo': 0.64,  'lastcost': 0.00,  'peso': 0.16,  'peso_medio': 0.16,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '020095',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/020095.JPG',  'classe': { 'des1':'02', 'des2': 'Estrusi plastica'},  'descrizione': { 'id':'PVC COPERTURA SUPERIORE GUIDA', 'des': 'MED VIVA-LUCE-QUADRA'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '010611',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/010611.JPG',  'classe': { 'des1':'01', 'des2': 'Estrusi metallici'},  'descrizione': { 'id':'PR GUIDA SENZA ZIP', 'des': 'ZEROGRADI - WGB'},  'misura': 0.00,  'prezzo': 34.40,  'costo': 6.88,  'lastcost': 0.00,  'peso': 1.72,  'peso_medio': 1.72,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '010635',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/NONE.JPG',  'classe': { 'des1':'01', 'des2': 'Estrusi metallici'},  'descrizione': { 'id':'PR REGGISTRIP', 'des': 'ZEROGRADI - WGB'},  'misura': 0.00,  'prezzo': 3.20,  'costo': 0.64,  'lastcost': 0.00,  'peso': 0.16,  'peso_medio': 0.16,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '146409',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/NONE.JPG',  'classe': { 'des1':'14', 'des2': 'Elementi di fissaggio'},  'descrizione': { 'id':'VITE TC TORX M 5x12 INOX TRILOBATA', 'des': ''},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '010630',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/010630.JPG',  'classe': { 'des1':'01', 'des2': 'Estrusi metallici'},  'descrizione': { 'id':'PR MONOOGIVA ANCORABILE', 'des': 'ZEROGRADI - WGB'},  'misura': 0.00,  'prezzo': 6.80,  'costo': 1.36,  'lastcost': 0.00,  'peso': 0.34,  'peso_medio': 0.34,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': 'TS_TELO',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/TS_TELO.JPG',  'classe': { 'des1':'TS', 'des2': 'TENDE DA SOLE'},  'descrizione': { 'id':'TELO DA ASSEMBLARE SU TENDA', 'des': ''},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '010616',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/010616.JPG',  'classe': { 'des1':'01', 'des2': 'Estrusi metallici'},  'descrizione': { 'id':'PR TETTUCCIO RUOTABILE', 'des': 'ZEROGRADI - WGB'},  'misura': 0.00,  'prezzo': 14.60,  'costo': 2.92,  'lastcost': 0.00,  'peso': 0.73,  'peso_medio': 0.73,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '020117',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/020117.JPG',  'classe': { 'des1':'02', 'des2': 'Estrusi plastica'},  'descrizione': { 'id':'GUARNIZIONE A T TPE 5x13 2', 'des': 'P 1a LAMA MED TWIST- NODO - DUCK'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '020032',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/NONE.JPG',  'classe': { 'des1':'02', 'des2': 'Estrusi plastica'},  'descrizione': { 'id':'GUARNIZIONE A PALLONCINO D  8', 'des': 'CLICK ZIP'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '122246',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/122246.JPG',  'classe': { 'des1':'12', 'des2': 'Tagliati laser e inseparabili'},  'descrizione': { 'id':'TAPPO TETTUCCIO', 'des': 'ZEROGRADI'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.01,  'peso_medio': 0.01,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '141952',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/141952.png',  'classe': { 'des1':'14', 'des2': 'Elementi di fissaggio'},  'descrizione': { 'id':'RIVETTO ALU D 4 8x10 BIANCO', 'des': ''},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '272347',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/NONE.JPG',  'classe': { 'des1':'27', 'des2': 'Kit'},  'descrizione': { 'id':'KIT COPPIA SUPPORTI TETTUCCIO', 'des': 'TENSE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.11,  'peso_medio': 0.11,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '272359',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/NONE.JPG',  'classe': { 'des1':'27', 'des2': 'Kit'},  'descrizione': { 'id':'KIT SUPPORTINO INTERMEDIO TETTUCCIO', 'des': 'TENSE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.64,  'peso_medio': 0.64,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '272357',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/NONE.JPG',  'classe': { 'des1':'27', 'des2': 'Kit'},  'descrizione': { 'id':'KIT ANCORAGGIO GUIDA', 'des': 'TENSE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 2.70,  'peso_medio': 2.70,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '131385',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/131385.JPG',  'classe': { 'des1':'13', 'des2': 'Lavorati Meccanici'},  'descrizione': { 'id':'PIASTRA ANCORAGGIO GUIDA BASE', 'des': 'TENSE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.03,  'peso_medio': 0.03,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '140612',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/140612.JPG',  'classe': { 'des1':'14', 'des2': 'Elementi di fissaggio'},  'descrizione': { 'id':'VITE TSPEI M 6x16 INOX', 'des': ''},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '140485',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/140485.JPG',  'classe': { 'des1':'14', 'des2': 'Elementi di fissaggio'},  'descrizione': { 'id':'DADO AUTOBLOCCANTE BASSO M 6 INOX', 'des': ''},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '140522',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/140522.JPG',  'classe': { 'des1':'14', 'des2': 'Elementi di fissaggio'},  'descrizione': { 'id':'ROSETTA D 6 4 12 5x1 6 INOX', 'des': ''},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '272357',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/NONE.JPG',  'classe': { 'des1':'27', 'des2': 'Kit'},  'descrizione': { 'id':'KIT ANCORAGGIO GUIDA', 'des': 'TENSE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 2.70,  'peso_medio': 2.70,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '131387',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/131387.JPG',  'classe': { 'des1':'13', 'des2': 'Lavorati Meccanici'},  'descrizione': { 'id':'PIASTRA GUIDA MENSOLA DISASSATA', 'des': 'TENSE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.11,  'peso_medio': 0.11,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '140612',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/140612.JPG',  'classe': { 'des1':'14', 'des2': 'Elementi di fissaggio'},  'descrizione': { 'id':'VITE TSPEI M 6x16 INOX', 'des': ''},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '140485',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/140485.JPG',  'classe': { 'des1':'14', 'des2': 'Elementi di fissaggio'},  'descrizione': { 'id':'DADO AUTOBLOCCANTE BASSO M 6 INOX', 'des': ''},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '140522',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/140522.JPG',  'classe': { 'des1':'14', 'des2': 'Elementi di fissaggio'},  'descrizione': { 'id':'ROSETTA D 6 4 12 5x1 6 INOX', 'des': ''},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '272357',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/NONE.JPG',  'classe': { 'des1':'27', 'des2': 'Kit'},  'descrizione': { 'id':'KIT ANCORAGGIO GUIDA', 'des': 'TENSE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 2.70,  'peso_medio': 2.70,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '131383',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/131383.JPG',  'classe': { 'des1':'13', 'des2': 'Lavorati Meccanici'},  'descrizione': { 'id':'PIASTRA ANCORAGGIO GUIDA ACC BASE', 'des': 'TENSE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.06,  'peso_medio': 0.06,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '140612',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/140612.JPG',  'classe': { 'des1':'14', 'des2': 'Elementi di fissaggio'},  'descrizione': { 'id':'VITE TSPEI M 6x16 INOX', 'des': ''},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '140522',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/140522.JPG',  'classe': { 'des1':'14', 'des2': 'Elementi di fissaggio'},  'descrizione': { 'id':'ROSETTA D 6 4 12 5x1 6 INOX', 'des': ''},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '140585',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/NONE.JPG',  'classe': { 'des1':'14', 'des2': 'Elementi di fissaggio'},  'descrizione': { 'id':'EX  AUTOFIL TSP   4 8x32 INOX', 'des': 'usare 146144'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '272357',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/NONE.JPG',  'classe': { 'des1':'27', 'des2': 'Kit'},  'descrizione': { 'id':'KIT ANCORAGGIO GUIDA', 'des': 'TENSE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 2.70,  'peso_medio': 2.70,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '131386',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/131386.JPG',  'classe': { 'des1':'13', 'des2': 'Lavorati Meccanici'},  'descrizione': { 'id':'PIASTRA GUIDA MENSOLA ANGOLARE', 'des': 'TENSE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.14,  'peso_medio': 0.14,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '140709',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/140709.JPG',  'classe': { 'des1':'14', 'des2': 'Elementi di fissaggio'},  'descrizione': { 'id':'VITE TE M 6x16 INOX', 'des': ''},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '140522',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/140522.JPG',  'classe': { 'des1':'14', 'des2': 'Elementi di fissaggio'},  'descrizione': { 'id':'ROSETTA D 6 4 12 5x1 6 INOX', 'des': ''},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '140485',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/140485.JPG',  'classe': { 'des1':'14', 'des2': 'Elementi di fissaggio'},  'descrizione': { 'id':'DADO AUTOBLOCCANTE BASSO M 6 INOX', 'des': ''},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': 'GR0365B',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/NONE.JPG',  'classe': { 'des1':'GR', 'des2': 'VIRTUAL GROUP'},  'descrizione': { 'id':'SUPPORTO    GUIDA SINGOLO CON DISTANZIALE TENSE', 'des': 'SUPPORTO    GUIDA SINGOLO CON DISTANZIALE TENSE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '010344',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/010344.JPG',  'classe': { 'des1':'01', 'des2': 'Estrusi metallici'},  'descrizione': { 'id':'PR DISTANZ  SUPPORTO', 'des': 'ZEROGRADI'},  'misura': 0.00,  'prezzo': 13.00,  'costo': 2.60,  'lastcost': 0.00,  'peso': 0.65,  'peso_medio': 0.65,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': 'GR0367B',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/NONE.JPG',  'classe': { 'des1':'GR', 'des2': 'VIRTUAL GROUP'},  'descrizione': { 'id':'SUPPORTO    GUIDA LATERALE CON DISTANZIALE TENSE', 'des': 'SUPPORTO    GUIDA LATERALE CON DISTANZIALE TENSE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '010344',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/010344.JPG',  'classe': { 'des1':'01', 'des2': 'Estrusi metallici'},  'descrizione': { 'id':'PR DISTANZ  SUPPORTO', 'des': 'ZEROGRADI'},  'misura': 0.00,  'prezzo': 13.00,  'costo': 2.60,  'lastcost': 0.00,  'peso': 0.65,  'peso_medio': 0.65,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': 'GR0369B',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/NONE.JPG',  'classe': { 'des1':'GR', 'des2': 'VIRTUAL GROUP'},  'descrizione': { 'id':'SUPPORTO    GUIDA DISASSATO CON DISTANZIALE TENSE', 'des': 'SUPPORTO    GUIDA DISASSATO CON DISTANZIALE TENSE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '010344',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/010344.JPG',  'classe': { 'des1':'01', 'des2': 'Estrusi metallici'},  'descrizione': { 'id':'PR DISTANZ  SUPPORTO', 'des': 'ZEROGRADI'},  'misura': 0.00,  'prezzo': 13.00,  'costo': 2.60,  'lastcost': 0.00,  'peso': 0.65,  'peso_medio': 0.65,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': 'GR0371B',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/NONE.JPG',  'classe': { 'des1':'GR', 'des2': 'VIRTUAL GROUP'},  'descrizione': { 'id':'SUPPORTO    GUIDA ACCOPPIATO CON DISTANZIALE TENSE', 'des': 'SUPPORTO    GUIDA ACCOPPIATO CON DISTANZIALE TENSE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '010344',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/010344.JPG',  'classe': { 'des1':'01', 'des2': 'Estrusi metallici'},  'descrizione': { 'id':'PR DISTANZ  SUPPORTO', 'des': 'ZEROGRADI'},  'misura': 0.00,  'prezzo': 13.00,  'costo': 2.60,  'lastcost': 0.00,  'peso': 0.65,  'peso_medio': 0.65,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '272350',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/NONE.JPG',  'classe': { 'des1':'27', 'des2': 'Kit'},  'descrizione': { 'id':'KIT SUPPORTO SOFFITTO', 'des': 'ZERO'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 2.65,  'peso_medio': 2.65,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '272349',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/NONE.JPG',  'classe': { 'des1':'27', 'des2': 'Kit'},  'descrizione': { 'id':'KIT COPPIA SUPPORTO PARETE ROTABILE', 'des': 'TENSE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.95,  'peso_medio': 0.95,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '130186',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/130186.JPG',  'classe': { 'des1':'13', 'des2': 'Lavorati Meccanici'},  'descrizione': { 'id':'PIASTRINO 80x20x6 INOX', 'des': ''},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '140707',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/NONE.JPG',  'classe': { 'des1':'14', 'des2': 'Elementi di fissaggio'},  'descrizione': { 'id':'VITE TSPEI M 8x18 INOX', 'des': ''},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '272400',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/NONE.JPG',  'classe': { 'des1':'27', 'des2': 'Kit'},  'descrizione': { 'id':'KIT COPPIA TAPPI VOLANT', 'des': 'TENSE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '272181',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/272181.JPG',  'classe': { 'des1':'27', 'des2': 'Kit'},  'descrizione': { 'id':'BATTERIA OXIMO WIREFREE', 'des': '9027177'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '140706',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/140706.JPG',  'classe': { 'des1':'14', 'des2': 'Elementi di fissaggio'},  'descrizione': { 'id':'AUTOPERFORANTE TCB 3 9x16 ZINCATA', 'des': ''},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '210262',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/210262.JPG',  'classe': { 'des1':'21', 'des2': 'Motori'},  'descrizione': { 'id':'TRASCINAT  SAGOMATO SOMFY P RULL', 'des': 'D 49 VOLANT'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '210263',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/210263.JPG',  'classe': { 'des1':'21', 'des2': 'Motori'},  'descrizione': { 'id':'CORONA D 49', 'des': ''},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '210353',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/210353.JPG',  'classe': { 'des1':'21', 'des2': 'Motori'},  'descrizione': { 'id':'MOT SUNEA 40 SOLAR IO 10 12', 'des': '1241887'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '272183',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/272183.JPG',  'classe': { 'des1':'27', 'des2': 'Kit'},  'descrizione': { 'id':'PANNELLO SOLARE 3 2W-UNI', 'des': '9028368'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '111431',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/111431.JPG',  'classe': { 'des1':'11', 'des2': 'Stampati plastica'},  'descrizione': { 'id':'TAPPO COPERTURA TYPE-C', 'des': ''},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '010451',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/010451.JPG',  'classe': { 'des1':'01', 'des2': 'Estrusi metallici'},  'descrizione': { 'id':'PR FRONTALINO RULLO', 'des': 'TXT'},  'misura': 0.00,  'prezzo': 11.20,  'costo': 2.24,  'lastcost': 0.00,  'peso': 0.56,  'peso_medio': 0.56,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '111179',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/111179.JPG',  'classe': { 'des1':'11', 'des2': 'Stampati plastica'},  'descrizione': { 'id':'TAPPINO FRONTALINO ROLL ', 'des': 'TXT'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.01,  'peso_medio': 0.01,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '090139',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/090139.JPG',  'classe': { 'des1':'09', 'des2': 'Mozziconi'},  'descrizione': { 'id':'PESO ZAVORRA P TF 16X10x600', 'des': 'TXT'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '320052',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/320052.JPG',  'classe': { 'des1':'32', 'des2': 'Commerciali'},  'descrizione': { 'id':'CALOTTA D 49 D 12', 'des': ''},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '010467',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/010467.JPG',  'classe': { 'des1':'01', 'des2': 'Estrusi metallici'},  'descrizione': { 'id':'PR RULLO  49 SP  3 OGIVATO', 'des': ''},  'misura': 0.00,  'prezzo': 31.40,  'costo': 6.28,  'lastcost': 0.00,  'peso': 1.57,  'peso_medio': 1.57,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '020069',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/020069.JPG',  'classe': { 'des1':'02', 'des2': 'Estrusi plastica'},  'descrizione': { 'id':'SPAZZOLINO 4 8 X 5 NERO supp  10mm', 'des': 'CLICK-TXT-NODO-13Q-11QJ-CABLE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '010636',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/010636.JPG',  'classe': { 'des1':'01', 'des2': 'Estrusi metallici'},  'descrizione': { 'id':'PR CASSONETTO PORTANTE VOLANT D49', 'des': 'ZEROGRADI - WGB'},  'misura': 0.00,  'prezzo': 26.80,  'costo': 5.36,  'lastcost': 0.00,  'peso': 1.34,  'peso_medio': 1.34,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '010633',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/010633.JPG',  'classe': { 'des1':'01', 'des2': 'Estrusi metallici'},  'descrizione': { 'id':'PR COVER CASSONETTO VOLANT D49', 'des': 'ZEROGRADI - WGB'},  'misura': 0.00,  'prezzo': 27.80,  'costo': 5.56,  'lastcost': 0.00,  'peso': 1.39,  'peso_medio': 1.39,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': 'TS_TELO',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/TS_TELO.JPG',  'classe': { 'des1':'TS', 'des2': 'TENDE DA SOLE'},  'descrizione': { 'id':'TELO DA ASSEMBLARE SU TENDA', 'des': ''},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '272343',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/NONE.JPG',  'classe': { 'des1':'27', 'des2': 'Kit'},  'descrizione': { 'id':'KIT COPPIA TESTATE E TAPPI FRONTALE', 'des': 'TENSE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 2.19,  'peso_medio': 2.19,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '010634',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/010634.JPG',  'classe': { 'des1':'01', 'des2': 'Estrusi metallici'},  'descrizione': { 'id':'PR FRONTALE AGGANCIABILE', 'des': 'ZEROGRADI - WGB'},  'misura': 0.00,  'prezzo': 61.20,  'costo': 12.24,  'lastcost': 0.00,  'peso': 3.06,  'peso_medio': 3.06,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': 'GR0349',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/NONE.JPG',  'classe': { 'des1':'GR', 'des2': 'VIRTUAL GROUP'},  'descrizione': { 'id':'GRUPPO TENSIONATORE    SEMPLICE MOTORE SX D100 ZEROGRADI-WGB', 'des': 'GRUPPO TENSIONATORE    SEMPLICE MOTORE SX D100 ZEROGRADI-WGB'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': 'GR0350',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/NONE.JPG',  'classe': { 'des1':'GR', 'des2': 'VIRTUAL GROUP'},  'descrizione': { 'id':'GRUPPO    TENSIONATORE SEMPLICE MOTORE DX D100 ZEROGRADI-WGB', 'des': 'GRUPPO    TENSIONATORE SEMPLICE MOTORE DX D100 ZEROGRADI-WGB'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': 'GR0351',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/NONE.JPG',  'classe': { 'des1':'GR', 'des2': 'VIRTUAL GROUP'},  'descrizione': { 'id':'GRUPPO    TENSIONATORE SEMPLICE MOTORE SX D85 TENSE', 'des': 'GRUPPO    TENSIONATORE SEMPLICE MOTORE SX D85 TENSE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': 'GR0352',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/NONE.JPG',  'classe': { 'des1':'GR', 'des2': 'VIRTUAL GROUP'},  'descrizione': { 'id':'GRUPPO    TENSIONATORE MOTORE DX D85 TENSE', 'des': 'GRUPPO    TENSIONATORE MOTORE DX D85 TENSE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': 'GR0353',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/NONE.JPG',  'classe': { 'des1':'GR', 'des2': 'VIRTUAL GROUP'},  'descrizione': { 'id':'GRUPPO TENSIONATORE    SEMPLICE CONDOTTO SX D100 ZEROGRADI-WGB', 'des': 'GRUPPO TENSIONATORE    SEMPLICE CONDOTTO SX D100 ZEROGRADI-WGB'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': 'GR0355',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/NONE.JPG',  'classe': { 'des1':'GR', 'des2': 'VIRTUAL GROUP'},  'descrizione': { 'id':'GRUPPO    TENSIONATORE SEMPLICE CONDOTTO SX D85 TENSE', 'des': 'GRUPPO    TENSIONATORE SEMPLICE CONDOTTO SX D85 TENSE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': 'GR0356',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/NONE.JPG',  'classe': { 'des1':'GR', 'des2': 'VIRTUAL GROUP'},  'descrizione': { 'id':'GRUPPO    TENSIONATORE SEMPLICE CONDOTTO DX D85 TENSE', 'des': 'GRUPPO    TENSIONATORE SEMPLICE CONDOTTO DX D85 TENSE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': 'GR0354',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/NONE.JPG',  'classe': { 'des1':'GR', 'des2': 'VIRTUAL GROUP'},  'descrizione': { 'id':'GRUPPO    TENSIONATORE SEMPLICE CONDOTTO DX D100 ZEROGRADI-WGB', 'des': 'GRUPPO    TENSIONATORE SEMPLICE CONDOTTO DX D100 ZEROGRADI-WGB'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '020145',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/020145.JPG',  'classe': { 'des1':'02', 'des2': 'Estrusi plastica'},  'descrizione': { 'id':'PR SALVATELO PROFILATO ESTRUSO', 'des': 'TXT'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.08,  'peso_medio': 0.08,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '030213',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/030213.JPG',  'classe': { 'des1':'03', 'des2': 'Profili commerciali'},  'descrizione': { 'id':'PR RULLO D100 15 10-LISCIO SALDATO', 'des': ''},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 3.13,  'peso_medio': 3.13,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '030208',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/030208.JPG',  'classe': { 'des1':'03', 'des2': 'Profili commerciali'},  'descrizione': { 'id':'PR RULLO D85 12 10 - LISCIO SALDATO', 'des': 'OGIVA TONDA ZINCATO'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '010627',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/010627.JPG',  'classe': { 'des1':'01', 'des2': 'Estrusi metallici'},  'descrizione': { 'id':'PR CASSONETTO MONOBLOCCO PORTANTE', 'des': 'ZEROGRADI - WGB'},  'misura': 0.00,  'prezzo': 98.20,  'costo': 19.64,  'lastcost': 0.00,  'peso': 4.91,  'peso_medio': 4.91,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '010638',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/010638.JPG',  'classe': { 'des1':'01', 'des2': 'Estrusi metallici'},  'descrizione': { 'id':'PR CASSONETTO INSERIBILE SUPERIORE', 'des': 'ZEROGRADI - WGB'},  'misura': 0.00,  'prezzo': 33.40,  'costo': 6.68,  'lastcost': 0.00,  'peso': 1.67,  'peso_medio': 1.67,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '010631',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/010631.JPG',  'classe': { 'des1':'01', 'des2': 'Estrusi metallici'},  'descrizione': { 'id':'PR PROLUNGA GUARNIZIONE ROMPIACQUA', 'des': 'ZEROGRADI - WGB'},  'misura': 0.00,  'prezzo': 7.80,  'costo': 1.56,  'lastcost': 0.00,  'peso': 0.39,  'peso_medio': 0.39,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '010628',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/010628.JPG',  'classe': { 'des1':'01', 'des2': 'Estrusi metallici'},  'descrizione': { 'id':'PR CHIUSURA CASSONETTO PORTA LED', 'des': 'ZEROGRADI - WGB'},  'misura': 0.00,  'prezzo': 9.40,  'costo': 1.88,  'lastcost': 0.00,  'peso': 0.47,  'peso_medio': 0.47,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '010628',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/010628.JPG',  'classe': { 'des1':'01', 'des2': 'Estrusi metallici'},  'descrizione': { 'id':'PR CHIUSURA CASSONETTO PORTA LED', 'des': 'ZEROGRADI - WGB'},  'misura': 0.00,  'prezzo': 9.40,  'costo': 1.88,  'lastcost': 0.00,  'peso': 0.47,  'peso_medio': 0.47,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '020165',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/020165.JPG',  'classe': { 'des1':'02', 'des2': 'Estrusi plastica'},  'descrizione': { 'id':'CLIP FERMA LED', 'des': 'CLICK ZIP'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.06,  'peso_medio': 0.06,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '020052',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/020052.JPG',  'classe': { 'des1':'02', 'des2': 'Estrusi plastica'},  'descrizione': { 'id':'SPAZZOLINO 4 8 X 15 NERO', 'des': '11-13  DIM  TOLO E TEKA'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '020183',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/020183.JPG',  'classe': { 'des1':'02', 'des2': 'Estrusi plastica'},  'descrizione': { 'id':'GUARNIZIONE ROMPIACQUA', 'des': 'TENSE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.06,  'peso_medio': 0.06,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '020032',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/NONE.JPG',  'classe': { 'des1':'02', 'des2': 'Estrusi plastica'},  'descrizione': { 'id':'GUARNIZIONE A PALLONCINO D  8', 'des': 'CLICK ZIP'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '320051',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/320051.JPG',  'classe': { 'des1':'32', 'des2': 'Commerciali'},  'descrizione': { 'id':'PROTEGGI TELO 100x242 PTFE C BIADES', 'des': 'TXT'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.04,  'peso_medio': 0.04,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '320111',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/320111.JPG',  'classe': { 'des1':'11', 'des2': 'Stampati plastica'},  'descrizione': { 'id':'PIEDINO ADESIVO PARACOLPI 12 7x3 5', 'des': 'TENSE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '146428',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/NONE.JPG',  'classe': { 'des1':'14', 'des2': 'Elementi di fissaggio'},  'descrizione': { 'id':'VITE TRILOBATA TSPEI M5x12 INOX', 'des': ''},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '122239',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/122239.JPG',  'classe': { 'des1':'12', 'des2': 'Tagliati laser e inseparabili'},  'descrizione': { 'id':'PIASTRINO 60X8X4 FORI M5', 'des': 'TENSE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.01,  'peso_medio': 0.01,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '140769',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/140769.JPG',  'classe': { 'des1':'14', 'des2': 'Elementi di fissaggio'},  'descrizione': { 'id':'VITE TCEI M 5x10 INOX', 'des': ''},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '090364',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/090364.JPG',  'classe': { 'des1':'09', 'des2': 'Mozziconi'},  'descrizione': { 'id':'SUPPORTO CASSONETTO SUPERIORE', 'des': 'TENSE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.10,  'peso_medio': 0.10,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '146429',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/NONE.JPG',  'classe': { 'des1':'14', 'des2': 'Elementi di fissaggio'},  'descrizione': { 'id':'VITE TRILOBATA TSPEI M5x8 INOX', 'des': ''},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '111458',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/111458.JPG',  'classe': { 'des1':'11', 'des2': 'Stampati plastica'},  'descrizione': { 'id':'PASSACAVO MORBIDO 14X8X10 SP3', 'des': 'TENSE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '146157',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/NONE.JPG',  'classe': { 'des1':'14', 'des2': 'Elementi di fissaggio'},  'descrizione': { 'id':'AUTOFILETTANTE TSP TORX 4 8x19 INOX', 'des': ''},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '146409',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/NONE.JPG',  'classe': { 'des1':'14', 'des2': 'Elementi di fissaggio'},  'descrizione': { 'id':'VITE TC TORX M 5x12 INOX TRILOBATA', 'des': ''},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '010634',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/010634.JPG',  'classe': { 'des1':'01', 'des2': 'Estrusi metallici'},  'descrizione': { 'id':'PR FRONTALE AGGANCIABILE', 'des': 'ZEROGRADI - WGB'},  'misura': 0.00,  'prezzo': 61.20,  'costo': 12.24,  'lastcost': 0.00,  'peso': 3.06,  'peso_medio': 3.06,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '272359',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/NONE.JPG',  'classe': { 'des1':'27', 'des2': 'Kit'},  'descrizione': { 'id':'KIT SUPPORTINO INTERMEDIO TETTUCCIO', 'des': 'TENSE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.64,  'peso_medio': 0.64,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '010618',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/010618.JPG',  'classe': { 'des1':'01', 'des2': 'Estrusi metallici'},  'descrizione': { 'id':'PR QUADRO 70x70 4 OGIVE', 'des': 'ZEROGRADI - WGB'},  'misura': 0.00,  'prezzo': 35.80,  'costo': 7.16,  'lastcost': 0.00,  'peso': 1.79,  'peso_medio': 1.79,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '272353',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/NONE.JPG',  'classe': { 'des1':'27', 'des2': 'Kit'},  'descrizione': { 'id':'KIT COPPIA SUPPORTO FRANGITRATTA', 'des': 'ZERO'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.80,  'peso_medio': 0.80,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '272354',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/NONE.JPG',  'classe': { 'des1':'27', 'des2': 'Kit'},  'descrizione': { 'id':'KIT COPPIA CARTER FRANGITRATTA', 'des': 'ZERO'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.24,  'peso_medio': 0.24,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '111465',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/111465.JPG',  'classe': { 'des1':'11', 'des2': 'Stampati plastica'},  'descrizione': { 'id':'PROTEGGI TELO FRANGITRATTA', 'des': 'TENSE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.02,  'peso_medio': 0.02,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': 'GR0373B',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/NONE.JPG',  'classe': { 'des1':'GR', 'des2': 'VIRTUAL GROUP'},  'descrizione': { 'id':'GRUPPO GAMBA    MONOBLOCCO TENSE', 'des': 'GRUPPO GAMBA    MONOBLOCCO TENSE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '010592',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/010592.JPG',  'classe': { 'des1':'01', 'des2': 'Estrusi metallici'},  'descrizione': { 'id':'PR GAMBA 110X110', 'des': 'MOVIE'},  'misura': 0.00,  'prezzo': 70.90,  'costo': 14.18,  'lastcost': 0.00,  'peso': 3.51,  'peso_medio': 3.55,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '010618',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/010618.JPG',  'classe': { 'des1':'01', 'des2': 'Estrusi metallici'},  'descrizione': { 'id':'PR QUADRO 70x70 4 OGIVE', 'des': 'ZEROGRADI - WGB'},  'misura': 0.00,  'prezzo': 35.80,  'costo': 7.16,  'lastcost': 0.00,  'peso': 1.79,  'peso_medio': 1.79,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': 'GR0372B',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/NONE.JPG',  'classe': { 'des1':'GR', 'des2': 'VIRTUAL GROUP'},  'descrizione': { 'id':'GRUPPO GAMBA    STANDARD TENSE', 'des': 'GRUPPO GAMBA    STANDARD TENSE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '010618',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/010618.JPG',  'classe': { 'des1':'01', 'des2': 'Estrusi metallici'},  'descrizione': { 'id':'PR QUADRO 70x70 4 OGIVE', 'des': 'ZEROGRADI - WGB'},  'misura': 0.00,  'prezzo': 35.80,  'costo': 7.16,  'lastcost': 0.00,  'peso': 1.79,  'peso_medio': 1.79,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': 'GR0374B',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/NONE.JPG',  'classe': { 'des1':'GR', 'des2': 'VIRTUAL GROUP'},  'descrizione': { 'id':'GRUPPO GAMBA    TELESCOPICA TENSE', 'des': 'GRUPPO GAMBA    TELESCOPICA TENSE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '010592',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/010592.JPG',  'classe': { 'des1':'01', 'des2': 'Estrusi metallici'},  'descrizione': { 'id':'PR GAMBA 110X110', 'des': 'MOVIE'},  'misura': 0.00,  'prezzo': 70.90,  'costo': 14.18,  'lastcost': 0.00,  'peso': 3.51,  'peso_medio': 3.55,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '272349',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/NONE.JPG',  'classe': { 'des1':'27', 'des2': 'Kit'},  'descrizione': { 'id':'KIT COPPIA SUPPORTO PARETE ROTABILE', 'des': 'TENSE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.95,  'peso_medio': 0.95,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '130186',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/130186.JPG',  'classe': { 'des1':'13', 'des2': 'Lavorati Meccanici'},  'descrizione': { 'id':'PIASTRINO 80x20x6 INOX', 'des': ''},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '140707',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/NONE.JPG',  'classe': { 'des1':'14', 'des2': 'Elementi di fissaggio'},  'descrizione': { 'id':'VITE TSPEI M 8x18 INOX', 'des': ''},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '146424',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/NONE.JPG',  'classe': { 'des1':'14', 'des2': 'Elementi di fissaggio'},  'descrizione': { 'id':'SPINA ELASTICA 5x26 INOX', 'des': ''},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '140472',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/140472.JPG',  'classe': { 'des1':'14', 'des2': 'Elementi di fissaggio'},  'descrizione': { 'id':'ROSETTA D 10 5 18x2 INOX', 'des': ''},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '122232',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/122232.JPG',  'classe': { 'des1':'12', 'des2': 'Tagliati laser e inseparabili'},  'descrizione': { 'id':'SUPPORTO PARETE TORCENTE SALDATO', 'des': 'ZEROGRADI'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 2.57,  'peso_medio': 2.57,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '130186',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/130186.JPG',  'classe': { 'des1':'13', 'des2': 'Lavorati Meccanici'},  'descrizione': { 'id':'PIASTRINO 80x20x6 INOX', 'des': ''},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '140707',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/NONE.JPG',  'classe': { 'des1':'14', 'des2': 'Elementi di fissaggio'},  'descrizione': { 'id':'VITE TSPEI M 8x18 INOX', 'des': ''},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '090360',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/090360.JPG',  'classe': { 'des1':'09', 'des2': 'Mozziconi'},  'descrizione': { 'id':'AGGANCIO CASSO PAR TORCENTE', 'des': 'ZEROGRADI'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.09,  'peso_medio': 0.09,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '131381',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/131381.JPG',  'classe': { 'des1':'13', 'des2': 'Lavorati Meccanici'},  'descrizione': { 'id':'PERNO SUPP TORCENTE DOPPIO FORO', 'des': 'ZEROGRADI'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.09,  'peso_medio': 0.09,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '140508',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/140508.JPG',  'classe': { 'des1':'14', 'des2': 'Elementi di fissaggio'},  'descrizione': { 'id':'VITE TCEI M10x30 INOX', 'des': ''},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '140783',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/140783.JPG',  'classe': { 'des1':'14', 'des2': 'Elementi di fissaggio'},  'descrizione': { 'id':'VITE TCEI M 4x20 INOX', 'des': ''},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '090366',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/090366.JPG',  'classe': { 'des1':'09', 'des2': 'Mozziconi'},  'descrizione': { 'id':'SUPP PAR TORCENTE AGGANCIANTE', 'des': 'ZEROGRADI'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.57,  'peso_medio': 0.57,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '131389',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/131389.JPG',  'classe': { 'des1':'13', 'des2': 'Lavorati Meccanici'},  'descrizione': { 'id':'SNODO GAMBA-GUIDA LATO GUIDA', 'des': 'TENSE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.30,  'peso_medio': 0.30,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '272360',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/NONE.JPG',  'classe': { 'des1':'27', 'des2': 'Kit'},  'descrizione': { 'id':'KIT COPPIA PIASTRINE GAMBA', 'des': 'TENSE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.13,  'peso_medio': 0.13,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '122241',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/122241.JPG',  'classe': { 'des1':'12', 'des2': 'Tagliati laser e inseparabili'},  'descrizione': { 'id':'PIASTRINO SNODO GUIDA DOPPIA', 'des': 'TENSE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.07,  'peso_medio': 0.07,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '140588',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/NONE.JPG',  'classe': { 'des1':'14', 'des2': 'Elementi di fissaggio'},  'descrizione': { 'id':'VITE TSPEI M 8x25 INOX', 'des': ''},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '111343',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/111343.JPG',  'classe': { 'des1':'11', 'des2': 'Stampati plastica'},  'descrizione': { 'id':'BOCCOLA FLANGIATA Di12 De14', 'des': 'VOLANT SPAZIO 60-75'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '272351',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/NONE.JPG',  'classe': { 'des1':'27', 'des2': 'Kit'},  'descrizione': { 'id':'KIT COPPIA SNODO GAMBA SINGOLA', 'des': 'TENSE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.42,  'peso_medio': 0.42,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '272360',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/NONE.JPG',  'classe': { 'des1':'27', 'des2': 'Kit'},  'descrizione': { 'id':'KIT COPPIA PIASTRINE GAMBA', 'des': 'TENSE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.13,  'peso_medio': 0.13,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': 'GR0374B',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/NONE.JPG',  'classe': { 'des1':'GR', 'des2': 'VIRTUAL GROUP'},  'descrizione': { 'id':'GRUPPO GAMBA    TELESCOPICA TENSE', 'des': 'GRUPPO GAMBA    TELESCOPICA TENSE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '010592',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/010592.JPG',  'classe': { 'des1':'01', 'des2': 'Estrusi metallici'},  'descrizione': { 'id':'PR GAMBA 110X110', 'des': 'MOVIE'},  'misura': 0.00,  'prezzo': 70.90,  'costo': 14.18,  'lastcost': 0.00,  'peso': 3.51,  'peso_medio': 3.55,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': 'GR0372B',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/NONE.JPG',  'classe': { 'des1':'GR', 'des2': 'VIRTUAL GROUP'},  'descrizione': { 'id':'GRUPPO GAMBA    STANDARD TENSE', 'des': 'GRUPPO GAMBA    STANDARD TENSE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '010618',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/010618.JPG',  'classe': { 'des1':'01', 'des2': 'Estrusi metallici'},  'descrizione': { 'id':'PR QUADRO 70x70 4 OGIVE', 'des': 'ZEROGRADI - WGB'},  'misura': 0.00,  'prezzo': 35.80,  'costo': 7.16,  'lastcost': 0.00,  'peso': 1.79,  'peso_medio': 1.79,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': 'GR0373B',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/NONE.JPG',  'classe': { 'des1':'GR', 'des2': 'VIRTUAL GROUP'},  'descrizione': { 'id':'GRUPPO GAMBA    MONOBLOCCO TENSE', 'des': 'GRUPPO GAMBA    MONOBLOCCO TENSE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '010592',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/010592.JPG',  'classe': { 'des1':'01', 'des2': 'Estrusi metallici'},  'descrizione': { 'id':'PR GAMBA 110X110', 'des': 'MOVIE'},  'misura': 0.00,  'prezzo': 70.90,  'costo': 14.18,  'lastcost': 0.00,  'peso': 3.51,  'peso_medio': 3.55,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '010618',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/010618.JPG',  'classe': { 'des1':'01', 'des2': 'Estrusi metallici'},  'descrizione': { 'id':'PR QUADRO 70x70 4 OGIVE', 'des': 'ZEROGRADI - WGB'},  'misura': 0.00,  'prezzo': 35.80,  'costo': 7.16,  'lastcost': 0.00,  'peso': 1.79,  'peso_medio': 1.79,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': 'GR0365B',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/NONE.JPG',  'classe': { 'des1':'GR', 'des2': 'VIRTUAL GROUP'},  'descrizione': { 'id':'SUPPORTO    GUIDA SINGOLO CON DISTANZIALE TENSE', 'des': 'SUPPORTO    GUIDA SINGOLO CON DISTANZIALE TENSE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '010344',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/010344.JPG',  'classe': { 'des1':'01', 'des2': 'Estrusi metallici'},  'descrizione': { 'id':'PR DISTANZ  SUPPORTO', 'des': 'ZEROGRADI'},  'misura': 0.00,  'prezzo': 13.00,  'costo': 2.60,  'lastcost': 0.00,  'peso': 0.65,  'peso_medio': 0.65,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': 'GR0367B',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/NONE.JPG',  'classe': { 'des1':'GR', 'des2': 'VIRTUAL GROUP'},  'descrizione': { 'id':'SUPPORTO    GUIDA LATERALE CON DISTANZIALE TENSE', 'des': 'SUPPORTO    GUIDA LATERALE CON DISTANZIALE TENSE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '010344',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/010344.JPG',  'classe': { 'des1':'01', 'des2': 'Estrusi metallici'},  'descrizione': { 'id':'PR DISTANZ  SUPPORTO', 'des': 'ZEROGRADI'},  'misura': 0.00,  'prezzo': 13.00,  'costo': 2.60,  'lastcost': 0.00,  'peso': 0.65,  'peso_medio': 0.65,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': 'GR0369B',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/NONE.JPG',  'classe': { 'des1':'GR', 'des2': 'VIRTUAL GROUP'},  'descrizione': { 'id':'SUPPORTO    GUIDA DISASSATO CON DISTANZIALE TENSE', 'des': 'SUPPORTO    GUIDA DISASSATO CON DISTANZIALE TENSE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '010344',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/010344.JPG',  'classe': { 'des1':'01', 'des2': 'Estrusi metallici'},  'descrizione': { 'id':'PR DISTANZ  SUPPORTO', 'des': 'ZEROGRADI'},  'misura': 0.00,  'prezzo': 13.00,  'costo': 2.60,  'lastcost': 0.00,  'peso': 0.65,  'peso_medio': 0.65,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '130186',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/130186.JPG',  'classe': { 'des1':'13', 'des2': 'Lavorati Meccanici'},  'descrizione': { 'id':'PIASTRINO 80x20x6 INOX', 'des': ''},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '140564',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/140564.JPG',  'classe': { 'des1':'14', 'des2': 'Elementi di fissaggio'},  'descrizione': { 'id':'VITE TSPEI M 8x16 INOX', 'des': ''},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '272350',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/NONE.JPG',  'classe': { 'des1':'27', 'des2': 'Kit'},  'descrizione': { 'id':'KIT SUPPORTO SOFFITTO', 'des': 'ZERO'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 2.65,  'peso_medio': 2.65,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '090363',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/090363.JPG',  'classe': { 'des1':'09', 'des2': 'Mozziconi'},  'descrizione': { 'id':'SUPPORTO TETTUCCIO LAVORATO', 'des': 'TENSE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.03,  'peso_medio': 0.03,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '146409',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/NONE.JPG',  'classe': { 'des1':'14', 'des2': 'Elementi di fissaggio'},  'descrizione': { 'id':'VITE TC TORX M 5x12 INOX TRILOBATA', 'des': ''},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '131374',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/131374.JPG',  'classe': { 'des1':'13', 'des2': 'Lavorati Meccanici'},  'descrizione': { 'id':'ANCORAMENTO TETTUCCIO SUPP PAR', 'des': 'TENSE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.06,  'peso_medio': 0.06,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '146338',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/NONE.JPG',  'classe': { 'des1':'14', 'des2': 'Elementi di fissaggio'},  'descrizione': { 'id':'VITE TCEI M 5x16 INOX', 'des': ''},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '146426',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/NONE.JPG',  'classe': { 'des1':'14', 'des2': 'Elementi di fissaggio'},  'descrizione': { 'id':'VITE TCEI M5x50 INOX', 'des': ''},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.01,  'peso_medio': 0.01,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '111471',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/111471.JPG',  'classe': { 'des1':'11', 'des2': 'Stampati plastica'},  'descrizione': { 'id':'TRASCINATORE MOTORE MOLLA BASE', 'des': 'TENSE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.08,  'peso_medio': 0.08,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '111464',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/111464.JPG',  'classe': { 'des1':'11', 'des2': 'Stampati plastica'},  'descrizione': { 'id':'GUSCIO SUPPORTO MOLLA LATO INTERNO', 'des': 'TENSE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.03,  'peso_medio': 0.03,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '146270',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/146270.JPG',  'classe': { 'des1':'14', 'des2': 'Elementi di fissaggio'},  'descrizione': { 'id':'DADO QUADRO M5 INOX NERINOX', 'des': 'DIN 557'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '146251',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/NONE.JPG',  'classe': { 'des1':'14', 'des2': 'Elementi di fissaggio'},  'descrizione': { 'id':'VITE AUTOFILETTANTE TC TORX 4 8X13', 'des': 'INOX CLASSE A2'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '140597',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/140597.JPG',  'classe': { 'des1':'14', 'des2': 'Elementi di fissaggio'},  'descrizione': { 'id':'VITE TCEI M 5x40 INOX P F ', 'des': ''},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '160160',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/160160.JPG',  'classe': { 'des1':'16', 'des2': 'Molle catene'},  'descrizione': { 'id':'MOLLA DI TENSIONAMENTO RULLO SX', 'des': 'TENSE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.88,  'peso_medio': 0.88,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '111463',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/111463.JPG',  'classe': { 'des1':'11', 'des2': 'Stampati plastica'},  'descrizione': { 'id':'AVVOLGICINGHIA SEMISUPP PRINCIPALE', 'des': 'TENSE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.07,  'peso_medio': 0.07,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '111462',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/111462.JPG',  'classe': { 'des1':'11', 'des2': 'Stampati plastica'},  'descrizione': { 'id':'AVVOLGICINGHIA CORONA ESTERNA', 'des': 'TENSE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.16,  'peso_medio': 0.16,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '146431',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/NONE.JPG',  'classe': { 'des1':'14', 'des2': 'Elementi di fissaggio'},  'descrizione': { 'id':'VITE TSPEI M5x20 INOX', 'des': ''},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '111461',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/111461.JPG',  'classe': { 'des1':'11', 'des2': 'Stampati plastica'},  'descrizione': { 'id':'AVVOLGICINGHIA CHIUSURA LATO MOTORE', 'des': 'TENSE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.03,  'peso_medio': 0.03,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '290232',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/NONE.JPG',  'classe': { 'des1':'29', 'des2': 'Imballaggi'},  'descrizione': { 'id':'FASCETTA METALLICA MIN mm 210x4 6', 'des': 'AZIMUT-ZENIT'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '131392',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/131392.JPG',  'classe': { 'des1':'13', 'des2': 'Lavorati Meccanici'},  'descrizione': { 'id':'TUBO TONDO D20X1 5 L367 - INOX', 'des': 'TENSE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.24,  'peso_medio': 0.24,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '111470',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/111470.JPG',  'classe': { 'des1':'11', 'des2': 'Stampati plastica'},  'descrizione': { 'id':'TRASCINATORE MOLLA ESTREMO  85', 'des': 'TENSE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.09,  'peso_medio': 0.09,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '111060',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/111060.JPG',  'classe': { 'des1':'11', 'des2': 'Stampati plastica'},  'descrizione': { 'id':'CALOTTA SCARICATA ZIP D85 LAT  MOT ', 'des': ''},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.14,  'peso_medio': 0.14,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '131393',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/131393.JPG',  'classe': { 'des1':'13', 'des2': 'Lavorati Meccanici'},  'descrizione': { 'id':'TUBO TONDO D50X1 5 L730 - INOX', 'des': 'TENSE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 1.31,  'peso_medio': 1.31,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '146143',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/NONE.JPG',  'classe': { 'des1':'14', 'des2': 'Elementi di fissaggio'},  'descrizione': { 'id':'AUTOFILETTANTE TSP TORX 4 2x16 INOX', 'des': ''},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '131395',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/131395.JPG',  'classe': { 'des1':'13', 'des2': 'Lavorati Meccanici'},  'descrizione': { 'id':'TUBO TONDO D54X1 5 L730 - INOX', 'des': 'TENSE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 1.43,  'peso_medio': 1.43,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '101037',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/101037.JPG',  'classe': { 'des1':'10', 'des2': 'Stampati alluminio'},  'descrizione': { 'id':'TAPPO CON ROCCHETTO GUIDA ZIP', 'des': 'TENSE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.21,  'peso_medio': 0.21,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '101036',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/101036.JPG',  'classe': { 'des1':'10', 'des2': 'Stampati alluminio'},  'descrizione': { 'id':'TAPPINO FINITURA GUIDA ZIP', 'des': 'TENSE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.02,  'peso_medio': 0.02,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '111489',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/NONE.JPG',  'classe': { 'des1':'11', 'des2': 'Stampati plastica'},  'descrizione': { 'id':'RONDELLA DISTANZ 28X18 2 H4 5', 'des': 'TENSE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '111466',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/111466.JPG',  'classe': { 'des1':'11', 'des2': 'Stampati plastica'},  'descrizione': { 'id':'ROTELLA CARRELLO-RINVIO', 'des': 'TENSE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.01,  'peso_medio': 0.01,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '131379',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/131379.JPG',  'classe': { 'des1':'13', 'des2': 'Lavorati Meccanici'},  'descrizione': { 'id':'PERNO ROTELLE-RINVII D12X17 5   M8', 'des': 'TENSE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.02,  'peso_medio': 0.02,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '140783',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/140783.JPG',  'classe': { 'des1':'14', 'des2': 'Elementi di fissaggio'},  'descrizione': { 'id':'VITE TCEI M 4x20 INOX', 'des': ''},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '146157',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/NONE.JPG',  'classe': { 'des1':'14', 'des2': 'Elementi di fissaggio'},  'descrizione': { 'id':'AUTOFILETTANTE TSP TORX 4 8x19 INOX', 'des': ''},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '131399',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/NONE.JPG',  'classe': { 'des1':'13', 'des2': 'Lavorati Meccanici'},  'descrizione': { 'id':'PIASTRINO INF BLOCCA TELO ZIP', 'des': 'TENSE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '140600',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/NONE.JPG',  'classe': { 'des1':'14', 'des2': 'Elementi di fissaggio'},  'descrizione': { 'id':'AUTOFILETTANTE TSP   3 9x9 5 IN', 'des': ''},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '146436',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/NONE.JPG',  'classe': { 'des1':'14', 'des2': 'Elementi di fissaggio'},  'descrizione': { 'id':'VITE TSPEI M 5x16 INOX', 'des': 'TENSE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '101033',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/101033.JPG',  'classe': { 'des1':'10', 'des2': 'Stampati alluminio'},  'descrizione': { 'id':'BLOCCA TELO FRONTALE SX - CON ZIP', 'des': 'ZEROGRADI'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.03,  'peso_medio': 0.03,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '101032',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/101032.JPG',  'classe': { 'des1':'10', 'des2': 'Stampati alluminio'},  'descrizione': { 'id':'BLOCCA TELO FRONTALE DX - CON ZIP', 'des': 'ZEROGRADI'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.03,  'peso_medio': 0.03,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '101038',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/101038.JPG',  'classe': { 'des1':'10', 'des2': 'Stampati alluminio'},  'descrizione': { 'id':'TAPPO CON ROCCHETTO SENZA ZIP', 'des': 'TENSE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.17,  'peso_medio': 0.17,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '122266',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/NONE.JPG',  'classe': { 'des1':'12', 'des2': 'Tagliati laser e inseparabili'},  'descrizione': { 'id':'CHIUSURA TAPPO GUIDA SENZA ZIP', 'des': 'TENSE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.01,  'peso_medio': 0.01,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '111466',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/111466.JPG',  'classe': { 'des1':'11', 'des2': 'Stampati plastica'},  'descrizione': { 'id':'ROTELLA CARRELLO-RINVIO', 'des': 'TENSE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.01,  'peso_medio': 0.01,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '131379',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/131379.JPG',  'classe': { 'des1':'13', 'des2': 'Lavorati Meccanici'},  'descrizione': { 'id':'PERNO ROTELLE-RINVII D12X17 5   M8', 'des': 'TENSE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.02,  'peso_medio': 0.02,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '146430',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/NONE.JPG',  'classe': { 'des1':'14', 'des2': 'Elementi di fissaggio'},  'descrizione': { 'id':'VITE TSPEI M4x12 INOX', 'des': ''},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '146157',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/NONE.JPG',  'classe': { 'des1':'14', 'des2': 'Elementi di fissaggio'},  'descrizione': { 'id':'AUTOFILETTANTE TSP TORX 4 8x19 INOX', 'des': ''},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '090363',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/090363.JPG',  'classe': { 'des1':'09', 'des2': 'Mozziconi'},  'descrizione': { 'id':'SUPPORTO TETTUCCIO LAVORATO', 'des': 'TENSE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.03,  'peso_medio': 0.03,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '146409',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/NONE.JPG',  'classe': { 'des1':'14', 'des2': 'Elementi di fissaggio'},  'descrizione': { 'id':'VITE TC TORX M 5x12 INOX TRILOBATA', 'des': ''},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '131374',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/131374.JPG',  'classe': { 'des1':'13', 'des2': 'Lavorati Meccanici'},  'descrizione': { 'id':'ANCORAMENTO TETTUCCIO SUPP PAR', 'des': 'TENSE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.06,  'peso_medio': 0.06,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '146426',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/NONE.JPG',  'classe': { 'des1':'14', 'des2': 'Elementi di fissaggio'},  'descrizione': { 'id':'VITE TCEI M5x50 INOX', 'des': ''},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.01,  'peso_medio': 0.01,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '146338',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/NONE.JPG',  'classe': { 'des1':'14', 'des2': 'Elementi di fissaggio'},  'descrizione': { 'id':'VITE TCEI M 5x16 INOX', 'des': ''},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '140658',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/NONE.JPG',  'classe': { 'des1':'14', 'des2': 'Elementi di fissaggio'},  'descrizione': { 'id':'VITE TCEI M 4x10 INOX', 'des': ''},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '090363',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/090363.JPG',  'classe': { 'des1':'09', 'des2': 'Mozziconi'},  'descrizione': { 'id':'SUPPORTO TETTUCCIO LAVORATO', 'des': 'TENSE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.03,  'peso_medio': 0.03,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '146409',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/NONE.JPG',  'classe': { 'des1':'14', 'des2': 'Elementi di fissaggio'},  'descrizione': { 'id':'VITE TC TORX M 5x12 INOX TRILOBATA', 'des': ''},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '131406',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/NONE.JPG',  'classe': { 'des1':'13', 'des2': 'Lavorati Meccanici'},  'descrizione': { 'id':'SUPPORTO INTERMEDIO TETTUCCIO', 'des': 'TENSE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.18,  'peso_medio': 0.18,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '146426',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/NONE.JPG',  'classe': { 'des1':'14', 'des2': 'Elementi di fissaggio'},  'descrizione': { 'id':'VITE TCEI M5x50 INOX', 'des': ''},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.01,  'peso_medio': 0.01,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '140658',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/NONE.JPG',  'classe': { 'des1':'14', 'des2': 'Elementi di fissaggio'},  'descrizione': { 'id':'VITE TCEI M 4x10 INOX', 'des': ''},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '090361',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/090361.JPG',  'classe': { 'des1':'09', 'des2': 'Mozziconi'},  'descrizione': { 'id':'ANCORAGGIO GUIDA', 'des': 'TENSE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.04,  'peso_medio': 0.04,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '146421',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/NONE.JPG',  'classe': { 'des1':'14', 'des2': 'Elementi di fissaggio'},  'descrizione': { 'id':'GRANO EI PUNTA CONICA M8x20 INOX', 'des': ''},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '111467',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/111467.JPG',  'classe': { 'des1':'11', 'des2': 'Stampati plastica'},  'descrizione': { 'id':'TAPPINO ANCORAGGIO GUIDA', 'des': 'TENSE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '272357',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/NONE.JPG',  'classe': { 'des1':'27', 'des2': 'Kit'},  'descrizione': { 'id':'KIT ANCORAGGIO GUIDA', 'des': 'TENSE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 2.70,  'peso_medio': 2.70,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '131385',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/131385.JPG',  'classe': { 'des1':'13', 'des2': 'Lavorati Meccanici'},  'descrizione': { 'id':'PIASTRA ANCORAGGIO GUIDA BASE', 'des': 'TENSE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.03,  'peso_medio': 0.03,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '146144',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/146144.JPG',  'classe': { 'des1':'14', 'des2': 'Elementi di fissaggio'},  'descrizione': { 'id':'AUTOFILETTANTE TSP TORX 4 8x32 INOX', 'des': ''},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '146178',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/NONE.JPG',  'classe': { 'des1':'14', 'des2': 'Elementi di fissaggio'},  'descrizione': { 'id':'AUTOFILETTANTE TC TORX 4 8x32 INOX', 'des': ''},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '272357',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/NONE.JPG',  'classe': { 'des1':'27', 'des2': 'Kit'},  'descrizione': { 'id':'KIT ANCORAGGIO GUIDA', 'des': 'TENSE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 2.70,  'peso_medio': 2.70,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '131386',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/131386.JPG',  'classe': { 'des1':'13', 'des2': 'Lavorati Meccanici'},  'descrizione': { 'id':'PIASTRA GUIDA MENSOLA ANGOLARE', 'des': 'TENSE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.14,  'peso_medio': 0.14,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '140606',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/NONE.JPG',  'classe': { 'des1':'14', 'des2': 'Elementi di fissaggio'},  'descrizione': { 'id':'ROSETTA D 5 3 10x1 INOX DIN125A', 'des': 'UNI6592'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '146178',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/NONE.JPG',  'classe': { 'des1':'14', 'des2': 'Elementi di fissaggio'},  'descrizione': { 'id':'AUTOFILETTANTE TC TORX 4 8x32 INOX', 'des': ''},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '272357',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/NONE.JPG',  'classe': { 'des1':'27', 'des2': 'Kit'},  'descrizione': { 'id':'KIT ANCORAGGIO GUIDA', 'des': 'TENSE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 2.70,  'peso_medio': 2.70,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '131387',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/131387.JPG',  'classe': { 'des1':'13', 'des2': 'Lavorati Meccanici'},  'descrizione': { 'id':'PIASTRA GUIDA MENSOLA DISASSATA', 'des': 'TENSE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.11,  'peso_medio': 0.11,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '146144',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/146144.JPG',  'classe': { 'des1':'14', 'des2': 'Elementi di fissaggio'},  'descrizione': { 'id':'AUTOFILETTANTE TSP TORX 4 8x32 INOX', 'des': ''},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '146178',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/NONE.JPG',  'classe': { 'des1':'14', 'des2': 'Elementi di fissaggio'},  'descrizione': { 'id':'AUTOFILETTANTE TC TORX 4 8x32 INOX', 'des': ''},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '272357',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/NONE.JPG',  'classe': { 'des1':'27', 'des2': 'Kit'},  'descrizione': { 'id':'KIT ANCORAGGIO GUIDA', 'des': 'TENSE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 2.70,  'peso_medio': 2.70,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '131384',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/131384.JPG',  'classe': { 'des1':'13', 'des2': 'Lavorati Meccanici'},  'descrizione': { 'id':'PIASTRA ANCORAGGIO GUIDA ACC UNIONE', 'des': 'TENSE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.03,  'peso_medio': 0.03,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '131385',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/131385.JPG',  'classe': { 'des1':'13', 'des2': 'Lavorati Meccanici'},  'descrizione': { 'id':'PIASTRA ANCORAGGIO GUIDA BASE', 'des': 'TENSE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.03,  'peso_medio': 0.03,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '146144',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/146144.JPG',  'classe': { 'des1':'14', 'des2': 'Elementi di fissaggio'},  'descrizione': { 'id':'AUTOFILETTANTE TSP TORX 4 8x32 INOX', 'des': ''},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '140612',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/140612.JPG',  'classe': { 'des1':'14', 'des2': 'Elementi di fissaggio'},  'descrizione': { 'id':'VITE TSPEI M 6x16 INOX', 'des': ''},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '140485',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/140485.JPG',  'classe': { 'des1':'14', 'des2': 'Elementi di fissaggio'},  'descrizione': { 'id':'DADO AUTOBLOCCANTE BASSO M 6 INOX', 'des': ''},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '140522',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/140522.JPG',  'classe': { 'des1':'14', 'des2': 'Elementi di fissaggio'},  'descrizione': { 'id':'ROSETTA D 6 4 12 5x1 6 INOX', 'des': ''},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '122255',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/NONE.JPG',  'classe': { 'des1':'12', 'des2': 'Tagliati laser e inseparabili'},  'descrizione': { 'id':'STAFFA SOFFITTO', 'des': 'TENSE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 2.61,  'peso_medio': 2.61,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '140707',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/NONE.JPG',  'classe': { 'des1':'14', 'des2': 'Elementi di fissaggio'},  'descrizione': { 'id':'VITE TSPEI M 8x18 INOX', 'des': ''},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '090365',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/090365.JPG',  'classe': { 'des1':'09', 'des2': 'Mozziconi'},  'descrizione': { 'id':'SUPP PAR ANCORABILE RUOTABILE', 'des': 'TENSE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.65,  'peso_medio': 0.65,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '090359',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/090359.JPG',  'classe': { 'des1':'09', 'des2': 'Mozziconi'},  'descrizione': { 'id':'AGGANCIO CASSO PAR RUOTABILE', 'des': 'TENSE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.10,  'peso_medio': 0.10,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '090362',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/090362.JPG',  'classe': { 'des1':'09', 'des2': 'Mozziconi'},  'descrizione': { 'id':'ANTISOLLEVAMENTO SUPP PAR RUOTABILE', 'des': 'TENSE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.05,  'peso_medio': 0.05,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '131380',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/131380.JPG',  'classe': { 'des1':'13', 'des2': 'Lavorati Meccanici'},  'descrizione': { 'id':'PERNO SUPPORTO ATTACCO PARETE', 'des': 'TENSE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.16,  'peso_medio': 0.16,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '140578',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/140578.JPG',  'classe': { 'des1':'14', 'des2': 'Elementi di fissaggio'},  'descrizione': { 'id':'GRANO EI M 6x10 PC UNI5927 SG360', 'des': 'INOX'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '146430',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/NONE.JPG',  'classe': { 'des1':'14', 'des2': 'Elementi di fissaggio'},  'descrizione': { 'id':'VITE TSPEI M4x12 INOX', 'des': ''},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '131403',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/NONE.JPG',  'classe': { 'des1':'13', 'des2': 'Lavorati Meccanici'},  'descrizione': { 'id':'TAPPO CASSONETTO VOLANT DX', 'des': 'TENSE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.22,  'peso_medio': 0.22,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '131379',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/131379.JPG',  'classe': { 'des1':'13', 'des2': 'Lavorati Meccanici'},  'descrizione': { 'id':'PERNO ROTELLE-RINVII D12X17 5   M8', 'des': 'TENSE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.02,  'peso_medio': 0.02,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '111466',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/111466.JPG',  'classe': { 'des1':'11', 'des2': 'Stampati plastica'},  'descrizione': { 'id':'ROTELLA CARRELLO-RINVIO', 'des': 'TENSE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.01,  'peso_medio': 0.01,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '122238',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/122238.JPG',  'classe': { 'des1':'12', 'des2': 'Tagliati laser e inseparabili'},  'descrizione': { 'id':'GANCETTO BLOCCACINGHIA FRONTALE', 'des': 'TENSE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.01,  'peso_medio': 0.01,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '160161',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/160161.JPG',  'classe': { 'des1':'16', 'des2': 'Molle catene'},  'descrizione': { 'id':'MOLLA GANCIO FRONTALE', 'des': 'TENSE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '146422',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/NONE.JPG',  'classe': { 'des1':'14', 'des2': 'Elementi di fissaggio'},  'descrizione': { 'id':'SPINA CILINDRICA 4x8 INOX', 'des': ''},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '122233',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/NONE.JPG',  'classe': { 'des1':'12', 'des2': 'Tagliati laser e inseparabili'},  'descrizione': { 'id':'CONTROTAPPO TESTATA DX VOLANT', 'des': 'TENSE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.09,  'peso_medio': 0.09,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '146151',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/146151.JPG',  'classe': { 'des1':'14', 'des2': 'Elementi di fissaggio'},  'descrizione': { 'id':'AUTOFILETTANTE TSP TORX 4 2x32 INOX', 'des': ''},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '146409',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/NONE.JPG',  'classe': { 'des1':'14', 'des2': 'Elementi di fissaggio'},  'descrizione': { 'id':'VITE TC TORX M 5x12 INOX TRILOBATA', 'des': ''},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '140674',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/NONE.JPG',  'classe': { 'des1':'14', 'des2': 'Elementi di fissaggio'},  'descrizione': { 'id':'VITE TSPEI M 5x10 INOX', 'des': ''},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '110165',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/110165.JPG',  'classe': { 'des1':'11', 'des2': 'Stampati plastica'},  'descrizione': { 'id':'LATO FOLLE FISSO', 'des': '11QUJ - 13QU - CLICK'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '110166',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/110166.JPG',  'classe': { 'des1':'11', 'des2': 'Stampati plastica'},  'descrizione': { 'id':'LATO FOLLE MOBILE', 'des': '11QUJ - 13QU - CLICK'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '146152',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/146152.JPG',  'classe': { 'des1':'14', 'des2': 'Elementi di fissaggio'},  'descrizione': { 'id':'AUTOFILETTANTE TC TORX 3 9x19 INOX', 'des': '6954'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '140502',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/NONE.JPG',  'classe': { 'des1':'14', 'des2': 'Elementi di fissaggio'},  'descrizione': { 'id':'VITE TCEI M 6x25 INOX', 'des': ''},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '131405',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/NONE.JPG',  'classe': { 'des1':'13', 'des2': 'Lavorati Meccanici'},  'descrizione': { 'id':'PIN COLLEGAMENTO VOLANT', 'des': 'TENSE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.04,  'peso_medio': 0.04,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '146436',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/NONE.JPG',  'classe': { 'des1':'14', 'des2': 'Elementi di fissaggio'},  'descrizione': { 'id':'VITE TSPEI M 5x16 INOX', 'des': 'TENSE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '131404',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/NONE.JPG',  'classe': { 'des1':'13', 'des2': 'Lavorati Meccanici'},  'descrizione': { 'id':'TAPPO CASSONETTO VOLANT SX', 'des': 'TENSE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.22,  'peso_medio': 0.22,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '122234',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/NONE.JPG',  'classe': { 'des1':'12', 'des2': 'Tagliati laser e inseparabili'},  'descrizione': { 'id':'CONTROTAPPO TESTATA SX VOLANT', 'des': 'TENSE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.09,  'peso_medio': 0.09,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '111096',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/111096.JPG',  'classe': { 'des1':'11', 'des2': 'Stampati plastica'},  'descrizione': { 'id':'TASSELLO MOTORE SOMFY LS 40', 'des': 'CLICK ZIP'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.01,  'peso_medio': 0.01,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '111097',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/111097.JPG',  'classe': { 'des1':'11', 'des2': 'Stampati plastica'},  'descrizione': { 'id':'SUPPORTO MOTORE SOMFY LS 40', 'des': 'CLICK ZIP'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.03,  'peso_medio': 0.03,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '140856',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/140856.JPG',  'classe': { 'des1':'14', 'des2': 'Elementi di fissaggio'},  'descrizione': { 'id':'VITE TCEI M 6x12 INOX', 'des': ''},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '122269',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/NONE.JPG',  'classe': { 'des1':'12', 'des2': 'Tagliati laser e inseparabili'},  'descrizione': { 'id':'PIN COLLEGAMENTO VOLANT PIATTO', 'des': 'TENSE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.02,  'peso_medio': 0.02,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '140769',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/140769.JPG',  'classe': { 'des1':'14', 'des2': 'Elementi di fissaggio'},  'descrizione': { 'id':'VITE TCEI M 5x10 INOX', 'des': ''},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '101035',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/101035.JPG',  'classe': { 'des1':'10', 'des2': 'Stampati alluminio'},  'descrizione': { 'id':'COVER TESTATA SX', 'des': 'TENSE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.27,  'peso_medio': 0.27,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '111466',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/111466.JPG',  'classe': { 'des1':'11', 'des2': 'Stampati plastica'},  'descrizione': { 'id':'ROTELLA CARRELLO-RINVIO', 'des': 'TENSE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.01,  'peso_medio': 0.01,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '131379',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/131379.JPG',  'classe': { 'des1':'13', 'des2': 'Lavorati Meccanici'},  'descrizione': { 'id':'PERNO ROTELLE-RINVII D12X17 5   M8', 'des': 'TENSE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.02,  'peso_medio': 0.02,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '140674',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/NONE.JPG',  'classe': { 'des1':'14', 'des2': 'Elementi di fissaggio'},  'descrizione': { 'id':'VITE TSPEI M 5x10 INOX', 'des': ''},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '101042',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/101042.JPG',  'classe': { 'des1':'10', 'des2': 'Stampati alluminio'},  'descrizione': { 'id':'TESTATA PORTANTE SX', 'des': 'TENSE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.80,  'peso_medio': 0.80,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '111459',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/111459.JPG',  'classe': { 'des1':'11', 'des2': 'Stampati plastica'},  'descrizione': { 'id':'ROTELLA TERMINALE ANTISCAVALLAMENTO', 'des': 'TENSE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '146430',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/NONE.JPG',  'classe': { 'des1':'14', 'des2': 'Elementi di fissaggio'},  'descrizione': { 'id':'VITE TSPEI M4x12 INOX', 'des': ''},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '101034',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/101034.JPG',  'classe': { 'des1':'10', 'des2': 'Stampati alluminio'},  'descrizione': { 'id':'COVER TESTATA DX', 'des': 'TENSE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.27,  'peso_medio': 0.27,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '101041',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/101041.JPG',  'classe': { 'des1':'10', 'des2': 'Stampati alluminio'},  'descrizione': { 'id':'TESTATA PORTANTE DX', 'des': 'TENSE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.80,  'peso_medio': 0.80,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '111489',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/NONE.JPG',  'classe': { 'des1':'11', 'des2': 'Stampati plastica'},  'descrizione': { 'id':'RONDELLA DISTANZ 28X18 2 H4 5', 'des': 'TENSE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '111458',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/111458.JPG',  'classe': { 'des1':'11', 'des2': 'Stampati plastica'},  'descrizione': { 'id':'PASSACAVO MORBIDO 14X8X10 SP3', 'des': 'TENSE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '131379',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/131379.JPG',  'classe': { 'des1':'13', 'des2': 'Lavorati Meccanici'},  'descrizione': { 'id':'PERNO ROTELLE-RINVII D12X17 5   M8', 'des': 'TENSE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.02,  'peso_medio': 0.02,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '101031',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/101031.JPG',  'classe': { 'des1':'10', 'des2': 'Stampati alluminio'},  'descrizione': { 'id':'AGGANCIO CINGHIOLO GUIDA SENZA ZIP', 'des': 'TENSE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.05,  'peso_medio': 0.05,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '111466',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/111466.JPG',  'classe': { 'des1':'11', 'des2': 'Stampati plastica'},  'descrizione': { 'id':'ROTELLA CARRELLO-RINVIO', 'des': 'TENSE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.01,  'peso_medio': 0.01,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '122238',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/122238.JPG',  'classe': { 'des1':'12', 'des2': 'Tagliati laser e inseparabili'},  'descrizione': { 'id':'GANCETTO BLOCCACINGHIA FRONTALE', 'des': 'TENSE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.01,  'peso_medio': 0.01,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '146422',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/NONE.JPG',  'classe': { 'des1':'14', 'des2': 'Elementi di fissaggio'},  'descrizione': { 'id':'SPINA CILINDRICA 4x8 INOX', 'des': ''},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '122235',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/122235.JPG',  'classe': { 'des1':'12', 'des2': 'Tagliati laser e inseparabili'},  'descrizione': { 'id':'CONTROTAPPO CARRELLO FRONTALE', 'des': 'TENSE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.03,  'peso_medio': 0.03,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '140769',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/140769.JPG',  'classe': { 'des1':'14', 'des2': 'Elementi di fissaggio'},  'descrizione': { 'id':'VITE TCEI M 5x10 INOX', 'des': ''},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '320048',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/320048.JPG',  'classe': { 'des1':'32', 'des2': 'Commerciali'},  'descrizione': { 'id':'CLIP DENTELLATA  15X17 7 FORO  5', 'des': ''},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '160161',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/160161.JPG',  'classe': { 'des1':'16', 'des2': 'Molle catene'},  'descrizione': { 'id':'MOLLA GANCIO FRONTALE', 'des': 'TENSE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '101039',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/101039.JPG',  'classe': { 'des1':'10', 'des2': 'Stampati alluminio'},  'descrizione': { 'id':'TAPPO FRONTALE DX', 'des': 'TENSE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.17,  'peso_medio': 0.17,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '101040',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/101040.JPG',  'classe': { 'des1':'10', 'des2': 'Stampati alluminio'},  'descrizione': { 'id':'TAPPO FRONTALE SX', 'des': 'TENSE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.17,  'peso_medio': 0.17,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '146144',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/146144.JPG',  'classe': { 'des1':'14', 'des2': 'Elementi di fissaggio'},  'descrizione': { 'id':'AUTOFILETTANTE TSP TORX 4 8x32 INOX', 'des': ''},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '111471',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/111471.JPG',  'classe': { 'des1':'11', 'des2': 'Stampati plastica'},  'descrizione': { 'id':'TRASCINATORE MOTORE MOLLA BASE', 'des': 'TENSE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.08,  'peso_medio': 0.08,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '111464',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/111464.JPG',  'classe': { 'des1':'11', 'des2': 'Stampati plastica'},  'descrizione': { 'id':'GUSCIO SUPPORTO MOLLA LATO INTERNO', 'des': 'TENSE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.03,  'peso_medio': 0.03,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '146270',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/146270.JPG',  'classe': { 'des1':'14', 'des2': 'Elementi di fissaggio'},  'descrizione': { 'id':'DADO QUADRO M5 INOX NERINOX', 'des': 'DIN 557'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '146251',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/NONE.JPG',  'classe': { 'des1':'14', 'des2': 'Elementi di fissaggio'},  'descrizione': { 'id':'VITE AUTOFILETTANTE TC TORX 4 8X13', 'des': 'INOX CLASSE A2'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '111469',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/111469.JPG',  'classe': { 'des1':'11', 'des2': 'Stampati plastica'},  'descrizione': { 'id':'TRASCINATORE MOLLA ESTREMO  100', 'des': 'ZEROGRADI'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.11,  'peso_medio': 0.11,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '140597',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/140597.JPG',  'classe': { 'des1':'14', 'des2': 'Elementi di fissaggio'},  'descrizione': { 'id':'VITE TCEI M 5x40 INOX P F ', 'des': ''},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '160160',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/160160.JPG',  'classe': { 'des1':'16', 'des2': 'Molle catene'},  'descrizione': { 'id':'MOLLA DI TENSIONAMENTO RULLO SX', 'des': 'TENSE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.88,  'peso_medio': 0.88,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '111474',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/111474.JPG',  'classe': { 'des1':'11', 'des2': 'Stampati plastica'},  'descrizione': { 'id':'TRASCINATORE MOTORE MOLLA SOMFY', 'des': 'TENSE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.07,  'peso_medio': 0.07,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '111472',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/111472.JPG',  'classe': { 'des1':'11', 'des2': 'Stampati plastica'},  'descrizione': { 'id':'TRASCINATORE MOTORE MOLLA CHERUBINI', 'des': 'TENSE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.06,  'peso_medio': 0.06,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '111473',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/111473.JPG',  'classe': { 'des1':'11', 'des2': 'Stampati plastica'},  'descrizione': { 'id':'TRASCINATORE MOTORE MOLLA NICE', 'des': 'TENSE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.08,  'peso_medio': 0.08,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '010209',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/010209.JPG',  'classe': { 'des1':'01', 'des2': 'Estrusi metallici'},  'descrizione': { 'id':'PR ALBERO TRASMISSIONE', 'des': 'MED'},  'misura': 0.00,  'prezzo': 22.52,  'costo': 4.50,  'lastcost': 0.00,  'peso': 1.05,  'peso_medio': 1.13,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '290232',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/NONE.JPG',  'classe': { 'des1':'29', 'des2': 'Imballaggi'},  'descrizione': { 'id':'FASCETTA METALLICA MIN mm 210x4 6', 'des': 'AZIMUT-ZENIT'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': 'NOCOD',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/question.jpg',  'classe': { 'des1':'NO', 'des2': 'UNKNOWN'},  'descrizione': { 'id':'unknown   NOCOD ', 'des': 'unknown   NOCOD '},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '146354',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/NONE.JPG',  'classe': { 'des1':'14', 'des2': 'Elementi di fissaggio'},  'descrizione': { 'id':'VITE TCEI M 5x25 INOX', 'des': 'C-FRENA FILETTI'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '111463',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/111463.JPG',  'classe': { 'des1':'11', 'des2': 'Stampati plastica'},  'descrizione': { 'id':'AVVOLGICINGHIA SEMISUPP PRINCIPALE', 'des': 'TENSE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.07,  'peso_medio': 0.07,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '111462',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/111462.JPG',  'classe': { 'des1':'11', 'des2': 'Stampati plastica'},  'descrizione': { 'id':'AVVOLGICINGHIA CORONA ESTERNA', 'des': 'TENSE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.16,  'peso_medio': 0.16,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '146423',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/NONE.JPG',  'classe': { 'des1':'14', 'des2': 'Elementi di fissaggio'},  'descrizione': { 'id':'SPINA CILINDRICA 5x20 INOX', 'des': ''},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '146431',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/NONE.JPG',  'classe': { 'des1':'14', 'des2': 'Elementi di fissaggio'},  'descrizione': { 'id':'VITE TSPEI M5x20 INOX', 'des': ''},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '111461',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/111461.JPG',  'classe': { 'des1':'11', 'des2': 'Stampati plastica'},  'descrizione': { 'id':'AVVOLGICINGHIA CHIUSURA LATO MOTORE', 'des': 'TENSE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.03,  'peso_medio': 0.03,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '111161',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/111161.JPG',  'classe': { 'des1':'11', 'des2': 'Stampati plastica'},  'descrizione': { 'id':'CALOTTA SCARIC  ZIP D100 LAT  MOT ', 'des': ''},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.18,  'peso_medio': 0.18,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '146251',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/NONE.JPG',  'classe': { 'des1':'14', 'des2': 'Elementi di fissaggio'},  'descrizione': { 'id':'VITE AUTOFILETTANTE TC TORX 4 8X13', 'des': 'INOX CLASSE A2'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '146143',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/NONE.JPG',  'classe': { 'des1':'14', 'des2': 'Elementi di fissaggio'},  'descrizione': { 'id':'AUTOFILETTANTE TSP TORX 4 2x16 INOX', 'des': ''},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '131392',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/131392.JPG',  'classe': { 'des1':'13', 'des2': 'Lavorati Meccanici'},  'descrizione': { 'id':'TUBO TONDO D20X1 5 L367 - INOX', 'des': 'TENSE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.24,  'peso_medio': 0.24,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '131395',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/131395.JPG',  'classe': { 'des1':'13', 'des2': 'Lavorati Meccanici'},  'descrizione': { 'id':'TUBO TONDO D54X1 5 L730 - INOX', 'des': 'TENSE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 1.43,  'peso_medio': 1.43,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '131393',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/131393.JPG',  'classe': { 'des1':'13', 'des2': 'Lavorati Meccanici'},  'descrizione': { 'id':'TUBO TONDO D50X1 5 L730 - INOX', 'des': 'TENSE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 1.31,  'peso_medio': 1.31,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '111471',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/111471.JPG',  'classe': { 'des1':'11', 'des2': 'Stampati plastica'},  'descrizione': { 'id':'TRASCINATORE MOTORE MOLLA BASE', 'des': 'TENSE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.08,  'peso_medio': 0.08,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '111464',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/111464.JPG',  'classe': { 'des1':'11', 'des2': 'Stampati plastica'},  'descrizione': { 'id':'GUSCIO SUPPORTO MOLLA LATO INTERNO', 'des': 'TENSE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.03,  'peso_medio': 0.03,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '146270',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/146270.JPG',  'classe': { 'des1':'14', 'des2': 'Elementi di fissaggio'},  'descrizione': { 'id':'DADO QUADRO M5 INOX NERINOX', 'des': 'DIN 557'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '146251',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/NONE.JPG',  'classe': { 'des1':'14', 'des2': 'Elementi di fissaggio'},  'descrizione': { 'id':'VITE AUTOFILETTANTE TC TORX 4 8X13', 'des': 'INOX CLASSE A2'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '111469',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/111469.JPG',  'classe': { 'des1':'11', 'des2': 'Stampati plastica'},  'descrizione': { 'id':'TRASCINATORE MOLLA ESTREMO  100', 'des': 'ZEROGRADI'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.11,  'peso_medio': 0.11,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '140597',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/140597.JPG',  'classe': { 'des1':'14', 'des2': 'Elementi di fissaggio'},  'descrizione': { 'id':'VITE TCEI M 5x40 INOX P F ', 'des': ''},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '160159',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/160159.JPG',  'classe': { 'des1':'16', 'des2': 'Molle catene'},  'descrizione': { 'id':'MOLLA DI TENSIONAMENTO RULLO DX', 'des': 'TENSE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.88,  'peso_medio': 0.88,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '111474',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/111474.JPG',  'classe': { 'des1':'11', 'des2': 'Stampati plastica'},  'descrizione': { 'id':'TRASCINATORE MOTORE MOLLA SOMFY', 'des': 'TENSE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.07,  'peso_medio': 0.07,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '111472',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/111472.JPG',  'classe': { 'des1':'11', 'des2': 'Stampati plastica'},  'descrizione': { 'id':'TRASCINATORE MOTORE MOLLA CHERUBINI', 'des': 'TENSE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.06,  'peso_medio': 0.06,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '111473',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/111473.JPG',  'classe': { 'des1':'11', 'des2': 'Stampati plastica'},  'descrizione': { 'id':'TRASCINATORE MOTORE MOLLA NICE', 'des': 'TENSE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.08,  'peso_medio': 0.08,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '010209',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/010209.JPG',  'classe': { 'des1':'01', 'des2': 'Estrusi metallici'},  'descrizione': { 'id':'PR ALBERO TRASMISSIONE', 'des': 'MED'},  'misura': 0.00,  'prezzo': 22.52,  'costo': 4.50,  'lastcost': 0.00,  'peso': 1.05,  'peso_medio': 1.13,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '290232',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/NONE.JPG',  'classe': { 'des1':'29', 'des2': 'Imballaggi'},  'descrizione': { 'id':'FASCETTA METALLICA MIN mm 210x4 6', 'des': 'AZIMUT-ZENIT'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': 'NOCOD',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/question.jpg',  'classe': { 'des1':'NO', 'des2': 'UNKNOWN'},  'descrizione': { 'id':'unknown   NOCOD ', 'des': 'unknown   NOCOD '},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '146354',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/NONE.JPG',  'classe': { 'des1':'14', 'des2': 'Elementi di fissaggio'},  'descrizione': { 'id':'VITE TCEI M 5x25 INOX', 'des': 'C-FRENA FILETTI'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '111463',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/111463.JPG',  'classe': { 'des1':'11', 'des2': 'Stampati plastica'},  'descrizione': { 'id':'AVVOLGICINGHIA SEMISUPP PRINCIPALE', 'des': 'TENSE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.07,  'peso_medio': 0.07,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '111462',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/111462.JPG',  'classe': { 'des1':'11', 'des2': 'Stampati plastica'},  'descrizione': { 'id':'AVVOLGICINGHIA CORONA ESTERNA', 'des': 'TENSE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.16,  'peso_medio': 0.16,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '146423',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/NONE.JPG',  'classe': { 'des1':'14', 'des2': 'Elementi di fissaggio'},  'descrizione': { 'id':'SPINA CILINDRICA 5x20 INOX', 'des': ''},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '146431',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/NONE.JPG',  'classe': { 'des1':'14', 'des2': 'Elementi di fissaggio'},  'descrizione': { 'id':'VITE TSPEI M5x20 INOX', 'des': ''},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '111461',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/111461.JPG',  'classe': { 'des1':'11', 'des2': 'Stampati plastica'},  'descrizione': { 'id':'AVVOLGICINGHIA CHIUSURA LATO MOTORE', 'des': 'TENSE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.03,  'peso_medio': 0.03,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '111161',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/111161.JPG',  'classe': { 'des1':'11', 'des2': 'Stampati plastica'},  'descrizione': { 'id':'CALOTTA SCARIC  ZIP D100 LAT  MOT ', 'des': ''},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.18,  'peso_medio': 0.18,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '146143',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/NONE.JPG',  'classe': { 'des1':'14', 'des2': 'Elementi di fissaggio'},  'descrizione': { 'id':'AUTOFILETTANTE TSP TORX 4 2x16 INOX', 'des': ''},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '146146',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/146146.JPG',  'classe': { 'des1':'14', 'des2': 'Elementi di fissaggio'},  'descrizione': { 'id':'AUTOFILETTANTE TSP TORX 2 9x19 INOX', 'des': ''},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '131392',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/131392.JPG',  'classe': { 'des1':'13', 'des2': 'Lavorati Meccanici'},  'descrizione': { 'id':'TUBO TONDO D20X1 5 L367 - INOX', 'des': 'TENSE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.24,  'peso_medio': 0.24,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '131395',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/131395.JPG',  'classe': { 'des1':'13', 'des2': 'Lavorati Meccanici'},  'descrizione': { 'id':'TUBO TONDO D54X1 5 L730 - INOX', 'des': 'TENSE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 1.43,  'peso_medio': 1.43,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '131393',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/131393.JPG',  'classe': { 'des1':'13', 'des2': 'Lavorati Meccanici'},  'descrizione': { 'id':'TUBO TONDO D50X1 5 L730 - INOX', 'des': 'TENSE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 1.31,  'peso_medio': 1.31,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '272345',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/NONE.JPG',  'classe': { 'des1':'27', 'des2': 'Kit'},  'descrizione': { 'id':'KIT TENSIONATORE D85 LATO MOTORE SX', 'des': 'TENSE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '146354',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/NONE.JPG',  'classe': { 'des1':'14', 'des2': 'Elementi di fissaggio'},  'descrizione': { 'id':'VITE TCEI M 5x25 INOX', 'des': 'C-FRENA FILETTI'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '111474',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/111474.JPG',  'classe': { 'des1':'11', 'des2': 'Stampati plastica'},  'descrizione': { 'id':'TRASCINATORE MOTORE MOLLA SOMFY', 'des': 'TENSE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.07,  'peso_medio': 0.07,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '111472',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/111472.JPG',  'classe': { 'des1':'11', 'des2': 'Stampati plastica'},  'descrizione': { 'id':'TRASCINATORE MOTORE MOLLA CHERUBINI', 'des': 'TENSE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.06,  'peso_medio': 0.06,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '111473',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/111473.JPG',  'classe': { 'des1':'11', 'des2': 'Stampati plastica'},  'descrizione': { 'id':'TRASCINATORE MOTORE MOLLA NICE', 'des': 'TENSE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.08,  'peso_medio': 0.08,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '146251',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/NONE.JPG',  'classe': { 'des1':'14', 'des2': 'Elementi di fissaggio'},  'descrizione': { 'id':'VITE AUTOFILETTANTE TC TORX 4 8X13', 'des': 'INOX CLASSE A2'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '146423',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/NONE.JPG',  'classe': { 'des1':'14', 'des2': 'Elementi di fissaggio'},  'descrizione': { 'id':'SPINA CILINDRICA 5x20 INOX', 'des': ''},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '131401',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/NONE.JPG',  'classe': { 'des1':'13', 'des2': 'Lavorati Meccanici'},  'descrizione': { 'id':'BLOCCA MOTORE SUPERIORE', 'des': 'TENSE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.04,  'peso_medio': 0.04,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '146136',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/NONE.JPG',  'classe': { 'des1':'14', 'des2': 'Elementi di fissaggio'},  'descrizione': { 'id':'EX AUTOFILETTANTE TC TORX 4 8x19 I', 'des': ''},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '010209',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/010209.JPG',  'classe': { 'des1':'01', 'des2': 'Estrusi metallici'},  'descrizione': { 'id':'PR ALBERO TRASMISSIONE', 'des': 'MED'},  'misura': 0.00,  'prezzo': 22.52,  'costo': 4.50,  'lastcost': 0.00,  'peso': 1.05,  'peso_medio': 1.13,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '220045',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/220045.JPG',  'classe': { 'des1':'22', 'des2': 'Funi-Cinghie'},  'descrizione': { 'id':'CINGHIA DI TENSIONAMENTO 12X1', 'des': 'MONOASOLA TENSE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.01,  'peso_medio': 0.01,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '272348',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/NONE.JPG',  'classe': { 'des1':'27', 'des2': 'Kit'},  'descrizione': { 'id':'KIT TENSIONATORE D85 LATO MOTORE DX', 'des': 'TENSE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 3.46,  'peso_medio': 3.46,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '146354',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/NONE.JPG',  'classe': { 'des1':'14', 'des2': 'Elementi di fissaggio'},  'descrizione': { 'id':'VITE TCEI M 5x25 INOX', 'des': 'C-FRENA FILETTI'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '111474',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/111474.JPG',  'classe': { 'des1':'11', 'des2': 'Stampati plastica'},  'descrizione': { 'id':'TRASCINATORE MOTORE MOLLA SOMFY', 'des': 'TENSE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.07,  'peso_medio': 0.07,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '111472',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/111472.JPG',  'classe': { 'des1':'11', 'des2': 'Stampati plastica'},  'descrizione': { 'id':'TRASCINATORE MOTORE MOLLA CHERUBINI', 'des': 'TENSE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.06,  'peso_medio': 0.06,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '111473',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/111473.JPG',  'classe': { 'des1':'11', 'des2': 'Stampati plastica'},  'descrizione': { 'id':'TRASCINATORE MOTORE MOLLA NICE', 'des': 'TENSE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.08,  'peso_medio': 0.08,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '146251',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/NONE.JPG',  'classe': { 'des1':'14', 'des2': 'Elementi di fissaggio'},  'descrizione': { 'id':'VITE AUTOFILETTANTE TC TORX 4 8X13', 'des': 'INOX CLASSE A2'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '146423',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/NONE.JPG',  'classe': { 'des1':'14', 'des2': 'Elementi di fissaggio'},  'descrizione': { 'id':'SPINA CILINDRICA 5x20 INOX', 'des': ''},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '131401',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/NONE.JPG',  'classe': { 'des1':'13', 'des2': 'Lavorati Meccanici'},  'descrizione': { 'id':'BLOCCA MOTORE SUPERIORE', 'des': 'TENSE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.04,  'peso_medio': 0.04,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '146136',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/NONE.JPG',  'classe': { 'des1':'14', 'des2': 'Elementi di fissaggio'},  'descrizione': { 'id':'EX AUTOFILETTANTE TC TORX 4 8x19 I', 'des': ''},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '010209',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/010209.JPG',  'classe': { 'des1':'01', 'des2': 'Estrusi metallici'},  'descrizione': { 'id':'PR ALBERO TRASMISSIONE', 'des': 'MED'},  'misura': 0.00,  'prezzo': 22.52,  'costo': 4.50,  'lastcost': 0.00,  'peso': 1.05,  'peso_medio': 1.13,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '220045',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/220045.JPG',  'classe': { 'des1':'22', 'des2': 'Funi-Cinghie'},  'descrizione': { 'id':'CINGHIA DI TENSIONAMENTO 12X1', 'des': 'MONOASOLA TENSE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.01,  'peso_medio': 0.01,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '111471',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/111471.JPG',  'classe': { 'des1':'11', 'des2': 'Stampati plastica'},  'descrizione': { 'id':'TRASCINATORE MOTORE MOLLA BASE', 'des': 'TENSE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.08,  'peso_medio': 0.08,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '111464',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/111464.JPG',  'classe': { 'des1':'11', 'des2': 'Stampati plastica'},  'descrizione': { 'id':'GUSCIO SUPPORTO MOLLA LATO INTERNO', 'des': 'TENSE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.03,  'peso_medio': 0.03,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '146270',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/146270.JPG',  'classe': { 'des1':'14', 'des2': 'Elementi di fissaggio'},  'descrizione': { 'id':'DADO QUADRO M5 INOX NERINOX', 'des': 'DIN 557'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '146251',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/NONE.JPG',  'classe': { 'des1':'14', 'des2': 'Elementi di fissaggio'},  'descrizione': { 'id':'VITE AUTOFILETTANTE TC TORX 4 8X13', 'des': 'INOX CLASSE A2'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '111469',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/111469.JPG',  'classe': { 'des1':'11', 'des2': 'Stampati plastica'},  'descrizione': { 'id':'TRASCINATORE MOLLA ESTREMO  100', 'des': 'ZEROGRADI'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.11,  'peso_medio': 0.11,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '140597',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/140597.JPG',  'classe': { 'des1':'14', 'des2': 'Elementi di fissaggio'},  'descrizione': { 'id':'VITE TCEI M 5x40 INOX P F ', 'des': ''},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '160160',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/160160.JPG',  'classe': { 'des1':'16', 'des2': 'Molle catene'},  'descrizione': { 'id':'MOLLA DI TENSIONAMENTO RULLO SX', 'des': 'TENSE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.88,  'peso_medio': 0.88,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '111343',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/111343.JPG',  'classe': { 'des1':'11', 'des2': 'Stampati plastica'},  'descrizione': { 'id':'BOCCOLA FLANGIATA Di12 De14', 'des': 'VOLANT SPAZIO 60-75'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '131382',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/131382.JPG',  'classe': { 'des1':'13', 'des2': 'Lavorati Meccanici'},  'descrizione': { 'id':'PERNO TENSIONATORE LATO FOLLE', 'des': 'TENSE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.05,  'peso_medio': 0.05,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '140783',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/140783.JPG',  'classe': { 'des1':'14', 'des2': 'Elementi di fissaggio'},  'descrizione': { 'id':'VITE TCEI M 4x20 INOX', 'des': ''},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '146354',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/NONE.JPG',  'classe': { 'des1':'14', 'des2': 'Elementi di fissaggio'},  'descrizione': { 'id':'VITE TCEI M 5x25 INOX', 'des': 'C-FRENA FILETTI'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '111462',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/111462.JPG',  'classe': { 'des1':'11', 'des2': 'Stampati plastica'},  'descrizione': { 'id':'AVVOLGICINGHIA CORONA ESTERNA', 'des': 'TENSE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.16,  'peso_medio': 0.16,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '111463',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/111463.JPG',  'classe': { 'des1':'11', 'des2': 'Stampati plastica'},  'descrizione': { 'id':'AVVOLGICINGHIA SEMISUPP PRINCIPALE', 'des': 'TENSE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.07,  'peso_medio': 0.07,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '146423',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/NONE.JPG',  'classe': { 'des1':'14', 'des2': 'Elementi di fissaggio'},  'descrizione': { 'id':'SPINA CILINDRICA 5x20 INOX', 'des': ''},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '146431',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/NONE.JPG',  'classe': { 'des1':'14', 'des2': 'Elementi di fissaggio'},  'descrizione': { 'id':'VITE TSPEI M5x20 INOX', 'des': ''},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '111460',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/111460.JPG',  'classe': { 'des1':'11', 'des2': 'Stampati plastica'},  'descrizione': { 'id':'AVVOLGICINGHIA CHIUSURA LATO FOLLE', 'des': 'TENSE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.06,  'peso_medio': 0.06,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '111161',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/111161.JPG',  'classe': { 'des1':'11', 'des2': 'Stampati plastica'},  'descrizione': { 'id':'CALOTTA SCARIC  ZIP D100 LAT  MOT ', 'des': ''},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.18,  'peso_medio': 0.18,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '131394',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/131394.JPG',  'classe': { 'des1':'13', 'des2': 'Lavorati Meccanici'},  'descrizione': { 'id':'TUBO TONDO D54X1 5 L120 - INOX', 'des': 'TENSE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.20,  'peso_medio': 0.20,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '131392',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/131392.JPG',  'classe': { 'des1':'13', 'des2': 'Lavorati Meccanici'},  'descrizione': { 'id':'TUBO TONDO D20X1 5 L367 - INOX', 'des': 'TENSE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.24,  'peso_medio': 0.24,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '290232',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/NONE.JPG',  'classe': { 'des1':'29', 'des2': 'Imballaggi'},  'descrizione': { 'id':'FASCETTA METALLICA MIN mm 210x4 6', 'des': 'AZIMUT-ZENIT'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': 'NOCOD',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/question.jpg',  'classe': { 'des1':'NO', 'des2': 'UNKNOWN'},  'descrizione': { 'id':'unknown   NOCOD ', 'des': 'unknown   NOCOD '},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '272355',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/NONE.JPG',  'classe': { 'des1':'27', 'des2': 'Kit'},  'descrizione': { 'id':'KIT TENSIONATORE D85 LATO FOLLE SX', 'des': 'TENSE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.10,  'peso_medio': 0.10,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '146423',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/NONE.JPG',  'classe': { 'des1':'14', 'des2': 'Elementi di fissaggio'},  'descrizione': { 'id':'SPINA CILINDRICA 5x20 INOX', 'des': ''},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '131390',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/131390.JPG',  'classe': { 'des1':'13', 'des2': 'Lavorati Meccanici'},  'descrizione': { 'id':'STAFFETTA SUPPORTO TENSIONATORE', 'des': 'TENSE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.04,  'peso_medio': 0.04,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '131382',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/131382.JPG',  'classe': { 'des1':'13', 'des2': 'Lavorati Meccanici'},  'descrizione': { 'id':'PERNO TENSIONATORE LATO FOLLE', 'des': 'TENSE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.05,  'peso_medio': 0.05,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '140783',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/140783.JPG',  'classe': { 'des1':'14', 'des2': 'Elementi di fissaggio'},  'descrizione': { 'id':'VITE TCEI M 4x20 INOX', 'des': ''},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '146354',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/NONE.JPG',  'classe': { 'des1':'14', 'des2': 'Elementi di fissaggio'},  'descrizione': { 'id':'VITE TCEI M 5x25 INOX', 'des': 'C-FRENA FILETTI'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '272356',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/NONE.JPG',  'classe': { 'des1':'27', 'des2': 'Kit'},  'descrizione': { 'id':'KIT TENSIONATORE D85 LATO FOLLE DX', 'des': 'TENSE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 1.80,  'peso_medio': 1.80,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '146423',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/NONE.JPG',  'classe': { 'des1':'14', 'des2': 'Elementi di fissaggio'},  'descrizione': { 'id':'SPINA CILINDRICA 5x20 INOX', 'des': ''},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '131390',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/131390.JPG',  'classe': { 'des1':'13', 'des2': 'Lavorati Meccanici'},  'descrizione': { 'id':'STAFFETTA SUPPORTO TENSIONATORE', 'des': 'TENSE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.04,  'peso_medio': 0.04,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '131382',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/131382.JPG',  'classe': { 'des1':'13', 'des2': 'Lavorati Meccanici'},  'descrizione': { 'id':'PERNO TENSIONATORE LATO FOLLE', 'des': 'TENSE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.05,  'peso_medio': 0.05,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '140783',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/140783.JPG',  'classe': { 'des1':'14', 'des2': 'Elementi di fissaggio'},  'descrizione': { 'id':'VITE TCEI M 4x20 INOX', 'des': ''},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '146354',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/NONE.JPG',  'classe': { 'des1':'14', 'des2': 'Elementi di fissaggio'},  'descrizione': { 'id':'VITE TCEI M 5x25 INOX', 'des': 'C-FRENA FILETTI'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '111471',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/111471.JPG',  'classe': { 'des1':'11', 'des2': 'Stampati plastica'},  'descrizione': { 'id':'TRASCINATORE MOTORE MOLLA BASE', 'des': 'TENSE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.08,  'peso_medio': 0.08,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '111464',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/111464.JPG',  'classe': { 'des1':'11', 'des2': 'Stampati plastica'},  'descrizione': { 'id':'GUSCIO SUPPORTO MOLLA LATO INTERNO', 'des': 'TENSE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.03,  'peso_medio': 0.03,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '146270',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/146270.JPG',  'classe': { 'des1':'14', 'des2': 'Elementi di fissaggio'},  'descrizione': { 'id':'DADO QUADRO M5 INOX NERINOX', 'des': 'DIN 557'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '146251',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/NONE.JPG',  'classe': { 'des1':'14', 'des2': 'Elementi di fissaggio'},  'descrizione': { 'id':'VITE AUTOFILETTANTE TC TORX 4 8X13', 'des': 'INOX CLASSE A2'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '111469',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/111469.JPG',  'classe': { 'des1':'11', 'des2': 'Stampati plastica'},  'descrizione': { 'id':'TRASCINATORE MOLLA ESTREMO  100', 'des': 'ZEROGRADI'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.11,  'peso_medio': 0.11,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '140597',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/140597.JPG',  'classe': { 'des1':'14', 'des2': 'Elementi di fissaggio'},  'descrizione': { 'id':'VITE TCEI M 5x40 INOX P F ', 'des': ''},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '160159',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/160159.JPG',  'classe': { 'des1':'16', 'des2': 'Molle catene'},  'descrizione': { 'id':'MOLLA DI TENSIONAMENTO RULLO DX', 'des': 'TENSE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.88,  'peso_medio': 0.88,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '111343',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/111343.JPG',  'classe': { 'des1':'11', 'des2': 'Stampati plastica'},  'descrizione': { 'id':'BOCCOLA FLANGIATA Di12 De14', 'des': 'VOLANT SPAZIO 60-75'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '131382',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/131382.JPG',  'classe': { 'des1':'13', 'des2': 'Lavorati Meccanici'},  'descrizione': { 'id':'PERNO TENSIONATORE LATO FOLLE', 'des': 'TENSE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.05,  'peso_medio': 0.05,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '140783',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/140783.JPG',  'classe': { 'des1':'14', 'des2': 'Elementi di fissaggio'},  'descrizione': { 'id':'VITE TCEI M 4x20 INOX', 'des': ''},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '146354',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/NONE.JPG',  'classe': { 'des1':'14', 'des2': 'Elementi di fissaggio'},  'descrizione': { 'id':'VITE TCEI M 5x25 INOX', 'des': 'C-FRENA FILETTI'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '111462',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/111462.JPG',  'classe': { 'des1':'11', 'des2': 'Stampati plastica'},  'descrizione': { 'id':'AVVOLGICINGHIA CORONA ESTERNA', 'des': 'TENSE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.16,  'peso_medio': 0.16,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '111463',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/111463.JPG',  'classe': { 'des1':'11', 'des2': 'Stampati plastica'},  'descrizione': { 'id':'AVVOLGICINGHIA SEMISUPP PRINCIPALE', 'des': 'TENSE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.07,  'peso_medio': 0.07,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '146423',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/NONE.JPG',  'classe': { 'des1':'14', 'des2': 'Elementi di fissaggio'},  'descrizione': { 'id':'SPINA CILINDRICA 5x20 INOX', 'des': ''},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '146431',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/NONE.JPG',  'classe': { 'des1':'14', 'des2': 'Elementi di fissaggio'},  'descrizione': { 'id':'VITE TSPEI M5x20 INOX', 'des': ''},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '111460',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/111460.JPG',  'classe': { 'des1':'11', 'des2': 'Stampati plastica'},  'descrizione': { 'id':'AVVOLGICINGHIA CHIUSURA LATO FOLLE', 'des': 'TENSE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.06,  'peso_medio': 0.06,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '111161',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/111161.JPG',  'classe': { 'des1':'11', 'des2': 'Stampati plastica'},  'descrizione': { 'id':'CALOTTA SCARIC  ZIP D100 LAT  MOT ', 'des': ''},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.18,  'peso_medio': 0.18,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '131394',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/131394.JPG',  'classe': { 'des1':'13', 'des2': 'Lavorati Meccanici'},  'descrizione': { 'id':'TUBO TONDO D54X1 5 L120 - INOX', 'des': 'TENSE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.20,  'peso_medio': 0.20,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '131392',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/131392.JPG',  'classe': { 'des1':'13', 'des2': 'Lavorati Meccanici'},  'descrizione': { 'id':'TUBO TONDO D20X1 5 L367 - INOX', 'des': 'TENSE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.24,  'peso_medio': 0.24,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '290232',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/NONE.JPG',  'classe': { 'des1':'29', 'des2': 'Imballaggi'},  'descrizione': { 'id':'FASCETTA METALLICA MIN mm 210x4 6', 'des': 'AZIMUT-ZENIT'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': 'NOCOD',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/question.jpg',  'classe': { 'des1':'NO', 'des2': 'UNKNOWN'},  'descrizione': { 'id':'unknown   NOCOD ', 'des': 'unknown   NOCOD '},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '131391',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/131391.JPG',  'classe': { 'des1':'13', 'des2': 'Lavorati Meccanici'},  'descrizione': { 'id':'SUPPORTO FRANGITRATTA STATICO', 'des': 'TENSE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.26,  'peso_medio': 0.26,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '090361',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/090361.JPG',  'classe': { 'des1':'09', 'des2': 'Mozziconi'},  'descrizione': { 'id':'ANCORAGGIO GUIDA', 'des': 'TENSE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.04,  'peso_medio': 0.04,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '146440',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/NONE.JPG',  'classe': { 'des1':'14', 'des2': 'Elementi di fissaggio'},  'descrizione': { 'id':'GRANO EI M 8x50 PC INOX', 'des': 'TENSE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '140856',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/140856.JPG',  'classe': { 'des1':'14', 'des2': 'Elementi di fissaggio'},  'descrizione': { 'id':'VITE TCEI M 6x12 INOX', 'des': ''},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '140812',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/140812.JPG',  'classe': { 'des1':'14', 'des2': 'Elementi di fissaggio'},  'descrizione': { 'id':'AUTOFILETTANTE TCEI 6 3x50 INOX', 'des': ''},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '122236',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/122236.JPG',  'classe': { 'des1':'12', 'des2': 'Tagliati laser e inseparabili'},  'descrizione': { 'id':'COVER SUPPORTO FRANGITRATTA', 'des': 'TENSE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.10,  'peso_medio': 0.10,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '160125',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/NONE.JPG',  'classe': { 'des1':'16', 'des2': 'Molle catene'},  'descrizione': { 'id':'BIADESIVO 3M VHB 15x40 SP1 5', 'des': 'CLICK ZIP CABLE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '122244',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/122244.JPG',  'classe': { 'des1':'12', 'des2': 'Tagliati laser e inseparabili'},  'descrizione': { 'id':'PIEDINO GAMBA MAGGIORATO CENTRALE', 'des': 'ZEROGRADI'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 2.56,  'peso_medio': 2.56,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '111468',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/111468.JPG',  'classe': { 'des1':'11', 'des2': 'Stampati plastica'},  'descrizione': { 'id':'TAPPO CHIUSURA SUP GAMBA TEL', 'des': 'ZEROGRADI'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.07,  'peso_medio': 0.07,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '146180',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/146180.JPG',  'classe': { 'des1':'14', 'des2': 'Elementi di fissaggio'},  'descrizione': { 'id':'AUTOFILETTANTE TSP TORX 6 3x50 INOX', 'des': ''},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.01,  'peso_medio': 0.01,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '140812',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/140812.JPG',  'classe': { 'des1':'14', 'des2': 'Elementi di fissaggio'},  'descrizione': { 'id':'AUTOFILETTANTE TCEI 6 3x50 INOX', 'des': ''},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '131388',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/131388.JPG',  'classe': { 'des1':'13', 'des2': 'Lavorati Meccanici'},  'descrizione': { 'id':'SNODO GAMBA-GUIDA LATO GAMBA', 'des': 'TENSE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.72,  'peso_medio': 0.72,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '146425',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/NONE.JPG',  'classe': { 'des1':'14', 'des2': 'Elementi di fissaggio'},  'descrizione': { 'id':'VITE TCEI M10x50 INOX', 'des': ''},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.04,  'peso_medio': 0.04,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '122268',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/NONE.JPG',  'classe': { 'des1':'12', 'des2': 'Tagliati laser e inseparabili'},  'descrizione': { 'id':'CARTER PIEDE MAGGIORATO GAMBA 110', 'des': ''},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.47,  'peso_medio': 0.47,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '146180',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/146180.JPG',  'classe': { 'des1':'14', 'des2': 'Elementi di fissaggio'},  'descrizione': { 'id':'AUTOFILETTANTE TSP TORX 6 3x50 INOX', 'des': ''},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.01,  'peso_medio': 0.01,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '140812',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/140812.JPG',  'classe': { 'des1':'14', 'des2': 'Elementi di fissaggio'},  'descrizione': { 'id':'AUTOFILETTANTE TCEI 6 3x50 INOX', 'des': ''},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '122245',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/122245.JPG',  'classe': { 'des1':'12', 'des2': 'Tagliati laser e inseparabili'},  'descrizione': { 'id':'PIEDINO GAMBA MONOLITICA', 'des': 'ZEROGRADI'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 1.76,  'peso_medio': 1.76,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '131388',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/131388.JPG',  'classe': { 'des1':'13', 'des2': 'Lavorati Meccanici'},  'descrizione': { 'id':'SNODO GAMBA-GUIDA LATO GAMBA', 'des': 'TENSE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.72,  'peso_medio': 0.72,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '146425',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/NONE.JPG',  'classe': { 'des1':'14', 'des2': 'Elementi di fissaggio'},  'descrizione': { 'id':'VITE TCEI M10x50 INOX', 'des': ''},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.04,  'peso_medio': 0.04,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '122267',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/NONE.JPG',  'classe': { 'des1':'12', 'des2': 'Tagliati laser e inseparabili'},  'descrizione': { 'id':'CARTER PIEDE GAMBA FISSA', 'des': 'TENSE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.37,  'peso_medio': 0.37,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '272358',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/NONE.JPG',  'classe': { 'des1':'27', 'des2': 'Kit'},  'descrizione': { 'id':'KIT SOLLEVAMENTO TELESCOPICO', 'des': 'ZERO'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 3.47,  'peso_medio': 3.47,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '122244',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/122244.JPG',  'classe': { 'des1':'12', 'des2': 'Tagliati laser e inseparabili'},  'descrizione': { 'id':'PIEDINO GAMBA MAGGIORATO CENTRALE', 'des': 'ZEROGRADI'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 2.56,  'peso_medio': 2.56,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '111468',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/111468.JPG',  'classe': { 'des1':'11', 'des2': 'Stampati plastica'},  'descrizione': { 'id':'TAPPO CHIUSURA SUP GAMBA TEL', 'des': 'ZEROGRADI'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.07,  'peso_medio': 0.07,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '131378',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/131378.JPG',  'classe': { 'des1':'13', 'des2': 'Lavorati Meccanici'},  'descrizione': { 'id':'PERNO MANOVELLA GAMBA TELESCOPICA', 'des': 'TENSE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.05,  'peso_medio': 0.05,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '146324',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/NONE.JPG',  'classe': { 'des1':'14', 'des2': 'Elementi di fissaggio'},  'descrizione': { 'id':'ROSETTA D 6 4 18 x1 6 INOX', 'des': ''},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '146180',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/146180.JPG',  'classe': { 'des1':'14', 'des2': 'Elementi di fissaggio'},  'descrizione': { 'id':'AUTOFILETTANTE TSP TORX 6 3x50 INOX', 'des': ''},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.01,  'peso_medio': 0.01,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '140812',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/140812.JPG',  'classe': { 'des1':'14', 'des2': 'Elementi di fissaggio'},  'descrizione': { 'id':'AUTOFILETTANTE TCEI 6 3x50 INOX', 'des': ''},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '260053',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/260053.JPG',  'classe': { 'des1':'26', 'des2': 'Arganelli'},  'descrizione': { 'id':'MANOVELLA GAMBA TELESCOPICA', 'des': 'TENSE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.08,  'peso_medio': 0.08,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '140712',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/NONE.JPG',  'classe': { 'des1':'14', 'des2': 'Elementi di fissaggio'},  'descrizione': { 'id':'VITE TBEI M 6x12 INOX UNI 7380', 'des': ''},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '090368',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/NONE.JPG',  'classe': { 'des1':'09', 'des2': 'Mozziconi'},  'descrizione': { 'id':'PR QUADRO 70x70 L 759 GAMBA TEL', 'des': 'ZERO'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 1.46,  'peso_medio': 1.46,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '131388',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/131388.JPG',  'classe': { 'des1':'13', 'des2': 'Lavorati Meccanici'},  'descrizione': { 'id':'SNODO GAMBA-GUIDA LATO GAMBA', 'des': 'TENSE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.72,  'peso_medio': 0.72,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '010618',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/010618.JPG',  'classe': { 'des1':'01', 'des2': 'Estrusi metallici'},  'descrizione': { 'id':'PR QUADRO 70x70 4 OGIVE', 'des': 'ZEROGRADI - WGB'},  'misura': 0.00,  'prezzo': 35.80,  'costo': 7.16,  'lastcost': 0.00,  'peso': 1.79,  'peso_medio': 1.79,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '010618',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/010618.JPG',  'classe': { 'des1':'01', 'des2': 'Estrusi metallici'},  'descrizione': { 'id':'PR QUADRO 70x70 4 OGIVE', 'des': 'ZEROGRADI - WGB'},  'misura': 0.00,  'prezzo': 35.80,  'costo': 7.16,  'lastcost': 0.00,  'peso': 1.79,  'peso_medio': 1.79,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '131388',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/131388.JPG',  'classe': { 'des1':'13', 'des2': 'Lavorati Meccanici'},  'descrizione': { 'id':'SNODO GAMBA-GUIDA LATO GAMBA', 'des': 'TENSE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.72,  'peso_medio': 0.72,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '146419',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/146419.JPG',  'classe': { 'des1':'14', 'des2': 'Elementi di fissaggio'},  'descrizione': { 'id':'CHIAVETTA DI TRASMISSIONE 4X4X25', 'des': 'TENSE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '131373',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/131373.JPG',  'classe': { 'des1':'13', 'des2': 'Lavorati Meccanici'},  'descrizione': { 'id':'VITE TRAPEZOIDALE TR20X20', 'des': 'TENSE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 1.43,  'peso_medio': 1.43,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '260054',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/260054.JPG',  'classe': { 'des1':'26', 'des2': 'Arganelli'},  'descrizione': { 'id':'RIDUTTORE ANGOLARE RAPPORTO 7 5', 'des': ''},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.16,  'peso_medio': 0.16,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '146420',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/NONE.JPG',  'classe': { 'des1':'14', 'des2': 'Elementi di fissaggio'},  'descrizione': { 'id':'ANELLO ELAST  Di9 De14 INOX', 'des': ''},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '131376',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/131376.JPG',  'classe': { 'des1':'13', 'des2': 'Lavorati Meccanici'},  'descrizione': { 'id':'CHIOCCIOLA SOLLEVAMENTO GAMBA TEL', 'des': 'TENSE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.18,  'peso_medio': 0.18,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '140525',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/NONE.JPG',  'classe': { 'des1':'14', 'des2': 'Elementi di fissaggio'},  'descrizione': { 'id':'VITE TCEI M 6x55 INOX', 'des': ''},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '146418',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/146418.JPG',  'classe': { 'des1':'14', 'des2': 'Elementi di fissaggio'},  'descrizione': { 'id':'CHIAVETTA DI TRASMISSIONE 3X3X12', 'des': 'TENSE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '146425',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/NONE.JPG',  'classe': { 'des1':'14', 'des2': 'Elementi di fissaggio'},  'descrizione': { 'id':'VITE TCEI M10x50 INOX', 'des': ''},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.04,  'peso_medio': 0.04,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '131091',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/131091.JPG',  'classe': { 'des1':'13', 'des2': 'Lavorati Meccanici'},  'descrizione': { 'id':'PIASTRINO 20X8 L 105 FORI M8', 'des': ''},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '140564',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/140564.JPG',  'classe': { 'des1':'14', 'des2': 'Elementi di fissaggio'},  'descrizione': { 'id':'VITE TSPEI M 8x16 INOX', 'des': ''},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '131389',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/131389.JPG',  'classe': { 'des1':'13', 'des2': 'Lavorati Meccanici'},  'descrizione': { 'id':'SNODO GAMBA-GUIDA LATO GUIDA', 'des': 'TENSE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.30,  'peso_medio': 0.30,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '122242',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/122242.JPG',  'classe': { 'des1':'12', 'des2': 'Tagliati laser e inseparabili'},  'descrizione': { 'id':'PIASTRINO SNODO GUIDA SINGOLA', 'des': 'TENSE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.10,  'peso_medio': 0.10,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '111343',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/111343.JPG',  'classe': { 'des1':'11', 'des2': 'Stampati plastica'},  'descrizione': { 'id':'BOCCOLA FLANGIATA Di12 De14', 'des': 'VOLANT SPAZIO 60-75'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '140588',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/NONE.JPG',  'classe': { 'des1':'14', 'des2': 'Elementi di fissaggio'},  'descrizione': { 'id':'VITE TSPEI M 8x25 INOX', 'des': ''},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '090361',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/090361.JPG',  'classe': { 'des1':'09', 'des2': 'Mozziconi'},  'descrizione': { 'id':'ANCORAGGIO GUIDA', 'des': 'TENSE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.04,  'peso_medio': 0.04,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '146421',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/NONE.JPG',  'classe': { 'des1':'14', 'des2': 'Elementi di fissaggio'},  'descrizione': { 'id':'GRANO EI PUNTA CONICA M8x20 INOX', 'des': ''},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '111467',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/111467.JPG',  'classe': { 'des1':'11', 'des2': 'Stampati plastica'},  'descrizione': { 'id':'TAPPINO ANCORAGGIO GUIDA', 'des': 'TENSE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '111471',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/111471.JPG',  'classe': { 'des1':'11', 'des2': 'Stampati plastica'},  'descrizione': { 'id':'TRASCINATORE MOTORE MOLLA BASE', 'des': 'TENSE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.08,  'peso_medio': 0.08,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '111464',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/111464.JPG',  'classe': { 'des1':'11', 'des2': 'Stampati plastica'},  'descrizione': { 'id':'GUSCIO SUPPORTO MOLLA LATO INTERNO', 'des': 'TENSE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.03,  'peso_medio': 0.03,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '146270',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/146270.JPG',  'classe': { 'des1':'14', 'des2': 'Elementi di fissaggio'},  'descrizione': { 'id':'DADO QUADRO M5 INOX NERINOX', 'des': 'DIN 557'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '146251',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/NONE.JPG',  'classe': { 'des1':'14', 'des2': 'Elementi di fissaggio'},  'descrizione': { 'id':'VITE AUTOFILETTANTE TC TORX 4 8X13', 'des': 'INOX CLASSE A2'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '140597',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/140597.JPG',  'classe': { 'des1':'14', 'des2': 'Elementi di fissaggio'},  'descrizione': { 'id':'VITE TCEI M 5x40 INOX P F ', 'des': ''},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '160160',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/160160.JPG',  'classe': { 'des1':'16', 'des2': 'Molle catene'},  'descrizione': { 'id':'MOLLA DI TENSIONAMENTO RULLO SX', 'des': 'TENSE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.88,  'peso_medio': 0.88,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '111463',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/111463.JPG',  'classe': { 'des1':'11', 'des2': 'Stampati plastica'},  'descrizione': { 'id':'AVVOLGICINGHIA SEMISUPP PRINCIPALE', 'des': 'TENSE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.07,  'peso_medio': 0.07,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '111462',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/111462.JPG',  'classe': { 'des1':'11', 'des2': 'Stampati plastica'},  'descrizione': { 'id':'AVVOLGICINGHIA CORONA ESTERNA', 'des': 'TENSE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.16,  'peso_medio': 0.16,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '146431',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/NONE.JPG',  'classe': { 'des1':'14', 'des2': 'Elementi di fissaggio'},  'descrizione': { 'id':'VITE TSPEI M5x20 INOX', 'des': ''},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '111461',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/111461.JPG',  'classe': { 'des1':'11', 'des2': 'Stampati plastica'},  'descrizione': { 'id':'AVVOLGICINGHIA CHIUSURA LATO MOTORE', 'des': 'TENSE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.03,  'peso_medio': 0.03,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '290232',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/NONE.JPG',  'classe': { 'des1':'29', 'des2': 'Imballaggi'},  'descrizione': { 'id':'FASCETTA METALLICA MIN mm 210x4 6', 'des': 'AZIMUT-ZENIT'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '131392',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/131392.JPG',  'classe': { 'des1':'13', 'des2': 'Lavorati Meccanici'},  'descrizione': { 'id':'TUBO TONDO D20X1 5 L367 - INOX', 'des': 'TENSE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.24,  'peso_medio': 0.24,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '111470',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/111470.JPG',  'classe': { 'des1':'11', 'des2': 'Stampati plastica'},  'descrizione': { 'id':'TRASCINATORE MOLLA ESTREMO  85', 'des': 'TENSE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.09,  'peso_medio': 0.09,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '111060',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/111060.JPG',  'classe': { 'des1':'11', 'des2': 'Stampati plastica'},  'descrizione': { 'id':'CALOTTA SCARICATA ZIP D85 LAT  MOT ', 'des': ''},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.14,  'peso_medio': 0.14,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '131393',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/131393.JPG',  'classe': { 'des1':'13', 'des2': 'Lavorati Meccanici'},  'descrizione': { 'id':'TUBO TONDO D50X1 5 L730 - INOX', 'des': 'TENSE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 1.31,  'peso_medio': 1.31,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '146143',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/NONE.JPG',  'classe': { 'des1':'14', 'des2': 'Elementi di fissaggio'},  'descrizione': { 'id':'AUTOFILETTANTE TSP TORX 4 2x16 INOX', 'des': ''},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '131395',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/131395.JPG',  'classe': { 'des1':'13', 'des2': 'Lavorati Meccanici'},  'descrizione': { 'id':'TUBO TONDO D54X1 5 L730 - INOX', 'des': 'TENSE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 1.43,  'peso_medio': 1.43,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '111471',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/111471.JPG',  'classe': { 'des1':'11', 'des2': 'Stampati plastica'},  'descrizione': { 'id':'TRASCINATORE MOTORE MOLLA BASE', 'des': 'TENSE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.08,  'peso_medio': 0.08,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '111464',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/111464.JPG',  'classe': { 'des1':'11', 'des2': 'Stampati plastica'},  'descrizione': { 'id':'GUSCIO SUPPORTO MOLLA LATO INTERNO', 'des': 'TENSE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.03,  'peso_medio': 0.03,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '146270',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/146270.JPG',  'classe': { 'des1':'14', 'des2': 'Elementi di fissaggio'},  'descrizione': { 'id':'DADO QUADRO M5 INOX NERINOX', 'des': 'DIN 557'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '146251',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/NONE.JPG',  'classe': { 'des1':'14', 'des2': 'Elementi di fissaggio'},  'descrizione': { 'id':'VITE AUTOFILETTANTE TC TORX 4 8X13', 'des': 'INOX CLASSE A2'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '140597',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/140597.JPG',  'classe': { 'des1':'14', 'des2': 'Elementi di fissaggio'},  'descrizione': { 'id':'VITE TCEI M 5x40 INOX P F ', 'des': ''},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '111463',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/111463.JPG',  'classe': { 'des1':'11', 'des2': 'Stampati plastica'},  'descrizione': { 'id':'AVVOLGICINGHIA SEMISUPP PRINCIPALE', 'des': 'TENSE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.07,  'peso_medio': 0.07,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '111462',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/111462.JPG',  'classe': { 'des1':'11', 'des2': 'Stampati plastica'},  'descrizione': { 'id':'AVVOLGICINGHIA CORONA ESTERNA', 'des': 'TENSE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.16,  'peso_medio': 0.16,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '146431',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/NONE.JPG',  'classe': { 'des1':'14', 'des2': 'Elementi di fissaggio'},  'descrizione': { 'id':'VITE TSPEI M5x20 INOX', 'des': ''},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '111461',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/111461.JPG',  'classe': { 'des1':'11', 'des2': 'Stampati plastica'},  'descrizione': { 'id':'AVVOLGICINGHIA CHIUSURA LATO MOTORE', 'des': 'TENSE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.03,  'peso_medio': 0.03,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '290232',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/NONE.JPG',  'classe': { 'des1':'29', 'des2': 'Imballaggi'},  'descrizione': { 'id':'FASCETTA METALLICA MIN mm 210x4 6', 'des': 'AZIMUT-ZENIT'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '131392',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/131392.JPG',  'classe': { 'des1':'13', 'des2': 'Lavorati Meccanici'},  'descrizione': { 'id':'TUBO TONDO D20X1 5 L367 - INOX', 'des': 'TENSE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.24,  'peso_medio': 0.24,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '111470',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/111470.JPG',  'classe': { 'des1':'11', 'des2': 'Stampati plastica'},  'descrizione': { 'id':'TRASCINATORE MOLLA ESTREMO  85', 'des': 'TENSE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.09,  'peso_medio': 0.09,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '111060',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/111060.JPG',  'classe': { 'des1':'11', 'des2': 'Stampati plastica'},  'descrizione': { 'id':'CALOTTA SCARICATA ZIP D85 LAT  MOT ', 'des': ''},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.14,  'peso_medio': 0.14,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '131393',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/131393.JPG',  'classe': { 'des1':'13', 'des2': 'Lavorati Meccanici'},  'descrizione': { 'id':'TUBO TONDO D50X1 5 L730 - INOX', 'des': 'TENSE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 1.31,  'peso_medio': 1.31,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '146143',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/NONE.JPG',  'classe': { 'des1':'14', 'des2': 'Elementi di fissaggio'},  'descrizione': { 'id':'AUTOFILETTANTE TSP TORX 4 2x16 INOX', 'des': ''},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '131395',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/131395.JPG',  'classe': { 'des1':'13', 'des2': 'Lavorati Meccanici'},  'descrizione': { 'id':'TUBO TONDO D54X1 5 L730 - INOX', 'des': 'TENSE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 1.43,  'peso_medio': 1.43,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '160159',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/160159.JPG',  'classe': { 'des1':'16', 'des2': 'Molle catene'},  'descrizione': { 'id':'MOLLA DI TENSIONAMENTO RULLO DX', 'des': 'TENSE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.88,  'peso_medio': 0.88,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '146270',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/146270.JPG',  'classe': { 'des1':'14', 'des2': 'Elementi di fissaggio'},  'descrizione': { 'id':'DADO QUADRO M5 INOX NERINOX', 'des': 'DIN 557'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '111060',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/111060.JPG',  'classe': { 'des1':'11', 'des2': 'Stampati plastica'},  'descrizione': { 'id':'CALOTTA SCARICATA ZIP D85 LAT  MOT ', 'des': ''},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.14,  'peso_medio': 0.14,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '131394',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/131394.JPG',  'classe': { 'des1':'13', 'des2': 'Lavorati Meccanici'},  'descrizione': { 'id':'TUBO TONDO D54X1 5 L120 - INOX', 'des': 'TENSE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.20,  'peso_medio': 0.20,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '111471',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/111471.JPG',  'classe': { 'des1':'11', 'des2': 'Stampati plastica'},  'descrizione': { 'id':'TRASCINATORE MOTORE MOLLA BASE', 'des': 'TENSE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.08,  'peso_medio': 0.08,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '131392',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/131392.JPG',  'classe': { 'des1':'13', 'des2': 'Lavorati Meccanici'},  'descrizione': { 'id':'TUBO TONDO D20X1 5 L367 - INOX', 'des': 'TENSE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.24,  'peso_medio': 0.24,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '111464',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/111464.JPG',  'classe': { 'des1':'11', 'des2': 'Stampati plastica'},  'descrizione': { 'id':'GUSCIO SUPPORTO MOLLA LATO INTERNO', 'des': 'TENSE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.03,  'peso_medio': 0.03,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '146251',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/NONE.JPG',  'classe': { 'des1':'14', 'des2': 'Elementi di fissaggio'},  'descrizione': { 'id':'VITE AUTOFILETTANTE TC TORX 4 8X13', 'des': 'INOX CLASSE A2'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '111470',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/111470.JPG',  'classe': { 'des1':'11', 'des2': 'Stampati plastica'},  'descrizione': { 'id':'TRASCINATORE MOLLA ESTREMO  85', 'des': 'TENSE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.09,  'peso_medio': 0.09,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '140597',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/140597.JPG',  'classe': { 'des1':'14', 'des2': 'Elementi di fissaggio'},  'descrizione': { 'id':'VITE TCEI M 5x40 INOX P F ', 'des': ''},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '160160',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/160160.JPG',  'classe': { 'des1':'16', 'des2': 'Molle catene'},  'descrizione': { 'id':'MOLLA DI TENSIONAMENTO RULLO SX', 'des': 'TENSE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.88,  'peso_medio': 0.88,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '111462',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/111462.JPG',  'classe': { 'des1':'11', 'des2': 'Stampati plastica'},  'descrizione': { 'id':'AVVOLGICINGHIA CORONA ESTERNA', 'des': 'TENSE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.16,  'peso_medio': 0.16,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '111463',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/111463.JPG',  'classe': { 'des1':'11', 'des2': 'Stampati plastica'},  'descrizione': { 'id':'AVVOLGICINGHIA SEMISUPP PRINCIPALE', 'des': 'TENSE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.07,  'peso_medio': 0.07,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '146431',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/NONE.JPG',  'classe': { 'des1':'14', 'des2': 'Elementi di fissaggio'},  'descrizione': { 'id':'VITE TSPEI M5x20 INOX', 'des': ''},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '111460',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/111460.JPG',  'classe': { 'des1':'11', 'des2': 'Stampati plastica'},  'descrizione': { 'id':'AVVOLGICINGHIA CHIUSURA LATO FOLLE', 'des': 'TENSE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.06,  'peso_medio': 0.06,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '290232',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/NONE.JPG',  'classe': { 'des1':'29', 'des2': 'Imballaggi'},  'descrizione': { 'id':'FASCETTA METALLICA MIN mm 210x4 6', 'des': 'AZIMUT-ZENIT'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '111343',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/111343.JPG',  'classe': { 'des1':'11', 'des2': 'Stampati plastica'},  'descrizione': { 'id':'BOCCOLA FLANGIATA Di12 De14', 'des': 'VOLANT SPAZIO 60-75'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '146270',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/146270.JPG',  'classe': { 'des1':'14', 'des2': 'Elementi di fissaggio'},  'descrizione': { 'id':'DADO QUADRO M5 INOX NERINOX', 'des': 'DIN 557'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '111060',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/111060.JPG',  'classe': { 'des1':'11', 'des2': 'Stampati plastica'},  'descrizione': { 'id':'CALOTTA SCARICATA ZIP D85 LAT  MOT ', 'des': ''},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.14,  'peso_medio': 0.14,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '131394',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/131394.JPG',  'classe': { 'des1':'13', 'des2': 'Lavorati Meccanici'},  'descrizione': { 'id':'TUBO TONDO D54X1 5 L120 - INOX', 'des': 'TENSE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.20,  'peso_medio': 0.20,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '111471',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/111471.JPG',  'classe': { 'des1':'11', 'des2': 'Stampati plastica'},  'descrizione': { 'id':'TRASCINATORE MOTORE MOLLA BASE', 'des': 'TENSE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.08,  'peso_medio': 0.08,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '131392',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/131392.JPG',  'classe': { 'des1':'13', 'des2': 'Lavorati Meccanici'},  'descrizione': { 'id':'TUBO TONDO D20X1 5 L367 - INOX', 'des': 'TENSE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.24,  'peso_medio': 0.24,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '111464',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/111464.JPG',  'classe': { 'des1':'11', 'des2': 'Stampati plastica'},  'descrizione': { 'id':'GUSCIO SUPPORTO MOLLA LATO INTERNO', 'des': 'TENSE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.03,  'peso_medio': 0.03,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '146251',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/NONE.JPG',  'classe': { 'des1':'14', 'des2': 'Elementi di fissaggio'},  'descrizione': { 'id':'VITE AUTOFILETTANTE TC TORX 4 8X13', 'des': 'INOX CLASSE A2'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '111470',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/111470.JPG',  'classe': { 'des1':'11', 'des2': 'Stampati plastica'},  'descrizione': { 'id':'TRASCINATORE MOLLA ESTREMO  85', 'des': 'TENSE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.09,  'peso_medio': 0.09,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '140597',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/140597.JPG',  'classe': { 'des1':'14', 'des2': 'Elementi di fissaggio'},  'descrizione': { 'id':'VITE TCEI M 5x40 INOX P F ', 'des': ''},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '111462',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/111462.JPG',  'classe': { 'des1':'11', 'des2': 'Stampati plastica'},  'descrizione': { 'id':'AVVOLGICINGHIA CORONA ESTERNA', 'des': 'TENSE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.16,  'peso_medio': 0.16,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '111463',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/111463.JPG',  'classe': { 'des1':'11', 'des2': 'Stampati plastica'},  'descrizione': { 'id':'AVVOLGICINGHIA SEMISUPP PRINCIPALE', 'des': 'TENSE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.07,  'peso_medio': 0.07,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '146431',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/NONE.JPG',  'classe': { 'des1':'14', 'des2': 'Elementi di fissaggio'},  'descrizione': { 'id':'VITE TSPEI M5x20 INOX', 'des': ''},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '111460',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/111460.JPG',  'classe': { 'des1':'11', 'des2': 'Stampati plastica'},  'descrizione': { 'id':'AVVOLGICINGHIA CHIUSURA LATO FOLLE', 'des': 'TENSE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.06,  'peso_medio': 0.06,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '160159',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/160159.JPG',  'classe': { 'des1':'16', 'des2': 'Molle catene'},  'descrizione': { 'id':'MOLLA DI TENSIONAMENTO RULLO DX', 'des': 'TENSE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.88,  'peso_medio': 0.88,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '290232',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/NONE.JPG',  'classe': { 'des1':'29', 'des2': 'Imballaggi'},  'descrizione': { 'id':'FASCETTA METALLICA MIN mm 210x4 6', 'des': 'AZIMUT-ZENIT'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '111343',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/111343.JPG',  'classe': { 'des1':'11', 'des2': 'Stampati plastica'},  'descrizione': { 'id':'BOCCOLA FLANGIATA Di12 De14', 'des': 'VOLANT SPAZIO 60-75'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '146180',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/146180.JPG',  'classe': { 'des1':'14', 'des2': 'Elementi di fissaggio'},  'descrizione': { 'id':'AUTOFILETTANTE TSP TORX 6 3x50 INOX', 'des': ''},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.01,  'peso_medio': 0.01,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '140541',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/140541.JPG',  'classe': { 'des1':'14', 'des2': 'Elementi di fissaggio'},  'descrizione': { 'id':'VITE TCEI M 6x20 INOX', 'des': ''},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '131375',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/131375.JPG',  'classe': { 'des1':'13', 'des2': 'Lavorati Meccanici'},  'descrizione': { 'id':'BASAMENTO RINVIO ANGOLARE GAMBA TEL', 'des': 'TENSE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.11,  'peso_medio': 0.11,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '260055',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/NONE.JPG',  'classe': { 'des1':'26', 'des2': 'Arganelli'},  'descrizione': { 'id':'ARGANELLO COPPIA CONICA 3 1 7006', 'des': 'TENSE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '131373',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/131373.JPG',  'classe': { 'des1':'13', 'des2': 'Lavorati Meccanici'},  'descrizione': { 'id':'VITE TRAPEZOIDALE TR20X20', 'des': 'TENSE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 1.43,  'peso_medio': 1.43,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '146210',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/NONE.JPG',  'classe': { 'des1':'14', 'des2': 'Elementi di fissaggio'},  'descrizione': { 'id':'ANELLO ELASTICO ALBERO D14 INOX', 'des': ''},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '131377',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/131377.JPG',  'classe': { 'des1':'13', 'des2': 'Lavorati Meccanici'},  'descrizione': { 'id':'DISCO FINECORSA GAMBA TELESCOPICA', 'des': 'TENSE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.02,  'peso_medio': 0.02,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '140749',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/NONE.JPG',  'classe': { 'des1':'14', 'des2': 'Elementi di fissaggio'},  'descrizione': { 'id':'GRANO EI M 6x10 PP INOX', 'des': ''},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '131376',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/131376.JPG',  'classe': { 'des1':'13', 'des2': 'Lavorati Meccanici'},  'descrizione': { 'id':'CHIOCCIOLA SOLLEVAMENTO GAMBA TEL', 'des': 'TENSE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.18,  'peso_medio': 0.18,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '140511',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/NONE.JPG',  'classe': { 'des1':'14', 'des2': 'Elementi di fissaggio'},  'descrizione': { 'id':'VITE TE M10x20 INOX', 'des': 'X TDS SU BIOCLIMATICHE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '146419',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/146419.JPG',  'classe': { 'des1':'14', 'des2': 'Elementi di fissaggio'},  'descrizione': { 'id':'CHIAVETTA DI TRASMISSIONE 4X4X25', 'des': 'TENSE'},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
                   {  'code': '140507',  'mltm': { 'c':'0', 't': '0'},  'tipo_op': '1',  'img': '../disegni_smeup/140507.png',  'classe': { 'des1':'14', 'des2': 'Elementi di fissaggio'},  'descrizione': { 'id':'ROSETTA D 10 5 30x2 INOX', 'des': ''},  'misura': 0.00,  'prezzo': -1.00,  'costo': 0.00,  'lastcost': -1.00,  'peso': 0.00,  'peso_medio': 0.00,  'config': '',  'storico': '[]',  'unita': '',  'sorgente': '' }, 
  ]; 
  return this.cloneMyObj(FISHER_COD);
  };
  
  
  
  
  
  
     MoltiplicaValues(infoELx, values0)
    {
      let infoEL  = this.cloneMyObj( infoELx); // faccio una copia
      let values  = this.cloneMyObj( values0);
  
      let pezzi    = 0;
  
      let calcoli  = this.estraiPezziTaglioAltro(infoEL.funzione.codice);
  
      pezzi    = (parseFloat(calcoli.pezzi)==0)?1:parseFloat(calcoli.pezzi);
  
  
      Object.keys(values).forEach(e => values[e] *= pezzi);
  
      let values1  = this.cloneMyObj( values);
  
      return values1;
    }
  
  
  
     CreaListaTotale()
    {
        this.LISTA_BOM_TOTALE = [];
  
        let livello_massimo = 0;
        // passata in avanti per costruire tutta la BOM
        for(let i=0;i<this.FISHER_EL.length; i++)
        {
          let copy = this.cloneMyObj( this.FISHER_EL[i]);      // contiene una copia dell'elemento di distinta
          if(parseFloat(this.FISHER_EL[i].livello)>livello_massimo) livello_massimo = parseFloat(this.FISHER_EL[i].livello);
          this.ScansionSuperficiale(copy);
        }
  
        //console.log("profonditÃ  alberatura: "+livello_massimo);
  
        // passata all'indietro per aggiornare gruppi e kit
        if(livello_massimo>0) // ha senso solo se ci sono gruppi o kit
        {
          let num_passaggi = parseFloat(livello_massimo-1);  // -1 perchÃ¨ l'ultimo livello non ha figli
          //console.log('Livello massimo: '+livello_massimo);
  
          for(let i=0;i<=num_passaggi;i++)
          {
            let running_level = parseFloat(num_passaggi-i);
            //console.log('Livello: '+running_level);
            let filtred_liv   = this.LISTA_BOM_TOTALE.filter(el=> {return (parseFloat(el.data.livello)==running_level);});
            //console.log('filtred_liv: '+filtred_liv.length);
  
            if(filtred_liv.length>0)
            {
              for(let w=0;w<filtred_liv.length;w++)
              {
                let esaminato = filtred_liv[w];
                //console.log(esaminato.data.livello+'  '+esaminato.data.rifcode+' = '+running_level+'->'+esaminato.data.key);
                //console.log(JSON.stringify(esaminato.data.values));
  
  
  
                        // cerco tutti i figli di questo codice
                        let son        = this.LISTA_BOM_TOTALE.filter(el=> {
                          return (el.data.parent_key==esaminato.data.key);
                        });
                        //console.log('..questo codice ha: '+son.length+' figli.')
  
                        let values =  this.cloneMyObj( esaminato.data.values.calcolato);
                        //console.log(esaminato.data);
  
  
  
                        for(let j=0;j<son.length;j++)
                        {
                          if(son[j].data.tipo_kit=="6"||son[j].data.tipo_kit=="4")
                          //if(son[j].data.tipo_kit=="6")
                          {
                            values.costo                    += 1*son[j].data.values.calcolato.costo;
                            values.costo_old                += 1*son[j].data.values.calcolato.costo_old;
                            values.prezzo                   += 1*son[j].data.values.calcolato.prezzo;
                            values.peso                     += 1*son[j].data.values.calcolato.peso;
                            values.peso_medio               += 1*son[j].data.values.calcolato.peso_medio;
                            values.peso_solo_alluminio      += 1*son[j].data.values.calcolato.peso_solo_alluminio;
                            values.peso_senza_alluminio     += 1*son[j].data.values.calcolato.peso_senza_alluminio;
                            values.costo_senza_allumimio    += 1*son[j].data.values.calcolato.costo_senza_allumimio;
                          }
                          else
                          {
                            values.costo                    += 1*son[j].data.values.generale.costo;
                            values.costo_old                += 1*son[j].data.values.generale.costo_old;
                            values.prezzo                   += 1*son[j].data.values.generale.prezzo;
                            values.peso                     += 1*son[j].data.values.generale.peso;
                            values.peso_medio               += 1*son[j].data.values.generale.peso_medio;
                            values.peso_solo_alluminio      += 1*son[j].data.values.generale.peso_solo_alluminio;
                            values.peso_senza_alluminio     += 1*son[j].data.values.generale.peso_senza_alluminio;
                            values.costo_senza_allumimio    += 1*son[j].data.values.generale.costo_senza_allumimio;
                          }
  
                        }
  
  
  
                        // moltiplicazione per numero di pezzi usati
                        let values0 = this.MoltiplicaValues(esaminato.data, values);
  
                        for(let j=0;j<this.LISTA_BOM_TOTALE.length;j++)
                        {
                          if(this.LISTA_BOM_TOTALE[j].data.key==esaminato.data.key)
                          {
                            this.LISTA_BOM_TOTALE[j].data.values.calcolato =   this.cloneMyObj( values0);
                            this.LISTA_BOM_TOTALE[j].data.values.calcolato.pezzi =   this.LISTA_BOM_TOTALE[j].data.values.generale.pezzi;
                            //console.log(JSON.stringify(esaminato.data.values));
                          }
                        }
  
  
  
              }
            }
          }
        }
  
  
  
  
        // ri-passata in avanti per aggiornare il numero di pezzi totali e il costo totale
        for(let i=0;i<this.LISTA_BOM_TOTALE.length; i++)
        {
          if(this.LISTA_BOM_TOTALE[i].data.livello=='0')
          {
            this.LISTA_BOM_TOTALE[i].data.pezzi_totali = this.LISTA_BOM_TOTALE[i].data.values.generale.pezzi;
            let costo = (this.LISTA_BOM_TOTALE[i].data.values.generale.costo>=this.LISTA_BOM_TOTALE[i].data.values.calcolato.costo)?this.LISTA_BOM_TOTALE[i].data.values.generale.costo:this.LISTA_BOM_TOTALE[i].data.values.calcolato.costo;
            this.LISTA_BOM_TOTALE[i].data.costo_totale = costo; //*this.LISTA_BOM_TOTALE[i].data.pezzi_totali;
          }
        }
  
        for(let i=0;i<this.LISTA_BOM_TOTALE.length; i++)
        {
          if(this.LISTA_BOM_TOTALE[i].data.livello=='1')
          {
            let parent= this.LISTA_BOM_TOTALE.filter(el=> {return el.data.key==(this.LISTA_BOM_TOTALE[i].data.parent_key);});
            if(parent.length>0)
               this.LISTA_BOM_TOTALE[i].data.pezzi_totali = parseFloat(this.LISTA_BOM_TOTALE[i].data.values.generale.pezzi*parent[0].data.pezzi_totali);
  
  
  
            let costo = (this.LISTA_BOM_TOTALE[i].data.values.generale.costo>=this.LISTA_BOM_TOTALE[i].data.values.calcolato.costo)?this.LISTA_BOM_TOTALE[i].data.values.generale.costo:this.LISTA_BOM_TOTALE[i].data.values.calcolato.costo;
            this.LISTA_BOM_TOTALE[i].data.costo_totale = costo;//*this.LISTA_BOM_TOTALE[i].data.pezzi_totali;
  
          }
        }
  
        for(let i=0;i<this.LISTA_BOM_TOTALE.length; i++)
        {
          if(this.LISTA_BOM_TOTALE[i].data.livello=='2')
          {
            let parent= this.LISTA_BOM_TOTALE.filter(el=> {return el.data.key==(this.LISTA_BOM_TOTALE[i].data.parent_key);});
            if(parent.length>0)
            this.LISTA_BOM_TOTALE[i].data.pezzi_totali = parseFloat(this.LISTA_BOM_TOTALE[i].data.values.generale.pezzi*parent[0].data.pezzi_totali);
  
            let costo = (this.LISTA_BOM_TOTALE[i].data.values.generale.costo>=this.LISTA_BOM_TOTALE[i].data.values.calcolato.costo)?this.LISTA_BOM_TOTALE[i].data.values.generale.costo:this.LISTA_BOM_TOTALE[i].data.values.calcolato.costo;
            this.LISTA_BOM_TOTALE[i].data.costo_totale = costo;//*this.LISTA_BOM_TOTALE[i].data.pezzi_totali;
          }
        }
  
        for(let i=0;i<this.LISTA_BOM_TOTALE.length; i++)
        {
          if(this.LISTA_BOM_TOTALE[i].data.livello=='3')
          {
            let parent= this.LISTA_BOM_TOTALE.filter(el=> {return el.data.key==(this.LISTA_BOM_TOTALE[i].data.parent_key);});
            if(parent.length>0)
            this.LISTA_BOM_TOTALE[i].data.pezzi_totali = parseFloat(this.LISTA_BOM_TOTALE[i].data.values.generale.pezzi*parent[0].data.pezzi_totali);
  
            let costo = (this.LISTA_BOM_TOTALE[i].data.values.generale.costo>=this.LISTA_BOM_TOTALE[i].data.values.calcolato.costo)?this.LISTA_BOM_TOTALE[i].data.values.generale.costo:this.LISTA_BOM_TOTALE[i].data.values.calcolato.costo;
            this.LISTA_BOM_TOTALE[i].data.costo_totale = costo;//*this.LISTA_BOM_TOTALE[i].data.pezzi_totali;
          }
        }
  
  
        this.LISTA_BOM_TOTALE = this.LISTA_BOM_TOTALE.filter((el)=>{return el.data.pezzi_totali>0;});
    }
  
     InizializzaVARValuesSingle()
    {
      let values  = {};
  
      values.costo                  = 0;
      values.costo_old              = 0;
      values.costo_unit             = 0;
  
      values.prezzo                 = 0;
      values.peso                   = 0;
      values.peso_medio             = 0;
  
      values.peso_solo_alluminio    = 0;
      values.peso_senza_alluminio   = 0;
      values.costo_senza_allumimio  = 0;
  
      values.pezzi                  = 0;
      values.taglio                 = 0;
  
      return values;
    }
  
     InizializzaVARValues()
    {
      let values  = {generale: this.InizializzaVARValuesSingle(), unitario: this.InizializzaVARValuesSingle(), calcolato:this.InizializzaVARValuesSingle()};
      return values;
    }
  
  
  
     InserisciValoriELEMENTO(infoELx, infoCODx, values0)
    {
      let infoEL  = this.cloneMyObj( infoELx); // faccio una copia
      let infoCOD = this.cloneMyObj( infoCODx); // faccio una copia
      let values  = this.cloneMyObj( values0); // faccio una copia
  
      let pezzi       = 0;
      let taglio      = 1;
      let vettore     = [];
      let nota        = '';
      let extra_info  = {};
  
      let calcoli  = this.estraiPezziTaglioAltro(infoEL.funzione.codice);
  
      pezzi       = parseFloat(calcoli.pezzi);
      taglio      = parseFloat(calcoli.taglio);
  
  
      vettore     = calcoli.vettore;
      nota        = calcoli.nota;
      extra_info  = calcoli.extra_info;
  
      if(parseFloat(infoCOD.mltm.t)>0) // Ã¨ un pezzo a misura
      {
        if(infoCOD.misura!==taglio)
        {
         pezzi  = 0;
         taglio = 0;
        }
        else
        {
         taglio = 100;
         pezzi  = parseFloat(calcoli.pezzi);
        }
      }
  
      values.pezzi = pezzi;
      values.taglio = taglio;
  
      values.generale.pezzi   = pezzi;
      values.generale.taglio  = taglio;
  
      values.unitario.pezzi   = 1;
      values.unitario.taglio  = 100;
  
      values.extra_info       = extra_info;
  
      // generale -> calcolato sulla distinta corrente
      // unitario -> calcolato sul singolo pezzo e, nel caso di profili, 1m di lunghezza
  
  
      if(infoCOD.classe.des1=='01')
      {
        // profili in alluminio, metto sempre i costi a zero perchÃ¨ sono calcolati a parte
        /*
          non possono essere kit
          generale -> calcolato sulla distinta corrente
          unitario -> 1pezzo, 1m
        */
        values.generale.costo                    += 0; //values.costo + parseFloat(infoCOD.peso_medio);
        values.generale.costo_old                += 0;
        values.generale.prezzo                   += 0; //parseFloat(infoCOD.prezzo);
        values.generale.peso                     += parseFloat(infoCOD.peso*pezzi*taglio/100);
        values.generale.peso_medio               += parseFloat(infoCOD.peso_medio*pezzi*taglio/100);
        values.generale.peso_solo_alluminio      += parseFloat(infoCOD.peso*pezzi*taglio/100);
        values.generale.peso_senza_alluminio     += 0;
        values.generale.costo_senza_allumimio    += 0;
  
        values.unitario.costo                    += 0; //values.costo + parseFloat(infoCOD.peso_medio);
        values.unitario.costo_old                += 0;
        values.unitario.prezzo                   += 0; //parseFloat(infoCOD.prezzo);
        values.unitario.peso                     += parseFloat(infoCOD.peso);
        values.unitario.peso_medio               += parseFloat(infoCOD.peso_medio);
        values.unitario.peso_solo_alluminio      += parseFloat(infoCOD.peso);
        values.unitario.peso_senza_alluminio     += 0;
        values.unitario.costo_senza_allumimio    += 0;
      }
      else
      {
        if(infoCOD.classe.des1=='02' || infoCOD.classe.des1=='03' || infoCOD.classe.des1=='04' || infoCOD.classe.des1=='17' || infoCOD.classe.des1=='22')
        {
          // profili non in alluminio tagliati a misura
          /*
            non possono essere kit
            generale -> calcolato sulla distinta corrente
            unitario -> 1pezzo, 1m
          */
          if(infoCOD.storico && infoCOD.storico.length>0) // se esiste uno storico prendo i due valori, quello piÃ¹ recente e quello meno recente
          {
            if(infoCOD.storico[0]>0)
            {
              values.generale.costo                    += parseFloat(pezzi*infoCOD.storico[infoCOD.storico.length-1].v*taglio/100);
              values.generale.costo_old                += parseFloat(pezzi*infoCOD.storico[0].v*taglio/100);
              values.generale.prezzo                   += parseFloat(pezzi*infoCOD.prezzo*taglio/100);
              values.generale.peso                     += parseFloat(pezzi*infoCOD.peso*taglio/100);
              values.generale.peso_medio               += parseFloat(pezzi*infoCOD.peso_medio*taglio/100);
              values.generale.peso_solo_alluminio      += 0;
              values.generale.peso_senza_alluminio     += parseFloat(infoCOD.peso*pezzi*taglio/100);;
              values.generale.costo_senza_allumimio    += parseFloat(pezzi*infoCOD.storico[infoCOD.storico.length-1].v*taglio/100);
  
  
              values.unitario.costo                    += parseFloat(infoCOD.storico[infoCOD.storico.length-1].v);
              values.unitario.costo_old                += parseFloat(infoCOD.storico[0].v);
              values.unitario.prezzo                   += parseFloat(infoCOD.prezzo);
              values.unitario.peso                     += parseFloat(infoCOD.peso);
              values.unitario.peso_medio               += parseFloat(infoCOD.peso_medio);
              values.unitario.peso_solo_alluminio      += 0;
              values.unitario.peso_senza_alluminio     += parseFloat(infoCOD.peso);
              values.unitario.costo_senza_allumimio    += parseFloat(infoCOD.storico[infoCOD.storico.length-1].v);
            }
            else
            {
              values.generale.costo                    += parseFloat(pezzi*infoCOD.costo*taglio/100);
              values.generale.costo_old                += parseFloat(pezzi*infoCOD.costo*taglio/100);
              values.generale.prezzo                   += parseFloat(pezzi*infoCOD.prezzo*taglio/100);
              values.generale.peso                     += parseFloat(pezzi*infoCOD.peso*taglio/100);
              values.generale.peso_medio               += parseFloat(pezzi*infoCOD.peso_medio*taglio/100);
              values.generale.peso_solo_alluminio      += 0;
              values.generale.peso_senza_alluminio     += parseFloat(infoCOD.peso*pezzi*taglio/100);;
              values.generale.costo_senza_allumimio    += parseFloat(pezzi*infoCOD.costo*taglio/100);
  
              values.unitario.costo                    += parseFloat(infoCOD.costo);
              values.unitario.costo_old                += parseFloat(infoCOD.costo);
              values.unitario.prezzo                   += parseFloat(infoCOD.prezzo);
              values.unitario.peso                     += parseFloat(infoCOD.peso);
              values.unitario.peso_medio               += parseFloat(infoCOD.peso_medio);
              values.unitario.peso_solo_alluminio      += 0;
              values.unitario.peso_senza_alluminio     += parseFloat(infoCOD.peso);;
              values.unitario.costo_senza_allumimio    += parseFloat(infoCOD.costo);
            }
          }
          else   // se non esiste uno storico prendo il valore salvato in costo
          {
            values.generale.costo                    += parseFloat(pezzi*infoCOD.costo*taglio/100);
            values.generale.costo_old                += parseFloat(pezzi*infoCOD.costo*taglio/100);
            values.generale.prezzo                   += parseFloat(pezzi*infoCOD.prezzo*taglio/100);
            values.generale.peso                     += parseFloat(pezzi*infoCOD.peso*taglio/100);
            values.generale.peso_medio               += parseFloat(pezzi*infoCOD.peso_medio*taglio/100);
            values.generale.peso_solo_alluminio      += 0;
            values.generale.peso_senza_alluminio     += parseFloat(infoCOD.peso*pezzi*taglio/100);;
            values.generale.costo_senza_allumimio    += parseFloat(pezzi*infoCOD.costo*taglio/100);
  
            values.unitario.costo                    += parseFloat(infoCOD.costo);
            values.unitario.costo_old                += parseFloat(infoCOD.costo);
            values.unitario.prezzo                   += parseFloat(infoCOD.prezzo);
            values.unitario.peso                     += parseFloat(infoCOD.peso);
            values.unitario.peso_medio               += parseFloat(infoCOD.peso_medio);
            values.unitario.peso_solo_alluminio      += 0;
            values.unitario.peso_senza_alluminio     += parseFloat(infoCOD.peso);;
            values.unitario.costo_senza_allumimio    += parseFloat(infoCOD.costo);
          }
        }
        else
        {
          // elementi non tagliati
          /*
            possono essere kit
            generale -> calcolato sulla distinta corrente
            unitario -> 1pezzo
          */
  
          if(infoEL.tipo_kit=='') // Ã¨ un elemento semplice
          {
            if(typeof infoCOD.storico=='string')
            {
              infoCOD.storico = JSON.parse(infoCOD.storico);
            }
  
            if(infoCOD.storico!=null && infoCOD.storico.length>0)
            {
              if(infoCOD.storico[0])
              {
                values.generale.costo                    += parseFloat(pezzi*infoCOD.storico[infoCOD.storico.length-1].v);
                values.generale.costo_old                += parseFloat(pezzi*infoCOD.storico[0].v);
                values.generale.prezzo                   += parseFloat(pezzi*infoCOD.prezzo);
                values.generale.peso                     += parseFloat(pezzi*infoCOD.peso);
                values.generale.peso_medio               += parseFloat(pezzi*infoCOD.peso_medio);
                values.generale.peso_solo_alluminio      += 0;
                values.generale.peso_senza_alluminio     += parseFloat(infoCOD.peso*pezzi);
                values.generale.costo_senza_allumimio    += parseFloat(pezzi*infoCOD.storico[infoCOD.storico.length-1].v);
  
                values.unitario.costo                    += parseFloat(infoCOD.storico[infoCOD.storico.length-1].v);
                values.unitario.costo_old                += parseFloat(infoCOD.storico[0].v);
                values.unitario.prezzo                   += parseFloat(infoCOD.prezzo);
                values.unitario.peso                     += parseFloat(infoCOD.peso);
                values.unitario.peso_medio               += parseFloat(infoCOD.peso_medio);
                values.unitario.peso_solo_alluminio      += 0;
                values.unitario.peso_senza_alluminio     += parseFloat(infoCOD.peso);;
                values.unitario.costo_senza_allumimio    += parseFloat(infoCOD.storico[infoCOD.storico.length-1].v);
              }
              else
              {
                values.generale.costo                    += parseFloat(pezzi*infoCOD.costo);
                values.generale.costo_old                += parseFloat(pezzi*infoCOD.costo);
                values.generale.prezzo                   += parseFloat(pezzi*infoCOD.prezzo);
                values.generale.peso                     += parseFloat(pezzi*infoCOD.peso);
                values.generale.peso_medio               += parseFloat(pezzi*infoCOD.peso_medio);
                values.generale.peso_solo_alluminio      += 0;
                values.generale.peso_senza_alluminio     += parseFloat(infoCOD.peso*pezzi);;
                values.generale.costo_senza_allumimio    += parseFloat(pezzi*infoCOD.costo);
  
                values.unitario.costo                    += parseFloat(infoCOD.costo);
                values.unitario.costo_old                += parseFloat(infoCOD.costo);
                values.unitario.prezzo                   += parseFloat(infoCOD.prezzo);
                values.unitario.peso                     += parseFloat(infoCOD.peso);
                values.unitario.peso_medio               += parseFloat(infoCOD.peso_medio);
                values.unitario.peso_solo_alluminio      += 0;
                values.unitario.peso_senza_alluminio     += parseFloat(infoCOD.peso);;
                values.unitario.costo_senza_allumimio    += parseFloat(infoCOD.costo);
              }
            }
            else
            {
              values.generale.costo                    += parseFloat(pezzi*infoCOD.costo);
              values.generale.costo_old                += parseFloat(pezzi*infoCOD.costo);
              values.generale.prezzo                   += parseFloat(pezzi*infoCOD.prezzo);
              values.generale.peso                     += parseFloat(pezzi*infoCOD.peso);
              values.generale.peso_medio               += parseFloat(pezzi*infoCOD.peso_medio);
              values.generale.peso_solo_alluminio      += 0;
              values.generale.peso_senza_alluminio     += parseFloat(infoCOD.peso*pezzi);;
              values.generale.costo_senza_allumimio    += parseFloat(pezzi*infoCOD.costo);
  
              values.unitario.costo                    += parseFloat(infoCOD.costo);
              values.unitario.costo_old                += parseFloat(infoCOD.costo);
              values.unitario.prezzo                   += parseFloat(infoCOD.prezzo);
              values.unitario.peso                     += parseFloat(infoCOD.peso);
              values.unitario.peso_medio               += parseFloat(infoCOD.peso_medio);
              values.unitario.peso_solo_alluminio      += 0;
              values.unitario.peso_senza_alluminio     += parseFloat(infoCOD.peso);;
              values.unitario.costo_senza_allumimio    += parseFloat(infoCOD.costo);
            }
          }
          else  // Ã¨ un kit o gruppo
          {
            if(infoCOD.storico!=null && infoCOD.storico.length>0)
            {
              if(infoCOD.storico[0]>0)
              {
                values.generale.costo                    += parseFloat(pezzi*infoCOD.storico[infoCOD.storico.length-1].v);
                values.generale.costo_old                += parseFloat(pezzi*infoCOD.storico[0].v);
                values.generale.prezzo                   += parseFloat(pezzi*infoCOD.prezzo);
                values.generale.peso                     += parseFloat(pezzi*infoCOD.peso);
                values.generale.peso_medio               += parseFloat(pezzi*infoCOD.peso_medio);
                values.generale.peso_solo_alluminio      += 0;
                values.generale.peso_senza_alluminio     += parseFloat(infoCOD.peso*pezzi);
                values.generale.costo_senza_allumimio    += parseFloat(pezzi*infoCOD.storico[infoCOD.storico.length-1].v);
  
                values.unitario.costo                    += parseFloat(infoCOD.storico[infoCOD.storico.length-1].v);
                values.unitario.costo_old                += parseFloat(infoCOD.storico[0].v);
                values.unitario.prezzo                   += parseFloat(infoCOD.prezzo);
                values.unitario.peso                     += parseFloat(infoCOD.peso);
                values.unitario.peso_medio               += parseFloat(infoCOD.peso_medio);
                values.unitario.peso_solo_alluminio      += 0;
                values.unitario.peso_senza_alluminio     += parseFloat(infoCOD.peso);;
                values.unitario.costo_senza_allumimio    += parseFloat(infoCOD.storico[infoCOD.storico.length-1].v);
              }
              else //
              {
                values.generale.costo                    += parseFloat(pezzi*infoCOD.costo);
                values.generale.costo_old                += parseFloat(pezzi*infoCOD.costo);
                values.generale.prezzo                   += parseFloat(pezzi*infoCOD.prezzo);
                values.generale.peso                     += parseFloat(pezzi*infoCOD.peso);
                values.generale.peso_medio               += parseFloat(pezzi*infoCOD.peso_medio);
                values.generale.peso_solo_alluminio      += 0;
                values.generale.peso_senza_alluminio     += parseFloat(infoCOD.peso*pezzi);;
                values.generale.costo_senza_allumimio    += parseFloat(pezzi*infoCOD.costo);
  
                values.unitario.costo                    += parseFloat(infoCOD.costo);
                values.unitario.costo_old                += parseFloat(infoCOD.costo);
                values.unitario.prezzo                   += parseFloat(infoCOD.prezzo);
                values.unitario.peso                     += parseFloat(infoCOD.peso);
                values.unitario.peso_medio               += parseFloat(infoCOD.peso_medio);
                values.unitario.peso_solo_alluminio      += 0;
                values.unitario.peso_senza_alluminio     += parseFloat(infoCOD.peso);;
                values.unitario.costo_senza_allumimio    += parseFloat(infoCOD.costo);
              }
            }
            else //
            {
              values.generale.costo                    += parseFloat(pezzi*infoCOD.costo);
              values.generale.costo_old                += parseFloat(pezzi*infoCOD.costo);
              values.generale.prezzo                   += parseFloat(pezzi*infoCOD.prezzo);
              values.generale.peso                     += parseFloat(pezzi*infoCOD.peso);
              values.generale.peso_medio               += parseFloat(pezzi*infoCOD.peso_medio);
              values.generale.peso_solo_alluminio      += 0;
              values.generale.peso_senza_alluminio     += parseFloat(infoCOD.peso*pezzi);;
              values.generale.costo_senza_allumimio    += parseFloat(pezzi*infoCOD.costo);
  
              values.unitario.costo                    += parseFloat(infoCOD.costo);
              values.unitario.costo_old                += parseFloat(infoCOD.costo);
              values.unitario.prezzo                   += parseFloat(infoCOD.prezzo);
              values.unitario.peso                     += parseFloat(infoCOD.peso);
              values.unitario.peso_medio               += parseFloat(infoCOD.peso_medio);
              values.unitario.peso_solo_alluminio      += 0;
              values.unitario.peso_senza_alluminio     += parseFloat(infoCOD.peso);;
              values.unitario.costo_senza_allumimio    += parseFloat(infoCOD.costo);
            }
  
  
          }
      }
    }
      values.calcolato =  this.InizializzaVARValuesSingle();
  
      let values1  = this.cloneMyObj(values);
  
      return values1;
    }
  
  
     formattaPosizione(posizione)
    {
      return String(posizione);
    }
  
     ScansionSuperficiale(obj)
    {
  
      let refEL = this.cloneMyObj( obj);      // contiene una copia dell'elemento di distinta
  
      let calcolatrice = this.estraiPezziTaglioAltro(refEL.funzione.codice, refEL.rifcode);
  
      let newObj = {};
      newObj.index                = 1;
      newObj.data                 = this.cloneMyObj( refEL);             // contiene copia dell'elemento della distinta
  
      let infoCOD                 = {};                                   // dovrÃ  contenere copia del codice puntato dall'elemento
  
  
      if(calcolatrice.pezzi>0) // procedo all'elaborazione solo se i pezzi sono > 0
      {
        // il codice potrebbe essere presente in piÃ¹ misure
        let filteredX =  this.FISHER_COD.filter(el=> {return el.code.includes(String(refEL.rifcode));});
  
  
  
        if(filteredX.length>0)
        {
  
            if(filteredX.length>1) // codice multimisura
            {
              // cerco l'elemento corrispondente alla misura
              let filteredXX =  this.FISHER_COD.filter(el=> {return el.code.includes(String(refEL.rifcode))&&el.misura==calcolatrice.taglio;});
              if(filteredXX.length>0)
              {
                  infoCOD = this.cloneMyObj( filteredXX[0]);                     // contiene le caratteristiche del codice puntato dall'elemento
              }
              else
              {
                console.log('ERRORE: '+refEL.rifcode);
                console.log('misura: '+calcolatrice.taglio);
                console.log('numero elementi con questo codice: '+filteredX.length);
                for(let j=0; j<filteredX.length;j++)
                {
                  console.log('--->'+filteredX[j].misura);
                }
                //console.log(JSON.stringify(filteredX));
                return 0;
              }
            }
            else  // codice monomisura
            {
              infoCOD = this.cloneMyObj( filteredX[0]);                     // contiene le caratteristiche del codice puntato dall'elemento
            }
  
            newObj.data.code            = this.cloneMyObj( infoCOD);           // contiene l'elemento della distinta
  
            newObj.data.name            = infoCOD.descrizione.id;
  
            let values1 = this.InizializzaVARValues();
            let values2 = {};
  
            // controllo che il COD non sia privo di costo
            newObj.allarme_costo = infoCOD.costo>0?false:true;
            //if(newObj.allarme_costo)
          //  {
          //    console.log(newObj.data.name+': costo nullo!');
          //  }
  
  
  
  
            ////////////////////////////////////////////////////////////////////////////
            // passata in avanti, carico solamente i costi da smeup
            values2 = this.InserisciValoriELEMENTO(refEL, infoCOD, values1, 0);
            ////////////////////////////////////////////////////////////////////////////
  
            let values  = this.cloneMyObj( values2);
            //if(copy.rifcode=='271581') console.log(values);
  
            newObj.data.values      = values;
  
            //newObj.data.values_unit = values.unit;
  
            //console.log(values);
  
            newObj.data.pos    = {l0: '', l1: '', l2: '', l3: ''};
  
  
            let elaborazione   = this.estraiPezziTaglioAltro(newObj.data.funzione.codice, newObj.data.code);
  
            //newObj.data.pezzi  = parseInt(elaborazione.pezzi);
  
            if(filteredX.length>1)
            {
              let name = String(infoCOD.misura);
              newObj.data.name += ' ['+name+']';
            }
  
            newObj.data.misura      = infoCOD.misura;
            newObj.data.costoSMEUP  = infoCOD.costo;
            newObj.data.errore      =  '';
            if(newObj.data.costoSMEUP==0)
            {
              newObj.data.errore='costo su SMEUP mancante';
            }
  
  
  
            newObj.data.vettore= elaborazione.vettore;
            newObj.data.nota   = elaborazione.nota;
            let parent_code            =  '';
            let grandparent_code       =  '';
            let greatgrandparent_code  =  '';
            let parent_key             =  '';
            let grandparent_key        =  '';
  
  
  
            if(refEL.livello=='0') // il codice EL un livello 0, pu solo avere figli
            {
              newObj.data.pos.l0 = this.formattaPosizione(refEL.posizione);
              //newObj.data.cos.c0 = formattaCosto(values.costo);
              //console.log(  newObj.data.name+': '+values.costo);
            }
  
            if(refEL.livello=='1') // il codice EL Ã¨ un livello 1, ha padre e puÃ² avere figli
            {
              let parent          = this.FISHER_EL.filter(el=> {return el.key==(refEL.parent_key);});
              parent_code         = parent[0].key;
  
  
              newObj.data.pos.l0  = this.formattaPosizione(parent[0].posizione);
              newObj.data.pos.l1  = this.formattaPosizione(refEL.posizione);
              //newObj.data.cos.c1  = formattaCosto(gain*values.costo);
              //newObj.data.cos.u1  = formattaCosto(parseFloat(parseFloat(gain*values.costo)/newObj.data.pezzi));
              //console.log('u1 '+parseFloat(parseFloat(values.costo)/newObj.data.pezzi));
            }
  
            if(refEL.livello=='2')
            {
              let parent          = this.FISHER_EL.filter(el=> {return el.key==(refEL.parent_key);});
              let grandparent     = this.FISHER_EL.filter(el=> {return el.key==(parent[0].parent_key);});
              let parent_code         = parent[0].key;
              let grandparent_code    = grandparent[0].key;
              let parent_key          = parent[0].key;
              let grandparent_key     = grandparent[0].key;
  
              newObj.data.pos.l0  = this.formattaPosizione(grandparent[0].posizione);
              newObj.data.pos.l1  = this.formattaPosizione(parent[0].posizione);
              newObj.data.pos.l2  = this.formattaPosizione(refEL.posizione);
              //newObj.data.cos.c2  = formattaCosto(gain*values.costo);
              //newObj.data.cos.u2  = formattaCosto(parseFloat(parseFloat(gain*values.costo)/newObj.data.pezzi));
            }
  
            if(refEL.livello=='3')
            {
              let parent          = this.FISHER_EL.filter(el=> {return el.key==(refEL.parent_key);});
              let grandparent     = this.FISHER_EL.filter(el=> {return el.key==(parent[0].parent_key);});
              let greatgrandparent= this.FISHER_EL.filter(el=> {return el.key==(grandparent[0].parent_key);});
  
              let parent_code           = parent[0].key;
              let grandparent_code      = grandparent[0].key;
              let greatgrandparent_code = greatgrandparent[0].key;
  
              newObj.data.pos.l0  = this.formattaPosizione(greatgrandparent[0].posizione);
              newObj.data.pos.l1  = this.formattaPosizione(grandparent[0].posizione);
              newObj.data.pos.l2  = this.formattaPosizione(parent[0].posizione);
              newObj.data.pos.l3  = this.formattaPosizione(refEL.posizione);
  
              //newObj.data.cos.c3  = formattaCosto(gain*values.costo);
              //newObj.data.cos.u3  = formattaCosto(parseFloat(parseFloat(gain*values.costo)/newObj.data.pezzi));
            }
  
  
            //console.log(filteredX.length+': '+xq+'-->'+newObj.data.code.code);
            //console.log(this.LISTA_BOM_TOTALE.length);
            //if(newObj.data.costoSMEUP==0)
            //  console.log(newObj.data.name+'->>>>'+newObj.data.errore);
  
  
            newObj.data.parents = {parent_code:parent_code, grandparent_code:grandparent_code, greatgrandparent_code:greatgrandparent_code};
            //newObj.data.key     = {parent_code:parent_code, grandparent_code:grandparent_code, greatgrandparent_code:greatgrandparent_code};
            let id = this.LISTA_BOM_TOTALE.length;
            newObj.index = id;
            this.LISTA_BOM_TOTALE.push(newObj);
        }
      }
  
    }
  
  
     estraiPezziTaglioAltro(funzioneX, cod='')
    {
      let pezzi       = 0;
      let taglio      = 0;
      let vettore     = [];
      let nota        = '';
      let distingui   = {};
      let riferimento_taglio = '';
      //if(typeof riferimento_taglio == 'undefined') let riferimento_taglio = '';
  
  
      let outfunzioneelemento = {};
      let funzione    = String(funzioneX);
      funzione = funzione.replaceAll('$',' \n');
      funzione = this.removeTags(funzione);
      try
      {
        eval(funzione.replaceAll('$', ''));
      }
      catch (error)
      {
  
        console.log('--------------');
        console.log(error);
        console.log('---');
        console.log('[CODICE]: '+cod.code);
        console.log('[FUNZIONE]: '+funzione);
        console.log('[ERRORE]: '+error);
  
        console.log('[distingui]: ');
        console.log(JSON.stringify(distingui));
        console.log('');
  
      }
      outfunzioneelemento.pezzi         = pezzi;
      outfunzioneelemento.taglio        = taglio;
      outfunzioneelemento.vettore       = vettore;
      outfunzioneelemento.nota          = nota;
      outfunzioneelemento.extra_info    = JSON.parse(JSON.stringify(distingui));
      outfunzioneelemento.extra_info.riferimento_taglio = riferimento_taglio;
      //console.log(outfunzioneelemento);
      return outfunzioneelemento;
    }
  
  
     removeTags(str) {
        if ((str===null) || (str===''))
            return false;
        else
            str = str.toString();
        return str.replace( /(<([^>]+)>)/ig, '');
    }
  
  }
  
Test_2323();
  
  
function Test_2323(){
    let SPORGENZA = 300, LARGHEZZA = 400, CLIENTE = 'pino', ORDINE = '22000', 
    GAMBE = 0, TIPO_GAMBA = undefined, POSIZIONE_GAMBA_TELESCOPICA = undefined, 
    TIPO_SUPP_CASSONETTO= '1', ZIP = true, TIPO_ATT_SOFFITTO = '1', ACCOPPIAMENTO = false,
    TIPO_ACCOPPIAMENTO = '1-none', MOTORE = 'somfy', LATO_MOTORE = 'dx', LED_CASSONETTO = false,
    LED_FRANGITRATTA = '1-3000', LED_GUIDE = false, ALTEZZA_GAMBA_SX = 0, ALTEZZA_GAMBA_DX = 0,
    VERSIONE_SUPPORTO = '1', TIPOLOGIA_SUPPORTO = '2', SUPPORTI_AGGIUNTIVI_GUIDA = 0,
     ALTEZZA_SUPPORTO_GUIDA = 11, VOLANT = false, ALTEZZA_VOLANT = 0,
      FRANGITRATTA = '1-none', TETTUCCIO = '1-none';
  
  let obj = creaInputFor_2323(SPORGENZA, LARGHEZZA, CLIENTE, ORDINE, GAMBE, TIPO_GAMBA, POSIZIONE_GAMBA_TELESCOPICA, TIPO_SUPP_CASSONETTO, ZIP, TIPO_ATT_SOFFITTO, ACCOPPIAMENTO, TIPO_ACCOPPIAMENTO, MOTORE, LATO_MOTORE, LED_CASSONETTO, LED_FRANGITRATTA, LED_GUIDE, ALTEZZA_GAMBA_SX, ALTEZZA_GAMBA_DX, VERSIONE_SUPPORTO, TIPOLOGIA_SUPPORTO, SUPPORTI_AGGIUNTIVI_GUIDA, ALTEZZA_SUPPORTO_GUIDA, VOLANT, ALTEZZA_VOLANT, FRANGITRATTA, TETTUCCIO);
  let my_2323 = new C_2323(obj);
  console.dir(my_2323);
  }
  
  ///////////////////////////////////////////////////////////////////////////
  /////////////////////// crea oggetto di input alla classe /////////////////
  
function creaInputFor_2323(SPORGENZA, LARGHEZZA, CLIENTE, ORDINE, GAMBE, TIPO_GAMBA, POSIZIONE_GAMBA_TELESCOPICA, TIPO_SUPP_CASSONETTO, ZIP, TIPO_ATT_SOFFITTO, ACCOPPIAMENTO, TIPO_ACCOPPIAMENTO, MOTORE, LATO_MOTORE, LED_CASSONETTO, LED_FRANGITRATTA, LED_GUIDE, ALTEZZA_GAMBA_SX, ALTEZZA_GAMBA_DX, VERSIONE_SUPPORTO, TIPOLOGIA_SUPPORTO, SUPPORTI_AGGIUNTIVI_GUIDA, ALTEZZA_SUPPORTO_GUIDA, VOLANT, ALTEZZA_VOLANT, FRANGITRATTA, TETTUCCIO)
  {
  let out = {}
      out.SPORGENZA              = SPORGENZA;
      out.LARGHEZZA              = LARGHEZZA;
      out.CLIENTE                = CLIENTE;
      out.ORDINE                 = ORDINE;
      out.GAMBE                  = GAMBE;
      out.TIPO_GAMBA             = TIPO_GAMBA;
      out.POSIZIONE_GAMBA_TELESCOPICA = POSIZIONE_GAMBA_TELESCOPICA;
      out.TIPO_SUPP_CASSONETTO   = TIPO_SUPP_CASSONETTO;
      out.ZIP                    = ZIP;
      out.TIPO_ATT_SOFFITTO      = TIPO_ATT_SOFFITTO;
      out.ACCOPPIAMENTO          = ACCOPPIAMENTO;
      out.TIPO_ACCOPPIAMENTO     = TIPO_ACCOPPIAMENTO;
      out.MOTORE                 = MOTORE;
      out.LATO_MOTORE            = LATO_MOTORE;
      out.LED_CASSONETTO         = LED_CASSONETTO;
      out.LED_FRANGITRATTA       = LED_FRANGITRATTA;
      out.LED_GUIDE              = LED_GUIDE;
      out.ALTEZZA_GAMBA_SX       = ALTEZZA_GAMBA_SX;
      out.ALTEZZA_GAMBA_DX       = ALTEZZA_GAMBA_DX;
      out.VERSIONE_SUPPORTO      = VERSIONE_SUPPORTO;
      out.TIPOLOGIA_SUPPORTO     = TIPOLOGIA_SUPPORTO;
      out.SUPPORTI_AGGIUNTIVI_GUIDA = SUPPORTI_AGGIUNTIVI_GUIDA;
      out.ALTEZZA_SUPPORTO_GUIDA = ALTEZZA_SUPPORTO_GUIDA;
      out.VOLANT                 = VOLANT;
      out.ALTEZZA_VOLANT         = ALTEZZA_VOLANT;
      out.FRANGITRATTA           = FRANGITRATTA;
      out.TETTUCCIO              = TETTUCCIO;
      return out;
  }
  ///////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////
  
  
  ///////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////
  ///////////////////////      classe                       /////////////////
  
  
  