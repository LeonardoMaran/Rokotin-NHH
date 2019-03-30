//select the html element 
const userInfo = document.querySelector('.user-info');
let nameSpan = document.querySelector('#full-name');
let birthdaySpan = document.querySelector('#birthday');
let zipSpan = document.querySelector('#zip-code');
let submitButton = document.querySelector('.submit-button');

// creating function to show user data 
function renderUser (user){

    nameSpan.placeholder = user.data().name;
    birthdaySpan.placeholder = '01/02/1990';
    zipSpan.placeholder = user.data().zipCode;
}

//getting data from the firebase
db.collection('users').get().then((snapshot) =>{
    snapshot.docs.forEach(element => {
        renderUser(element);       
    })   
})

// updating data 
submitButton.addEventListener('click', (e) =>{
    e.preventDefault();
    //check if not empty 
    if(nameSpan.value != '' && zipSpan.value != '' ){
        db.collection('users').doc('MSeiYZ0TeTyd5CG2WdfB').update({
        
            name: nameSpan.value,
            zipCode: zipSpan.value
        
        }) 
    }
    // set fields to empty
    nameSpan.value = '';
    zipSpan.value = '';
    // get values 
    db.collection('users').get().then((snapshot) =>{
        snapshot.docs.forEach(element => {
            renderUser(element);       
        })   
    })

})
