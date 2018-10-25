const Pips = ({images, currentIndex, test}) => {
    const styles ={
        width: "100%",
        bottom: "0",
        textAlign: "center",
        position: "absolute",
        zIndex: "25",
        color: 'white'
    };

    return (
        <div className='pips' style={styles}>
            {images.map((image, i) => (
                <Pip key={i} index={i} currentIndex={currentIndex} test={test}/>
            ))}
        </div>
    );
};