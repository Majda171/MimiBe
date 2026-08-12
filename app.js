const CZ_NAMEDAYS={"01-01": "Nový rok", "01-02": "Karina", "01-03": "Radmila", "01-04": "Diana", "01-05": "Dalimil", "01-06": "Tři králové", "01-07": "Vilma", "01-08": "Čestmír", "01-09": "Vladan", "01-10": "Břetislav", "01-11": "Bohdana", "01-12": "Pravoslav", "01-13": "Edita", "01-14": "Radovan", "01-15": "Alice", "01-16": "Ctirad", "01-17": "Drahoslav", "01-18": "Vladislav", "01-19": "Doubravka", "01-20": "Ilona", "01-21": "Běla", "01-22": "Slavomír", "01-23": "Zdeněk", "01-24": "Milena", "01-25": "Miloš", "01-26": "Zora", "01-27": "Ingrid", "01-28": "Otýlie", "01-29": "Zdislava", "01-30": "Robin", "01-31": "Marika", "02-01": "Hynek", "02-02": "Nela", "02-03": "Blažej", "02-04": "Jarmila", "02-05": "Dobromila", "02-06": "Vanda", "02-07": "Veronika", "02-08": "Milada", "02-09": "Apolena", "02-10": "Mojmír", "02-11": "Božena", "02-12": "Slavěna", "02-13": "Věnceslav", "02-14": "Valentýn", "02-15": "Jiřina", "02-16": "Ljuba", "02-17": "Miloslava", "02-18": "Gizela", "02-19": "Patrik", "02-20": "Oldřich", "02-21": "Lenka", "02-22": "Petr", "02-23": "Svatopluk", "02-24": "Matěj", "02-25": "Liliana", "02-26": "Dorota", "02-27": "Alexandr", "02-28": "Lumír", "02-29": "Horymír", "03-01": "Bedřich", "03-02": "Anežka", "03-03": "Kamil", "03-04": "Stela", "03-05": "Kazimír", "03-06": "Miroslav", "03-07": "Tomáš", "03-08": "Gabriela", "03-09": "Františka", "03-10": "Viktorie", "03-11": "Anděla", "03-12": "Řehoř", "03-13": "Růžena", "03-14": "Rút", "03-15": "Ida", "03-16": "Elena", "03-17": "Vlastimil", "03-18": "Eduard", "03-19": "Josef", "03-20": "Světlana", "03-21": "Radek", "03-22": "Leona", "03-23": "Ivona", "03-24": "Gabriel", "03-25": "Marián", "03-26": "Emanuel", "03-27": "Dita", "03-28": "Soňa", "03-29": "Taťána", "03-30": "Arnošt", "03-31": "Kvido", "04-01": "Hugo", "04-02": "Erika", "04-03": "Richard", "04-04": "Ivana", "04-05": "Miroslava", "04-06": "Vendula", "04-07": "Heřman", "04-08": "Ema", "04-09": "Dušan", "04-10": "Darja", "04-11": "Izabela", "04-12": "Julius", "04-13": "Aleš", "04-14": "Vincenc", "04-15": "Anastázie", "04-16": "Irena", "04-17": "Rudolf", "04-18": "Valérie", "04-19": "Rostislav", "04-20": "Marcela", "04-21": "Alexandra", "04-22": "Evženie", "04-23": "Vojtěch", "04-24": "Jiří", "04-25": "Marek", "04-26": "Oto", "04-27": "Jaroslav", "04-28": "Vlastislav", "04-29": "Robert", "04-30": "Blahoslav", "05-01": "Svátek práce", "05-02": "Zikmund", "05-03": "Alexej", "05-04": "Květoslav", "05-05": "Klaudie", "05-06": "Radoslav", "05-07": "Stanislav", "05-08": "Den vítězství", "05-09": "Ctibor", "05-10": "Blažena", "05-11": "Svatava", "05-12": "Pankrác", "05-13": "Servác", "05-14": "Bonifác", "05-15": "Žofie", "05-16": "Přemysl", "05-17": "Aneta", "05-18": "Nataša", "05-19": "Ivo", "05-20": "Zbyšek", "05-21": "Monika", "05-22": "Emil", "05-23": "Vladimír", "05-24": "Jana", "05-25": "Viola", "05-26": "Filip", "05-27": "Valdemar", "05-28": "Vilém", "05-29": "Maxmilián", "05-30": "Ferdinand", "05-31": "Kamila", "06-01": "Laura", "06-02": "Jarmil", "06-03": "Tamara", "06-04": "Dalibor", "06-05": "Dobroslav", "06-06": "Norbert", "06-07": "Iveta", "06-08": "Medard", "06-09": "Stanislava", "06-10": "Gita", "06-11": "Bruno", "06-12": "Antonie", "06-13": "Antonín", "06-14": "Roland", "06-15": "Vít", "06-16": "Zbyněk", "06-17": "Adolf", "06-18": "Milan", "06-19": "Leoš", "06-20": "Květa", "06-21": "Alois", "06-22": "Pavla", "06-23": "Zdeňka", "06-24": "Jan", "06-25": "Ivan", "06-26": "Adriana", "06-27": "Ladislav", "06-28": "Lubomír", "06-29": "Petr a Pavel", "06-30": "Šárka", "07-01": "Jaroslava", "07-02": "Patricie", "07-03": "Radomír", "07-04": "Prokop", "07-05": "Cyril a Metoděj", "07-06": "Mistr Jan Hus", "07-07": "Bohuslava", "07-08": "Nora", "07-09": "Drahoslava", "07-10": "Libuše", "07-11": "Olga", "07-12": "Bořek", "07-13": "Markéta", "07-14": "Karolína", "07-15": "Jindřich", "07-16": "Luboš", "07-17": "Martina", "07-18": "Drahomíra", "07-19": "Čeněk", "07-20": "Ilja", "07-21": "Vítězslav", "07-22": "Magdaléna", "07-23": "Libor", "07-24": "Kristýna", "07-25": "Jakub", "07-26": "Anna", "07-27": "Věroslav", "07-28": "Viktor", "07-29": "Marta", "07-30": "Bořivoj", "07-31": "Ignác", "08-01": "Oskar", "08-02": "Gustav", "08-03": "Miluše", "08-04": "Dominik", "08-05": "Kristián", "08-06": "Oldřiška", "08-07": "Lada", "08-08": "Soběslav", "08-09": "Roman", "08-10": "Vavřinec", "08-11": "Zuzana", "08-12": "Klára", "08-13": "Alena", "08-14": "Alan", "08-15": "Hana", "08-16": "Jáchym", "08-17": "Petra", "08-18": "Helena", "08-19": "Ludvík", "08-20": "Bernard", "08-21": "Johana", "08-22": "Bohuslav", "08-23": "Sandra", "08-24": "Bartoloměj", "08-25": "Radim", "08-26": "Luděk", "08-27": "Otakar", "08-28": "Augustýn", "08-29": "Evelína", "08-30": "Vladěna", "08-31": "Pavlína", "09-01": "Linda", "09-02": "Adéla", "09-03": "Bronislav", "09-04": "Jindřiška", "09-05": "Boris", "09-06": "Boleslav", "09-07": "Regína", "09-08": "Mariana", "09-09": "Daniela", "09-10": "Irma", "09-11": "Denisa", "09-12": "Marie", "09-13": "Lubor", "09-14": "Radka", "09-15": "Jolana", "09-16": "Ludmila", "09-17": "Naděžda", "09-18": "Kryštof", "09-19": "Zita", "09-20": "Oleg", "09-21": "Matouš", "09-22": "Darina", "09-23": "Berta", "09-24": "Jaromír", "09-25": "Zlata", "09-26": "Andrea", "09-27": "Jonáš", "09-28": "Václav", "09-29": "Michal", "09-30": "Jeroným", "10-01": "Igor", "10-02": "Olívie", "10-03": "Bohumil", "10-04": "František", "10-05": "Eliška", "10-06": "Hanuš", "10-07": "Justýna", "10-08": "Věra", "10-09": "Štefan", "10-10": "Marina", "10-11": "Andrej", "10-12": "Marcel", "10-13": "Renáta", "10-14": "Agáta", "10-15": "Tereza", "10-16": "Havel", "10-17": "Hedvika", "10-18": "Lukáš", "10-19": "Michaela", "10-20": "Vendelín", "10-21": "Brigita", "10-22": "Sabina", "10-23": "Teodor", "10-24": "Nina", "10-25": "Beáta", "10-26": "Erik", "10-27": "Šarlota", "10-28": "Vznik Československa", "10-29": "Silvie", "10-30": "Tadeáš", "10-31": "Štěpánka", "11-01": "Felix", "11-02": "Památka zesnulých", "11-03": "Hubert", "11-04": "Karel", "11-05": "Miriam", "11-06": "Liběna", "11-07": "Saskie", "11-08": "Bohumír", "11-09": "Bohdan", "11-10": "Evžen", "11-11": "Martin", "11-12": "Benedikt", "11-13": "Tibor", "11-14": "Sáva", "11-15": "Leopold", "11-16": "Otmar", "11-17": "Mahulena", "11-18": "Romana", "11-19": "Alžběta", "11-20": "Nikola", "11-21": "Albert", "11-22": "Cecílie", "11-23": "Klement", "11-24": "Emílie", "11-25": "Kateřina", "11-26": "Artur", "11-27": "Xenie", "11-28": "René", "11-29": "Zina", "11-30": "Ondřej", "12-01": "Iva", "12-02": "Blanka", "12-03": "Svatoslav", "12-04": "Barbora", "12-05": "Jitka", "12-06": "Mikuláš", "12-07": "Ambrož", "12-08": "Květoslava", "12-09": "Vratislav", "12-10": "Julie", "12-11": "Dana", "12-12": "Simona", "12-13": "Lucie", "12-14": "Lýdie", "12-15": "Radana", "12-16": "Albína", "12-17": "Daniel", "12-18": "Miloslav", "12-19": "Ester", "12-20": "Dagmar", "12-21": "Natálie", "12-22": "Šimon", "12-23": "Vlasta", "12-24": "Adam a Eva", "12-25": "1. svátek vánoční", "12-26": "Štěpán", "12-27": "Žaneta", "12-28": "Bohumila", "12-29": "Judita", "12-30": "David", "12-31": "Silvestr"};
const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];
const store = {
  get(key, fallback){ try { return JSON.parse(localStorage.getItem(key)) ?? fallback; } catch { return fallback; } },
  set(key, value){ localStorage.setItem(key, JSON.stringify(value)); }
};

const defaults = {
  momName: '', dueDate: '', babyName: '', babyGender: 'neutral', theme: 'neutral', events: [], notes: [],
  equipment: ['Postýlka','Kočárek','Autosedačka','Plenky','Body','Overaly'],
  hospital: ['Doklady','Přezůvky','Noční košile','Hygiena','Oblečení pro miminko'],
  equipmentDone: [], hospitalDone: [], customChecklists: [], equipmentBudget: null, equipmentPrices: [], currency: 'CZK'
};
let data = {...defaults, ...store.get('pregnancyPlanner', {})};
if(!Array.isArray(data.customChecklists)) data.customChecklists=[];
['events','notes','equipment','hospital','equipmentDone','hospitalDone'].forEach(k=>{if(!Array.isArray(data[k])) data[k]=JSON.parse(JSON.stringify(defaults[k]));});
if(!Array.isArray(data.equipmentPrices)) data.equipmentPrices=[];
data.equipmentPrices=data.equipment.map((_,i)=>{ const v=Number(data.equipmentPrices[i]); return Number.isFinite(v)&&v>=0?v:null; });
{ const b=Number(data.equipmentBudget); data.equipmentBudget=Number.isFinite(b)&&b>0?b:null; }
if(!['CZK','EUR','USD','GBP'].includes(data.currency)) data.currency='CZK';
if(!['girl','boy','neutral'].includes(data.babyGender)) data.babyGender='neutral';
data.customChecklists=data.customChecklists.filter(c=>c&&typeof c==='object').map(c=>({id:String(c.id||('c'+Date.now().toString(36)+Math.random().toString(36).slice(2,6))),name:String(c.name||'Checklist'),items:Array.isArray(c.items)?c.items:[],done:Array.isArray(c.done)?c.done:[]}));
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
  if(typeof updateStandalonePregnancyProgress==='function') updateStandalonePregnancyProgress();
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

