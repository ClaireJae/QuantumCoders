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
    
    console.log(textField.value)
    switch (true) {
        case choice == "1994": 
        const yearElement = await createYearElement(choice)
        output94.append(yearElement)
            
            break;
    
        default:
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

    console.log(data)

    for (const object of data) {
        if(object.year === time){
            var yearData = new Year(object.year, object.paragraph1, object.paragraph2);
            console.log(yearData)

            const yearElement = document.createElement("div");
            yearElement.classList.add("created-year");
            yearElement.innerHTML = `
                <p>${yearData.paragraph1}</p>
            `
            return yearElement;
        }
    }
    
}

class Year{
    constructor(year, paragraph1, paragraph2){
        this.year = year;
        this.paragraph1 = paragraph1;
        this.paragraph2 = paragraph2;
    }
};
