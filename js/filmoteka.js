function Film(year1, country1, genre1, age1, time1, desc1, img1, year2, country2, genre2, age2, time2, desc2, img2, year3, country3, genre3, age3, time3, desc3, img3) {
    this.year1 = year1
    this.country1 = country1
    this.genre1 = genre1
    this.age1 = age1
    this.time1 = time1
    this.desc1 = desc1
    this.img1 = img1
    this.year2 = year2
    this.country2 = country2
    this.genre2 = genre2
    this.age2 = age2
    this.time2 = time2
    this.desc2 = desc2
    this.img2 = img2
    this.year3 = year3
    this.country3 = country3
    this.genre3 = genre3
    this.age3 = age3
    this.time3 = time3
    this.desc3 = desc3
    this.img3 = img3
}
// задаем шаблон habdlebars.js
let templateCode = `
<div class="new-f-copy">
    <div class="cards-f">
        <div class="card-f">
            <div class="img" style="background-image: url({{img1}})"></div>
            <div class="desc-f-n">
                <div class="year">
                    Год производства: {{year1}}
                </div>
                <div class="country">
                    Страна: {{coountry1}}
                </div>
                <div class="genre">
                    Жанр: {{genre1}}
                </div>
                <div class="age">
                    Возраст: {{age1}}
                </div>
                <div class="time">
                    Время: {{time1}}
                </div>
                <div class="opis">
                    Описание: {{desc1}}
                </div>
            </div>
        </div>
        <div class="card-f">
            <div class="img" style="background-image: url({{img2}})"></div>
            <div class="desc-f-n">
                <div class="year">
                    Год производства: {{year2}}
                </div>
                <div class="country">
                    Страна: {{coountry2}}
                </div>
                <div class="genre">
                    Жанр: {{genre2}}
                </div>
                <div class="age">
                    Возраст: {{age2}}
                </div>
                <div class="time">
                    Время: {{time2}}
                </div>
                <div class="opis">
                    Описание: {{desc2}}
                </div>
            </div>
        </div>
        <div class="card-f">
            <div class="img" style="background-image: url({{img3}})"></div>
            <div class="desc-f-n">
                <div class="year">
                    Год производства: {{year3}}
                </div>
                <div class="country">
                    Страна: {{coountry3}}
                </div>
                <div class="genre">
                    Жанр: {{genre3}}
                </div>
                <div class="age">
                    Возраст: {{age3}}
                </div>
                <div class="time">
                    Время: {{time3}}
                </div>
                <div class="opis">
                    Описание: {{desc3}}
                </div>
            </div>
        </div>
    </div>
</div>`;
let arr = []
let len = 0
let main = document.querySelector("main")
// компилируем шаблон
let template = Handlebars.compile(templateCode);
let url = "https://studyprograms.informatics.ru/api/jsonstorage/?id=3633d305fbb4ea56c3f5e085a175f98f"
let xhr = new XMLHttpRequest();
xhr.open('GET', url);
xhr.addEventListener('readystatechange', function(){
    if (xhr.readyState == 4 && xhr.status == 200) {
        arr = JSON.parse(xhr.responseText)
        len = arr.length
        console.log(arr)
        console.log(arr.length)
        for (let i = 0; i < len; i += 3) {
            let film = new Film(arr[i].year, arr[i].country, arr[i].genre, arr[i].age, arr[i].time, arr[i].desc, arr[i].img, arr[i + 1].year, arr[i + 1].country, arr[i + 1].genre, arr[i + 1].age, arr[i + 1].time, arr[i + 1].desc, arr[i + 1].img, arr[i + 2].year, arr[i + 2].country, arr[i + 2].genre, arr[i + 2].age, arr[i + 2].time, arr[i + 2].desc, arr[i + 2].img)
            console.log(film)
            main.innerHTML += template(film)
        }
    }
});
xhr.send();