function fetchdata() {
    fetch('https://randomuser.me/api/')
    .then(response => {  
        console.log(response);
        if (!response.ok){
            throw Error('ERROR')
        }  
        return response.json();
    }).then(data => {
        console.log(data.results)
        const html = data.results.map(results => {
            return `
            <div class="user">
            <div class="picture">
            <p><image src = "${results.picture.large}" alt="Large"></image></p>
            </div>
            <p>Name: ${results.name.first}</p>
            <p>Gender: ${results.gender}</p>
            <p>Phone Number: ${results.phone}</p>
            <p>Country: : ${results.location.country}</p>

            </div>
            `;
        }).join('')
        console.log(html);
        document.querySelector("#app").insertAdjacentHTML('afterbegin', html);
    }).catch(error => 
        console.log(error)
    );
}

fetchdata()