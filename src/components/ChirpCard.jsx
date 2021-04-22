const ChirpCard = props => {
    return (
        <div className="row justify-content-center mt-4">
            <div className="card">
                <div className="card-header bg-secondary text-white">
                    {props.user}
                </div>
                <div className="card-body">
                    <blockquote className="blockquote mb-0">
                        <p>{props.text}</p>
                    </blockquote>
                </div>
            </div>
        </div>
    )
}

export default ChirpCard;