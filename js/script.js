


// select the section with the class name results
const productTable = document.querySelector(`.results`);


const setProductToTable = function() {
  productTable.innerHTML = ``;

  // const createItem = document.createElement(`table`);
  // const createItem = document.createElement(``);
  
  
  fetch("https://corona-virus-world-and-india-data.p.rapidapi.com/api", {
  "method": "GET",
  "headers": {
    "x-rapidapi-key": "03b14a3787mshe09dd6ef66ce957p11eccbjsn80fe611d8acc",
    "x-rapidapi-host": "corona-virus-world-and-india-data.p.rapidapi.com"
  }
  })
  .then((response) => response.json())
  .then((response) => {
    const createTableElement = document.createElement(`table`);
    createTableElement.innerHTML = `
      <tr>
        <th>ID</th>
        <th>Country Name</th>
        <th>Cases</th>
        <th>Deaths</th>
        <th>Active cases</th>
        <th>New Cases</th>
        <th>New Deaths</th>
        <th>Total Recovered</th>
      </tr>
      `
   

    console.log(response.countries_stat);
    console.log(response.countries_stat[0].country_name);

    let totalCount = response.countries_stat.length;
    console.log(totalCount);

    let perrow = 13
    for (var x = 1; x < totalCount; x++) {
      const createItem = document.createElement(`tr`);
      console.log(response.countries_stat[x])
      // let row = createItem.insertRow(x);
      // country_name = row.insertCell(0).innerHTML = response.countries_stat[x].country_name; 
      createItem.innerHTML = `
      <tr>
        <td>${x}</td>
        <td>${response.countries_stat[x].country_name}</td>
        <td>${response.countries_stat[x].cases}</td>
        <td>${response.countries_stat[x].deaths}</td>
        <td>${response.countries_stat[x].active_cases}</td>
        <td>${response.countries_stat[x].new_cases}</td>
        <td>${response.countries_stat[x].new_deaths}</td>
        <td>${response.countries_stat[x].total_recovered}</td>
      </tr>
      `
      createTableElement.append(createItem)
      
    }
    productTable.append(createTableElement);      
  })
  .catch(err => {
    console.error(err);
  });
}
   


setProductToTable();

