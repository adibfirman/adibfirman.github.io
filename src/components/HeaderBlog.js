import React from 'react'
import { Link } from 'gatsby'

import Contact from './Contact'

function HeaderBlog({ hideImage, customText, className }) {
  return (
    <div style={{ display: 'flex' }}>
      <div className="name-container">
        <Link className="title" to="/">
          @adibfirman
        </Link>
        <Contact className="contact" iconColor="#56b6c2" />
      </div>
      <div className="jokes">{customText}</div>
      {!hideImage && (
        <div className="img-container">
          <img
            src="https://i.pinimg.com/originals/32/23/77/322377b211e0653efc8c3513a3769f3d.jpg"
            alt="perry-platypus"
            className="profile-img"
          />
        </div>
      )}
    </div>
  )
}

HeaderBlog.defaultProps = {
  hideImage: false,
  customText: 'a man loving a cat',
}

export default HeaderBlog
