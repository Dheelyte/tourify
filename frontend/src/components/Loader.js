const Loader = () => {
    console.log("Loading..........................................")
    return (
        <div class="loader-container">
            <div class="loader">
            <div class="lds-grid">
                <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
            </div>
            <p>Loading...</p>
            </div>
        </div>
    )
}

export default Loader