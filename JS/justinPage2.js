const form = document.querySelector("form")
const textField = document.querySelector("#text-choice")
const output93 = document.querySelector("#output93")
const output94 = document.querySelector("#output94")
const output95 = document.querySelector("#output95")
const output96 = document.querySelector("#output96")
const output97 = document.querySelector("#output97")
const output98 = document.querySelector("#output98")
const output99 = document.querySelector("#output99")
const output2000 = document.querySelector("#output2000")

form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const choice = textField.value;
    var yearElement = '';

    switch (true) {
        case choice == "1994": 
                yearElement = await createYearElement(choice)
                output94.append(yearElement)
            break;
    
            case choice == "1995": 
                yearElement = await createYearElement(choice)
                output95.append(yearElement)
            break;

            case choice == "1996": 
                yearElement = await createYearElement(choice)
                output96.append(yearElement)
            break;

            case choice == "1997": 
                yearElement = await createYearElement(choice)
                output97.append(yearElement)
            break;

            case choice == "1998": 
                yearElement = await createYearElement(choice)
                output98.append(yearElement)
            break;

            case choice == "1999": 
                yearElement = await createYearElement(choice)
                output99.append(yearElement)
            break;

            case choice == "2000": 
                yearElement = await createYearElement(choice)
                output2000.append(yearElement)
            break;

        default: location.reload();
            break;
    }
});

const loadYearsFromJson = async () => {
    const response = await fetch("../JSONData/data1993to2000.json")
    const data = await response.json();
    return await data;
};

const createYearElement = async (time) => {
    const data = await loadYearsFromJson();

    for (const object of data) {
        if(object.year === time){
            var yearData = new Year(object.year, object.title, object.paragraph1, object.paragraph2);

            const yearElement = document.createElement("div");
            yearElement.classList.add("created-year");
            if(time == 1999 || time == 2000){
                yearElement.innerHTML = `
                <h2>${yearData.title}</h2>
                <p>${yearData.paragraph1}</p>
                `
                return yearElement;
            }
            yearElement.innerHTML = `
                <h2>${yearData.title}</h2>
                <p class="info-paragraph1">${yearData.paragraph1}</p>
                <p class="info-paragraph2">${yearData.paragraph2}</p>
                `
            return yearElement;
        }
    }
}

class Year{
    constructor(year, title, paragraph1, paragraph2){
        this.year = year;
        this.title = title;
        this.paragraph1 = paragraph1;
        this.paragraph2 = paragraph2;
    }
};
