export default function Home() {
  return (
    <div className="container mx-auto">
      <h1 className="text-4xl font-bold text-center">Hello World</h1>
      <h2 className="text-2xl font-bold text-center">
        To Upload File Need To Login First. If You Don't Have Account Then
        Create OR Login with Credential
      </h2>
      <br />
      <div className="flex flex-col justify-center">
        <h3 className="text-2xl font-bold text-center">
          Username :{" "}
          <span className="font-bold">shantanubombatkar2@gmail.com</span>
        </h3>
        <h3 className="text-2xl font-bold text-center">
          Password : <span className="font-bold">Password@123</span>
        </h3>
      </div>
    </div>
  );
}
