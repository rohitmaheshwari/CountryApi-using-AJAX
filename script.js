const container = document.getElementById("container");
        
const request = new XMLHttpRequest();
request.open('GET', 'https://restcountries.com/v3.1/name/japan');
request.send();

request.addEventListener("load", function() {
    let data = this.responseText;
    [data] = JSON.parse(data);
    // let image = data.flag;
    console.log(data);

    // document.getElementsByTagName('img').src = data.flags.png;
    // document.getElementById("capital").innerHTML = data.capital;
    const htmlData = `
            <div class="w3-card-4 w3-margin" style="width:30%; margin: 0 auto!important; margin-top: 5%!important">
            <!-- <div class="w3-display-container w3-text-white"> -->
              <img src="${data.flags.png}" alt="Lights" style="width:100%">
               <h1 class="w3-center">${data.name.common}</h1>
            <!--  <div class="w3-xlarge w3-display-bottomleft w3-padding">LONDON 60&deg; F</div>
            // </div> -->
            <p style="border-bottom: 1px solid black; margin-bottom: 3px;"></p>
            <div class="w3-row">
              <div class="w3-third w3-center">
                <h3>Population</h3>
                <p>${data.population}</p>
              </div>
              <div class="w3-third w3-center">
                <h3>Region</h3>
                <p>${data.region}</p>
              </div>
              
              <div class="w3-third w3-center w3-margin-bottom">
                <h3>Tld</h3>
                <p>${data.tld[1]}</p>
              </div>
            </div>
          </div>
            `

            container.insertAdjacentHTML ("afterbegin", htmlData);
            // container.innerHTML = 
        })