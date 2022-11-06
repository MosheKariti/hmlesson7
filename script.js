function burger() {
    let lettuce = prompt("אתה רוצה חסה חמוצים ועגבניה?");
    let meat = prompt("אתה רוצה תוספת קציצה?");
    
    if (lettuce == "כן" && meat == "כן") {
        alert("ההזמנה שלך: המבורגר עם תוספת קציצה וכל הירקות בפנים");
    } else if (lettuce == "לא" && meat == "כן") {
        alert("ההזמנה שלך: המבורגר עם תוספת קציצה ללא ירקות");
    } else if (lettuce == "כן" && meat == "לא") {
        alert("ההזמנה שלך: המבורגר עם ירקות");
    } else {
        alert("ההזמנה שלך: המבורגר ללא תוספות כלל");
    }
}


function pizza() {
    let corn = prompt("אתה רוצה פיצה עם תוספת תירס?");
    let olives = prompt("אתה רוצה גם תוספת זיתים?");
    
    if (corn == "כן" && olives == "כן") {
        alert("ההזמנה שלך: פיצה עם תירס וזיתים");
    } else if (corn == "לא" && olives == "כן") {
        alert("ההזמנה שלך: פיצה עם זיתים");
    } else if (corn == "כן" && olives == "לא") {
        alert("ההזמנה שלך: פיצה עם תירס");
    } else {
        alert("ההזמנה שלך: פיצה ללא תוספות כלל");
    }
}