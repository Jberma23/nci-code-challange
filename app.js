let AGE1 = { Extreme: 0, Major: 0, Moderate: 0, Minor: 0 }
let TotalAge1 = 0
// 30 to 49 age group
let AGE2 = { Extreme: 0, Major: 0, Moderate: 0, Minor: 0 }
let TotalAge2 = 0
// 50 to 69 age group 
let AGE3 = { Extreme: 0, Major: 0, Moderate: 0, Minor: 0 }
let TotalAge3 = 0
// 70 or older age group
let AGE4 = { Extreme: 0, Major: 0, Moderate: 0, Minor: 0 }
let TotalAge4 = 0

createChart()

async function createChart() {
    //  10 to 29 age group
    await getData()
    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['30 to 49', "50 to 69", "70 or Older"],
            datasets: [{
                label: 'Rates of Cancer Extreme severity by age groups',
                data: [parseInt(AGE2["Extreme"]), parseInt(AGE3["Extreme"]), parseInt(AGE4["Extreme"])],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
    var ctx = document.getElementById('myChart2').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['30 to 49', "50 to 69", "70 or Older"],
            datasets: [{
                label: 'Rates of cancer with Moderate severity by age groups',
                data: [parseInt(AGE2["Moderate"]), parseInt(AGE3["Moderate"]), parseInt(AGE4["Moderate"])],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
    var ctx = document.getElementById('myChart4').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: [
                '30 to 49 Minor',
                '30 to 49 Moderate',
                '30 to 49 Major',
                '30 to 49 Extreme',
                "50 to 69 Minor",
                "50 to 69 Moderate",
                "50 to 69 Major",
                "50 to 69 Extreme",
                "70 or Older Minor",
                "70 or Older Moderate",
                "70 or Older Major",
                "70 or Older Extreme"],
            datasets: [{
                label: 'Cancer Severity by Age',
                data: [
                    AGE2["Minor"],
                    AGE2["Moderate"],
                    AGE2["Major"],
                    AGE2["Extreme"],
                    AGE3["Minor"],
                    AGE3["Moderate"],
                    AGE3["Major"],
                    AGE3["Extreme"],
                    AGE4["Minor"],
                    AGE4["Moderate"],
                    AGE4["Major"],
                    AGE4["Extreme"]
                ],
                backgroundColor: [
                    'rgba(63, 191, 63, 0.2)',
                    'rgba(63, 63, 191, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(255, 99, 132, 0.8)',
                    'rgba(63, 191, 63, 0.2)',
                    'rgba(63, 63, 191, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(63, 191, 63, 0.2)',
                    'rgba(63, 63, 191, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(255, 99, 132, 0.6)',
                ],
                borderColor: [
                    'rgba(63, 191, 63, 0.2)',
                    'rgba(63, 63, 191, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(255, 99, 132, 0.8)',
                    'rgba(63, 191, 63, 0.2)',
                    'rgba(63, 63, 191, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(63, 191, 63, 0.2)',
                    'rgba(63, 63, 191, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(255, 99, 132, 0.6)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }

    });
    var ctx = document.getElementById('myChart3').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['10 to 29', '30 to 49', "50 to 69", "70 or Older"],
            datasets: [{
                label: 'Amount of Cancer Of Any Severity At Any Age',
                data: [TotalAge1, TotalAge2, TotalAge3, TotalAge4],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }

    });

    // "major, minor, moderate, Extreme"

    async function getData() {
        await $.ajax({
            url: "https://health.data.ny.gov/resource/gnzp-ekau.json?$where=UPPER(ccs_diagnosis_description)%20like%20%27%25CANCER%25%27",
            type: "GET",
            data: {
                "$limit": 1000,
                "$$app_token": "UsJT8fUKhXRAgnGRyIfUGn7Gf"
            }
        }).done(function (data) {
            console.log("Retrieved " + data.length + " records from the dataset!");
            console.log(data)
            data.map((e) => {
                var newE = new Object
                if (e["age_group"] == "30 to 49") {
                    AGE2[e["apr_severity_of_illness_description"]] = AGE2[e["apr_severity_of_illness_description"]] + 1
                } else if (e["age_group"] == "50 to 69") {
                    AGE3[e["apr_severity_of_illness_description"]] = AGE3[e["apr_severity_of_illness_description"]] + 1
                }
                else if (e["age_group"] == "70 or Older") {
                    AGE4[e["apr_severity_of_illness_description"]] = AGE4[e["apr_severity_of_illness_description"]] + 1
                }
                else if (e["age_group"] == "10 to 29") {
                    AGE4[e["apr_severity_of_illness_description"]] = AGE4[e["apr_severity_of_illness_description"]] + 1
                }

            })
        })
        Object.values(AGE4).forEach((e) => { TotalAge4 = TotalAge4 + e })
        Object.values(AGE3).forEach((e) => { TotalAge3 = TotalAge3 + e })
        Object.values(AGE2).forEach((e) => { TotalAge2 = TotalAge2 + e })
        Object.values(AGE1).forEach((e) => { TotalAge1 = TotalAge1 + e })
    }
}
