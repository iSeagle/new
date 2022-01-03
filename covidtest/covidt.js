let covid = {

    fetchcovid: function (country) {
        fetch("https://corona.lmao.ninja/v2/countries/" + country + "?yesterday=true&strict=true&query")
            .then((repsonse) => repsonse.json())
            .then((data) => this.displayCovid(data));
    },
    displayCovid: function (data) {
        const { country } = data;
        const { cases } = data;
        const { deaths } = data;
        const { todayDeaths } = data;
        const { todayCases } = data;


        document.querySelector(".cases").innerText = " Toplam Vaka Sayısı: " + cases;
        document.querySelector(".country").innerText = "Ülke Adı: " + country;
        document.querySelector(".total-death").innerText = "Toplam Ölüm Sayısı: " + deaths;
        document.querySelector(".today-case").innerText = "Günlük Vaka: " + todayCases;
        document.querySelector(".death").innerText = "Günlük Ölüm : " + todayDeaths;

        if (todayCases == 0) {
            document.querySelector(".today-case").innerText = "Günlük Vaka Sayısı :Henüz girilmedi";
        }
        if (todayDeaths == 0) {
            document.querySelector(".death").innerText = "Günlük Ölüm Sayısı : Henüz girilmedi";
        }
    },
    search: function () {
        this.fetchcovid(document.querySelector(".weather-search").value);
    }
};
document.querySelector(".search button").addEventListener("click", function () {
    covid.search();
});
document.querySelector(".search").addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
        covid.search();
    }

});
covid.fetchcovid("Turkey");


