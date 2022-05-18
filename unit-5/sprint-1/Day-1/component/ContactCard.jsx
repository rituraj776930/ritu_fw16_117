import React, { useState } from 'react'
import styles from './ContactCard.module.css'

function ContactCard(props) {
    const {name , phone , email , image} = props
    const [flag , setflag] = useState(false)
    
  return (
      <>
    <div className={styles.container} onClick={()=>setflag(!flag)}>
        <div><img className={styles.imagetag} src={image} alt="" /></div>
        <div>
            <div className={styles.name}>{name}</div>
            <div className={styles.email}>{email}</div>
        </div>
        {flag ? 
            <div className={styles.name}>{phone}</div> 
            : 
            <div className={styles.name}>Click to show more</div>}
    </div>
    </>
  )
}

export default ContactCard