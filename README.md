## Google Maps and React

This project uses the npm package google-map-react to create a simple app with Google Maps attached.

When it first loads, the map will be centered on the IUPUI campus with a marker attached to a location nearby. It should stay in place as the user pans the map.

On the top of the map, there are three buttons, when the user clicks on these buttons, it should redirect the map to the one of the following locations based on the button clicked: Albany, New York, Seattle, Washington, Ann Arbor, Michigan, IUPUI campus [via "Reset"]. The marker should also move along with the map. 

Below the map, the user can input their own coordinated via textfields, one for latitude and the other for longitude. Based on the inputted coordinates, the "Warp to Location" button redirects the google map to that location.