import { useDispatch } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const AnecdoteForm = () => {
  const dispatch = useDispatch()

  const createNew = async (event) => {
    event.preventDefault()
    const content = event.target.content.value
    event.target.content.value = ''

    dispatch(createAnecdote(content))
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