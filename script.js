const form = document.getElementById("sumForm");
      const button = form.querySelector("button");
      const resultDiv = document.getElementById("result");

      form.addEventListener("submit", function (event) {
        event.preventDefault();

        if (button.textContent === "Sum") {
          const inputs = form.querySelectorAll("input");
          let sum = 0;
          inputs.forEach((input) => {
            sum += parseFloat(input.value) || 0;
          });

          const input1 = document.querySelector(".input1").value;
          const input2 = document.querySelector(".input2").value;
          const input3 = document.querySelector(".input3").value;

          resultDiv.innerHTML = `<h3>Sum: ${input1} + ${input2} + ${input3} = ${sum}</h3>`;
          inputs.forEach((input) => {
            input.value = "";
          });
          button.textContent = "Clear Answer";
        } else {
          resultDiv.textContent = "";
          button.textContent = "Sum";
        }
      });