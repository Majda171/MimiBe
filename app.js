const CZ_NAMEDAYS={"01-01": "Nový rok", "01-02": "Karina", "01-03": "Radmila", "01-04": "Diana", "01-05": "Dalimil", "01-06": "Tři králové", "01-07": "Vilma", "01-08": "Čestmír", "01-09": "Vladan", "01-10": "Břetislav", "01-11": "Bohdana", "01-12": "Pravoslav", "01-13": "Edita", "01-14": "Radovan", "01-15": "Alice", "01-16": "Ctirad", "01-17": "Drahoslav", "01-18": "Vladislav", "01-19": "Doubravka", "01-20": "Ilona", "01-21": "Běla", "01-22": "Slavomír", "01-23": "Zdeněk", "01-24": "Milena", "01-25": "Miloš", "01-26": "Zora", "01-27": "Ingrid", "01-28": "Otýlie", "01-29": "Zdislava", "01-30": "Robin", "01-31": "Marika", "02-01": "Hynek", "02-02": "Nela", "02-03": "Blažej", "02-04": "Jarmila", "02-05": "Dobromila", "02-06": "Vanda", "02-07": "Veronika", "02-08": "Milada", "02-09": "Apolena", "02-10": "Mojmír", "02-11": "Božena", "02-12": "Slavěna", "02-13": "Věnceslav", "02-14": "Valentýn", "02-15": "Jiřina", "02-16": "Ljuba", "02-17": "Miloslava", "02-18": "Gizela", "02-19": "Patrik", "02-20": "Oldřich", "02-21": "Lenka", "02-22": "Petr", "02-23": "Svatopluk", "02-24": "Matěj", "02-25": "Liliana", "02-26": "Dorota", "02-27": "Alexandr", "02-28": "Lumír", "02-29": "Horymír", "03-01": "Bedřich", "03-02": "Anežka", "03-03": "Kamil", "03-04": "Stela", "03-05": "Kazimír", "03-06": "Miroslav", "03-07": "Tomáš", "03-08": "Gabriela", "03-09": "Františka", "03-10": "Viktorie", "03-11": "Anděla", "03-12": "Řehoř", "03-13": "Růžena", "03-14": "Rút", "03-15": "Ida", "03-16": "Elena", "03-17": "Vlastimil", "03-18": "Eduard", "03-19": "Josef", "03-20": "Světlana", "03-21": "Radek", "03-22": "Leona", "03-23": "Ivona", "03-24": "Gabriel", "03-25": "Marián", "03-26": "Emanuel", "03-27": "Dita", "03-28": "Soňa", "03-29": "Taťána", "03-30": "Arnošt", "03-31": "Kvido", "04-01": "Hugo", "04-02": "Erika", "04-03": "Richard", "04-04": "Ivana", "04-05": "Miroslava", "04-06": "Vendula", "04-07": "Heřman", "04-08": "Ema", "04-09": "Dušan", "04-10": "Darja", "04-11": "Izabela", "04-12": "Julius", "04-13": "Aleš", "04-14": "Vincenc", "04-15": "Anastázie", "04-16": "Irena", "04-17": "Rudolf", "04-18": "Valérie", "04-19": "Rostislav", "04-20": "Marcela", "04-21": "Alexandra", "04-22": "Evženie", "04-23": "Vojtěch", "04-24": "Jiří", "04-25": "Marek", "04-26": "Oto", "04-27": "Jaroslav", "04-28": "Vlastislav", "04-29": "Robert", "04-30": "Blahoslav", "05-01": "Svátek práce", "05-02": "Zikmund", "05-03": "Alexej", "05-04": "Květoslav", "05-05": "Klaudie", "05-06": "Radoslav", "05-07": "Stanislav", "05-08": "Den vítězství", "05-09": "Ctibor", "05-10": "Blažena", "05-11": "Svatava", "05-12": "Pankrác", "05-13": "Servác", "05-14": "Bonifác", "05-15": "Žofie", "05-16": "Přemysl", "05-17": "Aneta", "05-18": "Nataša", "05-19": "Ivo", "05-20": "Zbyšek", "05-21": "Monika", "05-22": "Emil", "05-23": "Vladimír", "05-24": "Jana", "05-25": "Viola", "05-26": "Filip", "05-27": "Valdemar", "05-28": "Vilém", "05-29": "Maxmilián", "05-30": "Ferdinand", "05-31": "Kamila", "06-01": "Laura", "06-02": "Jarmil", "06-03": "Tamara", "06-04": "Dalibor", "06-05": "Dobroslav", "06-06": "Norbert", "06-07": "Iveta", "06-08": "Medard", "06-09": "Stanislava", "06-10": "Gita", "06-11": "Bruno", "06-12": "Antonie", "06-13": "Antonín", "06-14": "Roland", "06-15": "Vít", "06-16": "Zbyněk", "06-17": "Adolf", "06-18": "Milan", "06-19": "Leoš", "06-20": "Květa", "06-21": "Alois", "06-22": "Pavla", "06-23": "Zdeňka", "06-24": "Jan", "06-25": "Ivan", "06-26": "Adriana", "06-27": "Ladislav", "06-28": "Lubomír", "06-29": "Petr a Pavel", "06-30": "Šárka", "07-01": "Jaroslava", "07-02": "Patricie", "07-03": "Radomír", "07-04": "Prokop", "07-05": "Cyril a Metoděj", "07-06": "Mistr Jan Hus", "07-07": "Bohuslava", "07-08": "Nora", "07-09": "Drahoslava", "07-10": "Libuše", "07-11": "Olga", "07-12": "Bořek", "07-13": "Markéta", "07-14": "Karolína", "07-15": "Jindřich", "07-16": "Luboš", "07-17": "Martina", "07-18": "Drahomíra", "07-19": "Čeněk", "07-20": "Ilja", "07-21": "Vítězslav", "07-22": "Magdaléna", "07-23": "Libor", "07-24": "Kristýna", "07-25": "Jakub", "07-26": "Anna", "07-27": "Věroslav", "07-28": "Viktor", "07-29": "Marta", "07-30": "Bořivoj", "07-31": "Ignác", "08-01": "Oskar", "08-02": "Gustav", "08-03": "Miluše", "08-04": "Dominik", "08-05": "Kristián", "08-06": "Oldřiška", "08-07": "Lada", "08-08": "Soběslav", "08-09": "Roman", "08-10": "Vavřinec", "08-11": "Zuzana", "08-12": "Klára", "08-13": "Alena", "08-14": "Alan", "08-15": "Hana", "08-16": "Jáchym", "08-17": "Petra", "08-18": "Helena", "08-19": "Ludvík", "08-20": "Bernard", "08-21": "Johana", "08-22": "Bohuslav", "08-23": "Sandra", "08-24": "Bartoloměj", "08-25": "Radim", "08-26": "Luděk", "08-27": "Otakar", "08-28": "Augustýn", "08-29": "Evelína", "08-30": "Vladěna", "08-31": "Pavlína", "09-01": "Linda", "09-02": "Adéla", "09-03": "Bronislav", "09-04": "Jindřiška", "09-05": "Boris", "09-06": "Boleslav", "09-07": "Regína", "09-08": "Mariana", "09-09": "Daniela", "09-10": "Irma", "09-11": "Denisa", "09-12": "Marie", "09-13": "Lubor", "09-14": "Radka", "09-15": "Jolana", "09-16": "Ludmila", "09-17": "Naděžda", "09-18": "Kryštof", "09-19": "Zita", "09-20": "Oleg", "09-21": "Matouš", "09-22": "Darina", "09-23": "Berta", "09-24": "Jaromír", "09-25": "Zlata", "09-26": "Andrea", "09-27": "Jonáš", "09-28": "Václav", "09-29": "Michal", "09-30": "Jeroným", "10-01": "Igor", "10-02": "Olívie", "10-03": "Bohumil", "10-04": "František", "10-05": "Eliška", "10-06": "Hanuš", "10-07": "Justýna", "10-08": "Věra", "10-09": "Štefan", "10-10": "Marina", "10-11": "Andrej", "10-12": "Marcel", "10-13": "Renáta", "10-14": "Agáta", "10-15": "Tereza", "10-16": "Havel", "10-17": "Hedvika", "10-18": "Lukáš", "10-19": "Michaela", "10-20": "Vendelín", "10-21": "Brigita", "10-22": "Sabina", "10-23": "Teodor", "10-24": "Nina", "10-25": "Beáta", "10-26": "Erik", "10-27": "Šarlota", "10-28": "Vznik Československa", "10-29": "Silvie", "10-30": "Tadeáš", "10-31": "Štěpánka", "11-01": "Felix", "11-02": "Památka zesnulých", "11-03": "Hubert", "11-04": "Karel", "11-05": "Miriam", "11-06": "Liběna", "11-07": "Saskie", "11-08": "Bohumír", "11-09": "Bohdan", "11-10": "Evžen", "11-11": "Martin", "11-12": "Benedikt", "11-13": "Tibor", "11-14": "Sáva", "11-15": "Leopold", "11-16": "Otmar", "11-17": "Mahulena", "11-18": "Romana", "11-19": "Alžběta", "11-20": "Nikola", "11-21": "Albert", "11-22": "Cecílie", "11-23": "Klement", "11-24": "Emílie", "11-25": "Kateřina", "11-26": "Artur", "11-27": "Xenie", "11-28": "René", "11-29": "Zina", "11-30": "Ondřej", "12-01": "Iva", "12-02": "Blanka", "12-03": "Svatoslav", "12-04": "Barbora", "12-05": "Jitka", "12-06": "Mikuláš", "12-07": "Ambrož", "12-08": "Květoslava", "12-09": "Vratislav", "12-10": "Julie", "12-11": "Dana", "12-12": "Simona", "12-13": "Lucie", "12-14": "Lýdie", "12-15": "Radana", "12-16": "Albína", "12-17": "Daniel", "12-18": "Miloslav", "12-19": "Ester", "12-20": "Dagmar", "12-21": "Natálie", "12-22": "Šimon", "12-23": "Vlasta", "12-24": "Adam a Eva", "12-25": "1. svátek vánoční", "12-26": "Štěpán", "12-27": "Žaneta", "12-28": "Bohumila", "12-29": "Judita", "12-30": "David", "12-31": "Silvestr"};
const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];
const store = {
  get(key, fallback){ try { return JSON.parse(localStorage.getItem(key)) ?? fallback; } catch { return fallback; } },
  set(key, value){ localStorage.setItem(key, JSON.stringify(value)); }
};

