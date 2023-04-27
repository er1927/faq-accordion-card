const accordion = document.getElementsByClassName('question-item');

for (i=0; i<accordion.length; i++) {
  accordion[i].addEventListener('click', function () {
    this.classList.toggle('active')
  })
}

// const questionOne = document.getElementById("questionOne");
// const answerOne = document.getElementById("answerOne");
// const answerOneText = document.getElementById("answerOneText");
// const questionTwo = document.getElementById("questionTwo");
// const answerTwo = document.getElementById("answerTwo");
// const answerTwoText = document.getElementById("answerTwoText");
// const questionThree = document.getElementById("questionThree");
// const answerThree = document.getElementById("answerThree");
// const answerThreeText = document.getElementById("answerThreeText");
// const questionFour = document.getElementById("questionFour");
// const answerFour = document.getElementById("answerFour");
// const answerFourText = document.getElementById("answerFourText");
// const questionFive = document.getElementById("questionFive");
// const answerFive = document.getElementById("answerFive");
// const answerFiveText = document.getElementById("answerFiveText");

// answerOne.addEventListener("click", showAnswerOne);
// answerTwo.addEventListener("click", showAnswerTwo);
// answerThree.addEventListener("click", showAnswerThree);
// answerFour.addEventListener("click", showAnswerFour);
// answerFive.addEventListener("click", showAnswerFive);

// function showAnswerOne() {
//     questionOne.style.fontWeight = "bold";
//     answerOneText.innerHTML = "You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan"
// }

// function showAnswerTwo() {
//     questionTwo.style.fontWeight = "bold";
//     answerTwoText.innerHTML = "No more than 2GB. All files in your account must fit your allotted storage space."
// }

// function showAnswerThree() {
//     questionThree.style.fontWeight = "bold";
//     answerThreeText.innerHTML = "Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you."
// }

// function showAnswerFour() {
//     questionFour.style.fontWeight = "bold";
//     answerFourText.innerHTML = "Yes! Send us a message and we'll process your request no questions asked."
// }

// function showAnswerFive() {
//     questionFive.style.fontWeight = "bold";
//     answerFiveText.innerHTML = "Chat and email support is available 24/7. Phone lines are open during normal business hours."
// }


    