import { useDispatch } from 'react-redux'
import { newAnecdoteAction } from '../reducers/anecdoteReducer'
import { setNotification, removeNotification } from '../reducers/notificationReducer'
import anecdotesService from '../services/anecdotes'

const AnecdoteForm = () => {
  const dispatch = useDispatch()

  const createNew = async (event) => {
    event.preventDefault()
    const content = event.target.content.value
    event.target.content.value = ''

    const newAnecdote = await anecdotesService.createNew(content)
    dispatch(newAnecdoteAction(newAnecdote))
    dispatch(setNotification(`You added '${content}'`))
    setTimeout(() => {
      dispatch(removeNotification())
    }, 5000)
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