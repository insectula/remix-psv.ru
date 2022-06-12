import { useState, useEffect} from 'react';
export default function Popular(props) {
    const {children} = props;
    console.log(children.length)
    const [currentIndex, setCurrentIndex] = useState(0)
    const [length, setLength] = useState(children.length)
    

    const next = () => {
        console.log(currentIndex, length, 'a-b-1')
        if (currentIndex < (length - 1)) {
            setCurrentIndex(prevState => prevState + 2)
        }
    }
    
    const prev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prevState => prevState - 2)
        }
    }
    // Set the length to match current children from props
    useEffect(() => {
        setLength(children.length)
    }, [children])





    /*const [state, setState]= useState(0);
    const scrollNext = () => {
        (state > -1200) && setState(state - 300);
      }
      const scrollPrev = () => {
        (state < 0) && setState(state + 300);
      }*/
    return (
        <div className="carousel-container">
            <div className="carousel-wrapper">
                {/* You can alwas change the content of the button to other things */}
            {currentIndex > 0 &&
            
                <button onClick={prev} className="left-arrow">
                    ◀&nbsp;
                </button>}
                <div className="carousel-content-wrapper">
                <div
                    className="carousel-content"
                    style={{ transform: `translateX(-${currentIndex * 20}%)` }}
                >
                                {children}
                    </div>
                </div>
                {/* You can alwas change the content of the button to other things */}
                {currentIndex < 6 &&
                <button onClick={next} className="right-arrow">
                    &nbsp;▶
                </button>}
            </div>
        </div>
        )}