const defaults = {
  momName: '', dueDate: '', babyName: '', theme: 'neutral', events: [], notes: [],
  equipment: ['Postýlka','Kočárek','Autosedačka','Plenky','Body','Overaly'],
  hospital: ['Doklady','Přezůvky','Noční košile','Hygiena','Oblečení pro miminko'],
  equipmentDone: [], hospitalDone: []
};
let data = {...defaults, ...store.get('pregnancyPlanner', {})};
let currentChecklist = 'equipment';

function persist(){ store.set('pregnancyPlanner', data); }
function fmtDate(date){ return new Intl.DateTimeFormat('cs-CZ',{day:'numeric',month:'numeric',year:'numeric'}).format(date); }
function monthShort(date){ return new Intl.DateTimeFormat('cs-CZ',{month:'short'}).format(date).replace('.','').toUpperCase(); }
function daysBetween(a,b){ return Math.ceil((b-a)/(1000*60*60*24)); }

function updatePregnancy(){
  const today = new Date(); today.setHours(0,0,0,0);
  if(!data.dueDate){
    $('#weekNumber').textContent='—'; $('#weekDay').textContent='—'; $('#daysLeft').textContent='—';
    $('#dueDateLabel').textContent='nastav termín'; $('#progressPercent').textContent='0 %';
    $('#progressRing').style.background='conic-gradient(var(--accent) 0deg,var(--soft) 0deg)';
    return;
  }
  const due = new Date(data.dueDate+'T00:00:00');
  const start = new Date(due); start.setDate(start.getDate()-280);
  let elapsed = Math.floor((today-start)/(1000*60*60*24));
  elapsed = Math.max(0, Math.min(280, elapsed));
  const fullWeeks = Math.floor(elapsed/7); const day = elapsed%7;
  const displayWeek = Math.min(40, fullWeeks+1);
  const left = Math.max(0, daysBetween(today,due));
  const pct = Math.round((elapsed/280)*100);
  $('#weekNumber').textContent=displayWeek+'.'; $('#weekDay').textContent=`${fullWeeks}+${day}`;
  $('#daysLeft').textContent=left; $('#dueDateLabel').textContent=fmtDate(due); $('#progressPercent').textContent=pct+' %';
  $('#progressRing').style.background=`conic-gradient(var(--accent) ${pct*3.6}deg,var(--soft) ${pct*3.6}deg)`;
}

function renderEvents(){
  data.events.sort((a,b)=>new Date(a.date+'T'+(a.time||'00:00'))-new Date(b.date+'T'+(b.time||'00:00')));
  const now = new Date();
  const next = data.events.find(e=>new Date(e.date+'T'+(e.time||'23:59'))>=now) || data.events[0];
  if(next){ const d=new Date(next.date+'T00:00:00'); $('#eventDay').textContent=d.getDate(); $('#eventMonth').textContent=monthShort(d); $('#eventTitle').textContent=next.title; $('#eventWhen').textContent=`${fmtDate(d)}${next.time?' v '+next.time:''}`; $('#eventPlace').textContent=next.place||''; }
  else { $('#eventDay').textContent='—'; $('#eventMonth').textContent='---'; $('#eventTitle').textContent='Zatím nic naplánováno'; $('#eventWhen').textContent='Přidej první kontrolu'; $('#eventPlace').textContent=''; }
  $('#eventsList').innerHTML=data.events.length?data.events.map((e,i)=>`<article class="card item-card"><strong>${escapeHtml(e.title)}</strong><div><small>${fmtDate(new Date(e.date+'T00:00:00'))}${e.time?' • '+e.time:''}${e.place?' • '+escapeHtml(e.place):''}</small></div><button class="text-btn" onclick="removeEvent(${i})">Smazat</button></article>`).join(''):'<div class="muted">Zatím žádné události.</div>';
}
function removeEvent(i){ data.events.splice(i,1); persist(); renderEvents(); }
window.removeEvent=removeEvent;

function renderNotes(){
  const arr=[...data.notes].reverse();
  $('#notesList').innerHTML=arr.length?arr.map((n,idx)=>`<article class="card item-card"><small>${n.date}</small><div>${escapeHtml(n.text)}</div><button class="text-btn" onclick="removeNote(${data.notes.length-1-idx})">Smazat</button></article>`).join(''):'<div class="muted">Zatím žádné poznámky.</div>';
  $('#latestNote').textContent=arr[0]?`${arr[0].date} — ${arr[0].text}`:'Zatím žádná poznámka.';
}
function removeNote(i){ data.notes.splice(i,1); persist(); renderNotes(); }
window.removeNote=removeNote;

