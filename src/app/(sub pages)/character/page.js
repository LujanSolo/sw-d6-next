import Form from '../../../components/character/Form.jsx';
import bg from '../../../../public/backgrounds/character-bg.jpg';
import Image from "next/image";

export default function Character() {
  return (
    <>
      <Image priority sizes="100vw" src={bg} alt='background image' className="-z-50 fixed w-full h-full object-cover object-center inset-0" />
    <Form />
    </>
  )
}

