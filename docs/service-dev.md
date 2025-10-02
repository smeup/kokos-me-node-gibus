## ACCOUNT.ts - Esempio di implementazione di un servizio kokos

Il file [ACCOUNT.ts](../src/services/ACCOUNT.ts) rappresenta un esempio pratico di implementazione di un servizio Kokos. Un servizio è definito come un oggetto che implementa l'interfaccia `KokosService` e mappa i nomi delle funzioni esposte (metodi) a funzioni TypeScript che realizzano la logica di business.

### Struttura del servizio

```typescript

//edit Danzo
//nella prova che ho fatto io, il nome (la chiave: es GET.ALL) del method
//ovvero il nome FUN della chiamata
//non poteva superare i 10 caratteri,

// ACCOUNT è il nome del servizio
const ACCOUNT: KokosService = {
    // Methods sono le funzioni/metodo messe a disposizione del servizio
    methods: {
        "GET.BY_ID": getById,
        "GET.ALL": getAll,
        "UPD.ALL": updateAccounts,
    },
};
```

In questa struttura, la proprietà `methods` è una mappa che associa il nome della funzione (ad esempio `GET.BY_ID`) alla funzione TypeScript corrispondente (`getById`).

Data la definzione del servizio le possibili FUN che il nostro servizio potrà eseguire saranno le seguenti:
- F(EXB;ACCOUNT;GET.BY_ID)
- F(EXB;ACCOUNT;GET.ALL)
- F(EXB;ACCOUNT;UPD.ALL)


### Relazione tra nomi dei metodi e funzioni

Ogni chiave della mappa `methods` rappresenta il nome della funzione che sarà invocata dal client tramite il payload SMEUP/FUN. Il valore associato è la funzione che implementa la logica per quella specifica operazione.

Esempio:
- `GET.BY_ID` → `getById`
- `GET.ALL` → `getAll`
- `UPD.ALL` → `updateAccounts`

### Gestione dei parametri di ingresso (fun: Fun)

Tutte le funzioni implementano la firma:

```typescript
async function nomeMetodo(fun: Fun, _context: ExecutionContext, writer: SmeupDataStructureWriter)
```

Il parametro `fun: Fun` contiene i parametri di ingresso della chiamata, che variano a seconda del metodo:


#### 1. `getById`
- **Scopo:** Restituisce un account dato il suo ID.
- **Gestione parametri:** Legge l'ID dal campo `fun.P`, che deve essere una stringa nel formato `ID(valore)`. Il valore viene estratto tramite una regex. Se l'ID non è numerico, viene sollevato un errore.

**Esempio payload:**
```json
{
  "fun": {
    "component": "EXB",
    "service": "ACCOUNT",
    "function": "GET.BY_ID",
    "P": "ID(1)"
  },
  "context": {}
}
```


#### 2. `getAll`
- **Scopo:** Restituisce la lista di tutti gli account.
- **Gestione parametri:** Non richiede parametri specifici in ingresso. Ignora il contenuto di `fun` e restituisce tutti gli account presenti nella collezione.

**Esempio payload:**
```json
{
  "fun": {
    "component": "EXB",
    "service": "ACCOUNT",
    "function": "GET.ALL"
  },
  "context": {}
}
```


#### 3. `updateAccounts`
- **Scopo:** Aggiorna o aggiunge account alla collezione.
- **Gestione parametri:** Legge la collezione di account da aggiornare dal campo `fun.INPUT`, che deve essere una stringa JSON rappresentante un array di oggetti `{id, name}`. Se il formato non è valido o la collezione è vuota, viene sollevato un errore. Gli account con ID già esistente vengono aggiornati, quelli nuovi vengono aggiunti.

**Esempio payload:**
```json
{
  "fun": {
    "component": "EXB",
    "service": "ACCOUNT",
    "function": "UPD.ALL",
    "INPUT": "[{\"id\":\"1\",\"name\":\"Updated Account 1\"},{\"id\":\"2\",\"name\":\"Updated Account 2\"}]"
  },
  "context": {}
}
```

### Test del servizio

Il servizio può essere testato mediante swagger utilizzando come modelli gli esempi di payload forniti precedentemente
![Test servizio](service-test.gif)

### Riepilogo

- La chiave nella mappa `methods` definisce il nome della funzione esposta dal servizio.
- Ogni funzione implementa la logica specifica e gestisce i parametri di ingresso tramite il parametro `fun: Fun`.
- Sono stati forniti tre esempi di funzioni che differiscono nella modalità di lettura e validazione dei parametri di ingresso delle FUN e che rappresentano quindi le modalità principali con cui si possono passare parametri ad un servizio.