export const Note = (props) => {
    const { content, date } = props;
    console.log({props})
    return (  
          <li>
            <p>{content}</p>
            <small>
              <time>{date}</time>
            </small>
          </li>
    )
  }