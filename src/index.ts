interface IUser {
  id: number;
  name?: string;
}

const listUser = (): IUser[] => {
  //   return [
  //     { id: 1, name: "Nabin" },
  //     { id: 2, name: "John" },
  //     { id: 3, name: "Smith" },
  //   ];

  return [];
};

// const names = listUser()
//   .map((user) => user.name)
//   .filter((name) => !!name);

const names = listUser()
  .map((user) => user.name)
  .filter((name?: string): name is string => !!name);
export {};
