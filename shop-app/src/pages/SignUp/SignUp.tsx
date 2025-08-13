import { useForm, type SubmitHandler } from "react-hook-form"

type Inputs = {
  name: string
  age: number
  email: string
  password: string
}


const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: {
      errors
    }
  } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)
  

  return (
    <form className="p-4 flex flex-col gap-7" onSubmit={handleSubmit(onSubmit)}>
      <h2 className="text-6xl">Sign Up</h2>

      <div className="flex flex-row gap-5">
        <input className="p-3 w-96 border-4 border-white" defaultValue="Name" {...register("name", {required: true})}/>
        {errors.name && <span className="text-red-600">Name is required</span>}
      </div>
      
      <div className="flex flex-row gap-5">
        <input className="p-3 w-96 border-4 border-white" defaultValue="Email" {...register("email", {required: true})}/>
        {errors.email && <span className="text-red-600">Email is required</span>}
      </div>
      
      <div className="flex flex-row gap-5">
        <input className="p-3 w-96 border-4 border-white" defaultValue="0" type="number" {...register("email", {required: true})}/>
        {errors.age && <span className="text-red-600">Age is required</span>}
      </div>
      
      <div className="flex flex-row gap-5">
        <input className="p-3 w-96 border-4 border-white" defaultValue="Password" type="password" {...register("password", {required: true})}/>
        {errors.password && <span className="text-red-600">Password is required</span>}
      </div>

      <input className="p-3 w-96 hover:bg-sky-300 rounded-xl" type="submit" />
    </form>
  );
};

export default SignUp;