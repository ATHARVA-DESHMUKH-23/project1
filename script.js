let countryinp = document.getElementById("search-input");
let search = document.getElementById("search_button");

search.addEventListener("click",()=>{
    let countryName = countryinp.value;
    let finalURL = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
    console.log(finalURL);
    fetch(finalURL)
        .then((response) => response.json())
        .then((data) => {
            console.log(data[0]);
            console.log(data[0].capital[0]);
            console.log(data[0].flags.svg);
            console.log(data[0].name.common);
            console.log(data[0].continents[0]);
            console.log(Object.keys(data[0].currencies)[0]);
            console.log(data[0].currencies[Object.keys(data[0].currencies)].name);
            console.log(
            Object.values(data[0].languages).toString().split(",").join(", ")
            );
            console.log(data[0].coatOfArms.svg);
            flag.innerHTML = `
            <img src="${data[0].flags.svg}" alt="there should be country flag">`;
            info.innerHTML = `
                <h3>${data[0].capital[0]}</h3>
                <h3>${data[0].name.common}</h3>
                <h3>${data[0].continents[0]}</h3>
                <h3>${Object.keys(data[0].currencies)[0]}</h3>
                <h3>${data[0].currencies[Object.keys(data[0].currencies)].name}</h3>
            `
            tags.innerHTML = `
                <h3>Capital</h3>
                <h3>Com Name</h3>
                <h3>Continent</h3>
                <h3>Currencies</h3>
                <h3>Money</h3>
            `;
            emblem.innerHTML = `
                <h2>Emblem</h2>
                <img src="${data[0].coatOfArms.svg}" alt="there should be country flag">`;
            })
            .catch(() => {
                if (countryName.length == 0) {
                    flag.innerHTML = `<h3>The input field cannot be empty</h3>`;
                } else {
                    flag.innerHTML = `<h3>Please enter a valid country name.</h3>`;
                }
            });
            
});
