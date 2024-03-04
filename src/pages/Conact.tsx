import Input from "../components/Input";
import Button from "../components/Button";
import { useForm } from 'react-hook-form'
import { server_calls } from "../api/server"
import { useDispatch, useStore } from 'react-redux';
import { chooseModel, chooseEmail, chooseName, choosePhone } from "../redux/slice/RootSlice"; 

interface ContactFormProps {
  id? : string,
  data? : {}
}

const ContactForm = ( props : ContactFormProps) => {

  const { register, handleSubmit } = useForm({})
  const dispacth = useDispatch();
  const store = useStore();

  const onSubmit = ( data: any, event: any) => {
    console.log(`ID: ${props.id}`);
    
    if (props.id) {
      server_calls.update(props.id!, data)
      console.log(`Updated: ${ data } ${ props.id }`)
      setTimeout(() => {window.location.reload()}, 1000)
      event.target.reset()
    } else {
      //Use dispacth to update the state in our store
      dispacth(chooseName(data.name))
      dispacth(chooseEmail(data.email));
      dispacth(chooseModel(data.address));
      dispacth(choosePhone(data.phone_number));

      server_calls.create(store.getState())
      setTimeout(() => {window.location.reload()}, 1000)
    }
  }

  return (
    <div className="w">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="name"> Reason For conact</label>
          <Input {...register('name')} name='name' placeholder="" />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <Input {...register('email')} name='email' placeholder=""/>
        </div>
        <div>
          <label htmlFor="phone_number">Phone Number</label>
          <Input {...register('phone_number')} name='phone_number' placeholder="" />
          <div>
          <label htmlFor="model">Expalin how we can help!</label>
          <Input {...register('Model')} name='Model'  placeholder=""/>
        </div>
        </div>
        <div className="flex p-1">
          <Button className='flex justify-start m-3 bg-slate-300 p-2 rounded hover:bg-slate-800 text-white'>
            Submit
          </Button>
        </div>
      </form>
    </div>
  )
}

export default ContactForm