$("#register-btn").click(()=>{


    const email = $("#email").val();
    const password = $("#password").val();
    const name = $("#name").val();
    const role = $("#role").val();

    console.log(email,password,name,role)

    $.ajax({

        url:"http://localhost:8080/api/v1/user/register",
        method:"POST",
        contentType:"application/json",
        data:JSON.stringify({
            email:email,
            name:name,
            password:password,
            role:role
        }),

        success: (response) => {
            Swal.fire({
                icon: "success",
                title: "Successfully Registered",
                text: "Welcome!",
            });

            window.location.href = "/index.html";
        },

        error: (err) => {
            Swal.fire({
                icon: "error",
                title: "Register Failed",
                text: "fail",
            });
        },

    })





})