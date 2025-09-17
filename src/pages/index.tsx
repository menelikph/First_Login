import { useState } from "react";
import { useRouter } from "next/router";
import { users } from "../helpers/utils";

const Login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleChangeUser = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleClick = () => {
    if (name === "" || password === "") {
      alert("Por favor ingresa usuario y contraseña");
    }
    
    /* Validar usuario y contraseña */
    const foundUser = users.find(
      (user) => user.name === name && user.password === password
    );

    if (foundUser) {
      console.log("Login correcto:", foundUser);
      router.push("/dashboard");
    } else {
      alert("Usuario o contraseña incorrectos");
      setName("");
      setPassword("");
      console.log("Login fallido");
    }


        /*const userFound = users.find(
      (item) => item.name === name && item.password === password
    );

    if (!userFound) {
      alert("Usuario o contraseña incorrectos");
      setName("");
      setPassword("");
      console.log("Login fallido");
      return;
    } else {
      console.log("Login correcto:", userFound);
      router.push("/dashboard");
    }*/

  };


  return (
    <div className="container">
      <h1>Mi app</h1>
      <h3>Ingresa usuario y contraseña</h3>

      <label>Usuario</label>
      <input
        type="text"
        value={name}
        onChange={handleChangeUser}
        placeholder="user"
      />

      <label>Contraseña</label>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="password"
      />

      <button onClick={handleClick}>Ingresar</button>
    </div>
  );
};

export default Login;
