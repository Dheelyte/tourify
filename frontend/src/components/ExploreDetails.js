const ExploreDetails = () => {

    //"AIzaSyASRxkFuU7msiv43q1j0JZQIlX5du_oaWU"
    //fetch('https://maps.googleapis.com/maps/api/place/findplacefromtext/json?fields=formatted_address%2Cname%2Crating%2Copening_hours%2Cgeometry&input=Museum%20of%20Contemporary%20Art%20Australia&inputtype=textquery&key=AIzaSyASRxkFuU7msiv43q1j0JZQIlX5du_oaWU')
    fetch('https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/findplacefromtext/json?fields=formatted_address%2Cname%2Crating%2Copening_hours%2Cgeometry%2Cphoto&input=Museum%20of%20Contemporary%20Art%20Australia&inputtype=textquery&key=AIzaSyASRxkFuU7msiv43q1j0JZQIlX5du_oaWU')
    .then(resp => resp.json())
    .then(places => {
        // 'data' now contains the text response from the URL
        console.log(places);
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });
    return (
        <h1>Hi</h1>
    )
}

export default ExploreDetails;