function getChecklistModel(key){
  if(key==='equipment') return {name:'Výbavička', items:data.equipment, done:data.equipmentDone, builtin:true};
  if(key==='hospital') return {name:'Do porodnice', items:data.hospital, done:data.hospitalDone, builtin:true};
  const id=key.replace('custom:','');
  const c=data.customChecklists.find(x=>x.id===id);
  return c ? {name:c.name, items:c.items, done:c.done, builtin:false, raw:c} : null;
}
function setChecklistDone(key, done){
  if(key==='equipment') data.equipmentDone=done;
  else if(key==='hospital') data.hospitalDone=done;
  else { const m=getChecklistModel(key); if(m) m.raw.done=done; }
}
function updateChecklistSummary(){
  [['equipment','equipmentCount','equipmentBar'],['hospital','hospitalCount','hospitalBar']].forEach(([key,countId,barId])=>{
    const total=data[key].length, done=data[key+'Done'].length; $('#'+countId).textContent=`${done} / ${total}`; $('#'+barId).style.width=(total?done/total*100:0)+'%';
  });
  renderCustomChecklistList();
}
function renderCustomChecklistList(){
  const host=$('#customChecklistList'); if(!host) return;
  host.innerHTML=data.customChecklists.map(c=>{
    const total=c.items.length, done=c.done.length, pct=total?done/total*100:0;
    return `<button class="custom-check-row check-row" data-custom-checklist="${c.id}" type="button"><span class="custom-check-icon circle-icon">✓</span><span class="custom-check-copy check-content"><span class="custom-check-title check-title"><span>${escapeHtml(c.name)}</span><em>${done} / ${total}</em></span><span class="bar"><i style="width:${pct}%"></i></span></span></button>`;
  }).join('');
  $$('[data-custom-checklist]').forEach(b=>b.addEventListener('click',()=>openChecklist('custom:'+b.dataset.customChecklist)));
}
function renderChecklistSwitcher(){
  const host=$('#checklistSwitcher'); if(!host) return;
  const options=[{key:'equipment',name:'Výbavička'},{key:'hospital',name:'Do porodnice'},...data.customChecklists.map(c=>({key:'custom:'+c.id,name:c.name}))];
  host.innerHTML=options.map(o=>`<button type="button" data-switch-checklist="${o.key}" class="${o.key===currentChecklist?'active':''}">${escapeHtml(o.name)}</button>`).join('');
  $$('[data-switch-checklist]').forEach(b=>b.addEventListener('click',()=>{currentChecklist=b.dataset.switchChecklist; renderChecklistDialog();}));
}
function openChecklist(key){
  currentChecklist=key;
  if(!getChecklistModel(key)) currentChecklist='equipment';
  renderChecklistDialog();
  $('#checklistDialog').showModal();
}
function renderChecklistDialog(){
  const model=getChecklistModel(currentChecklist); if(!model) return;
  $('#checklistTitle').textContent=model.name;
  renderChecklistSwitcher();
  const total=model.items.length, completed=model.done.length, pct=total?Math.round(completed/total*100):0;
  let prog=$('#checklistDialogProgress');
  if(!prog){
    prog=document.createElement('div'); prog.id='checklistDialogProgress'; prog.className='checklist-dialog-progress';
    $('#checklistSwitcher').insertAdjacentElement('afterend',prog);
  }
  prog.innerHTML=`<div class="checklist-dialog-progress-head"><span>${i18nMsg('Splněno','Completed')}</span><strong>${completed} / ${total}</strong></div><div class="bar"><i style="width:${pct}%"></i></div>`;
  renderEquipmentBudgetPanel();
  $('#deleteCustomChecklist').hidden=model.builtin;
  $('#checklistItems').innerHTML=model.items.map((item,i)=>{
    const isDone=model.done.includes(i);
    if(currentChecklist==='equipment'){
      return `<div class="checklist-item equipment-item">
        <div class="equipment-item-left">
          <label class="equipment-check-label"><input type="checkbox" data-check="${i}" ${isDone?'checked':''}><span class="equipment-item-name">${escapeHtml(item)}</span></label>
        </div>
        <div class="equipment-item-right">
          <label class="equipment-price-wrap"><span>${i18nMsg('Cena','Price')}</span><span class="equipment-price-input"><input type="number" inputmode="decimal" min="0" step="1" data-equipment-price="${i}" value="${data.equipmentPrices[i] ?? ''}" placeholder="0"><em>${currencySymbol()}</em></span></label>
          <button class="delete-checklist-item equipment-delete" data-delete-check="${i}">${i18nMsg('Smazat','Delete')}</button>
        </div>
      </div>`;
    }
    return `<div class="checklist-item"><div class="checklist-item-main"><label><input type="checkbox" data-check="${i}" ${isDone?'checked':''}><span>${escapeHtml(item)}</span></label><button class="delete-checklist-item checklist-delete-text" data-delete-check="${i}">${i18nMsg('Smazat','Delete')}</button></div></div>`;
  }).join('')||'<div class="muted">Zatím prázdné.</div>';
  $$('[data-check]').forEach(el=>el.addEventListener('change',()=>{
    const i=+el.dataset.check; let d=[...getChecklistModel(currentChecklist).done];
    if(el.checked&&!d.includes(i)) d.push(i); if(!el.checked) d=d.filter(x=>x!==i);
    setChecklistDone(currentChecklist,d); persist(); updateChecklistSummary();
    if(currentChecklist==='equipment') renderEquipmentBudgetPanel();
  }));
  $$('[data-delete-check]').forEach(btn=>btn.addEventListener('click',()=>{
    const i=+btn.dataset.deleteCheck;
    if(!confirm(i18nMsg('Smazat tuto položku z checklistu?','Delete this checklist item?'))) return;
    const m=getChecklistModel(currentChecklist); m.items.splice(i,1);
    setChecklistDone(currentChecklist,m.done.filter(x=>x!==i).map(x=>x>i?x-1:x));
    if(currentChecklist==='equipment') data.equipmentPrices.splice(i,1);
    persist(); renderChecklistDialog(); updateChecklistSummary();
  }));
  $$('[data-equipment-price]').forEach(input=>{
    const updatePrice=()=>{
      const i=+input.dataset.equipmentPrice;
      const cleaned=String(input.value).replace(/\s/g,'').replace(',','.');
      const value=cleaned===''?null:Math.max(0,Number(cleaned));
      data.equipmentPrices[i]=Number.isFinite(value)?value:null;
      renderEquipmentBudgetPanel();
    };
    input.addEventListener('input',updatePrice);
    input.addEventListener('change',()=>{updatePrice();persist();});
    input.addEventListener('blur',()=>persist());
  });
}

function getCurrency(){
  return ['CZK','EUR','USD','GBP'].includes(data.currency) ? data.currency : 'CZK';
}
function currencySymbol(){
  return ({CZK:'Kč',EUR:'€',USD:'$',GBP:'£'})[getCurrency()] || 'Kč';
}
function formatMoney(value){
  const currency=getCurrency();
  const locale=currentLang()==='en' ? (currency==='USD'?'en-US':currency==='GBP'?'en-GB':'en-IE') : 'cs-CZ';
  return new Intl.NumberFormat(locale,{style:'currency',currency,maximumFractionDigits:0}).format(Number(value)||0);
}
function equipmentSpent(){
  return data.equipmentDone.reduce((sum,i)=>sum+(Number(data.equipmentPrices[i])||0),0);
}
function renderEquipmentBudgetPanel(){
  let panel=$('#equipmentBudgetPanel');
  if(currentChecklist!=='equipment'){ if(panel) panel.remove(); return; }
  if(!panel){
    panel=document.createElement('section');
    panel.id='equipmentBudgetPanel';
    panel.className='equipment-budget-panel';
    $('#checklistDialogProgress').insertAdjacentElement('afterend',panel);
  }
  const budget=Number(data.equipmentBudget)||0;
  if(!budget){
    panel.innerHTML=`<button type="button" class="equipment-budget-start" id="setEquipmentBudgetBtn">＋ ${i18nMsg('Nastavit rozpočet na výbavičku','Set an essentials budget')}</button>`;
  }else{
    const spent=equipmentSpent();
    const remaining=budget-spent;
    const rawPct=budget?spent/budget*100:0;
    const pct=Math.min(100,Math.max(0,rawPct));
    const shownPct=Math.round(rawPct);
    panel.innerHTML=`
      <div class="equipment-budget-head">
        <div><span>${i18nMsg('Rozpočet na výbavičku','Essentials budget')}</span><strong>${formatMoney(budget)}</strong></div>
        <button type="button" id="editEquipmentBudgetBtn">${i18nMsg('Upravit','Edit')}</button>
      </div>
      <div class="equipment-budget-overview">
        <div class="equipment-budget-stat"><span>${i18nMsg('Utraceno','Spent')}</span><strong>${formatMoney(spent)}</strong></div>
        <div class="equipment-budget-ring ${remaining<0?'over':''}" style="--budget-pct:${pct}"><div><strong>${shownPct} %</strong><span>${i18nMsg('z rozpočtu','of budget')}</span></div></div>
        <div class="equipment-budget-stat ${remaining<0?'over':''}"><span>${remaining>=0?i18nMsg('Zbývá','Remaining'):i18nMsg('Překročeno o','Over by')}</span><strong>${formatMoney(Math.abs(remaining))}</strong></div>
      </div>
      <div class="equipment-budget-note">${i18nMsg('Do rozpočtu se počítají pouze položky označené jako pořízené.','Only items marked as purchased count toward the budget.')}</div>`;
  }
  $('#setEquipmentBudgetBtn')?.addEventListener('click',askEquipmentBudget);
  $('#editEquipmentBudgetBtn')?.addEventListener('click',askEquipmentBudget);
}
function askEquipmentBudget(){
  const current=data.equipmentBudget?String(data.equipmentBudget):'';
  const raw=prompt(i18nMsg('Zadej celkový rozpočet na výbavičku v '+getCurrency()+'. Pro vypnutí zadej 0.','Enter your total essentials budget in '+getCurrency()+'. Enter 0 to turn it off.'),current);
  if(raw===null) return;
  const cleaned=String(raw).replace(/\s/g,'').replace(',','.');
  const value=Number(cleaned);
  if(!Number.isFinite(value)||value<0){ alert(i18nMsg('Zadej prosím platnou částku.','Please enter a valid amount.')); return; }
  data.equipmentBudget=value>0?value:null; persist(); renderEquipmentBudgetPanel();
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
  const babyFiles={neutral:'assets/baby-neutral.webp',pink:'assets/baby-pink.webp',blue:'assets/baby-blue.webp'};
  const pregnancyBaby=document.querySelector('#pregnancyBabyIllustration');
  if(pregnancyBaby) pregnancyBaby.src=babyFiles[theme];
  const welcomeBaby=document.querySelector('.welcome-baby-art');
  if(welcomeBaby && !localStorage.getItem('mimibeOnboardingCompleted')) welcomeBaby.src=babyFiles.neutral;
  try{ localStorage.setItem('pregnancyPlanner',JSON.stringify(data)); }catch(e){}
}
function nav(name){
  const target=$('#view-'+name); if(!target)return;
  $$('.view').forEach(v=>v.classList.remove('active')); target.classList.add('active');
  $$('.nav-btn').forEach(b=>b.classList.toggle('active',b.dataset.nav===name));
  window.scrollTo({top:0,behavior:'smooth'});
}
$$('[data-nav]').forEach(b=>b.addEventListener('click',()=>nav(b.dataset.nav)));

$('#saveEvent')?.addEventListener('click',()=>{
  const title=$('#eventTitleInput').value.trim(),date=$('#eventDateInput').value;
  if(!title||!date)return alert(i18nMsg('Vyplň název a datum.','Please enter a title and date.'));
  data.events.push({title,date,time:$('#eventTimeInput').value,place:$('#eventPlaceInput').value.trim()});
  persist();renderEvents();
  $('#eventTitleInput').value='';$('#eventDateInput').value='';$('#eventTimeInput').value='';$('#eventPlaceInput').value='';
});
$('#saveNote')?.addEventListener('click',()=>{
  const text=$('#noteInput').value.trim();if(!text)return;
  data.notes.push({text,date:new Intl.DateTimeFormat('cs-CZ',{day:'numeric',month:'long'}).format(new Date())});
  persist();renderNotes();$('#noteInput').value='';
});
function refreshCurrencyOptions(){
  document.querySelectorAll('.currency-option').forEach(btn=>{
    const active=btn.dataset.currency===getCurrency();
    btn.classList.toggle('active',active);
    btn.setAttribute('aria-pressed',active?'true':'false');
  });
}
document.querySelectorAll('.currency-option').forEach(btn=>{
  btn.addEventListener('click',()=>{
    data.currency=['CZK','EUR','USD','GBP'].includes(btn.dataset.currency)?btn.dataset.currency:'CZK';
    persist();
    refreshCurrencyOptions();
    if(currentChecklist==='equipment') renderChecklistDialog();
  });
});
refreshCurrencyOptions();


function refreshGenderChoice(){
  document.querySelectorAll('[data-gender-choice]').forEach(btn=>{
    const active=btn.dataset.genderChoice===(data.babyGender||'neutral');
    btn.classList.toggle('active',active);
    btn.setAttribute('aria-pressed',active?'true':'false');
  });
}
document.querySelectorAll('[data-gender-choice]').forEach(btn=>{
  btn.addEventListener('click',()=>{
    data.babyGender=['girl','boy','neutral'].includes(btn.dataset.genderChoice)?btn.dataset.genderChoice:'neutral';
    refreshGenderChoice();
  });
});

$('#saveSettings')?.addEventListener('click',()=>{
  data.momName=$('#momName')?.value.trim()||'';
  data.babyName=$('#babyNameInput').value.trim();
  data.babyGender=['girl','boy','neutral'].includes(data.babyGender)?data.babyGender:'neutral';
  data.dueDate=$('#dueDateInput').value;
  data.theme=$('#themeSelect').value;
  persist();applyTheme();renderMomName();renderBabyName();updatePregnancy();updateStandalonePregnancyProgress();nav('home');
});
$('#deleteProfile')?.addEventListener('click',async()=>{
  const en=(localStorage.getItem('pregnancyPlannerLanguage')==='en');
  const ok=confirm(en?'Do you really want to delete your profile and ALL data? This cannot be undone.':'Opravdu chceš smazat profil a VŠECHNA data? Tuto akci nelze vrátit zpět.');
  if(!ok)return;
  try{ if(photoDB?.db) await photoDB.clear(); }catch(e){ console.warn(e); }
  localStorage.removeItem('pregnancyPlanner');localStorage.removeItem('pregnancyPlannerLanguage');localStorage.removeItem('mimibeOnboardingCompleted');
  data=JSON.parse(JSON.stringify(defaults));selectedPhotoData='';
  alert(en?'Your profile and all data have been deleted.':'Profil a všechna data byla smazána.');location.reload();
});

