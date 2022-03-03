const inputValue = () => {
  const inputInfo = document.getElementById("inputV");

  preants2.innerHTML = " ";

  const url = `https://openapi.programming-hero.com/api/phones?search=${inputInfo.value}`;

  inputInfo.value = "";

  fetch(url)
    .then(res => res.json())
    .then(values => searchValues(values.data))

};

//  .... .................  displaySearch value...................



const searchValues = (phones) => {
  const preants = document.getElementById("div1");
  preants.innerHTML = " ";

  if (phones == false) {
    document.getElementById("error").style.display = 'block';
  } else {
    document.getElementById("error").style.display = 'none';

    let sliceArray = phones.slice(0, 20);

    for (phone of sliceArray) {

      const div = document.createElement('div');
      div.classList.add('col-md-4')
      div.innerHTML = `
        <div class="text-center py-2 ">
                          <div class="card ">
                            <img src="${phone.image}" class="card-img-top p-0 m-0" alt="img">
                            <div class="card-body">
                              <h6 class="card-title">Name: ${phone.phone_name}</h6>
                              <p class="card-text">Brand : ${phone.brand}</p>
                              <button onclick="details('${phone.slug}')" class="btn bg-success w-75 mx-auto text-white fw-bold">Details</button>
                            </div>
                          </div>
                        </div>
        `;
      preants.appendChild(div);
    }
  }
};



// ............................deatils......................................



const details = (detailsClick) => {

  const url2 = ` https://openapi.programming-hero.com/api/phone/${detailsClick}`;

  fetch(url2)
    .then(res => res.json())
    .then(data => mainDetails(data.data))

};
const preants2 = document.getElementById("div2");

const mainDetails = (infor) => {
  console.log(infor);
  preants2.innerHTML = " ";
  const div2 = document.createElement('div');

  div2.innerHTML = `
        <div class="text-center py-2 ">
                          <div class="card ">
                            <img style=" height:300px ;
                            width:300px ;"
                         src="${infor.image}" class="card-img-top ps-5 " alt="img">
                            <div class="card-body">
                              <h5 class="card-title">Name: ${infor.name}</h5>
                        
                              <h5> Release: ${infor.releaseDate}</h5>

                              <br>
                              <h4 class=" bg-dark  text-white fw-bold">Main Features</h4>
                              <br>
                              <h6> Storage:</h6><p>${infor.mainFeatures.storage}</p>
                              <h6> Display:</h6></h6><p>${infor.mainFeatures.displaySize}</p>
                              <h6> Chipset:</h6><p>${infor.mainFeatures.chipSet}</p>
                              <h6> Memory:</h6><p>${infor.mainFeatures.memory}</p>
                              <h4 class=" bg-dark  text-white fw-bold">Others And Sensors</h4>
                              <div class="text-left">
                              <h6>Bluetooth :</h6><p>${infor?.others?.Bluetooth}
                            
                              <h6>WLAN :</h6><p>${infor?.others?.WLAN}</p>
                              <h6> GPS :</h6><p>${infor?.others?.GPS}</p>
                              <h6> USB :</h6><p>${infor?.others?.USB}</p>
                              <h3> Sensors </h3>
                             1= <span class="fw-bold">${infor.mainFeatures.sensors[0]}</span>
                             2= <span class="fw-bold">${infor.mainFeatures.sensors[1]}</span>
                             3</span>
                             4= <span class="fw-bold">${infor.mainFeatures.sensors[4]}</span>
                             5= <span class="fw-bold">${infor.mainFeatures.sensors[5]}</span>
                            </div>
                            </div>
                          </div>
                        </div>
        `;
  preants2.appendChild(div2);

};