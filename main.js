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

});