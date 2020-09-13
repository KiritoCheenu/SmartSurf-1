 
document.onmouseover = function(e) {
    var x = {
        1 : "Ad blocking on websites",
        2 : "Distraction free reading - remodels the website and gets rid of the clutter",
        3 : "Offline game as an alternative to dino jump. Might add more games later.",
        4 : "Android like auto correction feature.",
        5 : "Custom screenshot by dragging the cursor over a webpage",
        6 : "Pomodoro timer to increase productivity",
        7 : "New tabs will have a to do list, weather updates and reminders",
        8 : "Scrape text from selected images and copy them to clipboard	",
        9 : "Provide a dictionary meaning of selected words as a little popup  bubble.",
        10 : "Color picker that copies the hex code of an element's color to the user’s clipboard and maintains a history of all previously selected color codes  ",
        11 : "Price tracker for ecomm websites that notifies the user via email when a product is sold at the user’s stated price",
        12 : "Generates strong random password when user is signing up to new websites depending on user specifications using regex"
    };
    document.getElementById(e.target.id).textContent=x[e.target.id];
}


    document.onmouseout = function(e) 
    {
        var x={
            1 : "Ad blocker",
            2 : "Reading Mode",
            3 : "Brick breaker",
            4 : "Auto Correct",
            5 : "Custom SS",
            6 : "Pomodoro Timer",
            7 : "Custom Tabs",
            8 : "Text scraping from images",
            9 : "Dictionary + Translation",
            10 : "Color picker",
            11 : "Price tracker",
            12 : "Password generator"
        };
        document.getElementById(e.target.id).innerHTML=x[e.target.id];
        document.getElementById(e.target.id).style.color="black";
        document.getElementById(e.target.id).style.textTransform="#555";
        
        
    }