function escapeHtml(str=''){ return str.replace(/[&<>'"]/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[m])); }

function updateChecklistSummary(){
  [['equipment','equipmentCount','equipmentBar'],['hospital','hospitalCount','hospitalBar']].forEach(([key,countId,barId])=>{
    const total=data[key].length, done=data[key+'Done'].length; $('#'+countId).textContent=`${done} / ${total}`; $('#'+barId).style.width=(total?done/total*100:0)+'%';
  });
}
function openChecklist(key){ currentChecklist=key; $('#checklistTitle').textContent=key==='equipment'?'Výbavička':'Do porodnice'; renderChecklistDialog(); $('#checklistDialog').showModal(); }
function renderChecklistDialog(){
  const list=data[currentChecklist], done=data[currentChecklist+'Done'];
  $('#checklistItems').innerHTML=list.map((item,i)=>`<div class="checklist-item"><label><input type="checkbox" data-check="${i}" ${done.includes(i)?'checked':''}><span>${escapeHtml(item)}</span></label><button class="delete-checklist-item" data-delete-check="${i}" aria-label="Smazat položku">✕</button></div>`).join('')||'<div class="muted">Zatím prázdné.</div>';
  $$('[data-check]').forEach(el=>el.addEventListener('change',()=>{
    const i=+el.dataset.check; const d=data[currentChecklist+'Done'];
    if(el.checked&&!d.includes(i)) d.push(i); if(!el.checked) data[currentChecklist+'Done']=d.filter(x=>x!==i);
    persist(); updateChecklistSummary();
  }));
  $$('[data-delete-check]').forEach(btn=>btn.addEventListener('click',()=>{
    const i=+btn.dataset.deleteCheck;
    if(!confirm(i18nMsg('Smazat tuto položku z checklistu?','Delete this checklist item?'))) return;
    data[currentChecklist].splice(i,1);
    data[currentChecklist+'Done']=data[currentChecklist+'Done']
      .filter(x=>x!==i)
      .map(x=>x>i?x-1:x);
    persist();
    renderChecklistDialog();
    updateChecklistSummary();
  }));
}

function applyTheme(){
  const theme=(data && ['neutral','pink','blue'].includes(data.theme)) ? data.theme : 'neutral';

  document.body.dataset.theme=theme;
  document.documentElement.dataset.theme=theme;

  const themeSelect=document.querySelector('#themeSelect');
  if(themeSelect && themeSelect.value!==theme) themeSelect.value=theme;

  document.querySelectorAll('[data-theme-choice]').forEach(btn=>{
    btn.classList.toggle('active', btn.dataset.themeChoice===theme);
    btn.setAttribute('aria-pressed', btn.dataset.themeChoice===theme ? 'true' : 'false');
  });

  const babyFiles={
    neutral:'assets/baby-neutral.webp',
    pink:'assets/baby-pink.webp',
    blue:'assets/baby-blue.webp'
  };

  const pregnancyBaby=document.querySelector('#pregnancyBabyIllustration');
  if(pregnancyBaby) pregnancyBaby.src=babyFiles[theme];

  const welcomeBaby=document.querySelector('.welcome-baby-art');
  if(welcomeBaby && !localStorage.getItem('mimibeOnboardingCompleted')){
    welcomeBaby.src=babyFiles.neutral;
  }

  try{
    localStorage.setItem('pregnancyPlanner',JSON.stringify(data));
  }catch(e){}
}
function nav(name){
  $$('.view').forEach(v=>v.classList.remove('active')); $('#view-'+name).classList.add('active');
  $$('.nav-btn').forEach(b=>b.classList.toggle('active',b.dataset.nav===name)); window.scrollTo({top:0,behavior:'smooth'});
}
$$('[data-nav]').forEach(b=>b.addEventListener('click',()=>nav(b.dataset.nav)));
$$('[data-action="equipment"]').forEach(b=>b.addEventListener('click',()=>openChecklist('equipment')));
$$('[data-action="hospital"]').forEach(b=>b.addEventListener('click',()=>openChecklist('hospital')));

$('#saveEvent').addEventListener('click',()=>{ const title=$('#eventTitleInput').value.trim(),date=$('#eventDateInput').value;if(!title||!date)return alert(i18nMsg('Vyplň název a datum.','Please enter a title and date.'));data.events.push({title,date,time:$('#eventTimeInput').value,place:$('#eventPlaceInput').value.trim()});persist();renderEvents();$('#eventTitleInput').value='';$('#eventDateInput').value='';$('#eventTimeInput').value='';$('#eventPlaceInput').value=''; });
$('#saveNote').addEventListener('click',()=>{ const text=$('#noteInput').value.trim();if(!text)return;data.notes.push({text,date:new Intl.DateTimeFormat('cs-CZ',{day:'numeric',month:'long'}).format(new Date())});persist();renderNotes();$('#noteInput').value=''; });
$('#saveSettings').addEventListener('click',()=>{ data.momName=$('#momName')?.value.trim()||'';data.babyName=$('#babyNameInput').value.trim();data.dueDate=$('#dueDateInput').value;data.theme=$('#themeSelect').value;persist();applyTheme();renderBabyName();updatePregnancy();nav('home'); });
$('#deleteProfile').addEventListener('click',async()=>{
  const en=(localStorage.getItem('pregnancyPlannerLanguage')==='en');
  const ok=confirm(en
    ? 'Do you really want to delete your profile and ALL data? This cannot be undone.'
    : 'Opravdu chceš smazat profil a VŠECHNA data? Tuto akci nelze vrátit zpět.');
  if(!ok)return;
  try{ if(photoDB?.db) await photoDB.clear(); }catch(e){ console.warn(e); }
  localStorage.removeItem('pregnancyPlanner');
  localStorage.removeItem('pregnancyPlannerLanguage');
  localStorage.removeItem('mimibeOnboardingCompleted');
  data=JSON.parse(JSON.stringify(defaults));
  selectedPhotoData='';
  alert(en ? 'Your profile and all data have been deleted.' : 'Profil a všechna data byla smazána.');
  location.reload();
});

$('#closeDialog').addEventListener('click',()=>$('#checklistDialog').close());
$('#addChecklistItem').addEventListener('click',()=>{ const input=$('#newChecklistItem'); const text=input.value.trim(); if(!text)return; data[currentChecklist].push(text); input.value=''; persist(); renderChecklistDialog(); updateChecklistSummary(); });

function renderBabyName(){
  $('#babyNameLabel').textContent=data.babyName || 'Zatím bez jména';
}

function renderToday(){
  const now=new Date();
  const lang=localStorage.getItem('pregnancyPlannerLanguage')||'cs';
  const locale=lang==='en'?'en-GB':'cs-CZ';
  $('#todayDate').textContent=new Intl.DateTimeFormat(locale,{weekday:'long',day:'numeric',month:'long',year:'numeric'}).format(now);
  const key=String(now.getMonth()+1).padStart(2,'0')+'-'+String(now.getDate()).padStart(2,'0');
  const name=CZ_NAMEDAYS[key]||'';
  $('#namedayLabel').textContent=lang==='en'
    ? (name ? 'Czech name day: '+name : '')
    : ('Svátek dnes: '+(name||'—'));
}

// Fotky ukládáme do IndexedDB, protože localStorage je pro fotografie příliš malý.
const photoDB={
  db:null,
  open(){return new Promise((resolve,reject)=>{const req=indexedDB.open('pregnancyPlannerPhotos',1);req.onupgradeneeded=()=>{const db=req.result;if(!db.objectStoreNames.contains('photos'))db.createObjectStore('photos',{keyPath:'id',autoIncrement:true});};req.onsuccess=()=>{this.db=req.result;resolve(this.db)};req.onerror=()=>reject(req.error);});},
  add(photo){return new Promise((resolve,reject)=>{const tx=this.db.transaction('photos','readwrite');const req=tx.objectStore('photos').add(photo);req.onsuccess=()=>resolve(req.result);req.onerror=()=>reject(req.error);});},
  all(){return new Promise((resolve,reject)=>{const tx=this.db.transaction('photos','readonly');const req=tx.objectStore('photos').getAll();req.onsuccess=()=>resolve(req.result||[]);req.onerror=()=>reject(req.error);});},
  remove(id){return new Promise((resolve,reject)=>{const tx=this.db.transaction('photos','readwrite');const req=tx.objectStore('photos').delete(id);req.onsuccess=()=>resolve();req.onerror=()=>reject(req.error);});},
  clear(){return new Promise((resolve,reject)=>{if(!this.db)return resolve();const tx=this.db.transaction('photos','readwrite');const req=tx.objectStore('photos').clear();req.onsuccess=()=>resolve();req.onerror=()=>reject(req.error);});}
};
let selectedPhotoData='';
let currentPhotoFilter='all';

function compressImage(file,maxSide=1200,quality=.82){
  return new Promise((resolve,reject)=>{
    const reader=new FileReader();
    reader.onload=()=>{
      const img=new Image();
      img.onload=()=>{
        let w=img.width,h=img.height;
        const scale=Math.min(1,maxSide/Math.max(w,h));w=Math.round(w*scale);h=Math.round(h*scale);
        const canvas=document.createElement('canvas');canvas.width=w;canvas.height=h;
        canvas.getContext('2d').drawImage(img,0,0,w,h);
        resolve(canvas.toDataURL('image/jpeg',quality));
      };
      img.onerror=reject;img.src=reader.result;
    };
    reader.onerror=reject;reader.readAsDataURL(file);
  });
}

const photoCategoryLabels={
  belly:'Bříško',ultrasound:'Ultrazvuk',pregnancy:'Těhotenství',preparations:'Přípravy a výbavička',
  family:'Rodina',baby:'Miminko',firsts:'První okamžiky',other:'Ostatní'
};
function photoCategoryLabel(type){return photoCategoryLabels[type]||'';}

async function renderPhotos(){
  if(!photoDB.db)return;
  let photos=await photoDB.all();
  photos.sort((a,b)=>(b.date||'').localeCompare(a.date||'') || b.id-a.id);
  if(currentPhotoFilter==='none') photos=photos.filter(p=>!p.type);
  else if(currentPhotoFilter!=='all') photos=photos.filter(p=>p.type===currentPhotoFilter);
  $('#photosGrid').innerHTML=photos.length?photos.map(p=>{
    const category=photoCategoryLabel(p.type);
    return `<article class="photo-card"><img src="${p.image}" alt="${category?'Vzpomínka – '+escapeHtml(category):'Vzpomínka'}"><button class="delete-photo" onclick="deletePhoto(${p.id})" aria-label="Smazat fotku">✕</button><div class="photo-card-copy">${category?`<strong>${escapeHtml(category)}</strong>`:''}<small>${p.date?fmtDate(new Date(p.date+'T00:00:00')):''}${p.caption?' • '+escapeHtml(p.caption):''}</small></div></article>`;
  }).join(''):'<div class="card empty-photos">Zatím tu žádná fotka není. Přidej první vzpomínku ♡</div>';
}
async function deletePhoto(id){if(!confirm(i18nMsg('Smazat tuto fotku?','Delete this photo?')))return;await photoDB.remove(id);renderPhotos();}
window.deletePhoto=deletePhoto;

$('#photoFileInput').addEventListener('change',async e=>{
  const file=e.target.files?.[0];if(!file)return;
  try{selectedPhotoData=await compressImage(file);$('#photoPreview').src=selectedPhotoData;$('#photoPreviewWrap').classList.remove('hidden');}
  catch{alert(i18nMsg('Fotku se nepodařilo načíst.','The photo could not be loaded.'));}
});
$('#savePhoto').addEventListener('click',async()=>{
  if(!selectedPhotoData)return alert(i18nMsg('Nejdřív vyber fotku.','Please choose a photo first.'));
  await photoDB.add({type:$('#photoTypeInput').value,date:$('#photoDateInput').value||new Date().toISOString().slice(0,10),caption:$('#photoCaptionInput').value.trim(),image:selectedPhotoData,createdAt:Date.now()});
  selectedPhotoData='';$('#photoFileInput').value='';$('#photoCaptionInput').value='';$('#photoPreview').src='';$('#photoPreviewWrap').classList.add('hidden');
  renderPhotos();
});
$$('[data-photo-filter]').forEach(btn=>btn.addEventListener('click',()=>{currentPhotoFilter=btn.dataset.photoFilter;$$('[data-photo-filter]').forEach(b=>b.classList.toggle('active',b===btn));renderPhotos();}));

async function init(){
  applyTheme();
  $('#babyNameInput').value=data.babyName||'';
  $('#dueDateInput').value=data.dueDate;
  $('#themeSelect').value=data.theme;
  $('#photoDateInput').value=new Date().toISOString().slice(0,10);
  renderToday();renderBabyName();updatePregnancy();renderEvents();renderNotes();updateChecklistSummary();
  try{await photoDB.open();await renderPhotos();}catch(e){console.warn('Fotogalerie není dostupná',e);}
}
init();


// v6 — automatická prezentace vzpomínek
let memoryTimer=null, memoryIndex=0;
function photoSrc(p){return p?.image||p?.dataUrl||p?.src||p?.url||p?.photo||'';}
async function sortedPhotos(){const photos=photoDB.db ? await photoDB.all() : []; return photos.filter(p=>photoSrc(p)).sort((a,b)=>String(a.date||'').localeCompare(String(b.date||'')));}
function showMemoryFrame(list){
  if(!list.length) return;
  const p=list[memoryIndex%list.length];
  const img=$('#memoryImage'); img.style.opacity='0';
  setTimeout(()=>{ img.src=photoSrc(p); $('#memoryCaption').textContent=[p.date||'',p.caption||''].filter(Boolean).join(' · '); $('#memoryCounter').textContent=`${memoryIndex%list.length+1} / ${list.length}`; img.style.opacity='1'; },250);
}
async function playMemory(){
  const list=await sortedPhotos(); if(!list.length){alert(i18nMsg('Nejdřív přidej alespoň jednu fotku.','Please add at least one photo first.'));return;}
  memoryIndex=0; {const d=document.querySelector('#memoryDialog'); if(d?.showModal)d.showModal(); else d?.setAttribute('open','');} showMemoryFrame(list);
  clearInterval(memoryTimer); memoryTimer=setInterval(()=>{memoryIndex++; if(memoryIndex>=list.length) memoryIndex=0; showMemoryFrame(list)},2400);
}
document.addEventListener('click',e=>{if(e.target.closest('#createMemory'))playMemory();});
document.addEventListener('click',e=>{if(e.target.closest('#closeMemory')){clearInterval(memoryTimer);const d=document.querySelector('#memoryDialog');if(d?.close)d.close();else d?.removeAttribute('open');}});

async function exportMemoryWebM(){
  const list=await sortedPhotos(); if(!list.length){alert(i18nMsg('Nejdřív přidej alespoň jednu fotku.','Please add at least one photo first.'));return;}
  if(!window.MediaRecorder){alert(i18nMsg('Tento prohlížeč zatím export videa nepodporuje.','This browser does not support video export yet.'));return;}
  const canvas=document.createElement('canvas'); canvas.width=720; canvas.height=1280; const ctx=canvas.getContext('2d');
  const stream=canvas.captureStream(30); const chunks=[]; let rec;
  try{rec=new MediaRecorder(stream,{mimeType:'video/webm;codecs=vp8'});}catch(e){rec=new MediaRecorder(stream);}
  rec.ondataavailable=e=>{if(e.data.size)chunks.push(e.data)};
  rec.onstop=()=>{const blob=new Blob(chunks,{type:'video/webm'});const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download='nase-vzpominky.webm';a.click();setTimeout(()=>URL.revokeObjectURL(a.href),2000)};
  rec.start();
  for(const p of list){
    const im=new Image(); im.src=photoSrc(p); await new Promise(r=>{im.onload=r;im.onerror=r});
    for(let f=0;f<60;f++){
      ctx.fillStyle='#f7f3ed';ctx.fillRect(0,0,720,1280);
      const scale=Math.min(650/im.width,930/im.height); const w=im.width*scale,h=im.height*scale;
      ctx.drawImage(im,(720-w)/2,135,w,h);
      ctx.fillStyle='#5c5148';ctx.textAlign='center';ctx.font='30px sans-serif';ctx.fillText(p.caption||'Naše vzpomínky ♡',360,1120);
      ctx.font='22px sans-serif';ctx.fillText(p.date||'',360,1160);
      await new Promise(r=>setTimeout(r,33));
    }
  }
  rec.stop();
}
document.addEventListener('click',e=>{if(e.target.closest('#exportMemory'))exportMemoryWebM();});


// v8 — personal greeting
function renderMomName(){
  const n=(data.momName||'').trim();
  const g=$('#greetingName'); if(g) g.textContent=n||'maminko';
  const input=$('#momName'); if(input && document.activeElement!==input) input.value=n;
}
$('#momName')?.addEventListener('input',e=>{data.momName=e.target.value;persist();renderMomName();});
renderMomName();


// Center + opens a new note
document.addEventListener('click',e=>{
  if(e.target.closest('#quickNotePlus')){
    nav('notes');
    setTimeout(()=>{const t=document.querySelector('#noteText,#view-notes textarea');if(t)t.focus();},100);
  }
});


// v14 — poslední nahraná fotografie na úvodní stránce
async function renderLastMemory(){
  const empty = document.querySelector('#lastMemoryEmpty');
  const content = document.querySelector('#lastMemoryContent');
  const img = document.querySelector('#lastMemoryImage');
  const dateEl = document.querySelector('#lastMemoryDate');
  const cap = document.querySelector('#lastMemoryCaption');
  if(!empty || !content || !img) return;

  let photos = [];
  try {
    photos = photoDB?.db ? await photoDB.all() : [];
  } catch(e) {
    photos = [];
  }

  const valid = (photos || []).filter(p => photoSrc(p));
  if(!valid.length){
    empty.hidden = false;
    content.hidden = true;
    return;
  }

  valid.sort((a,b)=>{
    const da = new Date(a.createdAt || a.date || 0).getTime();
    const db = new Date(b.createdAt || b.date || 0).getTime();
    return db - da;
  });

  const p = valid[0];
  img.src = photoSrc(p);
  dateEl.textContent = p.date || '';
  dateEl.style.display = p.date ? '' : 'none';
  cap.textContent = p.caption || p.note || p.title || '';
  cap.style.display = cap.textContent ? '' : 'none';
  empty.hidden = true;
  content.hidden = false;
}

document.addEventListener('click', e=>{
  if(e.target.closest('#lastMemoryCard')) nav('photos');
});
document.addEventListener('keydown', e=>{
  if((e.key==='Enter' || e.key===' ') && e.target.closest('#lastMemoryCard')){
    e.preventDefault();
    nav('photos');
  }
});

// Refresh after startup and after photo-save clicks.
setTimeout(renderLastMemory, 400);
document.addEventListener('click', e=>{
  if(e.target.closest('#savePhoto, #addPhoto, [data-save-photo]')){
    setTimeout(renderLastMemory, 500);
  }
});

// v16 — inline SVG icons so heart accents follow theme color
async function inlineAppIcons(){
  const imgs=[...document.querySelectorAll('img[data-app-icon]')];
  for(const img of imgs){
    try{
      const res=await fetch(img.src);
      const txt=await res.text();
      const wrap=document.createElement('span');
      wrap.className='app-svg-icon';
      wrap.innerHTML=txt;
      const svg=wrap.firstElementChild;
      if(svg){svg.setAttribute('width','100%');svg.setAttribute('height','100%');svg.style.setProperty('--icon-accent','var(--icon-accent)');}
      img.replaceWith(wrap);
    }catch(e){}
  }
}
setTimeout(inlineAppIcons,50);

// v19 — Czech / English language system
const I18N={
  cs:{
    exact:{},
    keyed:{
      "settings.languageLabel":"Jazyk aplikace",
      "settings.languageTitle":"Jazyk"
    }
  },
  en:{
    keyed:{
      "settings.languageLabel":"App language",
      "settings.languageTitle":"Language"
    },
    exact:{
      "Domů":"Home","Kalendář":"Calendar","Checklisty":"Checklists","Nastavení":"Settings",
      "Vzpomínky":"Memories","Poslední vzpomínka":"Latest memory",
      "Zatím tu nemáš žádnou vzpomínku. Přidej první fotku ♡":"No memories yet. Add your first photo ♡",
      "Ahoj, maminko":"Hi, mama","Ahoj,":"Hi,",
      "Tvoje těhotenství":"Your pregnancy","Termín porodu":"Due date",
      "Do termínu zbývá":"Until your due date","dní":"days","týdnů":"weeks",
      "Jméno miminka":"Baby's name","Tvoje jméno":"Your name",
      "Výbavička":"Baby essentials","Do porodnice":"Hospital bag",
      "Poznámky":"Notes","Přidat poznámku":"Add note","Uložit":"Save",
      "Přidat událost":"Add event","Události":"Events","Název":"Title",
      "Datum":"Date","Čas":"Time","Poznámka":"Note",
      "Upozornění":"Notifications","Den předem":"One day before",
      "Ráno v den události":"Morning of the event",
      "Přidat vzpomínku":"Add memory","Přidat fotku":"Add photo",
      "Vybrat fotku":"Choose photo","Popisek":"Caption",
      "Vzpomínkové video":"Memory video","Vytvořit video ♡":"Create video ♡",
      "Vytvořit video":"Create video",
      "Z fotek vytvoříš video s jemnými přechody. V Android verzi si budeš moct vybrat i vlastní hudbu z telefonu.":"Turn your photos into a video with gentle transitions. In the Android version, you'll also be able to choose your own music from your phone.",
      "Profil":"Profile","Vzhled":"Appearance","O aplikaci":"About the app",
      "Data a soukromí":"Data & privacy","Podpořit vývoj":"Support development",
      "Aplikace je zdarma. Pokud ti dělá radost, můžeš její další vývoj dobrovolně podpořit.":"The app is free. If you enjoy it, you can voluntarily support its further development.",
      "Odkaz doplníme později":"Link coming later",
      "Smazat profil":"Delete profile","Smazat všechna data":"Delete all data",
      "Změna je nevratná.":"This action cannot be undone.",
      "Česky":"Czech","Jazyk aplikace":"App language","Jazyk":"Language",
      "Neutrální":"Neutral","Růžová":"Pink","Modrá":"Blue",
      "Dnes":"Today","Zpět":"Back","Další":"Next","Hotovo":"Done",
      "Upravit":"Edit","Smazat":"Delete","Přidat":"Add",
      "Vyhledat":"Search","Hudba":"Music","Bez hudby":"No music",
      "Lékař / kontrola":"Doctor / check-up","Miminko":"Baby",
      "Ultrazvuk":"Ultrasound","Bříško":"Bump","Rodina":"Family"
    }
  }
};
let appLanguage=localStorage.getItem('pregnancyPlannerLanguage')||'';

function translateTextNodes(root=document.body){
  if(appLanguage!=='en') return;
  const dict=I18N.en.exact;
  const walker=document.createTreeWalker(root,NodeFilter.SHOW_TEXT);
  const nodes=[];
  while(walker.nextNode()) nodes.push(walker.currentNode);
  nodes.forEach(n=>{
    const raw=n.nodeValue, trimmed=raw.trim();
    if(dict[trimmed]){
      n.nodeValue=raw.replace(trimmed,dict[trimmed]);
    }
  });
}
function applyLanguage(lang){
  appLanguage=lang==='en'?'en':'cs';
  localStorage.setItem('pregnancyPlannerLanguage',appLanguage);
  document.documentElement.lang=appLanguage;
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const key=el.dataset.i18n;
    const val=I18N[appLanguage]?.keyed?.[key];
    if(val)el.textContent=val;
  });
  if(appLanguage==='en') translateTextNodes();
  document.querySelectorAll('[data-set-language]').forEach(b=>b.classList.toggle('active',b.dataset.setLanguage===appLanguage));
  const splash=document.querySelector('#languageSplash'); if(splash)splash.hidden=true;
}
function initLanguage(){
  const splash=document.querySelector('#languageSplash');
  if(!appLanguage){if(splash)splash.hidden=false;}
  else applyLanguage(appLanguage);
}
document.addEventListener('click',e=>{
  const first=e.target.closest('[data-language-choice]');
  if(first)applyLanguage(first.dataset.languageChoice);
  const set=e.target.closest('[data-set-language]');
  if(set){
    const next=set.dataset.setLanguage;
    // Reload guarantees all dynamically rendered labels switch cleanly both directions.
    localStorage.setItem('pregnancyPlannerLanguage',next);
    location.reload();
  }
});
setTimeout(initLanguage,0);

// v20 — localized MimiBe welcome subtitle
function localizeMimiBeBrand(lang){
  const sub=document.querySelector('#welcomeAppSubtitle');
  if(sub) sub.textContent=lang==='en' ? 'Pregnancy • Baby • Memories' : 'Těhotenství • Miminko • Vzpomínky';
}
document.addEventListener('click',e=>{
  const choice=e.target.closest('[data-language-choice]');
  if(choice) localizeMimiBeBrand(choice.dataset.languageChoice);
});
setTimeout(()=>localizeMimiBeBrand(localStorage.getItem('pregnancyPlannerLanguage')||'cs'),0);

// v60 — single robust CZ/EN localization system
const MIMIBE_EN = {"Těhotenský plánovač": "Pregnancy Planner", "Vyberte jazyk": "Choose language", "Česky": "Czech", "Ahoj,": "Hi,", "maminko": "Mum", "Krásný den! 🌿": "Have a lovely day! 🌿", "Svátek dnes: načítám…": "Name day today: loading…", "Naše miminko": "Our baby", "Zatím bez jména": "No name yet", "Upravit": "Edit", "Jsi ve": "You're in", "týdnu": "week", "Do termínu zbývá": "Until your due date", "dní": "days", "Termín porodu:": "Due date:", "těhotenství": "pregnancy", "Další událost": "Next event", "Zatím nic naplánováno": "Nothing planned yet", "Přidej první kontrolu": "Add your first appointment", "Rychlý přístup": "Quick access", "Kalendář": "Calendar", "Výbavička": "Baby essentials", "Do porodnice": "Hospital bag", "Poznámky": "Notes", "Fotky": "Photos", "Checklisty": "Checklists", "Tvoje poznámky": "Your notes", "Zobrazit vše": "View all", "Zatím žádná poznámka.": "No notes yet.", "Přidat událost": "Add event", "Uložit poznámku": "Save note", "Moje fotky": "My photos", "Kategorie": "Category", "(volitelné)": "(optional)", "Bříško": "Bump", "Ultrazvuk": "Ultrasound", "Těhotenství": "Pregnancy", "Přípravy a výbavička": "Getting ready & essentials", "Rodina": "Family", "Miminko": "Baby", "První okamžiky": "First moments", "Ostatní": "Other", "Datum": "Date", "Fotka": "Photo", "Vybrat nebo vyfotit": "Choose or take a photo", "JPG, PNG nebo fotka z fotoaparátu": "JPG, PNG or a photo from your camera", "Uložit vzpomínku": "Save memory", "Vše": "All", "Přípravy": "Getting ready", "Vzpomínkové video": "Memory video", "Vytvořit video ♡": "Create video ♡", "Z fotek vytvoříš video s jemnými přechody. V Android verzi si budeš moct vybrat i vlastní hudbu z telefonu.": "Turn your photos into a video with gentle transitions. In the Android version, you will also be able to choose your own music from your phone.", "Vytvořit video": "Create video", "Nastavení": "Settings", "Profil": "Profile", "Tvoje jméno": "Your name", "Jméno miminka": "Baby's name", "Můžeš nechat prázdné a doplnit později.": "You can leave this blank and fill it in later.", "Termín porodu": "Due date", "Barevná varianta": "Colour theme", "Neutrální": "Neutral", "Růžová": "Pink", "Modrá": "Baby blue", "Uložit": "Save", "Jazyk aplikace": "App language", "Jazyk": "Language", "O aplikaci": "About the app", "Podpořit vývoj": "Support development", "Aplikace je zdarma. Pokud ti dělá radost, můžeš její další vývoj dobrovolně podpořit.": "The app is free. If you enjoy it, you can voluntarily support its further development.", "Odkaz doplníme později": "Link coming later", "Data a soukromí": "Data & privacy", "Smazat profil": "Delete profile", "Tímto smažeš všechna data aplikace – termín porodu, jméno, události, poznámky, checklisty i uložené fotky.": "This will delete all app data – your due date, name, events, notes, checklists and saved photos.", "Tato akce je nevratná.": "This action cannot be undone.", "Smazat profil a všechna data": "Delete profile and all data", "Domů": "Home", "Checklist": "Checklist", "Přidat": "Add", "Naše vzpomínky ♡": "My memories ♡", "Vzpomínka": "Memory", "Náhled fotky": "Photo preview", "Název události": "Event title", "Nová položka": "New item", "Např. Eliška": "E.g. Emma", "např. Magda": "e.g. Anna", "Místo (volitelné)": "Place (optional)", "Krátký popisek (volitelné)": "Short caption (optional)", "Napiš si poznámku…": "Write a note…", "Zatím žádné poznámky.": "No notes yet.", "Zatím žádné události.": "No events yet.", "Zatím tu žádná fotka není. Přidej první vzpomínku ♡": "No photos yet. Add your first memory ♡", "Postýlka": "Cot", "Kočárek": "Stroller", "Autosedačka": "Car seat", "Plenky": "Nappies", "Body": "Bodysuits", "Overaly": "Sleepsuits", "Doklady": "Documents", "Přezůvky": "Slippers", "Noční košile": "Nightdress", "Hygiena": "Toiletries", "Oblečení pro miminko": "Baby clothes", "nastav termín": "set due date", "Smazat položku": "Delete item"};

const _i18nTextOriginal=new WeakMap();
const _i18nAttrOriginal=new WeakMap();
function currentLang(){return localStorage.getItem('pregnancyPlannerLanguage')||appLanguage||'cs';}
function i18nMsg(cs,en){return currentLang()==='en'?en:cs;}
function translateDynamicText(t){
  if(MIMIBE_EN[t])return MIMIBE_EN[t];
  return t
    .replace(/^Svátek dnes:\s*/,'Name day today: ')
    .replace(/^(\d+)\.\s*týdnu$/i,'Week $1')
    .replace(/^(\d+)\.\s*týdnů$/i,'Week $1')
    .replace(/^(\d+)\s+týdnů$/i,'$1 weeks')
    .replace(/^(\d+)\s+týdny$/i,'$1 weeks')
    .replace(/^(\d+)\s+týden$/i,'$1 week')
    .replace(/^(\d+)\s+dní$/i,'$1 days')
    .replace(/^(\d+)\s+dnů$/i,'$1 days')
    .replace(/^(\d+)\s+den$/i,'$1 day')
    .replace(/\(volitelné\)/gi,'(optional)')
    .replace(/\(volitelně\)/gi,'(optional)');
}
function localizeWholeApp(lang){
  lang=lang==='en'?'en':'cs';
  appLanguage=lang;
  localStorage.setItem('pregnancyPlannerLanguage',lang);
  document.documentElement.lang=lang;

  const walker=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT);
  const nodes=[]; while(walker.nextNode())nodes.push(walker.currentNode);
  nodes.forEach(n=>{
    if(!n.parentElement || ['SCRIPT','STYLE'].includes(n.parentElement.tagName))return;
    if(!_i18nTextOriginal.has(n))_i18nTextOriginal.set(n,n.nodeValue);
    const original=_i18nTextOriginal.get(n);
    if(lang==='cs'){n.nodeValue=original;return;}
    const raw=original, trimmed=raw.trim();
    if(!trimmed)return;
    const translated=translateDynamicText(trimmed);
    if(translated!==trimmed)n.nodeValue=raw.replace(trimmed,translated);
  });

  document.querySelectorAll('input,textarea,button,select,[title],[aria-label]').forEach(el=>{
    if(!_i18nAttrOriginal.has(el))_i18nAttrOriginal.set(el,{
      placeholder:el.getAttribute('placeholder'),title:el.getAttribute('title'),aria:el.getAttribute('aria-label')
    });
    const o=_i18nAttrOriginal.get(el);
    [['placeholder',o.placeholder],['title',o.title],['aria-label',o.aria]].forEach(([a,v])=>{
      if(v===null)return;
      el.setAttribute(a,lang==='en'?translateDynamicText(v):v);
    });
  });
  document.querySelectorAll('[data-set-language]').forEach(b=>b.classList.toggle('active',b.dataset.setLanguage===lang));
  localizeMimiBeBrand(lang);
}

