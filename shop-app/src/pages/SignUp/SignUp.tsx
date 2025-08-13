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
    <form className="w-[50%] min-w-[820px] p-4 flex flex-col gap-7" onSubmit={handleSubmit(onSubmit)}>
      <h2 className="text-6xl">Sign Up</h2>
      
      <div className="grid grid-cols-2 gap-1">
        <label className="col-span-2" htmlFor="name">Name</label>
        <input id="name" className="p-3 w-96 border-4 border-white" defaultValue="Name" {...register("name", {required: true})}/>
        {errors.name && <span className="text-red-600">Name is required</span>}
      </div>
      
      <div className="grid grid-cols-2 gap-1 place-content-stretch">
        <label className="col-span-2" htmlFor="email">Email</label>
        <input id="email" className="p-3 w-96 border-4 border-white" defaultValue="Email" {...register("email", {required: true})}/>
        {errors.email && <span className="text-red-600">Email is required</span>}
      </div>
      
      <div className="grid grid-cols-2 gap-1">
        <label className="col-span-2" htmlFor="age">Age</label>
        <input id="age" min={0} className="p-3 w-96 border-4 border-white" type="number" {...register("age", {required: true})}/>
        {errors.age && <span className="text-red-600">Age is required</span>}
      </div>
      
      <div className="grid grid-cols-2 gap-1">
        <label className="col-span-2" htmlFor="password">Password</label>
        <input id="password" className="p-3 w-96 border-4 border-white" defaultValue="Password" type="password" {...register("password", {required: true})}/>
        {errors.password && <span className="text-red-600">Password is required</span>}
      </div>

      <input className="p-3 w-96 hover:bg-sky-300 rounded-xl" type="submit" />
    </form>
  );
};

export default SignUp;