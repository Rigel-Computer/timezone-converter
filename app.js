/*
    File: app.js
    Last modified: 04.12.2025 17:15 MEZ
    Changes: English text, layout switcher function added
*/

// Main initialization
function init() {
   populateTimezones();
   setDefaultDateTime();
}

// Populate timezone lists with abbreviations
function populateTimezones() {
   const sourceSelect = document.getElementById("sourceTimezone");
   const targetSelect = document.getElementById("targetTimezone");

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
   const cetIndex = sortedAbbreviations.findIndex((tz) => tz.abbr === "CET");
   if (cetIndex !== -1) {
      sourceSelect.value = cetIndex;
   }
}

// Set default date/time
function setDefaultDateTime() {
   const now = new Date();
   const year = now.getFullYear();
   const month = String(now.getMonth() + 1).padStart(2, "0");
   const day = String(now.getDate()).padStart(2, "0");

   document.getElementById("dateInput").value = `${year}-${month}-${day}`;
   document.getElementById("timeInput").value = "";

   // Update date format displays
   updateDateFormats(`${year}-${month}-${day}`);
}

// Update date format displays
function updateDateFormats(isoDate) {
   const isoFormatEl = document.getElementById("isoFormat");
   const usFormatEl = document.getElementById("usFormat");

   if (!isoDate) {
      isoFormatEl.textContent = "--";
      usFormatEl.textContent = "--";
      return;
   }

   // ISO format is already in YYYY-MM-DD
   isoFormatEl.textContent = isoDate;

   // Convert to US format MM/DD/YYYY
   const [year, month, day] = isoDate.split("-");
   usFormatEl.textContent = `${month}/${day}/${year}`;
}

// Listen to date input changes
document.addEventListener("DOMContentLoaded", function () {
   init();
   loadLayoutPreference();

   // Add event listener for date changes
   const dateInput = document.getElementById("dateInput");
   dateInput.addEventListener("change", function () {
      updateDateFormats(this.value);
   });
   dateInput.addEventListener("input", function () {
      updateDateFormats(this.value);
   });
});

// Main function: Timezone conversion
function convertTimezone() {
   const sourceIndex = document.getElementById("sourceTimezone").value;
   const targetIndex = document.getElementById("targetTimezone").value;
   const dateInput = document.getElementById("dateInput").value;
   const timeInput = document.getElementById("timeInput").value;
   const compareAgainstNow =
      document.getElementById("compareAgainstNow")?.checked === true;

   // Validation
   if (sourceIndex === "") {
      alert("Please select your timezone!");
      return;
   }

   if (targetIndex === "") {
      alert("Please select the target timezone!");
      return;
   }

   if (!compareAgainstNow && (!dateInput || !timeInput)) {
      alert("Please enter desired target date and time.");
      return;
   }

   // Show loader
   const loader = document.getElementById("loader");
   const resultSection = document.getElementById("resultSection");

   loader.classList.add("active");
   resultSection.classList.remove("active");

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

         // Build the intended wall time.
         // If not comparing against now, interpret input as TARGET timezone wall time.
         // Important: User input must be interpreted as time *in the selected source timezone*,
         // not as browser-local time.
         const now = new Date();
         const nowPartsInSource = getZonedParts(
            now,
            compareAgainstNow ? sourceTimezone.iana : targetTimezone.iana
         );

         // Date part
         const dateParts = dateInput
            ? (() => {
                 const [y, m, d] = dateInput.split("-").map(Number);
                 return { year: y, month: m, day: d };
              })()
            : {
                 year: nowPartsInSource.year,
                 month: nowPartsInSource.month,
                 day: nowPartsInSource.day,
              };

         // Time part
         const timeParts = timeInput
            ? (() => {
                 const [hh, mm] = timeInput.split(":").map(Number);
                 return { hour: hh, minute: mm, second: 0 };
              })()
            : {
                 hour: nowPartsInSource.hour,
                 minute: nowPartsInSource.minute,
                 second: nowPartsInSource.second,
              };

         // Create an instant (Date) that corresponds to the source-zone wall time.
         const sourceDate = zonedDateTimeToUtcDate(
            dateParts.year,
            dateParts.month,
            dateParts.day,
            timeParts.hour,
            timeParts.minute,
            timeParts.second,
            compareAgainstNow ? sourceTimezone.iana : targetTimezone.iana
         );

         // Perform time conversion (same instant, formatted in two time zones)
         const sourceTimeString = sourceDate.toLocaleString("en-US", {
            timeZone: sourceTimezone.iana,
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: false,
         });

         const targetTimeString = sourceDate.toLocaleString("en-US", {
            timeZone: targetTimezone.iana,
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: false,
         });

         // Calculate time difference (at the selected instant)
         const sourceOffset = getTimezoneOffset(
            sourceDate,
            sourceTimezone.iana
         );
         const targetOffset = getTimezoneOffset(
            sourceDate,
            targetTimezone.iana
         );
         const diffMinutes = targetOffset - sourceOffset;
         const diffHours = Math.floor(Math.abs(diffMinutes) / 60);
         const diffMins = Math.abs(diffMinutes) % 60;

         let differenceText = "";
         if (diffMinutes > 0) {
            differenceText = `${diffHours}h ${diffMins}min ahead`;
         } else if (diffMinutes < 0) {
            differenceText = `${diffHours}h ${diffMins}min behind`;
         } else {
            differenceText = "Same time";
         }

         // Display results
         document.getElementById("sourceTime").textContent = sourceTimeString;
         document.getElementById(
            "sourceZoneName"
         ).textContent = `${sourceTimezone.abbr} - ${sourceTimezone.name}`;

         document.getElementById("targetTime").textContent = targetTimeString;
         document.getElementById(
            "targetZoneName"
         ).textContent = `${targetTimezone.abbr} - ${targetTimezone.name}`;

         document.getElementById(
            "timeDifference"
         ).textContent = `⏱️ Time Difference: ${differenceText}`;

         // UX-friendly summary text
         const resultTextEl = document.getElementById("resultText");
         if (resultTextEl) {
            const direction =
               diffMinutes > 0
                  ? "later"
                  : diffMinutes < 0
                  ? "earlier"
                  : "at the same time";
            const diffHoursText =
               diffHours === 1 ? "1 hour" : `${diffHours} hours`;
            const resultHour = sourceTimeString.split(", ")[1].substring(0, 5);

            resultTextEl.innerHTML =
               `Based on your local timezone (${sourceTimezone.abbr}), the calculated time is ` +
               `<strong>${
                  diffMinutes === 0 ? "the same" : diffHoursText
               }</strong> ${direction}.<br>` +
               `Resulting time: <strong>${resultHour}</strong>.`;
         }
         // Hide loader, show result
         loader.classList.remove("active");
         resultSection.classList.add("active");

         // Scroll to result
         resultSection.scrollIntoView({ behavior: "smooth", block: "nearest" });
      } catch (error) {
         loader.classList.remove("active");
         alert("Error during time conversion: " + error.message);
         console.error(error);
      }
   }, 500);
}

