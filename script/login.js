$("#btn").click(() => {
    const email = $("#email").val();
    const password = $("#password").val();

    if (!email || !password) {
        Swal.fire({
            icon: "warning",
            title: "Missing Information",
            text: "Please fill in both email and password fields.",
        });
        return;
    }

    $.ajax({
        url: "http://localhost:8080/api/v1/auth/authenticate",
        method: "POST",
        contentType: "application/json",
        data: JSON.stringify({
            email: email,
            password: password,
        }),
        success: (response) => {
            Swal.fire({
                icon: "success",
                title: "Authentication Successful",
                text: "Welcome!",
            });

        /*    localStorage.setItem("token", response.data.token);*/
            window.location.href = "dashboard.html";
        },
        error: (err) => {
            Swal.fire({
                icon: "error",
                title: "Authentication Failed",
                text: err.responseJSON.message || "Invalid credentials.",
            });
        },
    });
});
