const divElement = document.getElementById("add_to_me");
let string = "";
(async () => {
    const dataForCards = await (await fetch('./index.json')).json();
    let count = 0;
    string += `<div class="row">`;
    for (let i=0;i<dataForCards.data.length;i++) {
        let user = dataForCards.data[i];
        if(count < 3)
        {
            string += `<div class="col-md-4 mt-3"><div class="card" >
            <img class="card-img-top" src="${user.picture_url}" alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title center">${user.name}</h5>
              <div class="textual-area">
                <h6>${user.batch}</h6>
                <p class="card-text mt-2">
                  ${user.quote}
                </p>
              </div>
              <div class="row">
                <span class="col-5"><a href="${user.instagram}"><i class="fab fa-instagram fa-lg"></a></i></span>
                <span class="col-5"><a href="${user.facebook}"><i class="fab fa-linkedin fa-lg"></a></i></span>
                <span class="col"><a href="${user.link}"><i class="fas fa-link fa-lg"></i></a></span>
            </div>
            </div>
          </div></div>`;

          count++;
        }
        else 
        {
            console.log(count);
            string+=`</div>`;
            string += `<div class="row"><div class="col-md-4 mt-3"><div class="card" >
            <img class="card-img-top" src="${user.picture_url}" alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title center">${user.name}</h5>
              <div class="textual-area">
                <h6>${user.batch}</h6>
                <p class="card-text mt-2">
                  ${user.quote}
                </p>
              </div>
              <div class="row">
                <span class="col-5"><a href="${user.instagram}"><i class="fab fa-instagram fa-lg"></a></i></span>
                <span class="col-5"><a href="${user.facebook}"><i class="fab fa-linkedin fa-lg"></a></i></span>
                <span class="col"><a href="${user.link}"><i class="fas fa-link fa-lg"></i></a></span>
            </div>
            </div>
          </div></div>`;
            count = 0;
        }
    }
    string+=`</div>`;
    divElement.innerHTML = string;
    console.log(divElement)
})();