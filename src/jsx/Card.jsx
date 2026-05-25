import '../css/Card.css'

export default function Card({ children, id }) {
  return (
    <>
      <div id={id} class="card">
        {children}
      </div>
    </>
  )
}