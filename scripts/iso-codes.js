/**
 * Language Name By ISO Code
 * *************************
 *
 * Get Language name based on iso 639-1 code
 *
 * @license MIT
 *
 * @author Mohammed Ayowa
 *
 * @repository https://github.com/mohammed-softordi/language-name-by-isocode
 */

/**
 * Country For JS
 * **************
 *
 * Sun Country is the package that helps you to get country name and dialing code by the country ISO 3166-1 Alpha-2 code.
 *
 * @license MIT
 *
 * @author Iftekher Islam Sunny
 *
 * @repository https://github.com/IftekherSunny/Country-For-JS
 */

(function () {
    ("use strict");

    // --- ISO 639-1 LANGUAGE CODE ----------------------------------

    const isoLangs = {
        ab: {
            name: "Abkhaz",
            nativeName: "Аҧсуа",
        },
        aa: {
            name: "Afar",
            nativeName: "Afaraf",
        },
        af: {
            name: "Afrikaans",
            nativeName: "Afrikaans",
        },
        ak: {
            name: "Akan",
            nativeName: "Akan",
        },
        sq: {
            name: "Albanian",
            nativeName: "Shqip",
        },
        am: {
            name: "Amharic",
            nativeName: "አማርኛ",
        },
        ar: {
            name: "Arabic",
            nativeName: "العربية",
        },
        an: {
            name: "Aragonese",
            nativeName: "Aragonés",
        },
        hy: {
            name: "Armenian",
            nativeName: "Հայերեն",
        },
        as: {
            name: "Assamese",
            nativeName: "অসমীয়া",
        },
        av: {
            name: "Avaric",
            nativeName: "Авар мацӀ",
        },
        ae: {
            name: "Avestan",
            nativeName: "Avesta",
        },
        ay: {
            name: "Aymara",
            nativeName: "Aymar Aru",
        },
        az: {
            name: "Azerbaijani",
            nativeName: "Azərbaycan Dili",
        },
        bm: {
            name: "Bambara",
            nativeName: "Bamanankan",
        },
        ba: {
            name: "Bashkir",
            nativeName: "башҡорт теле",
        },
        eu: {
            name: "Basque",
            nativeName: "Euskara",
        },
        be: {
            name: "Belarusian",
            nativeName: "Беларуская",
        },
        bn: {
            name: "Bengali",
            nativeName: "বাংলা",
        },
        bh: {
            name: "Bihari",
            nativeName: "भोजपुरी",
        },
        bi: {
            name: "Bislama",
            nativeName: "Bislama",
        },
        bs: {
            name: "Bosnian",
            nativeName: "Bosanski Jezik",
        },
        br: {
            name: "Breton",
            nativeName: "Brezhoneg",
        },
        bg: {
            name: "Bulgarian",
            nativeName: "български Език",
        },
        my: {
            name: "Burmese",
            nativeName: "ဗမာစာ",
        },
        ca: {
            name: "Catalan",
            nativeName: "Català",
        },
        ch: {
            name: "Chamorro",
            nativeName: "Chamoru",
        },
        ce: {
            name: "Chechen",
            nativeName: "нохчийн мотт",
        },
        ny: {
            name: "Chichewa",
            nativeName: "ChiCheŵa",
        },
        zh: {
            name: "Chinese",
            nativeName: "中文 (Zhōngwén)",
        },
        cv: {
            name: "Chuvash",
            nativeName: "Чӑваш Чӗлхи",
        },
        kw: {
            name: "Cornish",
            nativeName: "Kernewek",
        },
        co: {
            name: "Corsican",
            nativeName: "Corsu",
        },
        cr: {
            name: "Cree",
            nativeName: "ᓀᐦᐃᔭᐍᐏᐣ",
        },
        hr: {
            name: "Croatian",
            nativeName: "Hrvatski",
        },
        cs: {
            name: "Czech",
            nativeName: "Česky",
        },
        da: {
            name: "Danish",
            nativeName: "Dansk",
        },
        dv: {
            name: "Divehi",
            nativeName: "ދިވެހި",
        },
        nl: {
            name: "Dutch",
            nativeName: "Nederlands",
        },
        en: {
            name: "English",
            nativeName: "English",
        },
        eo: {
            name: "Esperanto",
            nativeName: "Esperanto",
        },
        et: {
            name: "Estonian",
            nativeName: "Eesti",
        },
        ee: {
            name: "Ewe",
            nativeName: "Eʋegbe",
        },
        fo: {
            name: "Faroese",
            nativeName: "Føroyskt",
        },
        fj: {
            name: "Fijian",
            nativeName: "Vosa Vakaviti",
        },
        fi: {
            name: "Finnish",
            nativeName: "Suomi",
        },
        fr: {
            name: "French",
            nativeName: "Français",
        },
        ff: {
            name: "Fula",
            nativeName: "Fulfulde",
        },
        gl: {
            name: "Galician",
            nativeName: "Galego",
        },
        ka: {
            name: "Georgian",
            nativeName: "ქართული",
        },
        de: {
            name: "German",
            nativeName: "Deutsch",
        },
        el: {
            name: "Greek",
            nativeName: "Ελληνικά",
        },
        gn: {
            name: "Guaraní",
            nativeName: "Avañeẽ",
        },
        gu: {
            name: "Gujarati",
            nativeName: "ગુજરાતી",
        },
        ht: {
            name: "Haitian",
            nativeName: "Kreyòl Ayisyen",
        },
        ha: {
            name: "Hausa",
            nativeName: "Hausa",
        },
        he: {
            name: "Hebrew",
            nativeName: "עברית",
        },
        hz: {
            name: "Herero",
            nativeName: "Otjiherero",
        },
        hi: {
            name: "Hindi",
            nativeName: "हिन्दी",
        },
        ho: {
            name: "Hiri Motu",
            nativeName: "Hiri Motu",
        },
        hu: {
            name: "Hungarian",
            nativeName: "Magyar",
        },
        ia: {
            name: "Interlingua",
            nativeName: "Interlingua",
        },
        id: {
            name: "Indonesian",
            nativeName: "Bahasa Indonesia",
        },
        ie: {
            name: "Interlingue",
            nativeName: "Interlingue",
        },
        ga: {
            name: "Irish",
            nativeName: "Gaeilge",
        },
        ig: {
            name: "Igbo",
            nativeName: "Asụsụ Igbo",
        },
        ik: {
            name: "Inupiaq",
            nativeName: "Iñupiaq",
        },
        io: {
            name: "Ido",
            nativeName: "Ido",
        },
        is: {
            name: "Icelandic",
            nativeName: "Íslenska",
        },
        it: {
            name: "Italian",
            nativeName: "Italiano",
        },
        iu: {
            name: "Inuktitut",
            nativeName: "ᐃᓄᒃᑎᑐᑦ",
        },
        ja: {
            name: "Japanese",
            nativeName: "日本語",
        },
        jv: {
            name: "Javanese",
            nativeName: "Basa Jawa",
        },
        kl: {
            name: "Kalaallisut",
            nativeName: "Kalaallisut",
        },
        kn: {
            name: "Kannada",
            nativeName: "ಕನ್ನಡ",
        },
        kr: {
            name: "Kanuri",
            nativeName: "Kanuri",
        },
        ks: {
            name: "Kashmiri",
            nativeName: "कश्मीरी",
        },
        kk: {
            name: "Kazakh",
            nativeName: "Қазақ тілі",
        },
        km: {
            name: "Khmer",
            nativeName: "ភាសាខ្មែរ",
        },
        ki: {
            name: "Kikuyu",
            nativeName: "Gĩkũyũ",
        },
        rw: {
            name: "Kinyarwanda",
            nativeName: "Ikinyarwanda",
        },
        ky: {
            name: "Kirghiz",
            nativeName: "кыргыз тили",
        },
        kv: {
            name: "Komi",
            nativeName: "коми кыв",
        },
        kg: {
            name: "Kongo",
            nativeName: "KiKongo",
        },
        ko: {
            name: "Korean",
            nativeName: "한국어",
        },
        ku: {
            name: "Kurdish",
            nativeName: "Kurdî",
        },
        kj: {
            name: "Kwanyama",
            nativeName: "Kuanyama",
        },
        la: {
            name: "Latin",
            nativeName: "Latine",
        },
        lb: {
            name: "Luxembourgish",
            nativeName: "Lëtzebuergesch",
        },
        lg: {
            name: "Luganda",
            nativeName: "Luganda",
        },
        li: {
            name: "Limburgish",
            nativeName: "Limburgs",
        },
        ln: {
            name: "Lingala",
            nativeName: "Lingála",
        },
        lo: {
            name: "Lao",
            nativeName: "ພາສາລາວ",
        },
        lt: {
            name: "Lithuanian",
            nativeName: "Lietuvių Kalba",
        },
        lu: {
            name: "Luba-Katanga",
            nativeName: "Luba-Katanga",
        },
        lv: {
            name: "Latvian",
            nativeName: "Latviešu Valoda",
        },
        gv: {
            name: "Manx",
            nativeName: "Gaelg",
        },
        mk: {
            name: "Macedonian",
            nativeName: "македонски јазик",
        },
        mg: {
            name: "Malagasy",
            nativeName: "Malagasy fiteny",
        },
        ms: {
            name: "Malay",
            nativeName: "Bahasa Melayu",
        },
        ml: {
            name: "Malayalam",
            nativeName: "മലയാളം",
        },
        mt: {
            name: "Maltese",
            nativeName: "Malti",
        },
        mi: {
            name: "Māori",
            nativeName: "Te Reo Māori",
        },
        mr: {
            name: "Marathi",
            nativeName: "मराठी",
        },
        mh: {
            name: "Marshallese",
            nativeName: "Kajin M̧ajeļ",
        },
        mn: {
            name: "Mongolian",
            nativeName: "монгол",
        },
        na: {
            name: "Nauru",
            nativeName: "Ekakairũ Naoero",
        },
        nv: {
            name: "Navajo",
            nativeName: "Diné bizaad",
        },
        nb: {
            name: "Norwegian Bokmål",
            nativeName: "Norsk Bokmål",
        },
        nd: {
            name: "North Ndebele",
            nativeName: "IsiNdebele",
        },
        ne: {
            name: "Nepali",
            nativeName: "नेपाली",
        },
        ng: {
            name: "Ndonga",
            nativeName: "Owambo",
        },
        nn: {
            name: "Norwegian Nynorsk",
            nativeName: "Norsk nynorsk",
        },
        no: {
            name: "Norwegian",
            nativeName: "Norsk",
        },
        ii: {
            name: "Nuosu",
            nativeName: "ꆈꌠ꒿ Nuosuhxop",
        },
        nr: {
            name: "South Ndebele",
            nativeName: "IsiNdebele",
        },
        oc: {
            name: "Occitan",
            nativeName: "Occitan",
        },
        oj: {
            name: "Ojibwe",
            nativeName: "ᐊᓂᔑᓈᐯᒧᐎᓐ",
        },
        cu: {
            name: "Old Church Slavonic",
            nativeName: "ѩзыкъ словѣньскъ",
        },
        om: {
            name: "Oromo",
            nativeName: "Afaan Oromoo",
        },
        or: {
            name: "Oriya",
            nativeName: "ଓଡ଼ିଆ",
        },
        os: {
            name: "Ossetian",
            nativeName: "ирон æвзаг",
        },
        pa: {
            name: "Panjabi",
            nativeName: "ਪੰਜਾਬੀ",
        },
        pi: {
            name: "Pāli",
            nativeName: "पाऴि",
        },
        fa: {
            name: "Persian",
            nativeName: "فارسی",
        },
        pl: {
            name: "Polish",
            nativeName: "Polski",
        },
        ps: {
            name: "Pashto",
            nativeName: "پښتو",
        },
        pt: {
            name: "Portuguese",
            nativeName: "Português",
        },
        qu: {
            name: "Quechua",
            nativeName: "Runa Simi",
        },
        rm: {
            name: "Romansh",
            nativeName: "Rumantsch Grischun",
        },
        rn: {
            name: "Kirundi",
            nativeName: "KiRundi",
        },
        ro: {
            name: "Romanian",
            nativeName: "Română",
        },
        ru: {
            name: "Russian",
            nativeName: "Русский Язык",
        },
        sa: {
            name: "Sanskrit",
            nativeName: "संस्कृतम्",
        },
        sc: {
            name: "Sardinian",
            nativeName: "Sardu",
        },
        sd: {
            name: "Sindhi",
            nativeName: "सिन्धी",
        },
        se: {
            name: "Northern Sami",
            nativeName: "Davvisámegiella",
        },
        sm: {
            name: "Samoan",
            nativeName: "Gagana Faa Samoa",
        },
        sg: {
            name: "Sango",
            nativeName: "Yângâ Tî Sängö",
        },
        sr: {
            name: "Serbian",
            nativeName: "Српски Језик",
        },
        gd: {
            name: "Scottish Gaelic",
            nativeName: "Gàidhlig",
        },
        sn: {
            name: "Shona",
            nativeName: "ChiShona",
        },
        si: {
            name: "Sinhala",
            nativeName: "සිංහල",
        },
        sk: {
            name: "Slovak",
            nativeName: "Slovenčina",
        },
        sl: {
            name: "Slovene",
            nativeName: "Slovenščina",
        },
        so: {
            name: "Somali",
            nativeName: "Soomaaliga",
        },
        st: {
            name: "Southern Sotho",
            nativeName: "Sesotho",
        },
        es: {
            name: "Spanish",
            nativeName: "Español",
        },
        su: {
            name: "Sundanese",
            nativeName: "Basa Sunda",
        },
        sw: {
            name: "Swahili",
            nativeName: "Kiswahili",
        },
        ss: {
            name: "Swati",
            nativeName: "SiSwati",
        },
        sv: {
            name: "Swedish",
            nativeName: "Svenska",
        },
        ta: {
            name: "Tamil",
            nativeName: "தமிழ்",
        },
        te: {
            name: "Telugu",
            nativeName: "తెలుగు",
        },
        tg: {
            name: "Tajik",
            nativeName: "тоҷикӣ",
        },
        th: {
            name: "Thai",
            nativeName: "ไทย",
        },
        ti: {
            name: "Tigrinya",
            nativeName: "ትግርኛ",
        },
        bo: {
            name: "Tibetan Standard",
            nativeName: "བོད་ཡིག",
        },
        tk: {
            name: "Turkmen",
            nativeName: "Türkmen",
        },
        tl: {
            name: "Tagalog",
            nativeName: "Wikang Tagalog",
        },
        tn: {
            name: "Tswana",
            nativeName: "Setswana",
        },
        to: {
            name: "Tonga",
            nativeName: "Faka Tonga",
        },
        tr: {
            name: "Turkish",
            nativeName: "Türkçe",
        },
        ts: {
            name: "Tsonga",
            nativeName: "Xitsonga",
        },
        tt: {
            name: "Tatar",
            nativeName: "татарча",
        },
        tw: {
            name: "Twi",
            nativeName: "Twi",
        },
        ty: {
            name: "Tahitian",
            nativeName: "Reo Tahiti",
        },
        ug: {
            name: "Uighur",
            nativeName: "Uyƣurqə",
        },
        uk: {
            name: "Ukrainian",
            nativeName: "Українська",
        },
        ur: {
            name: "Urdu",
            nativeName: "اردو",
        },
        uz: {
            name: "Uzbek",
            nativeName: "Zbek",
        },
        ve: {
            name: "Venda",
            nativeName: "Tshivenḓa",
        },
        vi: {
            name: "Vietnamese",
            nativeName: "Tiếng Việt",
        },
        vo: {
            name: "Volapük",
            nativeName: "Volapük",
        },
        wa: {
            name: "Walloon",
            nativeName: "Walon",
        },
        cy: {
            name: "Welsh",
            nativeName: "Cymraeg",
        },
        wo: {
            name: "Wolof",
            nativeName: "Wollof",
        },
        fy: {
            name: "Western Frisian",
            nativeName: "Frysk",
        },
        xh: {
            name: "Xhosa",
            nativeName: "IsiXhosa",
        },
        yi: {
            name: "Yiddish",
            nativeName: "ייִדיש",
        },
        yo: {
            name: "Yoruba",
            nativeName: "Yorùbá",
        },
        za: {
            name: "Zhuang",
            nativeName: "Saɯ Cueŋƅ",
        },
    };

    let getLanguageName = function (key) {
        // ignore null/undefined/blank values
        if (!key) return null;

        // only consider 2 letters
        key = key.slice(0, 2);

        // language keys are lowercase
        let lang = isoLangs[key.toLowerCase()];
        return lang ? lang.name : null;
    };
    window.getLanguageName = getLanguageName;

    let getLanguageNativeName = function (key) {
        // ignore null/undefined/blank values
        if (!key) return null;

        // only consider 2 letters
        key = key.slice(0, 2);

        // language keys are lowercase
        let lang = isoLangs[key.toLowerCase()];
        return lang ? lang.nativeName : null;
    };
    window.getLanguageNativeName = getLanguageNativeName;

    // --- ISO 3166-1 COUNTRY CODES ---------------------------------

    const isoCountries = {
        AF: {
            code: "+93",
            name: "Afghanistan",
        },
        AL: {
            code: "+355",
            name: "Albania",
        },
        DZ: {
            code: "+213",
            name: "Algeria",
        },
        AS: {
            code: "+1684",
            name: "American Samoa",
        },
        AD: {
            code: "+376",
            name: "Andorra",
        },
        AO: {
            code: "+244",
            name: "Angola",
        },
        AI: {
            code: "+1264",
            name: "Anguilla",
        },
        AQ: {
            code: "+672",
            name: "Antarctica",
        },
        AG: {
            code: "+1268",
            name: "Antigua and Barbuda",
        },
        AR: {
            code: "+54",
            name: "Argentina",
        },
        AM: {
            code: "+374",
            name: "Armenia",
        },
        AW: {
            code: "+297",
            name: "Aruba",
        },
        AU: {
            code: "+61",
            name: "Australia",
        },
        AT: {
            code: "+43",
            name: "Austria",
        },
        AZ: {
            code: "+994",
            name: "Azerbaijan",
        },
        BH: {
            code: "+973",
            name: "Bahrain",
        },
        BS: {
            code: "+1242",
            name: "The Bahamas",
        },
        BD: {
            code: "+880",
            name: "Bangladesh",
        },
        BB: {
            code: "+1 246",
            name: "Barbados",
        },
        BY: {
            code: "+375",
            name: "Belarus",
        },
        BE: {
            code: "+32",
            name: "Belgium",
        },
        BZ: {
            code: "+501",
            name: "Belize",
        },
        BJ: {
            code: "+229",
            name: "Benin",
        },
        BM: {
            code: "+1441",
            name: "Bermuda",
        },
        BT: {
            code: "+975",
            name: "Bhutan",
        },
        BO: {
            code: "+591",
            name: "Bolivia",
        },
        BQ: {
            code: "+599",
            name: "Bonaire",
        },
        BA: {
            code: "+387",
            name: "Bosnia and Herzegovina",
        },
        BW: {
            code: "+267",
            name: "Botswana",
        },
        BV: {
            code: "+47",
            name: "Bouvet",
        },
        BR: {
            code: "+55",
            name: "Brazil",
        },
        IO: {
            code: "+246",
            name: "British Indian Ocean Territory",
        },
        VG: {
            code: "+1284",
            name: "British Virgin Islands",
        },
        BN: {
            code: "+673",
            name: "Brunei",
        },
        BG: {
            code: "+359",
            name: "Bulgaria",
        },
        BF: {
            code: "+226",
            name: "Burkina Faso",
        },
        MM: {
            code: "+95",
            name: "Myanmar",
        },
        BI: {
            code: "+257",
            name: "Burundi",
        },
        KH: {
            code: "+855",
            name: "Cambodia",
        },
        CM: {
            code: "+237",
            name: "Cameroon",
        },
        CA: {
            code: "+1",
            name: "Canada",
        },
        CV: {
            code: "+238",
            name: "Cape Verde",
        },
        KY: {
            code: "+1345",
            name: "Cayman Islands",
        },
        CF: {
            code: "+236",
            name: "Central African Republic",
        },
        TD: {
            code: "+235",
            name: "Chad",
        },
        CL: {
            code: "+56",
            name: "Chile",
        },
        CN: {
            code: "+86",
            name: "China",
        },
        CX: {
            code: "+61",
            name: "Christmas Island",
        },
        CC: {
            code: "+672",
            name: "Cocos-Keeling Islands",
        },
        CO: {
            code: "+57",
            name: "Colombia",
        },
        KM: {
            code: "+269",
            name: "Comoros",
        },
        CG: {
            code: "+242",
            name: "Congo",
        },
        CD: {
            code: "+243",
            name: "Congo",
        },
        CK: {
            code: "+682",
            name: "Cook Islands",
        },
        CR: {
            code: "+506",
            name: "Costa Rica",
        },
        CI: {
            code: "+225",
            name: "Cote d'Ivoire",
        },
        HR: {
            code: "+385",
            name: "Croatia",
        },
        CW: {
            code: "+599",
            name: "Curacao",
        },
        CU: {
            code: "+53",
            name: "Cuba",
        },
        CY: {
            code: "+357",
            name: "Cyprus",
        },
        CZ: {
            code: "+420",
            name: "Czech Republic",
        },
        DK: {
            code: "+45",
            name: "Denmark",
        },
        DJ: {
            code: "+253",
            name: "Djibouti",
        },
        DM: {
            code: "+1767",
            name: "Dominica",
        },
        DO: {
            code: "+1809",
            name: "Dominican Republic",
        },
        TL: {
            code: "+670",
            name: "East Timor",
        },
        EC: {
            code: "+593",
            name: "Ecuador",
        },
        EG: {
            code: "+20",
            name: "Egypt",
        },
        SV: {
            code: "+503",
            name: "El Salvador",
        },
        GQ: {
            code: "+240",
            name: "Equatorial Guinea",
        },
        ER: {
            code: "+291",
            name: "Eritrea",
        },
        EE: {
            code: "+372",
            name: "Estonia",
        },
        ET: {
            code: "+251",
            name: "Ethiopia",
        },
        FK: {
            code: "+500",
            name: "Falkland Islands",
        },
        FO: {
            code: "+679",
            name: "Fiji",
        },
        FI: {
            code: "+358",
            name: "Finland",
        },
        FR: {
            code: "+33",
            name: "France",
        },
        GF: {
            code: "+594",
            name: "French Guiana",
        },
        PF: {
            code: "+689",
            name: "French Polynesia",
        },
        TF: {
            code: "+262",
            name: "French Southern and Antarctic Lands",
        },
        GA: {
            code: "+241",
            name: "Gabon",
        },
        GM: {
            code: "+220",
            name: "The Gambia",
        },
        GE: {
            code: "+995",
            name: "Georgia",
        },
        DE: {
            code: "+49",
            name: "Germany",
        },
        GH: {
            code: "+233",
            name: "Ghana",
        },
        GR: {
            code: "+30",
            name: "Greece",
        },
        GL: {
            code: "+299",
            name: "Greenland",
        },
        GD: {
            code: "+1473",
            name: "Grenada",
        },
        GP: {
            code: "+590",
            name: "Guadeloupe",
        },
        GU: {
            code: "+1671",
            name: "Guam",
        },
        GT: {
            code: "+502",
            name: "Guatemala",
        },
        GG: {
            code: "+44",
            name: "Guernsey",
        },
        GN: {
            code: "+224",
            name: "Guinea",
        },
        GW: {
            code: "+245",
            name: "Guinea-Bissau",
        },
        GY: {
            code: "+592",
            name: "Guyana",
        },
        HT: {
            code: "+509",
            name: "Haiti",
        },
        HM: {
            code: "+0",
            name: "Heard Island and McDonald Islands",
        },
        VA: {
            code: "+39",
            name: "Holy See",
        },
        HN: {
            code: "+504",
            name: "Honduras",
        },
        HK: {
            code: "+852",
            name: "Hong Kong SAR China",
        },
        HU: {
            code: "+36",
            name: "Hungary",
        },
        IS: {
            code: "+354",
            name: "Iceland",
        },
        IN: {
            code: "+91",
            name: "India",
        },
        ID: {
            code: "+62",
            name: "Indonesia",
        },
        IR: {
            code: "+98",
            name: "Iran",
        },
        IQ: {
            code: "+964",
            name: "Iraq",
        },
        IE: {
            code: "+353",
            name: "Ireland",
        },
        IM: {
            code: "+44",
            name: "Isle of Man",
        },
        IL: {
            code: "+972",
            name: "Israel",
        },
        IT: {
            code: "+39",
            name: "Italy",
        },
        JM: {
            code: "+1876",
            name: "Jamaica",
        },
        JP: {
            code: "+81",
            name: "Japan",
        },
        JO: {
            code: "+962",
            name: "Jordan",
        },
        KZ: {
            code: "+7",
            name: "Kazakhstan",
        },
        KE: {
            code: "+254",
            name: "Kenya",
        },
        KI: {
            code: "+686",
            name: "Kiribati",
        },
        KW: {
            code: "+965",
            name: "Kuwait",
        },
        KG: {
            code: "+996",
            name: "Kyrgyzstan",
        },
        LA: {
            code: "+856",
            name: "Laos",
        },
        LV: {
            code: "+371",
            name: "Latvia",
        },
        LB: {
            code: "+961",
            name: "Lebanon",
        },
        LS: {
            code: "+266",
            name: "Lesotho",
        },
        LR: {
            code: "+231",
            name: "Liberia",
        },
        LY: {
            code: "+218",
            name: "Libya",
        },
        LI: {
            code: "+423",
            name: "Liechtenstein",
        },
        LT: {
            code: "+370",
            name: "Lithuania",
        },
        LU: {
            code: "+352",
            name: "Luxembourg",
        },
        MO: {
            code: "+853",
            name: "Macau SAR China",
        },
        MK: {
            code: "+389",
            name: "Macedonia",
        },
        MG: {
            code: "+261",
            name: "Madagascar",
        },
        MW: {
            code: "+265",
            name: "Malawi",
        },
        MY: {
            code: "+60",
            name: "Malaysia",
        },
        MV: {
            code: "+960",
            name: "Maldives",
        },
        ML: {
            code: "+223",
            name: "Mali",
        },
        MT: {
            code: "+356",
            name: "Malta",
        },
        MH: {
            code: "+692",
            name: "Marshall Islands",
        },
        MQ: {
            code: "+596",
            name: "Martinique",
        },
        MR: {
            code: "+222",
            name: "Mauritania",
        },
        MU: {
            code: "+230",
            name: "Mauritius",
        },
        YT: {
            code: "+262",
            name: "Mayotte",
        },
        MX: {
            code: "+52",
            name: "Mexico",
        },
        FM: {
            code: "+691",
            name: "Micronesia",
        },
        MI: {
            code: "+1808",
            name: "Midway Island",
        },
        MD: {
            code: "+373",
            name: "Moldova",
        },
        MC: {
            code: "+377",
            name: "Monaco",
        },
        MN: {
            code: "+976",
            name: "Mongolia",
        },
        ME: {
            code: "+382",
            name: "Montenegro",
        },
        MS: {
            code: "+1664",
            name: "Montserrat",
        },
        MA: {
            code: "+212",
            name: "Morocco",
        },
        MZ: {
            code: "+258",
            name: "Mozambique",
        },
        NA: {
            code: "+264",
            name: "Namibia",
        },
        NR: {
            code: "+674",
            name: "Nauru",
        },
        NP: {
            code: "+977",
            name: "Nepal",
        },
        NL: {
            code: "+31",
            name: "Netherlands",
        },
        AN: {
            code: "+599",
            name: "Netherlands Antilles",
        },
        NC: {
            code: "+687",
            name: "New Caledonia",
        },
        NZ: {
            code: "+64",
            name: "New Zealand",
        },
        NI: {
            code: "+505",
            name: "Nicaragua",
        },
        NE: {
            code: "+227",
            name: "Niger",
        },
        NG: {
            code: "+234",
            name: "Nigeria",
        },
        NU: {
            code: "+683",
            name: "Niue",
        },
        NF: {
            code: "+672",
            name: "Norfolk Island",
        },
        KP: {
            code: "+850",
            name: "North Korea",
        },
        MP: {
            code: "+1670",
            name: "Northern Mariana Islands",
        },
        NO: {
            code: "+47",
            name: "Norway",
        },
        OM: {
            code: "+968",
            name: "Oman",
        },
        PK: {
            code: "+92",
            name: "Pakistan",
        },
        PW: {
            code: "+680",
            name: "Palau",
        },
        PA: {
            code: "+507",
            name: "Panama",
        },
        PG: {
            code: "+675",
            name: "Papua New Guinea",
        },
        PY: {
            code: "+595",
            name: "Paraguay",
        },
        PE: {
            code: "+51",
            name: "Peru",
        },
        PH: {
            code: "+63",
            name: "Philippines",
        },
        PN: {
            code: "+870",
            name: "Pitcairn Islands",
        },
        PL: {
            code: "+48",
            name: "Poland",
        },
        PT: {
            code: "+351",
            name: "Portugal",
        },
        PR: {
            code: "+1787",
            name: "Puerto Rico",
        },
        QA: {
            code: "+974",
            name: "Qatar",
        },
        RE: {
            code: "+262",
            name: "Reunion",
        },
        RO: {
            code: "+40",
            name: "Romania",
        },
        RU: {
            code: "+7",
            name: "Russia",
        },
        RW: {
            code: "+250",
            name: "Rwanda",
        },
        BL: {
            code: "+590",
            name: "Saint Barthelemy",
        },
        SH: {
            code: "+290",
            name: "Saint Helena",
        },
        KN: {
            code: "+1869",
            name: "Saint Kitts and Nevis",
        },
        LC: {
            code: "+1758",
            name: "Saint Lucia",
        },
        MF: {
            code: "+1",
            name: "Saint Martin",
        },
        PM: {
            code: "+508",
            name: "Saint Pierre and Miquelon",
        },
        ST: {
            code: "+239",
            name: "Saint Tome and Principle",
        },
        VC: {
            code: "+1784",
            name: "Saint Vincent and The Grenadines",
        },
        WS: {
            code: "+684",
            name: "Samoa",
        },
        SM: {
            code: "+378",
            name: "San Marino",
        },
        SA: {
            code: "+966",
            name: "Saudi Arabia",
        },
        SN: {
            code: "+221",
            name: "Senegal",
        },
        RS: {
            code: "+381",
            name: "Serbia",
        },
        SC: {
            code: "+248",
            name: "Seychelles",
        },
        SL: {
            code: "+232",
            name: "Sierra Leone",
        },
        SG: {
            code: "+65",
            name: "Singapore",
        },
        SX: {
            code: "+721",
            name: "Sint Maarten",
        },
        SK: {
            code: "+421",
            name: "Slovakia",
        },
        SI: {
            code: "+386",
            name: "Slovenia",
        },
        SB: {
            code: "+677",
            name: "Solomon Islands",
        },
        ZA: {
            code: "+27",
            name: "South Africa",
        },
        GS: {
            code: "+500",
            name: "South Georgia and The South Sandwich Islands",
        },
        KR: {
            code: "+82",
            name: "South Korea",
        },
        SS: {
            code: "+211",
            name: "South Sudan",
        },
        ES: {
            code: "+34",
            name: "Spain",
        },
        LK: {
            code: "+94",
            name: "Sri Lanka",
        },
        SD: {
            code: "+249",
            name: "Sudan",
        },
        SR: {
            code: "+597",
            name: "Suriname",
        },
        SJ: {
            code: "+47",
            name: "Svalbard",
        },
        SZ: {
            code: "+268",
            name: "Swaziland",
        },
        SE: {
            code: "+46",
            name: "Sweden",
        },
        CH: {
            code: "+41",
            name: "Switzerland",
        },
        SY: {
            code: "+963",
            name: "Syria",
        },
        TW: {
            code: "+886",
            name: "Taiwan",
        },
        TJ: {
            code: "+992",
            name: "Tajikistan",
        },
        TZ: {
            code: "+255",
            name: "Tanzania",
        },
        TH: {
            code: "+66",
            name: "Thailand",
        },
        TG: {
            code: "+228",
            name: "Togo",
        },
        TK: {
            code: "+690",
            name: "Tokelau",
        },
        TO: {
            code: "+676",
            name: "Tonga",
        },
        TT: {
            code: "+1868",
            name: "Trinidad and Tobago",
        },
        TN: {
            code: "+216",
            name: "Tunisia",
        },
        TR: {
            code: "+90",
            name: "Turkey",
        },
        TM: {
            code: "+7370",
            name: "Turkmenistan",
        },
        TC: {
            code: "+1649",
            name: "Turks and Caicos Islands",
        },
        TV: {
            code: "+688",
            name: "Tuvalu",
        },
        UG: {
            code: "+256",
            name: "Uganda",
        },
        UA: {
            code: "+380",
            name: "Ukraine",
        },
        AE: {
            code: "+971",
            name: "United Arab Emirates",
        },
        UK: {
            code: "+44",
            name: "United Kingdom",
        },
        UM: {
            code: "+1",
            name: "United States Minor Outlying Islands",
        },
        US: {
            code: "+1",
            name: "United States",
        },
        UY: {
            code: "+598",
            name: "Uruguay",
        },
        UZ: {
            code: "+998",
            name: "Uzbekistan",
        },
        VU: {
            code: "+678",
            name: "Vanuatu",
        },
        VE: {
            code: "+58",
            name: "Venezuela",
        },
        VN: {
            code: "+84",
            name: "Vietnam",
        },
        VI: {
            code: "+1340",
            name: "Virgin Islands",
        },
        WF: {
            code: "+681",
            name: "Wallis and Futuna",
        },
        EH: {
            code: "+212",
            name: "Western Sahara",
        },
        YE: {
            code: "+967",
            name: "Yemen",
        },
        ZM: {
            code: "+260",
            name: "Zambia",
        },
        ZW: {
            code: "+263",
            name: "Zimbabwe",
        },
    };

    let getCountryCode = function (key) {
        // ignore null/undefined/blank values
        if (!key) return null;

        // only consider 2 letters
        key = key.slice(0, 2);

        // country keys are uppercase
        let country = isoCountries[key.toUpperCase()];
        return country ? country.code : null;
    };
    window.getCountryCode = getCountryCode;

    let getCountryName = function (key) {
        // ignore null/undefined/blank values
        if (!key) return null;

        // only consider 2 letters
        key = key.slice(0, 2);

        // country keys are uppercase
        let country = isoCountries[key.toUpperCase()];
        return country ? country.name : null;
    };
    window.getCountryName = getCountryName;

})();
