<template>
    <div class="faq-section">
        <h1 class="heading">
            <span>FREQUENTLY ASKED QUESTIONS</span>
        </h1>
        <div class="faq">
            <div class="question-cont" v-for="(n,i) in faq" :key="i">
                <div class="question">{{n.question}}</div>
                <div class="answer">{{n.answer}}</div>
            </div>
        </div>
    </div>
</template>

<style>
.faq-section{
    min-height: 100vh;
  background: linear-gradient(#0000008b, #000);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.faq{
    margin-top: 51px;
    width: 45%;
    color: #fff;
    margin-bottom: 50px;
}

.faq .question{
    border-bottom: solid 1px #fff;
    padding: 11px 7px;
    cursor: pointer !important;
    position: relative;
    font-size: 20px;
    width: 100%;
}
.faq .question::after{
    content: "+";
    position: absolute;
    font-size: 24px;
    right: 15px;
}

.faq .answer{
    padding-top: 9px;
    width: 100%;
    height: 0px;
    font-size: 18px;
    overflow: hidden;
    padding-left: 7px;
    transition: .5s;
}

.faq .question-cont.active .answer {
    height: fit-content;
    border-bottom: 1px solid #e8e8e8;
    padding-bottom: 9px;
}

.faq .question-cont.active .question {
    color: #fe8d41;
    border-color: #fe8d41;
    
}
.faq .question-cont.active .question::after {
    content: '-';
    font-size: 35px;
    top: 0;
}

/* ------------media-querry------------ */

@media screen and (max-width:947px){
    .faq{
        width: 80%;
    }

}

</style>


<script>
document.addEventListener('DOMContentLoaded', function() {
    const questions = document.querySelectorAll(".question-cont");

    questions.forEach(function(question) {
        question.addEventListener('click', function() {
            this.classList.toggle('active');
        });
    });
});

export default {
	name: "FrequentlyAskedQuestions",
	data(){
		return{
			faq: [
				{
					question: "What is Code Fiesta?",
					answer: "Code Fiesta is often regarded as one of the most significant coding events in the history of computer science and programming. It has earned this reputation due to several key factors that set it apart from other coding competitions and events."
				},
				{
					question: "Random question which is very dangerous?",
					answer: "While opinions on what makes the 'best' cartoon can vary greatly depending on personal preferences, 'Perman' has several qualities that have endeared it to audiences and earned it recognition as one of the beloved classics in the world of anime and cartoons."
				},
				{
					question: "When is Code Fiesta?",
					answer: "soooooooooooooooooooooooonnnnnnnnnnnnnnnnnnnnnnnnnnnn......................"
				},
				{
					question: "Is code fiesta real?",
					answer: "Yes its is real. (I'm the code)"
				},
				{
					question: "Dangerous question returns?",
					answer: "Mitochondria are membrane-bound cell organelles (mitochondrion, singular) that generate most of the chemical energy needed to power the cell's biochemical reactions. Chemical energy produced by the mitochondria is stored in a small molecule called adenosine triphosphate (ATP)."
				},
				{
					question: "What do I need to participate in this event?",
					answer: "Brain and laptop."
				}
				
			]
		}
	}
};


</script>