// Helper: Get date/time parts in a given IANA timezone
function getZonedParts(date, timeZone) {
   const dtf = new Intl.DateTimeFormat("en-US", {
      timeZone,
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
   });

   const parts = dtf.formatToParts(date).reduce((acc, part) => {
      if (part.type !== "literal") acc[part.type] = part.value;
      return acc;
   }, {});

   return {
      year: Number(parts.year),
      month: Number(parts.month),
      day: Number(parts.day),
      hour: Number(parts.hour),
      minute: Number(parts.minute),
      second: Number(parts.second),
   };
}

// Helper: Convert a wall time in a given timezone into a Date (instant) in UTC
function zonedDateTimeToUtcDate(
   year,
   month,
   day,
   hour,
   minute,
   second,
   timeZone
) {
   // Start with a UTC timestamp that has the same components as the desired wall time.
   let utcGuess = new Date(
      Date.UTC(year, month - 1, day, hour, minute, second)
   );

   // Offset is "timezone - UTC" in minutes at the guessed instant.
   // Adjusting by this offset gives an instant that should display the intended wall time in that timezone.
   // Do 2 passes to handle DST boundaries robustly.
   for (let i = 0; i < 2; i++) {
      const offsetMinutes = getTimezoneOffset(utcGuess, timeZone);
      utcGuess = new Date(utcGuess.getTime() - offsetMinutes * 60000);
   }

   return utcGuess;
}

// Helper function: Calculate timezone offset
function getTimezoneOffset(date, timeZone) {
   const utcDate = new Date(date.toLocaleString("en-US", { timeZone: "UTC" }));
   const tzDate = new Date(date.toLocaleString("en-US", { timeZone }));
   return (tzDate.getTime() - utcDate.getTime()) / 60000;
}

// Reset form
function resetForm() {
   // Default to CET
   const sortedAbbreviations = [...timezoneAbbreviations].sort((a, b) =>
      a.abbr.localeCompare(b.abbr)
   );
   const cetIndex = sortedAbbreviations.findIndex((tz) => tz.abbr === "CET");

   document.getElementById("sourceTimezone").value =
      cetIndex !== -1 ? cetIndex : "";
   document.getElementById("targetTimezone").value = "";
   setDefaultDateTime();

   const resultSection = document.getElementById("resultSection");
   resultSection.classList.remove("active");

   // Scroll to top
   window.scrollTo({ top: 0, behavior: "smooth" });
}

// Layout Switcher Function
function switchLayout(layout) {
   const stylesheet = document.getElementById("mainStylesheet");

   if (layout === "metallic") {
      stylesheet.href = "styles_metallic.css";
      localStorage.setItem("preferredLayout", "metallic");
   } else {
      stylesheet.href = "styles.css";
      localStorage.setItem("preferredLayout", "normal");
   }

   // Visual feedback
   const buttons = document.querySelectorAll(".layout-btn");
   buttons.forEach((btn) => (btn.style.opacity = "0.6"));

   setTimeout(() => {
      buttons.forEach((btn) => (btn.style.opacity = "1"));
   }, 200);
}

// Load layout preference from localStorage
function loadLayoutPreference() {
   const preferred = localStorage.getItem("preferredLayout");
   if (preferred === "metallic") {
      document.getElementById("mainStylesheet").href = "styles_metallic.css";
   }
}

// Enter key to convert
document.addEventListener("keypress", function (event) {
   if (event.key === "Enter") {
      const activeElement = document.activeElement;

      // Only if no button is focused
      if (activeElement.tagName !== "BUTTON") {
         convertTimezone();
      }
   }
});
