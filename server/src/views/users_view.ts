import Users from "../models/Users";


export default {
  render(Users: Users) {
    return {
      id: Users.id,
      name: Users.name,
      email: Users.email,
      dataNasci: Users.dataNasci,
      cidade: Users.cidade,
      celular: Users.celular,
    };
  },

  renderMany(users: Users[]) {
    return users.map((users) => this.render(users));
  },
};