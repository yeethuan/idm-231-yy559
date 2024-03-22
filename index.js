const form = document.querySelector('#myForm');

/**
 * Logs the birthday information.
 *
 * @param {Array} birthday - An array containing the year, month, and day of the birthday
 * @return {Object} The date object containing the year, month, and day
 */
function log_birthday(birthday) {
    const date = {
        year: birthday[0],
        month: birthday[1],
        day: birthday[2],
    };
    return date;
}


// @param {number} x- month
// @param {number} day



function get_zodiac_sign(month, day) {
    const signs = [
        { sign: "Capricorn", range: [[12, 22], [1, 19]], link: "https://idm231-yy559.netlify.app/capricorn" },
        { sign: "Aquarius", range: [[1, 20], [2, 18]], link: "https://idm231-yy559.netlify.app/aquarius" },
        { sign: "Pisces", range: [[2, 19], [3, 20]], link: "https://idm231-yy559.netlify.app/pisces" },
        { sign: "Aries", range: [[3, 21], [4, 19]], link: "https://idm231-yy559.netlify.app/aries" },
        { sign: "Taurus", range: [[4, 20], [5, 20]], link: "https://idm231-yy559.netlify.app/taurus" },
        { sign: "Gemini", range: [[5, 21], [6, 20]], link: "https://idm231-yy559.netlify.app/gemini" },
        { sign: "Cancer", range: [[6, 21], [7, 22]], link: "https://idm231-yy559.netlify.app/cancer" },
        { sign: "Leo", range: [[7, 23], [8, 22]], link: "https://idm231-yy559.netlify.app/leo" },
        { sign: "Virgo", range: [[8, 23], [9, 22]], link: "https://idm231-yy559.netlify.app/virgo" },
        { sign: "Libra", range: [[9, 23], [10, 22]], link: "https://idm231-yy559.netlify.app/libra" },
        { sign: "Scorpio", range: [[10, 23], [11, 21]], link: "https://idm231-yy559.netlify.app/scorpio" },
        { sign: "Sagittarius", range: [[11, 22], [12, 21]], link: "https://idm231-yy559.netlify.app/sagittarius" }
    ];

    for (const sign of signs) {
        const [start, end] = sign.range;
        if ((month === start[0] && day >= start[1]) || (month === end[0] && day <= end[1])) {
            return sign.link;
        }
    }
}

function handle_submit(event) {
    event.preventDefault();
    const birthday_parts = form.elements['birthday'].value.split('-');
    const month = parseInt(birthday_parts[1]);
    const day = parseInt(birthday_parts[2]);
    const link = get_zodiac_sign(month, day);
    if (link) {
        window.location.href = link;
    } else {
        console.error('Invalid zodiac sign');
    }
}

if (form) {
    form.addEventListener('submit', handle_submit, false);
}