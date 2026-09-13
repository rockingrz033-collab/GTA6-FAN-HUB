/* =========================================================
   GTA VI FAN HUB — MAIN JAVASCRIPT
========================================================= */

const characters = {
  raul:{label:"CHARACTER 01",name:"Raul Bautista",image:"./Images/Image/Characters/Raul_Bautista_landscape.jpg",description:"Raul Bautista is one of the characters introduced in GTA VI. His world is connected to the criminal side of Leonida, where ambition, risk and opportunity collide."},
  brian:{label:"CHARACTER 02",name:"Brian Heder",image:"./Images/Image/Characters/Brian_Heder_landscape.jpg",description:"Brian Heder is a classic drug runner from the Keys and a character connected to Jason's criminal world. Rockstar describes him as a long-time smuggler who lets others do his dirty work."},
  "real-dimez":{label:"CHARACTER 03",name:"Real Dimez",image:"./Images/Image/Characters/Real_Dimez_landscape.jpg",description:"Real Dimez are part of the colorful cast surrounding GTA VI, bringing music, personality and energy to the Vice City scene."},
  drequan:{label:"CHARACTER 04",name:"Dre'Quan Priest",image:"./Images/Image/Characters/DreQuan_Priest_landscape.jpg",description:"Dre'Quan Priest is an aspiring music mogul working to break into Vice City's music scene with Only Raw Records."},
  cal:{label:"CHARACTER 05",name:"Cal Hampton",image:"./Images/Image/Characters/IMG_20260913_223309.jpg",description:"Cal Hampton is Jason's friend and a fellow associate of Brian's. He is known for his paranoia and his habit of snooping on Coast Guard communications."},
  boobie:{label:"CHARACTER 06",name:"Boobie Ike",image:"./Images/Image/Characters/Boobie_Ike_landscape.jpg",description:"Boobie Ike is a local Vice City legend who has built a legitimate empire spanning real estate, a strip club and a recording studio."}
};

const locations = {
  "vice-city":{label:"LOCATION 01",name:"Vice City",image:"./Images/Image/Website Overview/vice-city.jpg",description:"Vice City is the vibrant heart of Leonida, filled with beaches, nightlife, neon streets, busy roads and a sprawling coastal skyline.",type:"Coastal metropolis",atmosphere:"Neon / nightlife",region:"Southern Leonida",features:["Beaches and coastal roads","Nightlife and entertainment","Dense urban streets","Large city skyline"],fact:"Vice City returns as the central urban environment of GTA VI."},
  "leonida-keys":{label:"LOCATION 02",name:"Leonida Keys",image:"./Images/Image/Location/IMG_20260913_223530.jpg",description:"The Leonida Keys offer a tropical island environment surrounded by beautiful waters, boats and coastal communities.",type:"Island chain",atmosphere:"Tropical / relaxed",region:"Southern Leonida",features:["Island communities","Boats and waterways","Tropical scenery","Coastal exploration"],fact:"The Keys provide a major contrast to the dense streets of Vice City."},
  "port-gellhorn":{label:"LOCATION 03",name:"Port Gellhorn",image:"./Images/Image/Location/IMG_20260913_223427.jpg",description:"Port Gellhorn is a coastal location with roads, industrial areas and a different atmosphere from the bright center of Vice City.",type:"Coastal / industrial",atmosphere:"Rough / working-class",region:"Western Leonida",features:["Industrial areas","Coastal highways","Working communities","Open roads"],fact:"Port Gellhorn represents another side of Leonida away from the main city."},
  ambrosia:{label:"LOCATION 04",name:"Ambrosia",image:"./Images/Image/Location/IMG_20260913_223348.jpg",description:"Ambrosia represents another side of Leonida, showing industrial and rural environments beyond the Vice City skyline.",type:"Industrial / rural",atmosphere:"Industrial",region:"Central Leonida",features:["Industrial environments","Rural roads","Open spaces","Local communities"],fact:"Ambrosia helps show how large Leonida is beyond Vice City."},
  grassrivers:{label:"LOCATION 05",name:"Grassrivers",image:"./Images/Image/Location/IMG_20260913_223003.jpg",description:"Grassrivers brings the natural side of Leonida to life with waterways, wetlands and wide open landscapes.",type:"Wetland region",atmosphere:"Wild / natural",region:"Northern Leonida",features:["Wetlands","Rivers and waterways","Open landscapes","Wildlife environments"],fact:"The natural environments of Leonida provide a huge contrast to Vice City."},
  "mount-kalaga":{label:"LOCATION 06",name:"Mount Kalaga National Park",image:"./Images/Image/Location/IMG_20260913_223054.jpg",description:"Mount Kalaga National Park offers a completely different environment, with forests, rocky terrain and natural landscapes.",type:"National park",atmosphere:"Wild / mountainous",region:"Northern Leonida",features:["Forests","Rocky terrain","Mountain landscapes","Outdoor exploration"],fact:"Mount Kalaga represents one of the wildest environments shown in Leonida."}
};

