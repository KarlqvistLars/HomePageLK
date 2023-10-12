import Clock from '../components/Clock'

export default function Home() {
  return (
    <div className='container'>
      <div className="sloganFixed"><p>Work for a better tomorrow</p></div>
      <div style={{ paddingTop: "150px" }}>
        <Clock />
      </div>
      {/* <h2 className='copyright'>Copyright© Lars Karlqvist</h2> */}
    </div>
  )
}
