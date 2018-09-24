//let today = new Date();
//let dd = today.getDate();
//let mm = today.getMonth()+1; //January is 0!
//let yyyy = today.getFullYear();
//if(dd<10) {    dd = '0'+dd } 
//if(mm<10) {    mm = '0'+mm } 
//today =  yyyy + '-' + mm + '-' + dd ;
let today = new Date().toISOString().substr(0, 10);
document.getElementById("today").defaultValue = today;

const key = 'Qrl5XEYzjfEWK3G1X3ox1As6XSmr4633V1SQb9fS';
let url = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${today}&end_date=${today}&api_key=${key}`;



fetch(url)
    .then(response => response.json())
    .then(data => {
                console.log(data.near_earth_objects[today]);

        for (i = 0; i < data.near_earth_objects[today].length; i++) {

            let content = document.createElement("p");
            content.innerHTML =
                `<a href="${data.near_earth_objects[today][i].nasa_jpl_url}">` + '<strong style="color:blue;">' + data.near_earth_objects[today][i].name + '</strong></a>' + '<br>' + 
                
                'absolute magnitude :' + '&emsp;' + data.near_earth_objects[today][i].absolute_magnitude_h + '<br>' +

                'estimated min diameter :' + '&emsp;' + data.near_earth_objects[today][i].estimated_diameter.meters.estimated_diameter_min + '&nbsp;m<br>' +

                'estimated max diameter :' + '&emsp;' + data.near_earth_objects[today][i].estimated_diameter.meters.estimated_diameter_max + '&nbsp;m<br>' +

                'miss distance from Earth :' + '&emsp;' + data.near_earth_objects[today][i].close_approach_data[0].miss_distance.kilometers + '&nbsp;km<br>';

            document.querySelector("#info").appendChild(content);

            if (data.near_earth_objects[today][i].is_potentially_hazardous_asteroid == true) {
                let add = document.createElement("span");
                add.innerHTML = '<i>*potentially hazardous asteriod</i>';
                add.style.color = 'red';
                content.appendChild(add);
            }


            let spacer = document.createElement("p");
            spacer.innerHTML = '<br><br>';
            document.querySelector("#info").appendChild(spacer);
        }

        let num = document.querySelector('#total') ; 
        num.innerHTML = 'total: &nbsp;' + data.near_earth_objects[today].length ; 


    })
    .catch(error => console.error(error));






const call = () => {
    document.querySelector('#info').innerHTML = ' ';
    let today = document.getElementById("today").value;
    let url = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${today}&end_date=${today}&api_key=${key}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data.near_earth_objects[today]);
        
            for (i = 0; i < data.near_earth_objects[today].length; i++) {

   let content = document.createElement("p");
            content.innerHTML =
                `<a href="${data.near_earth_objects[today][i].nasa_jpl_url}">` + '<strong style="color:blue;">' + data.near_earth_objects[today][i].name + '</strong></a>' + '<br>' + 
                
                'absolute magnitude :' + '&emsp;' + data.near_earth_objects[today][i].absolute_magnitude_h + '<br>' +

                'estimated min diameter :' + '&emsp;' + data.near_earth_objects[today][i].estimated_diameter.meters.estimated_diameter_min + '&nbsp;m<br>' +

                'estimated max diameter :' + '&emsp;' + data.near_earth_objects[today][i].estimated_diameter.meters.estimated_diameter_max + '&nbsp;m<br>' +

                'miss distance from Earth :' + '&emsp;' + data.near_earth_objects[today][i].close_approach_data[0].miss_distance.kilometers + '&nbsp;km<br>';

                document.querySelector("#info").appendChild(content);

                if (data.near_earth_objects[today][i].is_potentially_hazardous_asteroid == true) {
                    let add = document.createElement("span");
                    add.innerHTML = '<i>*potentially hazardous asteriod</i>';
                    add.style.color = 'red';
                    content.appendChild(add);
                }

                let spacer = document.createElement("p");
                spacer.innerHTML = '<br><br>';
                document.querySelector("#info").appendChild(spacer);
            }

                let num = document.querySelector('#total') ; 
        num.innerHTML = 'total: &nbsp;' + data.near_earth_objects[today].length ; 


        })
        .catch(error => console.error(error));
}