const news = {
  release:{label:"GTA VI • UPDATE",title:"The Next Chapter",description:"GTA VI expands the series into a new chapter set in the state of Leonida. The game brings players back to Vice City while introducing a much larger world to explore."},
  world:{label:"WORLD • FEATURE",title:"Welcome to Leonida",description:"Leonida stretches far beyond the streets of Vice City. From coastal highways and beaches to wetlands and rural environments, the world offers a wide variety of places to explore."},
  characters:{label:"CHARACTERS • FEATURE",title:"Jason & Lucia",description:"Jason Duval and Lucia Caminos are the central protagonists of GTA VI. Their relationship sits at the center of a story involving crime, ambition, loyalty and survival across Leonida."}
};

function setBodyLock(locked){ document.body.classList.toggle("modal-open",locked); }
function openModal(modal){ if(!modal)return; modal.classList.add("active"); modal.setAttribute("aria-hidden","false"); setBodyLock(true); }
function closeModal(modal){ if(!modal)return; modal.classList.remove("active"); modal.setAttribute("aria-hidden","true"); setBodyLock(false); }

/* MOBILE NAV */
const menuToggle=document.getElementById("menuToggle");
const navLinks=document.getElementById("navLinks");
if(menuToggle&&navLinks){menuToggle.addEventListener("click",()=>navLinks.classList.toggle("active"));navLinks.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>navLinks.classList.remove("active")));}

/* CHARACTER POPUPS */
const characterModal=document.getElementById("characterModal");
document.querySelectorAll(".character-card").forEach(card=>card.addEventListener("click",()=>{
  const item=characters[card.dataset.character]; if(!item)return;
  const image=document.getElementById("characterModalImage");
  if(image){image.src=item.image;image.alt=item.name;}
  document.getElementById("characterModalLabel").textContent=item.label;
  document.getElementById("characterModalName").textContent=item.name;
  document.getElementById("characterModalDescription").textContent=item.description;
  openModal(characterModal);
}));

/* LOCATION POPUPS */
const locationModal=document.getElementById("locationModal");
let activeLocation=null;
function showLocation(id){
  const item=locations[id]; if(!item)return; activeLocation=id;
  const image=document.getElementById("locationModalImage"); if(image){image.src=item.image;image.alt=item.name;}
  document.getElementById("locationModalLabel").textContent=item.label;
  document.getElementById("locationModalName").textContent=item.name;
  document.getElementById("locationModalDescription").textContent=item.description;
  document.getElementById("locationType").textContent=item.type;
  document.getElementById("locationAtmosphere").textContent=item.atmosphere;
  document.getElementById("locationRegion").textContent=item.region;
  const list=document.getElementById("locationFeatures"); if(list){list.innerHTML="";item.features.forEach(feature=>{const li=document.createElement("li");li.textContent=feature;list.appendChild(li);});}
  document.getElementById("locationFact").textContent=item.fact;
  openModal(locationModal);
}
document.querySelectorAll(".location-card").forEach(card=>card.addEventListener("click",()=>showLocation(card.dataset.location)));
document.querySelectorAll(".map-marker").forEach(marker=>marker.addEventListener("click",()=>showLocation(marker.dataset.mapLocation)));
const locationMapButton=document.getElementById("locationMapButton");
if(locationMapButton)locationMapButton.addEventListener("click",()=>{closeModal(locationModal);const marker=document.querySelector(`[data-map-location="${activeLocation}"]`);const map=document.getElementById("map");if(map)map.scrollIntoView({behavior:"smooth"});if(marker){setTimeout(()=>marker.animate([{transform:"scale(1)"},{transform:"scale(1.35)"},{transform:"scale(1)"}],{duration:700,iterations:2}),500);}});

