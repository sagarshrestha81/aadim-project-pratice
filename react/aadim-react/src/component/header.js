 function Header(){
    return(
        <header>
        <a href="/" className="logo">
            <img src="./../assets/images/logo/logo.svg" alt="logo"/>
                
            <span className="primary-font bold">NFT Marketplace</span>
        </a>
        <nav>
            <div className="nav-links">
                <a href="#">Marketplace</a>
                <a href="#">Rankings</a>
                <a href="#">Connect a wallet</a>
            </div>
            <div className="nav-button-links">
                <a href="#" className="button button-primary button-icon button-user
    ">Sign Up</a>
            </div>
        </nav>
    </header>
    )
 }
 export default Header;