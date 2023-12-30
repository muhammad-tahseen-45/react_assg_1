function Nav_Bar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand ms-5 " href="#">LOGO</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div>
                        <button class="btn btn-outline-success me-5 " type="submit">SGINUP</button>
                    </div>
                </div>
            </nav>
        </div>

    )
}

export default Nav_Bar