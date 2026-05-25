import '../css/Bar.css'

export default function Bar({ children }) {
  return (
    <>
      <div class="bar">
        {children}
      </div>
    </>
  )
}