const _originalApplyLanguage=applyLanguage;
applyLanguage=function(lang){
  _originalApplyLanguage(lang);
  setTimeout(()=>localizeWholeApp(lang),0);
};

document.addEventListener('DOMContentLoaded',()=>{
  const lang=currentLang();
  setTimeout(()=>localizeWholeApp(lang),100);
  const obs=new MutationObserver(()=>{
    clearTimeout(window.__mimiI18nTimer);
    window.__mimiI18nTimer=setTimeout(()=>localizeWholeApp(currentLang()),25);
  });
  obs.observe(document.body,{childList:true,subtree:true,characterData:true});
});

// Keep horizontal pregnancy progress synchronized.
function v60ProgressSync(){
  const bar=document.querySelector('.progress-ring'); if(!bar)return;
  const m=(bar.textContent||'').match(/(\d+)\s*%/);
  const pct=m?Math.max(0,Math.min(100,parseInt(m[1],10))):0;
  bar.style.setProperty('--bar-progress',pct+'%');
}
document.addEventListener('DOMContentLoaded',()=>{
  setTimeout(v60ProgressSync,160);
  const bar=document.querySelector('.progress-ring');
  if(bar)new MutationObserver(v60ProgressSync).observe(bar,{childList:true,subtree:true,characterData:true});

  // Splash styling only; no dashboard changes.
  const langBtn=document.querySelector('[data-language-choice]');
  if(langBtn){
    let p=langBtn.parentElement;
    for(let i=0;i<4&&p;i++,p=p.parentElement){
      if(p.querySelector&&p.querySelector('img[src*="baby-neutral"]')){
        p.style.background='transparent';p.style.boxShadow='none';p.style.border='0';
        const baby=p.querySelector('img[src*="baby-neutral"]');
        if(baby){baby.style.width='190px';baby.style.height='190px';baby.style.maxWidth='none';baby.style.objectFit='contain';}
        break;
      }
    }
  }
});

