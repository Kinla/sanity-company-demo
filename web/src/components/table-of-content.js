import React from 'react'
import styles from './table-of-content.module.css'

const slug = (title) => {
  return title.toString().split(' ').join('-')
}

const TableOfContent = ({ blocks }) => {
  let headlines = blocks.filter(block => block.style === 'h2').map(el => el.children[0].text)
  if (headlines.length > 0) {
    return (
      <div className={styles.root}>
        <h4>TABLE OF CONTENT</h4>
        <ul className={styles.list}>
          {headlines.map(headline => <a href={'#' + slug(headline)}><li className={styles.listItem}>{headline}</li></a>)}
        </ul>
      </div>
    )
  } else {
    return null
  }
}
export default TableOfContent
