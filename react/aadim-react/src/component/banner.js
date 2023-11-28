 function Banner(){
    return(
        <section className="banner-wrapper">
        <div className="banner-text-area">
            <div className="banner-text-headings">
                <h1 className="bold">Discovery <br/> digital art & Collect NFTs</h1>
                <p>NFT marketplace UI created with Anima for Figma. Collect, buy and sell art from more than
                    20k NFT artists.</p>
            </div>
            <div className="banner-button-wrap">
                <a href="#" className="button button-primary button-icon button-rocket">Get Started</a>
            </div>
            <div className="banner-additional-info">
                <div className="banner-additional-info-single">
                    <h4 className="bold">240k+</h4>
                    <p>Total Sale</p>
                </div>
                <div className="banner-additional-info-single">
                    <h4 className="bold">100k+</h4>
                    <p>Auctions</p>
                </div>
                <div className="banner-additional-info-single">
                    <h4 className="bold">240k+</h4>
                    <p>Artists</p>
                </div>
            </div>
        </div>
        <div className="banner-cart">
            <img src="./../assets/images/test.jpg" alt="banner1"/>
            <div className="banner-cart-detail">
                <h5>Space Walking</h5>
                <div className="banner-cart-detail-artist">
                    <img src="./../assets/images/avatar/Avatar1.png" alt="Avatar1"/>
                    <span>Animakid</span>
                </div>
            </div>
        </div>


    </section>
    )
 }
 export default Banner;