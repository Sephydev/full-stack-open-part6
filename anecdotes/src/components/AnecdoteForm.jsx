import { useDispatch } from 'react-redux'
import { newAnecdoteAction } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const AnecdoteForm = () => {
  const dispatch = useDispatch()

  const createNew = (event) => {
    event.preventDefault()
    const content = event.target.content.value
    event.target.content.value = ''

    dispatch(newAnecdoteAction(content))
    dispatch(setNotification(`You added '${content}'`))
  }

  return (
    <form onSubmit={createNew}>
      <div>
        <input name="content" />
        <button>create</button>
      </div>
    </form>
  )
}

export default AnecdoteForm