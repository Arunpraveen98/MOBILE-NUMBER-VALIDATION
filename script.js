//adding EventListener to button:-

let check_button = document.getElementById("check");
check_button.addEventListener("click", NumberValidation);

//async function to fetch validation details:-

async function NumberValidation() {
  //try-block..
  try {
    //getting input Number from user...
    let Number_Input = document.getElementById("validation").value;

    //Fetching api data...
    let validate_data = await fetch(
      `https://phonevalidation.abstractapi.com/v1/?api_key=f2afdeb7f83e4cb6ae4aeea16c4684f3&phone=${Number_Input}`
    );
    let JsonFormat = await validate_data.json();

    let valid_Status = JsonFormat.valid;

    let local_No = JsonFormat.format.local;

    let Number_location = JsonFormat.location;

    let Number_type = JsonFormat.type;

    let Number_network = JsonFormat.carrier;

    //adding innerHTML...

    let Status = document.getElementById("status");
    Status.innerHTML = `${valid_Status}`;

    let local_number = document.getElementById("local");
    local_number.innerHTML = `${local_No}`;

    let location = document.getElementById("place");
    location.innerHTML = `${Number_location}`;

    let type = document.getElementById("no-type");
    type.innerHTML = `${Number_type}`;

    let network = document.getElementById("network");
    network.innerHTML = `${Number_network}`;
  } catch (error) {
    //catch-block to detect error..
    console.log(error);
  }
}

//----------------------------------------------------------------
