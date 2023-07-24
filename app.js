const mainvalue= document.getElementById('value')
 let value =0;
const increment= document.getElementById('increment');
const decrement= document.getElementById('decrement');
const reset = document.getElementById('Reset');

increment.addEventListener('click',()=>{
value++;
mainvalue.textContent=value;
});
decrement.addEventListener('click',()=>{
value--;
mainvalue.textContent=value;

});
reset.addEventListener('click',()=>{
value=0;
mainvalue.textContent=value;

});