let amount=0;

function fun(data) {
    
 const card = data.childNodes[3].childNodes[3].innerText;
 const displayTitle =document.getElementById("display-title")
 const count=displayTitle.childElementCount;
 const li =document.createElement('li')
 li.className='list-none font-bold'
 li.innerText = `${count+1}.${card}`
 displayTitle.appendChild(li)
const y =data.childNodes[3].childNodes[5].innerText;
 const stringPrice =y.split(' ')[0] 
 const price =parseFloat(stringPrice)
// console.log(price);
amount=amount+price;
  const h=document.getElementById("display-price").innerText=`${amount}.00`
  const j=parseFloat(h)
  console.log(j);
    if (j>0) {
      const makeBtn =document.getElementById("make-btn")
if (j>0) {
 makeBtn.removeAttribute("disabled") ;
      makeBtn.removeAttribute("disabled") ;
     }
  
  const t =document.getElementById("apply")
  if (amount>200) {
    t.removeAttribute("disabled") ;
}

}
document.getElementById("apply").addEventListener("click",()=>{
  
    const value=document.getElementById("text").value;
    const g=document.getElementById("sell").innerText
    console.log(g);
    
   if (value===g) {
      const displayDis=document.getElementById("display-discount")
      const discount =((amount/100)*20 )
     const y=displayDis.innerText=discount.toFixed(2)
     const displayTotalElement=document.getElementById('display-total')
     const displayTotal=amount-y;
     displayTotalElement.innerText=displayTotal.toFixed(2)
     console.log(displayTotal);
    
     }
     else{
      alert("Inter a valid coupon number")
     
     }
});
 
document.getElementById('btn').addEventListener("click",()=>{
  // document.getElementById('display-price').innerText='00.00'
  // document.getElementById('display-discount').innerText='00.00'
  // document.getElementById('display-total').innerText='00.00'})

location.href="index.html"






})
}

































