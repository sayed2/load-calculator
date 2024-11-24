document.addEventListener("DOMContentLoaded", () => {
  // Selection of input elements
  const amountInput = document.getElementById("amount");
  const interestInput = document.getElementById("interest");
  const yearsInput = document.getElementById("years");
  const calculateBtn = document.getElementById("calculateBtn");

  // Selection of result elements
  const monthlyPayment = document.getElementById("monthly");
  const totalPayment = document.getElementById("total");
  const totalInterestPayment = document.getElementById("totalInterest");

  // Function to calculate load
  function calculateLoan() {
    // Amount of the load
    //* Amount of the load
    const principal = parseInt(amountInput.value);
    //* Interest on the load for each month
    const interest = parseInt(interestInput.value) / 100 / 12;
    //* Number of months years * 12
    const payments = parseInt(yearsInput.value) * 12;

    if (isNaN(principal) || isNaN(interest) || isNaN(payments)) {
      alert("Please enter valid numbers");
      return;
    }

    // Monthly payment
    const x = Math.pow(1 + interest, payments);
    const monthly = (principal * x * interest) / (x - 1);
    // Total payment including the interest
    const total = monthly * payments;
    // total interest in dollars
    const totalInterest = total - principal;

    // Display the resutls

    animateValue(monthlyPayment, 0, monthly, 1000);
    animateValue(totalPayment, 0, total, 1000);
    animateValue(totalInterestPayment, 0, totalInterest, 1000);
  }

  // Function for animation
  function animateValue(element, start, end, duration) {
    const startTime = performance.now();

    function update(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const current = start + (end - start) * progress;
      element.textContent = current.toFixed(2);

      if (progress < 1) {
        requestAnimationFrame(update);
      }
    }
    requestAnimationFrame(update);
  }

  // Bind the event to calculate button
  calculateBtn.addEventListener("click", calculateLoan);
});
