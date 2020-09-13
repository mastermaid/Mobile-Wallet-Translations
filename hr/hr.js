export default {
  lang: 'Croatian',
  failed: 'Neuspješno',
  success: 'Uspješno',
  RPCCheck: 'Svi sustavi Online',
  RPCCheck_fail: 'Čini se da se naš RPC trenutno ne sinkronizira,Iznos može biti netočan i TX-ovi neće raditi. Funkcionalnost će biti obnovljena u najkraćem mogućem roku.',
  // Routes
  routes: {
    config: 'Konfiguracija',
    settings: 'Postavke',
    send: 'Pošalji',
    txs: 'Transakcije',
    receive: 'Primi',
    home: 'Početna',
    supcurr: 'Podržane valute',
    suplang: 'Podržani jezici',
    keystore: 'Exportiraj Keystore',
    supnet: 'Podržane mreže',
  },
  // About Component
  about: {
    version: 'Verzija:',
    author: 'Autor:',
    funded: 'Financirano:',
    contact: 'Kontaktirajte nas:',
    translators: 'Prevoditelji:',
  },
  // Cordova Component
  cordova: {
    signin: 'Prijavi se',
    error_screenlock: 'Omogućite zaključavanje zaslona na uređaju. Ova aplikacija ne može raditi bez nje.',
    error_sec_storage: 'Aplikacija nije mogla postaviti sigurnu pohranu zbog nepoznate pogreške. Aplikacija ne može raditi bez nje.',
    title: 'Prijavite se u svoj Novčanik s biometrijskom autentifikacijom',
    error_screenlock_changed: 'Čini se da ste promijenili / izbrisali zaključavanje zaslona. Postavite zaključavanje zaslona i ponovo instalirajte aplikaciju.',
  },
  // Nav Drawer component
  nav: {
    about: 'Info',
    signout: 'Odjava',
  },
  // Manin layout
  main: {
    cache: 'Podaci još nisu predmemorirani. Pokušajte ponovo kad ste na mreži',
  },
  // 404 Page
  error_404: {
    sorry: 'Oprostite, ovdje nema ničega...',
  },
  // Keystore
  keystore: {
    fail: 'Neuspješno generiranje Keystore-a, kontaktirajte nas.',
    success: 'Keystore je uspješno stvoren.',
    message: 'Jednostavno kopirajte generirani Keystore i zalijepite u datoteku koja se zove keystore.json - Tada svoj mobilni Novčanik možete koristiti na MyEtherWallet ili MyCrypto. Kada se od vas zatraži da unesete lozinku, upotrebljavate pin aplikacije.',
  },
  // Home Page
  home: {
    balance: 'Iznos',
    mcap: 'Tržišna kapitalizacija:',
    volume: 'Volumen (USD): $',
    mdata_error: 'Nije moguće dobiti tražene tržišne podatke',
    last_tx_in: 'Posljednji ulazni TX:',
    last_tx_out: 'Posljednji izlazni TX:',
    receive: 'Primi',
    send: 'Pošalji',
    website: 'Ether-1 Web stranica',
    settings: 'Postavke aplikacije',
    txs: 'Transakcije',
    error_getting_txs: 'Pogreška pri dohvaćanju transakcija',
    copied: 'Kopirani Text',
    not_signed_in: 'Molimo prijavite se',
    markets_not_supported: 'Statistika tržišta nije podržana na:',
    conv_not_supported: 'Konverzija cijene nije podržana na:',
    transactions_not_supported: 'TX Praćenje nije dostupno na:'
  },
  // User Index (Wallet Setup)
  index: {
    welcome: 'Dobrodošli',
    name: 'Ether-1 Mobilni Novčanik!',
    before: 'Prije nego što započnete, moramo proći kroz neke važne obavijesti.',
    attention: 'Molimo obratite pažnju na sljedeće:',
    access: 'Mi nemožemo pristupiti vašem novčaniku.',
    reset: 'Mi nemožemo resetirati vaš pin.',
    backup: 'Sačuvati sigurnosnu kopiju privatnog ključa.',
    client: 'Odgovorni ste za svoj novčanik, aplikacija je u potpunosti klijentska i koristi naš RPC samo za emitiranje transakcija.',
    pin: "Ako onemogućite PIN na telefonu, Face ili Touch ID, izgubit ćete pristup novčaniku i novčanim sredstvima, zato biste trebali napraviti sigurnosnu kopiju privatnog ključa.",
    understand: 'Razumijem',
    setting: "Zauzeti smo postavljanjem vašeg",
    wallet: 'Ether-1 Novčanika',
    address: 'Ispod je vaša jedinstvena adresa novčanika:',
    pkey: 'Ispod je vaš privatni ključ:',
    backup_pkey: 'Molimo vas ne zaboravite sigurnosno kopirati svoj privatni ključ!",
    set: "Sve je spremno, vaš",
    ready: 'je spreman!',
    by: 'od:',
    funded: 'financiran',
    developed: 'razvijen',
    the_wallet: 'Ether-1 Novčanik je',
    secure: 'Osigurajte moj novčanik ',
    encrypt: 'Šifrirajte novčanik:',
    wallet_name: 'Naziv novčanika',
    use_pin: 'Unesite jedinstveni PIN',
    confirm: 'Potvrdite PIN',
    required_name: 'Potrebno je ime Novčanika',
    required_pin: 'Potreban je PIN',
    retype_pin: 'Ponovo unesite PIN za potvrdu',
    no_match: 'PIN netočan',
    weak_pin: 'Odabrani pin je vrlo slab. Mora sadržavati najmanje 10 znakova i imati broj.',
    copied: 'Text kopiran',
    language: 'Izaberite jezik:',
    unreg: 'Hej! Primijetili smo da je vaš račun neregistriran. Da bismo mogli pristupiti i koristiti se kontaktima u oblaku, potrebno je da potvrdite svoje korisničko ime. Jednom kada pritisnete potvrdite, vaše korisničko ime NE MOŽE se mijenjati. U oblaku se ne pohranjuju osobni podaci.',
  },
  // Receive Page
  receive: {
    scan: 'Skenirajte QR kod za primanje',
    address: 'Adresa',
    warning: 'Na ovu adresu možete primati samo EVM kovanice!',
    current_price: 'Cijena',
    wallet_addr: 'Adresa novčanika',
    copied: 'Text kopiran',
  },
  // Send Page
  send: {
    recent: 'Prijašnje:',
    no_recent: 'Nema nedavnih transfera',
    no_contacts: 'Nisu dodani kontakti',
    send_to: 'Koliko želite poslati',
    add_contact: 'Dodaj kontakt',
    name: 'Naziv:',
    address: 'Adresa:',
    save: 'Sačuvaj',
    delete: 'Izbriši kontakt',
    copy_address: 'Kopiraj adresu',
    invalid_address: 'Nevažeća adresa',
    not_pasted: 'Nije moguće zalijepiti',
    cancelled_scan: 'Otkazano skeniranje',
    unable_scan: 'Skeniranje nije moguće',
    scan_prompt: 'Skeniraj QR kod',
    contact_added: 'Dodan kontakt',
    enter_name: 'Unesite ime:',
    enter_address: 'Unesite adresu:',
    exists: 'već ima ovu adresu',
    copied: 'Kopirana adresa',
    sending: 'Slanje kovanica',
    app_error: 'Neočekivana pogreška, ponovo instalirajte aplikaciju',
    tx_success: 'TRANSAKCIJA ZAVRŠENA',
    tx_failed: 'TRANSAKCIJA NEUSPJEŠNA',
    online: 'Kontakt u oblaku',
    no_online: 'Molimo potražite korisničko ime, ako se ovdje ne pojavljuje, ono ne postoji u našoj bazi podataka.',
    add: 'Preuzmite Kontakt',
  },
  // Settings Page
  settings: {
    node_stats: 'Statistika:',
    chain_id: 'ID lanca:',
    Blockheight: 'Trenutna visina bloka:',
    version: 'Verzija:',
    sync_status: 'Status sinkronizacije:',
    app: 'Postavke aplikacije',
    select_currency: 'Odaberite željenu valutu:',
    select_language: 'Odaberite željeni jezik:',
    about: 'O crnom novčaniku:',
    about_etho: 'O Ether-1',
    error_offline: 'Van mreže',
    keystore: 'Generiraj Keystore',
    about_black: 'O etho.black',
    about_ncr: 'O programeru treće strane (newCodeRunner)',
    stats: 'Ether-1 Mrežne statistike',
    git: 'Ether-1 Github',
    select_network: 'Odaberite Blockchain',
  },
  // SupportedCurrencies Page
  SupportedCurrencies: {
    changed: 'Valuta promijenjena u: ',
  },
  // SupportedLanguages
  SupportedLanguages: {
    changed: 'Jezik promijenjen u: ',
  },
  // Transactions
  txs: {
    recent_txs: 'Nedavni prijenosi',
    no_txs: 'Nije izvršen nijedan transfer u zadnjih 1000 blokova.',
    retrieved: 'Dohvaćene transakcije',
    error: 'Pogreška Dohvaćanja transakcija',
  },
  // Currency Symbols - Do Not Change.
  etho: 'ETHO',
  zar: 'R',
  usd: '$',
  eur: '€',
  ltc: 'Ł',
  btc: '₿',
  eth: 'Ξ',
  bch: 'BCH',
  bnb: 'BNB',
  eos: 'EOS',
  xrp: 'XRP',
  xlm: 'XLM',
  aed: 'د.إ',
  ars: '$',
  aud: '$',
  bdt: '৳',
  bhd: '.د.ب',
  bmd: '$',
  brl: 'R$',
  cad: '$',
  chf: 'Fr',
  clp: '$',
  cny: '¥',
  czk: 'Kč',
  dkk: 'Kr.',
  gbp: '£',
  hkd: '$',
  huf: 'Ft',
  idr: 'Rp',
  ils: '₪',
  inr: '₹',
  jpy: '¥',
  krw: '₩',
  kwd: 'د.ك',
  lkr: 'Rs',
  mmk: 'K',
  mxn: '$',
  myr: 'RM',
  nok: 'kr',
  nzd: '$',
  php: '₱',
  pkr: '₱',
  pln: 'zł',
  rub: '₽',
  sar: '﷼‎,',
  sek: 'kr',
  sgd: '$',
  thb: '฿',
  try: '₺',
  twd: '$',
  uah: '₴',
  vef: 'Bs.',
  vnd: '₫',
  xdr: 'SDR.',
  xag: 'XAG',
  xau: 'XAU',
};
