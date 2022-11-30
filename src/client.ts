import axios from "axios"

export const CG_BASE_URL = "https://api.coingecko.com/api/v3"

export const getPrice = async (symbol: string) => {
  return new Promise<number>((resolve, reject) => {
    axios
      .get(`${CG_BASE_URL}/simple/price?ids=${symbol}&vs_currencies=usd`)
      .then((res) => {
        resolve(res.data[symbol].usd)
      })
      .catch((err) => {
        reject(err)
      })
  })
}

export const getGeneralAssets = async () => {
  return new Promise<any>((resolve, reject) => {
    axios
      .get(`${CG_BASE_URL}/coins/list`)
      .then((res) => {
        resolve(res.data)
      })
      .catch((err) => {
        reject(err)
      })
  })
}