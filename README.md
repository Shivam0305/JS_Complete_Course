# JS_Complete_Course
A code repo for javascript series at chai aur code
## project one solution code
```javascript

console.log("shivam");
const buttons = document.querySelectorAll('.button');
const body =document.querySelector('body');

buttons.forEach(function (button) {
    console.log(button);
    button.addEventListener('click', function (e) {
        console.log(e);
        console.log(e.target);

        if (e.target.id === 'skyblue') {
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === 'red') {
            body.style.backgroundColor =e.target.id;
        }
        if (e.target.id === 'blue') {
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === 'orange') {
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === 'green') {
            body.style.backgroundColor = e.target.id;
        }
    });
});

```
## project two solution code

```javascript

const form=document.querySelector('form');
form.addEventListener('submit',function(e){
  e.preventDefault();

  const height=parseInt(document.querySelector('#height').value)
  const weight=(document.querySelector('#weight').value)
  const result=document.querySelector('#results')

  if(height===''||height<0||isNaN(height)){
   results.innerHTML=`please give a valid number ${height}`
  }
  else if(weight===''||weight<0||isNaN(weight)){
    results.innerHTML=`please give a valid number ${weight}`
   }
   else{
     const bmi= (weight/((height*height)/10000)).toFixed(2);
    //  result.innerHTML=`<span>${bmi}</span>`;
     if(bmi<18.6){
      result.innerHTML=`${bmi} is Under Weight`
    }
   else if(bmi>18.6 && bmi<24.6){
      result.innerHTML=`${bmi} is Normal Range`
   }
   else{
     result.innerHTML=`${bmi} is Overweight`
   }
   }
})

```
