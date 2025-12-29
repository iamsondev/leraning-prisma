import { prisma } from "./lib/prisma";

async function run() {
  // create user
  // const createUser = await prisma.user.create({
  //   data: {
  //     name: "Virat Kohli",
  //     email: "viratkohli@gmail.com",
  //   },
  // });
  // console.log("createdUser", createUser);
  // create post
  // const createPost = await prisma.post.create({
  //   data: {
  //     title: "Dream big-Work hard",
  //     authorId: 1,
  //   },
  // });
  // console.log("postCreated", createPost);
  // create profile
  // const createProfile = await prisma.profile.create({
  //   data: {
  //     bio: "Full stack developer",
  //     userId: 2,
  //   },
  // });
  // console.log("profileCreated", createProfile);
  // retrieved all user
  // const users = await prisma.user.findMany({
  //   // include: {
  //   //   posts: true,
  //   //   profile: true,
  //   // },
  //   select: {
  //     id: true,
  //     name: true,
  //     email: true,
  //     posts: true,
  //     profile: true,
  //   },
  // });
  // console.dir(users, { depth: Infinity });
  // update user
  // const updateUser = await prisma.profile.update({
  //   where: {
  //     userId: 2,
  //   },
  //   data: {
  //     bio: "Full stack developer at BMW",
  //     dateOfBirth: "2025-12-28T17:44:40.549Z",
  //   },
  //   select: {
  //     id: true,
  //     bio: true,
  //     user: {
  //       select: {
  //         name: true,
  //         email: true,
  //       },
  //     },
  //   },
  // });
  // console.log("update data", updateUser);

  // delete User
  // const deleteUser = await prisma.user.delete({
  //   where: {
  //     id: 1,
  //   },
  // });
  // console.log("deleted user", deleteUser);

  // retrieved specific id data

  // const getUserById = await prisma.user.findUnique({
  //   where: {
  //     id: 1,
  //   },
  //   include: {
  //     posts: true,
  //     profile: true,
  //   },
  // });
  // console.log("specific id", getUserById);

  //implement  of upsert
  const upsert = await prisma.user.upsert({
    where: {
      email: "viratkohli@gmail.com",
    },
    update: {
      name: "IamViratK",
    },
    create: {
      name: "IamViratK",
      email: "viratkohli@gmail.com",
    },
  });
  console.log(upsert);
}

run();
