import patients from "../data/patients"
import { Patient, PatientWithoutSSN, NewPatient } from "../types"
import { v1 as uuid } from "uuid"

const getPatients = (): Patient[] => {
  return patients
}

const getPatientsWithoutSSN = (): PatientWithoutSSN[] => {
  return patients.map(({ id, name, dateOfBirth, gender, occupation }) => ({
    id, name, dateOfBirth, gender, occupation
  }))
}

const addPatient = (patient: NewPatient): Patient => {
  const newPatient = {
    id: uuid(),
    ...patient
  }

  patients.push(newPatient)
  return newPatient
}

const myService = {
  getPatients,
  getPatientsWithoutSSN,
  addPatient
}

export default myService