$$('[data-action="equipment"]').forEach(b=>b.addEventListener('click',()=>openChecklist('equipment')));
$$('[data-action="hospital"]').forEach(b=>b.addEventListener('click',()=>openChecklist('hospital')));
$$('.checklist-open-row').forEach(b=>b.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();b.click();}}));
$('#createChecklistBtn')?.addEventListener('click',()=>{
  const name=prompt(i18nMsg('Jak se má nový checklist jmenovat?','What should the new checklist be called?'))?.trim();
  if(!name) return;
  const id='c'+Date.now().toString(36)+Math.random().toString(36).slice(2,6);
  data.customChecklists.push({id,name,items:[],done:[]}); persist(); updateChecklistSummary(); openChecklist('custom:'+id);
});
$('#deleteCustomChecklist')?.addEventListener('click',()=>{
  const m=getChecklistModel(currentChecklist); if(!m || m.builtin) return;
  if(!confirm(i18nMsg(`Opravdu smazat checklist „${m.name}“?`,`Delete checklist “${m.name}”?`))) return;
  data.customChecklists=data.customChecklists.filter(c=>c.id!==m.raw.id); persist(); updateChecklistSummary(); $('#checklistDialog').close();
});
$('#closeDialog').addEventListener('click',()=>$('#checklistDialog').close());
$('#addChecklistItem').addEventListener('click',()=>{
  const input=$('#newChecklistItem'); const text=input.value.trim(); if(!text)return;
  const m=getChecklistModel(currentChecklist); if(!m)return; m.items.push(text); if(currentChecklist==='equipment') data.equipmentPrices.push(null); input.value=''; persist(); renderChecklistDialog(); updateChecklistSummary();
});

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
    return `<article class="photo-card" data-photo-id="${p.id}"><button class="photo-open" type="button" onclick="openPhotoViewer(${p.id})" aria-label="Zvětšit fotku"><img src="${p.image}" alt="${category?'Vzpomínka – '+escapeHtml(category):'Vzpomínka'}"></button><button class="delete-photo" onclick="event.stopPropagation();deletePhoto(${p.id})" aria-label="Smazat fotku"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 3h6l1 2h4v2H4V5h4l1-2Zm-2 6h10l-.7 11H7.7L7 9Zm3 2v7h2v-7h-2Zm4 0v7h2v-7h-2Z"/></svg></button><div class="photo-card-copy">${category?`<strong>${escapeHtml(category)}</strong>`:''}<small>${p.date?fmtDate(new Date(p.date+'T00:00:00')):''}${p.caption?' • '+escapeHtml(p.caption):''}</small></div></article>`;
  }).join(''):'<div class="card empty-photos">Zatím tu žádná fotka není. Přidej první vzpomínku ♡</div>';
}
async function deletePhoto(id){if(!confirm(i18nMsg('Smazat tuto fotku?','Delete this photo?')))return;await photoDB.remove(id);renderPhotos();}
window.deletePhoto=deletePhoto;


// Full-screen photo viewer
let photoViewerList=[], photoViewerIndex=0;
async function openPhotoViewer(id){
  if(!photoDB.db)return;
  let photos=await photoDB.all();
  photos=photos.filter(p=>photoSrc(p)).sort((a,b)=>(b.date||'').localeCompare(a.date||'') || b.id-a.id);
  if(currentPhotoFilter==='none')photos=photos.filter(p=>!p.type);
  else if(currentPhotoFilter!=='all')photos=photos.filter(p=>p.type===currentPhotoFilter);
  const idx=photos.findIndex(p=>p.id===id);
  if(idx<0)return;
  photoViewerList=photos;photoViewerIndex=idx;
  renderPhotoViewer();
  const dlg=document.getElementById('photoViewerDialog');
  if(dlg?.showModal)dlg.showModal();else dlg?.setAttribute('open','');
}
window.openPhotoViewer=openPhotoViewer;

function renderPhotoViewer(){
  const p=photoViewerList[photoViewerIndex]; if(!p)return;
  const img=document.getElementById('photoViewerImage');
  if(img)img.src=photoSrc(p);
  const cap=document.getElementById('photoViewerCaption');
  if(cap)cap.textContent=p.caption||'';
  const meta=document.getElementById('photoViewerMeta');
  if(meta){
    const parts=[];
    if(p.type)parts.push(photoCategoryLabel(p.type));
    if(p.date){try{parts.push(fmtDate(new Date(p.date+'T00:00:00')))}catch(e){parts.push(p.date)}}
    meta.textContent=parts.join(' · ');
  }
  const count=document.getElementById('photoViewerCounter');
  if(count)count.textContent=`${photoViewerIndex+1} / ${photoViewerList.length}`;
  const prev=document.getElementById('photoViewerPrev'), next=document.getElementById('photoViewerNext');
  if(prev)prev.disabled=photoViewerList.length<2;
  if(next)next.disabled=photoViewerList.length<2;
}
function stepPhotoViewer(dir){
  if(photoViewerList.length<2)return;
  photoViewerIndex=(photoViewerIndex+dir+photoViewerList.length)%photoViewerList.length;
  renderPhotoViewer();
}
function closePhotoViewer(){const dlg=document.getElementById('photoViewerDialog');if(dlg?.close)dlg.close();else dlg?.removeAttribute('open');}
document.addEventListener('click',e=>{
  if(e.target.closest('#photoViewerClose'))closePhotoViewer();
  if(e.target.closest('#photoViewerPrev'))stepPhotoViewer(-1);
  if(e.target.closest('#photoViewerNext'))stepPhotoViewer(1);
  if(e.target.closest('#photoViewerDelete')){
    const p=photoViewerList[photoViewerIndex]; if(!p)return;
    if(!confirm(i18nMsg('Smazat tuto fotku?','Delete this photo?')))return;
    photoDB.remove(p.id).then(()=>{
      photoViewerList.splice(photoViewerIndex,1);
      if(!photoViewerList.length){closePhotoViewer();renderPhotos();return;}
      if(photoViewerIndex>=photoViewerList.length)photoViewerIndex=photoViewerList.length-1;
      renderPhotoViewer();renderPhotos();
    });
  }
});
document.addEventListener('keydown',e=>{
  const dlg=document.getElementById('photoViewerDialog');if(!dlg?.open)return;
  if(e.key==='ArrowLeft')stepPhotoViewer(-1);
  if(e.key==='ArrowRight')stepPhotoViewer(1);
  if(e.key==='Escape')closePhotoViewer();
});

async function handlePhotoInput(e){
  const file=e.target.files?.[0];if(!file)return;
  try{selectedPhotoData=await compressImage(file);$('#photoPreview').src=selectedPhotoData;$('#photoPreviewWrap').classList.remove('hidden');}
  catch{alert(i18nMsg('Fotku se nepodařilo načíst.','The photo could not be loaded.'));}
}
$('#photoGalleryInput').addEventListener('change',handlePhotoInput);
$('#photoCameraInput').addEventListener('change',handlePhotoInput);
$('#savePhoto').addEventListener('click',async()=>{
  if(!selectedPhotoData)return alert(i18nMsg('Nejdřív vyber fotku.','Please choose a photo first.'));
  await photoDB.add({type:$('#photoTypeInput').value,date:$('#photoDateInput').value||new Date().toISOString().slice(0,10),caption:$('#photoCaptionInput').value.trim(),image:selectedPhotoData,createdAt:Date.now()});
  selectedPhotoData='';$('#photoGalleryInput').value='';$('#photoCameraInput').value='';$('#photoCaptionInput').value='';$('#photoPreview').src='';$('#photoPreviewWrap').classList.add('hidden');
  renderPhotos();
});
$$('[data-photo-filter]').forEach(btn=>btn.addEventListener('click',()=>{currentPhotoFilter=btn.dataset.photoFilter;$$('[data-photo-filter]').forEach(b=>b.classList.toggle('active',b===btn));renderPhotos();}));

async function init(){
  applyTheme();
  $('#babyNameInput').value=data.babyName||'';
  refreshGenderChoice();
  $('#dueDateInput').value=data.dueDate;
  $('#themeSelect').value=data.theme;
  $('#photoDateInput').value=new Date().toISOString().slice(0,10);
  renderToday();renderBabyName();updatePregnancy();renderEvents();renderNotes();updateChecklistSummary();
  try{await photoDB.open();await renderPhotos();}catch(e){console.warn('Fotogalerie není dostupná',e);}
}
init();


