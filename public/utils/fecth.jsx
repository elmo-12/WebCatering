import axios from 'axios'

export const fetchCartas = async () => {
  try {
    const result = await axios('public/info/cartas.json')
    return result.data.cartas
  } catch (error) {
    console.error('Error fetching cartas', error)
    return []
  }
}
