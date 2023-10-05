// Get references to the canvas element and buttons
const canvas = document.getElementById("line-chart");
const happyButton = document.getElementById("happy-button");
const sadButton = document.getElementById("sad-button");
const neutralButton = document.getElementById("neutral-button");
const slightlySadButton = document.getElementById("slightly-sad-button");
const slightlyHappyButton = document.getElementById("slightly-happy-button");

// Initialize an empty data array
let data = {
    labels: [],
    datasets: [{
        label: 'Emotion Data',
        data: [],
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 2,
        fill: false
    }]
};

// Initialize the chart
const ctx = canvas.getContext('2d');
const lineChart = new Chart(ctx, {
    type: 'line',
    data: data,
    options: {
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Emotion Level'
                },
                ticks: {
                    max: 5,
                    min: 0,
                    stepSize: 1,
                    callback: function (value, index, values) {
                        // Map numerical values back to emojis
                        switch (value) {
                            case 0:
                                return '😢 Sad';
                            case 1:
                                return '😔 Slightly Sad';
                            case 2:
                                return '😐 Neutral';
                            case 3:
                                return '🙂 Slightly Happy';
                            case 4:
                                return '😄 Happy';
                            default:
                                return value;
                        }
                    }
                }
            }
        }
    }
});

// Event listeners for buttons
happyButton.addEventListener('click', () => addDataPoint('Happy'));
sadButton.addEventListener('click', () => addDataPoint('Sad'));
neutralButton.addEventListener('click', () => addDataPoint('Neutral'));
slightlySadButton.addEventListener('click', () => addDataPoint('Slightly Sad'));
slightlyHappyButton.addEventListener('click', () => addDataPoint('Slightly Happy'));

// Function to add a data point to the chart
function addDataPoint(emotion) {
    // Get the current timestamp
    const timestamp = new Date().toLocaleTimeString();

    // Adding the data point to the chart
    data.labels.push(timestamp);
    switch (emotion) {
        case 'Happy':
            data.datasets[0].data.push(4);
            break;
        case 'Sad':
            data.datasets[0].data.push(0);
            break;
        case 'Neutral':
            data.datasets[0].data.push(2);
            break;
        case 'Slightly Sad':
            data.datasets[0].data.push(1);
            break;
        case 'Slightly Happy':
            data.datasets[0].data.push(3);
            break;
        default:
            break;
    }

    // Limiting the chart to the last 10 data points
    if (data.labels.length > 10) {
        data.labels.shift();
        data.datasets[0].data.shift();
    }

    // Updating the chart
    lineChart.update();
}