// v61 — synchronize horizontal pregnancy bar with calculated percentage.
function mimiV61ProgressBar(){
  const bar=document.querySelector('.progress-ring');
  if(!bar)return;
  bar.style.display='flex';
  const m=(bar.textContent||'').match(/(\d+)\s*%/);
  const pct=m ? Math.max(0,Math.min(100,parseInt(m[1],10))) : 0;
  bar.style.setProperty('--bar-progress',pct+'%');
}
document.addEventListener('DOMContentLoaded',()=>{
  setTimeout(mimiV61ProgressBar,100);
  const bar=document.querySelector('.progress-ring');
  if(bar)new MutationObserver(mimiV61ProgressBar).observe(bar,{subtree:true,childList:true,characterData:true});
});

// v62 — standalone pregnancy progress bar.
function updateStandalonePregnancyProgress(){
  const old=document.querySelector('#progressRing, .progress-ring');
  const bar=document.getElementById('pregnancyProgressBar');
  const fill=document.getElementById('pregnancyProgressFill');
  const label=document.getElementById('pregnancyProgressPercent');
  if(!bar || !fill || !label)return;

  let pct=0;
  if(old){
    const m=(old.textContent||'').match(/(\d+)\s*%/);
    if(m)pct=parseInt(m[1],10);
  }
  pct=Math.max(0,Math.min(100,Number.isFinite(pct)?pct:0));
  fill.style.width=pct+'%';
  label.textContent=pct+' %';
  bar.setAttribute('aria-valuenow',String(pct));
}
document.addEventListener('DOMContentLoaded',()=>{
  setTimeout(updateStandalonePregnancyProgress,180);
  const old=document.querySelector('#progressRing, .progress-ring');
  if(old){
    new MutationObserver(updateStandalonePregnancyProgress).observe(old,{
      subtree:true,childList:true,characterData:true,attributes:true
    });
  }
});


