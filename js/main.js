$(document).ready(function(){
    console.log("main.js")
    setTimeout(function() { $("#phone").css('visibility','visible'); }, 1000);
    setTimeout(function() { $("#email").css('visibility','visible'); }, 1250);
    setTimeout(function() { $("#download").css('visibility','visible'); }, 1500);
    // jQuery methods go here...
    const side_bar = {
        "QUALIFICATIONS": ["Full Stack Web Developer", 
            "Wix Velo certified Developer", 
            "BEng Tech Electrical Engineering", 
            "Electrician"], 
        "SKILLS": ["HTML, CSS, JS",
            "dc & Crossfilter", 
            "Bootstrap", 
            "Python", 
            "Django", 
            "Flask", 
            "SQL", 
            "Database design and management", 
            "Git", 
            "Heroku", 
            "Stripe", 
            "AWS", 
            "e-Commerce", 
            "gSheets", 
            "Fault finding / troubleshooting"], 
        "PROJECTS": ["World Cup Wizard", 
            "EPOS",
            "Tom's Place",
            "The Pop Up Irish Pub"], 
        "REFERENCES": ["Padraig Cahill - Opus Web Design", "087 966 3260", 
            "Cathal Dolan - gizagig", "086 679 4786"]}
    var entries = Object.entries(side_bar);
    let i = 0;
    let j = 0;
    let k = 0;
    let m = 0;
    let timer = setInterval(() => {
        if(i < entries.length) {
            if (j < entries[i][0].length && j==0) {
                $(`#${entries[i][0].toLowerCase()}`).append(`<h3>${entries[i][0][j]}</h3>`)
                j++
            }
            else if(j < entries[i][0].length && j!=0) {
                $(`#${entries[i][0].toLowerCase()}`).find("h3").append(`${entries[i][0][j]}`)
                j++
            }
            else {
                if(k < entries[i][1].length) {
                    if(m < entries[i][1][k].length && m==0) {
                        if(entries[i][0]=="PROJECTS") {
                            if(entries[i][1][k] == "World Cup Wizard") {
                                $(`#${entries[i][0].toLowerCase()}`).append(`<a href="https://womensworldcupwizard-33220a25d89f.herokuapp.com/">${entries[i][1][k][m]}</a>`)
                                m++;
                            }
                            else if(entries[i][1][k] == "EPOS") {
                                $(`#${entries[i][0].toLowerCase()}`).append(`<a href="https://ipuhael-epos-8b5f0c382be3.herokuapp.com/">${entries[i][1][k][m]}</a>`)
                                m++;
                            }
                            else if(entries[i][1][k] == "Tom's Place") {
                                $(`#${entries[i][0].toLowerCase()}`).append(`<a href="https://peterwkellett.wixstudio.com/tomsplace">${entries[i][1][k][m]}</a>`)
                                m++;
                            }
                            else if(entries[i][1][k] == "The Pop Up Irish Pub") {
                                $(`#${entries[i][0].toLowerCase()}`).append(`<a href="http://thepopupirishpub.com">${entries[i][1][k][m]}</a>`)
                                m++;
                            }
                        }
                        else {
                            $(`#${entries[i][0].toLowerCase()}`).append(`<p>${entries[i][1][k][m]}</p>`)
                            m++;
                        }
                    }
                    else if(m < entries[i][1][k].length && m!=0) {
                        if(entries[i][0]=="PROJECTS") {
                            $(`#${entries[i][0].toLowerCase()}`).find("a:last-child").append(`${entries[i][1][k][m]}`);
                            m++;
                        }
                        else {
                            $(`#${entries[i][0].toLowerCase()}`).find("p:last-child").append(`${entries[i][1][k][m]}`);
                            m++;
                        }
                        
                    }
                    else {
                        k++;
                        m = 0;
                    }  
                }
                else {
                    i++;
                    j = 0;
                    k = 0;
                    m = 0;
                }
            }
        }
        else {
            clearInterval(timer);
        }
    }, 10);
});