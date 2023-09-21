const Loader = () => {
    return (
        <div className="loader-container">
            <div className="loader">
            <div className="lds-grid">
                <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
            </div>
            <p>Loading places...</p>
            </div>
        </div>
    )
}

export default Loader