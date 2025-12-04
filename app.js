/*
    File: app.js
    Last modified: 04.12.2025 17:15 MEZ
    Changes: English text, layout switcher function added
*/

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    init();
    loadLayoutPreference();
});

// Main initialization
function init() {
    populateTimezones();
    setDefaultDateTime();
}

// Populate timezone lists with abbreviations
function populateTimezones() {
    const sourceSelect = document.getElementById('sourceTimezone');
    const targetSelect = document.getElementById('targetTimezone');
    
    // Sort alphabetically by abbreviation
    const sortedAbbreviations = [...timezoneAbbreviations].sort((a, b) => 
        a.abbr.localeCompare(b.abbr)
    );
    
    sortedAbbreviations.forEach((tz, index) => {
        // Format: "CET - Central European Time (UTC+01:00)"
        const displayText = `${tz.abbr} - ${tz.name} (UTC${tz.offset})`;
        
        // Value is the index in the array so we can find the IANA zone later
        const option1 = new Option(displayText, index);
        const option2 = new Option(displayText, index);
        
        sourceSelect.add(option1);
        targetSelect.add(option2);
    });

    // Default to CET (Central European Time)
    const cetIndex = sortedAbbreviations.findIndex(tz => tz.abbr === 'CET');
    if (cetIndex !== -1) {
        sourceSelect.value = cetIndex;
    }
}

// Set default date/time
function setDefaultDateTime() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    
    document.getElementById('dateInput').value = `${year}-${month}-${day}`;
    document.getElementById('timeInput').value = '';
}

// Main function: Timezone conversion
function convertTimezone() {
    const sourceIndex = document.getElementById('sourceTimezone').value;
    const targetIndex = document.getElementById('targetTimezone').value;
    const dateInput = document.getElementById('dateInput').value;
    const timeInput = document.getElementById('timeInput').value;

    // Validation
    if (sourceIndex === '') {
        alert('Please select your timezone!');
        return;
    }

    if (targetIndex === '') {
        alert('Please select the target timezone!');
        return;
    }

    // Show loader
    const loader = document.getElementById('loader');
    const resultSection = document.getElementById('resultSection');
    
    loader.classList.add('active');
    resultSection.classList.remove('active');

    // Simulated delay for better UX
    setTimeout(() => {
        try {
            // Sorted array for consistent indexing
            const sortedAbbreviations = [...timezoneAbbreviations].sort((a, b) => 
                a.abbr.localeCompare(b.abbr)
            );

            // Get timezone info
            const sourceTimezone = sortedAbbreviations[sourceIndex];
            const targetTimezone = sortedAbbreviations[targetIndex];

            // Create date/time object
            let sourceDate;
            
            if (dateInput && timeInput) {
                // Both date and time provided
                sourceDate = new Date(`${dateInput}T${timeInput}:00`);
            } else if (dateInput && !timeInput) {
                // Only date provided, use current time
                const now = new Date();
                sourceDate = new Date(`${dateInput}T${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}:00`);
            } else if (!dateInput && timeInput) {
                // Only time provided, use current date
                const now = new Date();
                const year = now.getFullYear();
                const month = String(now.getMonth() + 1).padStart(2, '0');
                const day = String(now.getDate()).padStart(2, '0');
                sourceDate = new Date(`${year}-${month}-${day}T${timeInput}:00`);
            } else {
                // Neither provided, use current date/time
                sourceDate = new Date();
            }

            // Perform time conversion
            const sourceTimeString = sourceDate.toLocaleString('en-US', {
                timeZone: sourceTimezone.iana,
                year: 'numeric',
                month: '2-digit',
                day: '2-digit',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                hour12: false
            });

            const targetTimeString = sourceDate.toLocaleString('en-US', {
                timeZone: targetTimezone.iana,
                year: 'numeric',
                month: '2-digit',
                day: '2-digit',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                hour12: false
            });

            // Calculate time difference
            const sourceOffset = getTimezoneOffset(sourceDate, sourceTimezone.iana);
            const targetOffset = getTimezoneOffset(sourceDate, targetTimezone.iana);
            const diffMinutes = targetOffset - sourceOffset;
            const diffHours = Math.floor(Math.abs(diffMinutes) / 60);
            const diffMins = Math.abs(diffMinutes) % 60;

            let differenceText = '';
            if (diffMinutes > 0) {
                differenceText = `${diffHours}h ${diffMins}min ahead`;
            } else if (diffMinutes < 0) {
                differenceText = `${diffHours}h ${diffMins}min behind`;
            } else {
                differenceText = 'Same time';
            }

            // Display results
            document.getElementById('sourceTime').textContent = sourceTimeString;
            document.getElementById('sourceZoneName').textContent = 
                `${sourceTimezone.abbr} - ${sourceTimezone.name}`;
            
            document.getElementById('targetTime').textContent = targetTimeString;
            document.getElementById('targetZoneName').textContent = 
                `${targetTimezone.abbr} - ${targetTimezone.name}`;
            
            document.getElementById('timeDifference').textContent = 
                `⏱️ Time Difference: ${differenceText}`;

            // Hide loader, show result
            loader.classList.remove('active');
            resultSection.classList.add('active');

            // Scroll to result
            resultSection.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

        } catch (error) {
            loader.classList.remove('active');
            alert('Error during time conversion: ' + error.message);
            console.error(error);
        }
    }, 500);
}

// Helper function: Calculate timezone offset
function getTimezoneOffset(date, timeZone) {
    const utcDate = new Date(date.toLocaleString('en-US', { timeZone: 'UTC' }));
    const tzDate = new Date(date.toLocaleString('en-US', { timeZone }));
    return (tzDate.getTime() - utcDate.getTime()) / 60000;
}

// Reset form
function resetForm() {
    // Default to CET
    const sortedAbbreviations = [...timezoneAbbreviations].sort((a, b) => 
        a.abbr.localeCompare(b.abbr)
    );
    const cetIndex = sortedAbbreviations.findIndex(tz => tz.abbr === 'CET');
    
    document.getElementById('sourceTimezone').value = cetIndex !== -1 ? cetIndex : '';
    document.getElementById('targetTimezone').value = '';
    setDefaultDateTime();
    
    const resultSection = document.getElementById('resultSection');
    resultSection.classList.remove('active');
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Layout Switcher Function
function switchLayout(layout) {
    const stylesheet = document.getElementById('mainStylesheet');
    
    if (layout === 'metallic') {
        stylesheet.href = 'styles_metallic.css';
        localStorage.setItem('preferredLayout', 'metallic');
    } else {
        stylesheet.href = 'styles.css';
        localStorage.setItem('preferredLayout', 'normal');
    }
    
    // Visual feedback
    const buttons = document.querySelectorAll('.layout-btn');
    buttons.forEach(btn => btn.style.opacity = '0.6');
    
    setTimeout(() => {
        buttons.forEach(btn => btn.style.opacity = '1');
    }, 200);
}

// Load layout preference from localStorage
function loadLayoutPreference() {
    const preferred = localStorage.getItem('preferredLayout');
    if (preferred === 'metallic') {
        document.getElementById('mainStylesheet').href = 'styles_metallic.css';
    }
}

// Enter key to convert
document.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        const activeElement = document.activeElement;
        
        // Only if no button is focused
        if (activeElement.tagName !== 'BUTTON') {
            convertTimezone();
        }
    }
});
