const Pip = ({index, currentIndex, test}) => {
    const styles = {
        fontSize: "80px",
        zIndex: "20",
        cursor: 'pointer',
    };
    if(index === currentIndex){
        styles.color= '#FF00EF';
    }
    return <span className='pip' onClick={() => test(index)} style={styles}>&middot;</span>;
};