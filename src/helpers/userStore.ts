import { User } from "@/interfaces/user";

export class UserStore {
  private data: User[];

  constructor(initialData: User[]) {
    this.data = initialData;
  }

  //READ - listar todos los usuarios

  list(): User[] {
    console.log("GET /users");
    return this.data;
  }

  //READ - buscar un usuario por su nombre
  findByName(name: string): User | undefined {
    console.log(`GET /users/${name}`);
    return this.data.find((user) => user.name === name);
  }

  //CREATE - agregar un nuevo usuario
  create(user: User): void {
    console.log(`POST /users`, user);
    this.data.push(user);
  }

  //UPDATE - actualizar un usuario existente
  update(name: string, newData: Partial<User>): void {
    console.log(`POST /users`, name, newData);
    this.data = this.data.map((u) =>
      u.name === name ? { ...u, ...newData } : u
    );
  }

  //DELETE - Eliminar user

  delete(name:string): void{
    console.log("DELETE /users", name);
    this.data = this.data.filter((u) => u.name != name);
  }
}

