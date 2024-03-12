// Function to determine zodiac sign based on date
function getZodiacSign(month, day) {
    // Zodiac sign array
    const zodiacSigns = [
        "Capricorn", "Aquarius", "Pisces", "Aries", "Taurus", "Gemini",
        "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius"
    ];

    // Zodiac sign start dates (day of year)
    const signStartDates = [
        20, 49, 79, 110, 141, 172, 203, 234, 266, 296, 326, 356
    ];

    // Determine zodiac sign based on month and day
    let dayOfYear = (month - 1) * 30 + day;
    for (let i = 0; i < signStartDates.length; i++) {
        if (dayOfYear < signStartDates[i]) {
            return zodiacSigns[i];
        }
    }
    return zodiacSigns[zodiacSigns.length - 1]; // Capricorn (default)
}

// Event listener for form submission
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("birthdayForm").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent form submission

        // Get the input value (birthday)
        const birthdayInput = document.getElementById("birthday").value;
        const birthdayDate = new Date(birthdayInput);
        const month = birthdayDate.getMonth() + 1; // Months are zero-indexed
        const day = birthdayDate.getDate();

        // Determine the zodiac sign
        const zodiacSign = getZodiacSign(month, day);

        // Redirect the user to the corresponding HTML page
        window.location.href = `${zodiacSign.toLowerCase()}.html`;
    });
});