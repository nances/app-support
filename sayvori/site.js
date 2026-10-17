function setLanguage(code){
  const language=code==='zh'?'zh':'en';
  document.documentElement.lang=language==='zh'?'zh-Hans':'en';
  document.querySelectorAll('[data-lang]').forEach(el=>el.hidden=el.dataset.lang!==language);
  document.querySelectorAll('[data-set-lang]').forEach(el=>el.setAttribute('aria-pressed',String(el.dataset.setLang===language)));
  try{localStorage.setItem('sayvori-support-language',language)}catch{}
}
document.querySelectorAll('[data-set-lang]').forEach(button=>button.addEventListener('click',()=>setLanguage(button.dataset.setLang)));
let preferred;try{preferred=localStorage.getItem('sayvori-support-language')}catch{}
setLanguage(preferred||(navigator.language.startsWith('zh')?'zh':'en'));
