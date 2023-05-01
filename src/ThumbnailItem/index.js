import './index.css'

const ThumbnailItem = props => {
  const {imageDetails, toggleMatchImage} = props
  const {id, thumbnailUrl} = imageDetails

  const onClickThumbnail = () => {
    toggleMatchImage(id)
  }

  return (
    <li className="thumbnail-container">
      <button
        type="button"
        className="thumbnail-button"
        onClick={onClickThumbnail}
      >
        <img src={thumbnailUrl} alt="thumbnail" className="thumbnail-image" />
      </button>
    </li>
  )
}

export default ThumbnailItem
