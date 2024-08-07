import axios from 'axios'

export const fetchCartas = async () => {
  try {
    const result = await axios('info/cartas.json')
    return result.data.cartas
  } catch (error) {
    console.error('Error fetching cartas', error)
    return []
  }
}
