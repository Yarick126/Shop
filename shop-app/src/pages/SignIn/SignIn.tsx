import { useForm, type SubmitHandler } from "react-hook-form"

type Inputs = {
  email: string
  password: string
}


const SignIn = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: {
      errors
    }
  } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

  console.log(watch("email"));
  

  return (
    <form className="w-[50%] min-w-[820px] p-4 flex flex-col gap-7" onSubmit={handleSubmit(onSubmit)}>
      <h2 className="text-6xl">Sign In</h2>
      <div className="grid grid-cols-2 gap-1">
        <label className="col-span-2" htmlFor="name">Name</label>
        <input id="name" className="p-3 w-96 border-4 border-white" defaultValue="Email" {...register("email", {required: true})}/>
        {errors.email && <span className="text-red-600">Email is required</span>}
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

export default SignIn;