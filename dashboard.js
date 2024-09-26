// Firebase configuration and initialization
const firebaseConfig = {
    apiKey: "AIzaSyDX25nwzQc-STovWztgtw2aCycvWXJxA3Y",
    authDomain: "dash-13064.firebaseapp.com",
    databaseURL: "https://dash-13064-default-rtdb.firebaseio.com",
    projectId: "dash-13064",
    storageBucket: "dash-13064.appspot.com",
    messagingSenderId: "409540597555",
    appId: "1:409540597555:web:5cc48d3ab4046fbd309046",
    measurementId: "G-78JL7PXFPJ"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();

// Add click event listeners for each state
const states = [
    'AN', 'AR', 'AS', 'BR', 'CH', 'CT', 'DD', 'DL', 'DN', 'GA', 
    'GJ', 'HP', 'HR', 'JH', 'JK', 'KA', 'KL', 'LD', 'MH', 'ML', 
    'MP', 'OR', 'PB', 'PY', 'RJ', 'SK', 'TG', 'TN', 'UP', 'UT', 'WB'
];

states.forEach(state => {
    document.getElementById(`IN-${state}`).addEventListener('click', () => loadDistricts(state));
});

// Load districts for a selected state
function loadDistricts(state) {
    const stateNames = {
        AN: "Andaman and Nicobar Islands",
        AR: "Arunachal Pradesh",
        AS: "Assam",
        BR: "Bihar",
        CH: "Chandigarh",
        CT: "Chhattisgarh",
        DD: "Daman and Diu",
        DL: "Delhi",
        DN: "Dadra and Nagar Haveli",
        GA: "Goa",
        GJ: "Gujarat",
        HP: "Himachal Pradesh",
        HR: "Haryana",
        JH: "Jharkhand",
        JK: "Jammu and Kashmir",
        KA: "Karnataka",
        KL: "Kerala",
        LD: "Lakshadweep",
        MH: "Maharashtra",
        ML: "Meghalaya",
        MP: "Madhya Pradesh",
        OR: "Odisha",
        PB: "Punjab",
        PY: "Puducherry",
        RJ: "Rajasthan",
        SK: "Sikkim",
        TG: "Telangana",
        TN: "Tamil Nadu",
        UP: "Uttar Pradesh",
        UT: "Uttarakhand",
        WB: "West Bengal"
    };

    const stateName = stateNames[state];
    document.getElementById('stateName').textContent = stateName;
    const districtList = document.getElementById('districtList');
    districtList.innerHTML = ''; // Clear previous entries

    // Fetch districts from Firebase
    database.ref(`states/${stateName}/districts`).once('value', (snapshot) => {
        if (snapshot.exists()) {
            snapshot.forEach((childSnapshot) => {
                const districtName = childSnapshot.key;
                const li = document.createElement('li');
                li.textContent = districtName;
                li.onclick = () => loadPoliceStations(stateName, districtName); // Load police stations on click
                districtList.appendChild(li);
            });
        } else {
            districtList.innerHTML = '<li>No districts available</li>';
        }
    });
}

// Load police stations for a selected district
function loadPoliceStations(state, district) {
    document.getElementById('districtName').textContent = district;
    const policeStationList = document.getElementById('policeStationList');
    policeStationList.innerHTML = ''; // Clear previous entries

    // Fetch police stations from Firebase
    database.ref(`states/${state}/districts/${district}/policeStations`).once('value', (snapshot) => {
        if (snapshot.exists()) {
            snapshot.forEach((childSnapshot) => {
                const stationName = childSnapshot.key;
                const li = document.createElement('li');
                li.textContent = stationName;
                li.onclick = () => loadInventoryData(stationName); // Load inventory data on click
                policeStationList.appendChild(li);
            });
        } else {
            policeStationList.innerHTML = '<li>No police stations available</li>';
        }
    });
}

// Load inventory data for a selected police station
function loadInventoryData(stationName) {
    const selectedDistrict = document.getElementById('districtName').textContent;
    const selectedState = document.getElementById('stateName').textContent;

    document.getElementById('stationName').textContent = stationName;
    const inventoryTableBody = document.querySelector('#inventoryTable tbody');

    // Clear previous entries
    inventoryTableBody.innerHTML = '';

    // Show the inventory panel
    document.getElementById('inventoryPanel').style.display = 'block';
    document.getElementById('districtPanel').style.display = 'none'; // Hide district panel
    document.getElementById('policeStationPanel').style.display = 'none'; // Hide police station panel

    // Fetch inventory data from Firebase
    database.ref(`states/${selectedState}/districts/${selectedDistrict}/policeStations/${stationName}/inventory`).on('value', (snapshot) => {
        if (snapshot.exists()) {
            snapshot.forEach((typeSnapshot) => {
                const inventoryType = typeSnapshot.key; // Laptops, Desktops, etc.
                const items = typeSnapshot.val(); // Items under this type

                // Loop through each item of this type
                for (const itemId in items) {
                    const itemData = items[itemId];

                    // Create a new row for each inventory item
                    const newRow = inventoryTableBody.insertRow();

                    // Insert cells for each property you want to display
                    newRow.insertCell(0).textContent = itemId; // ID (e.g., LAP-001)
                    newRow.insertCell(1).textContent = itemData.Model; // Model
                    newRow.insertCell(2).textContent = itemData['Assigned To']; // Assigned To
                    newRow.insertCell(3).textContent = itemData.Status; // Status
                    newRow.insertCell(4).textContent = itemData['Warranty Expiry']; // Warranty Expiry

                    // Optionally, add more cells for additional properties if needed
                    // For example:
                    newRow.insertCell(5).textContent = itemData.Location; // Location
                    newRow.insertCell(6).textContent = itemData['Last Maintenance']; // Last Maintenance
                    newRow.insertCell(7).textContent = itemData['Lifecycle Status']; // Lifecycle Status
                    newRow.insertCell(8).textContent = itemData.Comments; // Comments
                }
            });
        } else {
            inventoryTableBody.innerHTML = '<tr><td colspan="8">No inventory available for this station.</td></tr>'; // Adjusted colspan based on cells
        }
    });
}


// Function to add new data (placeholder)
function addData() {
    alert("Add Data functionality to be implemented!");
}
