import { authenticateUser } from "@/helpers/auth";
import { useRouter } from "next/router";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

const Login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleChangeUser = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleClick = () => {
    if (name === "" || password === "") {
      toast.error("Error, Porfavor llene los espacios ", {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      // Llamar a la función de autenticación
      const user = authenticateUser(name, password);

      if (user) {
        toast.success("🦄 Wow so easy!", {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        console.log("Login correcto:", user);
        router.push("/dashboard");
      } else {
        toast.error("usuario o contraseña incorrectos", {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        setName("");
        setPassword("");
        console.log("Login fallido");
      }
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
      <ToastContainer />
    </div>
  );
};

export default Login;
