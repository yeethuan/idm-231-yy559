const form = document.querySelector('form');
const error_list = document.querySelector('.errors');

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

/**
 * Determines the zodiac sign based on the month and day of birth.
 *
 * @param {number} month - The month of birth (1-12)
 * @param {number} day - The day of birth (1-31)
 * @return {string} The zodiac sign corresponding to the given date
 */
function get_zodiac_sign(month, day) {
const signs = [
    { sign: "Capricorn", range: [[12, 22], [1, 19]], link:"capricorn.html" },
    { sign: "Aquarius", range: [[1, 20], [2, 18]] },
    { sign: "Pisces", range: [[2, 19], [3, 20]] },
    { sign: "Aries", range: [[3, 21], [4, 19]], link:"aries.html" },
    { sign: "Taurus", range: [[4, 20], [5, 20]] },
    { sign: "Gemini", range: [[5, 21], [6, 20]] },
    { sign: "Cancer", range: [[6, 21], [7, 22]] },
    { sign: "Leo", range: [[7, 23], [8, 22]] },
    { sign: "Virgo", range: [[8, 23], [9, 22]] },
    { sign: "Libra", range: [[9, 23], [10, 22]] },
    { sign: "Scorpio", range: [[10, 23], [11, 21]] },
    { sign: "Sagittarius", range: [[11, 22], [12, 21]] }
];

for (const sign of signs) {
    const [start, end] = sign.range;
    if ((month === start[0] && day >= start[1]) || (month === end[0] && day <= end[1])) {
    return sign.sign;
    }
}

return "Unknown";
}

/**
 * Custom form validation
 * 'errors' array will hold validation error
 *
 * @param {Object} event - The event object
 * @return {boolean} Whether the form submission should continue
 */
function handle_submit(event) {
    event.preventDefault();
    console.group('Form submission');
    console.log(form);
    console.log(form?.elements);
    console.log(form?.elements['name'].value);
    console.log(form?.elements['birthday'].value);
    console.groupEnd();


if (errors.length) {
    errors.forEach((error) => {
    const li = document.createElement('li');
    const text = document.createTextNode(error);

    li.appendChild(text);
    console.log('errors', errors);
    error_list.appendChild(li);
    error_list.hidden = 0;
    });
    return false;
} else {
    error_list.hidden = 1;
    error_list.innerHTML = '';
}

const birthday_parts = form.elements['birthday'].value.split('-');
console.log('date_object', date_object);

const zodiac_sign = get_zodiac_sign(parseInt(birthday_parts[1]), parseInt(birthday_parts[2]));
console.log('Zodiac Sign:', zodiac_sign);
  // Now you have the zodiac sign information...
}

if (form) {
form.addEventListener('submit', handle_submit, false);
}