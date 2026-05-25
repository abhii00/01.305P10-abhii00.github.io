import '../css/Page.css'

export default function Page({ children, id }) {
  return (
    <>
      <div id={id} class="page">
        <div class="container">
          {children}
        </div>
      </div>
    </>
  )
}