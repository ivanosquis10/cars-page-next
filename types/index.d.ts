import { MouseEventHandler } from 'react'

export interface CustomButtonProps {
  title: string
  containerStyles?: string
  handleClick?: MouseEventHandler<HTMLButtonElement>
  btnType?: 'button' | 'submit'
  textStyles?: string
  icon?: string
  isDisabled?: boolean
}

export type OptionsProps = {
  title: string
  value: string
}

export interface CustomFiltersProps {
  title: string
  options: OptionsProps[]
}

export interface CarsDetails {
    city_mpg:        number;
    class:           string;
    combination_mpg: number;
    cylinders:       number;
    displacement:    number;
    drive:           string;
    fuel_type:       string;
    highway_mpg:     number;
    make:            string;
    model:           string;
    transmission:    string;
    year:            number;
}

export interface CarDetailsProps {
  car: CarsDetails
  handleCloseModal: () => void
  modalOpen: boolean

}