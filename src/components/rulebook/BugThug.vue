<template>
    <div class="rule">
      <h1 class="heading">{{ ruleBook.name }}</h1>
      <p><span>Description : </span> {{ ruleBook.overview }}</p>
      <p><span>Participation :</span> {{ ruleBook.participation }}</p>
      <p class="rule-highlight">Description of the round :</p>
      <div
        v-for="des in ruleBook.description"
        :key="des.roundNo"
        class="list-rule"
      >
        <p class="optional">{{ des.roundNo }}</p>
        <ul v-for="round in des.rounds" :key="round">
          <li>{{ round.des }}</li>
        </ul>
      </div>
      <p class="rule-highlight">Time breakdown :</p>
      <ul
        v-for="time in ruleBook.timeBreakdown"
        :key="time"
        class="list-rule"
      >
        <li>{{ time.des }}</li>
      </ul>
      <p class="rule-highlight">Judging/Scoring criteria :</p>
      <ul
        v-for="judge in ruleBook.judgingCriteria"
        :key="judge"
        class="list-rule"
      >
        <li>{{ judge.des }}</li>
      </ul>
      <p><span>Participation Fee :</span> {{ ruleBook.participationFee }}</p>
      <button class="btn">Participate Now</button>
    </div>
  </template>
  
  <style>
  .optional {
    margin: 0;
    padding: 0;
  }
  
  .rule {
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .rule p {
    width: 80%;
  }
  
  .list-rule {
    width: 75%;
  }
  
  .rule span,
  .rule-highlight {
    color: var(--theme1);
    font-weight: 600;
    font-size: larger;
  }
  </style>
  
  <script>
  export default {
    data() {
      return {
        ruleBook: {
          name: "BugThug - a code debug event",
          overview: "Participants are required to Debug existing code files / projects and develop new features as described in the issues specified. Files/Projects will be hosted on GitHub and each participant will be provided access to the GitHub repository. There will be several issues highlighted on the website. Participants need to work on these issues and solve them.",
          participation: "Individual",
          description: [
            {
              roundNo: "",
              rounds: [
                {
                  des: "The participants will be given a new word every 4 minutes which they will have to incorporate in their prose. Total of 4 words + 1 bonus word will be given.",
                },
                {
                  des: "Not incorporating the 4 mandatory words in composition will lead to disqualification.",
                },
                {
                  des: "Incorporating the bonus word will lead to bonus points being granted.",
                },
              ],
            },
          ],
          timeBreakdown: [
            {
              des: "Introduction and Prompt Explanation (5 minutes)",
            },
            {
              des: "Brainstorming and Planning (7 minutes)",
            },
            {
              des: "Writing Time (20 minutes)",
            },
            {
              des: "Submission and Closing (3 minutes)",
            },
          ],
          judgingCriteria: [
            {
              des: "Entries must be an original piece of work- plagiarism of any sort if detected will result in immediate disqualification.",
            },
          ],
          participationFee: "TBD",
        },
      };
    },
  };
  </script>
  