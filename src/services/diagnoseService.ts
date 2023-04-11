import diagnoses from "../data/diagnoses"
import { Diagnose } from "../types"

const getDiagnoses = (): Diagnose[] => {
  return diagnoses
}

const myService = {
  getDiagnoses
}

export default myService