/* NEWS */
const newsModal=document.getElementById("newsModal");
document.querySelectorAll(".news-card").forEach(card=>card.addEventListener("click",()=>{const item=news[card.dataset.news];if(!item)return;document.getElementById("newsModalLabel").textContent=item.label;document.getElementById("newsModalTitle").textContent=item.title;document.getElementById("newsModalDescription").textContent=item.description;openModal(newsModal);}));

/* CLOSE MODALS */
document.querySelectorAll("[data-close]").forEach(btn=>btn.addEventListener("click",()=>closeModal(document.getElementById(btn.dataset.close))));
document.querySelectorAll(".modal").forEach(modal=>modal.addEventListener("click",e=>{if(e.target===modal)closeModal(modal);}));

/* MEDIA TABS */
const mediaTabs=document.querySelectorAll(".media-tab");
const mediaPanels=document.querySelectorAll(".media-panel");
mediaTabs.forEach(tab=>tab.addEventListener("click",()=>{const target=tab.dataset.mediaTab;mediaTabs.forEach(t=>t.classList.remove("active"));mediaPanels.forEach(p=>p.classList.remove("active"));tab.classList.add("active");const panel=document.getElementById(`media-${target}`);if(panel)panel.classList.add("active");}));

/* LIGHTBOX */
const galleryImages=Array.from(document.querySelectorAll(".gallery-item img"));
const lightbox=document.getElementById("lightbox");
const lightboxImage=document.getElementById("lightboxImage");
const lightboxCounter=document.getElementById("lightboxCounter");
let currentImage=0;
function showImage(index){if(!galleryImages.length||!lightboxImage)return;if(index<0)index=galleryImages.length-1;if(index>=galleryImages.length)index=0;currentImage=index;lightboxImage.src=galleryImages[index].src;lightboxImage.alt=galleryImages[index].alt;if(lightboxCounter)lightboxCounter.textContent=`${String(index+1).padStart(2,"0")} / ${String(galleryImages.length).padStart(2,"0")}`;}
galleryImages.forEach((img,index)=>img.parentElement.addEventListener("click",()=>{showImage(index);lightbox.classList.add("active");setBodyLock(true);}));
const lightboxClose=document.getElementById("lightboxClose"),lightboxPrev=document.getElementById("lightboxPrev"),lightboxNext=document.getElementById("lightboxNext");
if(lightboxClose)lightboxClose.addEventListener("click",()=>{lightbox.classList.remove("active");setBodyLock(false);});
if(lightboxPrev)lightboxPrev.addEventListener("click",()=>showImage(currentImage-1));
if(lightboxNext)lightboxNext.addEventListener("click",()=>showImage(currentImage+1));
if(lightbox)lightbox.addEventListener("click",e=>{if(e.target===lightbox){lightbox.classList.remove("active");setBodyLock(false);}});

/* COUNTDOWN — official date: November 19, 2026 */
const releaseDate=new Date("2026-11-19T00:00:00");
function updateCountdown(){
  const diff=releaseDate-Date.now();
  const ids=["days","hours","minutes","seconds"];
  if(diff<=0){ids.forEach(id=>{const el=document.getElementById(id);if(el)el.textContent=id==="days"?"000":"00";});const h=document.querySelector(".countdown-section h2");if(h)h.textContent="GTA VI IS HERE";return;}
  const d=Math.floor(diff/86400000),h=Math.floor(diff/3600000)%24,m=Math.floor(diff/60000)%60,s=Math.floor(diff/1000)%60;
  [d,h,m,s].forEach((v,i)=>{const el=document.getElementById(ids[i]);if(el)el.textContent=String(v).padStart(i===0?3:2,"0");});
}
updateCountdown();setInterval(updateCountdown,1000);

/* RADIO */
const stations=[{name:"VICE CITY RADIO",track:"MIAMI NIGHTS"},{name:"THE NEON",track:"AFTER DARK"},{name:"LEONIDA FM",track:"STATE LINES"}];
let currentStation=0;
function updateRadio(){const s=stations[currentStation];const a=document.getElementById("radioStation"),b=document.getElementById("radioTrack");if(a)a.textContent=s.name;if(b)b.textContent=s.track;document.querySelectorAll(".radio-stations button").forEach((btn,i)=>btn.classList.toggle("active",i===currentStation));}
const radioPrev=document.getElementById("radioPrev"),radioNext=document.getElementById("radioNext");
if(radioPrev)radioPrev.addEventListener("click",()=>{currentStation=(currentStation-1+stations.length)%stations.length;updateRadio();});
if(radioNext)radioNext.addEventListener("click",()=>{currentStation=(currentStation+1)%stations.length;updateRadio();});
document.querySelectorAll(".radio-stations button").forEach((btn,i)=>btn.addEventListener("click",()=>{currentStation=i;updateRadio();}));updateRadio();

