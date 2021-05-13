import useSwr from 'swr'

const baseUrl = 'https://restcountries.eu/rest/v2'
const fetcher = (...args) => fetch(...args).then((res) => res.json())

const useRequest = (path) => {
  if (!path) {
    throw new Error('Path is required')
  }

  const { data, error } = useSwr(`${baseUrl}/${path}`, fetcher)

  return { data, error }
}

export default useRequest
