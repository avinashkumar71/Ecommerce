import React from 'react'

function Carausol() {
  return (
    <>
        <div className='container'>
            <div className='row my-5'>
                <div className='col'>
                    <div id="carouselExampleRide" class="carousel slide carousel_size_col" data-bs-ride="true">
                    <div class="carousel-inner carousel_size">
                        <div class="carousel-item active carousel_size ">
                        <img src="laptop-apple.jpg" class="d-block carousel_size " alt="..."/>
                        </div>
                        <div class="carousel-item carousel_size">
                        <img src="laptop.jpg" class="d-block carousel_size" alt="..."/>
                        </div>
                        <div class="carousel-item carousel_size">
                        <img src="yellow-phone.jpg" class="d-block carousel_size " alt="..."/>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Carausol