// v63 — stable first-launch language splash logic
function mimiShowLanguageSplashIfNeeded(){
  const splash=document.getElementById('languageSplash');
  if(!splash)return;

  const completed=localStorage.getItem('mimibeOnboardingCompleted')==='1';
  const lang=localStorage.getItem('pregnancyPlannerLanguage');

  if(!completed || !lang){
    splash.hidden=false;
    splash.style.removeProperty('display');
  }else{
    splash.hidden=true;
    
  }
}

function mimiCompleteLanguageSplash(lang){
  const clean=lang==='en'?'en':'cs';
  localStorage.setItem('pregnancyPlannerLanguage',clean);
  localStorage.setItem('mimibeOnboardingCompleted','1');

  const splash=document.getElementById('languageSplash');
  if(splash){
    splash.hidden=true;
    
  }
}

// Capture language choice reliably, regardless of older handlers.
document.addEventListener('click',e=>{
  const btn=e.target.closest('[data-language-choice]');
  if(!btn)return;
  mimiCompleteLanguageSplash(btn.dataset.languageChoice);
},true);

document.addEventListener('DOMContentLoaded',()=>{
  setTimeout(mimiShowLanguageSplashIfNeeded,0);
});



// v69 — authoritative theme switching
function mimiSetTheme(theme){
  const clean=['neutral','pink','blue'].includes(theme) ? theme : 'neutral';
  data.theme=clean;
  applyTheme();
  try{save();}catch(e){
    try{localStorage.setItem('pregnancyPlanner',JSON.stringify(data));}catch(_){}
  }
}

