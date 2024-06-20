function ToDoListButton(props) {
  const { id, tasks } = props;
  const currentIndex = tasks.findIndex(item => item.id === id);
  const prevIndex = currentIndex - 1;
  const nextIndex = currentIndex + 1;
  
  const prevButton = tasks[prevIndex] !== undefined ? '👆' : '';
  const nextButton = tasks[nextIndex] !== undefined ? '👇' : '';

  return (
    <>
        <span><button onClick={() => props.move(currentIndex, prevIndex)}>{prevButton}</button></span>
        <span><button onClick={() => props.move(currentIndex, nextIndex)}>{nextButton}</button></span>
        <span><button onClick={() => props.remove(props.id)}>🗑️</button></span>
    </>
  )
}

export default ToDoListButton