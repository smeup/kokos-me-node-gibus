//inizio a creare questo servizio per generare gli allegati
import {
    ExecutionContext,
    Fun,
    KokosService,
    SMEUP_MESSAGE_GRAVITY,
    SMEUP_MESSAGE_MODE,
    SmeupDataColumn,
    SmeupDataRow,
    SmeupDataStructureWriter
} from "@sme.up/kokos-sdk-node";

import {upAllDeck} from "../rules/libGibus/globe/uploadToGlobe";

const ALLEGATI: KokosService = {
    methods: {
        "upAllDeck": upAllDeck,
    },
};

export default ALLEGATI;

