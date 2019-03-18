import React from 'react'

import Contact from './Contact'

export default function HeaderBlog() {
  return (
    <div style={{ display: 'flex' }}>
      <div className="name-container">
        <span className="title">@adibfirman</span>
        <Contact className="contact" iconColor="#56b6c2" />
      </div>
      <div className="jokes">a man loving a cat</div>
      <div className="img-container">
        <img
          src="https://i.pinimg.com/originals/32/23/77/322377b211e0653efc8c3513a3769f3d.jpg"
          alt="perry-platypus"
          className="profile-img"
        />
      </div>
    </div>
  )
}
