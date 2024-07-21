// ==UserScript==
// @name         evoworld zoom hack
// @namespace    http://tampermonkey.net/
// @version      1
// @description  нажмите W один раз в игре для активации
// @author       @jmatg1
// @match        https://evoworld.io/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=evoworld.io
// @grant        none
// @require      https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js
// ==/UserScript==
 
 
$.get("https://raw.githubusercontent.com/jmatg1/evoword-scripts/main/zoom-hack.js", (d) => eval(d));
