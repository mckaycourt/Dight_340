const Pomodoro = () => {
    return (
        <React.Fragment>
            <h1>Tomato Timer</h1>
            <button className='btn-work'>Work</button>
            <button className='btn-rest'>Rest</button>
            <Timer time='25:00' />
        </React.Fragment>
    );
};