// Zdroj fotografie – používá galerie i moderní generátor videa.
function photoSrc(p){return p?.image||p?.dataUrl||p?.src||p?.url||p?.photo||'';}


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
      "settings.languageTitle":"Jazyk","settings.currencyLabel":"Měna rozpočtu","settings.currencyTitle":"Měna"
    }
  },
  en:{
    keyed:{
      "settings.languageLabel":"App language",
      "settings.languageTitle":"Language","settings.currencyLabel":"Budget currency","settings.currencyTitle":"Currency"
    },
    exact:{
      "Domů":"Home","Kalendář":"Calendar","Checklisty":"Checklists","Nastavení":"Settings","Měna rozpočtu":"Budget currency","Měna":"Currency",
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

// Translation-only additions for the English interface. No app logic is changed here.
Object.assign(MIMIBE_EN,{
  "＋ Vytvořit vlastní checklist":"＋ Create custom checklist",
  "Vybrat z galerie":"Choose from gallery",
  "JPG nebo PNG z telefonu":"JPG or PNG from your phone",
  "Vyfotit":"Take a photo",
  "Otevřít fotoaparát":"Open camera",
  "MimiBe samo seřadí tvoje fotky, přidá jemné přechody a vytvoří hotové vzpomínkové video.":"MimiBe automatically arranges your photos, adds gentle transitions and creates a finished memory video.",
  "Vytvořit automatické video ♡":"Create automatic video ♡",
  "fotek":"photos",
  "délka":"duration",
  "Hudba (volitelně)":"Music (optional)",
  "Můžeš vybrat vlastní skladbu z telefonu. Když nic nevybereš, video bude bez hudby.":"You can choose your own song from your phone. If you don't choose one, the video will have no music.",
  "Připravuji video…":"Preparing video…",
  "Zrušit":"Cancel",
  "Uložit video":"Save video",
  "🔒 Fotky ani hudba neopustí tvoje zařízení.":"🔒 Your photos and music never leave your device.",
  "Smazat fotku":"Delete photo",
  "☕ Podpořit MadlaArt":"☕ Support MadlaArt",
  "🗑 Smazat tento checklist":"🗑 Delete this checklist",
  "Zatím prázdné.":"Empty for now.",
  "Zavřít":"Close",
  "Předchozí fotka":"Previous photo",
  "Další fotka":"Next photo",
  "Otevřít checklist Výbavička":"Open Baby essentials checklist",
  "Otevřít checklist Do porodnice":"Open Hospital bag checklist",
  "Přidat poznámku":"Add note",
  "MimiBe seřadí tvoje vzpomínky podle data a vytvoří z nich jemné video s logem, plynulými prolínačkami a pomalým pohybem.":"MimiBe uses all your saved memories, sorts them by date and automatically adds gentle crossfades and motion.",
  "Načítám fotky…":"Loading photos…",
  "Připravuji hudbu…":"Preparing music…",
  "MimiBe tvoří video…":"MimiBe is creating your video…",
  "Hotovo ♡ Video je připravené.":"Done ♡ Your video is ready.",
  "Video se nepodařilo vytvořit.":"The video could not be created.",
  "A ještě spousta dalších… ♡":"And many more to come… ♡",
  "Naše vzpomínka":"Our memory",
  "Vzpomínka":"Memory",
  "Zvětšit fotku":"Enlarge photo",
  "Smazat":"Delete",
  "Cena":"Price",
  "Splněno":"Completed",
  "Rozpočet na výbavičku":"Essentials budget",
  "Nastavit rozpočet na výbavičku":"Set an essentials budget",
  "Utraceno":"Spent",
  "Zbývá":"Remaining",
  "Překročeno o":"Over by",
  "z rozpočtu":"of budget",
  "Do rozpočtu se počítají pouze položky označené jako pořízené.":"Only items marked as purchased count toward the budget.",
  "Těhotenství • Miminko • Vzpomínky":"Pregnancy • Baby • Memories"
});

Object.assign(MIMIBE_EN,{
  "Bonusové video":"Bonus video",
  "Kluk nebo holka? ♡":"Boy or girl? ♡",
  "Vytvoř krátké odhalovací video z ultrazvuků a fotek a pošli překvapení rodině.":"Create a short reveal video from ultrasound scans and photos and send the surprise to your family.",
  "Vytvořit odhalení":"Create reveal",
  "Co odhalujeme?":"What are we revealing?",
  "Holčičku":"A girl",
  "Chlapečka":"A boy",
  "Úvodní text":"Opening text",
  "Máme pro vás malé překvapení…":"We have a little surprise for you…",
  "Na konci se objeví barevné srdce a odhalení. Jméno miminka se přidá automaticky, pokud ho máš vyplněné v profilu.":"A coloured heart and the reveal appear at the end. Your baby's name is added automatically if it is filled in in your profile."
});

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

function forceMimiBeCzechCoreLabels(){
  if(currentLang()!=='cs')return;

  const navTexts={home:'Domů',calendar:'Kalendář',settings:'Nastavení'};
  Object.entries(navTexts).forEach(([key,text])=>{
    const btn=document.querySelector(`.bottom-nav [data-nav="${key}"]`);
    const label=btn?.querySelector('span:last-child');
    if(label)label.textContent=text;
  });

  const checklistBtn=document.querySelector('.bottom-nav [data-action="equipment"]');
  const checklistLabel=checklistBtn?.querySelector('span:last-child');
  if(checklistLabel)checklistLabel.textContent='Checklisty';

  const memoryCard=document.querySelector('#createVideoFuture')?.closest('.video-maker-card');
  if(memoryCard){
    const s=memoryCard.querySelector('small'); if(s)s.textContent='Vzpomínkové video';
    const h=memoryCard.querySelector('h3'); if(h)h.textContent='Vytvořit video ♡';
    const p=memoryCard.querySelector('p'); if(p)p.textContent='MimiBe samo seřadí tvoje fotky, přidá jemné přechody a vytvoří hotové vzpomínkové video.';
    const b=memoryCard.querySelector('#createVideoFuture'); if(b)b.textContent='Vytvořit video';
  }

  const revealCard=document.querySelector('#createGenderReveal')?.closest('.video-maker-card');
  if(revealCard){
    const s=revealCard.querySelector('small'); if(s)s.textContent='Bonusové video';
    const h=revealCard.querySelector('h3'); if(h)h.textContent='Kluk nebo holka? ♡';
    const p=revealCard.querySelector('p'); if(p)p.textContent='Vytvoř krátké odhalovací video z ultrazvuků a fotek a pošli překvapení rodině.';
    const b=revealCard.querySelector('#createGenderReveal'); if(b)b.textContent='Vytvořit odhalení';
  }
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
  if(lang==='cs')forceMimiBeCzechCoreLabels();
}

const _originalApplyLanguage=applyLanguage;
applyLanguage=function(lang){
  _originalApplyLanguage(lang);
  setTimeout(()=>localizeWholeApp(lang),0);
};

document.addEventListener('DOMContentLoaded',()=>{
  const lang=currentLang();
  setTimeout(()=>{localizeWholeApp(lang);if(lang==='cs')forceMimiBeCzechCoreLabels();},100);
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
  const bar=document.getElementById('pregnancyProgressBar');
  const fill=document.getElementById('pregnancyProgressFill');
  const label=document.getElementById('pregnancyProgressPercent');
  if(!bar || !fill || !label)return;
  let pct=0;
  if(data?.dueDate){
    const today=new Date(); today.setHours(0,0,0,0);
    const due=new Date(data.dueDate+'T00:00:00');
    const startDate=new Date(due); startDate.setDate(startDate.getDate()-280);
    let elapsed=Math.floor((today-startDate)/(1000*60*60*24));
    elapsed=Math.max(0,Math.min(280,elapsed));
    pct=Math.round(elapsed/280*100);
  }else{
    const source=document.getElementById('progressPercent');
    const m=(source?.textContent||'').match(/(\d+)\s*%/); if(m)pct=parseInt(m[1],10);
  }
  pct=Math.max(0,Math.min(100,Number.isFinite(pct)?pct:0));
  fill.style.width=pct+'%'; label.textContent=pct+' %'; bar.setAttribute('aria-valuenow',String(pct)); bar.setAttribute('aria-label',i18nMsg('Průběh těhotenství','Pregnancy progress'));
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
const memoryVideoState={photos:[],selected:new Set(),url:'',working:false,logo:null,musicChoice:'none',previewMusic:null,mode:'memory',revealGender:'',revealIntro:''};


const MIMIBE_MUSIC_PRESETS={
  happy:{
    url:'assets/music/happy-days-hina.mp3',
    title:'Happy Days', artist:'Hina', license:'CC0', source:'Chosic',
    credit:null
  },
  moonlight:{
    url:'assets/music/moonlight-scott-buckley.mp3',
    title:'Moonlight', artist:'Scott Buckley', license:'CC BY 4.0', source:'scottbuckley.com.au',
    credit:['Moonlight — Scott Buckley','CC BY 4.0 · scottbuckley.com.au']
  },
  west:{
    url:'assets/music/west-in-africa-john-bartmann.mp3',
    title:'West in Africa', artist:'John Bartmann', license:'CC0', source:'johnbartmann.com',
    credit:null
  },
  canon:{
    url:'assets/music/canon-in-d-major-kevin-macleod.mp3',
    title:'Canon in D Major', artist:'Kevin MacLeod', license:'CC BY 4.0', source:'incompetech.com',
    credit:['Canon in D Major — Kevin MacLeod','CC BY 4.0 · incompetech.com']
  },
  guitar:{
    url:'assets/music/guitar-gentle-peritune.mp3',
    title:'Guitar Gentle', artist:'PeriTune', license:'CC BY 4.0', source:'peritune.com',
    credit:['Guitar Gentle — PeriTune','CC BY 4.0 · peritune.com']
  },
  glow:{
    url:'assets/music/glow-scott-buckley.mp3',
    title:'Glow', artist:'Scott Buckley', license:'CC BY 4.0', source:'scottbuckley.com.au',
    credit:['Glow — Scott Buckley','CC BY 4.0 · scottbuckley.com.au']
  },
  along:{
    url:'assets/music/along-the-way-alex-productions.mp3',
    title:'Along The Way', artist:'Alex-Productions', license:'CC BY 3.0', source:'onsound.eu',
    credit:['Along The Way — Alex-Productions','CC BY 3.0 · onsound.eu']
  },
  helice:{
    url:'assets/music/helice-monplaisir.mp3',
    title:'Hélice', artist:'Monplaisir', license:'CC0', source:'Free Music Archive',
    credit:null
  }
};

function videoLang(){return (localStorage.getItem('pregnancyPlannerLanguage')==='en')?'en':'cs';}
function videoText(cs,en){return videoLang()==='en'?en:cs;}

function setMemoryVideoLanguage(){
  const en=videoLang()==='en', reveal=memoryVideoState.mode==='reveal';
  const set=(id,cs,enText)=>{const el=document.getElementById(id);if(el)el.textContent=en?enText:cs;};
  if(reveal){
    set('videoDialogEyebrow','Bonusové video','Bonus video');
    set('videoDialogTitle','Kluk nebo holka? ♡','Boy or girl? ♡');
    set('videoDialogIntro','Vyber 1–6 ultrazvuků nebo fotek. MimiBe je doplní jemnými černobílými detaily ručičky a nožiček a vytvoří krátké odhalení.','Choose 1–6 ultrasound scans or photos. MimiBe will add gentle black-and-white detail shots of a tiny hand and feet and create a short reveal.');
    set('videoPickerTitle','Vyber ultrazvuky a fotky','Choose ultrasound scans and photos');
    set('videoPickerHint','Do odhalovacího videa můžeš vybrat maximálně 6 fotek. Ultrazvuky se zobrazují jako první.','You can select up to 6 photos for the reveal video. Ultrasound scans are shown first.');
    set('memoryVideoSelectAll','Vybrat 6','Select 6');
    set('generateMemoryVideo','Vytvořit odhalení','Create reveal');
  }else{
    set('videoDialogEyebrow','Vzpomínkové video','Memory video');
    set('videoDialogTitle','Vytvořit automatické video ♡','Create automatic video ♡');
    set('videoDialogIntro','Vyber 2–15 fotek. MimiBe z nich vytvoří plynulé MP4 video s jemnými prolínačkami a celými fotografiemi bez ořezu.','Choose 2–15 photos. MimiBe will create a smooth MP4 video with gentle crossfades and uncropped photos.');
    set('videoPickerTitle','Vyber fotky do videa','Choose photos for your video');
    set('videoPickerHint','Do jednoho videa můžeš vybrat maximálně 15 fotek.','You can select up to 15 photos for one video.');
    set('memoryVideoSelectAll','Vybrat 15','Select 15');
    set('generateMemoryVideo','Vytvořit video','Create video');
  }
  set('videoPhotoCountLabel','fotek','photos');
  set('videoDurationLabel','délka','duration');
  set('revealGenderTitle','Co odhalujeme?','What are we revealing?');
  set('revealGirlLabel','Holčičku','A girl');
  set('revealBoyLabel','Chlapečka','A boy');
  set('revealIntroLabel','Úvodní text','Opening text');
  set('revealSettingsHint','Na konci se objeví barevné srdce a odhalení. Jméno miminka se přidá automaticky, pokud ho máš vyplněné v profilu.','A coloured heart and the reveal appear at the end. Your baby\'s name is added automatically if it is filled in in your profile.');
  set('videoMusicLabel','Hudba (volitelně)','Music (optional)');
  set('videoMusicHint','Vyber hudbu MimiBe, vlastní skladbu nebo video vytvoř bez hudby.','Choose MimiBe music, your own song, or create the video without music.');
  set('musicNoneTitle','Bez hudby','No music'); set('musicNoneSub','Jen vzpomínky','Memories only');
  set('musicHappyTitle','Happy Days','Happy Days'); set('musicHappySub','Hina · radostná','Hina · joyful');
  set('musicMoonlightTitle','Moonlight','Moonlight'); set('musicMoonlightSub','Scott Buckley · snová','Scott Buckley · dreamy');
  set('musicWestTitle','West in Africa','West in Africa'); set('musicWestSub','John Bartmann · lehká','John Bartmann · light');
  set('musicCanonTitle','Canon in D Major','Canon in D Major'); set('musicCanonSub','Kevin MacLeod · slavnostní','Kevin MacLeod · tender classic');
  set('musicGuitarTitle','Guitar Gentle','Guitar Gentle'); set('musicGuitarSub','PeriTune · jemná kytara','PeriTune · gentle guitar');
  set('musicGlowTitle','Glow','Glow'); set('musicGlowSub','Scott Buckley · hřejivá','Scott Buckley · warm');
  set('musicAlongTitle','Along The Way','Along The Way'); set('musicAlongSub','Alex-Productions · pohodová','Alex-Productions · easygoing');
  set('musicHeliceTitle','Hélice','Hélice'); set('musicHeliceSub','Monplaisir · nostalgická','Monplaisir · nostalgic');
  set('musicCustomTitle','Moje hudba','My music'); set('musicCustomSub','Vyber skladbu z telefonu','Choose a song from your phone');
  set('musicCustomHint','Vyber zvukový soubor uložený v telefonu.','Choose an audio file saved on your phone.');
  set('videoMusicLicense','Vestavěné skladby jsou CC0 nebo CC BY. U skladeb CC BY MimiBe automaticky přidá kredit na závěr videa.','Built-in tracks are CC0 or CC BY. For CC BY tracks, MimiBe automatically adds the credit to the end of the video.');
  set('musicCreditsSummary','Licence a autoři hudby','Music licences and credits');
  set('cancelMemoryVideo','Zrušit','Cancel'); set('downloadMemoryVideo','Uložit video','Save video');
  set('videoPrivacyText','🔒 Tvoje fotky se nikam neodesílají. Vestavěná hudba je součástí MimiBe.','🔒 Your photos are not uploaded anywhere. Built-in music is included with MimiBe.');
  refreshMemoryVideoSelection();
}
function formatVideoDuration(sec){
  const s=Math.max(0,Math.round(sec));
  const m=Math.floor(s/60), r=s%60;
  return m?`${m}:${String(r).padStart(2,'0')}`:`0:${String(r).padStart(2,'0')}`;
}


const MEMORY_VIDEO_MAX_PHOTOS=15;
const REVEAL_VIDEO_MAX_PHOTOS=6;
function videoSelectionLimits(){return memoryVideoState.mode==='reveal'?{min:1,max:REVEAL_VIDEO_MAX_PHOTOS}:{min:2,max:MEMORY_VIDEO_MAX_PHOTOS};}
function selectedMemoryVideoPhotos(){return memoryVideoState.photos.filter(p=>memoryVideoState.selected.has(String(p.id)));}
function refreshRevealGenderChoice(){
  document.querySelectorAll('[data-reveal-gender]').forEach(btn=>{
    const active=btn.dataset.revealGender===memoryVideoState.revealGender;
    btn.classList.toggle('active',active);btn.setAttribute('aria-pressed',active?'true':'false');
  });
}
function refreshMemoryVideoSelection(){
  const chosen=selectedMemoryVideoPhotos(), total=memoryVideoState.photos.length, lim=videoSelectionLimits();
  document.querySelectorAll('.memory-video-thumb').forEach(btn=>btn.setAttribute('aria-pressed',memoryVideoState.selected.has(btn.dataset.id)?'true':'false'));
  const c=document.getElementById('videoPickerCount');
  if(c)c.textContent=videoText(`Vybráno ${chosen.length} / ${Math.min(lim.max,total)}`,`Selected ${chosen.length} / ${Math.min(lim.max,total)}`);
  const gen=document.getElementById('generateMemoryVideo');
  const genderOk=memoryVideoState.mode!=='reveal' || ['girl','boy'].includes(memoryVideoState.revealGender);
  if(gen)gen.disabled=chosen.length<lim.min || !genderOk;
  const pc=document.getElementById('videoPhotoCount'); if(pc)pc.textContent=String(chosen.length);
  const de=document.getElementById('videoDurationEstimate');
  if(de)de.textContent=chosen.length>=lim.min?formatVideoDuration(memoryVideoState.mode==='reveal'?(10.7+chosen.length*1.9):(3.2+chosen.length*4.6+2.5)):'—';
  refreshRevealGenderChoice();
}
function renderMemoryVideoPicker(){
  const grid=document.getElementById('memoryVideoPhotoGrid'); if(!grid)return;
  const lim=videoSelectionLimits(); grid.innerHTML='';
  memoryVideoState.photos.forEach((p,i)=>{
    const b=document.createElement('button'); b.type='button'; b.className='memory-video-thumb'; b.dataset.id=String(p.id);
    const img=document.createElement('img'); img.src=p.image; img.alt=videoText(`Fotka ${i+1}`,`Photo ${i+1}`);
    const tick=document.createElement('span'); tick.className='memory-video-thumb-check'; tick.textContent='✓';
    if(memoryVideoState.mode==='reveal' && p.type==='ultrasound')b.classList.add('is-ultrasound');
    b.append(img,tick);
    b.addEventListener('click',()=>{
      const id=String(p.id);
      if(memoryVideoState.selected.has(id)) memoryVideoState.selected.delete(id);
      else if(memoryVideoState.selected.size<lim.max) memoryVideoState.selected.add(id);
      else alert(memoryVideoState.mode==='reveal'?videoText('Do odhalovacího videa můžeš vybrat maximálně 6 fotek.','You can select up to 6 photos for the reveal video.'):videoText('Do jednoho videa můžeš vybrat maximálně 15 fotek.','You can select up to 15 photos for one video.'));
      refreshMemoryVideoSelection();
    });
    grid.appendChild(b);
  });
  refreshMemoryVideoSelection();
}

async function openMemoryVideoDialog(mode='memory'){
  if(!photoDB.db) await photoDB.open();
  let photos=await photoDB.all();
  photos=photos.filter(p=>p.image).sort((a,b)=>(a.date||'').localeCompare(b.date||'') || a.id-b.id);
  if(!photos.length){alert(videoText('Nejdřív přidej alespoň jednu fotku do Vzpomínek.','Please add at least one photo to Memories first.'));return;}
  memoryVideoState.mode=mode==='reveal'?'reveal':'memory';
  if(memoryVideoState.mode==='reveal'){
    photos=photos.sort((a,b)=>Number(b.type==='ultrasound')-Number(a.type==='ultrasound') || (a.date||'').localeCompare(b.date||'') || a.id-b.id);
  }
  memoryVideoState.photos=photos;
  const lim=videoSelectionLimits();
  const preferred=memoryVideoState.mode==='reveal'?photos.filter(p=>p.type==='ultrasound').slice(0,4):photos.slice(0,lim.max);
  const initial=(memoryVideoState.mode==='reveal' && preferred.length?preferred:photos.slice(0,Math.min(lim.max,4)));
  memoryVideoState.selected=new Set(initial.map(p=>String(p.id)));
  memoryVideoState.revealGender=memoryVideoState.mode==='reveal'&&['girl','boy'].includes(data?.babyGender)?data.babyGender:'';
  const revealSettings=document.getElementById('genderRevealSettings'); if(revealSettings)revealSettings.classList.toggle('hidden',memoryVideoState.mode!=='reveal');
  const introInput=document.getElementById('genderRevealIntroText');
  if(introInput)introInput.value=videoText('Máme pro vás malé překvapení…','We have a little surprise for you…');
  setMemoryVideoLanguage(); renderMemoryVideoPicker(); refreshRevealGenderChoice();

  const dlg=document.getElementById('memoryVideoDialog'),preview=document.getElementById('memoryVideoPreview'),download=document.getElementById('downloadMemoryVideo'),progress=document.getElementById('memoryVideoProgress');
  if(memoryVideoState.url){URL.revokeObjectURL(memoryVideoState.url);memoryVideoState.url='';}
  preview.classList.add('hidden'); preview.removeAttribute('src'); download.classList.add('hidden'); progress.classList.add('hidden');
  document.getElementById('memoryVideoMusic').value=''; memoryVideoState.musicChoice='none'; stopMemoryMusicPreview(); refreshMemoryMusicChoice(); dlg.showModal();
}
function closeMemoryVideoDialog(){
  if(memoryVideoState.working)return;
  stopMemoryMusicPreview();
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


async function loadMemoryVideoBaby(){
  const gender=data?.babyGender||'neutral';
  const src=gender==='girl'?'assets/baby-pink.webp':gender==='boy'?'assets/baby-blue.webp':'assets/baby-neutral.webp';
  try{return await loadVideoImage(src);}catch(e){return null;}
}

async function loadMemoryVideoLogo(){
  if(memoryVideoState.logo)return memoryVideoState.logo;
  try{memoryVideoState.logo=await loadVideoImage('assets/mimibe-logo.svg');}
  catch(e){memoryVideoState.logo=null;}
  return memoryVideoState.logo;
}

function easeInOutVideo(p){
  p=Math.max(0,Math.min(1,p));
  return p<.5?4*p*p*p:1-Math.pow(-2*p+2,3)/2;
}

function drawBlurBackdrop(ctx,img,w,h,alpha=1){
  ctx.save();
  ctx.globalAlpha=alpha;
  ctx.filter='blur(28px) brightness(.92) saturate(.82)';
  coverImage(ctx,img,w,h,1.16,0,0,1);
  ctx.filter='none';
  ctx.fillStyle='rgba(255,250,246,.30)';
  ctx.fillRect(0,0,w,h);
  ctx.restore();
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

function drawVideoIntro(ctx,w,h,babyName,period,theme,progress=0,logoImg=null,firstImg=null,babyImg=null){
  const palettes={
    neutral:{bg:'#f7f3ed',name:'#cda06c',soft:'#ead8c4'},
    pink:{bg:'#fff5f7',name:'#f3a6ad',soft:'#f5d7dc'},
    blue:{bg:'#f3f9fc',name:'#91bdd9',soft:'#d9eaf4'}
  };
  const gender=data?.babyGender||'neutral';
  const pal=gender==='girl'?palettes.pink:gender==='boy'?palettes.blue:palettes.neutral;
  const p=easeInOutVideo(progress);
  ctx.fillStyle=pal.bg;ctx.fillRect(0,0,w,h);

  // Soft MimiBe logo at top.
  ctx.save();
  ctx.globalAlpha=Math.min(1,p*2);
  if(logoImg){
    const maxW=w*.36,maxH=h*.095;
    const r=Math.min(maxW/logoImg.width,maxH/logoImg.height);
    const lw=logoImg.width*r,lh=logoImg.height*r;
    ctx.drawImage(logoImg,w*.60-lw/2,h*.105-lh/2,lw,lh);
  }else{
    ctx.textAlign='center';ctx.fillStyle='#cda06c';ctx.font=`700 ${Math.round(w*.075)}px Georgia,serif`;ctx.fillText('MimiBe',w*.73,h*.12);
  }
  ctx.restore();

  // Polaroid-like first photo, intentionally tilted.
  const photoX=w*.12, photoY=h*.245, photoW=w*.77, photoH=h*.39;
  ctx.save();
  ctx.translate(photoX+photoW/2,photoY+photoH/2);
  ctx.rotate(-6*Math.PI/180);
  const scale=.965+.035*p;ctx.scale(scale,scale);
  ctx.shadowColor='rgba(75,55,45,.16)';ctx.shadowBlur=24;ctx.shadowOffsetY=10;
  ctx.fillStyle='#fffdf9';roundRectVideo(ctx,-photoW/2-10,-photoH/2-10,photoW+20,photoH+20,18);ctx.fill();
  ctx.shadowColor='transparent';
  if(firstImg){
    ctx.save();roundRectVideo(ctx,-photoW/2,-photoH/2,photoW,photoH,12);ctx.clip();
    coverImage(ctx,firstImg,photoW,photoH,1.02,0,0,1);
    ctx.restore();
  }else{
    ctx.fillStyle=pal.soft;roundRectVideo(ctx,-photoW/2,-photoH/2,photoW,photoH,12);ctx.fill();
  }
  ctx.restore();

  // Baby name over lower photo edge.
  const displayName=(babyName||videoText('Naše miminko','Our baby')).trim();
  ctx.save();ctx.textAlign='center';ctx.globalAlpha=Math.min(1,Math.max(0,(p-.12)*1.7));
  ctx.fillStyle=pal.name;
  let fontSize=Math.round(w*.086);
  ctx.font=`800 ${fontSize}px Arial, sans-serif`;
  while(ctx.measureText(displayName.toUpperCase()).width>w*.78 && fontSize>34){fontSize-=2;ctx.font=`800 ${fontSize}px Arial, sans-serif`;}
  ctx.fillText(displayName.toUpperCase(),w/2,h*.635);
  ctx.restore();

  // Date range.
  if(period){
    ctx.save();ctx.textAlign='center';ctx.fillStyle='#181818';
    ctx.font=`500 ${Math.round(w*.052)}px Arial, sans-serif`;
    ctx.fillText(period,w/2,h*.705);
    ctx.restore();
  }

  // Bottom baby illustration.
  if(babyImg){
    ctx.save();ctx.globalAlpha=Math.min(1,p*1.4);
    const maxW=w*.30,maxH=h*.22;
    const r=Math.min(maxW/babyImg.width,maxH/babyImg.height);
    const bw=babyImg.width*r,bh=babyImg.height*r;
    ctx.drawImage(babyImg,(w-bw)/2,h*.815-bh/2,bw,bh);
    ctx.restore();
  }
}

function drawPhotoFrame(ctx,img,w,h,progress,nextImg=null,transition=0,caption='',dateText='',theme='neutral'){
  const palettes={neutral:['#f8f2eb','#6b584d','#d4ad7c'],pink:['#fff1f5','#73545e','#e99bb3'],blue:['#eef8fc','#526b77','#8fcbe6']};
  const [bg,text,accent]=palettes[theme]||palettes.neutral;
  const p=easeInOutVideo(progress), t=easeInOutVideo(transition);
  ctx.fillStyle=bg;ctx.fillRect(0,0,w,h);

  // Soft full-frame backdrop prevents ugly empty bars on portrait/landscape photos.
  drawBlurBackdrop(ctx,img,w,h,1-t);
  if(nextImg&&t>0)drawBlurBackdrop(ctx,nextImg,w,h,t);
  ctx.fillStyle='rgba(250,246,241,.28)';ctx.fillRect(0,0,w,h);

  const margin=34, photoY=62, photoH=h-230, photoW=w-margin*2;
  ctx.save();
  ctx.shadowColor='rgba(58,43,35,.18)';ctx.shadowBlur=30;ctx.shadowOffsetY=10;
  roundRectVideo(ctx,margin,photoY,photoW,photoH,34);ctx.clip();
  ctx.translate(margin,photoY);
  // True eased crossfade: outgoing and incoming frame are both visible throughout the transition.
  coverImage(ctx,img,photoW,photoH,1+.045*p,-.22+.44*p,.10-.20*p,1-t);
  if(nextImg&&t>0)coverImage(ctx,nextImg,photoW,photoH,1.045-.025*t,.20-.38*t,-.08+.16*t,t);
  ctx.restore();

  // Gentle glass fade behind caption for readability.
  const grad=ctx.createLinearGradient(0,h-205,0,h);
  grad.addColorStop(0,'rgba(248,242,235,0)');grad.addColorStop(.42,'rgba(248,242,235,.74)');grad.addColorStop(1,'rgba(248,242,235,.96)');
  ctx.fillStyle=grad;ctx.fillRect(0,h-205,w,205);

  ctx.textAlign='center';ctx.fillStyle=text;
  if(caption){ctx.font=`600 ${Math.round(w*.034)}px Arial, sans-serif`;const txt=caption.length>55?caption.slice(0,54)+'…':caption;ctx.fillText(txt,w/2,h-106);}
  if(dateText){ctx.font=`500 ${Math.round(w*.026)}px Arial, sans-serif`;ctx.fillStyle=text+'9e';ctx.fillText(dateText,w/2,h-68);}
  ctx.fillStyle=accent;ctx.globalAlpha=.65;ctx.font=`${Math.round(w*.03)}px serif`;ctx.fillText('♡',w/2,h-32);ctx.globalAlpha=1;
}

const MEDIABUNNY_URL='https://cdn.jsdelivr.net/npm/mediabunny@1.53.0/dist/bundles/mediabunny.min.mjs';
let mediabunnyModulePromise=null;
function loadMediabunny(){
  if(!mediabunnyModulePromise) mediabunnyModulePromise=import(MEDIABUNNY_URL);
  return mediabunnyModulePromise;
}
function videoSmoothstep(x){x=Math.max(0,Math.min(1,x));return x*x*(3-2*x);}
function videoDrawCover(ctx,img,w,h,zoom=1,alpha=1){
  const iw=img.width||img.naturalWidth, ih=img.height||img.naturalHeight;
  const s=Math.max(w/iw,h/ih)*zoom, dw=iw*s, dh=ih*s;
  ctx.save();ctx.globalAlpha*=alpha;ctx.drawImage(img,(w-dw)/2,(h-dh)/2,dw,dh);ctx.restore();
}
function videoDrawContain(ctx,img,w,h,progress=0,alpha=1){
  const iw=img.width||img.naturalWidth, ih=img.height||img.naturalHeight;
  const maxW=w*.91,maxH=h*.86;
  const base=Math.min(maxW/iw,maxH/ih);
  const zoom=1+0.028*videoSmoothstep(progress);
  const s=base*zoom, dw=iw*s,dh=ih*s;
  const drift=(videoSmoothstep(progress)-.5)*w*.018;
  ctx.save();ctx.globalAlpha*=alpha;
  ctx.shadowColor='rgba(35,25,20,.22)';ctx.shadowBlur=24;ctx.shadowOffsetY=7;
  ctx.drawImage(img,(w-dw)/2+drift,(h-dh)/2,dw,dh);
  ctx.restore();
}
function drawMemoryPhotoScene(ctx,img,w,h,progress=0,alpha=1){
  ctx.save();ctx.globalAlpha*=alpha;
  ctx.fillStyle='#f7f3ed';ctx.fillRect(0,0,w,h);
  ctx.save();
  try{ctx.filter='blur(28px) saturate(.90) brightness(.86)';}catch(e){}
  videoDrawCover(ctx,img,w,h,1.18,1);
  try{ctx.filter='none';}catch(e){}
  ctx.restore();
  ctx.fillStyle='rgba(247,243,237,.22)';ctx.fillRect(0,0,w,h);
  videoDrawContain(ctx,img,w,h,progress,1);
  ctx.restore();
}
function drawMemoryIntroClean(ctx,w,h,progress,logoImg,firstImg,babyImg,babyName,period){
  const gender=data?.babyGender||'neutral';
  const nameColor=gender==='girl'?'#E8A0B5':gender==='boy'?'#91C9E2':'#CDA06C';
  const p=videoSmoothstep(progress),baseAlpha=ctx.globalAlpha;
  ctx.fillStyle='#F7F3ED';ctx.fillRect(0,0,w,h);

  if(logoImg){
    ctx.save();ctx.globalAlpha=baseAlpha*Math.min(1,p*2);
    const maxW=w*.36,maxH=h*.105,r=Math.min(maxW/logoImg.width,maxH/logoImg.height);
    const lw=logoImg.width*r,lh=logoImg.height*r;
    ctx.drawImage(logoImg,(w-lw)/2,h*.095-lh/2,lw,lh);ctx.restore();
  }

  // First photo is always shown in full. The area behind it uses the same image blurred,
  // so portrait, landscape and square images all look intentional without cropping the original.
  const x=w*.075,y=h*.19,pw=w*.85,ph=h*.49;
  ctx.save();ctx.beginPath();ctx.roundRect(x,y,pw,ph,22);ctx.clip();
  ctx.fillStyle='#efe7de';ctx.fillRect(x,y,pw,ph);
  if(firstImg){
    ctx.save();try{ctx.filter='blur(24px) brightness(.90)';}catch(e){}
    const iw=firstImg.width||firstImg.naturalWidth, ih=firstImg.height||firstImg.naturalHeight;
    const s=Math.max(pw/iw,ph/ih)*1.12,dw=iw*s,dh=ih*s;
    ctx.drawImage(firstImg,x+(pw-dw)/2,y+(ph-dh)/2,dw,dh);
    try{ctx.filter='none';}catch(e){}ctx.restore();
    const iw2=firstImg.width||firstImg.naturalWidth, ih2=firstImg.height||firstImg.naturalHeight;
    const s2=Math.min(pw*.94/iw2,ph*.94/ih2),dw2=iw2*s2,dh2=ih2*s2;
    ctx.drawImage(firstImg,x+(pw-dw2)/2,y+(ph-dh2)/2,dw2,dh2);
  }
  ctx.restore();

  ctx.textAlign='center';ctx.globalAlpha=baseAlpha*Math.min(1,Math.max(0,(p-.10)*1.8));
  const nm=(babyName||videoText('Naše miminko','Our baby')).toUpperCase();
  let fs=Math.round(w*.078);ctx.font=`800 ${fs}px Arial, sans-serif`;
  while(ctx.measureText(nm).width>w*.80 && fs>30){fs-=2;ctx.font=`800 ${fs}px Arial, sans-serif`;}
  ctx.fillStyle=nameColor;ctx.fillText(nm,w/2,h*.745);
  if(period){ctx.fillStyle='#25201d';ctx.font=`500 ${Math.round(w*.041)}px Arial, sans-serif`;ctx.fillText(period,w/2,h*.797);}
  if(babyImg){
    const maxW=w*.22,maxH=h*.15,r=Math.min(maxW/babyImg.width,maxH/babyImg.height);
    const bw=babyImg.width*r,bh=babyImg.height*r;ctx.drawImage(babyImg,(w-bw)/2,h*.895-bh/2,bw,bh);
  }
  ctx.globalAlpha=baseAlpha;
}
function drawMemoryOutroClean(ctx,w,h,progress,logoImg,musicCredit=null){
  const p=videoSmoothstep(progress),baseAlpha=ctx.globalAlpha;ctx.fillStyle='#F7F3ED';ctx.fillRect(0,0,w,h);
  ctx.textAlign='center';ctx.globalAlpha=baseAlpha*Math.min(1,p*1.7);
  if(logoImg){const maxW=w*.42,maxH=h*.14,r=Math.min(maxW/logoImg.width,maxH/logoImg.height);const lw=logoImg.width*r,lh=logoImg.height*r;ctx.drawImage(logoImg,(w-lw)/2,h*.42-lh/2,lw,lh);}
  ctx.fillStyle='#68544a';ctx.font=`600 ${Math.round(w*.043)}px Arial, sans-serif`;
  ctx.fillText(videoText('A náš příběh pokračuje… ♡','And our story continues… ♡'),w/2,h*.58);
  if(musicCredit && musicCredit.length){
    ctx.fillStyle='#8b7b72';
    ctx.font=`500 ${Math.round(w*.024)}px Arial, sans-serif`;
    ctx.fillText(videoText('Hudba: ','Music: ')+musicCredit[0],w/2,h*.84);
    if(musicCredit[1])ctx.fillText(musicCredit[1],w/2,h*.875);
  }
  ctx.globalAlpha=baseAlpha;
}
function drawPhotoTimeline(ctx,imgs,w,h,local,photoSec,fadeSec){
  const step=photoSec-fadeSec;
  let j=Math.floor(Math.max(0,local)/step);
  j=Math.min(imgs.length-1,j);
  const since=local-j*step;
  if(j>0 && since<fadeSec){
    const blend=videoSmoothstep(since/fadeSec);
    const prevProg=Math.min(1,Math.max(0,(local-(j-1)*step)/photoSec));
    const curProg=Math.min(1,Math.max(0,since/photoSec));
    drawMemoryPhotoScene(ctx,imgs[j-1],w,h,prevProg,1-blend);
    drawMemoryPhotoScene(ctx,imgs[j],w,h,curProg,blend);
  }else{
    const prog=Math.min(1,Math.max(0,since/photoSec));
    drawMemoryPhotoScene(ctx,imgs[j],w,h,prog,1);
  }
}
async function dataUrlToBitmap(src){
  if(!src)throw new Error('Chybí zdroj fotografie');
  try{
    const img=await loadVideoImage(src);
    if((img.naturalWidth||img.width) && (img.naturalHeight||img.height))return img;
  }catch(firstError){
    if('createImageBitmap' in window){
      const response=await fetch(src);
      if(!response.ok && !String(src).startsWith('data:'))throw firstError;
      const blob=await response.blob();
      return await createImageBitmap(blob);
    }
    throw firstError;
  }
  throw new Error('Fotografii se nepodařilo dekódovat');
}
function closeVideoBitmap(img){try{if(typeof img?.close==='function')img.close();}catch(e){}}

async function loadRevealDetailImages(){
  const hand=await dataUrlToBitmap('assets/reveal-hand.webp');
  const feet=await dataUrlToBitmap('assets/reveal-feet.webp');
  return {hand,feet};
}

async function loadRevealCollageAssets(){
  const pink=await dataUrlToBitmap('assets/booties-pink.webp');
  const blue=await dataUrlToBitmap('assets/booties-blue.webp');
  return {pink,blue};
}

function refreshMemoryMusicChoice(){
  document.querySelectorAll('[data-music-choice]').forEach(btn=>{
    const active=btn.dataset.musicChoice===memoryVideoState.musicChoice;
    btn.classList.toggle('active',active);
    btn.setAttribute('aria-pressed',active?'true':'false');
  });
  const custom=document.getElementById('memoryCustomMusicWrap');
  if(custom)custom.classList.toggle('hidden',memoryVideoState.musicChoice!=='custom');
}

function stopMemoryMusicPreview(){
  const audio=document.getElementById('memoryMusicPreviewAudio');
  if(audio){audio.pause();audio.removeAttribute('src');audio.load();}
  memoryVideoState.previewMusic=null;
  document.querySelectorAll('[data-preview-music]').forEach(el=>{el.textContent='▶';el.setAttribute('aria-label',videoText('Přehrát ukázku','Play preview'));el.setAttribute('aria-pressed','false');});
}

async function previewMemoryMusic(key,control){
  const preset=MIMIBE_MUSIC_PRESETS[key];
  if(!preset)return;
  const audio=document.getElementById('memoryMusicPreviewAudio');
  if(!audio)return;
  if(memoryVideoState.previewMusic===key && !audio.paused){
    audio.pause();
    memoryVideoState.previewMusic=null;
    control.textContent='▶';
    return;
  }
  stopMemoryMusicPreview();
  audio.src=preset.url;
  audio.currentTime=0;
  audio.volume=.75;
  try{
    await audio.play();
    memoryVideoState.previewMusic=key;
    control.textContent='❚❚';
    control.setAttribute('aria-label',videoText('Pozastavit ukázku','Pause preview'));
    control.setAttribute('aria-pressed','true');
    audio.onended=()=>stopMemoryMusicPreview();
  }catch(e){
    console.warn('MimiBe music preview failed',e);
    alert(videoText('Ukázku hudby se nepodařilo přehrát.','The music preview could not be played.'));
  }
}

function selectedMemoryMusicPreset(){
  const choice=memoryVideoState.musicChoice||'none';
  if(choice==='none' || choice==='custom')return null;
  return MIMIBE_MUSIC_PRESETS[choice]||null;
}

async function selectedMemoryMusicBlob(){
  const choice=memoryVideoState.musicChoice||'none';
  if(choice==='none')return null;
  if(choice==='custom'){
    return document.getElementById('memoryVideoMusic')?.files?.[0]||null;
  }
  const preset=MIMIBE_MUSIC_PRESETS[choice];
  if(!preset)return null;
  const musicUrl=new URL(preset.url,document.baseURI).href;
  const response=await fetch(musicUrl,{cache:'force-cache'});
  if(!response.ok)throw new Error('Music load failed: '+response.status);
  const blob=await response.blob();
  if(!blob.size)throw new Error('Music file is empty');
  return blob;
}

async function makeLoopedAudioBuffer(file,totalSec){
  if(!file)return null;
  const AC=window.AudioContext||window.webkitAudioContext;if(!AC)return null;
  const ac=new AC();
  try{
    const decoded=await ac.decodeAudioData((await file.arrayBuffer()).slice(0));
    const sr=decoded.sampleRate,channels=Math.min(2,decoded.numberOfChannels),length=Math.max(1,Math.ceil(totalSec*sr));
    const out=ac.createBuffer(channels,length,sr);
    for(let ch=0;ch<channels;ch++){
      const src=decoded.getChannelData(Math.min(ch,decoded.numberOfChannels-1)),dest=out.getChannelData(ch);
      let pos=0;
      while(pos<dest.length){const n=Math.min(src.length,dest.length-pos);dest.set(src.subarray(0,n),pos);pos+=n;if(!src.length)break;}
      const fadeIn=Math.min(Math.floor(sr*.35),dest.length),fadeOut=Math.min(Math.floor(sr*.8),dest.length);
      for(let i=0;i<fadeIn;i++)dest[i]*=i/fadeIn;
      for(let i=0;i<fadeOut;i++){const k=dest.length-fadeOut+i;dest[k]*=(1-i/fadeOut);}
    }
    return out;
  }finally{try{await ac.close();}catch(e){}}
}

async function prepareVideoDrawables(photos,progressFill,progressText,startPct=3,spanPct=8){
  const drawables=[],usablePhotos=[],failed=[];
  for(let i=0;i<photos.length;i++){
    try{
      const drawable=await dataUrlToBitmap(photoSrc(photos[i])||photos[i].image);
      drawables.push(drawable);usablePhotos.push(photos[i]);
    }catch(error){
      console.warn('MimiBe: photo skipped during video export',photos[i]?.id,error);
      failed.push(photos[i]);
    }
    const pct=startPct+Math.round((i+1)/photos.length*spanPct);
    if(progressFill)progressFill.style.width=pct+'%';
    if(progressText)progressText.textContent=pct+' %';
  }
  return {drawables,usablePhotos,failed};
}

async function generateAutomaticMemoryVideo(){
  if(memoryVideoState.working)return;
  const photos=selectedMemoryVideoPhotos();
  if(photos.length<2 || photos.length>15)return;

  if(!window.VideoEncoder){
    alert(videoText('Tento telefon nepodporuje moderní kódování videa (WebCodecs).','This phone does not support modern video encoding (WebCodecs).'));
    return;
  }

  memoryVideoState.working=true;
  const generate=document.getElementById('generateMemoryVideo'),cancel=document.getElementById('cancelMemoryVideo');
  const progressBox=document.getElementById('memoryVideoProgress'),progressFill=document.getElementById('memoryVideoProgressFill');
  const progressText=document.getElementById('memoryVideoProgressText'),status=document.getElementById('memoryVideoStatus');
  const preview=document.getElementById('memoryVideoPreview'),download=document.getElementById('downloadMemoryVideo');
  generate.disabled=true;cancel.disabled=true;progressBox.classList.remove('hidden');preview.classList.add('hidden');download.classList.add('hidden');

  const bitmaps=[];
  try{
    status.textContent=videoText('Načítám nový video modul…','Loading the new video engine…');
    progressFill.style.width='2%';progressText.textContent='2 %';
    const MB=await loadMediabunny();
    const {Output,Mp4OutputFormat,BufferTarget,CanvasSource,AudioBufferSource,Quality}=MB;

    status.textContent=videoText('Připravuji fotky…','Preparing photos…');
    const logoImg=await loadMemoryVideoLogo(),babyImg=await loadMemoryVideoBaby();
    const prepared=await prepareVideoDrawables(photos,progressFill,progressText);
    bitmaps.push(...prepared.drawables);
    const usablePhotos=prepared.usablePhotos;
    if(bitmaps.length<2)throw new Error('Pro video se nepodařilo načíst alespoň dvě fotografie');

    const W=720,H=1280,FPS=30,FRAME=1/FPS;
    const INTRO=3.5,INTRO_FADE=1.0,PHOTO=4.2,FADE=1.2,OUTRO=2.7,OUTRO_FADE=1.0;
    const photoStart=INTRO-INTRO_FADE, step=PHOTO-FADE;
    const photoEnd=photoStart+(bitmaps.length-1)*step+PHOTO;
    const outroStart=photoEnd-OUTRO_FADE,totalSec=outroStart+OUTRO;
    const totalFrames=Math.ceil(totalSec*FPS);

    const canvas=document.createElement('canvas');
    canvas.width=W;canvas.height=H;
    const ctx=canvas.getContext('2d',{alpha:false});
    if(!ctx)throw new Error('Canvas 2D není dostupný');

    const output=new Output({format:new Mp4OutputFormat(),target:new BufferTarget()});
    const videoSource=new CanvasSource(canvas,{codec:'avc',quality:new Quality({bitrate:4_000_000})});
    output.addVideoTrack(videoSource,{frameRate:FPS});

    let audioSource=null,audioBuffer=null;
    if(memoryVideoState.musicChoice!=='none'){
      try{
        status.textContent=videoText('Připravuji hudbu…','Preparing music…');
        const musicBlob=await selectedMemoryMusicBlob();
        if(musicBlob){
          audioBuffer=await makeLoopedAudioBuffer(musicBlob,totalSec);
          if(audioBuffer){
            audioSource=new AudioBufferSource({codec:'aac',quality:new Quality({bitrate:128_000})});
            output.addAudioTrack(audioSource);
          }
        }
      }catch(e){
        console.warn('MimiBe: audio skipped',e);
        audioSource=null;audioBuffer=null;
        alert(videoText('Vybranou hudbu se nepodařilo načíst. Video se vytvoří bez hudby.','The selected music could not be loaded. The video will be created without music.'));
      }
    }

    await output.start();
    const audioWritePromise=(audioSource&&audioBuffer)
      ? audioSource.add(audioBuffer).then(()=>audioSource.close())
      : Promise.resolve();

    const selectedPreset=selectedMemoryMusicPreset();
    const musicCredit=selectedPreset?.credit||null;

    const firstDate=usablePhotos[0]?.date,lastDate=usablePhotos[usablePhotos.length-1]?.date;
    let period='';
    try{
      if(firstDate&&lastDate){
        const a=new Date(firstDate+'T00:00:00'),b=new Date(lastDate+'T00:00:00');
        if(firstDate===lastDate)period=videoLang()==='en'?new Intl.DateTimeFormat('en-GB',{day:'numeric',month:'numeric',year:'numeric'}).format(a):`${a.getDate()}.${a.getMonth()+1}.${a.getFullYear()}`;
        else period=videoLang()==='en'?`${new Intl.DateTimeFormat('en-GB',{day:'numeric',month:'numeric'}).format(a)} – ${new Intl.DateTimeFormat('en-GB',{day:'numeric',month:'numeric',year:'numeric'}).format(b)}`:`${a.getDate()}.${a.getMonth()+1}. – ${b.getDate()}.${b.getMonth()+1}. ${b.getFullYear()}`;
      }
    }catch(e){}

    status.textContent=videoText('Vykresluji plynulé video…','Rendering smooth video…');
    for(let frame=0;frame<totalFrames;frame++){
      const t=frame/FPS;
      if(t<photoStart){
        drawMemoryIntroClean(ctx,W,H,t/INTRO,logoImg,bitmaps[0],babyImg,data?.babyName||'',period);
      }else if(t<INTRO){
        const x=videoSmoothstep((t-photoStart)/INTRO_FADE);
        ctx.clearRect(0,0,W,H);
        ctx.save();ctx.globalAlpha=1-x;drawMemoryIntroClean(ctx,W,H,t/INTRO,logoImg,bitmaps[0],babyImg,data?.babyName||'',period);ctx.restore();
        ctx.save();ctx.globalAlpha=x;drawPhotoTimeline(ctx,bitmaps,W,H,0,PHOTO,FADE);ctx.restore();
      }else if(t<outroStart){
        drawPhotoTimeline(ctx,bitmaps,W,H,t-photoStart,PHOTO,FADE);
      }else if(t<photoEnd){
        const x=videoSmoothstep((t-outroStart)/OUTRO_FADE);
        ctx.clearRect(0,0,W,H);
        ctx.save();ctx.globalAlpha=1-x;drawPhotoTimeline(ctx,bitmaps,W,H,t-photoStart,PHOTO,FADE);ctx.restore();
        ctx.save();ctx.globalAlpha=x;drawMemoryOutroClean(ctx,W,H,(t-outroStart)/OUTRO,logoImg,musicCredit);ctx.restore();
      }else{
        drawMemoryOutroClean(ctx,W,H,(t-outroStart)/OUTRO,logoImg,musicCredit);
      }

      await videoSource.add(t,FRAME,{keyFrame:frame===0 || frame%(FPS*2)===0});
      const pct=12+Math.round((frame+1)/totalFrames*84);progressFill.style.width=pct+'%';progressText.textContent=pct+' %';
      if(frame%12===0)await new Promise(r=>setTimeout(r,0));
    }
    videoSource.close();
    await audioWritePromise;
    status.textContent=videoText('Dokončuji MP4…','Finalising MP4…');progressFill.style.width='97%';progressText.textContent='97 %';
    await output.finalize();

    const blob=new Blob([output.target.buffer],{type:'video/mp4'});
    if(memoryVideoState.url)URL.revokeObjectURL(memoryVideoState.url);
    memoryVideoState.url=URL.createObjectURL(blob);
    preview.src=memoryVideoState.url;preview.classList.remove('hidden');
    download.href=memoryVideoState.url;download.download='MimiBe-vzpominky.mp4';download.classList.remove('hidden');
    progressFill.style.width='100%';progressText.textContent='100 %';status.textContent=videoText('Hotovo ♡ Video je připravené.','Done ♡ Your video is ready.');
  }catch(err){
    console.error('MimiBe video error',err);
    status.textContent=videoText('Video se nepodařilo vytvořit.','The video could not be created.');
    alert(videoText('Video se nepodařilo vytvořit. MimiBe narazilo na problém při zpracování obrazu nebo zvuku.','The video could not be created. MimiBe encountered a problem while processing the image or audio.'));
  }finally{
    bitmaps.forEach(closeVideoBitmap);memoryVideoState.working=false;generate.disabled=false;cancel.disabled=false;refreshMemoryVideoSelection();
  }
}


function revealHeartPath(ctx,x,y,size){
  ctx.beginPath();
  ctx.moveTo(x,y+size*.54);
  ctx.bezierCurveTo(x-size*.16,y+size*.36,x-size*.72,y-size*.04,x-size*.72,y-size*.47);
  ctx.bezierCurveTo(x-size*.72,y-size*.86,x-size*.28,y-size*1.02,x,y-size*.66);
  ctx.bezierCurveTo(x+size*.28,y-size*1.02,x+size*.72,y-size*.86,x+size*.72,y-size*.47);
  ctx.bezierCurveTo(x+size*.72,y-size*.04,x+size*.16,y+size*.36,x,y+size*.54);
  ctx.closePath();
}
function drawRevealHeart(ctx,x,y,size,color,alpha=1){
  ctx.save();
  ctx.globalAlpha*=alpha;
  ctx.fillStyle=color;
  revealHeartPath(ctx,x,y,size);
  ctx.fill();
  ctx.restore();
}
function drawRevealLogo(ctx,w,h,logoImg,y=.11,scale=.34){
  if(!logoImg)return;const maxW=w*scale,maxH=h*.10,r=Math.min(maxW/logoImg.width,maxH/logoImg.height);const lw=logoImg.width*r,lh=logoImg.height*r;ctx.drawImage(logoImg,(w-lw)/2,h*y-lh/2,lw,lh);
}
function drawRevealWrappedText(ctx,text,x,y,maxWidth,lineHeight,maxLines=3){
  const words=String(text||'').trim().split(/\s+/);let line='',lines=[];
  for(const word of words){const test=line?line+' '+word:word;if(ctx.measureText(test).width>maxWidth&&line){lines.push(line);line=word;if(lines.length>=maxLines-1)break;}else line=test;}
  if(line&&lines.length<maxLines)lines.push(line);
  const top=y-(lines.length-1)*lineHeight/2;lines.forEach((ln,i)=>ctx.fillText(ln,x,top+i*lineHeight));
}
function drawRevealIntro(ctx,w,h,p,logoImg,text){
  ctx.fillStyle='#F7F3ED';ctx.fillRect(0,0,w,h);drawRevealLogo(ctx,w,h,logoImg,.14,.38);
  const a=videoSmoothstep(Math.min(1,p*1.6));ctx.save();ctx.globalAlpha=a;ctx.textAlign='center';ctx.fillStyle='#65534A';ctx.font=`600 ${Math.round(w*.052)}px Arial, sans-serif`;drawRevealWrappedText(ctx,text||videoText('Máme pro vás malé překvapení…','We have a little surprise for you…'),w/2,h*.50,w*.78,Math.round(w*.066),3);drawRevealHeart(ctx,w/2,h*.68,w*.08,'#D9B6A5',.78+.18*Math.sin(p*Math.PI*3));ctx.restore();
}
function drawRevealPhotoScene(ctx,img,w,h,progress=0,alpha=1){
  const iw=img.naturalWidth||img.width,ih=img.naturalHeight||img.height;
  if(!iw||!ih)return;
  const p=videoSmoothstep(Math.max(0,Math.min(1,progress)));
  ctx.save();
  ctx.globalAlpha*=alpha;
  ctx.fillStyle='#F7F3ED';ctx.fillRect(0,0,w,h);

  // Jemná rozostřená černobílá výplň na celé 9:16 pozadí.
  ctx.save();
  ctx.filter='grayscale(1) blur(26px) brightness(.98) contrast(.90)';
  coverImage(ctx,img,w,h,1.12,0,0,1);
  ctx.restore();
  ctx.fillStyle='rgba(247,243,237,.15)';ctx.fillRect(0,0,w,h);

  // Celá fotografie bez ořezu, jen velmi pomalý filmový pohyb.
  const base=Math.min((w*.94)/iw,(h*.91)/ih);
  const scale=base*(1.015+.025*p);
  const dw=iw*scale,dh=ih*scale;
  const drift=(p-.5)*h*.012;
  ctx.filter='grayscale(1) brightness(1.03) contrast(.96)';
  ctx.drawImage(img,(w-dw)/2,(h-dh)/2+drift,dw,dh);
  ctx.filter='none';

  // Lehoučké zesvětlení okrajů.
  const grad=ctx.createRadialGradient(w/2,h*.48,w*.15,w/2,h*.48,h*.72);
  grad.addColorStop(0,'rgba(255,255,255,0)');
  grad.addColorStop(1,'rgba(247,243,237,.18)');
  ctx.fillStyle=grad;ctx.fillRect(0,0,w,h);
  ctx.restore();
}
function drawRevealPhotoTimeline(ctx,imgs,w,h,t,photoDur,fadeDur){
  const step=photoDur-fadeDur;let j=Math.floor(t/step);j=Math.max(0,Math.min(imgs.length-1,j));const local=t-j*step;
  if(j>0 && local<fadeDur){const blend=videoSmoothstep(local/fadeDur);drawRevealPhotoScene(ctx,imgs[j-1],w,h,1,1-blend);drawRevealPhotoScene(ctx,imgs[j],w,h,local/photoDur,blend);}else drawRevealPhotoScene(ctx,imgs[j],w,h,Math.min(1,local/photoDur),1);
}
function drawRevealQuestion(ctx,w,h,p,logoImg){
  ctx.fillStyle='#F7F3ED';ctx.fillRect(0,0,w,h);ctx.save();ctx.globalAlpha=videoSmoothstep(Math.min(1,p*1.5));drawRevealLogo(ctx,w,h,logoImg,.14,.31);ctx.textAlign='center';ctx.fillStyle='#65534A';ctx.font=`700 ${Math.round(w*.07)}px Arial, sans-serif`;ctx.fillText(videoText('Tipnete si?','Can you guess?'),w/2,h*.50);drawRevealHeart(ctx,w*.41,h*.66,w*.065,'#E7A8B9',.82);drawRevealHeart(ctx,w*.59,h*.66,w*.065,'#9ABAD8',.82);ctx.restore();
}
function drawRevealPolaroid(ctx,img,cx,cy,w,h,angle){
  if(!img)return;
  ctx.save();
  ctx.translate(cx,cy);
  ctx.rotate(angle);

  ctx.shadowColor='rgba(78,62,53,.17)';
  ctx.shadowBlur=22;
  ctx.shadowOffsetY=10;
  ctx.fillStyle='#FFFDFC';
  roundRectVideo(ctx,-w/2,-h/2,w,h,18);
  ctx.fill();
  ctx.shadowColor='transparent';

  const pad=15,bottom=45;
  const innerW=w-pad*2,innerH=h-pad-bottom;
  ctx.fillStyle='#F0ECE8';
  ctx.fillRect(-innerW/2,-h/2+pad,innerW,innerH);

  const iw=img.naturalWidth||img.width,ih=img.naturalHeight||img.height;
  const scale=Math.min(innerW/iw,innerH/ih);
  const dw=iw*scale,dh=ih*scale;
  ctx.filter='grayscale(1) contrast(1.04)';
  ctx.drawImage(img,-dw/2,-h/2+pad+(innerH-dh)/2,dw,dh);
  ctx.filter='none';

  ctx.strokeStyle='rgba(211,201,193,.70)';
  ctx.lineWidth=1.5;
  roundRectVideo(ctx,-w/2,-h/2,w,h,18);
  ctx.stroke();
  ctx.restore();
}

function drawRevealCollage(ctx,w,h,images,gender,logoImg,babyName,musicCredit,booties){
  const isGirl=gender==='girl';
  const accent=isGirl?'#D58DA7':'#78ABD0';
  const pale=isGirl?'#F5E5EB':'#E7F1F7';
  const dark='#65544B';
  const gold='#C8A577';

  ctx.fillStyle='#F8F3EC';
  ctx.fillRect(0,0,w,h);

  const glow=ctx.createRadialGradient(w*.20,h*.12,0,w*.20,h*.12,w*.55);
  glow.addColorStop(0,'rgba(255,255,255,.9)');
  glow.addColorStop(1,'rgba(255,255,255,0)');
  ctx.fillStyle=glow;
  ctx.fillRect(0,0,w,h);

  // Real MimiBe logo from assets/mimibe-logo.svg
  drawRevealLogo(ctx,w,h,logoImg,.085,.34);

  drawRevealPolaroid(ctx,images[0],w*.34,h*.34,w*.49,h*.32,-.065);
  drawRevealPolaroid(ctx,images[1]||images[0],w*.65,h*.44,w*.47,h*.30,.070);

  // subtle decorations
  drawRevealHeart(ctx,w*.19,h*.55,w*.020,accent,.38);
  drawRevealHeart(ctx,w*.79,h*.27,w*.016,accent,.31);
  drawRevealHeart(ctx,w*.50,h*.51,w*.022,accent,.44);

  ctx.fillStyle=gold;
  [[.12,.22,3],[.86,.50,3.5],[.20,.64,2.5],[.74,.62,2.7],[.88,.19,2.4]].forEach(q=>{
    ctx.beginPath();ctx.arc(w*q[0],h*q[1],q[2],0,Math.PI*2);ctx.fill();
  });

  ctx.textAlign='center';
  ctx.fillStyle='#9B8068';
  ctx.font=`600 ${Math.round(w*.031)}px Georgia, serif`;
  ctx.fillText(videoText('NAŠE MALÉ','OUR LITTLE'),w/2,h*.665);

  ctx.fillStyle=accent;
  ctx.font=`italic ${Math.round(w*.070)}px Georgia, serif`;
  ctx.fillText(videoText('překvapení','surprise'),w/2,h*.716);

  ctx.fillStyle=pale;
  roundRectVideo(ctx,w*.29,h*.745,w*.42,h*.060,24);
  ctx.fill();

  ctx.fillStyle=accent;
  ctx.font=`800 ${Math.round(w*.041)}px Arial, sans-serif`;
  ctx.fillText(isGirl?videoText('HOLČIČKA','GIRL'):videoText('CHLAPEČEK','BOY'),w/2,h*.786);

  if((babyName||'').trim()){
    ctx.fillStyle=dark;
    ctx.font=`600 ${Math.round(w*.035)}px Georgia, serif`;
    ctx.fillText((babyName||'').trim(),w/2,h*.827);
  }
  // Kreslené botičky vynechány; v další verzi je může nahradit realistická fotografie.
  ctx.strokeStyle='rgba(200,165,119,.45)';
  ctx.lineWidth=1.5;
  ctx.beginPath();
  ctx.moveTo(w*.35,h*.885);ctx.lineTo(w*.46,h*.885);
  ctx.moveTo(w*.54,h*.885);ctx.lineTo(w*.65,h*.885);
  ctx.stroke();
  drawRevealHeart(ctx,w*.50,h*.885,w*.018,accent,.50);

  if(musicCredit){
    ctx.fillStyle='#8C7A70';
    ctx.font=`500 ${Math.round(w*.018)}px Arial, sans-serif`;
    ctx.fillText(videoText('Hudba: ','Music: ')+musicCredit[0],w/2,h*.975);
  }
}

function drawRevealFinal(ctx,w,h,p,gender,logoImg,babyName,musicCredit,endingImages,booties){
  const isGirl=gender==='girl';
  const accent=isGirl?'#D58DA7':'#78ABD0';
  const tint=isGirl?'#F6E5EC':'#E5F1F8';
  const deep=isGirl?'#B75F80':'#4C88B3';
  const pp=Math.max(0,Math.min(1,p));

  if(pp<.55){
    const q=pp/.55;
    ctx.fillStyle='#F8F3EC';
    ctx.fillRect(0,0,w,h);
    drawRevealLogo(ctx,w,h,logoImg,.10,.32);
    ctx.textAlign='center';

    if(q<.50){
      ctx.fillStyle='#65544B';
      ctx.font=`700 ${Math.round(w*.060)}px Georgia, serif`;
      ctx.fillText(videoText('Tipnete si?','Can you guess?'),w/2,h*.35);
      ctx.fillStyle='#8D7A70';
      ctx.font=`500 ${Math.round(w*.030)}px Arial, sans-serif`;
      ctx.fillText(videoText('Holčička, nebo chlapeček?','Girl or boy?'),w/2,h*.397);
    }

    // Proper heart-shaped reveal mask.
    const hp=videoSmoothstep(Math.max(0,Math.min(1,(q-.16)/.62)));
    const heartSize=w*(.052+hp*1.72);
    ctx.save();
    revealHeartPath(ctx,w/2,h*.51,heartSize);
    ctx.clip();
    const rg=ctx.createRadialGradient(w/2,h*.48,0,w/2,h*.48,h*.74);
    rg.addColorStop(0,tint);
    rg.addColorStop(1,accent);
    ctx.fillStyle=rg;
    ctx.fillRect(0,0,w,h);
    ctx.restore();

    if(q>.67){
      const a=videoSmoothstep((q-.67)/.33);
      ctx.save();
      ctx.globalAlpha=a;
      ctx.fillStyle=tint;
      ctx.fillRect(0,0,w,h);
      drawRevealLogo(ctx,w,h,logoImg,.10,.32);
      ctx.textAlign='center';
      ctx.fillStyle=deep;
      ctx.font=`800 ${Math.round(w*.062)}px Arial, sans-serif`;
      ctx.fillText(
        isGirl?videoText('BUDE TO HOLČIČKA ♡','IT’S A GIRL ♡'):videoText('BUDE TO CHLAPEČEK ♡','IT’S A BOY ♡'),
        w/2,h*.54
      );
      if((babyName||'').trim()){
        ctx.fillStyle='#65544B';
        ctx.font=`italic 600 ${Math.round(w*.047)}px Georgia, serif`;
        ctx.fillText((babyName||'').trim(),w/2,h*.61);
      }
      ctx.restore();
    }
    return;
  }

  const cp=videoSmoothstep((pp-.55)/.45);
  ctx.save();
  ctx.globalAlpha=cp;
  drawRevealCollage(ctx,w,h,endingImages||[],gender,logoImg,babyName,musicCredit,booties);
  ctx.restore();

  if(cp<1){
    ctx.save();
    ctx.globalAlpha=1-cp;
    ctx.fillStyle=tint;
    ctx.fillRect(0,0,w,h);
    ctx.restore();
  }
}
async function generateGenderRevealVideo(){
  if(memoryVideoState.working)return;const photos=selectedMemoryVideoPhotos();
  if(photos.length<1||photos.length>REVEAL_VIDEO_MAX_PHOTOS||!['girl','boy'].includes(memoryVideoState.revealGender))return;
  if(!window.VideoEncoder){alert(videoText('Tento telefon nepodporuje moderní kódování videa (WebCodecs).','This phone does not support modern video encoding (WebCodecs).'));return;}
  memoryVideoState.working=true;
  const generate=document.getElementById('generateMemoryVideo'),cancel=document.getElementById('cancelMemoryVideo'),progressBox=document.getElementById('memoryVideoProgress'),progressFill=document.getElementById('memoryVideoProgressFill'),progressText=document.getElementById('memoryVideoProgressText'),status=document.getElementById('memoryVideoStatus'),preview=document.getElementById('memoryVideoPreview'),download=document.getElementById('downloadMemoryVideo');
  generate.disabled=true;cancel.disabled=true;progressBox.classList.remove('hidden');preview.classList.add('hidden');download.classList.add('hidden');const bitmaps=[];
  try{
    status.textContent=videoText('Připravuji odhalení…','Preparing the reveal…');progressFill.style.width='2%';progressText.textContent='2 %';
    const MB=await loadMediabunny();const {Output,Mp4OutputFormat,BufferTarget,CanvasSource,AudioBufferSource,Quality}=MB;const logoImg=await loadMemoryVideoLogo();
    const prepared=await prepareVideoDrawables(photos,progressFill,progressText);
    const userBitmaps=[...prepared.drawables];
    bitmaps.push(...userBitmaps);
    if(userBitmaps.length<1)throw new Error('Nepodařilo se načíst žádnou fotografii pro odhalení');

    const detail=await loadRevealDetailImages();
    const booties=await loadRevealCollageAssets();
    bitmaps.push(detail.hand,detail.feet,booties.pink,booties.blue);

    // Přesně požadované střídání:
    // ručička -> screening 1 -> nožičky -> screening 2 -> případné další fotografie.
    const revealScenes=[detail.hand];
    if(userBitmaps[0])revealScenes.push(userBitmaps[0]);
    revealScenes.push(detail.feet);
    if(userBitmaps[1])revealScenes.push(userBitmaps[1]);
    if(userBitmaps.length>2)revealScenes.push(...userBitmaps.slice(2));

    const endingImages=userBitmaps.length>=2
      ? [userBitmaps[0],userBitmaps[1]]
      : [userBitmaps[0],userBitmaps[0]];

    const W=720,H=1280,FPS=30,FRAME=1/FPS,INTRO=2.4,INTRO_FADE=.6,PHOTO=2.05,FADE=.60,QUESTION=2.15,QFADE=.45,REVEAL=5.4;
    const photoStart=INTRO-INTRO_FADE,step=PHOTO-FADE,photoEnd=photoStart+(revealScenes.length-1)*step+PHOTO,questionStart=photoEnd-QFADE,revealStart=questionStart+QUESTION-QFADE,totalSec=revealStart+REVEAL,totalFrames=Math.ceil(totalSec*FPS);
    const canvas=document.createElement('canvas');canvas.width=W;canvas.height=H;const ctx=canvas.getContext('2d',{alpha:false});if(!ctx)throw new Error('Canvas 2D není dostupný');
    const output=new Output({format:new Mp4OutputFormat(),target:new BufferTarget()});const videoSource=new CanvasSource(canvas,{codec:'avc',quality:new Quality({bitrate:4_000_000})});output.addVideoTrack(videoSource,{frameRate:FPS});
    let audioSource=null,audioBuffer=null;if(memoryVideoState.musicChoice!=='none'){try{status.textContent=videoText('Připravuji hudbu…','Preparing music…');const musicBlob=await selectedMemoryMusicBlob();if(musicBlob){audioBuffer=await makeLoopedAudioBuffer(musicBlob,totalSec);if(audioBuffer){audioSource=new AudioBufferSource({codec:'aac',quality:new Quality({bitrate:128_000})});output.addAudioTrack(audioSource);}}}catch(e){console.warn('MimiBe reveal audio skipped',e);audioSource=null;audioBuffer=null;}}
    await output.start();
    const audioWritePromise=(audioSource&&audioBuffer)?audioSource.add(audioBuffer).then(()=>audioSource.close()):Promise.resolve();
    const selectedPreset=selectedMemoryMusicPreset(),musicCredit=selectedPreset?.credit||null,customIntro=(document.getElementById('genderRevealIntroText')?.value||'').trim()||videoText('Máme pro vás malé překvapení…','We have a little surprise for you…');
    status.textContent=videoText('Vytvářím překvapení…','Creating the surprise…');
    for(let frame=0;frame<totalFrames;frame++){
      const t=frame/FPS;
      if(t<photoStart)drawRevealIntro(ctx,W,H,t/INTRO,logoImg,customIntro);
      else if(t<INTRO){const x=videoSmoothstep((t-photoStart)/INTRO_FADE);ctx.clearRect(0,0,W,H);ctx.save();ctx.globalAlpha=1-x;drawRevealIntro(ctx,W,H,t/INTRO,logoImg,customIntro);ctx.restore();ctx.save();ctx.globalAlpha=x;drawRevealPhotoTimeline(ctx,revealScenes,W,H,0,PHOTO,FADE);ctx.restore();}
      else if(t<questionStart)drawRevealPhotoTimeline(ctx,revealScenes,W,H,t-photoStart,PHOTO,FADE);
      else if(t<photoEnd){const x=videoSmoothstep((t-questionStart)/QFADE);ctx.clearRect(0,0,W,H);ctx.save();ctx.globalAlpha=1-x;drawRevealPhotoTimeline(ctx,revealScenes,W,H,t-photoStart,PHOTO,FADE);ctx.restore();ctx.save();ctx.globalAlpha=x;drawRevealQuestion(ctx,W,H,0,logoImg);ctx.restore();}
      else if(t<revealStart)drawRevealQuestion(ctx,W,H,(t-questionStart)/QUESTION,logoImg);
      else if(t<revealStart+QFADE){const x=videoSmoothstep((t-revealStart)/QFADE);ctx.clearRect(0,0,W,H);ctx.save();ctx.globalAlpha=1-x;drawRevealQuestion(ctx,W,H,1,logoImg);ctx.restore();ctx.save();ctx.globalAlpha=x;drawRevealFinal(ctx,W,H,0,memoryVideoState.revealGender,logoImg,data?.babyName||'',musicCredit,endingImages,booties);ctx.restore();}
      else drawRevealFinal(ctx,W,H,(t-revealStart)/REVEAL,memoryVideoState.revealGender,logoImg,data?.babyName||'',musicCredit,endingImages,booties);
      await videoSource.add(t,FRAME,{keyFrame:frame===0||frame%(FPS*2)===0});const pct=12+Math.round((frame+1)/totalFrames*84);progressFill.style.width=pct+'%';progressText.textContent=pct+' %';if(frame%12===0)await new Promise(r=>setTimeout(r,0));
    }
    videoSource.close();await audioWritePromise;status.textContent=videoText('Dokončuji MP4…','Finalising MP4…');progressFill.style.width='97%';progressText.textContent='97 %';await output.finalize();
    const blob=new Blob([output.target.buffer],{type:'video/mp4'});if(memoryVideoState.url)URL.revokeObjectURL(memoryVideoState.url);memoryVideoState.url=URL.createObjectURL(blob);preview.src=memoryVideoState.url;preview.classList.remove('hidden');download.href=memoryVideoState.url;download.download='MimiBe-kluk-nebo-holka.mp4';download.classList.remove('hidden');progressFill.style.width='100%';progressText.textContent='100 %';status.textContent=videoText('Hotovo ♡ Překvapení je připravené.','Done ♡ Your surprise is ready.');
  }catch(err){console.error('MimiBe reveal video error',err);status.textContent=videoText('Odhalovací video se nepodařilo vytvořit.','The reveal video could not be created.');alert(videoText('Odhalovací video se nepodařilo vytvořit. MimiBe narazilo na problém při zpracování obrazu nebo zvuku.','The reveal video could not be created. MimiBe encountered a problem while processing the image or audio.'));}
  finally{bitmaps.forEach(closeVideoBitmap);memoryVideoState.working=false;generate.disabled=false;cancel.disabled=false;refreshMemoryVideoSelection();}
}

document.addEventListener('click',e=>{
  if(e.target.closest('#createVideoFuture'))openMemoryVideoDialog('memory');
  if(e.target.closest('#createGenderReveal'))openMemoryVideoDialog('reveal');
  if(e.target.closest('#closeMemoryVideo,#cancelMemoryVideo'))closeMemoryVideoDialog();
  if(e.target.closest('#generateMemoryVideo')){if(memoryVideoState.mode==='reveal')generateGenderRevealVideo();else generateAutomaticMemoryVideo();}
  if(e.target.closest('#memoryVideoSelectAll')){const lim=videoSelectionLimits();memoryVideoState.selected=new Set(memoryVideoState.photos.slice(0,lim.max).map(p=>String(p.id)));refreshMemoryVideoSelection();}
  const revealGender=e.target.closest('[data-reveal-gender]');if(revealGender){memoryVideoState.revealGender=revealGender.dataset.revealGender;refreshMemoryVideoSelection();return;}
  const previewBtn=e.target.closest('[data-preview-music]');
  if(previewBtn){
    e.preventDefault();e.stopPropagation();
    previewMemoryMusic(previewBtn.dataset.previewMusic,previewBtn);
    return;
  }
  const musicBtn=e.target.closest('[data-music-choice]');
  if(musicBtn){
    stopMemoryMusicPreview();
    memoryVideoState.musicChoice=musicBtn.dataset.musicChoice||'none';
    refreshMemoryMusicChoice();
    if(memoryVideoState.musicChoice==='custom'){
      setTimeout(()=>document.getElementById('memoryVideoMusic')?.click(),0);
    }
  }
});
