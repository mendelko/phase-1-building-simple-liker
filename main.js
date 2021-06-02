// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const glyph = document.querySelectorAll(".like-glyph");



function likedPost(e){
  if (e.target.innerHTML === EMPTY_HEART){
    mimicServerCall()
    .then(function(object){
      e.target.innerHTML = FULL_HEART
       e.target.classList.add("activated-heart");


      })
      .catch(function(error){
        document.getElementById("modal").classList.remove("hidden")
        document.getElementById("modal-message").innerHTML = error
        setTimeout(function(){
          document.getElementById("modal").classList.add("hidden")

        }, 3000)

      })
    }else {
      e.target.innerHTML = EMPTY_HEART
      e.target.classList.remove("activated-heart")
      

    }
}

for (const like of glyph) {
  like.addEventListener("click", likedPost);
}






  
  
  



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
