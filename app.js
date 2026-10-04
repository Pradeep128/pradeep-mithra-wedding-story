(() => {
'use strict';
const $ = s => document.querySelector(s);
const venue = 'https://www.google.com/maps/dir/?api=1&destination=' + encodeURIComponent('Anandha Inn, Sardar Vallabhbhai Patel Salai, Puducherry 605001');
document.querySelectorAll('.venue-map-link').forEach(a => a.href = venue);
let category = 'stay';
function showCategory(next) {
 category = ['stay','visit','eat'].includes(next) ? next : 'stay';
 document.querySelectorAll('[data-category]').forEach(b => b.setAttribute('aria-pressed',String(b.dataset.category === category)));
 $('#stay-panel').hidden = category !== 'stay'; $('#places-panel').hidden = category === 'stay'; $('#place-search').value = ''; renderPlaces();
}
function route() {
 const [raw, sub] = location.hash.slice(1).split('/');
 const page = ['home','events','rsvp','travel','photos'].includes(raw) ? raw : 'home';
 document.querySelectorAll('.view').forEach(v => v.hidden = v.id !== page);
 document.querySelectorAll('.navigation a').forEach(a => { if(a.hash === '#'+page) a.setAttribute('aria-current','page'); else a.removeAttribute('aria-current'); });
 if(page === 'travel') showCategory(sub || 'stay');
 document.title = 'Pradeep & Mithra · ' + ({home:'Our wedding',events:'Celebrate',rsvp:'RSVP',travel:'Pondy guide',photos:'Memories'}[page]);
 window.scrollTo({top:0,behavior:'instant'});
}
window.addEventListener('hashchange',route);
document.querySelectorAll('[data-category]').forEach(b => b.addEventListener('click',() => { history.replaceState(null,'','#travel/'+b.dataset.category); showCategory(b.dataset.category); }));
function renderPlaces() {
 const source = category === 'eat' ? spotsEat : spotsVisit;
 const query = $('#place-search').value.trim().toLocaleLowerCase();
 const matches = source.filter(p => p.name.toLocaleLowerCase().includes(query));
 $('#place-list').replaceChildren();
 matches.forEach((p,i) => {
  const a = document.createElement('a'); a.className='place-card'; a.href=p.link || 'https://www.google.com/maps/search/?api=1&query='+encodeURIComponent(p.name+', Puducherry'); a.target='_blank'; a.rel='noopener';
  const n = document.createElement('span'); n.className='place-number'; n.textContent=String(i+1).padStart(2,'0');
  const body = document.createElement('div'); const name=document.createElement('h3'); name.textContent=p.name; const note=document.createElement('p'); note.textContent=category === 'eat'?'A TABLE IN PONDY':'A LITTLE EXPLORING'; body.append(name,note);
  const arrow=document.createElement('span'); arrow.className='arrow'; arrow.textContent='↗'; arrow.setAttribute('aria-hidden','true'); a.append(n,body,arrow); $('#place-list').append(a);
 });
 $('#no-results').hidden=matches.length > 0;
}
$('#place-search').addEventListener('input',renderPlaces);
function tick(){ const t=Math.max(0,new Date('2026-11-22T06:30:00+05:30').getTime()-Date.now()); const values=[Math.floor(t/86400000),Math.floor(t/3600000)%24,Math.floor(t/60000)%60,Math.floor(t/1000)%60]; ['days','hours','minutes','seconds'].forEach((id,i)=>$('#'+id).textContent=String(values[i]).padStart(2,'0')); if(t===0) $('#countdown-label').textContent='OUR FOREVER BEGINS'; }
tick();setInterval(tick,1000);
const guests=$('#guests');
function step(n){guests.value=String(Math.min(9,Math.max(1,(Number(guests.value)||1)+n)));}
$('#minus').addEventListener('click',()=>step(-1));$('#plus').addEventListener('click',()=>step(1));
document.querySelectorAll('[name=attending]').forEach(r=>r.addEventListener('change',()=>{const no=r.value==='No'&&r.checked;$('#guest-field').hidden=no;guests.disabled=no;}));
$('#reply-form').addEventListener('submit',e=>{
 e.preventDefault(); const name=$('#guest-name'); name.value=name.value.trim(); if(!name.value){name.setCustomValidity('Please enter your name.');name.reportValidity();return;} name.setCustomValidity('');
 const form=e.currentTarget;if(!form.reportValidity())return;
 const attending=new FormData(form).get('attending');
 const url=new URL('https://docs.google.com/forms/d/e/1FAIpQLSeMmBYoA7tV-4Ei8VVz_lxfeEpiFuOSB6KzxsmBddifxaRsrw/viewform');
 url.searchParams.set('usp','pp_url');url.searchParams.set('entry.1663616517',name.value);url.searchParams.set('entry.1768421477',attending);url.searchParams.set('entry.1093209292',attending==='Yes'?guests.value:'0');url.searchParams.set('entry.1185465696',$('#notes').value.trim());
 window.open(url.href,'_blank','noopener,noreferrer');
});
$('#guest-name').addEventListener('input',e=>e.target.setCustomValidity(''));
const dialog=$('#photo-dialog');document.querySelectorAll('[data-photo]').forEach(b=>b.addEventListener('click',()=>{$('#large-photo').src=b.dataset.photo;$('#large-photo').alt=b.querySelector('img').alt;$('#photo-caption').textContent=b.dataset.caption;dialog.showModal();}));
$('.close-dialog').addEventListener('click',()=>dialog.close());dialog.addEventListener('click',e=>{if(e.target===dialog)dialog.close();});route();
})();