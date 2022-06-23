let name = 'Jena';
let message = `Hello ${name}`;

showMessage(message);

let person = {
    firstName: 'Ashish',
    lastName: 'Jena'
};

showMessage(person.firstName);

const header = document.getElementById('message');
header.style.color = 'blue';
header.style.fontWeight = '100';

const button = document.getElementById('see-review');
button.addEventListener('click', function(){
   const review = document.getElementById('review');

   if (review.classList.contains('d-none')) {
        review.classList.remove('d-none');
        button.textContent = 'CLOSE REVIEW';
   } else {
        review.classList.add('d-none');
        button.textContent = 'SEE REVIEW';
   }
});

const values = ['a', 'b', 'c'];
console.log(values);