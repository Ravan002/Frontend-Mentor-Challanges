document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById('multiStepForm');
    const profile = {
        name: '',
        email: '',
        phone: '',
        subscriptionType: 'Monthly'
    }; // Object to store user data

    const steps = [
        `
        <h2>Step 1</h2>
        <input type="text" id="name" placeholder="name" value="${profile.name}">
        <input type="email" id="email" placeholder="email" value="${profile.email}">
        <input type="tel" id="phone" placeholder="phone" value="${profile.phone}">
        <button type="button" class="next-step">Next</button>
        `,
        `
        <h2>Step 2</h2>
        <p id="priceTag">Price: $10/month</p>
        <button type="button" class="toggle-button">Switch to Annually</button>
        <button type="button" class="prev-step">Back</button>
        <button type="submit">Submit</button>
        `
    ];

    let currentStep = 0;
    let isMonthly = true;

    function renderInitialForm() {
        form.innerHTML = steps.map((step, index) => `
            <div class="${index === currentStep ? 'form-step form-step-active' : 'form-step'}">
                ${step}
            </div>
        `).join('');

        document.querySelectorAll('.next-step').forEach(button => button.addEventListener('click', nextStep));
        document.querySelectorAll('.prev-step').forEach(button => button.addEventListener('click', prevStep));
        document.querySelectorAll('.toggle-button').forEach(button => button.addEventListener('click', togglePrice));
    }

    function nextStep() {
        if (currentStep < steps.length - 1) {
            saveFormData(); // Save data before moving to next step
            currentStep++;
            //renderInitialForm();
            showCurrentStep();
        } else if (currentStep === steps.length - 1) {
            saveFormData(); // Save data on final step
            form.submit(); // Simulate form submission
        }

        console.log(profile)
    }

    function prevStep() {
        if (currentStep > 0) {
            currentStep--;
            //renderInitialForm();
            showCurrentStep();
        }

        console.log(profile)
    }

    function togglePrice() {
        isMonthly = !isMonthly;
        const priceTag = document.getElementById('priceTag');
        const toggleButton = document.querySelector('.toggle-button');
        if (isMonthly) {
            priceTag.textContent = "Price: $10/month";
            toggleButton.textContent = "Switch to Annually";
        } else {
            priceTag.textContent = "Price: $100/year";
            toggleButton.textContent = "Switch to Monthly";
        }
    }

    function saveFormData() {
        // Collect data from current step and store in profile object
        profile.name = document.getElementById('name').value;
        profile.email = document.getElementById('email').value;
        profile.phone = document.getElementById('phone').value;
        profile.subscriptionType = isMonthly ? 'Monthly' : 'Annually';
    }

    function showCurrentStep() {
        document.querySelectorAll('.form-step').forEach((step, index) => {
            step.classList.toggle('form-step-active', index === currentStep);
        });
    }

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        alert('Form submitted!');
        console.log(profile); // Output the collected profile data
    });

    renderInitialForm();
    showCurrentStep();
});
