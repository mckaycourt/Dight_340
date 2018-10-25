class Slider extends React.Component {
    constructor(props) {
        super(props);
        let images = ['artanis', 'johanna', 'muradin'];
        let shuffle = (a) => {
            let j, x, i;
            for (i = a.length - 1; i > 0; i--) {
                j = Math.floor(Math.random() * (i + 1));
                x = a[i];
                a[i] = a[j];
                a[j] = x;
            }
            return a;
        };
        let newImages = shuffle(images);
        console.log(newImages);
        this.state = {
            images: newImages,
            currentIndex: 0,
            translateValue: 0,
            keepGoing: false,
        };
    };

    mixUp = () => {
        let shuffle = (a) => {
            let j, x, i;
            for (i = a.length - 1; i > 0; i--) {
                j = Math.floor(Math.random() * (i + 1));
                x = a[i];
                a[i] = a[j];
                a[j] = x;
            }
            return a;
        };
        let images = this.state.images;
        let newImages = shuffle(images);
        return this.setState({
            images: newImages
        })
    };

    goToNextSlide = () => {
        if (this.state.currentIndex === this.state.images.length - 1) {
            return this.setState({
                currentIndex: 0,
                translateValue: 0,
            })
        }
        this.setState((prevState) => ({
            currentIndex: prevState.currentIndex + 1,
            translateValue: prevState.translateValue - (document.querySelector('.slide').clientWidth),
        }));
    };

    goToPrevSlide = () => {
        if (this.state.currentIndex === 0) {
            return this.setState({
                currentIndex: this.state.images.length - 1,
                translateValue: document.querySelector('.slide').clientWidth * -(this.state.images.length - 1),
            })
        }
        this.setState((prevState) => ({
            currentIndex: prevState.currentIndex - 1,
            translateValue: prevState.translateValue + (document.querySelector('.slide').clientWidth),
        }));
    };

    automatic() {
        console.log('automatic');
        if (!this.state.keepGoing) {
            let auto = setInterval(this.goToNextSlide, 3000);
            this.setState({auto: auto});
        }
    };

    test = (index) => {
        return this.setState({
            currentIndex: index,
            translateValue: -document.querySelector('.slide').clientWidth * index,
        })
    };

    handleKeyPress = (e) => {
        // e.keyCode is deprecated
        console.log(e.which);
        switch (e.which) {
            case 39:
                this.goToNextSlide();
                clearInterval(this.state.auto);
                this.setState({
                    keepGoing: false,
                });
                break;
            case 37:
                this.goToPrevSlide();
                clearInterval(this.state.auto);
                this.setState({
                    keepGoing: false,
                });
                break;
            case 32:
                if (!this.state.keepGoing) {
                    this.automatic();
                    this.setState({
                        keepGoing: true,
                    })
                }
                else {
                    clearInterval(this.state.auto);
                    this.setState({
                        keepGoing: false,
                    })
                }
                break;
            case 82:
                this.mixUp();
                break;
            default:
                console.log(e.key);
                clearInterval(this.state.auto);
                this.setState({
                    keepGoing: false,
                });
                break;
        }
    };

    render() {

        const styles = {
            position: "relative",
            width: "100%",
            margin: "0 auto",
            height: "100%",
            overflow: "hidden",
            whiteSpace: "nowrap",
        };

        return (
            <div className="slider" style={styles} onKeyUp={this.handleKeyPress} tabIndex='0'>
                <Pips images={this.state.images} currentIndex={this.state.currentIndex} test={this.test}/>
                <Arrow direction="backward" clickHandler={this.goToPrevSlide}/>
                <Slides translateValue={this.state.translateValue} images={this.state.images}/>
                <Arrow direction="forward" clickHandler={this.goToNextSlide}/>
            </div>
        );
    }
}