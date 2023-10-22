<template>
    <div class="container my-5 text-light">
        <form class="needs-validation" method="post">
            <div class="row g-3">
                <div class="col-sm-6">
                    <label for="name" class="form-label">Name</label>
                    <input type="text" class="form-control" id="name" placeholder="Your name" value="" required>
                    <div class="invalid-feedback">
                        Your name is required.
                    </div>
                </div>

                <div class="col-12">
                    <label for="contact" class="form-label">Contact Number</label>
                    <input type="number" class="form-control" id="contact" placeholder="Contact" required>
                    <div class="invalid-feedback">
                        Your contact no. is required.
                    </div>
                </div>

                <div class="col-12">
                    <label for="email" class="form-label">Email</label>
                    <input type="email" class="form-control" id="email" placeholder="example@email.com">
                    <div class="invalid-feedback">
                        Please enter a valid email address.
                    </div>
                </div>

                <div class="col-md-5">
                    <label for="course" class="form-label">Branch</label>
                    <!-- <select class="form-select" id="branch" required>
                        <option value="">Choose...</option>
                        <option value="">CSE</option>
                        <option value="">CSE(AI)</option>
                        <option value="">BCA</option>
                        <option value="">MCA</option>
                        <option value="">EE</option>
                        <option value="">ECE</option>
                        <option value="">ME</option>
                        <option value="">CE</option>
                    </select> -->
                    <div class="my-3">
                        <div class="form-check">
                            <input id="CSE" name="branch" type="radio" class="form-check-input" required>
                            <label class="form-check-label" for="credit">CSE</label>
                        </div>
                        <div class="form-check">
                            <input id="CSE(AI)" name="branch" type="radio" class="form-check-input" required>
                            <label class="form-check-label" for="debit">CSE(AI)</label>
                        </div>
                        <div class="form-check">
                            <input id="BCA" name="branch" type="radio" class="form-check-input" required>
                            <label class="form-check-label" for="paypal">BCA</label>
                        </div>
                        <div class="form-check">
                            <input id="MCA" name="branch" type="radio" class="form-check-input" required>
                            <label class="form-check-label" for="paypal">MCA</label>
                        </div>
                        <div class="form-check">
                            <input id="EE" name="branch" type="radio" class="form-check-input" required>
                            <label class="form-check-label" for="paypal">EE</label>
                        </div>
                        <div class="form-check">
                            <input id="ECE" name="branch" type="radio" class="form-check-input" required>
                            <label class="form-check-label" for="paypal">ECE</label>
                        </div>
                        <div class="form-check">
                            <input id="ME" name="branch" type="radio" class="form-check-input" required>
                            <label class="form-check-label" for="paypal">ME</label>
                        </div>
                        <div class="form-check">
                            <input id="CE" name="branch" type="radio" class="form-check-input" required>
                            <label class="form-check-label" for="paypal">CE</label>
                        </div>
                    </div>
                </div>

                <div class="col-md-4">
                    <label for="year" class="form-label">Year</label>
                    <!-- <select class="form-select" id="year" required>
                        <option value="">Choose...</option>
                        <option value="">1st</option>
                        <option value="">2nd</option>
                        <option value="">3rd</option>
                        <option value="">4th</option>
                    </select> -->
                    <div class="my-3">
                        <div class="form-check">
                            <input id="1st" name="year" type="radio" class="form-check-input" required>
                            <label class="form-check-label" for="credit">1st</label>
                        </div>
                        <div class="form-check">
                            <input id="2nd" name="year" type="radio" class="form-check-input" required>
                            <label class="form-check-label" for="debit">2nd</label>
                        </div>
                        <div class="form-check">
                            <input id="3rd" name="year" type="radio" class="form-check-input" required>
                            <label class="form-check-label" for="paypal">3rd</label>
                        </div>
                        <div class="form-check">
                            <input id="4th" name="year" type="radio" class="form-check-input" required>
                            <label class="form-check-label" for="paypal">4th</label>
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