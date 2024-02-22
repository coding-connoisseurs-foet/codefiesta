<template>
    <div class="container my-5 text-light">
        <form class="needs-validation" @submit.prevent="submitForm" id="myForm">
            <div class="row g-3">
                <div class="col-sm-6">
                    <label for="name" class="form-label">Name</label>
                    <input type="text" class="form-control" id="name" placeholder="Your name" name="Name" value="" required>
                    <div class="invalid-feedback">
                        Your name is required.
                    </div>
                </div>

                <div class="col-12">
                    <label for="contact" class="form-label">Contact Number</label>
                    <input type="number" class="form-control" id="contact" placeholder="Contact" name="Contact" required>
                    <div class="invalid-feedback">
                        Your contact no. is required.
                    </div>
                </div>

                <div class="col-12">
                    <label for="email" class="form-label">Email</label>
                    <input type="email" class="form-control" id="email" name="Email" placeholder="example@email.com">
                    <div class="invalid-feedback">
                        Please enter a valid email address.
                    </div>
                </div>

                <div class="col-md-5">
                    <label for="course" class="form-label">Branch</label>
                    <!-- <select class="form-select" id="branch" required>
                        <option value="">Choose...</option>
                        <option value="CSE">CSE</option>
                        <option value="CSE(AI)">CSE(AI)</option>
                        <option value="BCA">BCA</option>
                        <option value="MCA">MCA</option>
                        <option value="EE">EE</option>
                        <option value="ECE">ECE</option>
                        <option value="ME">ME</option>
                        <option value="CE">CE</option>
                    </select> -->
                    <div class="my-3">
                        <div class="form-check">
                            <input id="CSE" name="branch" type="radio" class="form-check-input" value="CSE" required>
                            <label class="form-check-label" for="CSE">CSE</label>
                        </div>
                        <div class="form-check">
                            <input id="CSE(AI)" name="branch" type="radio" class="form-check-input" value="CSE(AI)" required>
                            <label class="form-check-label" for="CSE(AI)">CSE(AI)</label>
                        </div>
                        <div class="form-check">
                            <input id="BCA" name="branch" type="radio" class="form-check-input" value="BCA" required>
                            <label class="form-check-label" for="BCA">BCA</label>
                        </div>
                        <div class="form-check">
                            <input id="MCA" name="branch" type="radio" class="form-check-input" value="MCA" required>
                            <label class="form-check-label" for="MCA">MCA</label>
                        </div>
                        <div class="form-check">
                            <input id="EE" name="branch" type="radio" class="form-check-input" value="EE" required>
                            <label class="form-check-label" for="EE">EE</label>
                        </div>
                        <div class="form-check">
                            <input id="ECE" name="branch" type="radio" class="form-check-input" value="ECE" required>
                            <label class="form-check-label" for="ECE">ECE</label>
                        </div>
                        <div class="form-check">
                            <input id="ME" name="branch" type="radio" class="form-check-input" value="ME" required>
                            <label class="form-check-label" for="ME">ME</label>
                        </div>
                        <div class="form-check">
                            <input id="CE" name="branch" type="radio" class="form-check-input" value="CE" required>
                            <label class="form-check-label" for="CE">CE</label>
                        </div>
                    </div>
                </div>

                <div class="col-md-4">
                    <label for="year" class="form-label">Year</label>
                    <!-- <select class="form-select" id="year" required>
                        <option value="">Choose...</option>
                        <option value="1st">1st</option>
                        <option value="2nd">2nd</option>
                        <option value="3rd">3rd</option>
                        <option value="4th">4th</option>
                    </select> -->
                    <div class="my-3">
                        <div class="form-check">
                            <input id="1st" name="year" type="radio" class="form-check-input" value="1st" required>
                            <label class="form-check-label" for="1st">1st</label>
                        </div>
                        <div class="form-check">
                            <input id="2nd" name="year" type="radio" class="form-check-input" value="2nd" required>
                            <label class="form-check-label" for="2nd">2nd</label>
                        </div>
                        <div class="form-check">
                            <input id="3rd" name="year" type="radio" class="form-check-input" value="3rd" required>
                            <label class="form-check-label" for="3rd">3rd</label>
                        </div>
                        <div class="form-check">
                            <input id="4th" name="year" type="radio" class="form-check-input" value="4th" required>
                            <label class="form-check-label" for="4th">4th</label>
                        </div>
                    </div>
                </div>
            </div>

            <hr class="my-4">

            <div class="d-flex justify-content-evenly">
                <button class="btn btn-secondary btn-lg" type="reset">Reset</button>
                <button class="btn btn-primary btn-lg" type="submit">Register</button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
  methods: {
    submitForm() {
      // Serialize form data into FormData
      const formElement = document.getElementById("myForm");
      const formData = new FormData(formElement);

      // Send a POST request to the Google Apps Script URL using Fetch API
      fetch("https://script.google.com/macros/s/AKfycbwcoZcBZ7rLtP9Jb9UIUVqh6N6FS7cq8C8fM6fI-ml28A0BCJ_QF85kxT3OY_K363Wu/exec", {
        method: "POST",
        body: formData,
      })
      .then(response => {
        // Handle the response as needed
        if (response.ok) {
          // Form submitted successfully
          alert("Form submitted successfully");
          // Redirect to www.google.com
          window.location.href = "https://code-fiesta.web.app/";
        } else {
          // Handle errors if the submission fails
          console.error("Form submission failed");
        }
      })
      .catch(error => {
        console.error("An error occurred:", error);
      });
    }
  }
};
</script>