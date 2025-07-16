    const textInput = document.getElementById("text-input");
    const checkBtn = document.getElementById("check-btn");
    const result = document.getElementById("result");

    function isPalindrome(str) {
      // Normalize string: remove non-alphanumerics and convert to lowercase
      const cleaned = str.replace(/[^a-z0-9]/gi, "").toLowerCase();
      const reversed = cleaned.split("").reverse().join("");
      return cleaned === reversed;
    }

    checkBtn.addEventListener("click", () => {
      const input = textInput.value;
      if (!input) {
        alert("Please input a value.");
        return;
      }

      const message = isPalindrome(input)
        ? `${input} is a palindrome.`
        : `${input} is not a palindrome.`;

      result.textContent = message;
    });
 