/* FAN THEORY REACTIONS */
document.querySelectorAll(".reaction-btn").forEach(btn=>btn.addEventListener("click",e=>{e.stopPropagation();if(btn.classList.contains("active"))return;const count=btn.querySelector("span");if(count)count.textContent=String(Number(count.textContent||0)+1);btn.classList.add("active");}));

/* SEARCH */
const searchOpen=document.getElementById("searchOpen"),searchClose=document.getElementById("searchClose"),searchOverlay=document.getElementById("searchOverlay"),searchInput=document.getElementById("searchInput"),searchResults=document.getElementById("searchResults");
const searchDatabase=[];
Object.values(characters).forEach(c=>searchDatabase.push({type:"CHARACTER",title:c.name,description:c.description,target:"#characters"}));
Object.values(locations).forEach(l=>searchDatabase.push({type:"LOCATION",title:l.name,description:l.description,target:"#locations"}));
Object.values(news).forEach(n=>searchDatabase.push({type:"NEWS",title:n.title,description:n.description,target:"#news"}));
searchDatabase.push({type:"MEDIA",title:"GTA VI Trailers",description:"Official GTA VI Trailer 1 and Trailer 2.",target:"#media"},{type:"MEDIA",title:"Extended Look",description:"Official GTA VI Extended Look.",target:"#media"},{type:"MAP",title:"Leonida Map",description:"Interactive fan-made visual map of Leonida.",target:"#map"},{type:"COMMUNITY",title:"Fan Theories",description:"Fan theories and community discussion.",target:"#theories"},{type:"RADIO",title:"Vice City Radio",description:"GTA-inspired radio interface.",target:"#radio"});
function performSearch(query){if(!searchResults)return;const q=query.trim().toLowerCase();if(!q){searchResults.innerHTML="";return;}const matches=searchDatabase.filter(i=>`${i.title} ${i.description} ${i.type}`.toLowerCase().includes(q));if(!matches.length){searchResults.innerHTML='<div class="search-result"><strong>No results found</strong><p>Try Jason, Vice City, Leonida, media or radio.</p></div>';return;}searchResults.innerHTML=matches.map(i=>`<a class="search-result" href="${i.target}"><span>${i.type}</span><strong>${i.title}</strong><p>${i.description}</p></a>`).join("");searchResults.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>{searchOverlay.classList.remove("active");}));}
if(searchOpen)searchOpen.addEventListener("click",()=>{searchOverlay.classList.add("active");setBodyLock(true);setTimeout(()=>searchInput&&searchInput.focus(),80);});
if(searchClose)searchClose.addEventListener("click",()=>{searchOverlay.classList.remove("active");setBodyLock(false);});
if(searchInput)searchInput.addEventListener("input",e=>performSearch(e.target.value));

/* KEYBOARD */
document.addEventListener("keydown",e=>{if(e.key!=="Escape")return;document.querySelectorAll(".modal.active").forEach(m=>closeModal(m));if(searchOverlay&&searchOverlay.classList.contains("active")){searchOverlay.classList.remove("active");}if(lightbox&&lightbox.classList.contains("active")){lightbox.classList.remove("active");}setBodyLock(false);if(lightbox&&lightbox.classList.contains("active"))return;if(e.key==="Escape"){} });
document.addEventListener("keydown",e=>{if(!lightbox||!lightbox.classList.contains("active"))return;if(e.key==="ArrowLeft")showImage(currentImage-1);if(e.key==="ArrowRight")showImage(currentImage+1);});

/* BASIC LOCAL ANALYTICS FOUNDATION */
const analyticsKey="gta6_fan_hub_events";
function recordEvent(eventName){try{const events=JSON.parse(localStorage.getItem(analyticsKey)||"[]");events.push({event:eventName,timestamp:new Date().toISOString(),page:location.pathname});localStorage.setItem(analyticsKey,JSON.stringify(events.slice(-500)));}catch(e){}}
recordEvent("page_view");
document.querySelectorAll("a[href^='#']").forEach(a=>a.addEventListener("click",()=>recordEvent("navigation_"+a.getAttribute("href"))));

console.log("%cGTA VI FAN HUB","font-size:20px;font-weight:bold;color:#ff4db8;");
console.log("Unofficial fan-made website.");
