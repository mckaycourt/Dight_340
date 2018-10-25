const Timer = ({time}) => {
    return (
        <React.Fragment>
            <div className='time'>{time}</div>
            <button className='btn-start'>Start</button>
            <button className='btn-stop'>Stop</button>
            <button className='btn-reset'>Reset</button>
        </React.Fragment>
    );
};

Timer.propTypes = {
    time: PropTypes.string,

};