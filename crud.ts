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
  const createProfile = await prisma.profile.create({
    data: {
      bio: "Full stack developer",
      userId: 2,
    },
  });
  console.log("profileCreated", createProfile);
}

run();
