import './index.css'

const SearchItem = props => {
  const {historyList, deleteHistory} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyList

  const onClickDelete = () => {
    deleteHistory(id)
  }

  return (
    <li className="history_item_container">
      <div className="time_container">
        <p>{timeAccessed}</p>
      </div>

      <div className="history_website_container">
        <div className="history_logo_domain_container">
          <img src={logoUrl} alt="domain logo" className="domain_logo" />
          <p className="domain_title">{title}</p>
          <p className="domain_url">{domainUrl}</p>
        </div>

        <div className="delete_contatiner">
          <button
            type="button"
            className="delete_button"
            onClick={onClickDelete}
            data-testid="delete"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/delete-img.png "
              alt="delete"
            />
          </button>
        </div>
      </div>
    </li>
  )
}

export default SearchItem
