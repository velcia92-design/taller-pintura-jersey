/* Versión «cine»: convierte «Trabajos recientes» en un mazo de fotos que se baraja.
   Usa las mismas tarjetas de la portada, así los textos y las traducciones no cambian. */
(function(){
 var gal=document.querySelector('#gallery .gal');if(!gal)return;
 var cards=[].slice.call(gal.querySelectorAll('.job'));if(cards.length<2)return;
 var wrap=document.createElement('div');wrap.className='deckwrap';
 var deck=document.createElement('div');deck.className='deck';deck.setAttribute('role','group');deck.setAttribute('aria-roledescription','carousel');
 var ctl=document.createElement('div');ctl.className='deckctl';
 ctl.innerHTML='<button type="button" aria-label="Previous">←</button><output aria-live="polite"></output><button type="button" aria-label="Next">→</button>';
 cards.forEach(function(c){deck.appendChild(c)});
 wrap.appendChild(deck);wrap.appendChild(ctl);gal.replaceWith(wrap);
 var cur=0,n=cards.length,out=ctl.querySelector('output'),R=[-2,5,-7,9,-11,12];
 function pad(x){return(x<10?'0':'')+x}
 function lay(){cards.forEach(function(c,i){var k=(i-cur+n)%n;c.style.zIndex=n-k;
   c.style.transform='translate('+k*10+'px,'+k*8+'px) rotate('+R[k%R.length]+'deg) scale('+(1-k*.03)+')';c.style.opacity=k>3?0:1;
   c.setAttribute('aria-hidden',k?'true':'false')});out.textContent=pad(cur+1)+' / '+pad(n)}
 function go(d){if(d>0){var c=cards[cur];c.style.transform='translate(120%,-10%) rotate(24deg)';c.style.opacity=0;setTimeout(function(){cur=(cur+1)%n;lay()},260)}
  else{cur=(cur-1+n)%n;lay()}}
 var b=ctl.querySelectorAll('button');b[0].onclick=function(){go(-1)};b[1].onclick=function(){go(1)};
 var x0=null;deck.addEventListener('pointerdown',function(e){x0=e.clientX});
 deck.addEventListener('pointerup',function(e){if(x0===null)return;var dx=e.clientX-x0;x0=null;go(Math.abs(dx)>40&&dx>0?-1:1)});
 deck.tabIndex=0;deck.addEventListener('keydown',function(e){if(e.key==='ArrowRight')go(1);if(e.key==='ArrowLeft')go(-1)});
 lay();
})();
