let index = 0;

const textContainer = document.querySelector("#textContainer")
const factContainer = document.querySelector("#factContainer")
const prevButton = document.querySelector("#prevButton")
const nextButton = document.querySelector("#nextButton")

const texts = [ 
    "2008...",
    "The internet was really taking off back then.",
    "Lets learn some facts!",
    "YouTube!? Hey I love watching YouTube!",
    "Why does cloud computing sound so cool?",
    "Wow, the Android operating system was very innovative back in 2008.",
    "Hey, I remember getting mailed Netflix movies.",
    "I must have downloaded at least 6 apps from the google play store back then.",
    "I use google chrome everyday!",
    "Hey, I have an iphone.",
    "I remember losing my job back in 2008...",
    "FaceBook?? Don't you mean Meta?",
    "I love tweeting on twitter."
]

const facts = [
    "<img src='../images/y2k image.jpg' alt='' />",
    "",
    "",
    "The Launch of YouTube Partner Program In 2008, YouTube introduced its" +
    "Partner Program, allowing content creators to earn money from ads" +
    "displayed on their videos, paving the way for the rise of the YouTube" +
    "influencer culture.",

    "The Beginning of the 'Cloud Computing' Era In 2008, cloud computing" +
    "services gained significant traction, with companies like Amazon Web" +
    "Services (AWS) expanding their offerings. This marked the beginning of" +
    "a major shift toward cloud storage and web-based applications.",

    "The Release of the Android Operating System In 2008, Google released" +
    "the first commercial version of its Android operating system, marking" +
    "the beginning of Android's rise as a competitor to Apple's iOS in the" +
    "mobile space.",

    "The Growth of Online Video Streaming In 2008, Netflix made a major" +
    "push into online streaming, offering movies and TV shows through its" +
    "subscription service, while Hulu also launched as a joint venture" +
    "between major media companies.",

    "The Launch of Google Android Market Google launched the Android Market" +
    "(now known as the Google Play Store) in 2008, creating a marketplace" +
    "for Android apps that spurred the development of the mobile app" +
    "ecosystem.",

    "Launch of Google Chrome In September 2008, Google released its web" +
    "browser, Google Chrome, aiming to provide a faster, more secure" +
    "alternative to existing browsers like Internet Explorer and Firefox.",

    "The Rise of Mobile Internet and the iPhone App Store The iPhone" +
    "continued to revolutionize mobile internet use in 2008. Apple's App" +
    "Store, launched in July 2008, made mobile apps more accessible and led" +
    "to the rapid growth of the mobile app market.",

    "The Financial Crisis and Its Impact on Tech Startups The global" +
    "financial crisis of 2008 had a profound effect on the tech industry." +
    "Many internet companies faced funding challenges, and several startups" +
    "were forced to scale back or shut down due to a lack of investment.",

    "Facebook Becomes the Most Popular Social Network In 2008, Facebook" +
    "surpassed MySpace to become the most popular social networking site in" +
    "the world. This marked a significant shift in social media trends," +
    "with Facebook's user base growing rapidly.",

    "Twitter Grows in Popularity Twitter saw rapid growth in 2008, becoming" +
    "a prominent platform for real-time updates and breaking news." +
    "Celebrities, brands, and media outlets increasingly adopted Twitter," +
    "boosting its visibility."
]

function updateText() {
    textContainer.innerText = texts[index]
    factContainer.innerHTML = facts[index]
}

prevButton.addEventListener("click", function() {
    if(index > 0){
        index--;
    }else{
        index = texts.length - 1
    }
    updateText();
})

nextButton.addEventListener("click", function() {
    if (index < texts.length - 1) {
        index++;
    } else {
        index = 0;
    }
    updateText();
});

updateText();