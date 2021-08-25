import classes from './Carousel.module.css';

const Carousel = () => {
    return(   
        <div className={classes.csl}>     
            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item">
                        <img src="https://image.shutterstock.com/image-photo/science-molecule-molecular-dna-model-600w-260947274.jpg" class="d-block w-100" alt="img4"/>
                    </div>
                    <div class="carousel-item">
                        <img src="https://image.shutterstock.com/image-photo/business-technology-internet-network-concept-600w-592436522.jpg" class="d-block w-100" alt="img3"/>
                    </div>
                    <div class="carousel-item active">
                        <img src="https://image.shutterstock.com/image-photo/enzymelinked-immunosorbent-assay-elisa-plate-600w-1175278900.jpg" class="d-block w-100" alt="mob img"/>
                    </div>
                    <div class="carousel-item">
                        <img src="https://rukminim1.flixcart.com/flap/844/140/image/468021c4aaa6f7b9.jpg?q=50" class="d-block w-100" alt="img2"/>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class={"visually-hidden "  }>Next</span>
                </button>
            </div>
        </div>

        
    );
};

export default Carousel;