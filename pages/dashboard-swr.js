import useSWR from 'swr'

const fetcher =  async () => {
    const response = await fetch('http://localhost:4000/dashboard') 
    data = await response.json()
    return data
}
function DashboardSWR() {
   const { data, error } =  useSWR('dashboard',fetcher)

   if (error) return 'An error has occured'
   if (!data) return 'Loading'

   return (
    <div>
            <h2>Dashboard</h2>
            <h2>Posts - {dashboardData.posts}</h2>
            <h2>Likes - {dashboardData.likes}</h2>
            <h2>Followers - {dashboardData.followers}</h2>
            <h2>Following - {dashboardData.following}</h2>
        </div>
   )

}
export default DashboardSWR