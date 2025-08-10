const inputTemp = document.getElementById("inputTemp");
const fromUnit = document.getElementById("fromUnit");
const toUnit = document.getElementById("toUnit");
const result = document.getElementById("result");
const history = document.getElementById("history");
const switchBtn = document.getElementById("switchBtn");

function convertTemperature(value, from, to) {
    let celsius;

    // Convert to Celsius first
    if (from === "C") celsius = value;
    else if (from === "F") celsius = (value - 32) * (5 / 9);
    else if (from === "K") celsius = value - 273.15;

    // Convert from Celsius to target unit
    if (to === "C") return celsius;
    else if (to === "F") return celsius * 9 / 5 + 32;
    else if (to === "K") return celsius + 273.15;
}

function updateConversion() {
    const value = parseFloat(inputTemp.value);
    if (isNaN(value)) {
        result.textContent = "Please enter a valid number.";
        return;
    }

    const converted = convertTemperature(value, fromUnit.value, toUnit.value);
    result.textContent = `${value}°${fromUnit.value} = ${converted.toFixed(2)}°${toUnit.value}`;

    const li = document.createElement("li");
    li.textContent = `${value}°${fromUnit.value} → ${converted.toFixed(2)}°${toUnit.value}`;
    history.prepend(li);
}

inputTemp.addEventListener("input", updateConversion);
fromUnit.addEventListener("change", updateConversion);
toUnit.addEventListener("change", updateConversion);

switchBtn.addEventListener("click", () => {
    const tempUnit = fromUnit.value;
    fromUnit.value = toUnit.value;
    toUnit.value = tempUnit;
    updateConversion();
});
