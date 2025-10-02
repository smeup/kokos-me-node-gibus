export{calcGtechLang};

function calcGtechLang(smeupLang: string) {
    switch (smeupLang) {
        case 'IT':
            return 'Italian';
        case 'EN':
            return 'English';
        case 'DE':
            return 'German';
        case 'FR':
            return 'French';
        case 'ES':
            return 'Spanish';
        default:
            return 'English';
    };
}
