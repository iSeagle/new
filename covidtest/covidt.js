let covid = {

    fetchcovid: function (country) {
        fetch("https://corona.lmao.ninja/v2/countries/" + country + "?yesterday&strict&query")
            .then((repsonse) => repsonse.json())
            .then((data) => this.displayCovid(data));
    },
    displayCovid: function (data) {
        const { country } = data;
        const { cases } = data;
        const { deaths } = data;
        const { todayDeaths } = data;
        const { todayCases } = data;
        document.querySelector(".cases").innerText = "vaka sayısı: " + cases;
        document.querySelector(".country").innerText = "ülke: " + country;
        document.querySelector(".total-death").innerText = "Toplam Ölüm: " + deaths;
        document.querySelector(".today-case").innerText = "günlük vaka: " + todayCases;
        document.querySelector(".death").innerText = "Günlük Ölüm : " + todayDeaths;
    },
    search: function () {
        this.fetchcovid(document.querySelector(".weather-search").value);
    }
};
document.querySelector(".search button").addEventListener("click", function () {
    covid.search();
});


