
const search=document.querySelector("#search");
const buttons=[...document.querySelectorAll(".filter")];
const cards=[...document.querySelectorAll(".product-card")];
const count=document.querySelector("#catalogCount");
const empty=document.querySelector("#empty");
let gen="all";
function apply(){
 const q=(search?.value||"").trim().toLowerCase();
 let visible=0;
 cards.forEach(c=>{
   const okText=c.dataset.name.includes(q)||c.dataset.number.includes(q);
   const okGen=gen==="all"||c.dataset.gen===gen;
   const show=okText&&okGen;c.hidden=!show;if(show)visible++;
 });
 if(count)count.textContent=`${visible} PRODUCTOS`;
 if(empty)empty.style.display=visible?"none":"block";
}
search?.addEventListener("input",apply);
buttons.forEach(b=>b.addEventListener("click",()=>{buttons.forEach(x=>x.classList.remove("active"));b.classList.add("active");gen=b.dataset.gen;apply();}));
apply();
