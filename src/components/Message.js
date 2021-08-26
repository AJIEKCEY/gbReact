import './Message.css'

const Message = props => {
  return (
    <div className="Message">
      {props.value}
    </div>
  )
}

export default Message;