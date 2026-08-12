// =====================================================
// Live Love Counter (Since Jan 8, 2024)
// =====================================================

export function initLetter() {
    const letterElem = document.getElementById("letterContent");
    if (!letterElem) return;

    // 1. ലെറ്റർ കണ്ടന്റ് സെറ്റ് ചെയ്യുന്നു
    letterElem.innerHTML = `
Today is not just your birthday...

It is the day my favourite person
came into this world.

Thank you for every smile,
every laugh,
every little fight,
every memory.

We have been together for:
<span id="loveCounter" class="love-counter-box">Calculating...</span>
and it is the most beautiful chapter of my life.

Happy Birthday My Princess ❤️
    `;

    // 2. ലൈവ് സമയം കണക്കാക്കുന്ന ഫംഗ്ഷൻ
    function updateCounter() {
        const startDate = new Date("2024-01-08T00:00:00");
        const now = new Date();

        let years = now.getFullYear() - startDate.getFullYear();
        let months = now.getMonth() - startDate.getMonth();
        let days = now.getDate() - startDate.getDate();
        let hours = now.getHours() - startDate.getHours();
        let minutes = now.getMinutes() - startDate.getMinutes();
        let seconds = now.getSeconds() - startDate.getSeconds();

        if (seconds < 0) { seconds += 60; minutes--; }
        if (minutes < 0) { minutes += 60; hours--; }
        if (hours < 0) { hours += 24; days--; }
        if (days < 0) {
            months--;
            const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
            days += prevMonth.getDate();
        }
        if (months < 0) {
            years--;
            months += 12;
        }

        const counterEl = document.getElementById("loveCounter");
        if (counterEl) {
            counterEl.innerHTML = `
                <br><span class="highlight">${years}</span> Years, <span class="highlight">${months}</span> Months, <span class="highlight">${days}</span> Days
                <br><span class="highlight">${hours}</span> Hours, <span class="highlight">${minutes}</span> Mins, <span class="highlight">${seconds}</span> Secs
            `;
        }
    }

    updateCounter();
    setInterval(updateCounter, 1000); // ഓരോ സെക്കൻഡിലും അപ്‌ഡേറ്റ് ചെയ്യും
}