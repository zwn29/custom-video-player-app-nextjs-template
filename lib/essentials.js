export default async function getVideos () {
  const clientToken = 'xxxxxx'
  const res = await fetch(
    'https://api.linode.com/v4/object-storage/buckets/us-southeast-1/videos/object-list',
    {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + clientToken
      }
    }
  )
  const data = res.json()
  const videos = data.data
  return videos
}
