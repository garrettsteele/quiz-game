questionArray = ["Filler", "Favorite Animal?", "Favorite Season?"];
allAnswers = {
    ans1: ["blue", "cat", "spring"],
    ans2: ["brown", "dog", "fall"],
    ans3: ["pink", "horse", "summer"]
}
correctAnswers = ["blue", "dog", "fall"]
qcount = 0;
correct = 0;
incorrect = 0;
keepPlaying = true


$(document).ready(function () {

    $("#quiz-form").submit(function(event) {
        var submittedAnswer = $("input[name='answer']:checked").val();
        console.log(submittedAnswer)
        if (correctAnswers[qcount] == submittedAnswer) {
            correct++;
            console.log("correct value was:" + correctAnswers[qcount]);
            $("#correct-div").text(correct);
        }
        else {
            incorrect++;
            console.log("correct value was:" + correctAnswers[qcount]);
            $("#incorrect-div").text(incorrect);
        }
        //console.log(qcount)
        qcount++;
        $("#form-container").empty();
       $("#image-holder").text("Correct answer was: "+ correctAnswers[qcount])
       $("#image-holder").append('<br><input type="button" id="nextbutton" value="Click for next question" />')
        event.preventDefault();

        $("#nextbutton").on("click", function(event) {
            console.log("clicked")
            $("#image-holder").empty();
            $("#form-container").append('<br><input type="button" id="quiz-form2" value="New button" />')
            $("#quiz-form2").on("click", function(event) {
                console.log("clicked2")
                })

        })

        })
    
        // <div id="form-container">
        // <form id="quiz-form">
        //         <p><div>Question: <span id='question-div'>Favorite Color?</span></div></p>
        //         <div>
        //           <input type="radio" id="answerChoice1"
        //            name="answer" value="blue">
        //           <label for="contactChoice1">blue</label>
        //         </div>
        //         <div>
        //           <input type="radio" id="answerChoice2"
        //            name="answer" value="brown">
        //           <label for="contactChoice2">brown</label>
        //         </div>
        //         <div>
        //           <input type="radio" id="answerChoice3"
        //            name="answer" value="pink">
        //           <label for="contactChoice3">pink</label>
        //         </div>
        //         <div>
        //           <button type="submit">Submit</button>
        //         </div>
        //       </form>
        //     </div>

});
