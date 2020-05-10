import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import background from '../data/background.jpg'

function Homepage() {

    const { setVisible, user } = useContext(AppContext)

    return (
        <div className="homepage page">
            <div className="home-img" style={{ backgroundImage: `url('${background}')` }}>
                <div className="title-content">
                    <p className="shop-title">Shop with us</p>
                    <p className="shop-desc">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos</p>
                    <button className="shop-btn" onClick={() => setVisible(true)}>Shop now</button>
                    <Link to={user.isLogin ? '/' : "/login"}>
                        <button
                            className="shop-btn member"
                            onClick={() => user.isLogin && alert('You are already logged in')}
                        >Membership</button>
                    </Link>
                </div>
            </div>
            <div className="home-info">
                <div className="info">
                    <img className="icon-home" src="https://cdn1.iconfinder.com/data/icons/online-shopping-glyph-part-1/33/free_delivery-512.png" alt="freeShipping" />
                    <p className="home-title">Free shipping</p>
                    <p className="home-desc">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, Neque porro quisquam est,
                        eaque ipsa quae ab illo.
                    </p>
                </div>
                <div className="info">
                    <img className="icon-home small" src="https://cdn4.iconfinder.com/data/icons/warranty-2/512/r4y5r.png" alt="freeShipping" />
                    <p className="home-title">100% money back</p>
                    <p className="home-desc">
                        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi
                        nesciunt. Neque porro quisquam est.
                    </p>
                </div>
                <div className="info">
                    <img className="icon-home small" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSbsQIIgQimrqI-Tt9MZL4z5e85TbPimGFP-uOG-9kw3Dm1j3Pn&usqp=CAU" alt="freeShipping" />
                    <p className="home-title">Online support</p>
                    <p className="home-desc">
                        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
                        et quas molestias excepturi.
                    </p>
                </div>
            </div>
            <footer>

            </footer>
        </div>
    )
}

export default Homepage