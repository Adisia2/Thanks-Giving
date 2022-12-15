document.addEventListener("DOMContentLoaded", function () {
    // When the page loads, get a list of books from http://localhost:3000/film and display their titles by creating a li for each film and adding each li to the ul#list element.
    document.querySelector('form').addEventListener('submit',(e)=>{
        e.preventDefault()
        buildToDo(e.target.new_task.value)
       })
    displayData();
});
function displayData(){
    fetch('http://localhost:3000/churchManenos')
    .then(res =>res.json())
    .then(viewchurchManenos)
}
//how to view pastor details
function viewchurchManenos(churchArray){
    churchArray.forEach(getMembers)
}
function getMembers(churchObject){
  const pastorDetails=document.getElementById('pastorImg')
  pastorDetails.addEventListener('mouseover',()=>{
    const picha=document.getElementById('pastor-details')
    picha.innerHTML="Annointed by the blood of Jesus"
    const wife=document.getElementById('wife-details')
    wife.innerHTML="Companion and prayer partner of the man of God"
  })

const verse=document.getElementById('verse')
const btn=document.querySelector('.sermon')
btn.addEventListener('click',()=>{
    verse.innerHTML="Matthew 6:26-27 '26 Look at the birds of the air; they do not sow or reap or store away in barns, and yet your heavenly Father feeds them. Are you not much more valuable than they? 27 Can any one of you by worrying add a single hour to your life' "
})

const button=document.getElementById('submit')
button.addEventListener('click',()=>{
const inputNew=document.getElementById('description').value
const tasks=document.getElementById('tasks')
tasks.innerHTML=inputNew
tasks.appendChild(inputNew)

})

}
