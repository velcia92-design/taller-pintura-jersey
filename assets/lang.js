/* Selector de idioma, menú móvil y enlaces con ?lang=. */
(function(){
 var D=window.SVR_LANGS||{en:{}};
var KEY='svr-lang',lang='en';
 try{lang=new URLSearchParams(location.search).get('lang')||localStorage.getItem(KEY)||'en'}catch(e){}
 if(lang!=='en'&&!D[lang])lang='en';
 var HL={en:'en-GB',es:'es',pt:'pt-PT',pl:'pl',ro:'ro'};
 function norm(s){return s.replace(/\s+/g,' ').trim()}
 function tr(s){var d=D[lang];return d&&d[norm(s)]?d[norm(s)]:null}
 window.SVR_T=function(s){return tr(s)||s};
 var ATTRS=['placeholder','aria-label','alt'];


 var old=document.getElementById('lang'),box=null;
 if(old){box=document.createElement('select');box.id='lang';box.className='langsel';box.setAttribute('aria-label','Language');
  [['en','English'],['pt','Português'],['pl','Polski'],['ro','Română'],['es','Español']].forEach(function(x){
   var o=document.createElement('option');o.value=x[0];o.textContent=x[1];box.appendChild(o)});
  box.addEventListener('change',function(){lang=box.value;try{localStorage.setItem(KEY,lang)}catch(e){}apply()});
  old.parentNode.replaceChild(box,old)}
 function textNodes(){
  var w=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT,{acceptNode:function(n){
   var p=n.parentNode;if(!p)return NodeFilter.FILTER_REJECT;
   var tg=p.nodeName;if(tg==='SCRIPT'||tg==='STYLE'||tg==='NOSCRIPT')return NodeFilter.FILTER_REJECT;
   if(p.closest&&p.closest('#lang,#ro'))return NodeFilter.FILTER_REJECT;
   return n.nodeValue.trim()?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT}});
  var a=[],n;while(n=w.nextNode())a.push(n);return a}
 var bur=document.getElementById('burger'),nav=document.getElementById('nav'),hd=document.getElementById('hd');
 function isOpen(){return bur&&bur.getAttribute('aria-expanded')==='true'}
 function setLbl(){if(bur){var k=isOpen()?'Close menu':'Open menu';bur.setAttribute('aria-label',tr(k)||k)}}
 function setMenu(o,focusBack){if(!bur||!nav)return;bur.setAttribute('aria-expanded',o?'true':'false');nav.classList.toggle('open',o);if(hd)hd.classList.toggle('menu-open',o);setLbl();if(!o&&focusBack)bur.focus()}
 if(bur&&nav){
  bur.addEventListener('click',function(){setMenu(!isOpen())});
  nav.addEventListener('click',function(e){if(e.target.closest&&e.target.closest('a'))setMenu(false)});
  document.addEventListener('click',function(e){if(isOpen()&&!hd.contains(e.target))setMenu(false)});
  document.addEventListener('keydown',function(e){if(e.key==='Escape'&&isOpen()){setMenu(false,true)}});
  addEventListener('resize',function(){if(innerWidth>=1080&&isOpen())setMenu(false)});
  hd.addEventListener('focusout',function(e){if(isOpen()&&e.relatedTarget&&!hd.contains(e.relatedTarget))setMenu(false)})}
 function apply(){
  textNodes().forEach(function(n){
   if(n._o===undefined)n._o=n.nodeValue;
   var t=tr(n._o);
   if(t){var m=n._o.match(/^(\s*)[\s\S]*?(\s*)$/);n.nodeValue=m[1]+t+m[2]}else n.nodeValue=n._o});
  document.querySelectorAll('[placeholder],[aria-label],[alt]').forEach(function(el){
   if((el.closest&&el.closest('#lang'))||el.id==='burger')return;
   ATTRS.forEach(function(a){
    if(!el.hasAttribute(a))return;
    var k='data-o-'+a;if(!el.hasAttribute(k))el.setAttribute(k,el.getAttribute(a));
    var o=el.getAttribute(k);el.setAttribute(a,tr(o)||o)})});
  document.documentElement.lang=HL[lang];
  if(box)box.value=lang;
  document.querySelectorAll('a[href]').forEach(function(a){
   var h=a.getAttribute('data-h')||a.getAttribute('href');
   if(!/^(index|services|car-check)\.html/.test(h))return;
   a.setAttribute('data-h',h);
   a.setAttribute('href',lang!=='en'?h.replace(/^([^#]*)(#.*)?$/,function(_,p,x){return p+(p.indexOf('?')<0?'?':'&')+'lang='+lang+(x||'')}):h)});
  var T=document.querySelector('title');if(T){if(T._o===undefined)T._o=T.textContent;T.textContent=tr(T._o)||T._o}
  setLbl();
  if(box)box.setAttribute('aria-label',tr('Language')||'Language');
  document.dispatchEvent(new Event('svrlang'))}
 apply();
})();
