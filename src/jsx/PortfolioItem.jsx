import '../css/PortfolioItem.css'

export default function PortfolioItem({ icon, date, role, organisation, id }) {
  return (
    <>
      <div id={id} class="portfolioitem">
        <img src={icon} class='icon' alt=''/>
        <div class="roleorganisationcontainer">
            <h5 class="role">
                {role}
            </h5>
            <h5 class="organisation">
                {organisation}
            </h5>
        </div>
        <h5 class="date">
            {date}
        </h5>
      </div>
    </>
  )
}