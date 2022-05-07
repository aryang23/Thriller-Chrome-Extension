const apiKey = "64466cc8c2844c5285cde36d29d1a667";
let cityElem = document.getElementById("district");
searchInputBox=document.getElementById("input-box");
let districtData;

function geoFindMe() {

    const status = document.querySelector('#status');
    const mapLink = document.querySelector('#map-link');

    mapLink.href = '';
    mapLink.textContent = '';


    function success(position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        status.textContent = '';
        mapLink.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
        mapLink.textContent = `Latitude: ${latitude} °, Longitude: ${longitude} °`;

        getLocation(latitude, longitude);
    }

    function error() {
        status.textContent = 'Unable to retrieve your location';
    }

    if (!navigator.geolocation) {
        status.textContent = 'Geolocation is not supported by your browser';
    } else {
        status.textContent = 'Locating…';
        navigator.geolocation.getCurrentPosition(success, error);
    }

}

document.querySelector('#find-me').addEventListener('click', geoFindMe);

async function getLocation(lat, long) {

    const response = await fetch(`https://api.opencagedata.com/geocode/v1/json?q=${lat}+${long}&key=${apiKey}`);
    const allData = await response.json();
    let district = allData.results[0].components.state_district;
    console.log(district);
    districtData = district;
    cityElem.innerText = district;
    searchInputBox.value = district;
}