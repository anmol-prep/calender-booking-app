/* Concensent Page script */ 

       function toggleButton() {
            const checkbox = document.getElementById("consent");
            const button = document.getElementById("continueBtn");
            if (checkbox.checked) {
                button.disabled = false;
                button.classList.remove("bg-gray-500", "cursor-not-allowed");
                button.classList.add("bg-blue-600", "hover:bg-blue-700", "cursor-pointer");
            } else {
                button.disabled = true;
                button.classList.add("bg-gray-500", "cursor-not-allowed");
                button.classList.remove("bg-blue-600", "hover:bg-blue-700", "cursor-pointer");
            }
        }

        function redirectToLogin() {
            window.location.href = "login.html"; // Redirect to login page
        }
