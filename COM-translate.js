const Discord = require("discord.js");
const translate = require("@iamtraction/google-translate");

module.exports.run = async (Client, message, args) => {
    //if (!message.content === "!languague" || !message.content === "!lang" ) return;

    const txt = args.slice(1).join(" ");
    const lang = args[0];

    if (message.content === "!languague" || message.content === "!lang") {
        return message.reply("What languague am I supposed to translate to?");
    }
    if (languague.length !== 2) { 
        return message.reply("Selected language must be 2 letter alias. --> `English > en`");
    } 
    if (message.content === "!text") {
        return message.reply("Provide a text to translate.");
    }

    translate(txt, { to: lang }).then(res => {
        message.reply(res.text);
        console.log([message.author.id + " : " + message.content]);
    
    }).catch(err => {
        message.reply("Please provide a valid ISO language code.");
        console.log(err);
    });
        
}

/*const languages = {
    "auto": "Automatic",
    "af": "Afrikaans",
    "sq": "Albanian",
    "am": "Amharic",
    "ar": "Arabic",
    "hy": "Armenian",
    "az": "Azerbaijani",
    "eu": "Basque",
    "be": "Belarusian",
    "bn": "Bengali",
    "bs": "Bosnian",
    "bg": "Bulgarian",
    "ca": "Catalan",
    "ceb": "Cebuano",
    "ny": "Chichewa",
    "zh-cn": "Chinese Simplified",
    "zh-tw": "Chinese Traditional",
    "co": "Corsican",
    "hr": "Croatian",
    "cs": "Czech",
    "da": "Danish",
    "nl": "Dutch",
    "en": "English",
    "eo": "Esperanto",
    "et": "Estonian",
    "tl": "Filipino",
    "fi": "Finnish",
    "fr": "French",
    "fy": "Frisian",
    "gl": "Galician",
    "ka": "Georgian",
    "de": "German",
    "el": "Greek",
    "gu": "Gujarati",
    "ht": "Haitian Creole",
    "ha": "Hausa",
    "haw": "Hawaiian",
    "iw": "Hebrew",
    "hi": "Hindi",
    "hmn": "Hmong",
    "hu": "Hungarian",
    "is": "Icelandic",
    "ig": "Igbo",
    "id": "Indonesian",
    "ga": "Irish",
    "it": "Italian",
    "ja": "Japanese",
    "jw": "Javanese",
    "kn": "Kannada",
    "kk": "Kazakh",
    "km": "Khmer",
    "ko": "Korean",
    "ku": "Kurdish (Kurmanji)",
    "ky": "Kyrgyz",
    "lo": "Lao",
    "la": "Latin",
    "lv": "Latvian",
    "lt": "Lithuanian",
    "lb": "Luxembourgish",
    "mk": "Macedonian",
    "mg": "Malagasy",
    "ms": "Malay",
    "ml": "Malayalam",
    "mt": "Maltese",
    "mi": "Maori",
    "mr": "Marathi",
    "mn": "Mongolian",
    "my": "Myanmar (Burmese)",
    "ne": "Nepali",
    "no": "Norwegian",
    "ps": "Pashto",
    "fa": "Persian",
    "pl": "Polish",
    "pt": "Portuguese",
    "pa": "Punjabi",
    "ro": "Romanian",
    "ru": "Russian",
    "sm": "Samoan",
    "gd": "Scots Gaelic",
    "sr": "Serbian",
    "st": "Sesotho",
    "sn": "Shona",
    "sd": "Sindhi",
    "si": "Sinhala",
    "sk": "Slovak",
    "sl": "Slovenian",
    "so": "Somali",
    "es": "Spanish",
    "su": "Sundanese",
    "sw": "Swahili",
    "sv": "Swedish",
    "tg": "Tajik",
    "ta": "Tamil",
    "te": "Telugu",
    "th": "Thai",
    "tr": "Turkish",
    "uk": "Ukrainian",
    "ur": "Urdu",
    "uz": "Uzbek",
    "vi": "Vietnamese",
    "cy": "Welsh",
    "xh": "Xhosa",
    "yi": "Yiddish",
    "yo": "Yoruba",
    "zu": "Zulu"
};*/

    //client.on("message", args, async message => { 
        
    /*let languague = args[languages];
    let text = args.slice(1).join(" ");

    if ("!languague" || "!lang") 
        return message.reply("What languague am I supposed to translate to?");
        
    if (languague.length !== 2) 
        return message.reply("Selected language must be 2 letter alias. E.g. `English > en`");
        
    if ("!text") 
        return message.reply("What am I supposed to translate?");
        
    const result = await translate(text, { to: languague });
        
    message.reply(result.text);
    console.log([message.author.id + " : " + message.content]);
    */
