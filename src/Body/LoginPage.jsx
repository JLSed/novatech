import LoginForm from "../Components/LoginForm"

const LoginPage = () => {
  return (
    <section className="bg-primary flex flex-col min-h-dvh">
      <div className="flex p-3">
        <h1 className="font-afacad font-bold text-3xl text-background">NovaTech</h1>
      </div>
      <div className="flex-1 flex justify-center">
        <LoginForm />
      </div>
    </section>
  )
}

export default LoginPage