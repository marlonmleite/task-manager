import { put, call, takeLatest } from 'redux-saga/effects'
import Tag from 'providers/tag'
import { showSuccess, showError } from 'core/utils/toast'
import { actions, types } from './actions'

const msgError = 'Ocorreu um erro ao processar sua solicitação.'

const getPagination = (tags, page) => {
  const hasMore = tags.length >= Tag.getPageLimit()
  const pagination = {
    page,
    hasMore,
  }

  return pagination
}

export function* loadTags({ params }) {
  const isFetchMore = params.page > 1
  const loadingType = isFetchMore ? 'pagination' : 'tags'

  yield put(actions.setLoading(loadingType))

  try {
    const tags = yield call([Tag, Tag.all], params)

    if (isFetchMore) {
      yield put(actions.updateTags(tags))

      const pagination = yield getPagination(tags, params.page)

      yield put(actions.setPagination(pagination))
    } else {
      yield put(actions.setTags(tags))
    }
  } catch (errors) {
    yield showError(msgError)
  } finally {
    yield put(actions.setLoading(null))
  }
}

export function* removeTag({ id }) {
  yield put(actions.setLoading(`${id}`))

  try {
    yield call([Tag, Tag.delete], id)

    yield put(actions.deleteTag(id))

    yield showSuccess('A sua tag foi removida.')
  } catch (errors) {
    yield showError(msgError)
  } finally {
    yield put(actions.setLoading(null))
  }
}

export function* saveTag({ tag, loading = 'save' }) {
  const msg = `A sua tag foi ${tag.id ? 'atualizada' : 'criada'}.`

  yield put(actions.setLoading(loading))

  try {
    const saved = yield call([Tag, Tag.save], tag)

    yield put(actions.upsertTag(saved))

    yield put(actions.setModalItem(saved))

    yield showSuccess(msg)
  } catch (errors) {
    yield showError(msgError)
  } finally {
    yield put(actions.setLoading(null))
  }
}

export default function* root() {
  yield takeLatest(types.LOAD_TAGS, loadTags)
  yield takeLatest(types.REMOVE_TAG, removeTag)
  yield takeLatest(types.SAVE_TAG, saveTag)
}
