<script>
    const form = document.getElementById("signupForm");
    const successMsg = document.getElementById("successMessage");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const username = document.getElementById("username").value.trim();
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const password = document.getElementById("password").value.trim();

        if (username === "" || email === "" || phone === "" || password === "") {
            alert("Please fill in all fields.");
            return;
        }

        successMsg.style.display = "block";

        setTimeout(() => {
            successMsg.style.display = "none";
        }, 3000);

        form.reset();
    });
</script>