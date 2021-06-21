export default function WeezyCaption(props) {
  return (
    <div className={props.className ?? 'weezycaption'}>
      <p> { props.caption } </p>
    </div>
  )
}
