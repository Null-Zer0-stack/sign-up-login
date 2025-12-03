
    const password = document.getElementById("password");
    const strengthFill = document.getElementById("strengthFill");

    const reqLength = document.getElementById("req-length");
    const reqUpper = document.getElementById("req-upper");
    const reqLower = document.getElementById("req-lower");
    const reqNumber = document.getElementById("req-number");
    const reqSymbol = document.getElementById("req-symbol");

    password.addEventListener("input", () => {
        const value = password.value;

        let strength = 0;

        // Requirements
        const lengthReq = value.length >= 8;
        const upperReq = /[A-Z]/.test(value);
        const lowerReq = /[a-z]/.test(value);
        const numberReq = /[0-9]/.test(value);
        const symbolReq = /[^A-Za-z0-9]/.test(value);

        // Visual updates (green when satisfied)
        reqLength.style.color = lengthReq ? "#10b981" : "#555";
        reqUpper.style.color = upperReq ? "#10b981" : "#555";
        reqLower.style.color = lowerReq ? "#10b981" : "#555";
        reqNumber.style.color = numberReq ? "#10b981" : "#555";
        reqSymbol.style.color = symbolReq ? "#10b981" : "#555";

        // Strength calculation
        strength += lengthReq ? 20 : 0;
        strength += upperReq ? 20 : 0;
        strength += lowerReq ? 20 : 0;
        strength += numberReq ? 20 : 0;
        strength += symbolReq ? 20 : 0;

        // Update bar width and color
        strengthFill.style.width = strength + "%";

        if (strength < 40) {
            strengthFill.style.background = "#ef4444"; // red
        } else if (strength < 80) {
            strengthFill.style.background = "#f59e0b"; // yellow
        } else {
            strengthFill.style.background = "#10b981"; // green
        }
    });

    // Form submit handler
    const form = document.getElementById("signupForm");
    const successMsg = document.getElementById("successMessage");

    form.addEventListener("submit", function (e) {
        e.preventDefault();
        successMsg.style.display = "block";

        setTimeout(() => {
            successMsg.style.display = "none";
        }, 3000);

        form.reset();
        strengthFill.style.width = "0%";
    });
