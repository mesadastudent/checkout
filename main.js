document.addEventListener('DOMContentLoaded', () => {

    const billing = document.querySelectorAll('input[name="billing"]');
    const diffFields = document.getElementById('diffFields');

    billing.forEach(opt => {
        opt.addEventListener('change', () => {
            if (opt.value === "different") {
                diffFields.style.display = "block";
            } else {
                diffFields.style.display = "none";
            }
        });
    });

    const payment = document.querySelectorAll('input[name="payment"]');
    const creditFields = document.getElementById('creditFields');

    payment.forEach(opt => {
        opt.addEventListener('change', () => {
            if (opt.value === "credit") {
                creditFields.style.display = "block";
            } else {
                creditFields.style.display = "none";
            }
        });
    });

    const form = document.getElementById("checkoutForm");

    if (!form) return;

    form.addEventListener("submit", function (e) {

        let fields = document.querySelectorAll(".field input");
        let valid = true;

        fields.forEach(field => {

            let error = field.nextElementSibling;

            if (field.value.trim() === "") {

                field.classList.add("error");
                error.style.display = "block";
                error.textContent = "This field is required";

                valid = false;

            } else {

                field.classList.remove("error");
                error.style.display = "none";

            }

        });

        if (!valid) {
            e.preventDefault();
        }

    });

});