document.addEventListener('change',e=>{
  if(e.target && e.target.id==='themeSelect'){
    mimiSetTheme(e.target.value);
  }
},true);

document.addEventListener('click',e=>{
  const btn=e.target.closest('[data-theme-choice]');
  if(!btn)return;
  mimiSetTheme(btn.dataset.themeChoice);
},true);

document.addEventListener('DOMContentLoaded',()=>{
  setTimeout(()=>{
    // Restore persisted theme once app data have loaded.
    if(data && !['neutral','pink','blue'].includes(data.theme)) data.theme='neutral';
    applyTheme();
  },120);
});


// v76 — theme select preview without breaking Settings layout
document.addEventListener('change',e=>{
  if(!e.target || e.target.id!=='themeSelect') return;
  const selected=e.target.value;
  if(!['neutral','pink','blue'].includes(selected)) return;

  // Preview immediately
  const previous=data.theme;
  data.theme=selected;
  applyTheme();

  // Do not navigate, submit, collapse panels or trigger save here.
  // Persisting remains the responsibility of the existing Save button.
  data.theme=selected;
}, true);


// v78 — custom theme picker
function syncThemeChoiceUI(){
  const theme=(data && ['neutral','pink','blue'].includes(data.theme)) ? data.theme : 'neutral';
  const select=document.getElementById('themeSelect');
  if(select) select.value=theme;

  document.querySelectorAll('.theme-choice-card').forEach(btn=>{
    const active=btn.dataset.themeChoice===theme;
    btn.classList.toggle('active',active);
    btn.setAttribute('aria-pressed',active?'true':'false');
  });

  const en=(localStorage.getItem('pregnancyPlannerLanguage')==='en');
  const labels={
    neutral: en ? 'Neutral' : 'Neutrální',
    pink: en ? 'Pink' : 'Růžová',
    blue: en ? 'Baby blue' : 'Modrá'
  };
  document.querySelectorAll('[data-theme-label]').forEach(el=>{
    el.textContent=labels[el.dataset.themeLabel]||el.textContent;
  });

  const pickerLabel=document.querySelector('.theme-picker-label');
  if(pickerLabel) pickerLabel.textContent=en?'Colour theme':'Barevná varianta';
}

document.addEventListener('click',e=>{
  const btn=e.target.closest('.theme-choice-card');
  if(!btn)return;
  const theme=btn.dataset.themeChoice;
  if(!['neutral','pink','blue'].includes(theme))return;

  data.theme=theme;
  const select=document.getElementById('themeSelect');
  if(select) select.value=theme;

  applyTheme();
  syncThemeChoiceUI();
},true);

document.addEventListener('DOMContentLoaded',()=>{
  setTimeout(syncThemeChoiceUI,150);
});


// MimiBe automatic local memory video creator
const memoryVideoState={photos:[],url:'',working:false};

function videoLang(){return (localStorage.getItem('pregnancyPlannerLanguage')==='en')?'en':'cs';}
function videoText(cs,en){return videoLang()==='en'?en:cs;}

function setMemoryVideoLanguage(){
  const en=videoLang()==='en';
  const set=(id,cs,enText)=>{const el=document.getElementById(id);if(el)el.textContent=en?enText:cs;};
  set('videoDialogEyebrow','Vzpomínkové video','Memory video');
  set('videoDialogTitle','Vytvořit automatické video ♡','Create automatic video ♡');
  set('videoDialogIntro',
      'MimiBe použije všechny tvoje uložené vzpomínky, seřadí je podle data a samo přidá jemné prolínačky a pohyb.',
      'MimiBe will use all your saved memories, sort them by date, and automatically add gentle transitions and motion.');
  set('videoPhotoCountLabel','fotek','photos');
  set('videoDurationLabel','délka','duration');
  set('videoMusicLabel','Hudba (volitelně)','Music (optional)');
  set('videoMusicHint','Můžeš vybrat vlastní skladbu z telefonu. Když nic nevybereš, video bude bez hudby.',
      'You can choose your own song from your phone. Leave it empty to create the video without music.');
  set('generateMemoryVideo','Vytvořit video','Create video');
  set('cancelMemoryVideo','Zrušit','Cancel');
  set('downloadMemoryVideo','Uložit video','Save video');
  set('videoPrivacyText','🔒 Fotky ani hudba neopustí tvoje zařízení.','🔒 Your photos and music never leave your device.');
}

function formatVideoDuration(sec){
  const s=Math.max(0,Math.round(sec));
  const m=Math.floor(s/60), r=s%60;
  return m?`${m}:${String(r).padStart(2,'0')}`:`0:${String(r).padStart(2,'0')}`;
}

async function openMemoryVideoDialog(){
  if(!photoDB.db) await photoDB.open();
  let photos=await photoDB.all();
  photos=photos.filter(p=>p.image).sort((a,b)=>(a.date||'').localeCompare(b.date||'') || a.id-b.id);
  if(!photos.length){
    alert(videoText('Nejdřív přidej alespoň jednu fotku do Vzpomínek.','Please add at least one photo to Memories first.'));
    return;
  }
  memoryVideoState.photos=photos;
  document.getElementById('videoPhotoCount').textContent=String(photos.length);
  document.getElementById('videoDurationEstimate').textContent=formatVideoDuration(2.1+photos.length*2.8);
  setMemoryVideoLanguage();

  const dlg=document.getElementById('memoryVideoDialog');
  const preview=document.getElementById('memoryVideoPreview');
  const download=document.getElementById('downloadMemoryVideo');
  const progress=document.getElementById('memoryVideoProgress');
  if(memoryVideoState.url){URL.revokeObjectURL(memoryVideoState.url);memoryVideoState.url='';}
  preview.classList.add('hidden'); preview.removeAttribute('src');
  download.classList.add('hidden');
  progress.classList.add('hidden');
  document.getElementById('memoryVideoMusic').value='';
  dlg.showModal();
}

function closeMemoryVideoDialog(){
  if(memoryVideoState.working)return;
  document.getElementById('memoryVideoDialog')?.close();
}

function loadVideoImage(src){
  return new Promise((resolve,reject)=>{
    const img=new Image();
    img.onload=()=>resolve(img);
    img.onerror=reject;
    img.src=src;
  });
}

function coverImage(ctx,img,w,h,scale=1,panX=0,panY=0,alpha=1){
  const base=Math.max(w/img.width,h/img.height)*scale;
  const dw=img.width*base, dh=img.height*base;
  const extraX=Math.max(0,dw-w), extraY=Math.max(0,dh-h);
  const x=(w-dw)/2 + panX*extraX*.25;
  const y=(h-dh)/2 + panY*extraY*.25;
  ctx.save();
  ctx.globalAlpha=alpha;
  ctx.drawImage(img,x,y,dw,dh);
  ctx.restore();
}

function roundRectVideo(ctx,x,y,w,h,r){
  ctx.beginPath();ctx.roundRect(x,y,w,h,r);ctx.closePath();
}

function drawVideoIntro(ctx,w,h,title,subtitle,theme){
  const palettes={
    neutral:['#f7efe5','#c69a69','#6c574a'],
    pink:['#fff0f5','#ef91ad','#76535e'],
    blue:['#eef8fd','#7ec8eb','#4f6875']
  };
  const [bg,accent,text]=palettes[theme]||palettes.neutral;
  ctx.fillStyle=bg;ctx.fillRect(0,0,w,h);
  ctx.fillStyle=accent;ctx.globalAlpha=.13;
  ctx.beginPath();ctx.arc(w*.5,h*.40,w*.28,0,Math.PI*2);ctx.fill();
  ctx.globalAlpha=1;
  ctx.textAlign='center';
  ctx.fillStyle=text;
  ctx.font=`700 ${Math.round(w*.075)}px Georgia, serif`;
  ctx.fillText(title,w/2,h*.48);
  ctx.font=`400 ${Math.round(w*.032)}px Arial, sans-serif`;
  ctx.fillStyle=text+'cc';
  ctx.fillText(subtitle,w/2,h*.55);
  ctx.font=`600 ${Math.round(w*.025)}px Arial, sans-serif`;
  ctx.fillStyle=text+'99';
  ctx.fillText('MimiBe',w/2,h*.72);
}

