document.getElementById('suggestBtn').addEventListener('click', function() {
    const landSize = parseInt(document.getElementById('landSize').value);
    const buildingType = document.getElementById('buildingType').value;
    const roomType = document.getElementById('roomType').value;
    const soilType = document.getElementById('soilType').value;

    // New material calculator inputs
    const length = parseFloat(document.getElementById('length').value);
    const width = parseFloat(document.getElementById('width').value);
    const floors = parseInt(document.getElementById('floors').value);

    if (isNaN(landSize) || landSize <= 0 || isNaN(length) || length <= 0 || isNaN(width) || width <= 0 || isNaN(floors) || floors <= 0) {
        alert('Please enter valid dimensions and land size.');
        return;
    }

    let suggestions = '';
    let materials = '';
    let costPrediction = 0;

    // Determine building suggestions based on type and size
    const area = length * width * floors; // Total area considering floors
    if (buildingType === 'house') {
        suggestions = landSize < 100 ? 
            'Consider a small single-family house.' : 
            'A standard single-family house can be built.';
        materials = 'Materials: Concrete, Wood, Roofing, Insulation';
        costPrediction = area * 1000; // Cost estimate per square meter
    } else if (buildingType === 'duplex') {
        suggestions = landSize < 150 ? 
            'A duplex might fit, but consider limitations.' : 
            'A duplex can be easily constructed.';
        materials = 'Materials: Concrete, Wood, Drywall, Windows';
        costPrediction = area * 1200;
    } else if (buildingType === 'apartment') {
        suggestions = landSize < 300 ? 
            'Consider a small apartment complex.' : 
            'You can build a larger apartment building.';
        materials = 'Materials: Steel, Concrete, Glass, Insulation';
        costPrediction = area * 1500;
    } else if (buildingType === 'commercial') {
        suggestions = landSize < 400 ? 
            'A small commercial space is feasible.' : 
            'A larger commercial building can be constructed.';
        materials = 'Materials: Steel, Concrete, Glass, Drywall';
        costPrediction = area * 2000;
    }

    // Vasthu suggestions based on room type
    let vasthuSuggestions = '';
    switch (roomType) {
        case 'mainDoor':
            vasthuSuggestions = `
                <strong>Main Door:</strong><br>
                - Should be larger and stronger than other doors, made of high-quality wood.<br>
                - It should open inward and be well-lit.<br>
                - Avoid placing a shoe rack, dustbin, or fountain outside.<br>
            `;
            break;
        case 'bedroom':
            vasthuSuggestions = `
                <strong>Bedroom:</strong><br>
                - Place the headboard in the east or south, and sleep with legs pointing north or west.<br>
                - Avoid paintings of water or fountains in the bedroom.<br>
            `;
            break;
        case 'livingRoom':
            vasthuSuggestions = `
                <strong>Living Room:</strong><br>
                - Keep the living room clutter-free.<br>
                - Place electronics and appliances in the southeast section.<br>
                - Ensure an even number of chairs if you have multiple.<br>
            `;
            break;
        case 'kitchen':
            vasthuSuggestions = `
                <strong>Kitchen:</strong><br>
                - Ideally located in the southeast or northwest corner.<br>
                - Avoid placing it in the north, northeast, or southwest.<br>
                - The kitchen door should not face the bathroom door.<br>
            `;
            break;
        case 'bathroom':
            vasthuSuggestions = `
                <strong>Bathroom:</strong><br>
                - Should be in the north or northwest direction.<br>
                - Avoid placing it in the south, southeast, or southwest.<br>
                - The toilet seat should face north or west, and keep the bathroom door shut.<br>
            `;
            break;
        default:
            vasthuSuggestions = 'Please select a room for specific Vasthu suggestions.';
            break;
    }

    // Land analysis based on soil type
    let landAnalysis = '';
    switch (soilType) {
        case 'loamy':
            landAnalysis = `
                <strong>Loamy Soil:</strong><br>
                - Medium bearing capacity, suitable for most building types.<br>
                - Ideal for gardens and vegetation.<br>
            `;
            break;
        case 'rocky':
            landAnalysis = `
                <strong>Rocky Soil:</strong><br>
                - High bearing capacity, excellent for large structures.<br>
                - May require specialized equipment for excavation.<br>
            `;
            break;
        case 'sandy':
            landAnalysis = `
                <strong>Sandy Soil:</strong><br>
                - Medium bearing capacity, can shift under pressure.<br>
                - Requires proper drainage systems to prevent erosion.<br>
            `;
            break;
        case 'clay':
            landAnalysis = `
                <strong>Clay Soil:</strong><br>
                - Low to medium bearing capacity, can swell and shrink.<br>
                - Proper foundation design is crucial to prevent settling issues.<br>
            `;
            break;
        default:
            landAnalysis = 'No land analysis available for the selected soil type.';
            break;
    }

    // Additional AI-Driven Design and Analysis suggestions
    const exteriorDesign = `
        <strong>Exterior Design:</strong><br>
        - Based on preferences, AI can suggest styles, size, and budget-friendly designs.<br>
    `;
    
    const interiorDesign = `
        <strong>Interior Design:</strong><br>
        - Suggestions for furniture arrangement, color palettes, and lighting.<br>
    `;
    
    const customization = `
        <strong>Customization:</strong><br>
        - Adjust design elements to your preferences, such as specific materials, colors, and features.<br>
    `;

    // Open new window with full report
    const newWindow = window.open('', '_blank');
    newWindow.document.write(`
        <html>
            <head>
                <title>Building and Vasthu Suggestions</title>
                <style>
                    body { font-family: Arial, sans-serif; padding: 20px; }
                    h1 { color: #333; }
                    h2 { color: #555; }
                    p { margin-bottom: 10px; }
                </style>
            </head>
            <body>
                <h1>Building Constructor Suggestions</h1>
                <p><strong>Suggestions:</strong> ${suggestions}</p>
                <p><strong>Required Materials:</strong> ${materials}</p>
                <p><strong>Estimated Cost:</strong> $${costPrediction.toLocaleString()}</p>
                <h2>Vasthu Suggestions</h2>
                <p>${vasthuSuggestions}</p>
                <h2>Land Analysis</h2>
                <p>${landAnalysis}</p>
                <h2>Additional AI-Driven Suggestions</h2>
                    ${exteriorDesign}
                    ${interiorDesign}
                    ${customization}
                </div>
            </body>
        </html>
    `);
    newWindow.document.close(); // Close the document to finish loading
});
