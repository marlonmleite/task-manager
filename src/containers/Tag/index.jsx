import PropTypes from 'prop-types'
import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import Grid from 'components/Grid'
import { Page, PageContent } from 'components/Page'
import { LoadingContent, LoadingRow } from 'components/Loading'
import FabButton from 'components/FabButton'
import Pagination from 'components/Pagination'
import { DeleteModal } from 'components/Modal'
import { actions } from './state/actions'
import { GridRow, ColumnId, ColumnName, PageTop, Title } from './styled'
import { MODAL_DELETE, MODAL_FORM } from './utils'
import CrudModal from './CrudModal'

class Tag extends Component {

  static defaultProps = {
    tags: [],
    loading: null,
    modalOpen: null,
    modalItem: null,
  }

  static propTypes = {
    tags: PropTypes.array,
    loading: PropTypes.string,
    loadTags: PropTypes.func.isRequired,
    pagination: PropTypes.object.isRequired,
    modalOpen: PropTypes.string,
    modalItem: PropTypes.object,
    openModal: PropTypes.func.isRequired,
    removeTag: PropTypes.func.isRequired,
  }

  componentDidMount() {
    this.loadTags()
  }

  loadTags = (page = 1) => this.props.loadTags({ page })

  closeModal = () => this.props.openModal(null)

  openCrudModal = tag => this.props.openModal(MODAL_FORM, tag)

  confirmDelete = tag => this.props.openModal(MODAL_DELETE, tag)

  deleteTag = ({ id }) => this.props.removeTag(id)

  renderItem = (tag) => {
    const { loading } = this.props
    const isLoading = loading === `${tag.id}`

    return (
      <Fragment>
        <GridRow>
          <ColumnId>
            <b>{tag.id}</b>
          </ColumnId>
          <ColumnName>
            {tag.name}
          </ColumnName>
        </GridRow>
        {isLoading && <LoadingRow />}
      </Fragment>
    )
  }

  renderContent() {
    const { tags } = this.props

    return (
      <Fragment>
        <PageTop>
          <Title>
              Lista de Tags
          </Title>
        </PageTop>
        <PageContent>
          <Grid
            items={tags}
            render={this.renderItem}
            onRemove={this.confirmDelete}
            onEdit={this.openCrudModal}
          />
        </PageContent>
      </Fragment>
    )
  }

  render() {
    const { loading, pagination, modalOpen, modalItem } = this.props
    const loadingTags = loading === 'tags'
    const loadingPagination = loading === 'pagination'
    const modalDeleteOpen = modalOpen === MODAL_DELETE
    const modalCrudOpen = modalOpen === MODAL_FORM

    return (
      <Fragment>
        <Page>
          {!loadingTags && this.renderContent()}
          <FabButton color="info" onClick={() => this.openCrudModal()} />
          {loadingTags && <LoadingContent />}
          {!loadingTags && (
            <Pagination
              page={pagination.page}
              hasMore={pagination.hasMore}
              onChange={this.loadTags}
              loading={loadingPagination}
            />
          )}
        </Page>
        {modalCrudOpen && <CrudModal onClose={this.closeModal} />}
        {modalDeleteOpen && (
          <DeleteModal
            labelKey="name"
            item={modalItem}
            onConfirm={this.deleteTag}
            onClose={this.closeModal}
          />
        )}
      </Fragment>
    )
  }

}

const mapProps = ({ tag }) => ({
  loading: tag.loading,
  tags: tag.tags,
  pagination: tag.pagination,
  modalOpen: tag.modal.open,
  modalItem: tag.modal.item,
})

const mapActions = {
  loadTags: actions.loadTags,
  openModal: actions.openModal,
  removeTag: actions.removeTag,
}

export default connect(mapProps, mapActions)(Tag)
