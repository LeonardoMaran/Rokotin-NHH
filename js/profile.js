//select the html element 
const userInfo = document.querySelector('.user-info');
let nameSpan = document.querySelector('#full-name');
let birthdaySpan = document.querySelector('#birthday');
let zipSpan = document.querySelector('#zip-code');

// creating function to show user data 

function renderUser (user){

    nameSpan.placeholder = user.data().firstName + ' ' + user.data().lastName;
    birthdaySpan.placeholder = '01/02/1990';
    zipSpan.placeholder = user.data().zipCode;
}

db.collection('users').get().then((snapshot) =>{
    snapshot.docs.forEach(element => {
        renderUser(element);       
    })   
})

// function getBirthday(user){
//     let dateObject = new Date(user.data().birthDay.seconds * 1000);
//     let date = dateObject.getDate();
//     let month = dateObject.getMonth() + 1;
//     let year = dateObject.getFullYear();
    
//     if(date < 10) date = '0' + date;
//     if(month < 10) month = '0' + month;
    
    
//     return `${date}/${month}/${year}`;
// }
