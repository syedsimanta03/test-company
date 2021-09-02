import React, { useEffect, useState } from 'react'
import Table from './../components/table';

const Home = () => {
  const [data, setData] = useState([])
  const [loadingData, setLoadingData] = useState(false)

  useEffect(() => {
    fetchdata()
  }, [])
  // test 2 refetch
  const fetchdata = async () => {
    setLoadingData(true)
    try {
      const response = await fetch('https://randomuser.me/api/?results=20')
      const { results } = await response.json()
      console.log(results)
      // test 1 end
      setData(results)
      setLoadingData(false)
    } catch {
      console.log('Failed to fetch')
    }
  }

  return (
    <div>
      {!loadingData ? (
        data?.map((user) => 
        <Table key={user.login.uuid} {...user} />)
      ) : (
       <p>..loading</p>
      )}
       <button className='btn' onClick={() => fetchdata()}>Refresh Data</button>
    </div>
  )
}

export default Home
