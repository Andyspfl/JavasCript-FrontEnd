// fetch("http://127.0.0.1:5005/api/restaurants")
//     .then( res => res.json())
//     .then( response => console.log(response))


const credentials = {
    email: "andy@gmail.com",
    password: "Andy123"
}

fetch("http://127.0.0.1:5005/api/login", {
    method: "POST",
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
})
.then( res => res.json())
.then( data => localStorage.setItem("token", data.access_token))

fetch("http://127.0.0.1:5005/api/restaurants", {
    method: "GET",
    headers: {
        "Authorization": `Bearer ${localStorage.getItem("token")}`
    }
})
.then( res => res.json())
.then( data => {
    data.forEach(restaurant => {
        console.log(restaurant.name);
        
    })
})