function drawPhotoFrame(ctx,img,w,h,progress,nextImg=null,transition=0,caption=''){
  ctx.fillStyle='#000';ctx.fillRect(0,0,w,h);
  const ease=p=>p*p*(3-2*p);
  const p=ease(Math.max(0,Math.min(1,progress)));
  coverImage(ctx,img,w,h,1+.055*p,-.4+.8*p,.15-.3*p,1-transition);
  if(nextImg && transition>0) coverImage(ctx,nextImg,w,h,1.055-.055*transition,.4-.8*transition,-.15+.3*transition,transition);

  // subtle readable bottom gradient
  const g=ctx.createLinearGradient(0,h*.65,0,h);
  g.addColorStop(0,'rgba(0,0,0,0)');
  g.addColorStop(1,'rgba(0,0,0,.34)');
  ctx.fillStyle=g;ctx.fillRect(0,h*.62,w,h*.38);

  if(caption){
    ctx.textAlign='center';ctx.fillStyle='white';
    ctx.shadowColor='rgba(0,0,0,.35)';ctx.shadowBlur=6;
    ctx.font=`500 ${Math.round(w*.033)}px Arial, sans-serif`;
    const txt=caption.length>58?caption.slice(0,57)+'…':caption;
    ctx.fillText(txt,w/2,h*.91);
    ctx.shadowBlur=0;
  }
}

async function decodeMusicFile(file,audioCtx){
  if(!file)return null;
  const buf=await file.arrayBuffer();
  return await audioCtx.decodeAudioData(buf.slice(0));
}

function chooseRecordingMime(){
  const types=[
    'video/mp4;codecs=h264,aac',
    'video/mp4',
    'video/webm;codecs=vp9,opus',
    'video/webm;codecs=vp8,opus',
    'video/webm'
  ];
  return types.find(t=>window.MediaRecorder && MediaRecorder.isTypeSupported(t)) || '';
}

async function generateAutomaticMemoryVideo(){
  if(memoryVideoState.working)return;
  const photos=memoryVideoState.photos;
  if(!photos.length)return;

  if(!window.MediaRecorder || !HTMLCanvasElement.prototype.captureStream){
    alert(videoText(
      'Tento prohlížeč neumí vytvořit video přímo v zařízení. Zkus prosím aktuální Chrome, Edge nebo Safari.',
      'This browser cannot create a video directly on the device. Please try a current version of Chrome, Edge or Safari.'
    ));
    return;
  }

  memoryVideoState.working=true;
  const generate=document.getElementById('generateMemoryVideo');
  const cancel=document.getElementById('cancelMemoryVideo');
  const progressBox=document.getElementById('memoryVideoProgress');
  const progressFill=document.getElementById('memoryVideoProgressFill');
  const progressText=document.getElementById('memoryVideoProgressText');
  const status=document.getElementById('memoryVideoStatus');
  const preview=document.getElementById('memoryVideoPreview');
  const download=document.getElementById('downloadMemoryVideo');
  generate.disabled=true;cancel.disabled=true;
  progressBox.classList.remove('hidden');
  preview.classList.add('hidden');download.classList.add('hidden');

  try{
    status.textContent=videoText('Načítám fotky…','Loading photos…');
    const imgs=[];
    for(let i=0;i<photos.length;i++){
      imgs.push(await loadVideoImage(photos[i].image));
      const q=Math.round((i+1)/photos.length*12);
      progressFill.style.width=q+'%';progressText.textContent=q+' %';
    }

    // 9:16 portrait HD, practical for mobile and fast enough for local rendering.
    const W=720,H=1280,FPS=30;
    const canvas=document.createElement('canvas');canvas.width=W;canvas.height=H;
    const ctx=canvas.getContext('2d',{alpha:false});
    const videoStream=canvas.captureStream(FPS);

    let audioCtx=null,audioSource=null,audioDest=null;
    const musicFile=document.getElementById('memoryVideoMusic').files?.[0];
    let recordingStream=videoStream;

    if(musicFile){
      status.textContent=videoText('Připravuji hudbu…','Preparing music…');
      audioCtx=new (window.AudioContext||window.webkitAudioContext)();
      const audioBuffer=await decodeMusicFile(musicFile,audioCtx);
      audioDest=audioCtx.createMediaStreamDestination();
      audioSource=audioCtx.createBufferSource();
      audioSource.buffer=audioBuffer;
      audioSource.loop=true;
      const gain=audioCtx.createGain();gain.gain.value=.72;
      audioSource.connect(gain).connect(audioDest);
      recordingStream=new MediaStream([...videoStream.getVideoTracks(),...audioDest.stream.getAudioTracks()]);
    }

    const mime=chooseRecordingMime();
    const rec=new MediaRecorder(recordingStream,mime?{mimeType:mime,videoBitsPerSecond:4_000_000}:{videoBitsPerSecond:4_000_000});
    const chunks=[];
    rec.ondataavailable=e=>{if(e.data?.size)chunks.push(e.data);};
    const stopped=new Promise((resolve,reject)=>{rec.onstop=resolve;rec.onerror=e=>reject(e.error||e);});

    rec.start(500);
    if(audioCtx && audioSource){
      await audioCtx.resume();
      audioSource.start();
    }

    const theme=data?.theme||'neutral';
    const title=videoText('Naše vzpomínky ♡','Our memories ♡');
    const firstDate=photos[0]?.date, lastDate=photos[photos.length-1]?.date;
    let period='';
    try{
      if(firstDate&&lastDate){
        const locale=videoLang()==='en'?'en-GB':'cs-CZ';
        const a=new Intl.DateTimeFormat(locale,{month:'long',year:'numeric'}).format(new Date(firstDate+'T00:00:00'));
        const b=new Intl.DateTimeFormat(locale,{month:'long',year:'numeric'}).format(new Date(lastDate+'T00:00:00'));
        period=a===b?a:`${a} – ${b}`;
      }
    }catch(e){}

    const introMs=2100, photoMs=2800, fadeMs=650;
    const totalMs=introMs+photos.length*photoMs;
    const start=performance.now();

    status.textContent=videoText('MimiBe tvoří video…','MimiBe is creating your video…');

    await new Promise(resolve=>{
      function frame(now){
        const elapsed=now-start;
        if(elapsed<introMs){
          drawVideoIntro(ctx,W,H,title,period,theme);
        }else{
          const rel=elapsed-introMs;
          const idx=Math.min(photos.length-1,Math.floor(rel/photoMs));
          const local=rel-idx*photoMs;
          const p=local/photoMs;
          const transition=(local>photoMs-fadeMs && idx<photos.length-1)?(local-(photoMs-fadeMs))/fadeMs:0;
          const caption=photos[idx].caption || (photos[idx].date?new Intl.DateTimeFormat(videoLang()==='en'?'en-GB':'cs-CZ',{day:'numeric',month:'long',year:'numeric'}).format(new Date(photos[idx].date+'T00:00:00')):'');
          drawPhotoFrame(ctx,imgs[idx],W,H,p,idx<photos.length-1?imgs[idx+1]:null,transition,caption);
        }

        const pct=Math.min(99,12+Math.round(Math.max(0,elapsed)/totalMs*87));
        progressFill.style.width=pct+'%';progressText.textContent=pct+' %';

        if(elapsed<totalMs) requestAnimationFrame(frame);
        else resolve();
      }
      requestAnimationFrame(frame);
    });

    await new Promise(r=>setTimeout(r,250));
    rec.stop();
    if(audioSource){try{audioSource.stop();}catch(e){}}
    await stopped;
    if(audioCtx){try{await audioCtx.close();}catch(e){}}

    const finalType=rec.mimeType || mime || 'video/webm';
    const blob=new Blob(chunks,{type:finalType});
    if(memoryVideoState.url)URL.revokeObjectURL(memoryVideoState.url);
    memoryVideoState.url=URL.createObjectURL(blob);

    const isMp4=finalType.includes('mp4');
    const ext=isMp4?'mp4':'webm';
    download.download=`MimiBe-vzpominky.${ext}`;
    download.href=memoryVideoState.url;
    preview.src=memoryVideoState.url;
    preview.classList.remove('hidden');
    download.classList.remove('hidden');

    progressFill.style.width='100%';progressText.textContent='100 %';
    status.textContent=videoText('Hotovo ♡ Video je připravené.','Done ♡ Your video is ready.');
  }catch(err){
    console.error(err);
    status.textContent=videoText('Video se nepodařilo vytvořit.','The video could not be created.');
    alert(videoText(
      'Video se nepodařilo vytvořit. Zkus méně fotek, kratší hudbu nebo jiný prohlížeč.',
      'The video could not be created. Try fewer photos, a different music file, or another browser.'
    ));
  }finally{
    memoryVideoState.working=false;
    generate.disabled=false;cancel.disabled=false;
  }
}

document.addEventListener('click',e=>{
  if(e.target.closest('#createVideoFuture'))openMemoryVideoDialog();
  if(e.target.closest('#closeMemoryVideo,#cancelMemoryVideo'))closeMemoryVideoDialog();
  if(e.target.closest('#generateMemoryVideo'))generateAutomaticMemoryVideo();
});
